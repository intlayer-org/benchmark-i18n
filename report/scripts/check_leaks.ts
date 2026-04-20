import fs from 'fs';
import path from 'path';

const files = [
  'summarize-vite-static.json',
  'summarize-vite-scoped-static.json',
  'summarize-vite-scoped-dynamic.json',
  'summarize-vite-dynamic.json',
  'summarize-tanstack-static.json',
  'summarize-tanstack-scoped-static.json',
  'summarize-tanstack-scoped-dynamic.json',
  'summarize-tanstack-dynamic.json',
  'summarize-nextjs-static.json',
  'summarize-nextjs-scoped-static.json',
  'summarize-nextjs-scoped-dynamic.json',
  'summarize-nextjs-dynamic.json'
];

const reportDir = '/Users/aymericpineau/Documents/benchmark-bloom/report/scripts';

const results: any[] = [];

for (const fileName of files) {
  const filePath = path.join(reportDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${fileName}`);
    continue;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const framework = data.meta.framework;
  const category = fileName.replace(`summarize-${framework}-`, '').replace('.json', '');

  for (const [libName, libData] of Object.entries(data.libs)) {
     if (libName === 'base') continue;
     const appData = (libData as any)[category];
     if (!appData || appData.overallStatus !== 'ok') continue;

     const localeLeak = appData.pageBundle.localeLeakAvgPct;
     const pageLeak = appData.pageBundle.otherPageContentLeakAvgPct;

     results.push({
       framework,
       category,
       libName,
       localeLeak,
       pageLeak
     });
  }
}

console.log('| Framework | Category | Library | Locale Leak % | Page Leak % |');
console.log('|-----------|----------|---------|---------------|-------------|');
for (const res of results) {
  console.log(`| ${res.framework} | ${res.category} | ${res.libName} | ${res.localeLeak?.toFixed(2)} | ${res.pageLeak?.toFixed(2)} |`);
}
