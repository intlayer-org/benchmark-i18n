import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const files = execSync('find apps-benchmark -name "measure-lib-size.ts"').toString().split('\n').filter(Boolean);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  
  if (content.includes('/\\.json$/')) {
    console.log(`Skipping ${file} - already has JSON exclusion`);
    continue;
  }

  console.log(`Processing ${file}...`);

  if (content.includes('additionalExternalPackages: [')) {
    // Add to existing array
    content = content.replace('additionalExternalPackages: [', 'additionalExternalPackages: [\n    /\\.json$/,');
  } else if (content.includes('measureLibSize({') || content.includes('measureSvelteLibSize({')) {
    // Add new property
    const pattern = content.includes('measureLibSize({') ? 'measureLibSize({' : 'measureSvelteLibSize({';
    content = content.replace(pattern, `${pattern}\n  additionalExternalPackages: [/\\.json$/],`);
  } else {
    console.log(`Could not find insertion point for ${file}`);
    continue;
  }

  fs.writeFileSync(file, content, 'utf-8');
}
