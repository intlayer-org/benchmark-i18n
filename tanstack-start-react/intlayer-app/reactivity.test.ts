import fs from "node:fs";
import path from "node:path";
import { test, expect } from "@playwright/test";
import pkg from "./package.json" with { type: "json" };

const ITERATIONS = Number(process.env.ITERATIONS) || 5;

declare global {
  interface Window {
    __RENDER_METRICS__: Record<string, number[]>;
  }
}

test("Measure locale switch reactivity", async ({ page }) => {
  test.slow();

  const locale = test.info().project.name;
  const e2eResults: number[] = [];
  const reactProfilerResults: number[] = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      console.log(`[BROWSER ERROR]: ${msg.text()}`);
    }
  });

  // CDP throttling (1x = no slowdown — change to e.g. 4 for low-end simulation)
  const client = await page.context().newCDPSession(page);
  await client.send("Emulation.setCPUThrottlingRate", { rate: 1 });

  // Warm-up
  console.log(`[${locale}] WARM-UP: loading /en`);
  await page.goto("/en", { waitUntil: "networkidle" });

  for (let i = 1; i <= ITERATIONS; i++) {
    console.log(`[${locale}] ITERATION ${i}/${ITERATIONS}`);

    // Always start from /en for a consistent en→fr switch
    await page.goto("/en", { waitUntil: "networkidle" });

    // Clear React Profiler metrics accumulated from navigation above
    await page.evaluate(() => {
      window.__RENDER_METRICS__ = {};
    });

    // --- Solution 1: E2E (perceived reactivity) ---
    // Everything runs inside the browser to avoid Node ↔ browser IPC latency.
    // We observe the html[lang] attribute change as the DOM signal that the
    // locale switch completed (RootDocument re-rendered with new locale param).
    const e2eDuration = await page.evaluate((): Promise<number> => {
      return new Promise((resolve, reject) => {
        const start = performance.now();
        const htmlEl = document.documentElement;

        const observer = new MutationObserver(() => {
          if (htmlEl.lang === "fr") {
            observer.disconnect();
            resolve(performance.now() - start);
          }
        });

        observer.observe(htmlEl, {
          attributes: true,
          attributeFilter: ["lang"],
        });

        const select = document.querySelector<HTMLSelectElement>("select");
        if (!select) {
          reject(new Error("LocaleSwitcher <select> not found"));
          return;
        }

        // Programmatically set the select value and fire a native change event.
        // React 17+ delegates events to the root container and picks up native
        // change events, so this correctly triggers handleLocaleChange → navigate().
        const nativeValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLSelectElement.prototype,
          "value",
        )?.set;
        nativeValueSetter?.call(select, "fr");
        select.dispatchEvent(new Event("change", { bubbles: true }));

        setTimeout(() => {
          observer.disconnect();
          reject(new Error("E2E timeout: html[lang] did not change to 'fr'"));
        }, 5000);
      });
    });

    e2eResults.push(e2eDuration);
    console.log(`  E2E perceived reactivity:   ${e2eDuration.toFixed(2)}ms`);

    // --- Solution 2: React Profiler (internal render time) ---
    // Read the metrics that onRender() accumulated into window.__RENDER_METRICS__
    // during the locale switch triggered above.
    const metrics = await page.evaluate(() => window.__RENDER_METRICS__ ?? {});
    const rootUpdates: number[] = metrics["AppRoot"] ?? [];
    const totalRenderTime = rootUpdates.reduce((a, b) => a + b, 0);
    reactProfilerResults.push(totalRenderTime);
    console.log(
      `  React Profiler render time: ${totalRenderTime.toFixed(2)}ms (${rootUpdates.length} update phase(s))`,
    );
  }

  try {
    await client.detach();
  } catch (_) {}

  // --- Aggregate & save ---
  const avg = (arr: number[]) =>
    arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;

  const results = {
    locale,
    timestamp: new Date().toISOString(),
    iterations: ITERATIONS,
    e2e: {
      description:
        "Perceived reactivity: time from select change to html[lang] DOM update (ms)",
      raw: e2eResults,
      avg: avg(e2eResults),
      min: Math.min(...e2eResults),
      max: Math.max(...e2eResults),
    },
    reactProfiler: {
      description:
        "Internal React render time: sum of Profiler actualDuration for update phases (ms)",
      raw: reactProfilerResults,
      avg: avg(reactProfilerResults),
      min: Math.min(...reactProfilerResults),
      max: Math.max(...reactProfilerResults),
    },
  };

  console.log(`\n--- REACTIVITY RESULTS [${locale.toUpperCase()}] ---`);
  console.log(`E2E avg:            ${results.e2e.avg.toFixed(2)}ms`);
  console.log(`React Profiler avg: ${results.reactProfiler.avg.toFixed(2)}ms`);

  const resultsDir = path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "..",
    "results",
    pkg.name,
  );
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(resultsDir, `reactivity-${locale}.json`),
    JSON.stringify(results, null, 2),
  );
  console.log(
    `Results saved to: results/${pkg.name}/reactivity-${locale}.json\n`,
  );

  expect(e2eResults.length).toBe(ITERATIONS);
});
