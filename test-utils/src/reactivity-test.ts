/**
 * reactivity-test.ts — Locale switch reactivity measurement
 *
 * WHAT THIS MEASURES
 * ──────────────────
 * How fast does the UI update when the user switches locale? Two complementary
 * signals are recorded per iteration:
 *
 *   E2E perceived reactivity
 *     Time from the moment the user interaction fires (native <select> change
 *     event) to the moment the browser finishes updating the DOM to reflect the
 *     new locale (html[lang] attribute change). This is the number the user
 *     actually experiences — it includes router navigation, React re-renders,
 *     and any async data fetching triggered by the locale change.
 *
 *   React Profiler internal render time
 *     The sum of React's own `actualDuration` measurements for every update
 *     phase that the AppRoot component goes through during the same locale
 *     switch. This isolates pure React rendering cost from network/IO latency
 *     and gives a lower-level view of how expensive the re-render tree is.
 *
 * WHY TWO METRICS
 * ───────────────
 * E2E time can be inflated by router work that is independent of the i18n
 * library (e.g. route matching, suspense boundaries). The Profiler metric
 * strips that away and shows how much the i18n layer itself costs React.
 * Comparing both lets us separate "slow router" from "slow i18n runtime".
 *
 * WHY EVERYTHING RUNS INSIDE page.evaluate()
 * ───────────────────────────────────────────
 * Measuring timing via Node ↔ browser IPC (e.g. checking the DOM after
 * `await page.click()`) introduces unpredictable latency from the CDP
 * protocol round-trip. By running the timer, the MutationObserver, and
 * the event dispatch all inside a single `page.evaluate()` call we stay
 * entirely within the browser's event loop and get sub-millisecond accuracy.
 *
 * WHY WE USE A NATIVE VALUE SETTER INSTEAD OF page.selectOption()
 * ─────────────────────────────────────────────────────────────────
 * Playwright's `selectOption()` fires synthetic events that React 18+ may
 * not pick up reliably in some configurations. Using the native HTMLSelectElement
 * value setter + a real `change` event replicates exactly what a real browser
 * user interaction produces, which React's event delegation handles correctly.
 *
 * WHY WE RESET __RENDER_METRICS__ BEFORE EACH ITERATION
 * ──────────────────────────────────────────────────────
 * The React Profiler `onRender` callback writes to `window.__RENDER_METRICS__`
 * (set up in the app's RootDocument). The initial page load also triggers
 * renders, which must be cleared before the timed locale switch so that only
 * the switch's render cost is captured.
 *
 * Usage in each app's reactivity.test.ts:
 *   import { registerReactivityTest } from "test-utils/reactivity-test";
 *   import pkg from "./package.json" with { type: "json" };
 *   registerReactivityTest({ appName: pkg.name });
 */

import fs from "node:fs";
import path from "node:path";
import { test, expect, type Page } from "@playwright/test";

// ─── Types ───────────────────────────────────────────────────────────────────

/** Configuration accepted by {@link registerReactivityTest}. */
export interface ReactivityTestConfig {
  /** Package name of the app under test — used to name the output JSON file. */
  appName: string;
  /**
   * Number of locale-switch iterations to average over.
   * More iterations reduce variance from JIT warm-up and GC pauses.
   * Can also be set via the `ITERATIONS` environment variable (config value
   * takes precedence when both are provided).
   * Default: 5
   */
  iterations?: number;
  /**
   * CDP CPU throttling multiplier (1 = real hardware speed, 4 = 4× slower).
   * Throttling can surface performance differences invisible on fast developer
   * machines but significant on mid-range devices.
   * Default: 1 (no throttling — baseline at real hardware speed)
   */
  cpuThrottleRate?: number;
  /**
   * Locale the app navigates to before each iteration to establish a consistent
   * starting state (e.g. always switching en → fr, never fr → fr).
   * Default: "en"
   */
  fromLocale?: string;
  /**
   * Target locale to switch to during the timed measurement.
   * Default: "fr"
   */
  toLocale?: string;
  /**
   * Subfolder name under `<repo-root>/results/` that groups results by
   * benchmark category, e.g. `"tanstack-start-react-static"`.
   * Produces: `<repo-root>/results/<benchmarkCategory>/<appName>/`
   */
  benchmarkCategory: string;
}

/** Aggregated statistics for a series of timing samples. */
interface TimingStats {
  /** Individual raw sample values in milliseconds. */
  raw: number[];
  /** Arithmetic mean across all samples. */
  avg: number;
  /** Minimum sample value. */
  min: number;
  /** Maximum sample value. */
  max: number;
}

// Extend the browser Window type to include the metrics object written by the
// app's React Profiler onRender callback.
declare global {
  interface Window {
    __RENDER_METRICS__: Record<string, number[]>;
  }
}

