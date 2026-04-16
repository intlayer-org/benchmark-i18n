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
Received: 1
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
        - link "i18n Bench" [ref=e5] [cursor=pointer]:
          - /url: /
        - generic [ref=e6]:
          - link "Accueil" [ref=e7] [cursor=pointer]:
            - /url: /
          - link "Méthodologie" [ref=e8] [cursor=pointer]:
            - /url: /about
          - button "Pages de test" [ref=e10] [cursor=pointer]:
            - text: Pages de test
            - img [ref=e11]
      - generic [ref=e13]:
        - link "Aller sur GitHub" [ref=e14] [cursor=pointer]:
          - /url: https://github.com/intlayer-org/benchmark-i18n
          - generic [ref=e15]: Aller sur GitHub
          - img [ref=e16]
        - combobox [ref=e19]:
          - option "English"
          - option "Français" [selected]
          - option "Español"
          - option "Deutsch"
          - option "Italiano"
          - option "Português"
          - option "中文"
          - option "日本語"
          - option "한국어"
          - option "Русский"
        - 'button "Mode thématique : auto (système). Cliquez pour passer en mode clair." [ref=e20]': "Thème : Auto"
  - generic [ref=e21]:
    - generic [ref=e22]:
      - heading "i18n Benchmark" [level=1] [ref=e23]
      - paragraph [ref=e24]: Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.
      - generic [ref=e25]:
        - button "Voir les résultats" [ref=e26]
        - button "Méthodologie" [ref=e27]
    - generic [ref=e28]:
      - heading "Pourquoi ces mesures sont importantes" [level=2] [ref=e29]
      - generic [ref=e30]:
        - generic [ref=e31]:
          - heading "Taille du bundle" [level=3] [ref=e32]
          - paragraph [ref=e33]: "Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes."
        - generic [ref=e34]:
          - heading "Rendu & Hydratation" [level=3] [ref=e35]
          - paragraph [ref=e36]: "La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI)."
        - generic [ref=e37]:
          - heading "Chargement dynamique" [level=3] [ref=e38]
          - paragraph [ref=e39]: "Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel."
    - generic [ref=e40]:
      - heading "Comprendre l'impact" [level=2] [ref=e41]
      - generic [ref=e42]:
        - heading "Pourquoi un seul JSON volumineux peut nuire aux performances" [level=3] [ref=e43]
        - paragraph [ref=e44]: Many i18n libraries store translations in large JSON files that are loaded upfront. This can significantly increase the "Time to Interactive" as the browser must download and parse these files before the app can be used.
        - list [ref=e45]:
          - listitem [ref=e46]: Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.
          - listitem [ref=e47]: Context-based architectures can cause the entire app to re-render when the language changes. For large apps with thousands of components, this can lead to noticeable lag during locale switches.
          - listitem [ref=e48]: Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.
      - generic [ref=e49]:
        - heading "Les compromis du chargement dynamique" [level=3] [ref=e50]
        - paragraph [ref=e51]: "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :"
        - list [ref=e52]:
          - listitem [ref=e53]:
            - strong [ref=e54]: "Requêtes en cascade :"
            - text: The app must first load the core library (e.g., i18next) which adds to the initial bundle size. Even "lightweight" libraries can add 10-20KB of minified JS.
          - listitem [ref=e55]:
            - strong [ref=e56]: Flash of Untranslated Content (FOUC)
            - text: Users may briefly see translation keys or English text while the library and translation files are being loaded.
          - listitem [ref=e57]:
            - strong [ref=e58]: "Invalidation du cache :"
            - text: Updating translations often requires a full rebuild or clearing the CDN cache, which can delay the roll-out of critical copy changes.
      - generic [ref=e59]:
        - heading "Ce que ce benchmark mesure" [level=3] [ref=e60]
        - paragraph [ref=e61]: "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables."
    - generic [ref=e62]:
      - heading "Exemples de résultats" [level=2] [ref=e63]
      - table [ref=e65]:
        - rowgroup [ref=e66]:
          - row "Library Taille du bundle Temps de recherche Chargement différé" [ref=e67]:
            - columnheader "Library" [ref=e68]
            - columnheader "Taille du bundle" [ref=e69]
            - columnheader "Temps de recherche" [ref=e70]
            - columnheader "Chargement différé" [ref=e71]
        - rowgroup [ref=e72]:
          - row "react-i18next 42.3 kB 0.12ms Yes" [ref=e73]:
            - cell "react-i18next" [ref=e74]
            - cell "42.3 kB" [ref=e75]
            - cell "0.12ms" [ref=e76]
            - cell "Yes" [ref=e77]
          - row "react-intl 38.1 kB 0.15ms Manual" [ref=e78]:
            - cell "react-intl" [ref=e79]
            - cell "38.1 kB" [ref=e80]
            - cell "0.15ms" [ref=e81]
            - cell "Manual" [ref=e82]
          - row "lingui 12.8 kB 0.08ms Yes" [ref=e83]:
            - cell "lingui" [ref=e84]
            - cell "12.8 kB" [ref=e85]
            - cell "0.08ms" [ref=e86]
            - cell "Yes" [ref=e87]
          - row "typesafe-i18n 5.2 kB 0.05ms Built-in" [ref=e88]:
            - cell "typesafe-i18n" [ref=e89]
            - cell "5.2 kB" [ref=e90]
            - cell "0.05ms" [ref=e91]
            - cell "Built-in" [ref=e92]
  - contentinfo [ref=e93]:
    - generic [ref=e94]:
      - generic [ref=e95]:
        - generic [ref=e96]:
          - heading "i18n Benchmark" [level=3] [ref=e97]
          - paragraph [ref=e98]: Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.
        - generic [ref=e99]:
          - heading "Ressources" [level=3] [ref=e100]
          - list [ref=e101]:
            - listitem [ref=e102]:
              - link "GitHub" [ref=e103] [cursor=pointer]:
                - /url: https://github.com/intlayer-org/benchmark-i18n
            - listitem [ref=e104]:
              - link "Méthodologie" [ref=e105] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e106]:
              - link "Contribuer" [ref=e107] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e108]:
          - heading "Contact" [level=3] [ref=e109]
          - paragraph [ref=e110]: contact@intlayer.org
      - generic [ref=e111]: i18n Benchmark — Projet open source. Construit avec React, Vite & TanStack Router.
  - alert [ref=e112]
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