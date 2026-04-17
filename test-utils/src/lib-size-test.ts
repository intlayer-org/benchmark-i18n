/**
 * lib-size-test.ts — i18n library overhead measurement via Vite
 *
 * Registers a single Playwright test that builds scripts/EmptyComponent.tsx
 * (wrapped by scripts/EmptyWrapper.tsx when present) with Vite in library mode
 * to measure the pure i18n runtime cost — provider + translation hook — with
 * no translation JSON in the bundle.
 *
 * The test is skipped for all non-"en" Playwright projects so it runs exactly
 * once per app regardless of how many locale projects are configured.
 *
 * Results are written to:
 *   <repo-root>/results/<benchmarkCategory>/<appName>/empty-component-size.json
 */

import { measureLibSize } from "./measure-components.js";

export interface LibSizeTestConfig {
  /** Package name of the app under test. */
  appName: string;
  /** Benchmark category folder, e.g. "nextjs-static". */
  benchmarkCategory: string;
  /**
   * Absolute path to the app root directory (use `import.meta.dirname` in the
   * test file). Required so the test finds scripts/EmptyComponent.tsx and the
   * Vite config regardless of where Playwright was invoked.
   */
  appDir: string;
  /** Extra packages to externalize in addition to the base set. */
  additionalExternalPackages?: (string | RegExp)[];
  /** Extra Vite or Babel plugins to apply during the build. */
  additionalPlugins?: any[];
  /** Skip loading the app's vite.config.ts. See MeasureConfig.skipViteConfig. */
  skipViteConfig?: boolean;
}

export const registerLibSizeTest = (
  test: any,
  config: LibSizeTestConfig,
): void => {
  const {
    appName,
    benchmarkCategory,
    appDir,
    additionalExternalPackages,
    additionalPlugins,
    skipViteConfig,
  } = config;

  test("Lib size measurement", async () => {
    test.slow();
    // Only one locale project needs to run this — the result is locale-agnostic.
    test.skip(
      test.info().project.name !== "en",
      "Lib size is locale-agnostic — measured once for the 'en' project only",
    );

    await measureLibSize({
      appName,
      benchmarkCategory,
      appDir,
      additionalExternalPackages,
      additionalPlugins,
      skipViteConfig,
    });
  });
};