/** Prefer `load` over `networkidle` — the latter hangs on CI when long-lived connections stay open. */
const NAV_WAIT_UNTIL: "load" = "load";

/** Per-iteration E2E timeout (locale switch must finish within this window on slow runners). */
const E2E_LOCALE_SWITCH_TIMEOUT_MS = 15_000;

// ─── Browser-side measurement helpers ────────────────────────────────────────

/**
 * Measures the E2E duration of a single locale switch by running the entire
 * timing loop inside the browser to eliminate Node ↔ browser IPC latency.
 *
 * A MutationObserver on `html[lang]` is armed *before* the <select> event fires,
 * so there is no gap between the trigger and the start of observation.
 * The timer starts at the exact moment the observer is armed, and resolves the
 * moment the `lang` attribute changes to the target locale.
 *
 * The native HTMLSelectElement value setter is used instead of direct property
 * assignment (`select.value = …`) because React intercepts the setter via a
 * property descriptor on the prototype. Using the native setter ensures React's
 * synthetic event system correctly detects the value change and triggers navigation.
 *
 * @param page - Playwright Page to run the evaluation on.
 * @param targetLocale - Locale code the select should switch to.
 * @returns Elapsed milliseconds from event dispatch to html[lang] DOM update.
 */
const measureE2ELocaleSwitchDuration = async (
  page: Page,
  targetLocale: string,
): Promise<number> =>
  page.evaluate(
    ({
      targetLocaleCode,
      e2eTimeoutMs,
    }: {
      targetLocaleCode: string;
      e2eTimeoutMs: number;
    }): Promise<number> =>
      new Promise((resolve, reject) => {
        const startTime = performance.now();
        const htmlElement = document.documentElement;

        // html[lang] is updated by the router as part of RootDocument re-rendering
        // with the new locale. Its mutation is the clearest DOM signal that the
        // full locale switch (routing + i18n + React) has completed.
        const mutationObserver = new MutationObserver(() => {
          if (htmlElement.lang === targetLocaleCode) {
            mutationObserver.disconnect();
            resolve(performance.now() - startTime);
          }
        });

        mutationObserver.observe(htmlElement, {
          attributes: true,
          attributeFilter: ["lang"],
        });

        // Prefer the header switcher — some pages (e.g. settings) include other <select> nodes.
        const localeSelectElement =
          document.querySelector<HTMLSelectElement>("header select") ??
          document.querySelector<HTMLSelectElement>("select");
        if (!localeSelectElement) {
          reject(
            new Error(
              "LocaleSwitcher <select> not found (expected header select)",
            ),
          );
          return;
        }

        const nativeValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLSelectElement.prototype,
          "value",
        )?.set;
        nativeValueSetter?.call(localeSelectElement, targetLocaleCode);

        // The event must bubble so that React's root-container event delegation
        // picks it up and triggers the onChange → navigate() chain.
        localeSelectElement.dispatchEvent(
          new Event("change", { bubbles: true }),
        );

        // Safety valve: reject if the locale switch does not complete in time.
        setTimeout(() => {
          mutationObserver.disconnect();
          reject(
            new Error(
              `E2E timeout: html[lang] did not change to '${targetLocaleCode}'`,
            ),
          );
        }, e2eTimeoutMs);
      }),
    {
      targetLocaleCode: targetLocale,
      e2eTimeoutMs: E2E_LOCALE_SWITCH_TIMEOUT_MS,
    },
  );

/**
 * Reads the React Profiler render durations accumulated during the most recent
 * locale switch and returns the total time spent in update phases.
 *
 * `window.__RENDER_METRICS__["AppRoot"]` is an array of `actualDuration` values
 * written by the app's Profiler `onRender` callback, one entry per React commit
 * phase. Summing them gives the total render cost attributed to the AppRoot
 * subtree — which encompasses the entire component tree.
 *
 * Multiple values can occur when React batches the locale switch across several
 * synchronous commit phases (e.g. Suspense fallback → resolved).
 *
 * @param page - Playwright Page to read the metrics from.
 * @returns Total accumulated render time and the number of update phases recorded.
 */
const readReactProfilerRenderTime = async (
  page: Page,
): Promise<{ totalRenderTime: number; updatePhaseCount: number }> => {
  const renderMetrics = await page.evaluate(
    () => window.__RENDER_METRICS__ ?? {},
  );
  const appRootRenderDurations: number[] = renderMetrics["AppRoot"] ?? [];
  const totalRenderTime = appRootRenderDurations.reduce(
    (durationAccumulator, phaseDuration) => durationAccumulator + phaseDuration,
    0,
  );
  return { totalRenderTime, updatePhaseCount: appRootRenderDurations.length };
};

// ─── Iteration runner ─────────────────────────────────────────────────────────

