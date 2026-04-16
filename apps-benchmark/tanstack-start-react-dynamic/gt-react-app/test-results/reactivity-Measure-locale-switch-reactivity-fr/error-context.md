# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reactivity.test.ts >> Measure locale switch reactivity
- Location: ../../../test-utils/src/reactivity-test.ts:401:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 5
Received: 0
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - strong [ref=e4]: Something went wrong!
  - button "Show Error" [ref=e5]
```

# Test source

```ts
  385 |  * Call this at the top level of your `reactivity.test.ts` file. The test is
  386 |  * parameterised by the Playwright project name (used as a locale label in the
  387 |  * output file name and console logs). Running it under multiple projects
  388 |  * measures reactivity independently for each locale.
  389 |  *
  390 |  * @param config - Test configuration for the app under test.
  391 |  */
  392 | export const registerReactivityTest = (config: ReactivityTestConfig): void => {
  393 |   const {
  394 |     appName,
  395 |     benchmarkCategory,
  396 |     cpuThrottleRate = 1,
  397 |     fromLocale = "en",
  398 |     toLocale = "fr",
  399 |   } = config;
  400 | 
  401 |   test("Measure locale switch reactivity", async ({ page }) => {
  402 |     test.slow(); // multiple iterations + networkidle waits exceed the default timeout
  403 | 
  404 |     // The Playwright project name is used as a label in logs and output file names.
  405 |     const activeLocale = test.info().project.name;
  406 |     const iterationCount =
  407 |       config.iterations ?? (Number(process.env.ITERATIONS) || 5);
  408 | 
  409 |     const e2eDurations: number[] = [];
  410 |     const profilerRenderTimes: number[] = [];
  411 | 
  412 |     // Surface browser console errors in test output for easier diagnosis.
  413 |     page.on("console", (consoleMessage) => {
  414 |       if (consoleMessage.type() === "error") {
  415 |         console.log(`[BROWSER ERROR]: ${consoleMessage.text()}`);
  416 |       }
  417 |     });
  418 | 
  419 |     // CDP (Chrome DevTools Protocol) gives access to low-level browser APIs
  420 |     // not exposed via standard Playwright, such as CPU throttling.
  421 |     const cdpSession = await page.context().newCDPSession(page);
  422 |     await cdpSession.send("Emulation.setCPUThrottlingRate", {
  423 |       rate: cpuThrottleRate,
  424 |     });
  425 | 
  426 |     // Warm-up navigation: let the browser JIT-compile the app's JavaScript and
  427 |     // prime internal caches before timed iterations begin. Without this, the
  428 |     // first iteration is systematically slower than subsequent ones.
  429 |     console.log(`[${activeLocale}] WARM-UP: loading /${toLocale}`);
  430 |     await page.goto(`/${toLocale}`, { waitUntil: "networkidle" });
  431 | 
  432 |     for (
  433 |       let iterationIndex = 1;
  434 |       iterationIndex <= iterationCount;
  435 |       iterationIndex++
  436 |     ) {
  437 |       try {
  438 |         const { e2eDuration, profilerRenderTime } = await runSingleIteration(
  439 |           page,
  440 |           iterationIndex,
  441 |           iterationCount,
  442 |           activeLocale,
  443 |           `/${fromLocale}`,
  444 |           toLocale,
  445 |         );
  446 |         e2eDurations.push(e2eDuration);
  447 |         profilerRenderTimes.push(profilerRenderTime);
  448 |       } catch (iterationError) {
  449 |         console.error(
  450 |           `[${activeLocale}] Iteration ${iterationIndex}/${iterationCount} failed:`,
  451 |           iterationError,
  452 |         );
  453 |       }
  454 |     }
  455 | 
  456 |     // Clean up the CDP session; ignore errors if the page was already closed.
  457 |     try {
  458 |       await cdpSession.detach();
  459 |     } catch (_detachError) {}
  460 | 
  461 |     const e2eStats = aggregateTimingSamples(e2eDurations);
  462 |     const profilerStats = aggregateTimingSamples(profilerRenderTimes);
  463 | 
  464 |     printReactivitySummary(activeLocale, e2eStats, profilerStats);
  465 | 
  466 |     // Results land in <repo-root>/results/<benchmarkCategory>/<appName>/.
  467 |     // From the app directory (tanstack-start-react/<app>/), two levels up
  468 |     // reaches the repo root.
  469 |     const resultsDirectory = path.resolve(
  470 |       process.cwd(),
  471 |       "..",
  472 |       "..",
  473 |       "results",
  474 |       benchmarkCategory,
  475 |       appName,
  476 |     );
  477 |     saveReactivityResults(
  478 |       resultsDirectory,
  479 |       activeLocale,
  480 |       iterationCount,
  481 |       e2eStats,
  482 |       profilerStats,
  483 |     );
  484 | 
> 485 |     expect(e2eDurations.length).toBe(iterationCount);
      |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  486 |   });
  487 | };
  488 | 
```