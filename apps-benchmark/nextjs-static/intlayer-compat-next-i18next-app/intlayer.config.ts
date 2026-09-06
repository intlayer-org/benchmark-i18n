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
    // Same loading strategy as the next-i18next baseline: every locale
    // statically imported at build time.
    importMode: "static",
    format: "i18next",
  },
  build: {
    optimize: true,
    minify: true,
    purge: true,
    checkTypes: false,
  },
  compiler: {
    // Components already call `useTranslation()`; nothing to auto-transform.
    enabled: false,
  },
  // The baseline keeps one flat file per locale holding every key, loaded as
  // i18next's default `translation` namespace. syncJSON mirrors that layout, so
  // the compat resolver serves the same keys from intlayer dictionaries.
  plugins: [
    syncJSON({
      format: "i18next",
      source: ({ locale }) => `./i18n/locales/${locale}.json`,
      // One flat file per locale IS the namespace (i18next's default
      // `translation`). Without this the plugin would auto-split every
      // top-level key into its own dictionary, and `useTranslation()` — which
      // resolves against the whole-file `index` dictionary — would find none.
      splitKeys: false,
    }),
  ],
};

export default config;
