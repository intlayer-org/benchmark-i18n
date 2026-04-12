# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reactivity.test.ts >> Measure locale switch reactivity
- Location: ../../test-utils/src/reactivity-test.ts:395:3

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4173/en
Call log:
  - navigating to "http://localhost:4173/en", waiting until "networkidle"

```

# Test source

```ts
  158 |           }
  159 |         });
  160 | 
  161 |         mutationObserver.observe(htmlElement, {
  162 |           attributes: true,
  163 |           attributeFilter: ["lang"],
  164 |         });
  165 | 
  166 |         const localeSelectElement =
  167 |           document.querySelector<HTMLSelectElement>("select");
  168 |         if (!localeSelectElement) {
  169 |           reject(new Error("LocaleSwitcher <select> not found"));
  170 |           return;
  171 |         }
  172 | 
  173 |         const nativeValueSetter = Object.getOwnPropertyDescriptor(
  174 |           window.HTMLSelectElement.prototype,
  175 |           "value",
  176 |         )?.set;
  177 |         nativeValueSetter?.call(localeSelectElement, targetLocaleCode);
  178 | 
  179 |         // The event must bubble so that React's root-container event delegation
  180 |         // picks it up and triggers the onChange → navigate() chain.
  181 |         localeSelectElement.dispatchEvent(
  182 |           new Event("change", { bubbles: true }),
  183 |         );
  184 | 
  185 |         // Safety valve: reject if the locale switch does not complete within 5 s.
  186 |         setTimeout(() => {
  187 |           mutationObserver.disconnect();
  188 |           reject(
  189 |             new Error(
  190 |               `E2E timeout: html[lang] did not change to '${targetLocaleCode}'`,
  191 |             ),
  192 |           );
  193 |         }, 5000);
  194 |       }),
  195 |     { targetLocaleCode: targetLocale },
  196 |   );
  197 | 
  198 | /**
  199 |  * Reads the React Profiler render durations accumulated during the most recent
  200 |  * locale switch and returns the total time spent in update phases.
  201 |  *
  202 |  * `window.__RENDER_METRICS__["AppRoot"]` is an array of `actualDuration` values
  203 |  * written by the app's Profiler `onRender` callback, one entry per React commit
  204 |  * phase. Summing them gives the total render cost attributed to the AppRoot
  205 |  * subtree — which encompasses the entire component tree.
  206 |  *
  207 |  * Multiple values can occur when React batches the locale switch across several
  208 |  * synchronous commit phases (e.g. Suspense fallback → resolved).
  209 |  *
  210 |  * @param page - Playwright Page to read the metrics from.
  211 |  * @returns Total accumulated render time and the number of update phases recorded.
  212 |  */
  213 | const readReactProfilerRenderTime = async (
  214 |   page: Page,
  215 | ): Promise<{ totalRenderTime: number; updatePhaseCount: number }> => {
  216 |   const renderMetrics = await page.evaluate(
  217 |     () => window.__RENDER_METRICS__ ?? {},
  218 |   );
  219 |   const appRootRenderDurations: number[] = renderMetrics["AppRoot"] ?? [];
  220 |   const totalRenderTime = appRootRenderDurations.reduce(
  221 |     (durationAccumulator, phaseDuration) => durationAccumulator + phaseDuration,
  222 |     0,
  223 |   );
  224 |   return { totalRenderTime, updatePhaseCount: appRootRenderDurations.length };
  225 | };
  226 | 
  227 | // ─── Iteration runner ─────────────────────────────────────────────────────────
  228 | 
  229 | /**
  230 |  * Runs a single locale-switch iteration: navigates back to the start locale,
  231 |  * resets Profiler metrics, triggers the switch, and records both measurements.
  232 |  *
  233 |  * The navigation back to `fromLocale` before each iteration ensures every
  234 |  * measurement starts from an identical state — same route, same React tree,
  235 |  * same Profiler baseline.
  236 |  *
  237 |  * @param page - Playwright Page (shared across all iterations).
  238 |  * @param iterationNumber - 1-based iteration index for logging.
  239 |  * @param totalIterations - Total expected iterations, for the progress label.
  240 |  * @param activeLocale - Locale label used in console output (project name).
  241 |  * @param fromLocaleUrl - URL to navigate to before the switch (e.g. "/en").
  242 |  * @param targetLocale - Locale code to switch to during measurement.
  243 |  * @returns E2E duration and total React Profiler render time for this iteration.
  244 |  */
  245 | const runSingleIteration = async (
  246 |   page: Page,
  247 |   iterationNumber: number,
  248 |   totalIterations: number,
  249 |   activeLocale: string,
  250 |   fromLocaleUrl: string,
  251 |   targetLocale: string,
  252 | ): Promise<{ e2eDuration: number; profilerRenderTime: number }> => {
  253 |   console.log(
  254 |     `[${activeLocale}] ITERATION ${iterationNumber}/${totalIterations}`,
  255 |   );
  256 | 
  257 |   // Full navigation ensures router-level caches are also reset between runs.
> 258 |   await page.goto(fromLocaleUrl, { waitUntil: "networkidle" });
      |              ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4173/en
  259 | 
  260 |   // Clear Profiler metrics written during the navigation above so that only
  261 |   // the locale-switch renders are counted in this iteration's measurement.
  262 |   await page.evaluate(() => {
  263 |     window.__RENDER_METRICS__ = {};
  264 |   });
  265 | 
  266 |   const e2eDuration = await measureE2ELocaleSwitchDuration(page, targetLocale);
  267 |   console.log(`  E2E perceived reactivity:   ${e2eDuration.toFixed(2)}ms`);
  268 | 
  269 |   const { totalRenderTime: profilerRenderTime, updatePhaseCount } =
  270 |     await readReactProfilerRenderTime(page);
  271 |   console.log(
  272 |     `  React Profiler render time: ${profilerRenderTime.toFixed(2)}ms (${updatePhaseCount} update phase(s))`,
  273 |   );
  274 | 
  275 |   return { e2eDuration, profilerRenderTime };
  276 | };
  277 | 
  278 | // ─── Aggregation ──────────────────────────────────────────────────────────────
  279 | 
  280 | /**
  281 |  * Computes descriptive statistics for a set of timing samples.
  282 |  *
  283 |  * @param samples - Raw timing values in milliseconds.
  284 |  * @returns Average, min, max, and the original raw array.
  285 |  */
  286 | const aggregateTimingSamples = (samples: number[]): TimingStats => ({
  287 |   raw: samples,
  288 |   avg:
  289 |     samples.length > 0
  290 |       ? samples.reduce(
  291 |           (sumAccumulator, sampleValue) => sumAccumulator + sampleValue,
  292 |           0,
  293 |         ) / samples.length
  294 |       : 0,
  295 |   min: Math.min(...samples),
  296 |   max: Math.max(...samples),
  297 | });
  298 | 
  299 | // ─── Reporting ────────────────────────────────────────────────────────────────
  300 | 
  301 | /**
  302 |  * Prints the aggregated reactivity results to the console.
  303 |  *
  304 |  * @param activeLocale - Locale label for the report header.
  305 |  * @param e2eStats - Aggregated E2E timing statistics.
  306 |  * @param profilerStats - Aggregated React Profiler timing statistics.
  307 |  */
  308 | const printReactivitySummary = (
  309 |   activeLocale: string,
  310 |   e2eStats: TimingStats,
  311 |   profilerStats: TimingStats,
  312 | ): void => {
  313 |   console.log(`\n--- REACTIVITY RESULTS [${activeLocale.toUpperCase()}] ---`);
  314 |   console.log(`E2E avg:            ${e2eStats.avg.toFixed(2)}ms`);
  315 |   console.log(`React Profiler avg: ${profilerStats.avg.toFixed(2)}ms`);
  316 | };
  317 | 
  318 | // ─── Persistence ──────────────────────────────────────────────────────────────
  319 | 
  320 | /**
  321 |  * Writes the reactivity results to a JSON file in the shared results directory
  322 |  * (`<repo-root>/results/<benchmarkCategory>/<appName>/reactivity-<locale>.json`).
  323 |  *
  324 |  * @param resultsDirectory - Absolute path to the output directory (created if needed).
  325 |  * @param appName - Package name of the app under test.
  326 |  * @param activeLocale - Locale that was active during the measurement.
  327 |  * @param iterationCount - Number of iterations run.
  328 |  * @param e2eStats - Aggregated E2E timing statistics.
  329 |  * @param profilerStats - Aggregated React Profiler timing statistics.
  330 |  */
  331 | const saveReactivityResults = (
  332 |   resultsDirectory: string,
  333 |   appName: string,
  334 |   activeLocale: string,
  335 |   iterationCount: number,
  336 |   e2eStats: TimingStats,
  337 |   profilerStats: TimingStats,
  338 | ): void => {
  339 |   if (!fs.existsSync(resultsDirectory)) {
  340 |     fs.mkdirSync(resultsDirectory, { recursive: true });
  341 |   }
  342 | 
  343 |   const outputFilePath = path.join(
  344 |     resultsDirectory,
  345 |     `reactivity-${activeLocale}.json`,
  346 |   );
  347 | 
  348 |   fs.writeFileSync(
  349 |     outputFilePath,
  350 |     JSON.stringify(
  351 |       {
  352 |         locale: activeLocale,
  353 |         timestamp: new Date().toISOString(),
  354 |         iterations: iterationCount,
  355 |         e2e: {
  356 |           description:
  357 |             "Perceived reactivity: time from select change to html[lang] DOM update (ms)",
  358 |           ...e2eStats,
```