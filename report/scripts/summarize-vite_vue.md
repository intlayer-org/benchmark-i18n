# Vite + Vue — i18n Benchmark Results

_Generated: 2026-04-29_

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
- [i18n](#i18n)
- [intlayer](#intlayer)

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 43.1 KB | 5.0% | 0.0% | 0.9 KB | 2.8 ms | — | 12.1 ms | 5.3 ms |
| Dynamic | ✅ | 43.1 KB | 5.0% | 0.0% | 0.9 KB | 2.8 ms | — | 12.1 ms | 5.3 ms |
| Scoped Static | ✅ | 43.1 KB | 5.0% | 0.0% | 0.9 KB | 2.8 ms | — | 12.1 ms | 5.3 ms |
| Scoped Dynamic | ✅ | 43.1 KB | 5.0% | 0.0% | 0.9 KB | 2.8 ms | — | 12.1 ms | 5.3 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 44.4 KB | 0.0% | 0.0% |
| `/en/about` | 43.1 KB | 0.0% | 0.0% |
| `/en/blog` | 42.8 KB | 0.0% | 0.0% |
| `/en/careers` | 43.2 KB | 0.0% | 0.0% |
| `/en/contact` | 42.5 KB | 0.0% | 0.0% |
| `/en/faq` | 43.0 KB | 0.0% | 0.0% |
| `/en/pricing` | 42.6 KB | 0.0% | 0.0% |
| `/en/products` | 42.6 KB | 0.0% | 0.0% |
| `/en/settings` | 43.7 KB | 0.0% | 0.0% |
| `/en/team` | 42.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 44.4 KB | 0.0% | 0.0% |
| `/fr/about` | 43.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 42.8 KB | 0.0% | 0.0% |
| `/fr/careers` | 43.2 KB | 0.0% | 0.0% |
| `/fr/contact` | 42.5 KB | 0.0% | 0.0% |
| `/fr/faq` | 43.0 KB | 0.0% | 0.0% |
| `/fr/pricing` | 42.6 KB | 100.0% | 0.0% |
| `/fr/products` | 42.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 43.7 KB | 0.0% | 0.0% |
| `/fr/team` | 42.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.6 ms | 1.6 ms | 3.5 ms | 0.0 ms |
| `fr` | 3.0 ms | 2.7 ms | 3.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.1 ms | 4.7 ms | 2.1 ms |
| `fr` | 13.1 ms | 5.9 ms | 2.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 44.4 KB | 0.0% | 0.0% |
| `/en/about` | 43.1 KB | 0.0% | 0.0% |
| `/en/blog` | 42.8 KB | 0.0% | 0.0% |
| `/en/careers` | 43.2 KB | 0.0% | 0.0% |
| `/en/contact` | 42.5 KB | 0.0% | 0.0% |
| `/en/faq` | 43.0 KB | 0.0% | 0.0% |
| `/en/pricing` | 42.6 KB | 0.0% | 0.0% |
| `/en/products` | 42.6 KB | 0.0% | 0.0% |
| `/en/settings` | 43.7 KB | 0.0% | 0.0% |
| `/en/team` | 42.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 44.4 KB | 0.0% | 0.0% |
| `/fr/about` | 43.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 42.8 KB | 0.0% | 0.0% |
| `/fr/careers` | 43.2 KB | 0.0% | 0.0% |
| `/fr/contact` | 42.5 KB | 0.0% | 0.0% |
| `/fr/faq` | 43.0 KB | 0.0% | 0.0% |
| `/fr/pricing` | 42.6 KB | 100.0% | 0.0% |
| `/fr/products` | 42.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 43.7 KB | 0.0% | 0.0% |
| `/fr/team` | 42.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.6 ms | 1.6 ms | 3.5 ms | 0.0 ms |
| `fr` | 3.0 ms | 2.7 ms | 3.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.1 ms | 4.7 ms | 2.1 ms |
| `fr` | 13.1 ms | 5.9 ms | 2.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 44.4 KB | 0.0% | 0.0% |
| `/en/about` | 43.1 KB | 0.0% | 0.0% |
| `/en/blog` | 42.8 KB | 0.0% | 0.0% |
| `/en/careers` | 43.2 KB | 0.0% | 0.0% |
| `/en/contact` | 42.5 KB | 0.0% | 0.0% |
| `/en/faq` | 43.0 KB | 0.0% | 0.0% |
| `/en/pricing` | 42.6 KB | 0.0% | 0.0% |
| `/en/products` | 42.6 KB | 0.0% | 0.0% |
| `/en/settings` | 43.7 KB | 0.0% | 0.0% |
| `/en/team` | 42.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 44.4 KB | 0.0% | 0.0% |
| `/fr/about` | 43.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 42.8 KB | 0.0% | 0.0% |
| `/fr/careers` | 43.2 KB | 0.0% | 0.0% |
| `/fr/contact` | 42.5 KB | 0.0% | 0.0% |
| `/fr/faq` | 43.0 KB | 0.0% | 0.0% |
| `/fr/pricing` | 42.6 KB | 100.0% | 0.0% |
| `/fr/products` | 42.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 43.7 KB | 0.0% | 0.0% |
| `/fr/team` | 42.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.6 ms | 1.6 ms | 3.5 ms | 0.0 ms |
| `fr` | 3.0 ms | 2.7 ms | 3.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.1 ms | 4.7 ms | 2.1 ms |
| `fr` | 13.1 ms | 5.9 ms | 2.1 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 44.4 KB | 0.0% | 0.0% |
| `/en/about` | 43.1 KB | 0.0% | 0.0% |
| `/en/blog` | 42.8 KB | 0.0% | 0.0% |
| `/en/careers` | 43.2 KB | 0.0% | 0.0% |
| `/en/contact` | 42.5 KB | 0.0% | 0.0% |
| `/en/faq` | 43.0 KB | 0.0% | 0.0% |
| `/en/pricing` | 42.6 KB | 0.0% | 0.0% |
| `/en/products` | 42.6 KB | 0.0% | 0.0% |
| `/en/settings` | 43.7 KB | 0.0% | 0.0% |
| `/en/team` | 42.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 44.4 KB | 0.0% | 0.0% |
| `/fr/about` | 43.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 42.8 KB | 0.0% | 0.0% |
| `/fr/careers` | 43.2 KB | 0.0% | 0.0% |
| `/fr/contact` | 42.5 KB | 0.0% | 0.0% |
| `/fr/faq` | 43.0 KB | 0.0% | 0.0% |
| `/fr/pricing` | 42.6 KB | 100.0% | 0.0% |
| `/fr/products` | 42.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 43.7 KB | 0.0% | 0.0% |
| `/fr/team` | 42.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.6 ms | 1.6 ms | 3.5 ms | 0.0 ms |
| `fr` | 3.0 ms | 2.7 ms | 3.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.1 ms | 4.7 ms | 2.1 ms |
| `fr` | 13.1 ms | 5.9 ms | 2.1 ms |

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

## i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 11.4.0 | 20.6 KB | 70.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | — | — | — | — | — | — | 13.0 ms | 6.3 ms |
| Dynamic | 🔶 | — | — | — | — | — | — | 13.0 ms | 6.3 ms |
| Scoped Static | 🔶 | — | — | — | — | — | — | 13.0 ms | 6.3 ms |
| Scoped Dynamic | 🔶 | — | — | — | — | — | — | 13.0 ms | 6.3 ms |

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.8 ms | 6.5 ms | 2.5 ms |
| `fr` | 12.1 ms | 6.2 ms | 2.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.8 ms | 6.5 ms | 2.5 ms |
| `fr` | 12.1 ms | 6.2 ms | 2.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.8 ms | 6.5 ms | 2.5 ms |
| `fr` | 12.1 ms | 6.2 ms | 2.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.8 ms | 6.5 ms | 2.5 ms |
| `fr` | 12.1 ms | 6.2 ms | 2.5 ms |

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.11 | 16.0 KB | 57.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 62.0 KB | 51.7% | 0.0% | 18.3 KB | 5.2 ms | — | 11.8 ms | 4.9 ms |
| Dynamic | ✅ | 62.0 KB | 51.7% | 0.0% | 18.3 KB | 5.2 ms | — | 11.8 ms | 4.9 ms |
| Scoped Static | ✅ | 62.0 KB | 51.7% | 0.0% | 18.3 KB | 5.2 ms | — | 11.8 ms | 4.9 ms |
| Scoped Dynamic | ✅ | 62.0 KB | 51.7% | 0.0% | 18.3 KB | 5.2 ms | — | 11.8 ms | 4.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 74.0 KB | 51.4% | 0.0% |
| `/en/about` | 66.6 KB | 57.1% | 0.0% |
| `/en/blog` | 60.6 KB | 50.0% | 0.0% |
| `/en/careers` | 61.8 KB | 51.7% | 0.0% |
| `/en/contact` | 56.7 KB | 50.0% | 0.0% |
| `/en/faq` | 63.9 KB | 50.0% | 0.0% |
| `/en/pricing` | 57.9 KB | 63.2% | 0.0% |
| `/en/products` | 59.3 KB | 54.5% | 0.0% |
| `/en/settings` | 59.9 KB | 53.3% | 0.0% |
| `/en/team` | 59.5 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 74.0 KB | 48.6% | 0.0% |
| `/fr/about` | 66.6 KB | 42.9% | 0.0% |
| `/fr/blog` | 60.6 KB | 50.0% | 0.0% |
| `/fr/careers` | 61.8 KB | 82.4% | 0.0% |
| `/fr/contact` | 56.7 KB | 50.0% | 0.0% |
| `/fr/faq` | 63.9 KB | 50.0% | 0.0% |
| `/fr/pricing` | 57.9 KB | 36.8% | 0.0% |
| `/fr/products` | 59.3 KB | 45.5% | 0.0% |
| `/fr/settings` | 59.9 KB | 46.7% | 0.0% |
| `/fr/team` | 59.5 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 6.1 ms | 4.3 ms | 11.5 ms | 0.0 ms |
| `fr` | 4.4 ms | 3.8 ms | 5.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.3 ms | 5.1 ms | 2.5 ms |
| `fr` | 11.3 ms | 4.6 ms | 2.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 74.0 KB | 51.4% | 0.0% |
| `/en/about` | 66.6 KB | 57.1% | 0.0% |
| `/en/blog` | 60.6 KB | 50.0% | 0.0% |
| `/en/careers` | 61.8 KB | 51.7% | 0.0% |
| `/en/contact` | 56.7 KB | 50.0% | 0.0% |
| `/en/faq` | 63.9 KB | 50.0% | 0.0% |
| `/en/pricing` | 57.9 KB | 63.2% | 0.0% |
| `/en/products` | 59.3 KB | 54.5% | 0.0% |
| `/en/settings` | 59.9 KB | 53.3% | 0.0% |
| `/en/team` | 59.5 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 74.0 KB | 48.6% | 0.0% |
| `/fr/about` | 66.6 KB | 42.9% | 0.0% |
| `/fr/blog` | 60.6 KB | 50.0% | 0.0% |
| `/fr/careers` | 61.8 KB | 82.4% | 0.0% |
| `/fr/contact` | 56.7 KB | 50.0% | 0.0% |
| `/fr/faq` | 63.9 KB | 50.0% | 0.0% |
| `/fr/pricing` | 57.9 KB | 36.8% | 0.0% |
| `/fr/products` | 59.3 KB | 45.5% | 0.0% |
| `/fr/settings` | 59.9 KB | 46.7% | 0.0% |
| `/fr/team` | 59.5 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 6.1 ms | 4.3 ms | 11.5 ms | 0.0 ms |
| `fr` | 4.4 ms | 3.8 ms | 5.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.3 ms | 5.1 ms | 2.5 ms |
| `fr` | 11.3 ms | 4.6 ms | 2.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 74.0 KB | 51.4% | 0.0% |
| `/en/about` | 66.6 KB | 57.1% | 0.0% |
| `/en/blog` | 60.6 KB | 50.0% | 0.0% |
| `/en/careers` | 61.8 KB | 51.7% | 0.0% |
| `/en/contact` | 56.7 KB | 50.0% | 0.0% |
| `/en/faq` | 63.9 KB | 50.0% | 0.0% |
| `/en/pricing` | 57.9 KB | 63.2% | 0.0% |
| `/en/products` | 59.3 KB | 54.5% | 0.0% |
| `/en/settings` | 59.9 KB | 53.3% | 0.0% |
| `/en/team` | 59.5 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 74.0 KB | 48.6% | 0.0% |
| `/fr/about` | 66.6 KB | 42.9% | 0.0% |
| `/fr/blog` | 60.6 KB | 50.0% | 0.0% |
| `/fr/careers` | 61.8 KB | 82.4% | 0.0% |
| `/fr/contact` | 56.7 KB | 50.0% | 0.0% |
| `/fr/faq` | 63.9 KB | 50.0% | 0.0% |
| `/fr/pricing` | 57.9 KB | 36.8% | 0.0% |
| `/fr/products` | 59.3 KB | 45.5% | 0.0% |
| `/fr/settings` | 59.9 KB | 46.7% | 0.0% |
| `/fr/team` | 59.5 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 6.1 ms | 4.3 ms | 11.5 ms | 0.0 ms |
| `fr` | 4.4 ms | 3.8 ms | 5.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.3 ms | 5.1 ms | 2.5 ms |
| `fr` | 11.3 ms | 4.6 ms | 2.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 74.0 KB | 51.4% | 0.0% |
| `/en/about` | 66.6 KB | 57.1% | 0.0% |
| `/en/blog` | 60.6 KB | 50.0% | 0.0% |
| `/en/careers` | 61.8 KB | 51.7% | 0.0% |
| `/en/contact` | 56.7 KB | 50.0% | 0.0% |
| `/en/faq` | 63.9 KB | 50.0% | 0.0% |
| `/en/pricing` | 57.9 KB | 63.2% | 0.0% |
| `/en/products` | 59.3 KB | 54.5% | 0.0% |
| `/en/settings` | 59.9 KB | 53.3% | 0.0% |
| `/en/team` | 59.5 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 74.0 KB | 48.6% | 0.0% |
| `/fr/about` | 66.6 KB | 42.9% | 0.0% |
| `/fr/blog` | 60.6 KB | 50.0% | 0.0% |
| `/fr/careers` | 61.8 KB | 82.4% | 0.0% |
| `/fr/contact` | 56.7 KB | 50.0% | 0.0% |
| `/fr/faq` | 63.9 KB | 50.0% | 0.0% |
| `/fr/pricing` | 57.9 KB | 36.8% | 0.0% |
| `/fr/products` | 59.3 KB | 45.5% | 0.0% |
| `/fr/settings` | 59.9 KB | 46.7% | 0.0% |
| `/fr/team` | 59.5 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 6.1 ms | 4.3 ms | 11.5 ms | 0.0 ms |
| `fr` | 4.4 ms | 3.8 ms | 5.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.3 ms | 5.1 ms | 2.5 ms |
| `fr` | 11.3 ms | 4.6 ms | 2.2 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 4 |
| Total app entries | 4 |
| With lib size data | 4 |
| With page bundle data | 12 |
| With component data | 12 |
| With reactivity data | 12 |
| With rendering data | 16 |
