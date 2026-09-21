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
    // Same loading strategy as the react-i18next baseline: dictionaries pulled
    // in per locale on demand instead of statically imported.
    importMode: "dynamic",
    format: "i18next",
  },
  build: {
    // The optimize pass binds a call site to a dictionary named by a namespace
    // argument, or — for libraries with message-id callers such as lingui's
    // `i18n._("footer.github")` — by the ids used in the file. react-i18next
    // has neither here: components call a namespace-less `useTranslation()`
    // and `t("header.home")` resolves against the whole-file `index`
    // dictionary at runtime. With the pass on, the runtime registry is emptied
    // and no call site is rewritten, so every id renders raw. Off, the adapter
    // resolves through the registry (the `index` dictionary bundled
    // statically, like the react-i18next baseline's resources).
    optimize: false,
    minify: true,
    purge: true,
    checkTypes: false,
  },
  compiler: {
    // Components already call `useTranslation()`; nothing to auto-transform.
    enabled: false,
  },
  // The baseline keeps one nested file per locale (`{ header: { home }, … }`)
  // loaded as i18next's default `translation` namespace, and components call a
  // namespace-less `useTranslation()` with dotted ids (`t("header.home")`).
  // The compat resolver looks the *namespace* up (`translation`, falling back
  // to the whole-file `index` dictionary) — never the id's first segment — so
  // the file must stay one dictionary. Without `splitKeys: false` the plugin
  // would auto-split every top-level group into its own dictionary and
  // `useTranslation()` would find none.
  plugins: [
    syncJSON({
      format: "i18next",
      source: ({ locale }) => `./src/i18n/locales/${locale}.json`,
      splitKeys: false,
    }),
  ],
};

export default config;
