export default {
  "about-header": {
    aboutThisBenchmark: "About This Benchmark",
    thisIsAnOpenSource:
      "This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions.",
  },
  "about-grid": {
    whyThisExists: "Why This Exists",
    choosingAnI18nLibraryIs:
      "Choosing an i18n library is an architectural decision with long-term consequences. Most comparisons focus on API ergonomics, but few measure the performance cost: how much weight does the library add to the bundle? How does it affect rendering when thousands of translation keys are loaded? Does lazy loading actually help or just shift the cost? This benchmark answers those questions with real data.",
    methodology: "Methodology",
    theSame10PageApp:
      "The same 10-page app is built once per library. We measure the production bundle (via rollup-plugin-visualizer), run Lighthouse audits for loading metrics, and use React Profiler to capture render times during locale switches. All tests run in CI on consistent hardware to ensure reproducible results.",
  },
  "what-we-measure": {
    bundleSizeImpact: "Bundle size impact",
    theAdditionalJavascriptBytesSent:
      "The additional JavaScript bytes sent to users when the i18n library and its translation files are included. This directly affects download time on slow networks.",
    renderingOverhead: "Rendering overhead",
    howMuchExtraTimeThe:
      "How much extra time the library adds to React's render cycle. Libraries that inject translations via a single context provider can cause unnecessary re-renders across the component tree.",
    hydrationCost: "Hydration cost",
    duringSsrTranslationDataIs:
      "During SSR, translation data is serialized into HTML. Large dictionaries increase the HTML payload and slow down hydration — the moment the page becomes interactive.",
    lazyLoadingEffectiveness: "Lazy loading effectiveness",
    whetherSplittingTranslationsByRoute:
      "Whether splitting translations by route or namespace actually reduces the initial load, and what trade-offs it introduces (waterfall requests, FOUC, cache complexity).",
    localeSwitchSpeed: "Locale switch speed",
    howFastTheAppCan:
      "How fast the app can switch from one language to another at runtime — including fetching new translations, re-rendering components, and updating the DOM.",
    whatWeMeasure: "What We Measure",
  }
};
