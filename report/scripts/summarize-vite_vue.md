# Vite + Vue — i18n Benchmark Results

_Generated: 2026-09-26_

## Metric Legend

| Column | What it measures |
| :--- | :--- |
| **Lib size (gz)** | Gzip bytes of the minified i18n library via an empty-component build |
| **Page JS avg (gz)** | Average gzip JS bundle per page across all locales |
| **Locale leak %** | % of JS bundle containing strings from locales the user is NOT using |
| **Page leak %** | % of JS bundle containing strings from pages the user is NOT on |
| **Comp avg (gz)** | Average gzip size of individual components compiled in isolation |
| **E2E reactivity** | Median wall-clock time from locale `<select>` change to `html[lang]` DOM update (ms); `×n` = relative to the base app in the same CI job |
| **React Profiler** | Sum of React `actualDuration` during locale-switch re-renders (ms) |
| **Page load** | Median `PerformanceNavigationTiming.duration` — full page load time (ms); `×n` = relative to the base app in the same CI job |
| **Hydration avg** | Custom perf-mark delta for React hydration phase (ms); — = not instrumented |

> **Status icons:** ✅ all data · 🔶 partial · ⬜ missing · ❌ error  
> **⚠ INVALID** = test ran but all measured values were zero (missing instrumentation or broken test)

## Libraries

