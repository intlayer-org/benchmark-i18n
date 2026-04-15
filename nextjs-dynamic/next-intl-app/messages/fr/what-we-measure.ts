const whatWeMeasure = {
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
};
export default whatWeMeasure;
