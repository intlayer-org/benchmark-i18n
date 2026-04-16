# Benchmark Bloom — Results

> **Generated:** 2026-04-15  
> **Coverage:** Partial — not all apps have been run through every test type yet. Cells marked `—` indicate the test hasn't been executed for that app. Run `bun run build && bun run test` to fill in missing data.

---

## Quick Reference

All sizes are **gzip-compressed**. Lower is better for every metric.

### Next.js

| Library | Version | Category | Lib size | Page JS avg | Locale leak | Page leak | Comp avg | E2E react. | React Profiler |
|---------|---------|----------|----------|-------------|-------------|-----------|----------|------------|----------------|
| gt-next | 6.16.5 | static | 173.7 KB | 434.2 KB | 0.0% | **45.0%** | 174.2 KB | 22.2 ms | 0.0 ms |
| next-intl | 4.9.1 | dynamic | — | — | — | — | 20.9 KB | — | — |
| next-translate | 3.1.2 | dynamic | **2.7 KB** | — | — | — | **3.0 KB** | — | — |
| next-translate | 3.1.2 | scoped-static | **2.7 KB** | — | — | — | **3.0 KB** | — | — |
| tolgee | 7.0.0 | scoped-static | — | — | — | — | 27.7 KB | — | — |
| lingui | 5.3.0 | scoped-dynamic | 10.3 KB | — | — | — | 147.4 KB | — | — |

### TanStack Start (React)

| Library | Version | Category | Lib size | Page JS avg | Locale leak | Page leak | Comp avg | E2E react. | React Profiler |
|---------|---------|----------|----------|-------------|-------------|-----------|----------|------------|----------------|
| intlayer | 8.7.1-canary-1 | static | — | 122.5 KB | 52.1% | **0.8%** | **7.0 KB** | **6.7 ms** | **0.0 ms** |
| react-i18next | 17.0.2 | static | — | — | — | — | 24.4 KB | 13.7 ms | 5.9 ms |
| react-intl | 10.1.1 | static | — | 185.0 KB | 50.0% | **89.7%** | 23.0 KB | 5.6 ms | 1.9 ms |
| use-intl | 4.9.1 | static | — | 183.2 KB | 50.0% | **89.8%** | 76.1 KB | 3.4 ms | 1.0 ms |
| gt-react | latest | scoped-dynamic | — | 573.2 KB | 0.0% | 0.0% | — | 0.0 ms | 0.0 ms |
| intlayer | 8.7.1-canary-1 | scoped-dynamic | — | — | — | — | **5.6 KB** | — | — |
| react-intl | 10.1.1 | scoped-dynamic | — | — | — | — | 24.4 KB | — | — |

---

## Findings by Dimension

### 1. Library Overhead

*Measured via an empty component that imports the i18n library and nothing else. This is the minimum baseline cost every component pays.*

| Library | Lib size (gzip) | Note |
|---------|-----------------|------|
| next-translate | **2.7 KB** | Remarkably small runtime |
| lingui | 10.3 KB | Compiler-based; runtime is minimal |
| gt-next | 173.7 KB | Very large — includes ML/AI translation runtime |

**Observation:** `next-translate` achieves the smallest library footprint by design — it offloads all logic to Next.js's native data-fetching mechanisms and keeps the runtime near-zero. `gt-next`'s size reflects its AI translation capabilities, which come at a significant baseline cost.

Most libraries don't have `empty-component-size.json` data yet — running `bun run test:components` will fill this in for all apps.

---

### 2. Page Bundle Size

*Total JavaScript (gzip) shipped per page. Averaged across all pages and both locales.*

| Library | Framework | Category | Page JS avg (gz) | Page JS range |
|---------|-----------|----------|-----------------|---------------|
| intlayer | TanStack | static | **122.5 KB** | 116.9 – 134.7 KB |
| react-intl | TanStack | static | 185.0 KB | 184.6 – 186.2 KB |
| use-intl | TanStack | static | 183.2 KB | 182.8 – 184.4 KB |
| gt-next | Next.js | static | 434.2 KB | 434.1 – 434.6 KB |
| gt-react | TanStack | scoped-dynamic | 573.2 KB | 573.1 – 573.3 KB |

**Observation:** `intlayer` delivers the smallest pages by a wide margin (122.5 KB vs 183–185 KB for its nearest competitors). Its architecture pre-computes only the strings needed per page at build time. `gt-next` and `gt-react` send very large bundles regardless of category, likely because the AI runtime and all possible translations are bundled upfront.

The range for `intlayer` (116.9–134.7 KB) is notably wider than competitors, suggesting some pages benefit more from its scoping optimizations than others.

---

### 3. Content Leakage

*How much of the downloaded JavaScript bundle is "wasted" — strings from other locales or other pages that the current user will never see.*

#### Locale leakage (unused locale strings in bundle)

| Library | Category | Locale leak % | Meaning |
|---------|----------|--------------|---------|
| gt-next | static | **0.0%** | No other-locale strings found |
| gt-react | scoped-dynamic | **0.0%** | Zero locale waste |
| intlayer | static | 52.1% | Half the bundle is the unused locale |
| react-intl | static | 50.0% | Half the bundle is the unused locale |
| use-intl | static | 50.0% | Half the bundle is the unused locale |

