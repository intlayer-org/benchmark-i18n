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
  // of dotted ids. `splitKeys: "key-prefix"` groups those ids by their first
  // dot-segment, so `footer.github` becomes dictionary `footer`, key `github`
  // — the optimize pass then binds each `useLingui()` / `<Trans>` to the
  // dictionaries its ids name instead of the whole catalog. The source file
  // keeps its flat shape (write-back re-joins the ids).
  plugins: [
    syncJSON({
      format: "icu",
      source: ({ locale, key }) => `./src/locales/${locale}/${key}.json`,
      splitKeys: "key-prefix",
    }),
  ],
};

export default config;
