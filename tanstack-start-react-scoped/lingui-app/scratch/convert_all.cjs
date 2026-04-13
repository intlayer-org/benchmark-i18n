const fs = require('fs');
const path = require('path');

const srcDir = '/Users/aymericpineau/Documents/benchmark-bloom/tanstack-start-react-static/use-intl-app/src/messages';
const destDir = '/Users/aymericpineau/Documents/benchmark-bloom/tanstack-start-react-static/lingui-app/src/locales';

function flatten(obj, prefix = '') {
  let result = {};
  for (const key in obj) {
    const value = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(result, flatten(value, newKey));
    } else {
      result[newKey] = String(value);
    }
  }
  return result;
}

function parseTs(content) {
  // Remove imports
  let cleaned = content.replace(/^import[\s\S]*?;/m, '');
  // Remove type definition (if any)
  cleaned = cleaned.replace(/const \w+(?:: \w+)? = /m, '');
  // Remove export default
  cleaned = cleaned.replace(/export default \w+;/, '');
  // Remove trailing semicolon
  cleaned = cleaned.trim();
  if (cleaned.endsWith(';')) cleaned = cleaned.slice(0, -1);

  try {
    // Use eval with parentheses to treat it as an expression
    const obj = eval('(' + cleaned + ')');
    return obj;
  } catch (e) {
    console.error('Eval failed', e);
    // console.log('Cleaned content:', cleaned.substring(0, 100));
    return null;
  }
}

const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const locale = file.replace('.ts', '');
  console.log(`Converting ${locale}...`);
  
  const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
  const obj = parseTs(content);
  
  if (obj) {
    const flattened = flatten(obj);
    const dir = path.join(destDir, locale);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    fs.writeFileSync(
      path.join(dir, 'messages.json'),
      JSON.stringify(flattened, null, 2)
    );
    console.log(`Successfully converted ${locale}`);
  } else {
    console.error(`Failed to parse ${locale}`);
  }
});