**Note on 0% locale leakage:** `gt-next` and `gt-react` use AI-generated translations that may be fetched at runtime rather than bundled — so "no leakage" reflects that the translations aren't in the bundle at all, not necessarily that scoping is applied. `intlayer`, `react-intl`, and `use-intl` bundle all locales upfront in static mode.

#### Page leakage (other pages' strings in current page's bundle)

This is usually the more impactful metric since apps typically have far more pages than locales.

| Library | Category | Page leak % | Implication on a 180 KB page |
|---------|----------|------------|------------------------------|
| intlayer | static | **0.8%** | ~1.5 KB wasted |
| gt-next | static | 45.0% | ~200 KB wasted per page |
| react-intl | static | **89.7%** | ~166 KB wasted per page |
| use-intl | static | **89.8%** | ~164 KB wasted per page |
| gt-react | scoped-dynamic | **0.0%** | No other-page strings found |

**Critical finding:** In `static` mode, `react-intl` and `use-intl` bundle ~90% of their page content from *other pages*. On a 185 KB page, roughly 166 KB is content the current user cannot see. This is the defining cost of using `static` (all-in-one bundle) mode with these libraries.

`intlayer` is a notable exception: even in `static` mode (no route scoping configured), it achieves only **0.8% page leakage**. This suggests its declaration-file-based architecture naturally limits cross-page bundling even without explicit namespace configuration.

---

### 4. Component Size

*Each component compiled in isolation. Measures how much code is "reachable" from a single component, including the i18n runtime it pulls in.*

#### Next.js

| Library | Category | Comp avg (gz) | Comp range (gz) |
|---------|----------|--------------|-----------------|
| next-translate | dynamic | **3.0 KB** | 0.7 – 5.1 KB |
| next-translate | scoped-static | **3.0 KB** | 0.7 – 5.1 KB |
| next-intl | dynamic | 20.9 KB | 9.8 – 23.8 KB |
| tolgee | scoped-static | 27.7 KB | 26.6 – 29.7 KB |
| lingui | scoped-dynamic | 147.4 KB | 146.3 – 148.7 KB |
| gt-next | static | **174.2 KB** | 173.8 – 176.1 KB |

**Observation:** `next-translate` has an extraordinarily small component footprint — 3 KB average with a minimum of just 0.7 KB. This means extremely effective tree-shaking. `lingui` in scoped-dynamic mode is unexpectedly large (147 KB per component), suggesting it bakes compiled message catalogs into each component bundle rather than sharing them. `gt-next` components are nearly identical to the library size, confirming the runtime is the dominant cost.

#### TanStack Start (React)

| Library | Category | Comp avg (gz) | Comp range (gz) |
|---------|----------|--------------|-----------------|
| intlayer | scoped-dynamic | **5.6 KB** | 2.3 – 7.9 KB |
| intlayer | static | 7.0 KB | 2.3 – 15.1 KB |
| react-intl | static | 23.0 KB | 22.7 – 25.0 KB |
| react-intl | scoped-dynamic | 24.4 KB | 24.1 – 26.3 KB |
| react-i18next | static | 24.4 KB | 22.0 – 26.3 KB |
| use-intl | static | 76.1 KB | 64.3 – 78.2 KB |

**Observation:** `intlayer` achieves the smallest per-component sizes (5.6–7 KB) — roughly 4× smaller than `react-intl` and `react-i18next`, and 14× smaller than `use-intl`. This aligns with its declaration-file approach: only the keys actually used by each component are included.

`use-intl` at 76 KB per component is surprising given its positioning as a lightweight library. This may reflect that the ICU message format parser and locale data are not effectively tree-shaken per-component.

---

### 5. Reactivity

*How fast the UI updates when the user switches language. Lower = better user experience.*

#### E2E Perceived Reactivity (wall-clock time to DOM update)

| Library | Framework | E2E avg | E2E interpretation |
|---------|-----------|---------|-------------------|
| gt-react | TanStack | **0.0 ms** | Instant — likely server-driven, no client re-render |
| use-intl | TanStack | 3.4 ms | Near-instant perceived switch |
| react-intl | TanStack | 5.6 ms | Imperceptible to users |
| intlayer | TanStack | 6.7 ms | Imperceptible to users |
| react-i18next | TanStack | 13.7 ms | Slightly perceptible |
| gt-next | Next.js | 22.2 ms | Noticeable on slow devices |

All measured values are under 25ms, which is below the threshold of conscious perception for most users. However on slow mobile devices (3–5× throttling), differences compound.

`gt-react`'s 0ms result warrants investigation — it may indicate the locale switch triggers a server request rather than a client-side re-render, or that the DOM attribute update happens before React processes the change.

#### React Profiler Render Time (internal re-render cost)

