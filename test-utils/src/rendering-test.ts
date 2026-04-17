/**
 * rendering-test.ts — Initial page load & SSR hydration measurement
 *
 * WHY THIS TEST EXISTS (separate from reactivity-test)
 * ─────────────────────────────────────────────────────
 * The reactivity test measures how fast the UI responds *after* it is already
 * loaded (locale switch latency in a running SPA). This test measures how fast
 * the page *first* appears and becomes interactive — a completely different
 * cost center that is dominated by SSR, bundle size, and hydration overhead.
 *
 * An i18n library can be cheap to switch (fast reactivity) but still penalize
 * startup time through:
 *   - Large translation bundles included in the initial JS payload
 *   - Expensive synchronous parsing/compilation of message formats at hydration
 *   - Extra React render passes introduced by provider initialization
 *
 * Separating these two benchmarks lets us attribute performance differences
 * accurately: "Library A has faster locale switching but slower first load."
 *
 * WHAT THIS MEASURES (3 complementary signals)
 * ─────────────────────────────────────────────
 *
 *   1. E2E Page Load  —  `PerformanceNavigationTiming.duration`
 *      The browser's own measure of the full navigation lifecycle: starts when
 *      the navigation begins and ends at the `load` event (all sub-resources
 *      including deferred scripts are loaded). This is the wall-clock time a
 *      user would perceive waiting for the page to be fully ready.
 *      Source: `performance.getEntriesByType("navigation")[0].duration`
 *
 *   2. Hydration Duration  —  custom Performance marks
 *      Time spent exclusively in React's hydration phase on the client.
 *      The app's RootDocument sets a `performance.mark("hydration_start")`
 *      in an inline script (before any React executes), and a
 *      `performance.mark("hydration_end")` inside the first `useEffect`.
 *      The delta is the hydration cost attributable to the i18n library's
 *      provider trees, context setup, and any synchronous translation loading
 *      done before the first paint is committed.
 *      A value of 0ms means the app does not instrument these marks — check
 *      that `recordHydrationDuration()` is called in the root component.
 *
 *   3. React Mount Time  —  React Profiler `actualDuration` (mount phase)
 *      The time React itself spent building the initial component tree,
 *      isolated from network and script-parse costs. This comes from the
 *      React Profiler `onRender` callback (writing to `window.__RENDER_METRICS__`)
 *      and captures only the *first* render commit (phase === "mount").
 *      A value of 0ms means the Profiler is not wrapping <AppRoot> or the
 *      `onRenderCallback` is not wired up — check `browser-metrics.ts`.
 *
 * WHY WE NAVIGATE TO about:blank BETWEEN ITERATIONS
 * ──────────────────────────────────────────────────
 * If we call `page.goto(url)` when already on that URL, the browser may
 * serve from the disk/memory cache and skip real network/parse work.
 * Navigating to `about:blank` first forces a clean slate so every iteration
 * is a genuine cold-start load, giving consistent and comparable numbers.
 *
 * WHY WE USE A WARM-UP ITERATION
 * ──────────────────────────────
 * The very first load after the preview server starts may be slower due to
 * server cold start, OS file-system cache warming, and V8 JIT kick-in.
 * The warm-up navigation lets these stabilise before timed measurements begin.
 *
 * Usage in each app's rendering.test.ts:
 *   import { registerRenderingTest } from "test-utils/rendering-test";
 *   import pkg from "./package.json" with { type: "json" };
 *   registerRenderingTest({ appName: pkg.name, benchmarkCategory: "..." });
 */

import fs from "node:fs";
import path from "node:path";
import { test, expect, type Page } from "@playwright/test";
import { benchmarkBloomRoot } from "./repo-root";
import {
  type TimingStats,
  aggregateTimingSamples,
  NAV_WAIT_UNTIL,
} from "./timing-utils";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface RenderingTestConfig {
  /** Package name of the app under test — used to name the output JSON file. */
  appName: string;
  /**
   * Number of full-page-load iterations to average over.
   * More iterations reduce variance from JIT warm-up and GC pauses.
   * Default: 5
   */
  iterations?: number;
  /**
   * CDP CPU throttling multiplier (1 = real hardware speed, 4 = 4× slower).
   * Default: 1
   */
  cpuThrottleRate?: number;
  /**
   * Locale of the page to load during measurement.
   * Default: "fr" (measures a non-default locale to capture translation load cost)
   */
  locale?: string;
  /**
   * Subfolder under `<repo-root>/results/` grouping results by benchmark category.
   */
  benchmarkCategory: string;
}

