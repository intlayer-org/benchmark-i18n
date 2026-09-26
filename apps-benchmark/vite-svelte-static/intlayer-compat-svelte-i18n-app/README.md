# svelte-i18n → Intlayer compat benchmark app

A copy of `../svelte-i18n-app` migrated with the `@intlayer/svelte-i18n` compat
adapter, following `docs/docs/en/compat/svelte-i18n.md` in the intlayer repo:

- `vite.config.ts` adds `svelteI18nVitePlugin()`, which aliases
  `svelte-i18n` → `@intlayer/svelte-i18n` and runs `vite-intlayer`.
- `intlayer.config.ts` syncs `src/locales/{locale}.json` into one intlayer
  dictionary per top-level namespace (`syncJSON`, `format: "icu"`).
- `src/lib/i18n/svelte-i18n-init.ts` no longer `register`s the locale JSON
  files — content is served by the compiled dictionaries.

Every component keeps its original `$_("ns.key")` calls.
