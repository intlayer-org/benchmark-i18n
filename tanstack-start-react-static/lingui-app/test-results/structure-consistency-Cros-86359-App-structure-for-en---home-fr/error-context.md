# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: structure-consistency.test.ts >> Cross-App Structural Consistency >> Match Reference App structure for [en] - home
- Location: ../../test-utils/src/structure-consistency-test.ts:21:9

# Error details

```
Error: REFERENCE_APP_URL must be defined to compare across groups.
```

# Test source

```ts
  1  |  
  2  | import { test, expect } from '@playwright/test';
  3  | import { DEFAULT_PAGES, DEFAULT_LOCALES } from './pages-test';
  4  | import { getStructuralBlueprint } from './structure-consistency';
  5  | 
  6  | // The URL of the base-app reference (e.g., http://localhost:3000)
  7  | const REFERENCE_URL = process.env.REFERENCE_APP_URL;
  8  | 
  9  | export function registerStructureConsistencyTest(): void {
  10 |   test.describe('Cross-App Structural Consistency', () => {
  11 |     
  12 |     test.beforeAll(() => {
  13 |       if (!REFERENCE_URL) {
> 14 |         throw new Error("REFERENCE_APP_URL must be defined to compare across groups.");
     |               ^ Error: REFERENCE_APP_URL must be defined to compare across groups.
  15 |       }
  16 |     });
  17 | 
  18 |     for (const pageConfig of DEFAULT_PAGES) {
  19 |       for (const locale of DEFAULT_LOCALES) {
  20 |         
  21 |         test(`Match Reference App structure for [${locale}] - ${pageConfig.name}`, async ({ page }) => {
  22 |           const path = `${locale}${pageConfig.path === '/' ? '' : pageConfig.path}`;
  23 |           
  24 |           // 1. Get blueprint from the Reference App (Base)
  25 |           await page.goto(`${REFERENCE_URL}/${path}`, { waitUntil: 'networkidle' });
  26 |           const baseHtml = await page.content();
  27 |           const baseBlueprint = getStructuralBlueprint(baseHtml);
  28 | 
  29 |           // 2. Get blueprint from the Current App (Implementation)
  30 |           // page.goto('/') uses the baseURL defined in the local playwright.config.ts
  31 |           await page.goto(`/${path}`, { waitUntil: 'networkidle' });
  32 |           const currentHtml = await page.content();
  33 |           const currentBlueprint = getStructuralBlueprint(currentHtml);
  34 | 
  35 |           // 3. Compare English to English / French to French
  36 |           expect(currentBlueprint).toBe(baseBlueprint);
  37 |         });
  38 |       }
  39 |     }
  40 |   });
  41 | }
```