# i18n Benchmark Implementation Plan

This document outlines the systematic transformation of base applications into specialized benchmark applications for various i18n solutions.

## General Transformation Workflow

For every application, follow these rigorous steps:

1.  **Preparation**:
    - Identify all hardcoded strings in the base app (Pages, Components).
    - Create a unified dictionary structure (English as base).
2.  **Installation**:
    - Install the required library and its Vite/Unplugin companion.
3.  **Configuration**:
    - Update `vite.config.ts` with necessary plugins for pre-compilation or optimization.
    - Create a central `i18n` configuration file.
4.  **Integration**:
    - Wrap the main application or inject the plugin in `main.ts` / `App.tsx`.
5.  **Refactoring**:
    - Replace hardcoded strings with translation hooks/components.
6.  **Verification**:
    - Ensure the app builds and the performance tests (`pages.test.ts`, etc.) still pass.

---

## Vue (Vite) Solutions

### 1. `vue-i18n`
- **New App**: `vite-vue-i18n-static`
- **Dependencies**: `vue-i18n`, `@intlify/unplugin-vue-i18n`
- **Steps**:
    - Install: `bun add vue-i18n && bun add -D @intlify/unplugin-vue-i18n`
    - Configure Vite: Add `VueI18nPlugin` to `vite.config.ts`.
    - Setup: Create `src/i18n/index.ts` to initialize `createI18n`.
    - Dictionary: Store translations in `src/locales/*.json`.
    - Component: Use `useI18n` hook or `$t` global helper.

### 2. `fluent-vue`
- **New App**: `vite-vue-fluent-vue-static`
- **Dependencies**: `fluent-vue`, `@fluent/bundle`, `unplugin-fluent-vue`
- **Steps**:
    - Install: `bun add fluent-vue @fluent/bundle && bun add -D unplugin-fluent-vue`
    - Configure Vite: Add `FluentVuePlugin` to `vite.config.ts`.
    - Dictionary: Create `.ftl` files (Mozilla Fluent format).
    - Setup: Use `createFluentVue` and provide the bundles in `main.ts`.
    - Component: Use `$t` or `v-t` directive.

### 3. `vue-intlayer`
- **New App**: `vite-vue-intlayer-static`
- **Dependencies**: `vue-intlayer`, `intlayer`, `vite-intlayer`
- **Steps**:
    - Install: `bun add vue-intlayer intlayer && bun add -D vite-intlayer`
    - Setup: Run `npx intlayer init` to create `intlayer.config.ts`.
    - Dictionary: Create `.content.ts` (or `.json`) files next to components.
    - Setup: Add `intlayerPlugin` to Vite and `IntlayerPlugin` to Vue app.
    - Component: Use `useIntlayer` hook.

---

## Svelte (Vite) Solutions

### 1. `paraglide-js`
- **New App**: `vite-svelte-paraglide-js-static`
- **Dependencies**: `@inlang/paraglide-js`, `@inlang/paraglide-vite`
- **Steps**:
    - Init: `npx @inlang/paraglide-js init`
    - Configure Vite: Add `paraglide` plugin.
    - Dictionary: Managed via Inlang (messages.json).
    - Component: Import compiled messages directly: `import * as m from "./paraglide/messages"`.

### 2. `svelte-i18n`
- **New App**: `vite-svelte-i18n-static`
- **Dependencies**: `svelte-i18n`
- **Steps**:
    - Install: `bun add svelte-i18n`
    - Setup: In `main.ts`, initialize with `init`, `register`, and `waitLocale`.
    - Component: Use the `$t` store: `{$t('key')}`.

### 3. `svelte-intlayer`
- **New App**: `vite-svelte-intlayer-static`
- **Dependencies**: `svelte-intlayer`, `intlayer`, `vite-intlayer`
- **Steps**:
    - Similar setup to `vue-intlayer` using `svelte-intlayer` adapter.

---

## SolidJS (Vite) Solutions

### 1. `@solid-primitives/i18n`
- **New App**: `vite-solid-primitives-i18n-static`
- **Dependencies**: `@solid-primitives/i18n`
- **Steps**:
    - Install: `bun add @solid-primitives/i18n`
    - Setup: Define dictionaries as objects. Use `createI18nContext`.
    - Component: Use `useI18n` to access the translation function `t()`.

### 2. `paraglide-js`
- **New App**: `vite-solid-paraglide-js-static`
- **Steps**: Identical to Svelte setup but using Solid-specific imports if necessary.

### 3. `i18next` / `solid-i18next`
- **New App**: `vite-solid-i18next-static`
- **Dependencies**: `i18next`, `solid-i18next`
- **Steps**:
    - Install: `bun add i18next solid-i18next`
    - Setup: Initialize `i18next`, wrap app in `I18nextProvider`.
    - Component: Use `useTranslation` hook.

