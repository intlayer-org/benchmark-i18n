# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reactivity.test.ts >> Measure locale switch reactivity
- Location: ../../../test-utils/src/reactivity-test.ts:442:3

# Error details

```
Error: page.evaluate: Test ended.
```

# Test source

```ts
  104 |    */
  105 |   beforeNavigation?: (page: Page, locale: string) => Promise<void>;
  106 | }
  107 | 
  108 | /** Aggregated statistics for a series of timing samples. */
  109 | interface TimingStats {
  110 |   /** Individual raw sample values in milliseconds. */
  111 |   raw: number[];
  112 |   /** Arithmetic mean across all samples. */
  113 |   avg: number;
  114 |   /** Minimum sample value. */
  115 |   min: number;
  116 |   /** Maximum sample value. */
  117 |   max: number;
  118 | }
  119 | 
  120 | // Extend the browser Window type to include the metrics object written by the
  121 | // app's React Profiler onRender callback.
  122 | declare global {
  123 |   interface Window {
  124 |     __RENDER_METRICS__: Record<string, number[]>;
  125 |     /** Set during E2E locale measurement; awaited after Playwright triggers the <select>. */
  126 |     __reactivityLangPromise?: Promise<number>;
  127 |   }
  128 | }
  129 | 
  130 | /** Prefer `load` over `networkidle` — the latter hangs on CI when long-lived connections stay open. */
  131 | const NAV_WAIT_UNTIL: "load" = "load";
  132 | 
  133 | /** Per-iteration E2E timeout (locale switch must finish within this window on slow runners). */
  134 | const E2E_LOCALE_SWITCH_TIMEOUT_MS = 15_000;
  135 | 
  136 | // ─── Browser-side measurement helpers ────────────────────────────────────────
  137 | 
  138 | /**
  139 |  * Measures the E2E duration of a single locale switch: timing and the
  140 |  * MutationObserver run in the browser; the `<select>` is updated via
  141 |  * Playwright `selectOption` so React 19 controlled `onChange` runs reliably.
  142 |  *
  143 |  * @param page - Playwright Page to run the evaluation on.
  144 |  * @param targetLocale - Locale code the select should switch to.
  145 |  * @returns Elapsed milliseconds from observer setup to html[lang] DOM update.
  146 |  */
  147 | const measureE2ELocaleSwitchDuration = async (
  148 |   page: Page,
  149 |   targetLocale: string,
  150 | ): Promise<number> => {
  151 |   await page.evaluate(
  152 |     ({
  153 |       targetLocaleCode,
  154 |       e2eTimeoutMs,
  155 |     }: {
  156 |       targetLocaleCode: string;
  157 |       e2eTimeoutMs: number;
  158 |     }) => {
  159 |       const startTime = performance.now();
  160 |       const htmlElement = document.documentElement;
  161 | 
  162 |       window.__reactivityLangPromise = new Promise<number>((resolve, reject) => {
  163 |         // html[lang] is updated by the app (i18n + layout) when the locale switch finishes.
  164 |         if (htmlElement.lang === targetLocaleCode) {
  165 |           resolve(0);
  166 |           return;
  167 |         }
  168 | 
  169 |         const mutationObserver = new MutationObserver(() => {
  170 |           if (htmlElement.lang === targetLocaleCode) {
  171 |             mutationObserver.disconnect();
  172 |             window.clearTimeout(timeoutId);
  173 |             resolve(performance.now() - startTime);
  174 |           }
  175 |         });
  176 | 
  177 |         mutationObserver.observe(htmlElement, {
  178 |           attributes: true,
  179 |           attributeFilter: ["lang"],
  180 |         });
  181 | 
  182 |         const timeoutId = window.setTimeout(() => {
  183 |           mutationObserver.disconnect();
  184 |           reject(
  185 |             new Error(
  186 |               `E2E timeout: html[lang] did not change to '${targetLocaleCode}'`,
  187 |             ),
  188 |           );
  189 |         }, e2eTimeoutMs);
  190 |       });
  191 |     },
  192 |     {
  193 |       targetLocaleCode: targetLocale,
  194 |       e2eTimeoutMs: E2E_LOCALE_SWITCH_TIMEOUT_MS,
  195 |     },
  196 |   );
  197 | 
  198 |   const localeSelectLocator = page
  199 |     .locator("header select")
  200 |     .or(page.locator("select"))
  201 |     .first();
  202 |   await localeSelectLocator.selectOption({ value: targetLocale });
  203 | 
> 204 |   return page.evaluate(() => {
      |               ^ Error: page.evaluate: Test ended.
  205 |     const p = window.__reactivityLangPromise;
  206 |     window.__reactivityLangPromise = undefined;
  207 |     if (!p) {
  208 |       throw new Error("Locale reactivity promise was not initialised");
  209 |     }
  210 |     return p;
  211 |   });
  212 | };
  213 | 
  214 | /**
  215 |  * Reads the React Profiler render durations accumulated during the most recent
  216 |  * locale switch and returns the total time spent in update phases.
  217 |  *
  218 |  * `window.__RENDER_METRICS__["AppRoot"]` is an array of `actualDuration` values
  219 |  * written by the app's Profiler `onRender` callback, one entry per React commit
  220 |  * phase. Summing them gives the total render cost attributed to the AppRoot
  221 |  * subtree — which encompasses the entire component tree.
  222 |  *
  223 |  * Multiple values can occur when React batches the locale switch across several
  224 |  * synchronous commit phases (e.g. Suspense fallback → resolved).
  225 |  *
  226 |  * @param page - Playwright Page to read the metrics from.
  227 |  * @returns Total accumulated render time and the number of update phases recorded.
  228 |  */
  229 | const readReactProfilerRenderTime = async (
  230 |   page: Page,
  231 | ): Promise<{ totalRenderTime: number; updatePhaseCount: number }> => {
  232 |   const renderMetrics = await page.evaluate(
  233 |     () => window.__RENDER_METRICS__ ?? {},
  234 |   );
  235 |   const appRootRenderDurations: number[] = renderMetrics["AppRoot"] ?? [];
  236 |   const totalRenderTime = appRootRenderDurations.reduce(
  237 |     (durationAccumulator, phaseDuration) => durationAccumulator + phaseDuration,
  238 |     0,
  239 |   );
  240 |   return { totalRenderTime, updatePhaseCount: appRootRenderDurations.length };
  241 | };
  242 | 
  243 | // ─── Iteration runner ─────────────────────────────────────────────────────────
  244 | 
  245 | /**
  246 |  * Runs a single locale-switch iteration: navigates back to the start locale,
  247 |  * resets Profiler metrics, triggers the switch, and records both measurements.
  248 |  *
  249 |  * The navigation back to `fromLocale` before each iteration ensures every
  250 |  * measurement starts from an identical state — same route, same React tree,
  251 |  * same Profiler baseline.
  252 |  *
  253 |  * @param page - Playwright Page (shared across all iterations).
  254 |  * @param iterationNumber - 1-based iteration index for logging.
  255 |  * @param totalIterations - Total expected iterations, for the progress label.
  256 |  * @param activeLocale - Locale label used in console output (project name).
  257 |  * @param fromLocale - Starting locale for this iteration (used with resolveUrl and beforeNavigation).
  258 |  * @param targetLocale - Locale code to switch to during measurement.
  259 |  * @param config - Test config (resolveUrl, beforeNavigation).
  260 |  * @returns E2E duration and total React Profiler render time for this iteration.
  261 |  */
  262 | const runSingleIteration = async (
  263 |   page: Page,
  264 |   iterationNumber: number,
  265 |   totalIterations: number,
  266 |   activeLocale: string,
  267 |   fromLocale: string,
  268 |   targetLocale: string,
  269 |   config: ReactivityTestConfig,
  270 | ): Promise<{ e2eDuration: number; profilerRenderTime: number }> => {
  271 |   console.log(
  272 |     `[${activeLocale}] ITERATION ${iterationNumber}/${totalIterations}`,
  273 |   );
  274 | 
  275 |   const resolveUrl = config.resolveUrl ?? ((loc: string) => `/${loc}`);
  276 |   if (config.beforeNavigation) {
  277 |     await config.beforeNavigation(page, fromLocale);
  278 |   }
  279 | 
  280 |   // Full navigation ensures router-level caches are also reset between runs.
  281 |   await page.goto(resolveUrl(fromLocale), { waitUntil: NAV_WAIT_UNTIL });
  282 | 
  283 |   // Clear Profiler metrics written during the navigation above so that only
  284 |   // the locale-switch renders are counted in this iteration's measurement.
  285 |   await page.evaluate(() => {
  286 |     window.__RENDER_METRICS__ = {};
  287 |   });
  288 | 
  289 |   const e2eDuration = await measureE2ELocaleSwitchDuration(page, targetLocale);
  290 |   console.log(`  E2E perceived reactivity:   ${e2eDuration.toFixed(2)}ms`);
  291 | 
  292 |   let profilerRenderTime = 0;
  293 |   let updatePhaseCount = 0;
  294 |   try {
  295 |     const profiler = await readReactProfilerRenderTime(page);
  296 |     profilerRenderTime = profiler.totalRenderTime;
  297 |     updatePhaseCount = profiler.updatePhaseCount;
  298 |   } catch (readError) {
  299 |     const message =
  300 |       readError instanceof Error ? readError.message : String(readError);
  301 |     // Some stacks (e.g. Paraglide middleware + RSC) update `html[lang]` then
  302 |     // complete a navigation slightly later; the next evaluate can lose its context.
  303 |     if (message.includes("Execution context was destroyed")) {
  304 |       await page.waitForLoadState(NAV_WAIT_UNTIL);
```