import fs from "node:fs";
import path from "node:path";
import { test, expect } from "@playwright/test";
import pkg from "./package.json" with { type: "json" };

const ITERATIONS = Number(process.env.ITERATIONS) || 3;
const BASE_PAGES = [
  "/",
  "/about",
  "/blog",
  "/careers",
  "/contact",
  "/faq",
  "/pricing",
  "/products",
  "/settings",
  "/team",
];

// Custom type for our performance results
interface BenchmarkResult {
  path: string;
  hydration: number[];
  renderTimes: Record<string, number[]>;
}

test("Benchmark Application Performance", async ({ page, baseURL }) => {
  console.log("--- DEBUG: RUNNING NEW VERSION ---");
  const locale = test.info().project.name;
  test.slow();

  // Normalize paths and ensure no double slashes
  const cleanBaseURL = baseURL?.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  const PAGES = BASE_PAGES.map((page) => `/${locale}${page}`);
  const allResults: Record<string, BenchmarkResult> = {};

  // 1. Initialize Chrome DevTools Protocol session for throttling
  const client = await page.context().newCDPSession(page);

  // 2. Throttle CPU (1x = no slowdown)
  await client.send("Emulation.setCPUThrottlingRate", { rate: 1 });

  // 3. Throttle Network (No throttling for now)
  await client.send("Network.emulateNetworkConditions", {
    offline: false,
    downloadThroughput: -1,
    uploadThroughput: -1,
    latency: 0,
  });

  // Enable console logging from the browser
  page.on("console", (msg) => {
    console.log(`[BROWSER ${msg.type()}]: ${msg.text()}`);
  });

  page.on("pageerror", (err) => {
    console.log(`[BROWSER ERROR]: ${err.message}`);
  });

  page.on("requestfailed", (request) => {
    console.log(
      `[BROWSER REQUEST FAILED]: ${request.url()} - ${request.failure()?.errorText}`,
    );
  });

  // Warm-up phase
  console.log(`WARM-UP PHASE [${locale}]: Loading pages...`);
  for (const pagePath of PAGES) {
    const url = `${cleanBaseURL}${pagePath}`;
    try {
      await page.goto(url, { waitUntil: "load" });
    } catch (e) {}
  }

  for (const pagePath of PAGES) {
    allResults[pagePath] = {
      path: pagePath,
      hydration: [],
      renderTimes: {},
    };
  }

  for (let i = 1; i <= ITERATIONS; i++) {
    console.log(`ITERATION ${i}/${ITERATIONS} [${locale}]`);

    for (const pagePath of PAGES) {
      const url = `${cleanBaseURL}${pagePath}`;
      console.log(`  Testing ${pagePath} (${url})... `);

      try {
        await page.goto(url, { waitUntil: "load" });

        // Manually poll for the hydration metric
        let hydrationFound = false;
        const startTime = Date.now();
        const timeout = 15000; // 15s timeout per page

        while (!hydrationFound && Date.now() - startTime < timeout) {
          const diagnostics = await page.evaluate(() => {
            return {
              measures: performance.getEntriesByType("measure").map((m) => ({
                name: m.name,
                duration: m.duration,
              })),
            };
          });

          console.log(
            `    (diagnostics: measures=${diagnostics.measures.length})`,
          );

          const hyd = diagnostics.measures.find(
            (m) => m.name === "hydration_duration",
          );
          if (hyd) {
            hydrationFound = true;
            for (const m of diagnostics.measures) {
              if (m.name === "hydration_duration") {
                allResults[pagePath].hydration.push(m.duration);
              } else {
                if (!allResults[pagePath].renderTimes[m.name]) {
                  allResults[pagePath].renderTimes[m.name] = [];
                }
                allResults[pagePath].renderTimes[m.name].push(m.duration);
              }
            }
            console.log(
              `    \u2705 Done (${diagnostics.measures.length} metrics)`,
            );
          } else {
            await new Promise((r) => setTimeout(r, 2000));
          }
        }

        const urlAtEnd = page.url();
        if (!hydrationFound) {
          console.log(`    \u274C Timeout waiting for hydration_duration`);
          console.log(`    [URL AT END]: ${urlAtEnd}`);
          const content = await page.content();
          console.log(`    [CONTENT SNIPPET]: ${content.slice(0, 500)}...`);
        }
      } catch (error: any) {
        console.log(`    \u274C Error: ${error.message}`);
      }
    }
  }

  // Cleanup CDP session
  try {
    await client.detach();
  } catch (e) {}

  // Calculate Summary
  const summary = Object.entries(allResults).map(([path, data]) => {
    const avgHyd =
      data.hydration.length > 0
        ? data.hydration.reduce((a: number, b: number) => a + b, 0) /
          data.hydration.length
        : 0;

    const renderStats: Record<string, string> = {};
    for (const [name, values] of Object.entries(data.renderTimes)) {
      const avg =
        (values as number[]).reduce((a: number, b: number) => a + b, 0) /
        (values as number[]).length;
      renderStats[name] = `${avg.toFixed(2)} ms`;
    }

    return {
      Page: path,
      "Avg Hydration": `${avgHyd.toFixed(2)} ms`,
      ...renderStats,
    };
  });

  console.log(`\n\n--- RESULTS [${locale.toUpperCase()}] ---`);
  console.table(summary);

  // Save results
  const resultsDir = path.resolve(
    path.dirname(new URL(import.meta.url).pathname),
    "..",
    "results",
    pkg.name,
  );
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
  }

  const outputPath = path.join(resultsDir, `pages-perf-${locale}.json`);
  fs.writeFileSync(
    outputPath,
    JSON.stringify(
      {
        locale,
        timestamp: new Date().toISOString(),
        results: allResults,
        summary,
      },
      null,
      2,
    ),
  );
  console.log(`Results saved to: ${outputPath}\n`);

  expect(summary.length).toBeGreaterThan(0);
});
