export default {
  "hero": {
    aTestApplicationDesignedTo:
      "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
    viewResults: "View Results",
  },
  "why-it-matters": {
    whyTheseMetricsMatter: "Why These Metrics Matter",
    bundleSize: "Bundle Size",
    theBundleIsTheData:
      "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves.",
    renderingHydration: "Rendering & Hydration",
    connectingALargeJsonDictionary:
      "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI).",
    dynamicLoading: "Dynamic Loading",
    loadingAllTranslationsUpfrontOverloads:
      "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential.",
  },
  "understanding-impact": {
    understandingTheImpact: "Understanding the Impact",
    whyASingleLargeJson: "Why a single large JSON can hurt performance",
    manyI18nLibrariesStoreTranslations:
      "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:",
    theJsonMustBeParsed:
      "The JSON must be parsed on every page load — blocking the main thread.",
    contextBasedArchitecturesCanCause:
      "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.",
    duringServerSideRenderingThe:
      "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.",
    theTradeOffsOfDynamic: "The trade-offs of dynamic loading",
    splittingTranslationsIntoPerRoute:
      "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:",
    waterfallRequests: "Waterfall requests:",
    flashOfUntranslatedContentFouc: "Flash of untranslated content (FOUC):",
    cacheInvalidation: "Cache invalidation:",
    whatThisBenchmarkMeasures: "What this benchmark measures",
    thisTestAppProvidesA:
      "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable.",
  },
  "results-table": {
    sampleResults: "Sample Results",
    bundleSize: "Bundle Size",
    lookupTime: "Lookup Time",
    lazyLoading: "Lazy Loading",
  }
};
