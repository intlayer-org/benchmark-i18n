# Benchmark Bloom

A performance benchmarking suite for i18n libraries across **Next.js**, **TanStack Start**, **Vue**, **Solid** and **Svelte**, covering multiple translation-loading strategies.

Every library gets its own isolated app, and all apps render the same 10-page mock site (home, about, blog, careers, contact, faq, pricing, products, settings, team). The only difference between apps is the i18n integration, so results are directly comparable.

## 📊 Results

Read the full analysis at **[intlayer.org/doc/benchmark](https://intlayer.org/doc/benchmark)**, or jump to a framework:

- [Next.js](https://intlayer.org/doc/benchmark/nextjs)
- [TanStack Start](https://intlayer.org/doc/benchmark/tanstack)
- [Vue](https://intlayer.org/doc/benchmark/vue)
- [Solid](https://intlayer.org/doc/benchmark/solid)
- [Svelte](https://intlayer.org/doc/benchmark/svelte)

Raw summaries generated from this repo live in [`report/scripts/`](./report/scripts) (`summarize-<framework>.md`).

## What is measured

| Metric | Description |
| --- | --- |
| **Library size** | JS overhead added by the i18n library itself, measured via an empty component that only imports the library. |
| **Bundle size & leakage** | JS / CSS / HTML payload per page (min / avg / max), plus the share of the bundle that belongs to **other locales** or **other pages**. |
| **Component size** | Every component compiled in isolation, to measure how much code (including un-tree-shaken i18n runtime) ships with it. |
| **Locale-switch reactivity** | Time for the UI to update after switching language, end-to-end and at render level. |
| **Rendering** | Rendering performance of each page. |
| **Content consistency** | Guard test: each app must render the reference content, fully translated (no raw keys, no English on `/fr`). |

Timings are reported as medians and compared against the framework's base app measured in the same run.

## Loading strategies

| Category | Description |
| --- | --- |
| **base** | No i18n library — performance baseline. |
| **static** | All translations bundled upfront; ships every locale and every page to every user. |
| **dynamic** | Translations loaded per locale at runtime; unused locales are dropped, but all pages are still bundled together. |
| **scoped-static** | Route-scoped namespaces bundled upfront; each page includes only its own translations. |
| **scoped-dynamic** | Namespace scoping + dynamic loading: each page downloads only its own locale's translations on demand. |

See [`report/README.md`](./report/README.md) for metric definitions, result file schemas, and how to interpret the data.

## Benchmarked libraries

`@intlayer/*` compat packages run the original library's API on top of Intlayer.

### Next.js

- `Base App` (No i18n library)
- [`next-intlayer`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/next-intlayer/exports.md) (v9.5.10)
- [`@intlayer/next-intl`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/compat/next-intl.md) (v9.5.10)
- [`@intlayer/next-i18next`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/compat/next-i18next.md) (v9.5.10)
- [`@intlayer/lingui`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/compat/lingui.md) (v9.5.10)
- [`next-i18next`](https://github.com/i18next/next-i18next) (v16.3.0)
- [`next-intl`](https://github.com/amannn/next-intl) (v4.14.2)
- [`@lingui/core`](https://github.com/lingui/js-lingui) (v6.6.0)
- [`next-translate`](https://github.com/aralroca/next-translate) (v3.2.0)
- [`next-international`](https://github.com/QuiiBz/next-international) (v1.3.1)
- [`@inlang/paraglide-js`](https://github.com/opral/paraglide-js) (v2.15.1)
- [`@tolgee/react`](https://github.com/tolgee/tolgee-js) (v7.2.0)
- [`@lingo.dev/compiler`](https://github.com/lingodotdev/lingo.dev) (v0.4.12)
- [`gt-next`](https://github.com/generaltranslation/gt) (v11.1.24)

### TanStack Start (React)

- `Base App` (No i18n library)
- [`react-intlayer`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/react-intlayer/exports.md) (v9.5.10)
- [`@intlayer/use-intl`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/compat/next-intl.md) (v9.5.10)
- [`@intlayer/lingui`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/compat/lingui.md) (v9.5.10)
- [`@intlayer/react-i18next`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/compat/react-i18next.md) (v9.5.10)
- [`react-i18next`](https://github.com/i18next/react-i18next) (v17.0.13)
- [`use-intl`](https://github.com/amannn/next-intl/tree/main/packages/use-intl) (v4.14.2)
- [`@lingui/core`](https://github.com/lingui/js-lingui) (v6.6.0)
- [`@inlang/paraglide-js`](https://github.com/opral/paraglide-js) (v2.15.1)
- [`@tolgee/react`](https://github.com/tolgee/tolgee-js) (v7.2.0)
- [`react-intl`](https://github.com/formatjs/formatjs) (v10.1.26)
- [`wuchale`](https://github.com/wuchalejs/wuchale) (v0.26.6)
- [`gt-react`](https://github.com/generaltranslation/gt) (v10.18.3)
- [`lingo.dev`](https://github.com/lingodotdev/lingo.dev) (v0.138.7)

### Vue

- `Base App` (No i18n library)
- [`vue-intlayer`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/vue-intlayer/exports.md) (v9.5.10)
- [`@intlayer/vue-i18n`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/compat/vue-i18n.md) (v9.5.10)
- [`vue-i18n`](https://github.com/intlify/vue-i18n) (v11.4.0)
- [`fluent-vue`](https://github.com/fluent-vue/fluent-vue) (v3.8.2)
- [`@tolgee/vue`](https://github.com/tolgee/tolgee-js) (v7.2.0)

### Solid

- `Base App` (No i18n library)
- [`solid-intlayer`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/solid-intlayer/exports.md) (v9.5.10)
- [`@solid-primitives/i18n`](https://github.com/solidjs-community/solid-primitives/tree/main/packages/i18n) (v2.2.1)
- [`i18next`](https://github.com/i18next/i18next) (v26.0.8) + [`@mbarzda/solid-i18next`](https://github.com/mbarzda/solid-i18next) (v1.4.1)
- [`@tolgee/web`](https://github.com/tolgee/tolgee-js) (v7.2.0)
- [`@inlang/paraglide-js`](https://github.com/opral/paraglide-js) (v2.25.1)

### Svelte

- `Base App` (No i18n library)
- [`svelte-intlayer`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/packages/svelte-intlayer/exports.md) (v9.5.10)
- [`@intlayer/svelte-i18n`](https://github.com/aymericzip/intlayer/blob/main/docs/docs/en/compat/svelte-i18n.md) (v9.5.10)
- [`svelte-i18n`](https://github.com/kaisermann/svelte-i18n) (v4.0.1)
- [`@tolgee/svelte`](https://github.com/tolgee/tolgee-js) (v7.2.1)
- [`@inlang/paraglide-js`](https://github.com/opral/paraglide-js) (v2.25.1)

Not every library is available in every loading strategy — see the folders under [`apps-benchmark/`](./apps-benchmark) for the exact matrix.

## Getting started

### Prerequisites

- [Bun](https://bun.sh/)
- Node.js

### Installation

```bash
git clone https://github.com/intlayer-org/benchmark-bloom.git
cd benchmark-bloom
bun install
bun x playwright install chromium
```

### Running the benchmarks

Tests run against production builds, so build first:

```bash
bun run build     # build all apps
bun run test      # run all test categories
```

Scope to one framework:

```bash
bun run build:nextjs   && bun run test:next
bun run build:tanstack && bun run test:tanstack
bun run build:vue      && bun run test:vue
bun run build:solid    && bun run test:solid
bun run build:svelte   && bun run test:svelte
```

Or to one test category:

```bash
bun run test:pages        # bundle size & leakage
bun run test:lib-size     # library overhead
bun run test:components   # per-component size
bun run test:reactivity   # locale-switch latency
bun run test:rendering    # rendering performance
bun run test:content      # rendered content matches the reference
```

Single app:

```bash
cd apps-benchmark/nextjs-static/next-intl-app
bun run build && bun run test:pages
```

### Viewing results

Results are written as JSON to `results/<app-name>/`. Print them as tables with:

```bash
bun run report
bun run report -- --framework nextjs --lib intlayer --json
```

## Project structure

```
apps-benchmark/     # One app per framework × strategy × library
  <framework>-base-app/
  <framework>-static/
  <framework>-dynamic/
  <framework>-scoped-static/
  <framework>-scoped-dynamic/
test-utils/         # Shared Playwright tests and measurement scripts
report/             # Documentation and summary scripts
results/            # Benchmark output (JSON)
```

## Adding a library

1. Copy the framework's base app into the right category folder.
2. Integrate the i18n library, keeping the same component structure.
3. Run `bun run test:consistency` and `bun run test:content` to check the app matches the reference.

Test files need no changes — they delegate to `test-utils`.
