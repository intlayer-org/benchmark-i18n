import fs from 'node:fs';
import path from 'node:path';

const srcDir = '../use-intl-app/src/messages';
const destDir = './messages';

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const lang = path.parse(file).name;
  let content = fs.readFileSync(path.join(srcDir, file), 'utf8');

  // Strip imports
  content = content.replace(/^import.*?;/gm, '');
  
  // Strip exports and types at the end
  content = content.replace(/export\s+default\s+\w+\s*;?\s*/g, '');
  content = content.replace(/export\s+type\s+Messages\s*=\s*typeof\s+\w+\s*;?\s*/g, '');
  
  // Strip variable declaration and type annotation
  content = content.replace(/const\s+\w+\s*(?::\s*\w+)?\s*=\s*/, '');
  
  content = content.trim();
  if (content.endsWith(';')) content = content.slice(0, -1);

  try {
     const obj = eval(`(${content})`);
     obj['$schema'] = "https://inlang.com/schema/inlang-message-format";
     fs.writeFileSync(path.join(destDir, `${lang}.json`), JSON.stringify(obj, null, 2));
     console.log(`Successfully converted ${lang}`);
  } catch (err) {
     console.error(`Failed to convert ${lang}:`, err);
  }
});
