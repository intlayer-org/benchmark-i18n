const locales = ["en", "fr", "es", "de", "it", "pt", "zh", "ja", "ko", "ru"];

/** @type {import('next-translate').I18nConfig} */
export default {
  locales,
  defaultLocale: "en",
  keySeparator: false,
  nsSeparator: false,
  pages: {
    "*": ["shared"],
    // Route group so this pathname differs from `app/[lang]/layout` (`/[lang]`), which
    // must load only `shared` (Header/Footer sit in layout above page providers).
    "/[lang]/(home)": ["home"],
    "/[lang]/about": ["about"],
    "/[lang]/blog": ["blog"],
    "/[lang]/careers": ["careers"],
    "/[lang]/contact": ["contact"],
    "/[lang]/faq": ["faq"],
    "/[lang]/pricing": ["pricing"],
    "/[lang]/products": ["products"],
    "/[lang]/settings": ["settings"],
    "/[lang]/team": ["team"],
  },
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
};