### 4. `solid-intlayer`
- **New App**: `vite-solid-intlayer-static`
- **Steps**: Similar setup to `vue-intlayer` using `solid-intlayer` adapter.

---

## React (Vite) Solutions

### 1. `react-intlayer`
- **New App**: `vite-react-intlayer-static`
- **Dependencies**: `react-intlayer`, `intlayer`, `vite-intlayer`
- **Steps**:
    - Install: `bun add react-intlayer intlayer && bun add -D vite-intlayer`
    - Setup: Standard intlayer configuration.
    - Component: Use `useIntlayer` hook.

---

## Two-Axis Variants: Scoped × Dynamic

Each library that already has a `*-static` benchmark app should be replicated along **two orthogonal axes**, mirroring the conventions already used for `nextjs-*` and `tanstack-start-react-*`:

1. **Scope axis** — *unscoped* (one bundle for the whole site) vs. *scoped* (per-page / per-component dictionaries that tree-shake or chunk independently).
2. **Loading axis** — *static* (synchronously imported, bundled into the JS chunk) vs. *dynamic* (lazy-loaded via async import or fetch at runtime).

This gives **4 cells per library**:

| Scope ↓ \ Loading → | static | dynamic |
| --- | --- | --- |
| **unscoped** | already done (`*-static`) | `*-dynamic` |
| **scoped** | `*-scoped-static` | `*-scoped-dynamic` |

### Eligibility rule

If a library's design fundamentally cannot express one of the axes (e.g., it has no concept of "scope", or compiles every message into a single static bundle with no async loader), **skip** the cell rather than forcing an unidiomatic implementation. Skipped cells must be called out with one short sentence so the reader understands why.

### Common verification

For every new app:
- `bun run build` succeeds.
- For *dynamic* / *scoped-dynamic* variants: confirm in `dist/assets/` that locale or page data ships as **separate async chunks** (not merged into the main JS).
- For *scoped-\** variants: confirm each page only ships the keys it consumes (run `test:pages` and `test:components`).
- Pages (Home, About, Settings, etc.) are fully localized.

---

## React (Vite) Variants

### `react-intlayer` — all 4 cells

- ✅ `vite-react-intlayer-static` (done)
- **`vite-react-intlayer-dynamic`** — copy the `static` app, set `dictionary.importMode: "dynamic"` in `intlayer.config.ts`. Wrap consumers in `<Suspense>` if needed; the compiler emits async chunks per dictionary.
- **`vite-react-intlayer-scoped-static`** — keep `importMode: "static"`, but split the centralized `app.content.ts` into per-component `.content.ts` files (one per page/component, e.g. `Header.content.ts`, `pages/home/Hero.content.ts`). Each component calls `useIntlayer("<keyOfThatDictionary>")`. This is the idiomatic intlayer layout already used in `next-intlayer-app`.
- **`vite-react-intlayer-scoped-dynamic`** — same per-component dictionaries as above, plus `importMode: "dynamic"`.

---

## Vue (Vite) Variants

### `vue-i18n`

- ✅ `vite-vue-i18n-static` (done)
- **`vite-vue-i18n-dynamic`** — register only the active locale on bootstrap; use `i18n.global.setLocaleMessage(locale, await import(\`./locales/\${locale}.json\`))` on locale change. Configure `@intlify/unplugin-vue-i18n` with `include` so each locale JSON becomes its own chunk.
- **`vite-vue-i18n-scoped-static`** — use `<i18n>` SFC custom blocks (or `useI18n({ messages: { en: {...} } })` in `<script setup>`) so each component owns its messages. The unplugin compiles each block at build time.
- **`vite-vue-i18n-scoped-dynamic`** — `<i18n src="./Component.en.json" />` blocks with locale split + lazy registration on locale change.

### `fluent-vue`