// ─── Browser Window type augmentation ────────────────────────────────────────

declare global {
  interface Window {
    __RENDER_METRICS__: Record<string, number[]>;
  }
}

// ─── Browser-side measurement helper ─────────────────────────────────────────

/**
 * Reads all three rendering metrics from the browser's Performance API and
 * the app's injected `window.__RENDER_METRICS__` object.
 *
 * Must be called *after* `waitUntil: "load"` so that:
 *   - The navigation entry is finalised
 *   - The `useEffect` that sets `hydration_end` has run
 *   - The Profiler `onRender` callback has fired for the mount phase
 */
const readRenderingMetrics = async (
  page: Page,
): Promise<{
  navigationDuration: number;
  hydrationDuration: number;
  mountRenderTime: number;
}> => {
  return page.evaluate(() => {
    // 1. E2E page load — browser-native measure, always available
    const navEntry = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;
    const navigationDuration = navEntry ? navEntry.duration : 0;

    // 2. Hydration duration — only available if the app calls recordHydrationDuration()
    //    from test-utils/browser-metrics inside its root useEffect.
    const hydrationEntry = performance.getEntriesByName(
      "hydration_duration",
    )[0];
    const hydrationDuration = hydrationEntry ? hydrationEntry.duration : 0;

    // 3. React Profiler mount time — only available if the app wraps <AppRoot>
    //    with <Profiler id="AppRoot" onRender={onRenderCallback}>.
    //    We take index [0] since mount is always the first entry.
    const renderMetrics = window.__RENDER_METRICS__ || {};
    const appRootRenderDurations = renderMetrics["AppRoot"] || [];
    const mountRenderTime = appRootRenderDurations[0] || 0;

    return { navigationDuration, hydrationDuration, mountRenderTime };
  });
};

// ─── Iteration runner ─────────────────────────────────────────────────────────

const runSingleIteration = async (
  page: Page,
  iterationNumber: number,
  totalIterations: number,
  activeLocale: string,
  targetUrl: string,
): Promise<{
  navigationDuration: number;
  hydrationDuration: number;
  mountRenderTime: number;
}> => {
  console.log(
    `[${activeLocale}] ITERATION ${iterationNumber}/${totalIterations}`,
  );

  // Navigate to about:blank first to guarantee a true cold-start load.
  // Without this, the browser may replay the previous navigation from cache.
  await page.goto("about:blank");

  const response = await page.goto(targetUrl, { waitUntil: NAV_WAIT_UNTIL });

  console.log(`  Status: ${response?.status()} — ${response?.url()}`);

  const metrics = await readRenderingMetrics(page);

  // Log each metric with a note if it reads 0 (likely means the app is missing
  // the required instrumentation hooks).
  const hydrationNote =
    metrics.hydrationDuration === 0
      ? " ⚠️  (0 = recordHydrationDuration() not called or mark missing)"
      : "";
  const mountNote =
    metrics.mountRenderTime === 0
      ? " ⚠️  (0 = <Profiler id=\"AppRoot\"> or onRenderCallback not wired)"
      : "";

  console.log(
    `  E2E Page Load (nav.duration):  ${metrics.navigationDuration.toFixed(2)}ms`,
  );
  console.log(
    `  Hydration (perf mark delta):   ${metrics.hydrationDuration.toFixed(2)}ms${hydrationNote}`,
  );
  console.log(
    `  React Mount (Profiler mount):  ${metrics.mountRenderTime.toFixed(2)}ms${mountNote}`,
  );

  return metrics;
};

// ─── Reporting ────────────────────────────────────────────────────────────────

const printRenderingSummary = (
  activeLocale: string,
  navStats: TimingStats,
  hydrationStats: TimingStats,
  mountStats: TimingStats,
): void => {
  console.log(`\n--- RENDERING RESULTS [${activeLocale.toUpperCase()}] ---`);
  console.log(
    `E2E Page Load avg:   ${navStats.avg.toFixed(2)}ms  (min: ${navStats.min.toFixed(2)}  max: ${navStats.max.toFixed(2)})`,
  );
  console.log(
    `Hydration avg:       ${hydrationStats.avg.toFixed(2)}ms  (min: ${hydrationStats.min.toFixed(2)}  max: ${hydrationStats.max.toFixed(2)})`,
  );
  console.log(
    `React Mount avg:     ${mountStats.avg.toFixed(2)}ms  (min: ${mountStats.min.toFixed(2)}  max: ${mountStats.max.toFixed(2)})`,
  );
};

