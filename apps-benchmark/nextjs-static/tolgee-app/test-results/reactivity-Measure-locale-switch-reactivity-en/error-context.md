# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reactivity.test.ts >> Measure locale switch reactivity
- Location: ../../../test-utils/src/reactivity-test.ts:423:3

# Error details

```
Error: page.evaluate: Test ended.
```

# Test source

```ts
  92  |    */
  93  |   benchmarkCategory: string;
  94  | }
  95  | 
  96  | /** Aggregated statistics for a series of timing samples. */
  97  | interface TimingStats {
  98  |   /** Individual raw sample values in milliseconds. */
  99  |   raw: number[];
  100 |   /** Arithmetic mean across all samples. */
  101 |   avg: number;
  102 |   /** Minimum sample value. */
  103 |   min: number;
  104 |   /** Maximum sample value. */
  105 |   max: number;
  106 | }
  107 | 
  108 | // Extend the browser Window type to include the metrics object written by the
  109 | // app's React Profiler onRender callback.
  110 | declare global {
  111 |   interface Window {
  112 |     __RENDER_METRICS__: Record<string, number[]>;
  113 |     /** Set during E2E locale measurement; awaited after Playwright triggers the <select>. */
  114 |     __reactivityLangPromise?: Promise<number>;
  115 |   }
  116 | }
  117 | 
  118 | /** Prefer `load` over `networkidle` — the latter hangs on CI when long-lived connections stay open. */
  119 | const NAV_WAIT_UNTIL: "load" = "load";
  120 | 
  121 | /** Per-iteration E2E timeout (locale switch must finish within this window on slow runners). */
  122 | const E2E_LOCALE_SWITCH_TIMEOUT_MS = 15_000;
  123 | 
  124 | // ─── Browser-side measurement helpers ────────────────────────────────────────
  125 | 
  126 | /**
  127 |  * Measures the E2E duration of a single locale switch: timing and the
  128 |  * MutationObserver run in the browser; the `<select>` is updated via
  129 |  * Playwright `selectOption` so React 19 controlled `onChange` runs reliably.
  130 |  *
  131 |  * @param page - Playwright Page to run the evaluation on.
  132 |  * @param targetLocale - Locale code the select should switch to.
  133 |  * @returns Elapsed milliseconds from observer setup to html[lang] DOM update.
  134 |  */
  135 | const measureE2ELocaleSwitchDuration = async (
  136 |   page: Page,
  137 |   targetLocale: string,
  138 | ): Promise<number> => {
  139 |   await page.evaluate(
  140 |     ({
  141 |       targetLocaleCode,
  142 |       e2eTimeoutMs,
  143 |     }: {
  144 |       targetLocaleCode: string;
  145 |       e2eTimeoutMs: number;
  146 |     }) => {
  147 |       const startTime = performance.now();
  148 |       const htmlElement = document.documentElement;
  149 | 
  150 |       window.__reactivityLangPromise = new Promise<number>((resolve, reject) => {
  151 |         // html[lang] is updated by the app (i18n + layout) when the locale switch finishes.
  152 |         if (htmlElement.lang === targetLocaleCode) {
  153 |           resolve(0);
  154 |           return;
  155 |         }
  156 | 
  157 |         const mutationObserver = new MutationObserver(() => {
  158 |           if (htmlElement.lang === targetLocaleCode) {
  159 |             mutationObserver.disconnect();
  160 |             window.clearTimeout(timeoutId);
  161 |             resolve(performance.now() - startTime);
  162 |           }
  163 |         });
  164 | 
  165 |         mutationObserver.observe(htmlElement, {
  166 |           attributes: true,
  167 |           attributeFilter: ["lang"],
  168 |         });
  169 | 
  170 |         const timeoutId = window.setTimeout(() => {
  171 |           mutationObserver.disconnect();
  172 |           reject(
  173 |             new Error(
  174 |               `E2E timeout: html[lang] did not change to '${targetLocaleCode}'`,
  175 |             ),
  176 |           );
  177 |         }, e2eTimeoutMs);
  178 |       });
  179 |     },
  180 |     {
  181 |       targetLocaleCode: targetLocale,
  182 |       e2eTimeoutMs: E2E_LOCALE_SWITCH_TIMEOUT_MS,
  183 |     },
  184 |   );
  185 | 
  186 |   const localeSelectLocator = page
  187 |     .locator("header select")
  188 |     .or(page.locator("select"))
  189 |     .first();
  190 |   await localeSelectLocator.selectOption({ value: targetLocale });
  191 | 
> 192 |   return page.evaluate(() => {
      |               ^ Error: page.evaluate: Test ended.
  193 |     const p = window.__reactivityLangPromise;
  194 |     window.__reactivityLangPromise = undefined;
  195 |     if (!p) {
  196 |       throw new Error("Locale reactivity promise was not initialised");
  197 |     }
  198 |     return p;
  199 |   });
  200 | };
  201 | 
  202 | /**
  203 |  * Reads the React Profiler render durations accumulated during the most recent
  204 |  * locale switch and returns the total time spent in update phases.
  205 |  *
  206 |  * `window.__RENDER_METRICS__["AppRoot"]` is an array of `actualDuration` values
  207 |  * written by the app's Profiler `onRender` callback, one entry per React commit
  208 |  * phase. Summing them gives the total render cost attributed to the AppRoot
  209 |  * subtree — which encompasses the entire component tree.
  210 |  *
  211 |  * Multiple values can occur when React batches the locale switch across several
  212 |  * synchronous commit phases (e.g. Suspense fallback → resolved).
  213 |  *
  214 |  * @param page - Playwright Page to read the metrics from.
  215 |  * @returns Total accumulated render time and the number of update phases recorded.
  216 |  */
  217 | const readReactProfilerRenderTime = async (
  218 |   page: Page,
  219 | ): Promise<{ totalRenderTime: number; updatePhaseCount: number }> => {
  220 |   const renderMetrics = await page.evaluate(
  221 |     () => window.__RENDER_METRICS__ ?? {},
  222 |   );
  223 |   const appRootRenderDurations: number[] = renderMetrics["AppRoot"] ?? [];
  224 |   const totalRenderTime = appRootRenderDurations.reduce(
  225 |     (durationAccumulator, phaseDuration) => durationAccumulator + phaseDuration,
  226 |     0,
  227 |   );
  228 |   return { totalRenderTime, updatePhaseCount: appRootRenderDurations.length };
  229 | };
  230 | 
  231 | // ─── Iteration runner ─────────────────────────────────────────────────────────
  232 | 
  233 | /**
  234 |  * Runs a single locale-switch iteration: navigates back to the start locale,
  235 |  * resets Profiler metrics, triggers the switch, and records both measurements.
  236 |  *
  237 |  * The navigation back to `fromLocale` before each iteration ensures every
  238 |  * measurement starts from an identical state — same route, same React tree,
  239 |  * same Profiler baseline.
  240 |  *
  241 |  * @param page - Playwright Page (shared across all iterations).
  242 |  * @param iterationNumber - 1-based iteration index for logging.
  243 |  * @param totalIterations - Total expected iterations, for the progress label.
  244 |  * @param activeLocale - Locale label used in console output (project name).
  245 |  * @param fromLocaleUrl - URL to navigate to before the switch (e.g. "/en").
  246 |  * @param targetLocale - Locale code to switch to during measurement.
  247 |  * @returns E2E duration and total React Profiler render time for this iteration.
  248 |  */
  249 | const runSingleIteration = async (
  250 |   page: Page,
  251 |   iterationNumber: number,
  252 |   totalIterations: number,
  253 |   activeLocale: string,
  254 |   fromLocaleUrl: string,
  255 |   targetLocale: string,
  256 | ): Promise<{ e2eDuration: number; profilerRenderTime: number }> => {
  257 |   console.log(
  258 |     `[${activeLocale}] ITERATION ${iterationNumber}/${totalIterations}`,
  259 |   );
  260 | 
  261 |   // Full navigation ensures router-level caches are also reset between runs.
  262 |   await page.goto(fromLocaleUrl, { waitUntil: NAV_WAIT_UNTIL });
  263 | 
  264 |   // Clear Profiler metrics written during the navigation above so that only
  265 |   // the locale-switch renders are counted in this iteration's measurement.
  266 |   await page.evaluate(() => {
  267 |     window.__RENDER_METRICS__ = {};
  268 |   });
  269 | 
  270 |   const e2eDuration = await measureE2ELocaleSwitchDuration(page, targetLocale);
  271 |   console.log(`  E2E perceived reactivity:   ${e2eDuration.toFixed(2)}ms`);
  272 | 
  273 |   let profilerRenderTime = 0;
  274 |   let updatePhaseCount = 0;
  275 |   try {
  276 |     const profiler = await readReactProfilerRenderTime(page);
  277 |     profilerRenderTime = profiler.totalRenderTime;
  278 |     updatePhaseCount = profiler.updatePhaseCount;
  279 |   } catch (readError) {
  280 |     const message =
  281 |       readError instanceof Error ? readError.message : String(readError);
  282 |     // Some stacks (e.g. Paraglide middleware + RSC) update `html[lang]` then
  283 |     // complete a navigation slightly later; the next evaluate can lose its context.
  284 |     if (message.includes("Execution context was destroyed")) {
  285 |       await page.waitForLoadState(NAV_WAIT_UNTIL);
  286 |       const profiler = await readReactProfilerRenderTime(page);
  287 |       profilerRenderTime = profiler.totalRenderTime;
  288 |       updatePhaseCount = profiler.updatePhaseCount;
  289 |     } else {
  290 |       throw readError;
  291 |     }
  292 |   }
```