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
  278 |             ...navStats,
  279 |           },
  280 |           hydration: {
  281 |             description:
  282 |               "performance.measure('hydration_duration') — time between hydration_start mark (inline script) and hydration_end mark (useEffect) (ms). 0 means app is not instrumented.",
  283 |             ...hydrationStats,
  284 |           },
  285 |           reactMount: {
  286 |             description:
  287 |               "React Profiler actualDuration for the mount phase of <AppRoot>. 0 means Profiler is not wired up (ms).",
  288 |             ...mountStats,
  289 |           },
  290 |         },
  291 |         null,
  292 |         2,
  293 |       ),
  294 |     );
  295 | 
  296 |     console.log(`Results saved to: ${outputFilePath}\n`);
  297 |   } catch (err) {
  298 |     console.error(`Failed to save rendering results:`, err);
  299 |   }
  300 | };
  301 | 
  302 | // ─── Test registration ────────────────────────────────────────────────────────
  303 | 
  304 | /**
  305 |  * Registers the page rendering Playwright test for an app.
  306 |  *
  307 |  * Call this at the top level of your `rendering.test.ts` file.
  308 |  * The Playwright project name is used as the locale label in output files.
  309 |  */
  310 | export const registerRenderingTest = (test: any, expect: any, config: RenderingTestConfig): void => {
  311 |   const {
  312 |     appName,
  313 |     benchmarkCategory,
  314 |     cpuThrottleRate = 1,
  315 |     locale = "fr",
  316 |   } = config;
  317 | 
  318 |   test("Measure initial page rendering performance", async ({ page }: { page: Page }) => {
  319 |     test.slow(); // multiple cold-start navigations can take time
  320 | 
  321 |     const activeLocale = test.info().project.name;
  322 |     const iterationCount =
  323 |       config.iterations ?? (Number(process.env.ITERATIONS) || 5);
  324 | 
  325 |     const navDurations: number[] = [];
  326 |     const hydrationDurations: number[] = [];
  327 |     const mountRenderTimes: number[] = [];
  328 | 
  329 |     // Surface browser console errors for easier diagnosis
  330 |     page.on("console", (msg) => {
  331 |       if (msg.type() === "error")
  332 |         console.log(`[BROWSER ERROR]: ${msg.text()}`);
  333 |     });
  334 | 
  335 |     const cdpSession = await page.context().newCDPSession(page);
  336 |     await cdpSession.send("Emulation.setCPUThrottlingRate", {
  337 |       rate: cpuThrottleRate,
  338 |     });
  339 | 
  340 |     // Warm-up: let the server, OS caches, and V8 JIT warm up before measuring
  341 |     console.log(`[${activeLocale}] WARM-UP: loading /${locale}`);
> 342 |     await page.goto(`/${locale}`, { waitUntil: NAV_WAIT_UNTIL });
      |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:4173/fr
  343 | 
  344 |     for (let i = 1; i <= iterationCount; i++) {
  345 |       const metrics = await runSingleIteration(
  346 |         page,
  347 |         i,
  348 |         iterationCount,
  349 |         activeLocale,
  350 |         `/${locale}`,
  351 |       );
  352 |       navDurations.push(metrics.navigationDuration);
  353 |       hydrationDurations.push(metrics.hydrationDuration);
  354 |       mountRenderTimes.push(metrics.mountRenderTime);
  355 |     }
  356 | 
  357 |     try {
  358 |       await cdpSession.detach();
  359 |     } catch {}
  360 | 
  361 |     const navStats = aggregateTimingSamples(navDurations);
  362 |     const hydrationStats = aggregateTimingSamples(hydrationDurations);
  363 |     const mountStats = aggregateTimingSamples(mountRenderTimes);
  364 | 
  365 |     printRenderingSummary(activeLocale, navStats, hydrationStats, mountStats);
  366 | 
  367 |     const resultsDirectory = path.join(
  368 |       benchmarkBloomRoot(process.cwd()),
  369 |       "results",
  370 |       benchmarkCategory,
  371 |       appName,
  372 |     );
  373 | 
  374 |     saveRenderingResults(
  375 |       resultsDirectory,
  376 |       activeLocale,
  377 |       iterationCount,
  378 |       navStats,
  379 |       hydrationStats,
  380 |       mountStats,
  381 |     );
  382 | 
  383 |     expect(navDurations.length).toBe(iterationCount);
  384 |   });
  385 | };
  386 | 
```