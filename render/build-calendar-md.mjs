import { writeFileSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const WEEKDAY_NAMES = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

const formatWeekday = (isoDate) => WEEKDAY_NAMES[new Date(`${isoDate}T00:00:00Z`).getUTCDay()];

const slideSummary = (slide) => {
  const text = slide.title ?? slide.number ?? '';
  return text.replaceAll('*', '').replaceAll('\n', ' ');
};

const renderPost = (post, dayNumber) => {
  const lines = [
    `## Gün ${dayNumber} — ${post.date} ${formatWeekday(post.date)} ${post.time} · ${post.format === 'reel' ? 'Reel' : 'Carousel'} · ${post.pillar}`,
    '',
    `**Hook:** ${post.hook}  `,
    `**Hedef:** ${post.goal}  `,
    `**Görsel:** \`outputs/atricard_${post.id}-${post.format}_v1/\``,
    '',
  ];
  if (post.script) {
    lines.push('**Reel senaryosu** (kapak görseli hazır; video çekimi/ekran kaydı gerekli)', '');
    lines.push('| Süre | Görüntü | Söylenen / yazı |', '|---|---|---|');
    for (const beat of post.script) lines.push(`| ${beat.sec} sn | ${beat.show} | ${beat.say} |`);
    lines.push('');
  } else {
    lines.push('**Slide’lar:** ' + post.slides.map((slide, index) => `${index + 1}) ${slideSummary(slide)}`).join(' → '), '');
  }
  lines.push('**Caption:**', '', '```', post.caption, '```', '', `**Hashtag:** ${post.hashtags.join(' ')}`, '');
  if (post.notes) lines.push(`> Not: ${post.notes}`, '');
  return lines.join('\n');
};

const main = async () => {
  const { calendar } = await import(pathToFileURL(join(ROOT, 'content/atricard/calendar.mjs')).href);
  const header = [
    '# Atricard — 4 Haftalık Instagram Takvimi',
    '',
    `Oluşturan: \`npm run calendar\` (kaynak: \`content/atricard/calendar.mjs\`). Bu dosyayı elle düzenleme.`,
    '',
    '`[DOĞRULA]` işaretli notlar yayından önce teyit edilmeli. Tüm ürün iddiaları atricard.com ve mevcut gönderilerden alındı.',
    '',
  ].join('\n');
  const body = calendar.map((post, index) => renderPost(post, index + 1)).join('\n---\n\n');
  writeFileSync(join(ROOT, 'content/atricard/calendar.md'), `${header}\n${body}`);
  console.log(`calendar.md yazıldı (${calendar.length} içerik)`);
};

main();
