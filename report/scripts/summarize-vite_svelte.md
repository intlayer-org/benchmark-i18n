# Vite + Svelte — i18n Benchmark Results

_Generated: 2026-04-30_

## Metric Legend

| Column | What it measures |
| :--- | :--- |
| **Lib size (gz)** | Gzip bytes of the minified i18n library via an empty-component build |
| **Page JS avg (gz)** | Average gzip JS bundle per page across all locales |
| **Locale leak %** | % of JS bundle containing strings from locales the user is NOT using |
| **Page leak %** | % of JS bundle containing strings from pages the user is NOT on |
| **Comp avg (gz)** | Average gzip size of individual components compiled in isolation |
| **E2E reactivity** | Wall-clock time from locale `<select>` change to `html[lang]` DOM update (ms) |
| **React Profiler** | Sum of React `actualDuration` during locale-switch re-renders (ms) |
| **Page load** | `PerformanceNavigationTiming.duration` — full page load time (ms) |
| **Hydration avg** | Custom perf-mark delta for React hydration phase (ms); — = not instrumented |

> **Status icons:** ✅ all data · 🔶 partial · ⬜ missing · ❌ error  
> **⚠ INVALID** = test ran but all measured values were zero (missing instrumentation or broken test)

## Libraries

- [base](#base)
- [intlayer](#intlayer)
- [paraglide-js](#paraglide-js)
- [svelte-i18n](#svelte-i18n)

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.8 ms | — | 11.1 ms | 3.4 ms |
| Dynamic | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.8 ms | — | 11.1 ms | 3.4 ms |
| Scoped Static | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.8 ms | — | 11.1 ms | 3.4 ms |
| Scoped Dynamic | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.8 ms | — | 11.1 ms | 3.4 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 31.5 KB | 0.0% | 81.8% |
| `/en/about` | 31.5 KB | 0.0% | 88.6% |
| `/en/blog` | 31.5 KB | 0.0% | 85.2% |
| `/en/careers` | 31.5 KB | 0.0% | 87.5% |
| `/en/contact` | 31.5 KB | 0.0% | 98.9% |
| `/en/faq` | 31.5 KB | 0.0% | 88.6% |
| `/en/pricing` | 31.5 KB | 0.0% | 95.5% |
| `/en/products` | 31.5 KB | 0.0% | 90.9% |
| `/en/settings` | 31.5 KB | 0.0% | 94.3% |
| `/en/team` | 31.5 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 31.5 KB | 0.0% | 81.8% |
| `/fr/about` | 31.5 KB | 0.0% | 88.6% |
| `/fr/blog` | 31.5 KB | 0.0% | 85.2% |
| `/fr/careers` | 31.5 KB | 0.0% | 87.5% |
| `/fr/contact` | 31.5 KB | 0.0% | 98.9% |
| `/fr/faq` | 31.5 KB | 0.0% | 88.6% |
| `/fr/pricing` | 31.5 KB | 0.0% | 95.5% |
| `/fr/products` | 31.5 KB | 0.0% | 90.9% |
| `/fr/settings` | 31.5 KB | 0.0% | 94.3% |
| `/fr/team` | 31.5 KB | 0.0% | 88.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.9 ms | 0.3 ms | 2.2 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.3 ms | 3.4 ms | 1.7 ms |
| `fr` | 10.9 ms | 3.5 ms | 1.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 31.5 KB | 0.0% | 81.8% |
| `/en/about` | 31.5 KB | 0.0% | 88.6% |
| `/en/blog` | 31.5 KB | 0.0% | 85.2% |
| `/en/careers` | 31.5 KB | 0.0% | 87.5% |
| `/en/contact` | 31.5 KB | 0.0% | 98.9% |
| `/en/faq` | 31.5 KB | 0.0% | 88.6% |
| `/en/pricing` | 31.5 KB | 0.0% | 95.5% |
| `/en/products` | 31.5 KB | 0.0% | 90.9% |
| `/en/settings` | 31.5 KB | 0.0% | 94.3% |
| `/en/team` | 31.5 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 31.5 KB | 0.0% | 81.8% |
| `/fr/about` | 31.5 KB | 0.0% | 88.6% |
| `/fr/blog` | 31.5 KB | 0.0% | 85.2% |
| `/fr/careers` | 31.5 KB | 0.0% | 87.5% |
| `/fr/contact` | 31.5 KB | 0.0% | 98.9% |
| `/fr/faq` | 31.5 KB | 0.0% | 88.6% |
| `/fr/pricing` | 31.5 KB | 0.0% | 95.5% |
| `/fr/products` | 31.5 KB | 0.0% | 90.9% |
| `/fr/settings` | 31.5 KB | 0.0% | 94.3% |
| `/fr/team` | 31.5 KB | 0.0% | 88.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.9 ms | 0.3 ms | 2.2 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.3 ms | 3.4 ms | 1.7 ms |
| `fr` | 10.9 ms | 3.5 ms | 1.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 31.5 KB | 0.0% | 81.8% |
| `/en/about` | 31.5 KB | 0.0% | 88.6% |
| `/en/blog` | 31.5 KB | 0.0% | 85.2% |
| `/en/careers` | 31.5 KB | 0.0% | 87.5% |
| `/en/contact` | 31.5 KB | 0.0% | 98.9% |
| `/en/faq` | 31.5 KB | 0.0% | 88.6% |
| `/en/pricing` | 31.5 KB | 0.0% | 95.5% |
| `/en/products` | 31.5 KB | 0.0% | 90.9% |
| `/en/settings` | 31.5 KB | 0.0% | 94.3% |
| `/en/team` | 31.5 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 31.5 KB | 0.0% | 81.8% |
| `/fr/about` | 31.5 KB | 0.0% | 88.6% |
| `/fr/blog` | 31.5 KB | 0.0% | 85.2% |
| `/fr/careers` | 31.5 KB | 0.0% | 87.5% |
| `/fr/contact` | 31.5 KB | 0.0% | 98.9% |
| `/fr/faq` | 31.5 KB | 0.0% | 88.6% |
| `/fr/pricing` | 31.5 KB | 0.0% | 95.5% |
| `/fr/products` | 31.5 KB | 0.0% | 90.9% |
| `/fr/settings` | 31.5 KB | 0.0% | 94.3% |
| `/fr/team` | 31.5 KB | 0.0% | 88.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.9 ms | 0.3 ms | 2.2 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.3 ms | 3.4 ms | 1.7 ms |
| `fr` | 10.9 ms | 3.5 ms | 1.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 31.5 KB | 0.0% | 81.8% |
| `/en/about` | 31.5 KB | 0.0% | 88.6% |
| `/en/blog` | 31.5 KB | 0.0% | 85.2% |
| `/en/careers` | 31.5 KB | 0.0% | 87.5% |
| `/en/contact` | 31.5 KB | 0.0% | 98.9% |
| `/en/faq` | 31.5 KB | 0.0% | 88.6% |
| `/en/pricing` | 31.5 KB | 0.0% | 95.5% |
| `/en/products` | 31.5 KB | 0.0% | 90.9% |
| `/en/settings` | 31.5 KB | 0.0% | 94.3% |
| `/en/team` | 31.5 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 31.5 KB | 0.0% | 81.8% |
| `/fr/about` | 31.5 KB | 0.0% | 88.6% |
| `/fr/blog` | 31.5 KB | 0.0% | 85.2% |
| `/fr/careers` | 31.5 KB | 0.0% | 87.5% |
| `/fr/contact` | 31.5 KB | 0.0% | 98.9% |
| `/fr/faq` | 31.5 KB | 0.0% | 88.6% |
| `/fr/pricing` | 31.5 KB | 0.0% | 95.5% |
| `/fr/products` | 31.5 KB | 0.0% | 90.9% |
| `/fr/settings` | 31.5 KB | 0.0% | 94.3% |
| `/fr/team` | 31.5 KB | 0.0% | 88.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.9 ms | 0.3 ms | 2.2 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.3 ms | 3.4 ms | 1.7 ms |
| `fr` | 10.9 ms | 3.5 ms | 1.6 ms |

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.12 | 2.3 KB | 6.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 104.8 KB | 50.0% | 90.0% | 6.0 KB | 1.4 ms | — | 13.3 ms | 4.2 ms |
| Dynamic | 🔶 | 38.1 KB | 36.5% | 0.0% | 6.4 KB | 1.3 ms | — | 12.2 ms | 3.8 ms |
| Scoped Static | ✅ | 104.8 KB | 50.0% | 90.0% | 6.0 KB | 1.4 ms | — | 13.3 ms | 4.2 ms |
| Scoped Dynamic | 🔶 | 38.1 KB | 36.5% | 0.0% | 6.4 KB | 1.3 ms | — | 12.2 ms | 3.8 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 104.8 KB | 53.7% | 79.5% |
| `/en/about` | 104.8 KB | 53.7% | 87.2% |
| `/en/blog` | 104.8 KB | 53.7% | 83.3% |
| `/en/careers` | 104.8 KB | 53.7% | 85.9% |
| `/en/contact` | 104.8 KB | 53.7% | 98.7% |
| `/en/faq` | 104.8 KB | 53.7% | 87.2% |
| `/en/pricing` | 104.8 KB | 53.7% | 94.9% |
| `/en/products` | 104.8 KB | 53.7% | 89.7% |
| `/en/settings` | 104.8 KB | 53.7% | 93.6% |
| `/en/team` | 104.8 KB | 53.7% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 104.8 KB | 46.3% | 80.2% |
| `/fr/about` | 104.8 KB | 46.3% | 83.7% |
| `/fr/blog` | 104.8 KB | 46.3% | 84.9% |
| `/fr/careers` | 104.8 KB | 46.3% | 87.2% |
| `/fr/contact` | 104.8 KB | 46.3% | 97.7% |
| `/fr/faq` | 104.8 KB | 46.3% | 88.4% |
| `/fr/pricing` | 104.8 KB | 46.3% | 95.3% |
| `/fr/products` | 104.8 KB | 46.3% | 90.7% |
| `/fr/settings` | 104.8 KB | 46.3% | 91.9% |
| `/fr/team` | 104.8 KB | 46.3% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.7 ms | 1.1 ms | 3.2 ms | 0.0 ms |
| `fr` | 1.2 ms | 1.0 ms | 1.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.8 ms | 4.3 ms | 2.5 ms |
| `fr` | 12.9 ms | 4.1 ms | 2.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 38.7 KB | 0.0% | 0.0% |
| `/en/about` | 38.0 KB | 0.0% | 0.0% |
| `/en/blog` | 37.5 KB | 0.0% | 0.0% |
| `/en/careers` | 36.9 KB | 0.0% | 0.0% |
| `/en/contact` | 37.2 KB | 0.0% | 0.0% |
| `/en/faq` | 37.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 37.0 KB | 0.0% | 0.0% |
| `/en/products` | 37.2 KB | 0.0% | 0.0% |
| `/en/settings` | 37.6 KB | 0.0% | 0.0% |
| `/en/team` | 37.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 42.0 KB | 48.6% | 0.0% |
| `/fr/about` | 40.4 KB | 42.9% | 0.0% |
| `/fr/blog` | 37.5 KB | 100.0% | 0.0% |
| `/fr/careers` | 36.9 KB | 100.0% | 0.0% |
| `/fr/contact` | 38.6 KB | 44.4% | 0.0% |
| `/fr/faq` | 39.8 KB | 50.0% | 0.0% |
| `/fr/pricing` | 37.0 KB | 100.0% | 0.0% |
| `/fr/products` | 37.2 KB | 100.0% | 0.0% |
| `/fr/settings` | 39.6 KB | 44.4% | 0.0% |
| `/fr/team` | 37.3 KB | 100.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.5 ms | 0.8 ms | 3.3 ms | 0.0 ms |
| `fr` | 1.1 ms | 0.9 ms | 1.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.5 ms | 3.9 ms | 2.2 ms |
| `fr` | 11.9 ms | 3.8 ms | 2.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 104.8 KB | 53.7% | 79.5% |
| `/en/about` | 104.8 KB | 53.7% | 87.2% |
| `/en/blog` | 104.8 KB | 53.7% | 83.3% |
| `/en/careers` | 104.8 KB | 53.7% | 85.9% |
| `/en/contact` | 104.8 KB | 53.7% | 98.7% |
| `/en/faq` | 104.8 KB | 53.7% | 87.2% |
| `/en/pricing` | 104.8 KB | 53.7% | 94.9% |
| `/en/products` | 104.8 KB | 53.7% | 89.7% |
| `/en/settings` | 104.8 KB | 53.7% | 93.6% |
| `/en/team` | 104.8 KB | 53.7% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 104.8 KB | 46.3% | 80.2% |
| `/fr/about` | 104.8 KB | 46.3% | 83.7% |
| `/fr/blog` | 104.8 KB | 46.3% | 84.9% |
| `/fr/careers` | 104.8 KB | 46.3% | 87.2% |
| `/fr/contact` | 104.8 KB | 46.3% | 97.7% |
| `/fr/faq` | 104.8 KB | 46.3% | 88.4% |
| `/fr/pricing` | 104.8 KB | 46.3% | 95.3% |
| `/fr/products` | 104.8 KB | 46.3% | 90.7% |
| `/fr/settings` | 104.8 KB | 46.3% | 91.9% |
| `/fr/team` | 104.8 KB | 46.3% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.7 ms | 1.1 ms | 3.2 ms | 0.0 ms |
| `fr` | 1.2 ms | 1.0 ms | 1.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.8 ms | 4.3 ms | 2.5 ms |
| `fr` | 12.9 ms | 4.1 ms | 2.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 38.7 KB | 0.0% | 0.0% |
| `/en/about` | 38.0 KB | 0.0% | 0.0% |
| `/en/blog` | 37.5 KB | 0.0% | 0.0% |
| `/en/careers` | 36.9 KB | 0.0% | 0.0% |
| `/en/contact` | 37.2 KB | 0.0% | 0.0% |
| `/en/faq` | 37.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 37.0 KB | 0.0% | 0.0% |
| `/en/products` | 37.2 KB | 0.0% | 0.0% |
| `/en/settings` | 37.6 KB | 0.0% | 0.0% |
| `/en/team` | 37.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 42.0 KB | 48.6% | 0.0% |
| `/fr/about` | 40.4 KB | 42.9% | 0.0% |
| `/fr/blog` | 37.5 KB | 100.0% | 0.0% |
| `/fr/careers` | 36.9 KB | 100.0% | 0.0% |
| `/fr/contact` | 38.6 KB | 44.4% | 0.0% |
| `/fr/faq` | 39.8 KB | 50.0% | 0.0% |
| `/fr/pricing` | 37.0 KB | 100.0% | 0.0% |
| `/fr/products` | 37.2 KB | 100.0% | 0.0% |
| `/fr/settings` | 39.6 KB | 44.4% | 0.0% |
| `/fr/team` | 37.3 KB | 100.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.5 ms | 0.8 ms | 3.3 ms | 0.0 ms |
| `fr` | 1.1 ms | 0.9 ms | 1.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.5 ms | 3.9 ms | 2.2 ms |
| `fr` | 11.9 ms | 3.8 ms | 2.3 ms |

</details>

---

## paraglide-js

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.17.0 | 1.5 KB | 3.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 105.9 KB | 0.0% | 90.0% | 7.4 KB | 1.2 ms | — | 17.0 ms | 9.6 ms |
| Dynamic | ✅ | 105.9 KB | 0.0% | 90.0% | 7.4 KB | 1.2 ms | — | 17.0 ms | 9.6 ms |
| Scoped Static | ✅ | 105.9 KB | 0.0% | 90.0% | 7.4 KB | 1.2 ms | — | 17.0 ms | 9.6 ms |
| Scoped Dynamic | ✅ | 105.9 KB | 0.0% | 90.0% | 7.4 KB | 1.2 ms | — | 17.0 ms | 9.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 105.9 KB | 0.0% | 81.8% |
| `/en/about` | 105.9 KB | 0.0% | 88.6% |
| `/en/blog` | 105.9 KB | 0.0% | 85.2% |
| `/en/careers` | 105.9 KB | 0.0% | 87.5% |
| `/en/contact` | 105.9 KB | 0.0% | 98.9% |
| `/en/faq` | 105.9 KB | 0.0% | 88.6% |
| `/en/pricing` | 105.9 KB | 0.0% | 95.5% |
| `/en/products` | 105.9 KB | 0.0% | 90.9% |
| `/en/settings` | 105.9 KB | 0.0% | 94.3% |
| `/en/team` | 105.9 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 105.9 KB | 0.0% | 81.8% |
| `/fr/about` | 105.9 KB | 0.0% | 88.6% |
| `/fr/blog` | 105.9 KB | 0.0% | 85.2% |
| `/fr/careers` | 105.9 KB | 0.0% | 87.5% |
| `/fr/contact` | 105.9 KB | 0.0% | 98.9% |
| `/fr/faq` | 105.9 KB | 0.0% | 88.6% |
| `/fr/pricing` | 105.9 KB | 0.0% | 95.5% |
| `/fr/products` | 105.9 KB | 0.0% | 90.9% |
| `/fr/settings` | 105.9 KB | 0.0% | 94.3% |
| `/fr/team` | 105.9 KB | 0.0% | 88.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.4 ms | 0.7 ms | 3.8 ms | 0.0 ms |
| `fr` | 1.0 ms | 0.7 ms | 1.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.1 ms | 9.7 ms | 7.8 ms |
| `fr` | 16.9 ms | 9.5 ms | 7.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 105.9 KB | 0.0% | 81.8% |
| `/en/about` | 105.9 KB | 0.0% | 88.6% |
| `/en/blog` | 105.9 KB | 0.0% | 85.2% |
| `/en/careers` | 105.9 KB | 0.0% | 87.5% |
| `/en/contact` | 105.9 KB | 0.0% | 98.9% |
| `/en/faq` | 105.9 KB | 0.0% | 88.6% |
| `/en/pricing` | 105.9 KB | 0.0% | 95.5% |
| `/en/products` | 105.9 KB | 0.0% | 90.9% |
| `/en/settings` | 105.9 KB | 0.0% | 94.3% |
| `/en/team` | 105.9 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 105.9 KB | 0.0% | 81.8% |
| `/fr/about` | 105.9 KB | 0.0% | 88.6% |
| `/fr/blog` | 105.9 KB | 0.0% | 85.2% |
| `/fr/careers` | 105.9 KB | 0.0% | 87.5% |
| `/fr/contact` | 105.9 KB | 0.0% | 98.9% |
| `/fr/faq` | 105.9 KB | 0.0% | 88.6% |
| `/fr/pricing` | 105.9 KB | 0.0% | 95.5% |
| `/fr/products` | 105.9 KB | 0.0% | 90.9% |
| `/fr/settings` | 105.9 KB | 0.0% | 94.3% |
| `/fr/team` | 105.9 KB | 0.0% | 88.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.4 ms | 0.7 ms | 3.8 ms | 0.0 ms |
| `fr` | 1.0 ms | 0.7 ms | 1.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.1 ms | 9.7 ms | 7.8 ms |
| `fr` | 16.9 ms | 9.5 ms | 7.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 105.9 KB | 0.0% | 81.8% |
| `/en/about` | 105.9 KB | 0.0% | 88.6% |
| `/en/blog` | 105.9 KB | 0.0% | 85.2% |
| `/en/careers` | 105.9 KB | 0.0% | 87.5% |
| `/en/contact` | 105.9 KB | 0.0% | 98.9% |
| `/en/faq` | 105.9 KB | 0.0% | 88.6% |
| `/en/pricing` | 105.9 KB | 0.0% | 95.5% |
| `/en/products` | 105.9 KB | 0.0% | 90.9% |
| `/en/settings` | 105.9 KB | 0.0% | 94.3% |
| `/en/team` | 105.9 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 105.9 KB | 0.0% | 81.8% |
| `/fr/about` | 105.9 KB | 0.0% | 88.6% |
| `/fr/blog` | 105.9 KB | 0.0% | 85.2% |
| `/fr/careers` | 105.9 KB | 0.0% | 87.5% |
| `/fr/contact` | 105.9 KB | 0.0% | 98.9% |
| `/fr/faq` | 105.9 KB | 0.0% | 88.6% |
| `/fr/pricing` | 105.9 KB | 0.0% | 95.5% |
| `/fr/products` | 105.9 KB | 0.0% | 90.9% |
| `/fr/settings` | 105.9 KB | 0.0% | 94.3% |
| `/fr/team` | 105.9 KB | 0.0% | 88.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.4 ms | 0.7 ms | 3.8 ms | 0.0 ms |
| `fr` | 1.0 ms | 0.7 ms | 1.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.1 ms | 9.7 ms | 7.8 ms |
| `fr` | 16.9 ms | 9.5 ms | 7.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 105.9 KB | 0.0% | 81.8% |
| `/en/about` | 105.9 KB | 0.0% | 88.6% |
| `/en/blog` | 105.9 KB | 0.0% | 85.2% |
| `/en/careers` | 105.9 KB | 0.0% | 87.5% |
| `/en/contact` | 105.9 KB | 0.0% | 98.9% |
| `/en/faq` | 105.9 KB | 0.0% | 88.6% |
| `/en/pricing` | 105.9 KB | 0.0% | 95.5% |
| `/en/products` | 105.9 KB | 0.0% | 90.9% |
| `/en/settings` | 105.9 KB | 0.0% | 94.3% |
| `/en/team` | 105.9 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 105.9 KB | 0.0% | 81.8% |
| `/fr/about` | 105.9 KB | 0.0% | 88.6% |
| `/fr/blog` | 105.9 KB | 0.0% | 85.2% |
| `/fr/careers` | 105.9 KB | 0.0% | 87.5% |
| `/fr/contact` | 105.9 KB | 0.0% | 98.9% |
| `/fr/faq` | 105.9 KB | 0.0% | 88.6% |
| `/fr/pricing` | 105.9 KB | 0.0% | 95.5% |
| `/fr/products` | 105.9 KB | 0.0% | 90.9% |
| `/fr/settings` | 105.9 KB | 0.0% | 94.3% |
| `/fr/team` | 105.9 KB | 0.0% | 88.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.4 ms | 0.7 ms | 3.8 ms | 0.0 ms |
| `fr` | 1.0 ms | 0.7 ms | 1.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.1 ms | 9.7 ms | 7.8 ms |
| `fr` | 16.9 ms | 9.5 ms | 7.8 ms |

</details>

---

## svelte-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.0.1 | 15.9 KB | 62.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 103.0 KB | 50.0% | 90.0% | 16.2 KB | 0.8 ms | — | 11.8 ms | 3.9 ms |
| Dynamic | ✅ | 103.0 KB | 50.0% | 90.0% | 16.2 KB | 0.8 ms | — | 11.8 ms | 3.9 ms |
| Scoped Static | ✅ | 103.0 KB | 50.0% | 90.0% | 16.2 KB | 0.8 ms | — | 11.8 ms | 3.9 ms |
| Scoped Dynamic | ✅ | 103.0 KB | 50.0% | 90.0% | 16.2 KB | 0.8 ms | — | 11.8 ms | 3.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 103.0 KB | 53.8% | 81.8% |
| `/en/about` | 103.0 KB | 53.8% | 88.6% |
| `/en/blog` | 103.0 KB | 53.8% | 85.2% |
| `/en/careers` | 103.0 KB | 53.8% | 87.5% |
| `/en/contact` | 103.0 KB | 53.8% | 98.9% |
| `/en/faq` | 103.0 KB | 53.8% | 88.6% |
| `/en/pricing` | 103.0 KB | 53.8% | 95.5% |
| `/en/products` | 103.0 KB | 53.8% | 90.9% |
| `/en/settings` | 103.0 KB | 53.8% | 94.3% |
| `/en/team` | 103.0 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 103.0 KB | 46.2% | 83.5% |
| `/fr/about` | 103.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 103.0 KB | 46.2% | 87.4% |
| `/fr/careers` | 103.0 KB | 46.2% | 87.4% |
| `/fr/contact` | 103.0 KB | 46.2% | 99.0% |
| `/fr/faq` | 103.0 KB | 46.2% | 90.3% |
| `/fr/pricing` | 103.0 KB | 46.2% | 91.3% |
| `/fr/products` | 103.0 KB | 46.2% | 90.3% |
| `/fr/settings` | 103.0 KB | 46.2% | 94.2% |
| `/fr/team` | 103.0 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.5 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.8 ms | 0.6 ms | 1.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.6 ms | 4.1 ms | 2.0 ms |
| `fr` | 11.9 ms | 3.8 ms | 2.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 103.0 KB | 53.8% | 81.8% |
| `/en/about` | 103.0 KB | 53.8% | 88.6% |
| `/en/blog` | 103.0 KB | 53.8% | 85.2% |
| `/en/careers` | 103.0 KB | 53.8% | 87.5% |
| `/en/contact` | 103.0 KB | 53.8% | 98.9% |
| `/en/faq` | 103.0 KB | 53.8% | 88.6% |
| `/en/pricing` | 103.0 KB | 53.8% | 95.5% |
| `/en/products` | 103.0 KB | 53.8% | 90.9% |
| `/en/settings` | 103.0 KB | 53.8% | 94.3% |
| `/en/team` | 103.0 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 103.0 KB | 46.2% | 83.5% |
| `/fr/about` | 103.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 103.0 KB | 46.2% | 87.4% |
| `/fr/careers` | 103.0 KB | 46.2% | 87.4% |
| `/fr/contact` | 103.0 KB | 46.2% | 99.0% |
| `/fr/faq` | 103.0 KB | 46.2% | 90.3% |
| `/fr/pricing` | 103.0 KB | 46.2% | 91.3% |
| `/fr/products` | 103.0 KB | 46.2% | 90.3% |
| `/fr/settings` | 103.0 KB | 46.2% | 94.2% |
| `/fr/team` | 103.0 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.5 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.8 ms | 0.6 ms | 1.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.6 ms | 4.1 ms | 2.0 ms |
| `fr` | 11.9 ms | 3.8 ms | 2.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 103.0 KB | 53.8% | 81.8% |
| `/en/about` | 103.0 KB | 53.8% | 88.6% |
| `/en/blog` | 103.0 KB | 53.8% | 85.2% |
| `/en/careers` | 103.0 KB | 53.8% | 87.5% |
| `/en/contact` | 103.0 KB | 53.8% | 98.9% |
| `/en/faq` | 103.0 KB | 53.8% | 88.6% |
| `/en/pricing` | 103.0 KB | 53.8% | 95.5% |
| `/en/products` | 103.0 KB | 53.8% | 90.9% |
| `/en/settings` | 103.0 KB | 53.8% | 94.3% |
| `/en/team` | 103.0 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 103.0 KB | 46.2% | 83.5% |
| `/fr/about` | 103.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 103.0 KB | 46.2% | 87.4% |
| `/fr/careers` | 103.0 KB | 46.2% | 87.4% |
| `/fr/contact` | 103.0 KB | 46.2% | 99.0% |
| `/fr/faq` | 103.0 KB | 46.2% | 90.3% |
| `/fr/pricing` | 103.0 KB | 46.2% | 91.3% |
| `/fr/products` | 103.0 KB | 46.2% | 90.3% |
| `/fr/settings` | 103.0 KB | 46.2% | 94.2% |
| `/fr/team` | 103.0 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.5 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.8 ms | 0.6 ms | 1.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.6 ms | 4.1 ms | 2.0 ms |
| `fr` | 11.9 ms | 3.8 ms | 2.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 103.0 KB | 53.8% | 81.8% |
| `/en/about` | 103.0 KB | 53.8% | 88.6% |
| `/en/blog` | 103.0 KB | 53.8% | 85.2% |
| `/en/careers` | 103.0 KB | 53.8% | 87.5% |
| `/en/contact` | 103.0 KB | 53.8% | 98.9% |
| `/en/faq` | 103.0 KB | 53.8% | 88.6% |
| `/en/pricing` | 103.0 KB | 53.8% | 95.5% |
| `/en/products` | 103.0 KB | 53.8% | 90.9% |
| `/en/settings` | 103.0 KB | 53.8% | 94.3% |
| `/en/team` | 103.0 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 103.0 KB | 46.2% | 83.5% |
| `/fr/about` | 103.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 103.0 KB | 46.2% | 87.4% |
| `/fr/careers` | 103.0 KB | 46.2% | 87.4% |
| `/fr/contact` | 103.0 KB | 46.2% | 99.0% |
| `/fr/faq` | 103.0 KB | 46.2% | 90.3% |
| `/fr/pricing` | 103.0 KB | 46.2% | 91.3% |
| `/fr/products` | 103.0 KB | 46.2% | 90.3% |
| `/fr/settings` | 103.0 KB | 46.2% | 94.2% |
| `/fr/team` | 103.0 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.5 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.8 ms | 0.6 ms | 1.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.6 ms | 4.1 ms | 2.0 ms |
| `fr` | 11.9 ms | 3.8 ms | 2.0 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 4 |
| Total app entries | 5 |
| With lib size data | 4 |
| With page bundle data | 16 |
| With component data | 16 |
| With reactivity data | 16 |
| With rendering data | 16 |
