# Vite + Vue — i18n Benchmark Results

_Generated: 2026-09-23_

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

- [@intlayer/vue-i18n](#intlayer-vue-i18n)
- [base](#base)
- [fluent-vue](#fluent-vue)
- [intlayer](#intlayer)
- [tolgee](#tolgee)
- [vue-i18n](#vue-i18n)

## @intlayer/vue-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.1 | 7.7 KB | 22.4 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 47.0 KB | 15.0% | 0.0% | 8.2 KB | 1.5 ms | — | 9.3 ms | 3.5 ms |
| Dynamic | ↳ Static | 47.0 KB | 15.0% | 0.0% | 8.2 KB | 1.5 ms | — | 9.3 ms | 3.5 ms |
| Scoped Static | ↳ Static | 47.0 KB | 15.0% | 0.0% | 8.2 KB | 1.5 ms | — | 9.3 ms | 3.5 ms |
| Scoped Dynamic | ↳ Static | 47.0 KB | 15.0% | 0.0% | 8.2 KB | 1.5 ms | — | 9.3 ms | 3.5 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 47.2 KB | 0.0% | 0.0% |
| `/en/about` | 46.7 KB | 0.0% | 0.0% |
| `/en/blog` | 46.6 KB | 0.0% | 0.0% |
| `/en/careers` | 47.2 KB | 0.0% | 0.0% |
| `/en/contact` | 46.9 KB | 0.0% | 0.0% |
| `/en/faq` | 46.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 47.0 KB | 0.0% | 0.0% |
| `/en/products` | 46.9 KB | 0.0% | 0.0% |
| `/en/settings` | 48.3 KB | 0.0% | 0.0% |
| `/en/team` | 47.0 KB | 100.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 47.2 KB | 0.0% | 0.0% |
| `/fr/about` | 46.7 KB | 100.0% | 0.0% |
| `/fr/blog` | 46.6 KB | 100.0% | 0.0% |
| `/fr/careers` | 47.2 KB | 0.0% | 0.0% |
| `/fr/contact` | 46.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 46.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 47.0 KB | 0.0% | 0.0% |
| `/fr/products` | 46.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 48.3 KB | 0.0% | 0.0% |
| `/fr/team` | 47.0 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-compat-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.7 ms | 1.1 ms | 3.5 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.1 ms | 2.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.5 ms | 3.6 ms | 1.9 ms |
| `fr` | 9.1 ms | 3.5 ms | 1.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 47.2 KB | 0.0% | 0.0% |
| `/en/about` | 46.7 KB | 0.0% | 0.0% |
| `/en/blog` | 46.6 KB | 0.0% | 0.0% |
| `/en/careers` | 47.2 KB | 0.0% | 0.0% |
| `/en/contact` | 46.9 KB | 0.0% | 0.0% |
| `/en/faq` | 46.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 47.0 KB | 0.0% | 0.0% |
| `/en/products` | 46.9 KB | 0.0% | 0.0% |
| `/en/settings` | 48.3 KB | 0.0% | 0.0% |
| `/en/team` | 47.0 KB | 100.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 47.2 KB | 0.0% | 0.0% |
| `/fr/about` | 46.7 KB | 100.0% | 0.0% |
| `/fr/blog` | 46.6 KB | 100.0% | 0.0% |
| `/fr/careers` | 47.2 KB | 0.0% | 0.0% |
| `/fr/contact` | 46.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 46.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 47.0 KB | 0.0% | 0.0% |
| `/fr/products` | 46.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 48.3 KB | 0.0% | 0.0% |
| `/fr/team` | 47.0 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-compat-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.7 ms | 1.1 ms | 3.5 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.1 ms | 2.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.5 ms | 3.6 ms | 1.9 ms |
| `fr` | 9.1 ms | 3.5 ms | 1.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 47.2 KB | 0.0% | 0.0% |
| `/en/about` | 46.7 KB | 0.0% | 0.0% |
| `/en/blog` | 46.6 KB | 0.0% | 0.0% |
| `/en/careers` | 47.2 KB | 0.0% | 0.0% |
| `/en/contact` | 46.9 KB | 0.0% | 0.0% |
| `/en/faq` | 46.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 47.0 KB | 0.0% | 0.0% |
| `/en/products` | 46.9 KB | 0.0% | 0.0% |
| `/en/settings` | 48.3 KB | 0.0% | 0.0% |
| `/en/team` | 47.0 KB | 100.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 47.2 KB | 0.0% | 0.0% |
| `/fr/about` | 46.7 KB | 100.0% | 0.0% |
| `/fr/blog` | 46.6 KB | 100.0% | 0.0% |
| `/fr/careers` | 47.2 KB | 0.0% | 0.0% |
| `/fr/contact` | 46.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 46.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 47.0 KB | 0.0% | 0.0% |
| `/fr/products` | 46.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 48.3 KB | 0.0% | 0.0% |
| `/fr/team` | 47.0 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-compat-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.7 ms | 1.1 ms | 3.5 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.1 ms | 2.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.5 ms | 3.6 ms | 1.9 ms |
| `fr` | 9.1 ms | 3.5 ms | 1.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 47.2 KB | 0.0% | 0.0% |
| `/en/about` | 46.7 KB | 0.0% | 0.0% |
| `/en/blog` | 46.6 KB | 0.0% | 0.0% |
| `/en/careers` | 47.2 KB | 0.0% | 0.0% |
| `/en/contact` | 46.9 KB | 0.0% | 0.0% |
| `/en/faq` | 46.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 47.0 KB | 0.0% | 0.0% |
| `/en/products` | 46.9 KB | 0.0% | 0.0% |
| `/en/settings` | 48.3 KB | 0.0% | 0.0% |
| `/en/team` | 47.0 KB | 100.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 47.2 KB | 0.0% | 0.0% |
| `/fr/about` | 46.7 KB | 100.0% | 0.0% |
| `/fr/blog` | 46.6 KB | 100.0% | 0.0% |
| `/fr/careers` | 47.2 KB | 0.0% | 0.0% |
| `/fr/contact` | 46.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 46.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 47.0 KB | 0.0% | 0.0% |
| `/fr/products` | 46.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 48.3 KB | 0.0% | 0.0% |
| `/fr/team` | 47.0 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-vue-intlayer-compat-vue-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.7 ms | 1.1 ms | 3.5 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.1 ms | 2.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.5 ms | 3.6 ms | 1.9 ms |
| `fr` | 9.1 ms | 3.5 ms | 1.8 ms |

</details>

---

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 41.3 KB | 0.0% | 35.0% | 0.9 KB | 1.8 ms | — | 10.8 ms | 3.6 ms |
| Dynamic | ✅ | 41.3 KB | 0.0% | 35.0% | 0.9 KB | 1.8 ms | — | 10.8 ms | 3.6 ms |
| Scoped Static | ✅ | 41.3 KB | 0.0% | 35.0% | 0.9 KB | 1.8 ms | — | 10.8 ms | 3.6 ms |
| Scoped Dynamic | ✅ | 41.3 KB | 0.0% | 35.0% | 0.9 KB | 1.8 ms | — | 10.8 ms | 3.6 ms |

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
| 3.8.2 | 29.5 KB | 98.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 171.8 KB | 50.0% | 90.0% | 216.9 KB | 2.7 ms | — | 33.9 ms | 24.4 ms |
| Dynamic | ↳ Static | 171.8 KB | 50.0% | 90.0% | 216.9 KB | 2.7 ms | — | 33.9 ms | 24.4 ms |
| Scoped Static | ↳ Static | 171.8 KB | 50.0% | 90.0% | 216.9 KB | 2.7 ms | — | 33.9 ms | 24.4 ms |
| Scoped Dynamic | ↳ Static | 171.8 KB | 50.0% | 90.0% | 216.9 KB | 2.7 ms | — | 33.9 ms | 24.4 ms |

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
| 9.5.6 | 3.7 KB | 10.7 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 57.1 KB | 56.8% | 0.0% | 7.4 KB | 4.5 ms | — | 13.8 ms | 6.3 ms |
| Dynamic | 🔶 | 59.8 KB | 50.0% | 0.0% | 6.2 KB | 4.0 ms | — | 15.8 ms | 6.9 ms |
| Scoped Static | ↳ Static | 57.1 KB | 56.8% | 0.0% | 7.4 KB | 4.5 ms | — | 13.8 ms | 6.3 ms |
| Scoped Dynamic | ↳ Dynamic | 59.8 KB | 50.0% | 0.0% | 6.2 KB | 4.0 ms | — | 15.8 ms | 6.9 ms |

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

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 7.2.0 | 13.8 KB | 43.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 112.9 KB | 50.0% | 90.0% | 76.1 KB | 1.6 ms | — | 18.7 ms | 9.2 ms |
| Dynamic | 🔶 | 58.8 KB | 0.0% | 0.0% | 21.2 KB | 1.7 ms | — | 11.3 ms | 10.8 ms |
| Scoped Static | ↳ Static | 112.9 KB | 50.0% | 90.0% | 76.1 KB | 1.6 ms | — | 18.7 ms | 9.2 ms |
| Scoped Dynamic | ↳ Dynamic | 58.8 KB | 0.0% | 0.0% | 21.2 KB | 1.7 ms | — | 11.3 ms | 10.8 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 113.0 KB | 51.4% | 0.0% |
| `/en/about` | 112.6 KB | 51.4% | 100.0% |
| `/en/blog` | 112.5 KB | 51.4% | 100.0% |
| `/en/careers` | 113.1 KB | 51.4% | 100.0% |
| `/en/contact` | 112.8 KB | 51.4% | 100.0% |
| `/en/faq` | 112.3 KB | 51.4% | 100.0% |
| `/en/pricing` | 112.8 KB | 51.4% | 100.0% |
| `/en/products` | 112.8 KB | 51.4% | 100.0% |
| `/en/settings` | 114.2 KB | 51.4% | 100.0% |
| `/en/team` | 112.8 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 113.0 KB | 48.6% | 0.0% |
| `/fr/about` | 112.6 KB | 48.6% | 100.0% |
| `/fr/blog` | 112.5 KB | 48.6% | 100.0% |
| `/fr/careers` | 113.1 KB | 48.6% | 100.0% |
| `/fr/contact` | 112.8 KB | 48.6% | 100.0% |
| `/fr/faq` | 112.3 KB | 48.6% | 100.0% |
| `/fr/pricing` | 112.8 KB | 48.6% | 100.0% |
| `/fr/products` | 112.8 KB | 48.6% | 100.0% |
| `/fr/settings` | 114.2 KB | 48.6% | 100.0% |
| `/fr/team` | 112.8 KB | 48.6% | 100.0% |

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
| `/en/` | 59.0 KB | 0.0% | 0.0% |
| `/en/about` | 58.5 KB | 0.0% | 0.0% |
| `/en/blog` | 58.5 KB | 0.0% | 0.0% |
| `/en/careers` | 59.0 KB | 0.0% | 0.0% |
| `/en/contact` | 58.8 KB | 0.0% | 0.0% |
| `/en/faq` | 58.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 58.8 KB | 0.0% | 0.0% |
| `/en/products` | 58.8 KB | 0.0% | 0.0% |
| `/en/settings` | 60.2 KB | 0.0% | 0.0% |
| `/en/team` | 58.8 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 58.9 KB | 0.0% | 0.0% |
| `/fr/about` | 58.5 KB | 0.0% | 0.0% |
| `/fr/blog` | 58.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 59.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 58.7 KB | 0.0% | 0.0% |
| `/fr/faq` | 58.2 KB | 0.0% | 0.0% |
| `/fr/pricing` | 58.7 KB | 0.0% | 0.0% |
| `/fr/products` | 58.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 60.1 KB | 0.0% | 0.0% |
| `/fr/team` | 58.7 KB | 0.0% | 0.0% |

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
| `/en/` | 113.0 KB | 51.4% | 0.0% |
| `/en/about` | 112.6 KB | 51.4% | 100.0% |
| `/en/blog` | 112.5 KB | 51.4% | 100.0% |
| `/en/careers` | 113.1 KB | 51.4% | 100.0% |
| `/en/contact` | 112.8 KB | 51.4% | 100.0% |
| `/en/faq` | 112.3 KB | 51.4% | 100.0% |
| `/en/pricing` | 112.8 KB | 51.4% | 100.0% |
| `/en/products` | 112.8 KB | 51.4% | 100.0% |
| `/en/settings` | 114.2 KB | 51.4% | 100.0% |
| `/en/team` | 112.8 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 113.0 KB | 48.6% | 0.0% |
| `/fr/about` | 112.6 KB | 48.6% | 100.0% |
| `/fr/blog` | 112.5 KB | 48.6% | 100.0% |
| `/fr/careers` | 113.1 KB | 48.6% | 100.0% |
| `/fr/contact` | 112.8 KB | 48.6% | 100.0% |
| `/fr/faq` | 112.3 KB | 48.6% | 100.0% |
| `/fr/pricing` | 112.8 KB | 48.6% | 100.0% |
| `/fr/products` | 112.8 KB | 48.6% | 100.0% |
| `/fr/settings` | 114.2 KB | 48.6% | 100.0% |
| `/fr/team` | 112.8 KB | 48.6% | 100.0% |

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
| `/en/` | 59.0 KB | 0.0% | 0.0% |
| `/en/about` | 58.5 KB | 0.0% | 0.0% |
| `/en/blog` | 58.5 KB | 0.0% | 0.0% |
| `/en/careers` | 59.0 KB | 0.0% | 0.0% |
| `/en/contact` | 58.8 KB | 0.0% | 0.0% |
| `/en/faq` | 58.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 58.8 KB | 0.0% | 0.0% |
| `/en/products` | 58.8 KB | 0.0% | 0.0% |
| `/en/settings` | 60.2 KB | 0.0% | 0.0% |
| `/en/team` | 58.8 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 58.9 KB | 0.0% | 0.0% |
| `/fr/about` | 58.5 KB | 0.0% | 0.0% |
| `/fr/blog` | 58.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 59.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 58.7 KB | 0.0% | 0.0% |
| `/fr/faq` | 58.2 KB | 0.0% | 0.0% |
| `/fr/pricing` | 58.7 KB | 0.0% | 0.0% |
| `/fr/products` | 58.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 60.1 KB | 0.0% | 0.0% |
| `/fr/team` | 58.7 KB | 0.0% | 0.0% |

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
| Static | ✅ | 134.9 KB | 50.0% | 90.0% | 104.8 KB | 2.8 ms | — | 13.6 ms | 6.2 ms |
| Dynamic | ↳ Static | 134.9 KB | 50.0% | 90.0% | 104.8 KB | 2.8 ms | — | 13.6 ms | 6.2 ms |
| Scoped Static | ↳ Static | 134.9 KB | 50.0% | 90.0% | 104.8 KB | 2.8 ms | — | 13.6 ms | 6.2 ms |
| Scoped Dynamic | ↳ Static | 134.9 KB | 50.0% | 90.0% | 104.8 KB | 2.8 ms | — | 13.6 ms | 6.2 ms |

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
| Total libraries | 6 |
| Total app entries | 8 |
| With lib size data | 6 |
| With page bundle data | 24 |
| With component data | 24 |
| With reactivity data | 24 |
| With rendering data | 24 |
