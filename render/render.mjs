import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { renderSlideHtml } from './slides.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SLIDE_WIDTH = 1080;
const SLIDE_HEIGHT = 1350;
const OUTPUT_VERSION = process.env.OUTPUT_VERSION ?? 'v1';
const PLAYWRIGHT_FALLBACK_PATHS = ['playwright', '/opt/node-tools/node_modules/playwright'];
const CHROMIUM_FALLBACK_PATH = '/opt/pw-browsers/chromium';

const require = createRequire(import.meta.url);

const loadPlaywright = () => {
  for (const modulePath of PLAYWRIGHT_FALLBACK_PATHS) {
    try {
      return require(modulePath);
    } catch {
      // sıradaki yolu dene
    }
  }
  throw new Error('playwright bulunamadı. `npm i -D playwright` çalıştır.');
};

const launchBrowser = async (chromium) => {
  try {
    return await chromium.launch();
  } catch {
    return chromium.launch({ executablePath: CHROMIUM_FALLBACK_PATH });
  }
};

/** Kullanım: node render/render.mjs [id,id,...]  (boşsa tüm takvim) */
const main = async () => {
  const { calendar } = await import(pathToFileURL(join(ROOT, 'content/atricard/calendar.mjs')).href);
  const wantedIds = process.argv[2]?.split(',');
  const posts = calendar.filter((post) => !wantedIds || wantedIds.includes(post.id));

  const { chromium } = loadPlaywright();
  const browser = await launchBrowser(chromium);
  const page = await browser.newPage({ viewport: { width: SLIDE_WIDTH, height: SLIDE_HEIGHT } });

  for (const post of posts) {
    const outputDirectory = join(ROOT, 'outputs', `atricard_${post.id}-${post.format}_${OUTPUT_VERSION}`);
    mkdirSync(outputDirectory, { recursive: true });
    const slides = post.slides;
    for (const [index, slide] of slides.entries()) {
      const html = renderSlideHtml(slide, { index, total: slides.length, kicker: post.pillar });
      await page.setContent(html, { waitUntil: 'networkidle' });
      await page.evaluate(async () => {
        await document.fonts.ready;
        window.fitHeadings();
      });
      const fileName = `${String(index + 1).padStart(2, '0')}.png`;
      await page.screenshot({ path: join(outputDirectory, fileName) });
    }
    console.log(`${post.id}: ${slides.length} slide → ${outputDirectory}`);
  }
  await browser.close();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
