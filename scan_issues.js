const fs = require('fs');
const path = require('path');

const docsDir = 'd:/slay/seer-wiki/docs';

// 检查缺失数值参数章节的文件
function scanDir(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      scanDir(full, rel);
    } else if (entry.name.endsWith('.md') && !entry.name.startsWith('index')) {
      const content = fs.readFileSync(full, 'utf-8');
      if (!content.includes('## 数值参数')) {
        console.log('缺少数值参数:', rel);
      }
    }
  }
}

scanDir(docsDir);
