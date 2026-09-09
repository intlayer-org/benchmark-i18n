# Vite + Vue — i18n Benchmark Results

_Generated: 2026-09-09_

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
| Static | ✅ | 41.3 KB | 0.0% | 35.0% | 1.1 KB | 1.8 ms | — | 10.8 ms | 3.6 ms |
| Dynamic | ✅ | 41.3 KB | 0.0% | 35.0% | 1.1 KB | 1.8 ms | — | 10.8 ms | 3.6 ms |
| Scoped Static | ✅ | 41.3 KB | 0.0% | 35.0% | 1.1 KB | 1.8 ms | — | 10.8 ms | 3.6 ms |
| Scoped Dynamic | ✅ | 41.3 KB | 0.0% | 35.0% | 1.1 KB | 1.8 ms | — | 10.8 ms | 3.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 42.2 KB | 0.0% | 0.0% |
| `/en/about` | 41.4 KB | 0.0% | 0.0% |
| `/en/blog` | 41.0 KB | 0.0% | 100.0% |
| `/en/careers` | 41.5 KB | 0.0% | 100.0% |
| `/en/contact` | 40.8 KB | 0.0% | 100.0% |
| `/en/faq` | 41.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 40.9 KB | 0.0% | 100.0% |
| `/en/products` | 40.9 KB | 0.0% | 100.0% |
| `/en/settings` | 42.1 KB | 0.0% | 100.0% |
| `/en/team` | 40.9 KB | 0.0% | 100.0% |

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
| `en` | 2.1 ms | 1.1 ms | 5.4 ms | 0.0 ms |
| `fr` | 1.5 ms | 1.1 ms | 2.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.1 ms | 3.9 ms | 1.7 ms |
| `fr` | 10.5 ms | 3.4 ms | 1.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 42.2 KB | 0.0% | 0.0% |
| `/en/about` | 41.4 KB | 0.0% | 0.0% |
| `/en/blog` | 41.0 KB | 0.0% | 100.0% |
| `/en/careers` | 41.5 KB | 0.0% | 100.0% |
| `/en/contact` | 40.8 KB | 0.0% | 100.0% |
| `/en/faq` | 41.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 40.9 KB | 0.0% | 100.0% |
| `/en/products` | 40.9 KB | 0.0% | 100.0% |
| `/en/settings` | 42.1 KB | 0.0% | 100.0% |
| `/en/team` | 40.9 KB | 0.0% | 100.0% |

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
| `en` | 2.1 ms | 1.1 ms | 5.4 ms | 0.0 ms |
| `fr` | 1.5 ms | 1.1 ms | 2.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.1 ms | 3.9 ms | 1.7 ms |
| `fr` | 10.5 ms | 3.4 ms | 1.7 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 42.2 KB | 0.0% | 0.0% |
| `/en/about` | 41.4 KB | 0.0% | 0.0% |
| `/en/blog` | 41.0 KB | 0.0% | 100.0% |
| `/en/careers` | 41.5 KB | 0.0% | 100.0% |
| `/en/contact` | 40.8 KB | 0.0% | 100.0% |
| `/en/faq` | 41.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 40.9 KB | 0.0% | 100.0% |
| `/en/products` | 40.9 KB | 0.0% | 100.0% |
| `/en/settings` | 42.1 KB | 0.0% | 100.0% |
| `/en/team` | 40.9 KB | 0.0% | 100.0% |

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
| `en` | 2.1 ms | 1.1 ms | 5.4 ms | 0.0 ms |
| `fr` | 1.5 ms | 1.1 ms | 2.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.1 ms | 3.9 ms | 1.7 ms |
| `fr` | 10.5 ms | 3.4 ms | 1.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 42.2 KB | 0.0% | 0.0% |
| `/en/about` | 41.4 KB | 0.0% | 0.0% |
| `/en/blog` | 41.0 KB | 0.0% | 100.0% |
| `/en/careers` | 41.5 KB | 0.0% | 100.0% |
| `/en/contact` | 40.8 KB | 0.0% | 100.0% |
| `/en/faq` | 41.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 40.9 KB | 0.0% | 100.0% |
| `/en/products` | 40.9 KB | 0.0% | 100.0% |
| `/en/settings` | 42.1 KB | 0.0% | 100.0% |
| `/en/team` | 40.9 KB | 0.0% | 100.0% |

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
| `en` | 2.1 ms | 1.1 ms | 5.4 ms | 0.0 ms |
| `fr` | 1.5 ms | 1.1 ms | 2.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.1 ms | 3.9 ms | 1.7 ms |
| `fr` | 10.5 ms | 3.4 ms | 1.7 ms |

