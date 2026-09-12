# vue-i18n → Intlayer compat benchmark app

A copy of `../vue-i18n-app` migrated with the `@intlayer/vue-i18n` compat adapter,
following `docs/docs/en/compat/vue-i18n.md` in the intlayer repo:

- `vite.config.ts` swaps `@intlify/unplugin-vue-i18n` for `vueI18nVitePlugin()`,
  which aliases `vue-i18n` → `@intlayer/vue-i18n` and runs `vite-intlayer`.
- `intlayer.config.ts` syncs `locales/{locale}.json` into one intlayer dictionary
  per top-level namespace (`syncJSON`, `format: "vue-i18n"`).
- `src/i18n/index.ts` no longer passes `messages` to `createI18n` — content is
  served by the compiled dictionaries.

Every component keeps its original `useI18n()` / `t("ns.key")` calls.
