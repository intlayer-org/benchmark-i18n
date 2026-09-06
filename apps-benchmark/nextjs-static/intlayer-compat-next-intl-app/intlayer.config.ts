import { syncJSON } from "@intlayer/sync-json-plugin";
import { Locales, type IntlayerConfig } from "intlayer";

const config: IntlayerConfig = {
  internationalization: {
    locales: [
      Locales.ENGLISH,
      Locales.FRENCH,
      Locales.SPANISH,
      Locales.GERMAN,
      Locales.ITALIAN,
      Locales.PORTUGUESE,
      Locales.CHINESE,
      Locales.JAPANESE,
      Locales.KOREAN,
      Locales.RUSSIAN,
    ],
    defaultLocale: Locales.ENGLISH,
  },
  routing: {
    // Matches the app's `/en/...`, `/fr/...` URLs.
    mode: "prefix-all",
    enableProxy: false,
  },
  editor: {
    enabled: false,
    applicationURL: "http://localhost:4173",
  },
  dictionary: {
    // Same loading strategy as the next-intl baseline: everything statically
    // imported at build time.
    importMode: "static",
    format: "icu",
  },
  build: {
    optimize: true,
    minify: true,
    purge: true,
    checkTypes: false,
  },
  compiler: {
    // Components already call `useTranslations()`; nothing to auto-transform.
    enabled: false,
  },
  // `messages/{locale}.json` holds every namespace under its top-level keys, so
  // syncJSON splits it into one dictionary per namespace (next-intl's model).
  plugins: [
    syncJSON({
      format: "icu",
      source: ({ locale }) => `./messages/${locale}.json`,
    }),
  ],
};

export default config;