/**
 * Runs a single locale-switch iteration: navigates back to the start locale,
 * resets Profiler metrics, triggers the switch, and records both measurements.
 *
 * The navigation back to `fromLocale` before each iteration ensures every
 * measurement starts from an identical state — same route, same React tree,
 * same Profiler baseline.
 *
 * @param page - Playwright Page (shared across all iterations).
 * @param iterationNumber - 1-based iteration index for logging.
 * @param totalIterations - Total expected iterations, for the progress label.
 * @param activeLocale - Locale label used in console output (project name).
 * @param fromLocaleUrl - URL to navigate to before the switch (e.g. "/en").
 * @param targetLocale - Locale code to switch to during measurement.
 * @returns E2E duration and total React Profiler render time for this iteration.
 */
const runSingleIteration = async (
  page: Page,
  iterationNumber: number,
  totalIterations: number,
  activeLocale: string,
  fromLocaleUrl: string,
  targetLocale: string,
): Promise<{ e2eDuration: number; profilerRenderTime: number }> => {
  console.log(
    `[${activeLocale}] ITERATION ${iterationNumber}/${totalIterations}`,
  );

  // Full navigation ensures router-level caches are also reset between runs.

  const response = await page.goto(fromLocaleUrl, {
    waitUntil: NAV_WAIT_UNTIL,
  });

  console.log("Status:", response?.status());
  console.log("URL:", response?.url());

  // Clear Profiler metrics written during the navigation above so that only
  // the locale-switch renders are counted in this iteration's measurement.
  await page.evaluate(() => {
    window.__RENDER_METRICS__ = {};
  });

  const e2eDuration = await measureE2ELocaleSwitchDuration(page, targetLocale);
  console.log(`  E2E perceived reactivity:   ${e2eDuration.toFixed(2)}ms`);

  let profilerRenderTime = 0;
  let updatePhaseCount = 0;
  try {
    const profiler = await readReactProfilerRenderTime(page);
    profilerRenderTime = profiler.totalRenderTime;
    updatePhaseCount = profiler.updatePhaseCount;
  } catch (readError) {
    const message =
      readError instanceof Error ? readError.message : String(readError);
    // Some stacks (e.g. Paraglide middleware + RSC) update `html[lang]` then
    // complete a navigation slightly later; the next evaluate can lose its context.
    if (message.includes("Execution context was destroyed")) {
      await page.waitForLoadState(NAV_WAIT_UNTIL);
      const profiler = await readReactProfilerRenderTime(page);
      profilerRenderTime = profiler.totalRenderTime;
      updatePhaseCount = profiler.updatePhaseCount;
    } else {
      throw readError;
    }
  }
  console.log(
    `  React Profiler render time: ${profilerRenderTime.toFixed(2)}ms (${updatePhaseCount} update phase(s))`,
  );

  return { e2eDuration, profilerRenderTime };
};

// ─── Aggregation ──────────────────────────────────────────────────────────────

/**
 * Computes descriptive statistics for a set of timing samples.
 *
 * @param samples - Raw timing values in milliseconds.
 * @returns Average, min, max, and the original raw array.
 */
const aggregateTimingSamples = (samples: number[]): TimingStats => ({
  raw: samples,
  avg:
    samples.length > 0
      ? samples.reduce(
          (sumAccumulator, sampleValue) => sumAccumulator + sampleValue,
          0,
        ) / samples.length
      : 0,
  min: samples.length > 0 ? Math.min(...samples) : 0,
  max: samples.length > 0 ? Math.max(...samples) : 0,
});

// ─── Reporting ────────────────────────────────────────────────────────────────

/**
 * Prints the aggregated reactivity results to the console.
 *
 * @param activeLocale - Locale label for the report header.
 * @param e2eStats - Aggregated E2E timing statistics.
 * @param profilerStats - Aggregated React Profiler timing statistics.
 */
const printReactivitySummary = (
  activeLocale: string,
  e2eStats: TimingStats,
  profilerStats: TimingStats,
): void => {
  console.log(`\n--- REACTIVITY RESULTS [${activeLocale.toUpperCase()}] ---`);
  console.log(`E2E avg:            ${e2eStats.avg.toFixed(2)}ms`);
  console.log(`React Profiler avg: ${profilerStats.avg.toFixed(2)}ms`);
};

// ─── Persistence ──────────────────────────────────────────────────────────────

/**
 * Writes the reactivity results to a JSON file in the shared results directory
 * (`<repo-root>/results/<benchmarkCategory>/<appName>/reactivity-<locale>.json`).
 *
 * @param resultsDirectory - Absolute path to the output directory (created if needed).
 * @param appName - Package name of the app under test.
 * @param activeLocale - Locale that was active during the measurement.
 * @param iterationCount - Number of iterations run.
 * @param e2eStats - Aggregated E2E timing statistics.
 * @param profilerStats - Aggregated React Profiler timing statistics.
 */