| Library | Framework | Profiler avg | Note |
|---------|-----------|-------------|------|
| gt-next | Next.js | **0.0 ms** | No React re-renders triggered |
| intlayer | TanStack | **0.0 ms** | No React re-renders triggered |
| gt-react | TanStack | **0.0 ms** | No React re-renders triggered |
| use-intl | TanStack | 1.0 ms | Minimal re-render overhead |
| react-intl | TanStack | 1.9 ms | Minimal re-render overhead |
| react-i18next | TanStack | **5.9 ms** | Highest re-render cost |

**Key finding:** `intlayer` achieves locale switching without triggering React re-renders (0.0 ms profiler time) while still maintaining a real DOM update within 6.7ms E2E. This suggests it updates the locale via a mechanism outside the React render tree (e.g. CSS variables, data attributes) and only re-renders components that actually need new string values.

`react-i18next` shows the highest React Profiler time (5.9ms), meaning it re-renders more of the component tree on locale switch.

---

## Coverage Status

Not all test types have been run for all apps. Here is what is currently available:

| Category | App | Pages | Reactivity | Components | Lib size |
|----------|-----|-------|-----------|-----------|---------|
| nextjs / static | gt-next | ✅ | ✅ | ✅ | ✅ |
| nextjs / dynamic | next-intl | ❌ | ❌ | ✅ | ❌ |
| nextjs / dynamic | next-translate | ❌ | ❌ | ✅ | ✅ |
| nextjs / scoped-static | next-translate | ❌ | ❌ | ✅ | ✅ |
| nextjs / scoped-static | tolgee | ❌ | ❌ | ✅ | ❌ |
| nextjs / scoped-dynamic | lingui | ❌ | ❌ | ✅ | ✅ |
| tanstack / static | intlayer | ✅ | ✅ | ✅ | ❌ |
| tanstack / static | react-i18next | ❌ | ✅ | ✅ | ❌ |
| tanstack / static | react-intl | ✅ | ✅ | ✅ | ❌ |
| tanstack / static | use-intl | ✅ | ✅ | ✅ | ❌ |
| tanstack / scoped-dynamic | gt-react | ✅ | ✅ | ❌ | ❌ |
| tanstack / scoped-dynamic | intlayer | ❌ | ❌ | ✅ | ❌ |
| tanstack / scoped-dynamic | react-intl | ❌ | ❌ | ✅ | ❌ |

To fill in missing data, run the targeted test commands:

```bash
# Fill page bundle sizes
bun run test:pages

# Fill reactivity data
bun run test:reactivity

# Fill component sizes
bun run test:components
```

---

## Key Takeaways

### 1. `static` mode causes massive page leakage

`react-intl` and `use-intl` in static mode bundle ~90% other-page content into every page load. This is not a flaw in those libraries — it's the expected behavior of the `static` pattern. The takeaway is that any library used in static mode will exhibit this problem. The library choice matters much less than the loading strategy.

### 2. Intlayer stands out on multiple dimensions

In the currently available data, `intlayer` is the only library that simultaneously achieves:
- Low page leakage even in `static` mode (0.8% — vs 89%+ for competitors)
- The smallest component sizes in its category (5.6–7 KB vs 23–76 KB)
- 0ms React Profiler render time on locale switch

This aligns with its declaration-file design where each component explicitly declares only the keys it uses, making over-bundling structurally impossible even without route-level namespacing.

### 3. `next-translate` is the lightest library footprint

At 2.7 KB gzip for the library and 3 KB average per component, `next-translate` has the smallest runtime cost of any library tested. Teams with strict bundle budgets and willing to write more manual namespace configuration may prefer it.

### 4. `gt-next` / `gt-react` trade bundle size for zero-config AI translation

The GT libraries carry a large runtime (173.7 KB for gt-next) because they include the AI translation engine. The payoff is zero-config locale switching with 0ms or near-instant reactivity. This tradeoff is most appropriate for applications where initial bundle size is less critical than translation maintenance cost.

### 5. `lingui` component sizes are unexpectedly large in scoped-dynamic mode

At 147 KB average per component, `lingui` in scoped-dynamic mode is larger per-component than most static-mode competitors. This likely reflects that compiled message catalogs are bundled per-component rather than shared. The library's advantage is build-time extraction and type safety, not runtime size.

### 6. Reactivity differences are small in absolute terms — but compound

All E2E reactivity values are under 25ms, which is below conscious human perception. However, these measurements are taken on a fast desktop with no network throttling. On mobile devices with 4G network and 3–5× CPU throttling, these values would multiply. The React Profiler time differences (0ms vs 5.9ms) remain proportional under throttling.

---

## Next Steps

1. **Complete the benchmark matrix** — run all test types for all apps to fill in the `❌` cells above.
2. **Add base app baselines** — measure the Next.js and TanStack Start base apps (no i18n) to establish a true zero-cost reference.
3. **Add more libraries** — paraglide, lingo.dev, wuchale, tolgee for TanStack; more scoped variants for Next.js.
4. **Test on mobile conditions** — add throttled network/CPU test runs for reactivity and page size metrics.
5. **Compare across categories for the same library** — once more category variants are complete, measure how much each library improves when moving from `static` → `scoped-dynamic`.
