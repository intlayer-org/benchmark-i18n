import { type Dictionary, t } from 'intlayer';

const understandingImpactContent = {
  key: 'understanding-impact',
  content: {
    understandingTheImpact: t({
      en: "Understanding the Impact"
    }),

    whyASingleLargeJson: t({
      en: "Why a single large JSON can hurt performance"
    }),

    manyI18nLibrariesStoreTranslations: t({
      en: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
    }),

    theJsonMustBeParsed: t({
      en: "The JSON must be parsed on every page load — blocking the main thread."
    }),

    contextBasedArchitecturesCanCause: t({
      en: "Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change."
    }),

    duringServerSideRenderingThe: t({
      en: "During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated."
    }),

    theTradeOffsOfDynamic: t({
      en: "The trade-offs of dynamic loading"
    }),

    splittingTranslationsIntoPerRoute: t({
      en: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
    }),

    waterfallRequests: t({
      en: "Waterfall requests:"
    }),

    flashOfUntranslatedContentFouc: t({
      en: "Flash of untranslated content (FOUC):"
    }),

    cacheInvalidation: t({
      en: "Cache invalidation:"
    }),

    whatThisBenchmarkMeasures: t({
      en: "What this benchmark measures"
    }),

    thisTestAppProvidesA: t({
      en: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
    })
  },
} satisfies Dictionary;

export default understandingImpactContent;