- ✅ `vite-vue-fluent-vue-static` (done)
- **`vite-vue-fluent-vue-dynamic`** — store one `.ftl` per locale; on locale change, `fetch` (or `import?raw`) the FTL string and call `bundle.addResource(new FluentResource(text))`. `unplugin-fluent-vue`'s `external` plugin already supports per-locale chunks.
- **`vite-vue-fluent-vue-scoped-static`** — use `<fluent>` custom block per component (one of unplugin-fluent-vue's documented modes). Each component's bundle is registered locally.
- **`vite-vue-fluent-vue-scoped-dynamic`** — per-component `<fluent src="./Component.ftl" />` lazy-loaded on first render.

### `vue-intlayer` — all 4 cells (same matrix as react-intlayer)

- ✅ `vite-vue-intlayer-static` (done)
- `vite-vue-intlayer-dynamic`, `vite-vue-intlayer-scoped-static`, `vite-vue-intlayer-scoped-dynamic` — identical strategy to the React variants, swap `useIntlayer` for the Vue composable.

---

## Svelte (Vite) Variants

### `paraglide-js`

- ✅ `vite-svelte-paraglide-js-static` (done)
- **Scope axis: SKIP both `scoped-static` and `scoped-dynamic`.** Paraglide compiles every message into its own ESM export, so unused keys are tree-shaken automatically — there is no idiomatic way to "scope" a dictionary further. Conceptually `*-static` already behaves like `*-scoped-static`.
- **`vite-svelte-paraglide-js-dynamic`** — use Paraglide v2's async runtime: `await loadMessages(locale)` on locale change, and configure `paraglideVitePlugin` so each locale lands in its own chunk (`compilerOptions: { strategy: ["url"], outputStructure: "locale-modules" }`).

### `svelte-i18n`

- ✅ `vite-svelte-i18n-static` (done)
- **`vite-svelte-i18n-dynamic`** — replace eager `addMessages` with `register("en", () => import("./locales/en.json"))` per locale; await `waitLocale()` in `main.ts`. Vite emits one chunk per locale.
- **Scope axis: SKIP `scoped-static` and `scoped-dynamic`.** `svelte-i18n` has no per-component dictionary concept — the store is global. Faking it would be unidiomatic.

### `svelte-intlayer` — all 4 cells

- ✅ `vite-svelte-intlayer-static` (done)
- `vite-svelte-intlayer-dynamic`, `vite-svelte-intlayer-scoped-static`, `vite-svelte-intlayer-scoped-dynamic` — same intlayer matrix as the React/Vue variants.

---

## SolidJS (Vite) Variants

### `@solid-primitives/i18n`

- ✅ `vite-solid-primitives-i18n-static` (done)
- **`vite-solid-primitives-i18n-dynamic`** — pass an async fetcher to `createI18n` (the package's `dict` getter accepts a signal that resolves to a dictionary). Each locale JSON becomes a chunk.
- **Scope axis: SKIP both.** The library exposes a single `t()` translator over a flat dictionary; per-component scope isn't part of its model.

### `paraglide-js` (Solid)

- ✅ `vite-solid-paraglide-js-static` (done)
- **Scope axis: SKIP both** (same reasoning as the Svelte paraglide app: every message is already its own export).
- **`vite-solid-paraglide-js-dynamic`** — same pattern as svelte-paraglide-dynamic, with `loadMessages(locale)` invoked from a Solid effect on `useParams().locale` change.

### `solid-i18next`

- ✅ `vite-solid-i18next-static` (done)
- **`vite-solid-i18next-dynamic`** — initialize `i18next` with `backend` or with `resources` populated lazily via `i18next.loadResources` / `addResourceBundle` after a dynamic `import("./locales/<locale>.json")`.
- **`vite-solid-i18next-scoped-static`** — split messages into i18next **namespaces** (one per page: `home`, `about`, `pricing`, …). Components call `useTranslation("<namespace>")`. All namespaces still bundled.
- **`vite-solid-i18next-scoped-dynamic`** — same namespaces, but registered with `i18next.loadNamespaces([...])` lazily; combined with per-locale dynamic imports each `(locale, namespace)` pair lands in its own chunk.

### `solid-intlayer` — all 4 cells

- ✅ `vite-solid-intlayer-static` (done)
- `vite-solid-intlayer-dynamic`, `vite-solid-intlayer-scoped-static`, `vite-solid-intlayer-scoped-dynamic` — same matrix as react/vue/svelte intlayer.

---

## Summary Matrix

| Library | static | dynamic | scoped-static | scoped-dynamic |
| --- | --- | --- | --- | --- |
| react-intlayer | ✅ | ✅ | ✅ | ✅ |
| vue-i18n | ✅ | ✅ | ✅ | ✅ |
| fluent-vue | ✅ | ✅ | ✅ | ✅ |
| vue-intlayer | ✅ | ✅ | ✅ | ✅ |
| paraglide-js (svelte) | ✅ | ✅ | — *skipped, tree-shaken* | — *skipped* |
| svelte-i18n | ✅ | ✅ | — *no scope concept* | — *no scope concept* |
| svelte-intlayer | ✅ | ✅ | ✅ | ✅ |
| @solid-primitives/i18n | ✅ | ✅ | — *single global dict* | — *single global dict* |
| paraglide-js (solid) | ✅ | ✅ | — *skipped, tree-shaken* | — *skipped* |
| solid-i18next | ✅ | ✅ | ✅ (namespaces) | ✅ (namespaces) |
| solid-intlayer | ✅ | ✅ | ✅ | ✅ |

---

## Rigorous Quality Check

After each implementation, verify:
- **Build**: `bun run build` succeeds without warnings.
- **Asset Size**: Check `dist/assets` to ensure i18n data is correctly chunked or bundled.
- **Reactivity**: Run `test:reactivity` to ensure locale switching doesn't cause excessive re-renders.
- **Completeness**: Ensure *all* pages (Home, About, Settings, etc.) are fully localized.
