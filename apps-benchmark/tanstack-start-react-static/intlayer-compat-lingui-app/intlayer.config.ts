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
    applicationURL: "http://localhost:3000",
  },
  dictionary: {
    // Same loading strategy as the lingui baseline: the whole catalog is
    // statically imported at build time.
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
    // Components already call `i18n._()` / `<Trans>`; nothing to auto-transform.
    enabled: false,
  },
  // lingui is single-catalog: `locales/{locale}/messages.json` is one flat map
  // of dotted ids. The `{key}` segment resolves to `messages`, which is the
  // dictionary key the lingui adapter's callers are pinned to.
  plugins: [
    syncJSON({
      format: "icu",
      source: ({ locale, key }) => `./src/locales/${locale}/${key}.json`,
    }),
  ],
};

export default config;
