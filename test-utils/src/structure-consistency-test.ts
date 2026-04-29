import { type Page } from "@playwright/test";
import { DEFAULT_PAGES, DEFAULT_LOCALES } from "./pages-test";
import { getStructuralBlueprint } from "./structure-consistency";

const NAV_WAIT_UNTIL = "load" as const;
const GOTO_TIMEOUT_MS = 60_000;

/** Wait until lazy routes (React Suspense, etc.) have rendered real content, not fallbacks. */
async function waitForPageShell(page: Page): Promise<void> {
  await page.getByRole("heading", { level: 1 }).first().waitFor({
    state: "visible",
    timeout: GOTO_TIMEOUT_MS,
  });
}

export function registerStructureConsistencyTest(
  test: any,
  expect: any,
  group: string,
): void {
  test.describe(`Cross-App Structural Consistency - ${group}`, () => {
    for (const pageConfig of DEFAULT_PAGES) {
      for (const locale of DEFAULT_LOCALES) {
        test(`Match Reference App structure for [${locale}] - ${pageConfig.name}`, async ({
          page,
        }: {
          page: Page;
        }) => {
          const path = `${locale}${pageConfig.path === "/" ? "" : pageConfig.path}`;

          let baseBlueprint = "";
          try {
            const refBase = process.env.STRUCTURE_REFERENCE_BASE_URL?.replace(
              /\/$/,
              "",
            ).trim();
            const referenceTarget = refBase
              ? `${refBase}/${path}`
              : `${group}/${path}`;
            await page.goto(referenceTarget, {
              waitUntil: NAV_WAIT_UNTIL,
              timeout: GOTO_TIMEOUT_MS,
            });
            await waitForPageShell(page);
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
            await page.goto(`/${path}`, {
              waitUntil: NAV_WAIT_UNTIL,
              timeout: GOTO_TIMEOUT_MS,
            });
            await waitForPageShell(page);
            const currentHtml = await page.content();
            currentBlueprint = getStructuralBlueprint(currentHtml);
          } catch (err) {
            console.error(
              `Structure consistency: current app failed [${locale}] ${pageConfig.name}:`,
              err,
            );
            currentBlueprint = "__current_load_failed__";
          }

          expect(currentBlueprint).toBe(baseBlueprint);
        });
      }
    }
  });
}
