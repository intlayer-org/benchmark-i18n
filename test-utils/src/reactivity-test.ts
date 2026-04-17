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
import {
  type TimingStats,
  aggregateTimingSamples,
  NAV_WAIT_UNTIL,
} from "./timing-utils";

import { benchmarkBloomRoot } from "./repo-root";

// ─── Types ───────────────────────────────────────────────────────────────────

/** Configuration accepted by {@link registerReactivityTest}. */
export interface ReactivityTestConfig {
  /** Package name of the app under test — used to name the output JSON file. */
  appName: string;
  /**
   * Number of locale-switch iterations to average over.
   * Default: 5
   */
  iterations?: number;
  /**
   * CDP CPU throttling multiplier (1 = real hardware speed, 4 = 4× slower).
   * Default: 1
   */
  cpuThrottleRate?: number;
  /**
   * Locale to navigate to before each iteration to establish a consistent starting state.
   * Default: "en"
   */
  fromLocale?: string;
  /**
   * Target locale to switch to during the timed measurement.
   * Default: "fr"
   */
  toLocale?: string;
  /**
   * Subfolder name under `<repo-root>/results/` that groups results by benchmark category.
   */
  benchmarkCategory: string;
}

// Extend the browser Window type to include the metrics object written by the
// app's React Profiler onRender callback.
declare global {
  interface Window {
    __RENDER_METRICS__: Record<string, number[]>;
  }
}

/** Per-iteration E2E timeout (locale switch must finish within this window on slow runners). */
const E2E_LOCALE_SWITCH_TIMEOUT_MS = 15_000;

// ─── Browser-side measurement helpers ────────────────────────────────────────

/**
 * Measures the E2E duration of a single locale switch.
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

        localeSelectElement.dispatchEvent(
          new Event("change", { bubbles: true }),
        );

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

const readReactProfilerRenderTime = async (
  page: Page,
): Promise<{ totalRenderTime: number; updatePhaseCount: number }> => {
  const renderMetrics = await page.evaluate(
    () => window.__RENDER_METRICS__ ?? {},
  );
  const appRootRenderDurations: number[] = renderMetrics["AppRoot"] ?? [];
  const totalRenderTime = appRootRenderDurations.reduce(
    (acc, val) => acc + val,
    0,
  );
  return { totalRenderTime, updatePhaseCount: appRootRenderDurations.length };
};

// ─── Iteration runner ─────────────────────────────────────────────────────────

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

  const response = await page.goto(fromLocaleUrl, {
    waitUntil: NAV_WAIT_UNTIL,
  });

  console.log("Status:", response?.status());
  console.log("URL:", response?.url());

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

// ─── Reporting ────────────────────────────────────────────────────────────────

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
            description: "Perceived reactivity (ms)",
            ...e2eStats,
          },
          reactProfiler: {
            description: "Internal React render (ms)",
            ...profilerStats,
          },
        },
        null,
        2,
      ),
    );

    console.log(`Results saved to: ${outputFilePath}\n`);
  } catch (err) {
    console.error(`Failed to save reactivity results:`, err);
  }
};

// ─── Test registration ────────────────────────────────────────────────────────

export const registerReactivityTest = (config: ReactivityTestConfig): void => {
  const {
    appName,
    benchmarkCategory,
    cpuThrottleRate = 1,
    fromLocale = "en",
    toLocale = "fr",
  } = config;

  test("Measure locale switch reactivity", async ({ page }) => {
    test.slow();

    const activeLocale = test.info().project.name;
    const iterationCount =
      config.iterations ?? (Number(process.env.ITERATIONS) || 5);

    const e2eDurations: number[] = [];
    const profilerRenderTimes: number[] = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") console.log(`[BROWSER ERROR]: ${msg.text()}`);
    });

    const cdpSession = await page.context().newCDPSession(page);
    await cdpSession.send("Emulation.setCPUThrottlingRate", {
      rate: cpuThrottleRate,
    });

    console.log(`[${activeLocale}] WARM-UP: loading /${toLocale}`);
    await page.goto(`/${toLocale}`, { waitUntil: NAV_WAIT_UNTIL });

    for (let i = 1; i <= iterationCount; i++) {
      const { e2eDuration, profilerRenderTime } = await runSingleIteration(
        page,
        i,
        iterationCount,
        activeLocale,
        `/${fromLocale}`,
        toLocale,
      );
      e2eDurations.push(e2eDuration);
      profilerRenderTimes.push(profilerRenderTime);
    }

    try {
      await cdpSession.detach();
    } catch {}

    const e2eStats = aggregateTimingSamples(e2eDurations);
    const profilerStats = aggregateTimingSamples(profilerRenderTimes);

    printReactivitySummary(activeLocale, e2eStats, profilerStats);

    const resultsDirectory = path.join(
      benchmarkBloomRoot(process.cwd()),
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
