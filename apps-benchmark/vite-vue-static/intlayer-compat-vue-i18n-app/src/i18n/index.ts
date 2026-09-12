import { createI18n } from "vue-i18n";

// `vue-i18n` is aliased to `@intlayer/vue-i18n` by `vueI18nVitePlugin`, so the
// messages are served from the intlayer dictionaries compiled from `locales/`
// instead of being passed to `createI18n` (which would ship every locale in
// the main bundle).
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
});

export default i18n;
