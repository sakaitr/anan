import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BRAND_CSS = readFileSync(join(ROOT, 'templates', 'brand.css'), 'utf8');
const FONT_LINK =
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">';

const BRAND_NAME = 'ATRICARD';
const BRAND_URL = 'atricard.com';

const escapeHtml = (text) =>
  String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

/** `*vurgu*` → renkli kelime, `\n` → satır sonu */
const rich = (text) =>
  escapeHtml(text)
    .replace(/\*([\s\S]+?)\*/g, '<em>$1</em>')
    .replaceAll('\n', '<br>');

const CROSS_SVG =
  '<svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="19" fill="#0b1230" fill-opacity=".12"/><path d="M12 12l14 14M26 12L12 26" stroke="#0b1230" stroke-width="3.5" stroke-linecap="round"/></svg>';
const CHECK_SVG =
  '<svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="19" fill="#0b1230"/><path d="M11 19.5l5.5 5.5L27 14" stroke="#fff" stroke-width="3.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/** Satır sayısına göre başlangıç boyutu; genişliğe sığdırmayı FIT_SCRIPT yapar. */
const TITLE_SIZE_BY_LINE_COUNT = { 1: 176, 2: 172, 3: 152, 4: 124 };
const TITLE_SIZE_MIN = 96;

const pickTitleSize = (title, override) => {
  if (override) return override;
  const lineCount = title.split('\n').length;
  return TITLE_SIZE_BY_LINE_COUNT[lineCount] ?? TITLE_SIZE_MIN;
};

const FIT_SCRIPT = `<script>
window.fitHeadings = () => {
  document.querySelectorAll('h1').forEach((heading) => {
    heading.style.whiteSpace = 'nowrap';
    const maxWidth = heading.parentElement.clientWidth;
    let size = parseFloat(heading.style.fontSize);
    while (heading.scrollWidth > maxWidth && size > 44) {
      size -= 3;
      heading.style.fontSize = size + 'px';
    }
  });
};
</script>`;

const frame = ({ bg, kicker, counter, body, bodyClass = '' }) => `
  <div class="slide bg-${bg}">
    <div class="top">
      ${kicker ? `<div class="kicker">${escapeHtml(kicker)}</div>` : '<div></div>'}
      ${counter ? `<div class="counter">${counter}</div>` : ''}
    </div>
    <div class="body ${bodyClass}">${body}</div>
    <div class="foot"><div class="mark"><i></i>${BRAND_NAME}</div><div class="url">${BRAND_URL}</div></div>
  </div>`;

const title = (slide, fallbackSize) =>
  `<h1 style="font-size:${pickTitleSize(slide.title, slide.titleSize ?? fallbackSize)}px">${rich(slide.title)}</h1>`;

const TEMPLATES = {
  hook: (slide, ctx) =>
    frame({
      ...ctx,
      body: `${title(slide)}${slide.sub ? `<p class="sub">${rich(slide.sub)}</p>` : ''}${
        slide.chips
          ? `<div class="chips">${slide.chips
              .map((chip, index) => `<span class="chip c${index % 5}">${escapeHtml(chip)}</span>`)
              .join('')}</div>`
          : ''
      }`,
      bodyClass: slide.align === 'bottom' ? 'bottom' : '',
    }),

  compare: (slide, ctx) =>
    frame({
      ...ctx,
      body: `${title(slide, 108)}
        <div class="cols">
          <div class="col bad"><h3>${escapeHtml(slide.left.label)}</h3><ul>${slide.left.items
            .map((item) => `<li>${CROSS_SVG}<span>${escapeHtml(item)}</span></li>`)
            .join('')}</ul></div>
          <div class="col good"><h3>${escapeHtml(slide.right.label)}</h3><ul>${slide.right.items
            .map((item) => `<li>${CHECK_SVG}<span>${escapeHtml(item)}</span></li>`)
            .join('')}</ul></div>
        </div>`,
    }),

  list: (slide, ctx) =>
    frame({
      ...ctx,
      body: `${title(slide, slide.items.length >= 4 ? 92 : 108)}
        <div class="items ${slide.items.length >= 4 ? 'dense' : ''}">${slide.items
          .map(
            (item, index) => `<div class="item"><div class="num">${item.mark ?? index + 1}</div><div><h4>${escapeHtml(item.h)}</h4>${
              item.p ? `<p>${escapeHtml(item.p)}</p>` : ''
            }</div></div>`,
          )
          .join('')}</div>`,
    }),

  stat: (slide, ctx) =>
    frame({
      ...ctx,
      body: `<div class="stat-num">${escapeHtml(slide.number)}</div>
        <div class="stat-unit">${rich(slide.title)}</div>
        <p class="stat-cap">${rich(slide.caption)}</p>`,
    }),

  tiers: (slide, ctx) =>
    frame({
      ...ctx,
      body: `${title(slide, 124)}
        <div class="tiers">${slide.tiers
          .map(
            (tier) => `<div class="tier ${tier.highlight ? 'hl' : ''}"><b>${escapeHtml(tier.name)}</b><strong>${escapeHtml(tier.price)}</strong><span>${escapeHtml(tier.note)}</span></div>`,
          )
          .join('')}</div>`,
    }),

  cta: (slide, ctx) =>
    frame({
      ...ctx,
      body: `${title(slide)}${slide.sub ? `<p class="sub">${rich(slide.sub)}</p>` : ''}<div class="btn">${escapeHtml(
        slide.button ?? 'Ücretsiz başla →',
      )}</div>`,
    }),
};

/** Tek slide için tam HTML döner. */
export const renderSlideHtml = (slide, { index, total, kicker }) => {
  const template = TEMPLATES[slide.type];
  if (!template) throw new Error(`Bilinmeyen slide tipi: ${slide.type}`);
  const counter = total > 1 ? `${String(index + 1).padStart(2, '0')}/${String(total).padStart(2, '0')}` : '';
  const body = template(slide, {
    bg: slide.bg ?? 'blue',
    kicker: slide.kicker ?? kicker,
    counter,
  });
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8">${FONT_LINK}<style>${BRAND_CSS}</style></head><body>${body}${FIT_SCRIPT}</body></html>`;
};
