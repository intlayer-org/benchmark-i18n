import fs from 'fs';
import path from 'path';

const srcDir = '/Users/aymericpineau/Documents/benchmark-bloom/tanstack-start-react-static/use-intl-app/src/messages';
const destDir = '/Users/aymericpineau/Documents/benchmark-bloom/tanstack-start-react-static/lingui-app/src/locales';

function flatten(obj: any, prefix = ''): Record<string, string> {
  let result: Record<string, string> = {};
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

async function convert() {
  const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.ts'));

  for (const file of files) {
    const locale = file.replace('.ts', '');
    console.log(`Converting ${locale}...`);
    
    try {
      // Import the file. Bun supports this.
      const module = await import(path.join(srcDir, file));
      const messages = module.default;
      
      const flattened = flatten(messages);
      
      const dir = path.join(destDir, locale);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      
      fs.writeFileSync(
        path.join(dir, 'messages.json'),
        JSON.stringify(flattened, null, 2)
      );
    } catch (e) {
      console.error(`Failed to convert ${locale}:`, e);
    }
  }
}

convert();