// ─── Persistence ──────────────────────────────────────────────────────────────

const saveRenderingResults = (
  resultsDirectory: string,
  activeLocale: string,
  iterationCount: number,
  navStats: TimingStats,
  hydrationStats: TimingStats,
  mountStats: TimingStats,
): void => {
  try {
    if (!fs.existsSync(resultsDirectory)) {
      fs.mkdirSync(resultsDirectory, { recursive: true });
    }

    const outputFilePath = path.join(
      resultsDirectory,
      `rendering-${activeLocale}.json`,
    );

    fs.writeFileSync(
      outputFilePath,
      JSON.stringify(
        {
          locale: activeLocale,
          timestamp: new Date().toISOString(),
          iterations: iterationCount,
          e2ePageLoad: {
            description:
              "PerformanceNavigationTiming.duration — full page load wall-clock time including sub-resources (ms)",
            ...navStats,
          },
          hydration: {
            description:
              "performance.measure('hydration_duration') — time between hydration_start mark (inline script) and hydration_end mark (useEffect) (ms). 0 means app is not instrumented.",
            ...hydrationStats,
          },
          reactMount: {
            description:
              "React Profiler actualDuration for the mount phase of <AppRoot>. 0 means Profiler is not wired up (ms).",
            ...mountStats,
          },
        },
        null,
        2,
      ),
    );

    console.log(`Results saved to: ${outputFilePath}\n`);
  } catch (err) {
    console.error(`Failed to save rendering results:`, err);
  }
};

// ─── Test registration ────────────────────────────────────────────────────────

/**
 * Registers the page rendering Playwright test for an app.
 *
 * Call this at the top level of your `rendering.test.ts` file.
 * The Playwright project name is used as the locale label in output files.
 */
export const registerRenderingTest = (config: RenderingTestConfig): void => {
  const {
    appName,
    benchmarkCategory,
    cpuThrottleRate = 1,
    locale = "fr",
  } = config;

  test("Measure initial page rendering performance", async ({ page }) => {
    test.slow(); // multiple cold-start navigations can take time

    const activeLocale = test.info().project.name;
    const iterationCount =
      config.iterations ?? (Number(process.env.ITERATIONS) || 5);

    const navDurations: number[] = [];
    const hydrationDurations: number[] = [];
    const mountRenderTimes: number[] = [];

    // Surface browser console errors for easier diagnosis
    page.on("console", (msg) => {
      if (msg.type() === "error")
        console.log(`[BROWSER ERROR]: ${msg.text()}`);
    });

    const cdpSession = await page.context().newCDPSession(page);
    await cdpSession.send("Emulation.setCPUThrottlingRate", {
      rate: cpuThrottleRate,
    });

    // Warm-up: let the server, OS caches, and V8 JIT warm up before measuring
    console.log(`[${activeLocale}] WARM-UP: loading /${locale}`);
    await page.goto(`/${locale}`, { waitUntil: NAV_WAIT_UNTIL });

    for (let i = 1; i <= iterationCount; i++) {
      const metrics = await runSingleIteration(
        page,
        i,
        iterationCount,
        activeLocale,
        `/${locale}`,
      );
      navDurations.push(metrics.navigationDuration);
      hydrationDurations.push(metrics.hydrationDuration);
      mountRenderTimes.push(metrics.mountRenderTime);
    }

    try {
      await cdpSession.detach();
    } catch {}

    const navStats = aggregateTimingSamples(navDurations);
    const hydrationStats = aggregateTimingSamples(hydrationDurations);
    const mountStats = aggregateTimingSamples(mountRenderTimes);

    printRenderingSummary(activeLocale, navStats, hydrationStats, mountStats);

    const resultsDirectory = path.join(
      benchmarkBloomRoot(process.cwd()),
      "results",
      benchmarkCategory,
      appName,
    );

    saveRenderingResults(
      resultsDirectory,
      activeLocale,
      iterationCount,
      navStats,
      hydrationStats,
      mountStats,
    );

    expect(navDurations.length).toBe(iterationCount);
  });
};