</details>

---

## fluent-vue

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 3.8.2 | 92.7 KB | 328.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 171.8 KB | 50.0% | 90.0% | 217.2 KB | 2.7 ms | — | 33.9 ms | 24.4 ms |
| Dynamic | ✅ | 171.8 KB | 50.0% | 90.0% | 217.2 KB | 2.7 ms | — | 33.9 ms | 24.4 ms |
| Scoped Static | ✅ | 171.8 KB | 50.0% | 90.0% | 217.2 KB | 2.7 ms | — | 33.9 ms | 24.4 ms |
| Scoped Dynamic | ✅ | 171.8 KB | 50.0% | 90.0% | 217.2 KB | 2.7 ms | — | 33.9 ms | 24.4 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 172.1 KB | 51.4% | 0.0% |
| `/en/about` | 171.6 KB | 51.4% | 100.0% |
| `/en/blog` | 171.5 KB | 51.4% | 100.0% |
| `/en/careers` | 172.2 KB | 51.4% | 100.0% |
| `/en/contact` | 171.8 KB | 51.4% | 100.0% |
| `/en/faq` | 171.0 KB | 51.4% | 100.0% |
| `/en/pricing` | 171.7 KB | 51.4% | 100.0% |
| `/en/products` | 171.5 KB | 51.4% | 100.0% |
| `/en/settings` | 173.5 KB | 51.4% | 100.0% |
| `/en/team` | 171.1 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 172.1 KB | 48.6% | 0.0% |
| `/fr/about` | 171.6 KB | 48.6% | 100.0% |
| `/fr/blog` | 171.5 KB | 48.6% | 100.0% |
| `/fr/careers` | 172.2 KB | 48.6% | 100.0% |
| `/fr/contact` | 171.8 KB | 48.6% | 100.0% |
| `/fr/faq` | 171.0 KB | 48.6% | 100.0% |
| `/fr/pricing` | 171.7 KB | 48.6% | 100.0% |
| `/fr/products` | 171.5 KB | 48.6% | 100.0% |
| `/fr/settings` | 173.5 KB | 48.6% | 100.0% |
| `/fr/team` | 171.1 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.9 ms | 2.0 ms | 6.0 ms | 0.0 ms |
| `fr` | 2.6 ms | 2.1 ms | 4.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 37.6 ms | 26.3 ms | 2.6 ms |
| `fr` | 30.2 ms | 22.4 ms | 2.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 172.1 KB | 51.4% | 0.0% |
| `/en/about` | 171.6 KB | 51.4% | 100.0% |
| `/en/blog` | 171.5 KB | 51.4% | 100.0% |
| `/en/careers` | 172.2 KB | 51.4% | 100.0% |
| `/en/contact` | 171.8 KB | 51.4% | 100.0% |
| `/en/faq` | 171.0 KB | 51.4% | 100.0% |
| `/en/pricing` | 171.7 KB | 51.4% | 100.0% |
| `/en/products` | 171.5 KB | 51.4% | 100.0% |
| `/en/settings` | 173.5 KB | 51.4% | 100.0% |
| `/en/team` | 171.1 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 172.1 KB | 48.6% | 0.0% |
| `/fr/about` | 171.6 KB | 48.6% | 100.0% |
| `/fr/blog` | 171.5 KB | 48.6% | 100.0% |
| `/fr/careers` | 172.2 KB | 48.6% | 100.0% |
| `/fr/contact` | 171.8 KB | 48.6% | 100.0% |
| `/fr/faq` | 171.0 KB | 48.6% | 100.0% |
| `/fr/pricing` | 171.7 KB | 48.6% | 100.0% |
| `/fr/products` | 171.5 KB | 48.6% | 100.0% |
| `/fr/settings` | 173.5 KB | 48.6% | 100.0% |
| `/fr/team` | 171.1 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.9 ms | 2.0 ms | 6.0 ms | 0.0 ms |
| `fr` | 2.6 ms | 2.1 ms | 4.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 37.6 ms | 26.3 ms | 2.6 ms |
| `fr` | 30.2 ms | 22.4 ms | 2.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 172.1 KB | 51.4% | 0.0% |
| `/en/about` | 171.6 KB | 51.4% | 100.0% |
| `/en/blog` | 171.5 KB | 51.4% | 100.0% |
| `/en/careers` | 172.2 KB | 51.4% | 100.0% |
| `/en/contact` | 171.8 KB | 51.4% | 100.0% |
| `/en/faq` | 171.0 KB | 51.4% | 100.0% |
| `/en/pricing` | 171.7 KB | 51.4% | 100.0% |
| `/en/products` | 171.5 KB | 51.4% | 100.0% |
| `/en/settings` | 173.5 KB | 51.4% | 100.0% |
| `/en/team` | 171.1 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 172.1 KB | 48.6% | 0.0% |
| `/fr/about` | 171.6 KB | 48.6% | 100.0% |
| `/fr/blog` | 171.5 KB | 48.6% | 100.0% |
| `/fr/careers` | 172.2 KB | 48.6% | 100.0% |
| `/fr/contact` | 171.8 KB | 48.6% | 100.0% |
| `/fr/faq` | 171.0 KB | 48.6% | 100.0% |
| `/fr/pricing` | 171.7 KB | 48.6% | 100.0% |
| `/fr/products` | 171.5 KB | 48.6% | 100.0% |
| `/fr/settings` | 173.5 KB | 48.6% | 100.0% |
| `/fr/team` | 171.1 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.9 ms | 2.0 ms | 6.0 ms | 0.0 ms |
| `fr` | 2.6 ms | 2.1 ms | 4.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 37.6 ms | 26.3 ms | 2.6 ms |
| `fr` | 30.2 ms | 22.4 ms | 2.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 172.1 KB | 51.4% | 0.0% |
| `/en/about` | 171.6 KB | 51.4% | 100.0% |
| `/en/blog` | 171.5 KB | 51.4% | 100.0% |
| `/en/careers` | 172.2 KB | 51.4% | 100.0% |
| `/en/contact` | 171.8 KB | 51.4% | 100.0% |
| `/en/faq` | 171.0 KB | 51.4% | 100.0% |
| `/en/pricing` | 171.7 KB | 51.4% | 100.0% |
| `/en/products` | 171.5 KB | 51.4% | 100.0% |
| `/en/settings` | 173.5 KB | 51.4% | 100.0% |
| `/en/team` | 171.1 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 172.1 KB | 48.6% | 0.0% |
| `/fr/about` | 171.6 KB | 48.6% | 100.0% |
| `/fr/blog` | 171.5 KB | 48.6% | 100.0% |
| `/fr/careers` | 172.2 KB | 48.6% | 100.0% |
| `/fr/contact` | 171.8 KB | 48.6% | 100.0% |
| `/fr/faq` | 171.0 KB | 48.6% | 100.0% |
| `/fr/pricing` | 171.7 KB | 48.6% | 100.0% |
| `/fr/products` | 171.5 KB | 48.6% | 100.0% |
| `/fr/settings` | 173.5 KB | 48.6% | 100.0% |
| `/fr/team` | 171.1 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-fluent-vue-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.9 ms | 2.0 ms | 6.0 ms | 0.0 ms |
| `fr` | 2.6 ms | 2.1 ms | 4.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 37.6 ms | 26.3 ms | 2.6 ms |
| `fr` | 30.2 ms | 22.4 ms | 2.5 ms |

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.0 | 3.9 KB | 11.1 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 57.1 KB | 56.8% | 0.0% | 7.7 KB | 4.5 ms | — | 13.8 ms | 6.3 ms |
| Dynamic | 🔶 | 59.8 KB | 50.0% | 0.0% | 6.5 KB | 4.0 ms | — | 15.8 ms | 6.9 ms |
| Scoped Static | ✅ | 57.1 KB | 56.8% | 0.0% | 7.7 KB | 4.5 ms | — | 13.8 ms | 6.3 ms |
| Scoped Dynamic | 🔶 | 59.8 KB | 50.0% | 0.0% | 6.5 KB | 4.0 ms | — | 15.8 ms | 6.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 68.5 KB | 44.4% | 0.0% |
| `/en/about` | 61.8 KB | 50.0% | 0.0% |
| `/en/blog` | 55.8 KB | 50.0% | 0.0% |
| `/en/careers` | 57.0 KB | 50.0% | 0.0% |
| `/en/contact` | 51.9 KB | 50.0% | 0.0% |
| `/en/faq` | 59.1 KB | 50.0% | 0.0% |
| `/en/pricing` | 53.1 KB | 50.0% | 0.0% |
| `/en/products` | 54.5 KB | 50.0% | 0.0% |
| `/en/settings` | 55.0 KB | 50.0% | 0.0% |
| `/en/team` | 54.8 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 68.5 KB | 55.6% | 0.0% |
| `/fr/about` | 61.8 KB | 50.0% | 0.0% |
| `/fr/blog` | 55.8 KB | 88.9% | 0.0% |
| `/fr/careers` | 57.0 KB | 87.5% | 0.0% |
| `/fr/contact` | 51.9 KB | 60.0% | 0.0% |
| `/fr/faq` | 59.1 KB | 60.0% | 0.0% |
| `/fr/pricing` | 53.1 KB | 60.0% | 0.0% |
| `/fr/products` | 54.5 KB | 60.0% | 0.0% |
| `/fr/settings` | 55.0 KB | 60.0% | 0.0% |
| `/fr/team` | 54.8 KB | 60.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.6 ms | 3.8 ms | 6.6 ms | 0.0 ms |
| `fr` | 4.4 ms | 3.7 ms | 5.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.0 ms | 6.5 ms | 3.9 ms |
| `fr` | 13.5 ms | 6.1 ms | 3.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 71.7 KB | 44.4% | 0.0% |
| `/en/about` | 64.4 KB | 56.5% | 0.0% |
| `/en/blog` | 58.4 KB | 50.0% | 0.0% |
| `/en/careers` | 59.5 KB | 51.7% | 0.0% |
| `/en/contact` | 54.5 KB | 50.0% | 0.0% |
| `/en/faq` | 61.7 KB | 50.0% | 0.0% |
| `/en/pricing` | 55.7 KB | 61.1% | 0.0% |
| `/en/products` | 57.1 KB | 54.5% | 0.0% |
| `/en/settings` | 57.4 KB | 53.8% | 0.0% |
| `/en/team` | 57.4 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 71.7 KB | 55.6% | 0.0% |
| `/fr/about` | 64.4 KB | 43.5% | 0.0% |
| `/fr/blog` | 58.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 59.5 KB | 48.3% | 0.0% |
| `/fr/contact` | 54.5 KB | 50.0% | 0.0% |
| `/fr/faq` | 61.7 KB | 50.0% | 0.0% |
| `/fr/pricing` | 55.7 KB | 38.9% | 0.0% |
| `/fr/products` | 57.1 KB | 45.5% | 0.0% |
| `/fr/settings` | 57.4 KB | 46.2% | 0.0% |
| `/fr/team` | 57.4 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.0 ms | 3.0 ms | 6.3 ms | 0.0 ms |
| `fr` | 3.9 ms | 3.1 ms | 4.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.7 ms | 8.3 ms | 3.3 ms |
| `fr` | 12.9 ms | 5.6 ms | 3.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 68.5 KB | 44.4% | 0.0% |
| `/en/about` | 61.8 KB | 50.0% | 0.0% |
| `/en/blog` | 55.8 KB | 50.0% | 0.0% |
| `/en/careers` | 57.0 KB | 50.0% | 0.0% |
| `/en/contact` | 51.9 KB | 50.0% | 0.0% |
| `/en/faq` | 59.1 KB | 50.0% | 0.0% |
| `/en/pricing` | 53.1 KB | 50.0% | 0.0% |
| `/en/products` | 54.5 KB | 50.0% | 0.0% |
| `/en/settings` | 55.0 KB | 50.0% | 0.0% |
| `/en/team` | 54.8 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 68.5 KB | 55.6% | 0.0% |
| `/fr/about` | 61.8 KB | 50.0% | 0.0% |
| `/fr/blog` | 55.8 KB | 88.9% | 0.0% |
| `/fr/careers` | 57.0 KB | 87.5% | 0.0% |
| `/fr/contact` | 51.9 KB | 60.0% | 0.0% |
| `/fr/faq` | 59.1 KB | 60.0% | 0.0% |
| `/fr/pricing` | 53.1 KB | 60.0% | 0.0% |
| `/fr/products` | 54.5 KB | 60.0% | 0.0% |
| `/fr/settings` | 55.0 KB | 60.0% | 0.0% |
| `/fr/team` | 54.8 KB | 60.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.6 ms | 3.8 ms | 6.6 ms | 0.0 ms |
| `fr` | 4.4 ms | 3.7 ms | 5.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.0 ms | 6.5 ms | 3.9 ms |
| `fr` | 13.5 ms | 6.1 ms | 3.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 71.7 KB | 44.4% | 0.0% |
| `/en/about` | 64.4 KB | 56.5% | 0.0% |
| `/en/blog` | 58.4 KB | 50.0% | 0.0% |
| `/en/careers` | 59.5 KB | 51.7% | 0.0% |
| `/en/contact` | 54.5 KB | 50.0% | 0.0% |
| `/en/faq` | 61.7 KB | 50.0% | 0.0% |
| `/en/pricing` | 55.7 KB | 61.1% | 0.0% |
| `/en/products` | 57.1 KB | 54.5% | 0.0% |
| `/en/settings` | 57.4 KB | 53.8% | 0.0% |
| `/en/team` | 57.4 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 71.7 KB | 55.6% | 0.0% |
| `/fr/about` | 64.4 KB | 43.5% | 0.0% |
| `/fr/blog` | 58.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 59.5 KB | 48.3% | 0.0% |
| `/fr/contact` | 54.5 KB | 50.0% | 0.0% |
| `/fr/faq` | 61.7 KB | 50.0% | 0.0% |
| `/fr/pricing` | 55.7 KB | 38.9% | 0.0% |
| `/fr/products` | 57.1 KB | 45.5% | 0.0% |
| `/fr/settings` | 57.4 KB | 46.2% | 0.0% |
| `/fr/team` | 57.4 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.0 ms | 3.0 ms | 6.3 ms | 0.0 ms |
| `fr` | 3.9 ms | 3.1 ms | 4.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.7 ms | 8.3 ms | 3.3 ms |
| `fr` | 12.9 ms | 5.6 ms | 3.0 ms |