- [@intlayer/vue-i18n](#intlayer-vue-i18n)
- [base](#base)
- [fluent-vue](#fluent-vue)
- [intlayer](#intlayer)
- [tolgee](#tolgee)
- [vue-i18n](#vue-i18n)

## @intlayer/vue-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.10 | 9.6 KB | 28.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 120.2 KB | 50.0% | 90.0% | 82.0 KB | 2.2 ms | — | 13.0 ms | 5.3 ms |
| Dynamic | ↳ Static | 120.2 KB | 50.0% | 90.0% | 82.0 KB | 2.2 ms | — | 13.0 ms | 5.3 ms |
| Scoped Static | ↳ Static | 120.2 KB | 50.0% | 90.0% | 82.0 KB | 2.2 ms | — | 13.0 ms | 5.3 ms |
| Scoped Dynamic | ↳ Static | 120.2 KB | 50.0% | 90.0% | 82.0 KB | 2.2 ms | — | 13.0 ms | 5.3 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 120.4 KB | 53.8% | 81.8% |
| `/en/about` | 120.0 KB | 53.8% | 88.6% |
| `/en/blog` | 119.9 KB | 53.8% | 85.2% |
| `/en/careers` | 120.5 KB | 53.8% | 87.5% |
| `/en/contact` | 120.2 KB | 53.8% | 98.9% |
| `/en/faq` | 119.7 KB | 53.8% | 88.6% |
| `/en/pricing` | 120.1 KB | 53.8% | 95.5% |
| `/en/products` | 119.8 KB | 53.8% | 90.9% |
| `/en/settings` | 121.6 KB | 53.8% | 94.3% |
| `/en/team` | 119.8 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 120.4 KB | 46.2% | 83.5% |
| `/fr/about` | 120.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 119.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 120.5 KB | 46.2% | 87.4% |
| `/fr/contact` | 120.2 KB | 46.2% | 99.0% |
| `/fr/faq` | 119.7 KB | 46.2% | 90.3% |
| `/fr/pricing` | 120.1 KB | 46.2% | 91.3% |
| `/fr/products` | 119.8 KB | 46.2% | 90.3% |
| `/fr/settings` | 121.6 KB | 46.2% | 94.2% |
| `/fr/team` | 119.8 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-compat-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.4 ms | 1.6 ms | 5.4 ms | 0.0 ms |
| `fr` | 2.0 ms | 1.6 ms | 3.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.3 ms | 5.6 ms | 1.9 ms |
| `fr` | 12.7 ms | 4.9 ms | 1.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 120.4 KB | 53.8% | 81.8% |
| `/en/about` | 120.0 KB | 53.8% | 88.6% |
| `/en/blog` | 119.9 KB | 53.8% | 85.2% |
| `/en/careers` | 120.5 KB | 53.8% | 87.5% |
| `/en/contact` | 120.2 KB | 53.8% | 98.9% |
| `/en/faq` | 119.7 KB | 53.8% | 88.6% |
| `/en/pricing` | 120.1 KB | 53.8% | 95.5% |
| `/en/products` | 119.8 KB | 53.8% | 90.9% |
| `/en/settings` | 121.6 KB | 53.8% | 94.3% |
| `/en/team` | 119.8 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 120.4 KB | 46.2% | 83.5% |
| `/fr/about` | 120.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 119.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 120.5 KB | 46.2% | 87.4% |
| `/fr/contact` | 120.2 KB | 46.2% | 99.0% |
| `/fr/faq` | 119.7 KB | 46.2% | 90.3% |
| `/fr/pricing` | 120.1 KB | 46.2% | 91.3% |
| `/fr/products` | 119.8 KB | 46.2% | 90.3% |
| `/fr/settings` | 121.6 KB | 46.2% | 94.2% |
| `/fr/team` | 119.8 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-compat-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.4 ms | 1.6 ms | 5.4 ms | 0.0 ms |
| `fr` | 2.0 ms | 1.6 ms | 3.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.3 ms | 5.6 ms | 1.9 ms |
| `fr` | 12.7 ms | 4.9 ms | 1.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 120.4 KB | 53.8% | 81.8% |
| `/en/about` | 120.0 KB | 53.8% | 88.6% |
| `/en/blog` | 119.9 KB | 53.8% | 85.2% |
| `/en/careers` | 120.5 KB | 53.8% | 87.5% |
| `/en/contact` | 120.2 KB | 53.8% | 98.9% |
| `/en/faq` | 119.7 KB | 53.8% | 88.6% |
| `/en/pricing` | 120.1 KB | 53.8% | 95.5% |
| `/en/products` | 119.8 KB | 53.8% | 90.9% |
| `/en/settings` | 121.6 KB | 53.8% | 94.3% |
| `/en/team` | 119.8 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 120.4 KB | 46.2% | 83.5% |
| `/fr/about` | 120.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 119.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 120.5 KB | 46.2% | 87.4% |
| `/fr/contact` | 120.2 KB | 46.2% | 99.0% |
| `/fr/faq` | 119.7 KB | 46.2% | 90.3% |
| `/fr/pricing` | 120.1 KB | 46.2% | 91.3% |
| `/fr/products` | 119.8 KB | 46.2% | 90.3% |
| `/fr/settings` | 121.6 KB | 46.2% | 94.2% |
| `/fr/team` | 119.8 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-compat-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.4 ms | 1.6 ms | 5.4 ms | 0.0 ms |
| `fr` | 2.0 ms | 1.6 ms | 3.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.3 ms | 5.6 ms | 1.9 ms |
| `fr` | 12.7 ms | 4.9 ms | 1.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 120.4 KB | 53.8% | 81.8% |
| `/en/about` | 120.0 KB | 53.8% | 88.6% |
| `/en/blog` | 119.9 KB | 53.8% | 85.2% |
| `/en/careers` | 120.5 KB | 53.8% | 87.5% |
| `/en/contact` | 120.2 KB | 53.8% | 98.9% |
| `/en/faq` | 119.7 KB | 53.8% | 88.6% |
| `/en/pricing` | 120.1 KB | 53.8% | 95.5% |
| `/en/products` | 119.8 KB | 53.8% | 90.9% |
| `/en/settings` | 121.6 KB | 53.8% | 94.3% |
| `/en/team` | 119.8 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 120.4 KB | 46.2% | 83.5% |
| `/fr/about` | 120.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 119.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 120.5 KB | 46.2% | 87.4% |
| `/fr/contact` | 120.2 KB | 46.2% | 99.0% |
| `/fr/faq` | 119.7 KB | 46.2% | 90.3% |
| `/fr/pricing` | 120.1 KB | 46.2% | 91.3% |
| `/fr/products` | 119.8 KB | 46.2% | 90.3% |
| `/fr/settings` | 121.6 KB | 46.2% | 94.2% |
| `/fr/team` | 119.8 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-compat-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.4 ms | 1.6 ms | 5.4 ms | 0.0 ms |
| `fr` | 2.0 ms | 1.6 ms | 3.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.3 ms | 5.6 ms | 1.9 ms |
| `fr` | 12.7 ms | 4.9 ms | 1.8 ms |

</details>

---

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 41.3 KB | 0.0% | 0.0% | 0.9 KB | 1.6 ms | — | 13.4 ms | 5.3 ms |
| Dynamic | ✅ | 41.3 KB | 0.0% | 0.0% | 0.9 KB | 1.6 ms | — | 13.4 ms | 5.3 ms |
| Scoped Static | ✅ | 41.3 KB | 0.0% | 0.0% | 0.9 KB | 1.6 ms | — | 13.4 ms | 5.3 ms |
| Scoped Dynamic | ✅ | 41.3 KB | 0.0% | 0.0% | 0.9 KB | 1.6 ms | — | 13.4 ms | 5.3 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 42.2 KB | 0.0% | 0.0% |
| `/en/about` | 41.4 KB | 0.0% | 0.0% |
| `/en/blog` | 41.0 KB | 0.0% | 0.0% |
| `/en/careers` | 41.5 KB | 0.0% | 0.0% |
| `/en/contact` | 40.8 KB | 0.0% | 0.0% |
| `/en/faq` | 41.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 40.9 KB | 0.0% | 0.0% |
| `/en/products` | 40.9 KB | 0.0% | 0.0% |
| `/en/settings` | 42.1 KB | 0.0% | 0.0% |
| `/en/team` | 40.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 42.2 KB | 0.0% | 0.0% |
| `/fr/about` | 41.4 KB | 0.0% | 0.0% |
| `/fr/blog` | 41.0 KB | 0.0% | 0.0% |
| `/fr/careers` | 41.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 40.8 KB | 0.0% | 0.0% |
| `/fr/faq` | 41.3 KB | 0.0% | 0.0% |
| `/fr/pricing` | 40.9 KB | 0.0% | 0.0% |
| `/fr/products` | 40.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 42.1 KB | 0.0% | 0.0% |
| `/fr/team` | 40.9 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.8 ms | 1.1 ms | 3.9 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.1 ms | 2.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.1 ms | 5.6 ms | 1.6 ms |
| `fr` | 12.8 ms | 5.0 ms | 1.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 42.2 KB | 0.0% | 0.0% |
| `/en/about` | 41.4 KB | 0.0% | 0.0% |
| `/en/blog` | 41.0 KB | 0.0% | 0.0% |
| `/en/careers` | 41.5 KB | 0.0% | 0.0% |
| `/en/contact` | 40.8 KB | 0.0% | 0.0% |
| `/en/faq` | 41.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 40.9 KB | 0.0% | 0.0% |
| `/en/products` | 40.9 KB | 0.0% | 0.0% |
| `/en/settings` | 42.1 KB | 0.0% | 0.0% |
| `/en/team` | 40.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 42.2 KB | 0.0% | 0.0% |
| `/fr/about` | 41.4 KB | 0.0% | 0.0% |
| `/fr/blog` | 41.0 KB | 0.0% | 0.0% |
| `/fr/careers` | 41.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 40.8 KB | 0.0% | 0.0% |
| `/fr/faq` | 41.3 KB | 0.0% | 0.0% |
| `/fr/pricing` | 40.9 KB | 0.0% | 0.0% |
| `/fr/products` | 40.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 42.1 KB | 0.0% | 0.0% |
| `/fr/team` | 40.9 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.8 ms | 1.1 ms | 3.9 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.1 ms | 2.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.1 ms | 5.6 ms | 1.6 ms |
| `fr` | 12.8 ms | 5.0 ms | 1.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 42.2 KB | 0.0% | 0.0% |
| `/en/about` | 41.4 KB | 0.0% | 0.0% |
| `/en/blog` | 41.0 KB | 0.0% | 0.0% |
| `/en/careers` | 41.5 KB | 0.0% | 0.0% |
| `/en/contact` | 40.8 KB | 0.0% | 0.0% |
| `/en/faq` | 41.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 40.9 KB | 0.0% | 0.0% |
| `/en/products` | 40.9 KB | 0.0% | 0.0% |
| `/en/settings` | 42.1 KB | 0.0% | 0.0% |
| `/en/team` | 40.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 42.2 KB | 0.0% | 0.0% |
| `/fr/about` | 41.4 KB | 0.0% | 0.0% |
| `/fr/blog` | 41.0 KB | 0.0% | 0.0% |
| `/fr/careers` | 41.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 40.8 KB | 0.0% | 0.0% |
| `/fr/faq` | 41.3 KB | 0.0% | 0.0% |
| `/fr/pricing` | 40.9 KB | 0.0% | 0.0% |
| `/fr/products` | 40.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 42.1 KB | 0.0% | 0.0% |
| `/fr/team` | 40.9 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.8 ms | 1.1 ms | 3.9 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.1 ms | 2.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.1 ms | 5.6 ms | 1.6 ms |
| `fr` | 12.8 ms | 5.0 ms | 1.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 42.2 KB | 0.0% | 0.0% |
| `/en/about` | 41.4 KB | 0.0% | 0.0% |
| `/en/blog` | 41.0 KB | 0.0% | 0.0% |
| `/en/careers` | 41.5 KB | 0.0% | 0.0% |
| `/en/contact` | 40.8 KB | 0.0% | 0.0% |
| `/en/faq` | 41.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 40.9 KB | 0.0% | 0.0% |
| `/en/products` | 40.9 KB | 0.0% | 0.0% |
| `/en/settings` | 42.1 KB | 0.0% | 0.0% |
| `/en/team` | 40.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 42.2 KB | 0.0% | 0.0% |
| `/fr/about` | 41.4 KB | 0.0% | 0.0% |
| `/fr/blog` | 41.0 KB | 0.0% | 0.0% |
| `/fr/careers` | 41.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 40.8 KB | 0.0% | 0.0% |
| `/fr/faq` | 41.3 KB | 0.0% | 0.0% |
| `/fr/pricing` | 40.9 KB | 0.0% | 0.0% |
| `/fr/products` | 40.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 42.1 KB | 0.0% | 0.0% |
| `/fr/team` | 40.9 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.8 ms | 1.1 ms | 3.9 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.1 ms | 2.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.1 ms | 5.6 ms | 1.6 ms |
| `fr` | 12.8 ms | 5.0 ms | 1.8 ms |

</details>

---

## fluent-vue

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 3.8.2 | 29.5 KB | 98.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 171.8 KB | 50.0% | 90.0% | 216.9 KB | 2.5 ms | — | 24.9 ms | 18.3 ms |
| Dynamic | ↳ Static | 171.8 KB | 50.0% | 90.0% | 216.9 KB | 2.5 ms | — | 24.9 ms | 18.3 ms |
| Scoped Static | ↳ Static | 171.8 KB | 50.0% | 90.0% | 216.9 KB | 2.5 ms | — | 24.9 ms | 18.3 ms |
| Scoped Dynamic | ↳ Static | 171.8 KB | 50.0% | 90.0% | 216.9 KB | 2.5 ms | — | 24.9 ms | 18.3 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 172.1 KB | 53.8% | 81.8% |
| `/en/about` | 171.6 KB | 53.8% | 88.6% |
| `/en/blog` | 171.5 KB | 53.8% | 85.2% |
| `/en/careers` | 172.2 KB | 53.8% | 87.5% |
| `/en/contact` | 171.8 KB | 53.8% | 98.9% |
| `/en/faq` | 171.0 KB | 53.8% | 88.6% |
| `/en/pricing` | 171.7 KB | 53.8% | 95.5% |
| `/en/products` | 171.5 KB | 53.8% | 90.9% |
| `/en/settings` | 173.5 KB | 53.8% | 94.3% |
| `/en/team` | 171.1 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 172.1 KB | 46.2% | 83.5% |
| `/fr/about` | 171.6 KB | 46.2% | 86.4% |
| `/fr/blog` | 171.5 KB | 46.2% | 87.4% |
| `/fr/careers` | 172.2 KB | 46.2% | 87.4% |
| `/fr/contact` | 171.8 KB | 46.2% | 99.0% |
| `/fr/faq` | 171.0 KB | 46.2% | 90.3% |
| `/fr/pricing` | 171.7 KB | 46.2% | 91.3% |
| `/fr/products` | 171.5 KB | 46.2% | 90.3% |
| `/fr/settings` | 173.5 KB | 46.2% | 94.2% |
| `/fr/team` | 171.1 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.5 ms | 1.8 ms | 4.9 ms | 0.0 ms |
| `fr` | 2.4 ms | 1.8 ms | 3.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 24.3 ms | 17.7 ms | 1.9 ms |
| `fr` | 25.4 ms | 18.8 ms | 2.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 172.1 KB | 53.8% | 81.8% |
| `/en/about` | 171.6 KB | 53.8% | 88.6% |
| `/en/blog` | 171.5 KB | 53.8% | 85.2% |
| `/en/careers` | 172.2 KB | 53.8% | 87.5% |
| `/en/contact` | 171.8 KB | 53.8% | 98.9% |
| `/en/faq` | 171.0 KB | 53.8% | 88.6% |
| `/en/pricing` | 171.7 KB | 53.8% | 95.5% |
| `/en/products` | 171.5 KB | 53.8% | 90.9% |
| `/en/settings` | 173.5 KB | 53.8% | 94.3% |
| `/en/team` | 171.1 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 172.1 KB | 46.2% | 83.5% |
| `/fr/about` | 171.6 KB | 46.2% | 86.4% |
| `/fr/blog` | 171.5 KB | 46.2% | 87.4% |
| `/fr/careers` | 172.2 KB | 46.2% | 87.4% |
| `/fr/contact` | 171.8 KB | 46.2% | 99.0% |
| `/fr/faq` | 171.0 KB | 46.2% | 90.3% |
| `/fr/pricing` | 171.7 KB | 46.2% | 91.3% |
| `/fr/products` | 171.5 KB | 46.2% | 90.3% |
| `/fr/settings` | 173.5 KB | 46.2% | 94.2% |
| `/fr/team` | 171.1 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.5 ms | 1.8 ms | 4.9 ms | 0.0 ms |
| `fr` | 2.4 ms | 1.8 ms | 3.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 24.3 ms | 17.7 ms | 1.9 ms |
| `fr` | 25.4 ms | 18.8 ms | 2.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 172.1 KB | 53.8% | 81.8% |
| `/en/about` | 171.6 KB | 53.8% | 88.6% |
| `/en/blog` | 171.5 KB | 53.8% | 85.2% |
| `/en/careers` | 172.2 KB | 53.8% | 87.5% |
| `/en/contact` | 171.8 KB | 53.8% | 98.9% |
| `/en/faq` | 171.0 KB | 53.8% | 88.6% |
| `/en/pricing` | 171.7 KB | 53.8% | 95.5% |
| `/en/products` | 171.5 KB | 53.8% | 90.9% |
| `/en/settings` | 173.5 KB | 53.8% | 94.3% |
| `/en/team` | 171.1 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 172.1 KB | 46.2% | 83.5% |
| `/fr/about` | 171.6 KB | 46.2% | 86.4% |
| `/fr/blog` | 171.5 KB | 46.2% | 87.4% |
| `/fr/careers` | 172.2 KB | 46.2% | 87.4% |
| `/fr/contact` | 171.8 KB | 46.2% | 99.0% |
| `/fr/faq` | 171.0 KB | 46.2% | 90.3% |
| `/fr/pricing` | 171.7 KB | 46.2% | 91.3% |
| `/fr/products` | 171.5 KB | 46.2% | 90.3% |
| `/fr/settings` | 173.5 KB | 46.2% | 94.2% |
| `/fr/team` | 171.1 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.5 ms | 1.8 ms | 4.9 ms | 0.0 ms |
| `fr` | 2.4 ms | 1.8 ms | 3.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 24.3 ms | 17.7 ms | 1.9 ms |
| `fr` | 25.4 ms | 18.8 ms | 2.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 172.1 KB | 53.8% | 81.8% |
| `/en/about` | 171.6 KB | 53.8% | 88.6% |
| `/en/blog` | 171.5 KB | 53.8% | 85.2% |
| `/en/careers` | 172.2 KB | 53.8% | 87.5% |
| `/en/contact` | 171.8 KB | 53.8% | 98.9% |
| `/en/faq` | 171.0 KB | 53.8% | 88.6% |
| `/en/pricing` | 171.7 KB | 53.8% | 95.5% |
| `/en/products` | 171.5 KB | 53.8% | 90.9% |
| `/en/settings` | 173.5 KB | 53.8% | 94.3% |
| `/en/team` | 171.1 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 172.1 KB | 46.2% | 83.5% |
| `/fr/about` | 171.6 KB | 46.2% | 86.4% |
| `/fr/blog` | 171.5 KB | 46.2% | 87.4% |
| `/fr/careers` | 172.2 KB | 46.2% | 87.4% |
| `/fr/contact` | 171.8 KB | 46.2% | 99.0% |
| `/fr/faq` | 171.0 KB | 46.2% | 90.3% |
| `/fr/pricing` | 171.7 KB | 46.2% | 91.3% |
| `/fr/products` | 171.5 KB | 46.2% | 90.3% |
| `/fr/settings` | 173.5 KB | 46.2% | 94.2% |
| `/fr/team` | 171.1 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.5 ms | 1.8 ms | 4.9 ms | 0.0 ms |
| `fr` | 2.4 ms | 1.8 ms | 3.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 24.3 ms | 17.7 ms | 1.9 ms |
| `fr` | 25.4 ms | 18.8 ms | 2.0 ms |

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.10 | 4.6 KB | 14.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 117.2 KB | 50.0% | 90.0% | 76.4 KB | 2.5 ms | — | 13.7 ms | 5.8 ms |
| Dynamic | 🔶 | 117.2 KB | 50.0% | 90.0% | 76.4 KB | 2.5 ms | — | 15.4 ms | 6.6 ms |
| Scoped Static | ↳ Static | 117.2 KB | 50.0% | 90.0% | 76.4 KB | 2.5 ms | — | 13.7 ms | 5.8 ms |
| Scoped Dynamic | ↳ Dynamic | 117.2 KB | 50.0% | 90.0% | 76.4 KB | 2.5 ms | — | 15.4 ms | 6.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 117.4 KB | 53.6% | 81.6% |
| `/en/about` | 116.9 KB | 53.6% | 88.5% |
| `/en/blog` | 116.8 KB | 53.6% | 85.1% |
| `/en/careers` | 117.4 KB | 53.6% | 87.4% |
| `/en/contact` | 117.1 KB | 53.6% | 98.9% |
| `/en/faq` | 116.7 KB | 53.6% | 88.5% |
| `/en/pricing` | 117.1 KB | 53.6% | 95.4% |
| `/en/products` | 116.8 KB | 53.6% | 90.8% |
| `/en/settings` | 118.6 KB | 53.6% | 95.4% |
| `/en/team` | 116.8 KB | 53.6% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 117.4 KB | 46.4% | 83.2% |
| `/fr/about` | 116.9 KB | 46.4% | 86.1% |
| `/fr/blog` | 116.8 KB | 46.4% | 87.1% |
| `/fr/careers` | 117.4 KB | 46.4% | 88.1% |
| `/fr/contact` | 117.1 KB | 46.4% | 99.0% |
| `/fr/faq` | 116.7 KB | 46.4% | 90.1% |
| `/fr/pricing` | 117.1 KB | 46.4% | 91.1% |
| `/fr/products` | 116.8 KB | 46.4% | 90.1% |
| `/fr/settings` | 118.6 KB | 46.4% | 95.0% |
| `/fr/team` | 116.8 KB | 46.4% | 90.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.6 ms | 1.8 ms | 5.2 ms | 0.0 ms |
| `fr` | 2.5 ms | 1.9 ms | 4.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.2 ms | 6.1 ms | 2.1 ms |
| `fr` | 13.1 ms | 5.6 ms | 2.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 117.4 KB | 53.6% | 81.6% |
| `/en/about` | 116.9 KB | 53.6% | 88.5% |
| `/en/blog` | 116.8 KB | 53.6% | 85.1% |
| `/en/careers` | 117.4 KB | 53.6% | 87.4% |
| `/en/contact` | 117.1 KB | 53.6% | 98.9% |
| `/en/faq` | 116.7 KB | 53.6% | 88.5% |
| `/en/pricing` | 117.1 KB | 53.6% | 95.4% |
| `/en/products` | 116.8 KB | 53.6% | 90.8% |
| `/en/settings` | 118.6 KB | 53.6% | 95.4% |
| `/en/team` | 116.8 KB | 53.6% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 117.4 KB | 46.4% | 83.2% |
| `/fr/about` | 116.9 KB | 46.4% | 86.1% |
| `/fr/blog` | 116.8 KB | 46.4% | 87.1% |
| `/fr/careers` | 117.4 KB | 46.4% | 88.1% |
| `/fr/contact` | 117.1 KB | 46.4% | 99.0% |
| `/fr/faq` | 116.7 KB | 46.4% | 90.1% |
| `/fr/pricing` | 117.1 KB | 46.4% | 91.1% |
| `/fr/products` | 116.8 KB | 46.4% | 90.1% |
| `/fr/settings` | 118.6 KB | 46.4% | 95.0% |
| `/fr/team` | 116.8 KB | 46.4% | 90.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.6 ms | 1.7 ms | 5.5 ms | 0.0 ms |
| `fr` | 2.5 ms | 1.9 ms | 4.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.9 ms | 8.0 ms | 2.8 ms |
| `fr` | 13.8 ms | 5.3 ms | 2.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 117.4 KB | 53.6% | 81.6% |
| `/en/about` | 116.9 KB | 53.6% | 88.5% |
| `/en/blog` | 116.8 KB | 53.6% | 85.1% |
| `/en/careers` | 117.4 KB | 53.6% | 87.4% |
| `/en/contact` | 117.1 KB | 53.6% | 98.9% |
| `/en/faq` | 116.7 KB | 53.6% | 88.5% |
| `/en/pricing` | 117.1 KB | 53.6% | 95.4% |
| `/en/products` | 116.8 KB | 53.6% | 90.8% |
| `/en/settings` | 118.6 KB | 53.6% | 95.4% |
| `/en/team` | 116.8 KB | 53.6% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 117.4 KB | 46.4% | 83.2% |
| `/fr/about` | 116.9 KB | 46.4% | 86.1% |
| `/fr/blog` | 116.8 KB | 46.4% | 87.1% |
| `/fr/careers` | 117.4 KB | 46.4% | 88.1% |
| `/fr/contact` | 117.1 KB | 46.4% | 99.0% |
| `/fr/faq` | 116.7 KB | 46.4% | 90.1% |
| `/fr/pricing` | 117.1 KB | 46.4% | 91.1% |
| `/fr/products` | 116.8 KB | 46.4% | 90.1% |
| `/fr/settings` | 118.6 KB | 46.4% | 95.0% |
| `/fr/team` | 116.8 KB | 46.4% | 90.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.6 ms | 1.8 ms | 5.2 ms | 0.0 ms |
| `fr` | 2.5 ms | 1.9 ms | 4.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.2 ms | 6.1 ms | 2.1 ms |
| `fr` | 13.1 ms | 5.6 ms | 2.1 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 117.4 KB | 53.6% | 81.6% |
| `/en/about` | 116.9 KB | 53.6% | 88.5% |
| `/en/blog` | 116.8 KB | 53.6% | 85.1% |
| `/en/careers` | 117.4 KB | 53.6% | 87.4% |
| `/en/contact` | 117.1 KB | 53.6% | 98.9% |
| `/en/faq` | 116.7 KB | 53.6% | 88.5% |
| `/en/pricing` | 117.1 KB | 53.6% | 95.4% |
| `/en/products` | 116.8 KB | 53.6% | 90.8% |
| `/en/settings` | 118.6 KB | 53.6% | 95.4% |
| `/en/team` | 116.8 KB | 53.6% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 117.4 KB | 46.4% | 83.2% |
| `/fr/about` | 116.9 KB | 46.4% | 86.1% |
| `/fr/blog` | 116.8 KB | 46.4% | 87.1% |
| `/fr/careers` | 117.4 KB | 46.4% | 88.1% |
| `/fr/contact` | 117.1 KB | 46.4% | 99.0% |
| `/fr/faq` | 116.7 KB | 46.4% | 90.1% |
| `/fr/pricing` | 117.1 KB | 46.4% | 91.1% |
| `/fr/products` | 116.8 KB | 46.4% | 90.1% |
| `/fr/settings` | 118.6 KB | 46.4% | 95.0% |
| `/fr/team` | 116.8 KB | 46.4% | 90.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.6 ms | 1.7 ms | 5.5 ms | 0.0 ms |
| `fr` | 2.5 ms | 1.9 ms | 4.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.9 ms | 8.0 ms | 2.8 ms |
| `fr` | 13.8 ms | 5.3 ms | 2.1 ms |

</details>

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 7.2.0 | 13.8 KB | 43.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 112.8 KB | 50.0% | 90.0% | 76.1 KB | 1.6 ms | — | 18.7 ms | 9.2 ms |
| Dynamic | 🔶 | 58.7 KB | 0.0% | 90.0% | 21.2 KB | 1.7 ms | — | 11.3 ms | 10.8 ms |
| Scoped Static | ↳ Static | 112.8 KB | 50.0% | 90.0% | 76.1 KB | 1.6 ms | — | 18.7 ms | 9.2 ms |
| Scoped Dynamic | ↳ Dynamic | 58.7 KB | 0.0% | 90.0% | 21.2 KB | 1.7 ms | — | 11.3 ms | 10.8 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 113.1 KB | 53.8% | 81.8% |
| `/en/about` | 112.6 KB | 53.8% | 88.6% |
| `/en/blog` | 112.5 KB | 53.8% | 85.2% |
| `/en/careers` | 113.1 KB | 53.8% | 87.5% |
| `/en/contact` | 112.8 KB | 53.8% | 98.9% |
| `/en/faq` | 112.4 KB | 53.8% | 88.6% |
| `/en/pricing` | 112.8 KB | 53.8% | 95.5% |
| `/en/products` | 112.5 KB | 53.8% | 90.9% |
| `/en/settings` | 114.2 KB | 53.8% | 94.3% |
| `/en/team` | 112.4 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 113.1 KB | 46.2% | 83.5% |
| `/fr/about` | 112.6 KB | 46.2% | 86.4% |
| `/fr/blog` | 112.5 KB | 46.2% | 87.4% |
| `/fr/careers` | 113.1 KB | 46.2% | 87.4% |
| `/fr/contact` | 112.8 KB | 46.2% | 99.0% |
| `/fr/faq` | 112.4 KB | 46.2% | 90.3% |
| `/fr/pricing` | 112.8 KB | 46.2% | 91.3% |
| `/fr/products` | 112.5 KB | 46.2% | 90.3% |
| `/fr/settings` | 114.2 KB | 46.2% | 94.2% |
| `/fr/team` | 112.4 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-tolgee-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.9 ms | 1.1 ms | 4.6 ms | 0.0 ms |
| `fr` | 1.3 ms | 1.1 ms | 2.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.1 ms | 9.3 ms | 1.6 ms |
| `fr` | 19.4 ms | 9.1 ms | 1.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 59.0 KB | 0.0% | 81.8% |
| `/en/about` | 58.5 KB | 0.0% | 88.6% |
| `/en/blog` | 58.4 KB | 0.0% | 85.2% |
| `/en/careers` | 59.0 KB | 0.0% | 87.5% |
| `/en/contact` | 58.7 KB | 0.0% | 98.9% |
| `/en/faq` | 58.3 KB | 0.0% | 88.6% |
| `/en/pricing` | 58.7 KB | 0.0% | 95.5% |
| `/en/products` | 58.4 KB | 0.0% | 90.9% |
| `/en/settings` | 60.1 KB | 0.0% | 94.3% |
| `/en/team` | 58.4 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 58.9 KB | 0.0% | 83.5% |
| `/fr/about` | 58.5 KB | 0.0% | 86.4% |
| `/fr/blog` | 58.4 KB | 0.0% | 87.4% |
| `/fr/careers` | 59.0 KB | 0.0% | 87.4% |
| `/fr/contact` | 58.7 KB | 0.0% | 99.0% |
| `/fr/faq` | 58.2 KB | 0.0% | 90.3% |
| `/fr/pricing` | 58.7 KB | 0.0% | 91.3% |
| `/fr/products` | 58.4 KB | 0.0% | 90.3% |
| `/fr/settings` | 60.1 KB | 0.0% | 94.2% |
| `/fr/team` | 58.3 KB | 0.0% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-tolgee-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.8 ms | 1.1 ms | 4.4 ms | 0.0 ms |
| `fr` | 1.5 ms | 1.2 ms | 2.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.9 ms | 11.8 ms | 2.0 ms |
| `fr` | 9.7 ms | 9.8 ms | 1.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 113.1 KB | 53.8% | 81.8% |
| `/en/about` | 112.6 KB | 53.8% | 88.6% |
| `/en/blog` | 112.5 KB | 53.8% | 85.2% |
| `/en/careers` | 113.1 KB | 53.8% | 87.5% |
| `/en/contact` | 112.8 KB | 53.8% | 98.9% |
| `/en/faq` | 112.4 KB | 53.8% | 88.6% |
| `/en/pricing` | 112.8 KB | 53.8% | 95.5% |
| `/en/products` | 112.5 KB | 53.8% | 90.9% |
| `/en/settings` | 114.2 KB | 53.8% | 94.3% |
| `/en/team` | 112.4 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 113.1 KB | 46.2% | 83.5% |
| `/fr/about` | 112.6 KB | 46.2% | 86.4% |
| `/fr/blog` | 112.5 KB | 46.2% | 87.4% |
| `/fr/careers` | 113.1 KB | 46.2% | 87.4% |
| `/fr/contact` | 112.8 KB | 46.2% | 99.0% |
| `/fr/faq` | 112.4 KB | 46.2% | 90.3% |
| `/fr/pricing` | 112.8 KB | 46.2% | 91.3% |
| `/fr/products` | 112.5 KB | 46.2% | 90.3% |
| `/fr/settings` | 114.2 KB | 46.2% | 94.2% |
| `/fr/team` | 112.4 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-tolgee-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.9 ms | 1.1 ms | 4.6 ms | 0.0 ms |
| `fr` | 1.3 ms | 1.1 ms | 2.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.1 ms | 9.3 ms | 1.6 ms |
| `fr` | 19.4 ms | 9.1 ms | 1.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 59.0 KB | 0.0% | 81.8% |
| `/en/about` | 58.5 KB | 0.0% | 88.6% |
| `/en/blog` | 58.4 KB | 0.0% | 85.2% |
| `/en/careers` | 59.0 KB | 0.0% | 87.5% |
| `/en/contact` | 58.7 KB | 0.0% | 98.9% |
| `/en/faq` | 58.3 KB | 0.0% | 88.6% |
| `/en/pricing` | 58.7 KB | 0.0% | 95.5% |
| `/en/products` | 58.4 KB | 0.0% | 90.9% |
| `/en/settings` | 60.1 KB | 0.0% | 94.3% |
| `/en/team` | 58.4 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 58.9 KB | 0.0% | 83.5% |
| `/fr/about` | 58.5 KB | 0.0% | 86.4% |
| `/fr/blog` | 58.4 KB | 0.0% | 87.4% |
| `/fr/careers` | 59.0 KB | 0.0% | 87.4% |
| `/fr/contact` | 58.7 KB | 0.0% | 99.0% |
| `/fr/faq` | 58.2 KB | 0.0% | 90.3% |
| `/fr/pricing` | 58.7 KB | 0.0% | 91.3% |
| `/fr/products` | 58.4 KB | 0.0% | 90.3% |
| `/fr/settings` | 60.1 KB | 0.0% | 94.2% |
| `/fr/team` | 58.3 KB | 0.0% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-tolgee-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.8 ms | 1.1 ms | 4.4 ms | 0.0 ms |
| `fr` | 1.5 ms | 1.2 ms | 2.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.9 ms | 11.8 ms | 2.0 ms |
| `fr` | 9.7 ms | 9.8 ms | 1.9 ms |

</details>

---

## vue-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 11.4.0 | 24.1 KB | 82.5 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 134.9 KB | 50.0% | 90.0% | 104.8 KB | 2.5 ms | — | 12.1 ms | 5.3 ms |
| Dynamic | 🔶 | 78.8 KB | 0.0% | 90.0% | 24.6 KB | — | — | — | — |
| Scoped Static | ↳ Static | 134.9 KB | 50.0% | 90.0% | 104.8 KB | 2.5 ms | — | 12.1 ms | 5.3 ms |
| Scoped Dynamic | ↳ Dynamic | 78.8 KB | 0.0% | 90.0% | 24.6 KB | — | — | — | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 135.1 KB | 53.8% | 81.8% |
| `/en/about` | 134.7 KB | 53.8% | 88.6% |
| `/en/blog` | 134.6 KB | 53.8% | 85.2% |
| `/en/careers` | 135.2 KB | 53.8% | 87.5% |
| `/en/contact` | 134.9 KB | 53.8% | 98.9% |
| `/en/faq` | 134.4 KB | 53.8% | 88.6% |
| `/en/pricing` | 134.8 KB | 53.8% | 95.5% |
| `/en/products` | 134.6 KB | 53.8% | 90.9% |
| `/en/settings` | 136.3 KB | 53.8% | 94.3% |
| `/en/team` | 134.5 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 135.1 KB | 46.2% | 83.5% |
| `/fr/about` | 134.7 KB | 46.2% | 86.4% |
| `/fr/blog` | 134.6 KB | 46.2% | 87.4% |
| `/fr/careers` | 135.2 KB | 46.2% | 87.4% |
| `/fr/contact` | 134.9 KB | 46.2% | 99.0% |
| `/fr/faq` | 134.4 KB | 46.2% | 90.3% |
| `/fr/pricing` | 134.8 KB | 46.2% | 91.3% |
| `/fr/products` | 134.6 KB | 46.2% | 90.3% |
| `/fr/settings` | 136.3 KB | 46.2% | 94.2% |
| `/fr/team` | 134.5 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.8 ms | 1.9 ms | 6.0 ms | 0.0 ms |
| `fr` | 2.3 ms | 1.9 ms | 3.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.4 ms | 5.5 ms | 2.0 ms |
| `fr` | 11.8 ms | 5.2 ms | 1.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 79.1 KB | 0.0% | 81.8% |
| `/en/about` | 78.6 KB | 0.0% | 88.6% |
| `/en/blog` | 78.5 KB | 0.0% | 85.2% |
| `/en/careers` | 79.1 KB | 0.0% | 87.5% |
| `/en/contact` | 78.8 KB | 0.0% | 98.9% |
| `/en/faq` | 78.4 KB | 0.0% | 88.6% |
| `/en/pricing` | 78.8 KB | 0.0% | 95.5% |
| `/en/products` | 78.5 KB | 0.0% | 90.9% |
| `/en/settings` | 80.2 KB | 0.0% | 94.3% |
| `/en/team` | 78.4 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 79.0 KB | 0.0% | 83.5% |
| `/fr/about` | 78.5 KB | 0.0% | 86.4% |
| `/fr/blog` | 78.5 KB | 0.0% | 87.4% |
| `/fr/careers` | 79.0 KB | 0.0% | 87.4% |
| `/fr/contact` | 78.8 KB | 0.0% | 99.0% |
| `/fr/faq` | 78.3 KB | 0.0% | 90.3% |
| `/fr/pricing` | 78.7 KB | 0.0% | 91.3% |
| `/fr/products` | 78.4 KB | 0.0% | 90.3% |
| `/fr/settings` | 80.2 KB | 0.0% | 94.2% |
| `/fr/team` | 78.4 KB | 0.0% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 135.1 KB | 53.8% | 81.8% |
| `/en/about` | 134.7 KB | 53.8% | 88.6% |
| `/en/blog` | 134.6 KB | 53.8% | 85.2% |
| `/en/careers` | 135.2 KB | 53.8% | 87.5% |
| `/en/contact` | 134.9 KB | 53.8% | 98.9% |
| `/en/faq` | 134.4 KB | 53.8% | 88.6% |
| `/en/pricing` | 134.8 KB | 53.8% | 95.5% |
| `/en/products` | 134.6 KB | 53.8% | 90.9% |
| `/en/settings` | 136.3 KB | 53.8% | 94.3% |
| `/en/team` | 134.5 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 135.1 KB | 46.2% | 83.5% |
| `/fr/about` | 134.7 KB | 46.2% | 86.4% |
| `/fr/blog` | 134.6 KB | 46.2% | 87.4% |
| `/fr/careers` | 135.2 KB | 46.2% | 87.4% |
| `/fr/contact` | 134.9 KB | 46.2% | 99.0% |
| `/fr/faq` | 134.4 KB | 46.2% | 90.3% |
| `/fr/pricing` | 134.8 KB | 46.2% | 91.3% |
| `/fr/products` | 134.6 KB | 46.2% | 90.3% |
| `/fr/settings` | 136.3 KB | 46.2% | 94.2% |
| `/fr/team` | 134.5 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.8 ms | 1.9 ms | 6.0 ms | 0.0 ms |
| `fr` | 2.3 ms | 1.9 ms | 3.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.4 ms | 5.5 ms | 2.0 ms |
| `fr` | 11.8 ms | 5.2 ms | 1.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 79.1 KB | 0.0% | 81.8% |
| `/en/about` | 78.6 KB | 0.0% | 88.6% |
| `/en/blog` | 78.5 KB | 0.0% | 85.2% |
| `/en/careers` | 79.1 KB | 0.0% | 87.5% |
| `/en/contact` | 78.8 KB | 0.0% | 98.9% |
| `/en/faq` | 78.4 KB | 0.0% | 88.6% |
| `/en/pricing` | 78.8 KB | 0.0% | 95.5% |
| `/en/products` | 78.5 KB | 0.0% | 90.9% |
| `/en/settings` | 80.2 KB | 0.0% | 94.3% |
| `/en/team` | 78.4 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 79.0 KB | 0.0% | 83.5% |
| `/fr/about` | 78.5 KB | 0.0% | 86.4% |
| `/fr/blog` | 78.5 KB | 0.0% | 87.4% |
| `/fr/careers` | 79.0 KB | 0.0% | 87.4% |
| `/fr/contact` | 78.8 KB | 0.0% | 99.0% |
| `/fr/faq` | 78.3 KB | 0.0% | 90.3% |
| `/fr/pricing` | 78.7 KB | 0.0% | 91.3% |
| `/fr/products` | 78.4 KB | 0.0% | 90.3% |
| `/fr/settings` | 80.2 KB | 0.0% | 94.2% |
| `/fr/team` | 78.4 KB | 0.0% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-dynamic/bundle/rollup-visualizer.html)

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 6 |
| Total app entries | 9 |
| With lib size data | 6 |
| With page bundle data | 24 |
| With component data | 24 |
| With reactivity data | 22 |
| With rendering data | 22 |
