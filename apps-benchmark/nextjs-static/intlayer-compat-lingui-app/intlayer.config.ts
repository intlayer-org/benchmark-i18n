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
    // Same loading strategy as the lingui baseline: the whole catalog is
    // statically imported at build time.
    importMode: "static",
    format: "icu",
  },
  build: {
    // Next.js runs the `@intlayer/swc` optimize pass, which binds dictionaries
    // from a namespace *argument* only. Lingui has none — `useLingui()` names
    // its dictionaries through the ids passed to `i18n._()` / `<Trans>` — and
    // that root-scope binding exists in the babel pass (Vite / TanStack) only.
    // With the pass on, the runtime registry is emptied and no lingui call site
    // is rewritten, so every id renders raw. Off, the adapter resolves ids
    // through the registry (one dictionary per `key-prefix` group, bundled
    // statically like the lingui baseline's catalog).
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
  // — the optimize pass then binds each `useLingui()` / `<Trans>` to the
  // dictionaries its ids name instead of the whole catalog. The source file
  // keeps its flat shape (write-back re-joins the ids).
  plugins: [
    syncJSON({
      format: "icu",
      source: ({ locale, key }) => `./locales/${locale}/${key}.json`,
      splitKeys: "key-prefix",
    }),
  ],
};

export default config;
