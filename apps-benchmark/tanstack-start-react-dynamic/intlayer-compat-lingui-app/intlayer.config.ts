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
    // Same loading strategy as the lingui baseline: catalogs pulled in per
    // namespace on demand instead of statically imported.
    importMode: "dynamic",
    format: "icu",
  },
  build: {
    optimize: false,
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
  // — one small dictionary per component instead of one 244 kB catalog bound
  // into every chunk. The source file keeps its flat shape (write-back
  // re-joins the ids), so this is a config change, not a catalog migration.
  plugins: [
    syncJSON({
      format: "icu",
      source: ({ locale, key }) => `./src/locales/${locale}/${key}.json`,
      splitKeys: "key-prefix",
    }),
  ],
};

export default config;
