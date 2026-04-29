import fs from 'fs';
import path from 'path';

const localesDir = '/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-i18n-static/src/locales';
const paraglideApps = [
  { path: '/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-paraglide-js-static', framework: 'Solid' },
  { path: '/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-paraglide-js-static', framework: 'Svelte' }
];

function flattenObject(obj: any, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key in obj) {
    const newKey = prefix ? `${prefix}_${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(result, flattenObject(obj[key], newKey));
    } else if (Array.isArray(obj[key])) {
       obj[key].forEach((item: any, index: number) => {
         if (typeof item === 'string') {
           result[`${newKey}_${index}`] = item;
         } else {
           Object.assign(result, flattenObject(item, `${newKey}_${index}`));
         }
       });
    } else {
      result[newKey] = String(obj[key]);
    }
  }
  return result;
}

const en = JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8'));
const fr = JSON.parse(fs.readFileSync(path.join(localesDir, 'fr.json'), 'utf8'));

paraglideApps.forEach(app => {
  const flatEn = flattenObject(en);
  const flatFr = flattenObject(fr);
  
  // Custom overrides
  flatEn['footer_builtWith'] = `i18n Benchmark — Open-source project. Built with ${app.framework}, Vite & a client-side router.`;
  
  fs.writeFileSync(path.join(app.path, 'en.json'), JSON.stringify(flatEn, null, 2));
  fs.writeFileSync(path.join(app.path, 'fr.json'), JSON.stringify(flatFr, null, 2));
});

console.log('Successfully migrated, flattened and customized translations to Paraglide apps.');
