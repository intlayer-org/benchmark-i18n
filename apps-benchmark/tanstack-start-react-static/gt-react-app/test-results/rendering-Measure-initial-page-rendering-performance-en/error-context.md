# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: rendering.test.ts >> Measure initial page rendering performance
- Location: ../../../test-utils/src/rendering-test.ts:318:3

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4173/fr
Call log:
  - navigating to "http://localhost:4173/fr", waiting until "load"

```

# Test source

```ts
  77  | 
  78  | // ─── Types ───────────────────────────────────────────────────────────────────
  79  | 
  80  | export interface RenderingTestConfig {
  81  |   /** Package name of the app under test — used to name the output JSON file. */
  82  |   appName: string;
  83  |   /**
  84  |    * Number of full-page-load iterations to average over.
  85  |    * More iterations reduce variance from JIT warm-up and GC pauses.
  86  |    * Default: 5
  87  |    */
  88  |   iterations?: number;
  89  |   /**
  90  |    * CDP CPU throttling multiplier (1 = real hardware speed, 4 = 4× slower).
  91  |    * Default: 1
  92  |    */
  93  |   cpuThrottleRate?: number;
  94  |   /**
  95  |    * Locale of the page to load during measurement.
  96  |    * Default: "fr" (measures a non-default locale to capture translation load cost)
  97  |    */
  98  |   locale?: string;
  99  |   /**
  100 |    * Subfolder under `<repo-root>/results/` grouping results by benchmark category.
  101 |    */
  102 |   benchmarkCategory: string;
  103 | }
  104 | 
  105 | // ─── Browser Window type augmentation ────────────────────────────────────────
  106 | 
  107 | declare global {
  108 |   interface Window {
  109 |     __RENDER_METRICS__: Record<string, number[]>;
  110 |   }
  111 | }
  112 | 
  113 | // ─── Browser-side measurement helper ─────────────────────────────────────────
  114 | 
  115 | /**
  116 |  * Reads all three rendering metrics from the browser's Performance API and
  117 |  * the app's injected `window.__RENDER_METRICS__` object.
  118 |  *
  119 |  * Must be called *after* `waitUntil: "load"` so that:
  120 |  *   - The navigation entry is finalised
  121 |  *   - The `useEffect` that sets `hydration_end` has run
  122 |  *   - The Profiler `onRender` callback has fired for the mount phase
  123 |  */
  124 | const readRenderingMetrics = async (
  125 |   page: Page,
  126 | ): Promise<{
  127 |   navigationDuration: number;
  128 |   hydrationDuration: number;
  129 |   mountRenderTime: number;
  130 | }> => {
  131 |   return page.evaluate(() => {
  132 |     // 1. E2E page load — browser-native measure, always available
  133 |     const navEntry = performance.getEntriesByType(
  134 |       "navigation",
  135 |     )[0] as PerformanceNavigationTiming;
  136 |     const navigationDuration = navEntry ? navEntry.duration : 0;
  137 | 
  138 |     // 2. Hydration duration — only available if the app calls recordHydrationDuration()
  139 |     //    from test-utils/browser-metrics inside its root useEffect.
  140 |     const hydrationEntry = performance.getEntriesByName(
  141 |       "hydration_duration",
  142 |     )[0];
  143 |     const hydrationDuration = hydrationEntry ? hydrationEntry.duration : 0;
  144 | 
  145 |     // 3. React Profiler mount time — only available if the app wraps <AppRoot>
  146 |     //    with <Profiler id="AppRoot" onRender={onRenderCallback}>.
  147 |     //    We take index [0] since mount is always the first entry.
  148 |     const renderMetrics = window.__RENDER_METRICS__ || {};
  149 |     const appRootRenderDurations = renderMetrics["AppRoot"] || [];
  150 |     const mountRenderTime = appRootRenderDurations[0] || 0;
  151 | 
  152 |     return { navigationDuration, hydrationDuration, mountRenderTime };
  153 |   });
  154 | };
  155 | 
  156 | // ─── Iteration runner ─────────────────────────────────────────────────────────
  157 | 
  158 | const runSingleIteration = async (
  159 |   page: Page,
  160 |   iterationNumber: number,
  161 |   totalIterations: number,
  162 |   activeLocale: string,
  163 |   targetUrl: string,
  164 | ): Promise<{
  165 |   navigationDuration: number;
  166 |   hydrationDuration: number;
  167 |   mountRenderTime: number;
  168 | }> => {
  169 |   console.log(
  170 |     `[${activeLocale}] ITERATION ${iterationNumber}/${totalIterations}`,
  171 |   );
  172 | 
  173 |   // Navigate to about:blank first to guarantee a true cold-start load.
  174 |   // Without this, the browser may replay the previous navigation from cache.
  175 |   await page.goto("about:blank");
  176 | 
> 177 |   const response = await page.goto(targetUrl, { waitUntil: NAV_WAIT_UNTIL });
      |                               ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4173/fr
  178 | 
  179 |   console.log(`  Status: ${response?.status()} — ${response?.url()}`);
  180 | 
  181 |   // Wait for React's useEffect + Profiler onRender to fire before sampling.
  182 |   // `waitUntil: "load"` only guarantees the browser load event — React's
  183 |   // useEffect (which calls recordHydrationDuration → sets hydration_end mark)
  184 |   // and the Profiler onRender callback are scheduled *after* the initial paint
  185 |   // commit and may run after the load event, especially on static/pre-rendered
  186 |   // pages where the HTML is already fully formed.
  187 |   // We poll for either signal with a 3-second cap so we don't hang when the
  188 |   // app is intentionally un-instrumented.
  189 |   await page
  190 |     .waitForFunction(
  191 |       () =>
  192 |         performance.getEntriesByName("hydration_end").length > 0 ||
  193 |         (window.__RENDER_METRICS__ != null &&
  194 |           Object.keys(window.__RENDER_METRICS__).length > 0),
  195 |       undefined,
  196 |       { timeout: 3_000 },
  197 |     )
  198 |     .catch(() => {
  199 |       // Instrumentation not present — proceed anyway and log 0s
  200 |     });
  201 | 
  202 |   const metrics = await readRenderingMetrics(page);
  203 | 
  204 |   // Log each metric with a note if it reads 0 (likely means the app is missing
  205 |   // the required instrumentation hooks).
  206 |   const hydrationNote =
  207 |     metrics.hydrationDuration === 0
  208 |       ? " ⚠️  (0 = recordHydrationDuration() not called or mark missing)"
  209 |       : "";
  210 |   const mountNote =
  211 |     metrics.mountRenderTime === 0
  212 |       ? " ⚠️  (0 = <Profiler id=\"AppRoot\"> or onRenderCallback not wired)"
  213 |       : "";
  214 | 
  215 |   console.log(
  216 |     `  E2E Page Load (nav.duration):  ${metrics.navigationDuration.toFixed(2)}ms`,
  217 |   );
  218 |   console.log(
  219 |     `  Hydration (perf mark delta):   ${metrics.hydrationDuration.toFixed(2)}ms${hydrationNote}`,
  220 |   );
  221 |   console.log(
  222 |     `  React Mount (Profiler mount):  ${metrics.mountRenderTime.toFixed(2)}ms${mountNote}`,
  223 |   );
  224 | 
  225 |   return metrics;
  226 | };
  227 | 
  228 | // ─── Reporting ────────────────────────────────────────────────────────────────
  229 | 
  230 | const printRenderingSummary = (
  231 |   activeLocale: string,
  232 |   navStats: TimingStats,
  233 |   hydrationStats: TimingStats,
  234 |   mountStats: TimingStats,
  235 | ): void => {
  236 |   console.log(`\n--- RENDERING RESULTS [${activeLocale.toUpperCase()}] ---`);
  237 |   console.log(
  238 |     `E2E Page Load avg:   ${navStats.avg.toFixed(2)}ms  (min: ${navStats.min.toFixed(2)}  max: ${navStats.max.toFixed(2)})`,
  239 |   );
  240 |   console.log(
  241 |     `Hydration avg:       ${hydrationStats.avg.toFixed(2)}ms  (min: ${hydrationStats.min.toFixed(2)}  max: ${hydrationStats.max.toFixed(2)})`,
  242 |   );
  243 |   console.log(
  244 |     `React Mount avg:     ${mountStats.avg.toFixed(2)}ms  (min: ${mountStats.min.toFixed(2)}  max: ${mountStats.max.toFixed(2)})`,
  245 |   );
  246 | };
  247 | 
  248 | // ─── Persistence ──────────────────────────────────────────────────────────────
  249 | 
  250 | const saveRenderingResults = (
  251 |   resultsDirectory: string,
  252 |   activeLocale: string,
  253 |   iterationCount: number,
  254 |   navStats: TimingStats,
  255 |   hydrationStats: TimingStats,
  256 |   mountStats: TimingStats,
  257 | ): void => {
  258 |   try {
  259 |     if (!fs.existsSync(resultsDirectory)) {
  260 |       fs.mkdirSync(resultsDirectory, { recursive: true });
  261 |     }
  262 | 
  263 |     const outputFilePath = path.join(
  264 |       resultsDirectory,
  265 |       `rendering-${activeLocale}.json`,
  266 |     );
  267 | 
  268 |     fs.writeFileSync(
  269 |       outputFilePath,
  270 |       JSON.stringify(
  271 |         {
  272 |           locale: activeLocale,
  273 |           timestamp: new Date().toISOString(),
  274 |           iterations: iterationCount,
  275 |           e2ePageLoad: {
  276 |             description:
  277 |               "PerformanceNavigationTiming.duration — full page load wall-clock time including sub-resources (ms)",
```