# Vite + Vue — i18n Benchmark Results

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
- [fluent-vue](#fluent-vue)
- [intlayer](#intlayer)
- [vue-i18n](#vue-i18n)

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.7 ms | — | 12.3 ms | 4.0 ms |
| Dynamic | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.7 ms | — | 12.3 ms | 4.0 ms |
| Scoped Static | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.7 ms | — | 12.3 ms | 4.0 ms |
| Scoped Dynamic | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.7 ms | — | 12.3 ms | 4.0 ms |

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.4 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.8 ms | 0.4 ms | 1.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.9 ms | 5.0 ms | 1.8 ms |
| `fr` | 10.6 ms | 2.9 ms | 1.7 ms |

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.4 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.8 ms | 0.4 ms | 1.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.9 ms | 5.0 ms | 1.8 ms |
| `fr` | 10.6 ms | 2.9 ms | 1.7 ms |

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.4 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.8 ms | 0.4 ms | 1.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.9 ms | 5.0 ms | 1.8 ms |
| `fr` | 10.6 ms | 2.9 ms | 1.7 ms |

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.4 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.8 ms | 0.4 ms | 1.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.9 ms | 5.0 ms | 1.8 ms |
| `fr` | 10.6 ms | 2.9 ms | 1.7 ms |

</details>

---

## fluent-vue

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 3.8.2 | 4.3 KB | 13.1 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 111.2 KB | 60.9% | 90.0% | 1.0 KB | 3.7 ms | — | 16.3 ms | 9.0 ms |
| Dynamic | ✅ | 111.2 KB | 60.9% | 90.0% | 1.0 KB | 3.7 ms | — | 16.3 ms | 9.0 ms |
| Scoped Static | ✅ | 111.2 KB | 60.9% | 90.0% | 1.0 KB | 3.7 ms | — | 16.3 ms | 9.0 ms |
| Scoped Dynamic | ✅ | 111.2 KB | 60.9% | 90.0% | 1.0 KB | 3.7 ms | — | 16.3 ms | 9.0 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 111.9 KB | 75.7% | 50.0% |
| `/en/about` | 111.0 KB | 75.7% | 68.8% |
| `/en/blog` | 110.9 KB | 75.7% | 100.0% |
| `/en/careers` | 111.4 KB | 75.7% | 100.0% |
| `/en/contact` | 111.2 KB | 75.7% | 100.0% |
| `/en/faq` | 110.5 KB | 75.7% | 100.0% |
| `/en/pricing` | 111.1 KB | 75.7% | 100.0% |
| `/en/products` | 110.9 KB | 75.7% | 100.0% |
| `/en/settings` | 112.4 KB | 75.7% | 81.3% |
| `/en/team` | 110.6 KB | 75.7% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 111.9 KB | 46.2% | 83.5% |
| `/fr/about` | 111.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 110.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 111.4 KB | 46.2% | 87.4% |
| `/fr/contact` | 111.2 KB | 46.2% | 99.0% |
| `/fr/faq` | 110.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 111.1 KB | 46.2% | 91.3% |
| `/fr/products` | 110.9 KB | 46.2% | 90.3% |
| `/fr/settings` | 112.4 KB | 46.2% | 94.2% |
| `/fr/team` | 110.6 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.6 ms | 2.3 ms | 4.5 ms | 0.0 ms |
| `fr` | 3.9 ms | 3.5 ms | 4.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.2 ms | 8.3 ms | 2.3 ms |
| `fr` | 17.3 ms | 9.8 ms | 2.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 111.9 KB | 75.7% | 50.0% |
| `/en/about` | 111.0 KB | 75.7% | 68.8% |
| `/en/blog` | 110.9 KB | 75.7% | 100.0% |
| `/en/careers` | 111.4 KB | 75.7% | 100.0% |
| `/en/contact` | 111.2 KB | 75.7% | 100.0% |
| `/en/faq` | 110.5 KB | 75.7% | 100.0% |
| `/en/pricing` | 111.1 KB | 75.7% | 100.0% |
| `/en/products` | 110.9 KB | 75.7% | 100.0% |
| `/en/settings` | 112.4 KB | 75.7% | 81.3% |
| `/en/team` | 110.6 KB | 75.7% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 111.9 KB | 46.2% | 83.5% |
| `/fr/about` | 111.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 110.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 111.4 KB | 46.2% | 87.4% |
| `/fr/contact` | 111.2 KB | 46.2% | 99.0% |
| `/fr/faq` | 110.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 111.1 KB | 46.2% | 91.3% |
| `/fr/products` | 110.9 KB | 46.2% | 90.3% |
| `/fr/settings` | 112.4 KB | 46.2% | 94.2% |
| `/fr/team` | 110.6 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.6 ms | 2.3 ms | 4.5 ms | 0.0 ms |
| `fr` | 3.9 ms | 3.5 ms | 4.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.2 ms | 8.3 ms | 2.3 ms |
| `fr` | 17.3 ms | 9.8 ms | 2.7 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 111.9 KB | 75.7% | 50.0% |
| `/en/about` | 111.0 KB | 75.7% | 68.8% |
| `/en/blog` | 110.9 KB | 75.7% | 100.0% |
| `/en/careers` | 111.4 KB | 75.7% | 100.0% |
| `/en/contact` | 111.2 KB | 75.7% | 100.0% |
| `/en/faq` | 110.5 KB | 75.7% | 100.0% |
| `/en/pricing` | 111.1 KB | 75.7% | 100.0% |
| `/en/products` | 110.9 KB | 75.7% | 100.0% |
| `/en/settings` | 112.4 KB | 75.7% | 81.3% |
| `/en/team` | 110.6 KB | 75.7% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 111.9 KB | 46.2% | 83.5% |
| `/fr/about` | 111.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 110.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 111.4 KB | 46.2% | 87.4% |
| `/fr/contact` | 111.2 KB | 46.2% | 99.0% |
| `/fr/faq` | 110.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 111.1 KB | 46.2% | 91.3% |
| `/fr/products` | 110.9 KB | 46.2% | 90.3% |
| `/fr/settings` | 112.4 KB | 46.2% | 94.2% |
| `/fr/team` | 110.6 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.6 ms | 2.3 ms | 4.5 ms | 0.0 ms |
| `fr` | 3.9 ms | 3.5 ms | 4.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.2 ms | 8.3 ms | 2.3 ms |
| `fr` | 17.3 ms | 9.8 ms | 2.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 111.9 KB | 75.7% | 50.0% |
| `/en/about` | 111.0 KB | 75.7% | 68.8% |
| `/en/blog` | 110.9 KB | 75.7% | 100.0% |
| `/en/careers` | 111.4 KB | 75.7% | 100.0% |
| `/en/contact` | 111.2 KB | 75.7% | 100.0% |
| `/en/faq` | 110.5 KB | 75.7% | 100.0% |
| `/en/pricing` | 111.1 KB | 75.7% | 100.0% |
| `/en/products` | 110.9 KB | 75.7% | 100.0% |
| `/en/settings` | 112.4 KB | 75.7% | 81.3% |
| `/en/team` | 110.6 KB | 75.7% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 111.9 KB | 46.2% | 83.5% |
| `/fr/about` | 111.0 KB | 46.2% | 86.4% |
| `/fr/blog` | 110.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 111.4 KB | 46.2% | 87.4% |
| `/fr/contact` | 111.2 KB | 46.2% | 99.0% |
| `/fr/faq` | 110.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 111.1 KB | 46.2% | 91.3% |
| `/fr/products` | 110.9 KB | 46.2% | 90.3% |
| `/fr/settings` | 112.4 KB | 46.2% | 94.2% |
| `/fr/team` | 110.6 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.6 ms | 2.3 ms | 4.5 ms | 0.0 ms |
| `fr` | 3.9 ms | 3.5 ms | 4.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.2 ms | 8.3 ms | 2.3 ms |
| `fr` | 17.3 ms | 9.8 ms | 2.7 ms |

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.12 | 2.7 KB | 7.6 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 59.3 KB | 51.1% | 0.0% | 6.5 KB | 4.3 ms | — | 15.2 ms | 6.9 ms |
| Dynamic | ✅ | 59.3 KB | 51.1% | 0.0% | 6.5 KB | 4.3 ms | — | 15.2 ms | 6.9 ms |
| Scoped Static | ✅ | 59.3 KB | 51.1% | 0.0% | 6.5 KB | 4.3 ms | — | 15.2 ms | 6.9 ms |
| Scoped Dynamic | ✅ | 59.3 KB | 51.1% | 0.0% | 6.5 KB | 4.3 ms | — | 15.2 ms | 6.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 71.2 KB | 44.4% | 0.0% |
| `/en/about` | 64.0 KB | 56.5% | 0.0% |
| `/en/blog` | 57.9 KB | 50.0% | 0.0% |
| `/en/careers` | 59.1 KB | 51.7% | 0.0% |
| `/en/contact` | 54.0 KB | 50.0% | 0.0% |
| `/en/faq` | 61.2 KB | 54.2% | 0.0% |
| `/en/pricing` | 55.2 KB | 78.6% | 0.0% |
| `/en/products` | 56.7 KB | 54.5% | 0.0% |
| `/en/settings` | 57.0 KB | 53.8% | 0.0% |
| `/en/team` | 56.9 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 71.2 KB | 55.6% | 0.0% |
| `/fr/about` | 64.0 KB | 43.5% | 0.0% |
| `/fr/blog` | 57.9 KB | 50.0% | 0.0% |
| `/fr/careers` | 59.1 KB | 48.3% | 0.0% |
| `/fr/contact` | 54.0 KB | 50.0% | 0.0% |
| `/fr/faq` | 61.2 KB | 50.0% | 0.0% |
| `/fr/pricing` | 55.2 KB | 38.9% | 0.0% |
| `/fr/products` | 56.7 KB | 45.5% | 0.0% |
| `/fr/settings` | 57.0 KB | 46.2% | 0.0% |
| `/fr/team` | 56.9 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.7 ms | 3.6 ms | 7.7 ms | 0.0 ms |
| `fr` | 4.0 ms | 3.1 ms | 5.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 6.8 ms | 3.4 ms |
| `fr` | 14.4 ms | 7.0 ms | 3.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 71.2 KB | 44.4% | 0.0% |
| `/en/about` | 64.0 KB | 56.5% | 0.0% |
| `/en/blog` | 57.9 KB | 50.0% | 0.0% |
| `/en/careers` | 59.1 KB | 51.7% | 0.0% |
| `/en/contact` | 54.0 KB | 50.0% | 0.0% |
| `/en/faq` | 61.2 KB | 54.2% | 0.0% |
| `/en/pricing` | 55.2 KB | 78.6% | 0.0% |
| `/en/products` | 56.7 KB | 54.5% | 0.0% |
| `/en/settings` | 57.0 KB | 53.8% | 0.0% |
| `/en/team` | 56.9 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 71.2 KB | 55.6% | 0.0% |
| `/fr/about` | 64.0 KB | 43.5% | 0.0% |
| `/fr/blog` | 57.9 KB | 50.0% | 0.0% |
| `/fr/careers` | 59.1 KB | 48.3% | 0.0% |
| `/fr/contact` | 54.0 KB | 50.0% | 0.0% |
| `/fr/faq` | 61.2 KB | 50.0% | 0.0% |
| `/fr/pricing` | 55.2 KB | 38.9% | 0.0% |
| `/fr/products` | 56.7 KB | 45.5% | 0.0% |
| `/fr/settings` | 57.0 KB | 46.2% | 0.0% |
| `/fr/team` | 56.9 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.7 ms | 3.6 ms | 7.7 ms | 0.0 ms |
| `fr` | 4.0 ms | 3.1 ms | 5.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 6.8 ms | 3.4 ms |
| `fr` | 14.4 ms | 7.0 ms | 3.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 71.2 KB | 44.4% | 0.0% |
| `/en/about` | 64.0 KB | 56.5% | 0.0% |
| `/en/blog` | 57.9 KB | 50.0% | 0.0% |
| `/en/careers` | 59.1 KB | 51.7% | 0.0% |
| `/en/contact` | 54.0 KB | 50.0% | 0.0% |
| `/en/faq` | 61.2 KB | 54.2% | 0.0% |
| `/en/pricing` | 55.2 KB | 78.6% | 0.0% |
| `/en/products` | 56.7 KB | 54.5% | 0.0% |
| `/en/settings` | 57.0 KB | 53.8% | 0.0% |
| `/en/team` | 56.9 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 71.2 KB | 55.6% | 0.0% |
| `/fr/about` | 64.0 KB | 43.5% | 0.0% |
| `/fr/blog` | 57.9 KB | 50.0% | 0.0% |
| `/fr/careers` | 59.1 KB | 48.3% | 0.0% |
| `/fr/contact` | 54.0 KB | 50.0% | 0.0% |
| `/fr/faq` | 61.2 KB | 50.0% | 0.0% |
| `/fr/pricing` | 55.2 KB | 38.9% | 0.0% |
| `/fr/products` | 56.7 KB | 45.5% | 0.0% |
| `/fr/settings` | 57.0 KB | 46.2% | 0.0% |
| `/fr/team` | 56.9 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.7 ms | 3.6 ms | 7.7 ms | 0.0 ms |
| `fr` | 4.0 ms | 3.1 ms | 5.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 6.8 ms | 3.4 ms |
| `fr` | 14.4 ms | 7.0 ms | 3.1 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 71.2 KB | 44.4% | 0.0% |
| `/en/about` | 64.0 KB | 56.5% | 0.0% |
| `/en/blog` | 57.9 KB | 50.0% | 0.0% |
| `/en/careers` | 59.1 KB | 51.7% | 0.0% |
| `/en/contact` | 54.0 KB | 50.0% | 0.0% |
| `/en/faq` | 61.2 KB | 54.2% | 0.0% |
| `/en/pricing` | 55.2 KB | 78.6% | 0.0% |
| `/en/products` | 56.7 KB | 54.5% | 0.0% |
| `/en/settings` | 57.0 KB | 53.8% | 0.0% |
| `/en/team` | 56.9 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 71.2 KB | 55.6% | 0.0% |
| `/fr/about` | 64.0 KB | 43.5% | 0.0% |
| `/fr/blog` | 57.9 KB | 50.0% | 0.0% |
| `/fr/careers` | 59.1 KB | 48.3% | 0.0% |
| `/fr/contact` | 54.0 KB | 50.0% | 0.0% |
| `/fr/faq` | 61.2 KB | 50.0% | 0.0% |
| `/fr/pricing` | 55.2 KB | 38.9% | 0.0% |
| `/fr/products` | 56.7 KB | 45.5% | 0.0% |
| `/fr/settings` | 57.0 KB | 46.2% | 0.0% |
| `/fr/team` | 56.9 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.7 ms | 3.6 ms | 7.7 ms | 0.0 ms |
| `fr` | 4.0 ms | 3.1 ms | 5.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 6.8 ms | 3.4 ms |
| `fr` | 14.4 ms | 7.0 ms | 3.1 ms |

</details>

---

## vue-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 11.4.0 | 20.6 KB | 70.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 136.4 KB | 50.0% | 90.0% | 18.7 KB | 4.0 ms | — | 13.0 ms | 6.3 ms |
| Dynamic | ✅ | 136.4 KB | 50.0% | 90.0% | 18.7 KB | 4.0 ms | — | 13.0 ms | 6.3 ms |
| Scoped Static | ✅ | 136.4 KB | 50.0% | 90.0% | 18.7 KB | 4.0 ms | — | 13.0 ms | 6.3 ms |
| Scoped Dynamic | ✅ | 136.4 KB | 50.0% | 90.0% | 18.7 KB | 4.0 ms | — | 13.0 ms | 6.3 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 136.9 KB | 52.7% | 81.8% |
| `/en/about` | 136.0 KB | 52.7% | 88.6% |
| `/en/blog` | 135.9 KB | 52.7% | 85.2% |
| `/en/careers` | 136.5 KB | 52.7% | 87.5% |
| `/en/contact` | 136.2 KB | 52.7% | 98.9% |
| `/en/faq` | 135.8 KB | 52.7% | 88.6% |
| `/en/pricing` | 136.2 KB | 52.7% | 95.5% |
| `/en/products` | 136.2 KB | 52.7% | 90.9% |
| `/en/settings` | 137.5 KB | 52.7% | 94.3% |
| `/en/team` | 136.3 KB | 52.7% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 136.9 KB | 47.3% | 82.3% |
| `/fr/about` | 136.0 KB | 47.3% | 85.4% |
| `/fr/blog` | 135.9 KB | 47.3% | 86.5% |
| `/fr/careers` | 136.5 KB | 47.3% | 86.5% |
| `/fr/contact` | 136.2 KB | 47.3% | 99.0% |
| `/fr/faq` | 135.8 KB | 47.3% | 89.6% |
| `/fr/pricing` | 136.2 KB | 47.3% | 95.8% |
| `/fr/products` | 136.2 KB | 47.3% | 91.7% |
| `/fr/settings` | 137.5 KB | 47.3% | 93.8% |
| `/fr/team` | 136.3 KB | 47.3% | 89.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.1 ms | 3.8 ms | 5.1 ms | 0.0 ms |
| `fr` | 3.9 ms | 2.4 ms | 5.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.8 ms | 6.5 ms | 2.5 ms |
| `fr` | 12.1 ms | 6.2 ms | 2.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 136.9 KB | 52.7% | 81.8% |
| `/en/about` | 136.0 KB | 52.7% | 88.6% |
| `/en/blog` | 135.9 KB | 52.7% | 85.2% |
| `/en/careers` | 136.5 KB | 52.7% | 87.5% |
| `/en/contact` | 136.2 KB | 52.7% | 98.9% |
| `/en/faq` | 135.8 KB | 52.7% | 88.6% |
| `/en/pricing` | 136.2 KB | 52.7% | 95.5% |
| `/en/products` | 136.2 KB | 52.7% | 90.9% |
| `/en/settings` | 137.5 KB | 52.7% | 94.3% |
| `/en/team` | 136.3 KB | 52.7% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 136.9 KB | 47.3% | 82.3% |
| `/fr/about` | 136.0 KB | 47.3% | 85.4% |
| `/fr/blog` | 135.9 KB | 47.3% | 86.5% |
| `/fr/careers` | 136.5 KB | 47.3% | 86.5% |
| `/fr/contact` | 136.2 KB | 47.3% | 99.0% |
| `/fr/faq` | 135.8 KB | 47.3% | 89.6% |
| `/fr/pricing` | 136.2 KB | 47.3% | 95.8% |
| `/fr/products` | 136.2 KB | 47.3% | 91.7% |
| `/fr/settings` | 137.5 KB | 47.3% | 93.8% |
| `/fr/team` | 136.3 KB | 47.3% | 89.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.1 ms | 3.8 ms | 5.1 ms | 0.0 ms |
| `fr` | 3.9 ms | 2.4 ms | 5.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.8 ms | 6.5 ms | 2.5 ms |
| `fr` | 12.1 ms | 6.2 ms | 2.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 136.9 KB | 52.7% | 81.8% |
| `/en/about` | 136.0 KB | 52.7% | 88.6% |
| `/en/blog` | 135.9 KB | 52.7% | 85.2% |
| `/en/careers` | 136.5 KB | 52.7% | 87.5% |
| `/en/contact` | 136.2 KB | 52.7% | 98.9% |
| `/en/faq` | 135.8 KB | 52.7% | 88.6% |
| `/en/pricing` | 136.2 KB | 52.7% | 95.5% |
| `/en/products` | 136.2 KB | 52.7% | 90.9% |
| `/en/settings` | 137.5 KB | 52.7% | 94.3% |
| `/en/team` | 136.3 KB | 52.7% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 136.9 KB | 47.3% | 82.3% |
| `/fr/about` | 136.0 KB | 47.3% | 85.4% |
| `/fr/blog` | 135.9 KB | 47.3% | 86.5% |
| `/fr/careers` | 136.5 KB | 47.3% | 86.5% |
| `/fr/contact` | 136.2 KB | 47.3% | 99.0% |
| `/fr/faq` | 135.8 KB | 47.3% | 89.6% |
| `/fr/pricing` | 136.2 KB | 47.3% | 95.8% |
| `/fr/products` | 136.2 KB | 47.3% | 91.7% |
| `/fr/settings` | 137.5 KB | 47.3% | 93.8% |
| `/fr/team` | 136.3 KB | 47.3% | 89.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.1 ms | 3.8 ms | 5.1 ms | 0.0 ms |
| `fr` | 3.9 ms | 2.4 ms | 5.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.8 ms | 6.5 ms | 2.5 ms |
| `fr` | 12.1 ms | 6.2 ms | 2.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 136.9 KB | 52.7% | 81.8% |
| `/en/about` | 136.0 KB | 52.7% | 88.6% |
| `/en/blog` | 135.9 KB | 52.7% | 85.2% |
| `/en/careers` | 136.5 KB | 52.7% | 87.5% |
| `/en/contact` | 136.2 KB | 52.7% | 98.9% |
| `/en/faq` | 135.8 KB | 52.7% | 88.6% |
| `/en/pricing` | 136.2 KB | 52.7% | 95.5% |
| `/en/products` | 136.2 KB | 52.7% | 90.9% |
| `/en/settings` | 137.5 KB | 52.7% | 94.3% |
| `/en/team` | 136.3 KB | 52.7% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 136.9 KB | 47.3% | 82.3% |
| `/fr/about` | 136.0 KB | 47.3% | 85.4% |
| `/fr/blog` | 135.9 KB | 47.3% | 86.5% |
| `/fr/careers` | 136.5 KB | 47.3% | 86.5% |
| `/fr/contact` | 136.2 KB | 47.3% | 99.0% |
| `/fr/faq` | 135.8 KB | 47.3% | 89.6% |
| `/fr/pricing` | 136.2 KB | 47.3% | 95.8% |
| `/fr/products` | 136.2 KB | 47.3% | 91.7% |
| `/fr/settings` | 137.5 KB | 47.3% | 93.8% |
| `/fr/team` | 136.3 KB | 47.3% | 89.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.1 ms | 3.8 ms | 5.1 ms | 0.0 ms |
| `fr` | 3.9 ms | 2.4 ms | 5.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.8 ms | 6.5 ms | 2.5 ms |
| `fr` | 12.1 ms | 6.2 ms | 2.5 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 4 |
| Total app entries | 4 |
| With lib size data | 4 |
| With page bundle data | 16 |
| With component data | 16 |
| With reactivity data | 16 |
| With rendering data | 16 |
