 
import { test, expect } from '@playwright/test';
import { DEFAULT_PAGES, DEFAULT_LOCALES } from './pages-test';
import { getStructuralBlueprint } from './structure-consistency';

// The URL of the base-app reference (e.g., http://localhost:3000)

export function registerStructureConsistencyTest(group: string): void {
  test.describe(`Cross-App Structural Consistency - ${group}`, () => {
    
    for (const pageConfig of DEFAULT_PAGES) {
      for (const locale of DEFAULT_LOCALES) {
        
        test(`Match Reference App structure for [${locale}] - ${pageConfig.name}`, async ({ page }) => {
          const path = `${locale}${pageConfig.path === '/' ? '' : pageConfig.path}`;
          
          let baseBlueprint = "";
          try {
            // 1. Get blueprint from the Reference App (Base)
            await page.goto(`${group}/${path}`, { waitUntil: 'networkidle' });
            const baseHtml = await page.content();
            baseBlueprint = getStructuralBlueprint(baseHtml);
          } catch (err) {
            console.error(
              `Structure consistency: reference app failed [${locale}] ${pageConfig.name}:`,
              err,
            );
            baseBlueprint = "__reference_load_failed__";
          }

          let currentBlueprint = "";
          try {
            // 2. Get blueprint from the Current App (Implementation)
            // page.goto('/') uses the baseURL defined in the local playwright.config.ts
            await page.goto(`/${path}`, { waitUntil: 'networkidle' });
            const currentHtml = await page.content();
            currentBlueprint = getStructuralBlueprint(currentHtml);
          } catch (err) {
            console.error(
              `Structure consistency: current app failed [${locale}] ${pageConfig.name}:`,
              err,
            );
            currentBlueprint = "__current_load_failed__";
          }

          // 3. Compare English to English / French to French
          expect(currentBlueprint).toBe(baseBlueprint);
        });
      }
    }
  });
}