</details>

---

## vue-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 11.4.0 | 24.3 KB | 83.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 134.9 KB | 50.0% | 90.0% | 196.0 KB | 2.8 ms | — | 13.6 ms | 6.2 ms |
| Dynamic | ✅ | 134.9 KB | 50.0% | 90.0% | 196.0 KB | 2.8 ms | — | 13.6 ms | 6.2 ms |
| Scoped Static | ✅ | 134.9 KB | 50.0% | 90.0% | 196.0 KB | 2.8 ms | — | 13.6 ms | 6.2 ms |
| Scoped Dynamic | ✅ | 134.9 KB | 50.0% | 90.0% | 196.0 KB | 2.8 ms | — | 13.6 ms | 6.2 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 135.1 KB | 51.4% | 0.0% |
| `/en/about` | 134.6 KB | 51.4% | 100.0% |
| `/en/blog` | 134.5 KB | 51.4% | 100.0% |
| `/en/careers` | 135.1 KB | 51.4% | 100.0% |
| `/en/contact` | 134.8 KB | 51.4% | 100.0% |
| `/en/faq` | 134.4 KB | 51.4% | 100.0% |
| `/en/pricing` | 134.9 KB | 51.4% | 100.0% |
| `/en/products` | 134.9 KB | 51.4% | 100.0% |
| `/en/settings` | 136.2 KB | 51.4% | 100.0% |
| `/en/team` | 134.9 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 135.1 KB | 48.6% | 0.0% |
| `/fr/about` | 134.6 KB | 48.6% | 100.0% |
| `/fr/blog` | 134.5 KB | 48.6% | 100.0% |
| `/fr/careers` | 135.1 KB | 48.6% | 100.0% |
| `/fr/contact` | 134.8 KB | 48.6% | 100.0% |
| `/fr/faq` | 134.4 KB | 48.6% | 100.0% |
| `/fr/pricing` | 134.9 KB | 48.6% | 100.0% |
| `/fr/products` | 134.9 KB | 48.6% | 100.0% |
| `/fr/settings` | 136.2 KB | 48.6% | 100.0% |
| `/fr/team` | 134.9 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.9 ms | 2.2 ms | 5.4 ms | 0.0 ms |
| `fr` | 2.7 ms | 2.2 ms | 4.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.1 ms | 6.3 ms | 2.4 ms |
| `fr` | 13.2 ms | 6.0 ms | 2.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 135.1 KB | 51.4% | 0.0% |
| `/en/about` | 134.6 KB | 51.4% | 100.0% |
| `/en/blog` | 134.5 KB | 51.4% | 100.0% |
| `/en/careers` | 135.1 KB | 51.4% | 100.0% |
| `/en/contact` | 134.8 KB | 51.4% | 100.0% |
| `/en/faq` | 134.4 KB | 51.4% | 100.0% |
| `/en/pricing` | 134.9 KB | 51.4% | 100.0% |
| `/en/products` | 134.9 KB | 51.4% | 100.0% |
| `/en/settings` | 136.2 KB | 51.4% | 100.0% |
| `/en/team` | 134.9 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 135.1 KB | 48.6% | 0.0% |
| `/fr/about` | 134.6 KB | 48.6% | 100.0% |
| `/fr/blog` | 134.5 KB | 48.6% | 100.0% |
| `/fr/careers` | 135.1 KB | 48.6% | 100.0% |
| `/fr/contact` | 134.8 KB | 48.6% | 100.0% |
| `/fr/faq` | 134.4 KB | 48.6% | 100.0% |
| `/fr/pricing` | 134.9 KB | 48.6% | 100.0% |
| `/fr/products` | 134.9 KB | 48.6% | 100.0% |
| `/fr/settings` | 136.2 KB | 48.6% | 100.0% |
| `/fr/team` | 134.9 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.9 ms | 2.2 ms | 5.4 ms | 0.0 ms |
| `fr` | 2.7 ms | 2.2 ms | 4.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.1 ms | 6.3 ms | 2.4 ms |
| `fr` | 13.2 ms | 6.0 ms | 2.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 135.1 KB | 51.4% | 0.0% |
| `/en/about` | 134.6 KB | 51.4% | 100.0% |
| `/en/blog` | 134.5 KB | 51.4% | 100.0% |
| `/en/careers` | 135.1 KB | 51.4% | 100.0% |
| `/en/contact` | 134.8 KB | 51.4% | 100.0% |
| `/en/faq` | 134.4 KB | 51.4% | 100.0% |
| `/en/pricing` | 134.9 KB | 51.4% | 100.0% |
| `/en/products` | 134.9 KB | 51.4% | 100.0% |
| `/en/settings` | 136.2 KB | 51.4% | 100.0% |
| `/en/team` | 134.9 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 135.1 KB | 48.6% | 0.0% |
| `/fr/about` | 134.6 KB | 48.6% | 100.0% |
| `/fr/blog` | 134.5 KB | 48.6% | 100.0% |
| `/fr/careers` | 135.1 KB | 48.6% | 100.0% |
| `/fr/contact` | 134.8 KB | 48.6% | 100.0% |
| `/fr/faq` | 134.4 KB | 48.6% | 100.0% |
| `/fr/pricing` | 134.9 KB | 48.6% | 100.0% |
| `/fr/products` | 134.9 KB | 48.6% | 100.0% |
| `/fr/settings` | 136.2 KB | 48.6% | 100.0% |
| `/fr/team` | 134.9 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.9 ms | 2.2 ms | 5.4 ms | 0.0 ms |
| `fr` | 2.7 ms | 2.2 ms | 4.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.1 ms | 6.3 ms | 2.4 ms |
| `fr` | 13.2 ms | 6.0 ms | 2.1 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 135.1 KB | 51.4% | 0.0% |
| `/en/about` | 134.6 KB | 51.4% | 100.0% |
| `/en/blog` | 134.5 KB | 51.4% | 100.0% |
| `/en/careers` | 135.1 KB | 51.4% | 100.0% |
| `/en/contact` | 134.8 KB | 51.4% | 100.0% |
| `/en/faq` | 134.4 KB | 51.4% | 100.0% |
| `/en/pricing` | 134.9 KB | 51.4% | 100.0% |
| `/en/products` | 134.9 KB | 51.4% | 100.0% |
| `/en/settings` | 136.2 KB | 51.4% | 100.0% |
| `/en/team` | 134.9 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 135.1 KB | 48.6% | 0.0% |
| `/fr/about` | 134.6 KB | 48.6% | 100.0% |
| `/fr/blog` | 134.5 KB | 48.6% | 100.0% |
| `/fr/careers` | 135.1 KB | 48.6% | 100.0% |
| `/fr/contact` | 134.8 KB | 48.6% | 100.0% |
| `/fr/faq` | 134.4 KB | 48.6% | 100.0% |
| `/fr/pricing` | 134.9 KB | 48.6% | 100.0% |
| `/fr/products` | 134.9 KB | 48.6% | 100.0% |
| `/fr/settings` | 136.2 KB | 48.6% | 100.0% |
| `/fr/team` | 134.9 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.9 ms | 2.2 ms | 5.4 ms | 0.0 ms |
| `fr` | 2.7 ms | 2.2 ms | 4.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.1 ms | 6.3 ms | 2.4 ms |
| `fr` | 13.2 ms | 6.0 ms | 2.1 ms |

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
