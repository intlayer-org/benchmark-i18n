# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

**benchmark-bloom** is a monorepo benchmarking suite that measures the real-world performance impact of i18n libraries (bundle size, locale-switch reactivity, component size, library overhead) across Next.js, TanStack Start, and Vite+React apps. Each i18n library gets its own isolated app under `apps-benchmark/`, all sharing identical page content so results are directly comparable.

## Package manager & tooling

- **Bun** (`bun@1.3.12`) — package manager and script runner
- **Turbo** — orchestrates builds and tests sequentially (`--concurrency=1`) to keep benchmark conditions reproducible
- **Biome** — linting and formatting (`biome.json` at root)
- **Playwright** — browser automation for all test categories

## Key commands

### Build

```bash
bun run build                    # Build all apps
bun run build:nextjs             # Only Next.js apps
bun run build:tanstack           # Only TanStack Start apps
bun run build:vite+react         # Only Vite+React apps

# Build a single app
cd apps-benchmark/nextjs-base-app && bun run build
```

### Test

```bash
bun run test                     # Run all test categories across all apps
bun run test:pages               # Bundle size & content leakage (all apps)
bun run test:reactivity          # Locale switch latency (all apps)
bun run test:components          # Per-component size (all apps)
bun run test:lib-size            # i18n library JS overhead (all apps)
bun run test:rendering           # Rendering performance (all apps)
bun run test:next                # All test categories, Next.js apps only
bun run test:tanstack            # All test categories, TanStack apps only

# Run a single test file inside one app (must build first)
cd apps-benchmark/nextjs-base-app
bun run test:pages               # → playwright test pages.test.ts
bun run test:reactivity          # → playwright test reactivity.test.ts
bun run test:components          # → bun scripts/measure-components.ts
bun run test:lib-size            # → runs lib-size measurement script
```

Tests require a production build (`next build` / `vite build`) before running — Playwright starts the production preview server automatically via `webServer` in `playwright.config.ts`.

### Results

```bash
bun run report                   # Print all results as tables
bun run report -- --framework nextjs --lib intlayer --json   # Filter output
```

Results JSON files are written to `results/<app-name>/` at repo root.

## Repository structure

```
benchmark-bloom/
├── apps-benchmark/
│   ├── nextjs-base-app/              # Next.js baseline (no i18n)
│   ├── nextjs-static/                # Next.js + static-loading i18n libs
│   │   ├── intlayer-app/
│   │   ├── next-intl-app/
│   │   ├── lingui-app/
│   │   └── … (gt-next, lingo.dev, next-i18next, next-international, next-translate, paraglide, tolgee)
│   ├── nextjs-dynamic/               # Next.js + dynamic-loading i18n libs
│   ├── nextjs-scoped-static/         # Next.js + scoped static
│   ├── nextjs-scoped-dynamic/        # Next.js + scoped dynamic
│   ├── tanstack-start-react-base-app/
│   ├── tanstack-start-react-static/
│   ├── tanstack-start-react-dynamic/
│   ├── tanstack-start-react-scoped-static/
│   ├── tanstack-start-react-scoped-dynamic/
│   └── vite+react-base-app/
├── test-utils/                       # Shared Playwright test helpers (workspace package)
│   └── src/
│       ├── pages-test.ts             # Bundle size & content leakage logic
│       ├── reactivity-test.ts        # Locale switch latency logic
│       ├── measure-components.ts     # Per-component size measurement
│       ├── lib-size-test.ts          # i18n library overhead measurement
│       ├── rendering-test.ts         # Rendering performance
│       └── structure-consistency.ts  # Validates app structure matches baseline
├── report/scripts/summarize.ts       # CLI script to print results tables
├── results/                          # Generated benchmark output (gitignored)
├── turbo.json
└── package.json
```

## App architecture (shared across all benchmark apps)

Each app is a near-identical copy of the same 10-page mock site (home, about, blog, careers, contact, faq, pricing, products, settings, team). The only difference between apps is the i18n library integration.

- **`app/[locale]/`** — Next.js App Router routes; each page uses `dynamic()` imports for its page-specific components
- **`components/pages/<page>/`** — Page-specific components (Server Components where possible, Client Components only when hooks are needed)
- **`components/`** — Shared layout components (`Header`, `Footer`, `AppProviders`, `LocaleSwitcher`)
- **`hooks/usePerformanceMeasure.ts`** — Marks browser performance timeline entries for reactivity measurement
- **`scripts/`** — Per-app measurement scripts (component size, lib size)
- **`*.test.ts`** — Thin wrappers that call `register*` helpers from `test-utils`

### Important: Server vs Client Components

Page-specific content components should be **Server Components** (no `"use client"`) whenever possible. Making a content component a Client Component causes its text to end up in a client JS chunk; if that chunk gets merged by Turbopack with shared Next.js internals, the text leaks into every page's bundle, causing false-positive page leakage results in `test:pages`.

## How test-utils works

`test-utils` exports registration functions consumed by each app's test files:

```ts
// pages.test.ts (in any app)
import { registerBundleTest } from "test-utils/pages-test";
registerBundleTest(test, expect, { appName: pkg.name, benchmarkCategory: "nextjs-static" });
```

**Pages test flow** (`pages-test.ts`):
1. **Phase 1** — Visit every locale×page combination, extract rendered DOM text
2. **Phase 2** — Compute fingerprints: strings unique to each locale or page (not shared across others)
3. **Phase 3** — Reload each page, capture all JS/HTML responses, search for foreign fingerprints
4. Report locale leakage % (foreign-locale strings in bundle) and page leakage % (other-page strings in bundle)

Playwright is configured with `workers: 1`, Chrome memory capped at 1 GB, GPU disabled — all to ensure consistent, reproducible measurements.

## Adding a new library benchmark app

1. Copy the relevant base app (`nextjs-base-app`, `tanstack-start-react-base-app`, etc.)
2. Add the new package to the appropriate workspace glob in root `package.json`
3. Integrate the i18n library following the same component structure as existing apps in the category
4. The test files (`pages.test.ts`, `reactivity.test.ts`, etc.) need no changes — they delegate to `test-utils`
5. Run `bun run test:consistency` to validate the app matches the expected structure
