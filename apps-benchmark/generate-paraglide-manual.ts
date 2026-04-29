import fs from 'fs';
import path from 'path';

const paraglideApps = [
  '/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-solid-paraglide-js-static',
  '/Users/aymericpineau/Documents/benchmark-bloom/apps-benchmark/vite-svelte-paraglide-js-static'
];

paraglideApps.forEach(appDir => {
  const en = JSON.parse(fs.readFileSync(path.join(appDir, 'en.json'), 'utf8'));
  const fr = JSON.parse(fs.readFileSync(path.join(appDir, 'fr.json'), 'utf8'));

  const keys = Object.keys(en).filter(k => !k.startsWith('$'));

  // Generate runtime.ts
  const runtimeContent = `/* eslint-disable */
let currentLanguageTag = "en";
export const languageTag = () => currentLanguageTag;
export const setLanguageTag = (tag: string) => { currentLanguageTag = tag; };
export const setLocale = (tag: string) => { currentLanguageTag = tag; };
export const onSetLanguageTag = (cb: any) => {};
export const availableLanguageTags = ["en", "fr"] as const;
export const sourceLanguageTag = "en";
`;

  // Generate messages.ts with EVERYTHING
  let messagesContent = `/* eslint-disable */
import { languageTag } from './runtime';

const messages: any = {
  en: ${JSON.stringify(en, null, 2)},
  fr: ${JSON.stringify(fr, null, 2)}
};

`;

  keys.forEach(key => {
    messagesContent += `export const ${key} = () => messages[languageTag()]?.['${key}'] || messages['en']['${key}'];\n`;
    
    // Alias for common prefixes used in components without prefix
    if (key.startsWith('home_')) {
      const alias = key.replace('home_', '');
      messagesContent += `export const ${alias} = ${key};\n`;
    }
    if (key.startsWith('shared_')) {
      const alias = key.replace('shared_', '');
      messagesContent += `export const ${alias} = ${key};\n`;
    }
  });

  const outDir = path.join(appDir, 'src/paraglide');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outDir, 'runtime.ts'), runtimeContent);
  fs.writeFileSync(path.join(outDir, 'messages.ts'), messagesContent);

  console.log(`Generated SINGLE-FILE manual paraglide TS files with aliases for ${appDir}`);
});