const saveReactivityResults = (
  resultsDirectory: string,
  activeLocale: string,
  iterationCount: number,
  e2eStats: TimingStats,
  profilerStats: TimingStats,
): void => {
  try {
    if (!fs.existsSync(resultsDirectory)) {
      fs.mkdirSync(resultsDirectory, { recursive: true });
    }

    const outputFilePath = path.join(
      resultsDirectory,
      `reactivity-${activeLocale}.json`,
    );

    fs.writeFileSync(
      outputFilePath,
      JSON.stringify(
        {
          locale: activeLocale,
          timestamp: new Date().toISOString(),
          iterations: iterationCount,
          e2e: {
            description:
              "Perceived reactivity: time from select change to html[lang] DOM update (ms)",
            ...e2eStats,
          },
          reactProfiler: {
            description:
              "Internal React render time: sum of Profiler actualDuration for update phases (ms)",
            ...profilerStats,
          },
        },
        null,
        2,
      ),
    );

    console.log(`Results saved to: ${outputFilePath}\n`);
  } catch (err) {
    console.error(
      `Failed to save reactivity results under ${resultsDirectory}:`,
      err,
    );
  }
};

// ─── Test registration ────────────────────────────────────────────────────────

/**
 * Registers the locale switch reactivity Playwright test for an app.
 *
 * Call this at the top level of your `reactivity.test.ts` file. The test is
 * parameterised by the Playwright project name (used as a locale label in the
 * output file name and console logs). Running it under multiple projects
 * measures reactivity independently for each locale.
 *
 * @param config - Test configuration for the app under test.
 */
export const registerReactivityTest = (config: ReactivityTestConfig): void => {
  const {
    appName,
    benchmarkCategory,
    cpuThrottleRate = 1,
    fromLocale = "en",
    toLocale = "fr",
  } = config;

  test("Measure locale switch reactivity", async ({ page }) => {
    test.slow(); // multiple iterations + navigation waits exceed the default timeout

    // The Playwright project name is used as a label in logs and output file names.
    const activeLocale = test.info().project.name;
    const iterationCount =
      config.iterations ?? (Number(process.env.ITERATIONS) || 5);

    const e2eDurations: number[] = [];
    const profilerRenderTimes: number[] = [];

    // Surface browser console errors in test output for easier diagnosis.
    page.on("console", (consoleMessage) => {
      if (consoleMessage.type() === "error") {
        console.log(`[BROWSER ERROR]: ${consoleMessage.text()}`);
      }
    });

    // CDP (Chrome DevTools Protocol) gives access to low-level browser APIs
    // not exposed via standard Playwright, such as CPU throttling.
    const cdpSession = await page.context().newCDPSession(page);
    await cdpSession.send("Emulation.setCPUThrottlingRate", {
      rate: cpuThrottleRate,
    });

    // Warm-up navigation: let the browser JIT-compile the app's JavaScript and
    // prime internal caches before timed iterations begin. Without this, the
    // first iteration is systematically slower than subsequent ones.
    console.log(`[${activeLocale}] WARM-UP: loading /${toLocale}`);
    await page.goto(`/${toLocale}`, { waitUntil: NAV_WAIT_UNTIL });

    for (
      let iterationIndex = 1;
      iterationIndex <= iterationCount;
      iterationIndex++
    ) {
      try {
        const { e2eDuration, profilerRenderTime } = await runSingleIteration(
          page,
          iterationIndex,
          iterationCount,
          activeLocale,
          `/${fromLocale}`,
          toLocale,
        );
        e2eDurations.push(e2eDuration);
        profilerRenderTimes.push(profilerRenderTime);
      } catch (iterationError) {
        console.error(
          `[${activeLocale}] Iteration ${iterationIndex}/${iterationCount} failed:`,
          iterationError,
        );
        throw iterationError;
      }
    }

    // Clean up the CDP session; ignore errors if the page was already closed.
    try {
      await cdpSession.detach();
    } catch (_detachError) {}

    const e2eStats = aggregateTimingSamples(e2eDurations);
    const profilerStats = aggregateTimingSamples(profilerRenderTimes);

    printReactivitySummary(activeLocale, e2eStats, profilerStats);

    // Results land in <repo-root>/results/<benchmarkCategory>/<appName>/.
    // From the app directory (tanstack-start-react/<app>/), two levels up
    // reaches the repo root.
    const resultsDirectory = path.resolve(
      process.cwd(),
      "..",
      "..",
      "results",
      benchmarkCategory,
      appName,
    );
    saveReactivityResults(
      resultsDirectory,
      activeLocale,
      iterationCount,
      e2eStats,
      profilerStats,
    );

    expect(e2eDurations.length).toBe(iterationCount);
  });
};
