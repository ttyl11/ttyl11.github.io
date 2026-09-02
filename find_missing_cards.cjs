const fs = require('fs');
const path = require('path');

const wikiDir = 'd:/slay/seer-wiki/docs/cards';
const srcDir  = 'd:/slay/mymod/seer001/src/Core/Models/Cards';

// 收集 wiki 所有 .md 文件的"文件名部分"（不含目录）
const wikiSlugs = new Set();
function scanWiki(dir, rel = '') {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    const r = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      scanWiki(full, r);
    } else if (entry.name.endsWith('.md') && !entry.name.startsWith('index')) {
      // 只取文件名部分，不含目录前缀
      const filename = path.basename(entry.name, '.md');
      wikiSlugs.add(filename.toLowerCase());
    }
  }
}
scanWiki(wikiDir);

console.log(`wiki 文件总数: ${wikiSlugs.size}`);

// PascalCase → snake_case
function toSlug(pascal) {
  return pascal
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toLowerCase();
}

function hasWiki(slug) {
  return wikiSlugs.has(slug.toLowerCase());
}

// 测试
for (const t of ['evening_wind_break', 'lone_despair_stab', 'spirit_activation', 'turtle']) {
  console.log(`  hasWiki("${t}") = ${hasWiki(t)}`);
}

// 收集源码卡牌
const srcCards = [];
function scanSrc(dir, rel = '') {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanSrc(full, `${rel}/${entry.name}`);
    } else if (entry.name.endsWith('.cs')
      && entry.name.startsWith('Seer')
      && !entry.name.includes('Power')
      && !entry.name.includes('Base')
      && !entry.name.includes('Hook')
      && !entry.name.includes('Tracker')
      && !entry.name.includes('Keyword')
      && !entry.name.includes('PPCardModel')) {
      const cls = entry.name.replace('.cs', '');
      const short = cls.startsWith('Seer') ? cls.slice(4) : cls;
      const slug = toSlug(short);
      srcCards.push({ class: cls, short, slug, file: `${rel}${entry.name}`, hasWiki: hasWiki(slug) });
    }
  }
}
scanSrc(srcDir);

const missing = srcCards.filter(c => !c.hasWiki);
const existing = srcCards.filter(c => c.hasWiki);

console.log(`\n源码卡牌类数: ${srcCards.length}`);
console.log(`wiki 已有:     ${existing.length}`);
console.log(`缺失:          ${missing.length}`);

console.log('\n=== 已有 wiki ===');
for (const c of existing) console.log(`  ${c.class} → ${c.slug}  (${c.file})`);

console.log('\n=== 缺失 wiki（前60） ===');
for (const c of missing.slice(0, 60)) {
  // 根据路径推断目录
  const folder = c.file.startsWith('/Curses') ? 'curses' : 'other';
  console.log(`  [${folder}] ${c.class} → ${c.slug}  (${c.file})`);
}
if (missing.length > 60) console.log(`  ... 还有 ${missing.length - 60} 个`);
