# Vite + Solid — i18n Benchmark Results

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
- [i18next](#i18next)
- [intlayer](#intlayer)
- [paraglide-js](#paraglide-js)
- [primitives-i18n](#primitives-i18n)

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 21.9 KB | 0.0% | 0.0% | 0.8 KB | 3.0 ms | — | 14.8 ms | 6.6 ms |
| Dynamic | ✅ | 21.9 KB | 0.0% | 0.0% | 0.8 KB | 3.0 ms | — | 14.8 ms | 6.6 ms |
| Scoped Static | ✅ | 21.9 KB | 0.0% | 0.0% | 0.8 KB | 3.0 ms | — | 14.8 ms | 6.6 ms |
| Scoped Dynamic | ✅ | 21.9 KB | 0.0% | 0.0% | 0.8 KB | 3.0 ms | — | 14.8 ms | 6.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 23.1 KB | 0.0% | 0.0% |
| `/en/about` | 22.0 KB | 0.0% | 0.0% |
| `/en/blog` | 21.7 KB | 0.0% | 0.0% |
| `/en/careers` | 22.0 KB | 0.0% | 0.0% |
| `/en/contact` | 21.3 KB | 0.0% | 0.0% |
| `/en/faq` | 21.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 21.6 KB | 0.0% | 0.0% |
| `/en/products` | 21.5 KB | 0.0% | 0.0% |
| `/en/settings` | 22.5 KB | 0.0% | 0.0% |
| `/en/team` | 21.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 23.1 KB | 0.0% | 0.0% |
| `/fr/about` | 22.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 21.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 22.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 21.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 21.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 21.6 KB | 0.0% | 0.0% |
| `/fr/products` | 21.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 22.5 KB | 0.0% | 0.0% |
| `/fr/team` | 21.6 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.0 ms | 1.6 ms | 5.3 ms | 0.0 ms |
| `fr` | 2.9 ms | 1.9 ms | 3.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.9 ms | 6.6 ms | 2.5 ms |
| `fr` | 14.8 ms | 6.6 ms | 2.4 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 23.1 KB | 0.0% | 0.0% |
| `/en/about` | 22.0 KB | 0.0% | 0.0% |
| `/en/blog` | 21.7 KB | 0.0% | 0.0% |
| `/en/careers` | 22.0 KB | 0.0% | 0.0% |
| `/en/contact` | 21.3 KB | 0.0% | 0.0% |
| `/en/faq` | 21.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 21.6 KB | 0.0% | 0.0% |
| `/en/products` | 21.5 KB | 0.0% | 0.0% |
| `/en/settings` | 22.5 KB | 0.0% | 0.0% |
| `/en/team` | 21.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 23.1 KB | 0.0% | 0.0% |
| `/fr/about` | 22.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 21.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 22.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 21.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 21.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 21.6 KB | 0.0% | 0.0% |
| `/fr/products` | 21.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 22.5 KB | 0.0% | 0.0% |
| `/fr/team` | 21.6 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.0 ms | 1.6 ms | 5.3 ms | 0.0 ms |
| `fr` | 2.9 ms | 1.9 ms | 3.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.9 ms | 6.6 ms | 2.5 ms |
| `fr` | 14.8 ms | 6.6 ms | 2.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 23.1 KB | 0.0% | 0.0% |
| `/en/about` | 22.0 KB | 0.0% | 0.0% |
| `/en/blog` | 21.7 KB | 0.0% | 0.0% |
| `/en/careers` | 22.0 KB | 0.0% | 0.0% |
| `/en/contact` | 21.3 KB | 0.0% | 0.0% |
| `/en/faq` | 21.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 21.6 KB | 0.0% | 0.0% |
| `/en/products` | 21.5 KB | 0.0% | 0.0% |
| `/en/settings` | 22.5 KB | 0.0% | 0.0% |
| `/en/team` | 21.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 23.1 KB | 0.0% | 0.0% |
| `/fr/about` | 22.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 21.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 22.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 21.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 21.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 21.6 KB | 0.0% | 0.0% |
| `/fr/products` | 21.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 22.5 KB | 0.0% | 0.0% |
| `/fr/team` | 21.6 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.0 ms | 1.6 ms | 5.3 ms | 0.0 ms |
| `fr` | 2.9 ms | 1.9 ms | 3.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.9 ms | 6.6 ms | 2.5 ms |
| `fr` | 14.8 ms | 6.6 ms | 2.4 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 23.1 KB | 0.0% | 0.0% |
| `/en/about` | 22.0 KB | 0.0% | 0.0% |
| `/en/blog` | 21.7 KB | 0.0% | 0.0% |
| `/en/careers` | 22.0 KB | 0.0% | 0.0% |
| `/en/contact` | 21.3 KB | 0.0% | 0.0% |
| `/en/faq` | 21.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 21.6 KB | 0.0% | 0.0% |
| `/en/products` | 21.5 KB | 0.0% | 0.0% |
| `/en/settings` | 22.5 KB | 0.0% | 0.0% |
| `/en/team` | 21.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 23.1 KB | 0.0% | 0.0% |
| `/fr/about` | 22.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 21.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 22.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 21.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 21.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 21.6 KB | 0.0% | 0.0% |
| `/fr/products` | 21.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 22.5 KB | 0.0% | 0.0% |
| `/fr/team` | 21.6 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.0 ms | 1.6 ms | 5.3 ms | 0.0 ms |
| `fr` | 2.9 ms | 1.9 ms | 3.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.9 ms | 6.6 ms | 2.5 ms |
| `fr` | 14.8 ms | 6.6 ms | 2.4 ms |

</details>

---

## i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 26.0.8 | 14.6 KB | 51.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 93.7 KB | 62.8% | 90.0% | 21.3 KB | 0.6 ms | — | 11.6 ms | 4.5 ms |
| Dynamic | ✅ | 93.7 KB | 62.8% | 90.0% | 21.3 KB | 0.6 ms | — | 11.6 ms | 4.5 ms |
| Scoped Static | ✅ | 93.7 KB | 62.8% | 90.0% | 21.3 KB | 0.6 ms | — | 11.6 ms | 4.5 ms |
| Scoped Dynamic | ✅ | 93.7 KB | 62.8% | 90.0% | 21.3 KB | 0.6 ms | — | 11.6 ms | 4.5 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 94.5 KB | 76.1% | 48.4% |
| `/en/about` | 93.4 KB | 76.1% | 100.0% |
| `/en/blog` | 93.3 KB | 76.1% | 100.0% |
| `/en/careers` | 93.9 KB | 76.1% | 90.3% |
| `/en/contact` | 93.7 KB | 76.1% | 100.0% |
| `/en/faq` | 93.2 KB | 76.1% | 100.0% |
| `/en/pricing` | 93.7 KB | 76.1% | 100.0% |
| `/en/products` | 93.4 KB | 76.1% | 74.2% |
| `/en/settings` | 94.9 KB | 76.1% | 87.1% |
| `/en/team` | 93.3 KB | 76.1% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 94.5 KB | 49.5% | 81.1% |
| `/fr/about` | 93.4 KB | 49.5% | 84.4% |
| `/fr/blog` | 93.3 KB | 49.5% | 100.0% |
| `/fr/careers` | 93.9 KB | 49.5% | 85.6% |
| `/fr/contact` | 93.7 KB | 49.5% | 98.9% |
| `/fr/faq` | 93.2 KB | 49.5% | 88.9% |
| `/fr/pricing` | 93.7 KB | 49.5% | 90.0% |
| `/fr/products` | 93.4 KB | 49.5% | 88.9% |
| `/fr/settings` | 94.9 KB | 49.5% | 93.3% |
| `/fr/team` | 93.3 KB | 49.5% | 88.9% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-i18next-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.3 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.8 ms | 4.4 ms | 2.5 ms |
| `fr` | 11.3 ms | 4.7 ms | 2.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 94.5 KB | 76.1% | 48.4% |
| `/en/about` | 93.4 KB | 76.1% | 100.0% |
| `/en/blog` | 93.3 KB | 76.1% | 100.0% |
| `/en/careers` | 93.9 KB | 76.1% | 90.3% |
| `/en/contact` | 93.7 KB | 76.1% | 100.0% |
| `/en/faq` | 93.2 KB | 76.1% | 100.0% |
| `/en/pricing` | 93.7 KB | 76.1% | 100.0% |
| `/en/products` | 93.4 KB | 76.1% | 74.2% |
| `/en/settings` | 94.9 KB | 76.1% | 87.1% |
| `/en/team` | 93.3 KB | 76.1% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 94.5 KB | 49.5% | 81.1% |
| `/fr/about` | 93.4 KB | 49.5% | 84.4% |
| `/fr/blog` | 93.3 KB | 49.5% | 100.0% |
| `/fr/careers` | 93.9 KB | 49.5% | 85.6% |
| `/fr/contact` | 93.7 KB | 49.5% | 98.9% |
| `/fr/faq` | 93.2 KB | 49.5% | 88.9% |
| `/fr/pricing` | 93.7 KB | 49.5% | 90.0% |
| `/fr/products` | 93.4 KB | 49.5% | 88.9% |
| `/fr/settings` | 94.9 KB | 49.5% | 93.3% |
| `/fr/team` | 93.3 KB | 49.5% | 88.9% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-i18next-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.3 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.8 ms | 4.4 ms | 2.5 ms |
| `fr` | 11.3 ms | 4.7 ms | 2.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 94.5 KB | 76.1% | 48.4% |
| `/en/about` | 93.4 KB | 76.1% | 100.0% |
| `/en/blog` | 93.3 KB | 76.1% | 100.0% |
| `/en/careers` | 93.9 KB | 76.1% | 90.3% |
| `/en/contact` | 93.7 KB | 76.1% | 100.0% |
| `/en/faq` | 93.2 KB | 76.1% | 100.0% |
| `/en/pricing` | 93.7 KB | 76.1% | 100.0% |
| `/en/products` | 93.4 KB | 76.1% | 74.2% |
| `/en/settings` | 94.9 KB | 76.1% | 87.1% |
| `/en/team` | 93.3 KB | 76.1% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 94.5 KB | 49.5% | 81.1% |
| `/fr/about` | 93.4 KB | 49.5% | 84.4% |
| `/fr/blog` | 93.3 KB | 49.5% | 100.0% |
| `/fr/careers` | 93.9 KB | 49.5% | 85.6% |
| `/fr/contact` | 93.7 KB | 49.5% | 98.9% |
| `/fr/faq` | 93.2 KB | 49.5% | 88.9% |
| `/fr/pricing` | 93.7 KB | 49.5% | 90.0% |
| `/fr/products` | 93.4 KB | 49.5% | 88.9% |
| `/fr/settings` | 94.9 KB | 49.5% | 93.3% |
| `/fr/team` | 93.3 KB | 49.5% | 88.9% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-i18next-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.3 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.8 ms | 4.4 ms | 2.5 ms |
| `fr` | 11.3 ms | 4.7 ms | 2.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 94.5 KB | 76.1% | 48.4% |
| `/en/about` | 93.4 KB | 76.1% | 100.0% |
| `/en/blog` | 93.3 KB | 76.1% | 100.0% |
| `/en/careers` | 93.9 KB | 76.1% | 90.3% |
| `/en/contact` | 93.7 KB | 76.1% | 100.0% |
| `/en/faq` | 93.2 KB | 76.1% | 100.0% |
| `/en/pricing` | 93.7 KB | 76.1% | 100.0% |
| `/en/products` | 93.4 KB | 76.1% | 74.2% |
| `/en/settings` | 94.9 KB | 76.1% | 87.1% |
| `/en/team` | 93.3 KB | 76.1% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 94.5 KB | 49.5% | 81.1% |
| `/fr/about` | 93.4 KB | 49.5% | 84.4% |
| `/fr/blog` | 93.3 KB | 49.5% | 100.0% |
| `/fr/careers` | 93.9 KB | 49.5% | 85.6% |
| `/fr/contact` | 93.7 KB | 49.5% | 98.9% |
| `/fr/faq` | 93.2 KB | 49.5% | 88.9% |
| `/fr/pricing` | 93.7 KB | 49.5% | 90.0% |
| `/fr/products` | 93.4 KB | 49.5% | 88.9% |
| `/fr/settings` | 94.9 KB | 49.5% | 93.3% |
| `/fr/team` | 93.3 KB | 49.5% | 88.9% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-i18next-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.3 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.8 ms | 4.4 ms | 2.5 ms |
| `fr` | 11.3 ms | 4.7 ms | 2.6 ms |

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.11 | 23.4 KB | 82.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 49.5 KB | 62.6% | 0.0% | 24.0 KB | 1.2 ms | — | 14.7 ms | 7.1 ms |
| Dynamic | ✅ | 49.5 KB | 62.6% | 0.0% | 24.0 KB | 1.2 ms | — | 14.7 ms | 7.1 ms |
| Scoped Static | ✅ | 49.5 KB | 62.6% | 0.0% | 24.0 KB | 1.2 ms | — | 14.7 ms | 7.1 ms |
| Scoped Dynamic | ✅ | 49.5 KB | 62.6% | 0.0% | 24.0 KB | 1.2 ms | — | 14.7 ms | 7.1 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 61.3 KB | 50.0% | 0.0% |
| `/en/about` | 53.9 KB | 88.9% | 0.0% |
| `/en/blog` | 48.4 KB | 80.0% | 0.0% |
| `/en/careers` | 49.0 KB | 83.3% | 0.0% |
| `/en/contact` | 43.9 KB | 62.5% | 0.0% |
| `/en/faq` | 52.0 KB | 72.2% | 0.0% |
| `/en/pricing` | 45.3 KB | 81.3% | 0.0% |
| `/en/products` | 46.6 KB | 81.3% | 0.0% |
| `/en/settings` | 47.6 KB | 76.9% | 0.0% |
| `/en/team` | 47.0 KB | 81.3% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 61.3 KB | 50.0% | 0.0% |
| `/fr/about` | 53.9 KB | 42.9% | 0.0% |
| `/fr/blog` | 48.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 49.0 KB | 82.4% | 0.0% |
| `/fr/contact` | 43.9 KB | 44.4% | 0.0% |
| `/fr/faq` | 52.0 KB | 50.0% | 0.0% |
| `/fr/pricing` | 45.3 KB | 35.0% | 0.0% |
| `/fr/products` | 46.6 KB | 45.5% | 0.0% |
| `/fr/settings` | 47.6 KB | 44.4% | 0.0% |
| `/fr/team` | 47.0 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.4 ms | 1.0 ms | 2.5 ms | 0.0 ms |
| `fr` | 1.0 ms | 0.9 ms | 1.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.6 ms | 8.4 ms | 3.2 ms |
| `fr` | 12.8 ms | 5.9 ms | 2.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 61.3 KB | 50.0% | 0.0% |
| `/en/about` | 53.9 KB | 88.9% | 0.0% |
| `/en/blog` | 48.4 KB | 80.0% | 0.0% |
| `/en/careers` | 49.0 KB | 83.3% | 0.0% |
| `/en/contact` | 43.9 KB | 62.5% | 0.0% |
| `/en/faq` | 52.0 KB | 72.2% | 0.0% |
| `/en/pricing` | 45.3 KB | 81.3% | 0.0% |
| `/en/products` | 46.6 KB | 81.3% | 0.0% |
| `/en/settings` | 47.6 KB | 76.9% | 0.0% |
| `/en/team` | 47.0 KB | 81.3% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 61.3 KB | 50.0% | 0.0% |
| `/fr/about` | 53.9 KB | 42.9% | 0.0% |
| `/fr/blog` | 48.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 49.0 KB | 82.4% | 0.0% |
| `/fr/contact` | 43.9 KB | 44.4% | 0.0% |
| `/fr/faq` | 52.0 KB | 50.0% | 0.0% |
| `/fr/pricing` | 45.3 KB | 35.0% | 0.0% |
| `/fr/products` | 46.6 KB | 45.5% | 0.0% |
| `/fr/settings` | 47.6 KB | 44.4% | 0.0% |
| `/fr/team` | 47.0 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.4 ms | 1.0 ms | 2.5 ms | 0.0 ms |
| `fr` | 1.0 ms | 0.9 ms | 1.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.6 ms | 8.4 ms | 3.2 ms |
| `fr` | 12.8 ms | 5.9 ms | 2.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 61.3 KB | 50.0% | 0.0% |
| `/en/about` | 53.9 KB | 88.9% | 0.0% |
| `/en/blog` | 48.4 KB | 80.0% | 0.0% |
| `/en/careers` | 49.0 KB | 83.3% | 0.0% |
| `/en/contact` | 43.9 KB | 62.5% | 0.0% |
| `/en/faq` | 52.0 KB | 72.2% | 0.0% |
| `/en/pricing` | 45.3 KB | 81.3% | 0.0% |
| `/en/products` | 46.6 KB | 81.3% | 0.0% |
| `/en/settings` | 47.6 KB | 76.9% | 0.0% |
| `/en/team` | 47.0 KB | 81.3% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 61.3 KB | 50.0% | 0.0% |
| `/fr/about` | 53.9 KB | 42.9% | 0.0% |
| `/fr/blog` | 48.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 49.0 KB | 82.4% | 0.0% |
| `/fr/contact` | 43.9 KB | 44.4% | 0.0% |
| `/fr/faq` | 52.0 KB | 50.0% | 0.0% |
| `/fr/pricing` | 45.3 KB | 35.0% | 0.0% |
| `/fr/products` | 46.6 KB | 45.5% | 0.0% |
| `/fr/settings` | 47.6 KB | 44.4% | 0.0% |
| `/fr/team` | 47.0 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.4 ms | 1.0 ms | 2.5 ms | 0.0 ms |
| `fr` | 1.0 ms | 0.9 ms | 1.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.6 ms | 8.4 ms | 3.2 ms |
| `fr` | 12.8 ms | 5.9 ms | 2.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 61.3 KB | 50.0% | 0.0% |
| `/en/about` | 53.9 KB | 88.9% | 0.0% |
| `/en/blog` | 48.4 KB | 80.0% | 0.0% |
| `/en/careers` | 49.0 KB | 83.3% | 0.0% |
| `/en/contact` | 43.9 KB | 62.5% | 0.0% |
| `/en/faq` | 52.0 KB | 72.2% | 0.0% |
| `/en/pricing` | 45.3 KB | 81.3% | 0.0% |
| `/en/products` | 46.6 KB | 81.3% | 0.0% |
| `/en/settings` | 47.6 KB | 76.9% | 0.0% |
| `/en/team` | 47.0 KB | 81.3% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 61.3 KB | 50.0% | 0.0% |
| `/fr/about` | 53.9 KB | 42.9% | 0.0% |
| `/fr/blog` | 48.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 49.0 KB | 82.4% | 0.0% |
| `/fr/contact` | 43.9 KB | 44.4% | 0.0% |
| `/fr/faq` | 52.0 KB | 50.0% | 0.0% |
| `/fr/pricing` | 45.3 KB | 35.0% | 0.0% |
| `/fr/products` | 46.6 KB | 45.5% | 0.0% |
| `/fr/settings` | 47.6 KB | 44.4% | 0.0% |
| `/fr/team` | 47.0 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.4 ms | 1.0 ms | 2.5 ms | 0.0 ms |
| `fr` | 1.0 ms | 0.9 ms | 1.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.6 ms | 8.4 ms | 3.2 ms |
| `fr` | 12.8 ms | 5.9 ms | 2.9 ms |

</details>

---

## paraglide-js

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.17.0 | 1.4 KB | 3.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 20.9 KB | 0.0% | 0.0% | 0.7 KB | — | — | 8.0 ms | — |
| Dynamic | 🔶 | 20.9 KB | 0.0% | 0.0% | 0.7 KB | — | — | 8.0 ms | — |
| Scoped Static | 🔶 | 20.9 KB | 0.0% | 0.0% | 0.7 KB | — | — | 8.0 ms | — |
| Scoped Dynamic | 🔶 | 20.9 KB | 0.0% | 0.0% | 0.7 KB | — | — | 8.0 ms | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 20.9 KB | 0.0% | 0.0% |
| `/en/about` | 20.9 KB | 0.0% | 0.0% |
| `/en/blog` | 20.9 KB | 0.0% | 0.0% |
| `/en/careers` | 20.9 KB | 0.0% | 0.0% |
| `/en/contact` | 20.9 KB | 0.0% | 0.0% |
| `/en/faq` | 20.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 20.9 KB | 0.0% | 0.0% |
| `/en/products` | 20.9 KB | 0.0% | 0.0% |
| `/en/settings` | 20.9 KB | 0.0% | 0.0% |
| `/en/team` | 20.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 20.9 KB | 0.0% | 0.0% |
| `/fr/about` | 20.9 KB | 0.0% | 0.0% |
| `/fr/blog` | 20.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 20.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 20.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 20.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 20.9 KB | 0.0% | 0.0% |
| `/fr/products` | 20.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 20.9 KB | 0.0% | 0.0% |
| `/fr/team` | 20.9 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 7.7 ms | — | — |
| `fr` | 8.2 ms | — | — |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 20.9 KB | 0.0% | 0.0% |
| `/en/about` | 20.9 KB | 0.0% | 0.0% |
| `/en/blog` | 20.9 KB | 0.0% | 0.0% |
| `/en/careers` | 20.9 KB | 0.0% | 0.0% |
| `/en/contact` | 20.9 KB | 0.0% | 0.0% |
| `/en/faq` | 20.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 20.9 KB | 0.0% | 0.0% |
| `/en/products` | 20.9 KB | 0.0% | 0.0% |
| `/en/settings` | 20.9 KB | 0.0% | 0.0% |
| `/en/team` | 20.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 20.9 KB | 0.0% | 0.0% |
| `/fr/about` | 20.9 KB | 0.0% | 0.0% |
| `/fr/blog` | 20.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 20.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 20.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 20.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 20.9 KB | 0.0% | 0.0% |
| `/fr/products` | 20.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 20.9 KB | 0.0% | 0.0% |
| `/fr/team` | 20.9 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 7.7 ms | — | — |
| `fr` | 8.2 ms | — | — |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 20.9 KB | 0.0% | 0.0% |
| `/en/about` | 20.9 KB | 0.0% | 0.0% |
| `/en/blog` | 20.9 KB | 0.0% | 0.0% |
| `/en/careers` | 20.9 KB | 0.0% | 0.0% |
| `/en/contact` | 20.9 KB | 0.0% | 0.0% |
| `/en/faq` | 20.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 20.9 KB | 0.0% | 0.0% |
| `/en/products` | 20.9 KB | 0.0% | 0.0% |
| `/en/settings` | 20.9 KB | 0.0% | 0.0% |
| `/en/team` | 20.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 20.9 KB | 0.0% | 0.0% |
| `/fr/about` | 20.9 KB | 0.0% | 0.0% |
| `/fr/blog` | 20.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 20.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 20.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 20.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 20.9 KB | 0.0% | 0.0% |
| `/fr/products` | 20.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 20.9 KB | 0.0% | 0.0% |
| `/fr/team` | 20.9 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 7.7 ms | — | — |
| `fr` | 8.2 ms | — | — |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 20.9 KB | 0.0% | 0.0% |
| `/en/about` | 20.9 KB | 0.0% | 0.0% |
| `/en/blog` | 20.9 KB | 0.0% | 0.0% |
| `/en/careers` | 20.9 KB | 0.0% | 0.0% |
| `/en/contact` | 20.9 KB | 0.0% | 0.0% |
| `/en/faq` | 20.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 20.9 KB | 0.0% | 0.0% |
| `/en/products` | 20.9 KB | 0.0% | 0.0% |
| `/en/settings` | 20.9 KB | 0.0% | 0.0% |
| `/en/team` | 20.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 20.9 KB | 0.0% | 0.0% |
| `/fr/about` | 20.9 KB | 0.0% | 0.0% |
| `/fr/blog` | 20.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 20.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 20.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 20.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 20.9 KB | 0.0% | 0.0% |
| `/fr/products` | 20.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 20.9 KB | 0.0% | 0.0% |
| `/fr/team` | 20.9 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 7.7 ms | — | — |
| `fr` | 8.2 ms | — | — |

</details>

---

## primitives-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.2.1 | 0.5 KB | 0.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 83.3 KB | 65.4% | 90.0% | 49.1 KB | 0.7 ms | — | 12.5 ms | 5.5 ms |
| Dynamic | ✅ | 83.3 KB | 65.4% | 90.0% | 49.1 KB | 0.7 ms | — | 12.5 ms | 5.5 ms |
| Scoped Static | ✅ | 83.3 KB | 65.4% | 90.0% | 49.1 KB | 0.7 ms | — | 12.5 ms | 5.5 ms |
| Scoped Dynamic | ✅ | 83.3 KB | 65.4% | 90.0% | 49.1 KB | 0.7 ms | — | 12.5 ms | 5.5 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 84.0 KB | 85.2% | 5.9% |
| `/en/about` | 83.0 KB | 85.2% | 100.0% |
| `/en/blog` | 83.4 KB | 85.2% | 100.0% |
| `/en/careers` | 83.5 KB | 85.2% | 100.0% |
| `/en/contact` | 83.3 KB | 85.2% | 94.1% |
| `/en/faq` | 82.8 KB | 85.2% | 100.0% |
| `/en/pricing` | 83.2 KB | 85.2% | 100.0% |
| `/en/products` | 82.9 KB | 85.2% | 100.0% |
| `/en/settings` | 84.5 KB | 85.2% | 100.0% |
| `/en/team` | 82.8 KB | 85.2% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 84.0 KB | 45.5% | 83.3% |
| `/fr/about` | 83.0 KB | 45.5% | 86.3% |
| `/fr/blog` | 83.4 KB | 45.5% | 87.3% |
| `/fr/careers` | 83.5 KB | 45.5% | 88.2% |
| `/fr/contact` | 83.3 KB | 45.5% | 99.0% |
| `/fr/faq` | 82.8 KB | 45.5% | 90.2% |
| `/fr/pricing` | 83.2 KB | 45.5% | 91.2% |
| `/fr/products` | 82.9 KB | 45.5% | 90.2% |
| `/fr/settings` | 84.5 KB | 45.5% | 94.1% |
| `/fr/team` | 82.8 KB | 45.5% | 90.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-primitives-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.8 ms | 0.5 ms | 1.6 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.3 ms | 5.5 ms | 2.3 ms |
| `fr` | 11.7 ms | 5.4 ms | 2.3 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 84.0 KB | 85.2% | 5.9% |
| `/en/about` | 83.0 KB | 85.2% | 100.0% |
| `/en/blog` | 83.4 KB | 85.2% | 100.0% |
| `/en/careers` | 83.5 KB | 85.2% | 100.0% |
| `/en/contact` | 83.3 KB | 85.2% | 94.1% |
| `/en/faq` | 82.8 KB | 85.2% | 100.0% |
| `/en/pricing` | 83.2 KB | 85.2% | 100.0% |
| `/en/products` | 82.9 KB | 85.2% | 100.0% |
| `/en/settings` | 84.5 KB | 85.2% | 100.0% |
| `/en/team` | 82.8 KB | 85.2% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 84.0 KB | 45.5% | 83.3% |
| `/fr/about` | 83.0 KB | 45.5% | 86.3% |
| `/fr/blog` | 83.4 KB | 45.5% | 87.3% |
| `/fr/careers` | 83.5 KB | 45.5% | 88.2% |
| `/fr/contact` | 83.3 KB | 45.5% | 99.0% |
| `/fr/faq` | 82.8 KB | 45.5% | 90.2% |
| `/fr/pricing` | 83.2 KB | 45.5% | 91.2% |
| `/fr/products` | 82.9 KB | 45.5% | 90.2% |
| `/fr/settings` | 84.5 KB | 45.5% | 94.1% |
| `/fr/team` | 82.8 KB | 45.5% | 90.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-primitives-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.8 ms | 0.5 ms | 1.6 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.3 ms | 5.5 ms | 2.3 ms |
| `fr` | 11.7 ms | 5.4 ms | 2.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 84.0 KB | 85.2% | 5.9% |
| `/en/about` | 83.0 KB | 85.2% | 100.0% |
| `/en/blog` | 83.4 KB | 85.2% | 100.0% |
| `/en/careers` | 83.5 KB | 85.2% | 100.0% |
| `/en/contact` | 83.3 KB | 85.2% | 94.1% |
| `/en/faq` | 82.8 KB | 85.2% | 100.0% |
| `/en/pricing` | 83.2 KB | 85.2% | 100.0% |
| `/en/products` | 82.9 KB | 85.2% | 100.0% |
| `/en/settings` | 84.5 KB | 85.2% | 100.0% |
| `/en/team` | 82.8 KB | 85.2% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 84.0 KB | 45.5% | 83.3% |
| `/fr/about` | 83.0 KB | 45.5% | 86.3% |
| `/fr/blog` | 83.4 KB | 45.5% | 87.3% |
| `/fr/careers` | 83.5 KB | 45.5% | 88.2% |
| `/fr/contact` | 83.3 KB | 45.5% | 99.0% |
| `/fr/faq` | 82.8 KB | 45.5% | 90.2% |
| `/fr/pricing` | 83.2 KB | 45.5% | 91.2% |
| `/fr/products` | 82.9 KB | 45.5% | 90.2% |
| `/fr/settings` | 84.5 KB | 45.5% | 94.1% |
| `/fr/team` | 82.8 KB | 45.5% | 90.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-primitives-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.8 ms | 0.5 ms | 1.6 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.3 ms | 5.5 ms | 2.3 ms |
| `fr` | 11.7 ms | 5.4 ms | 2.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 84.0 KB | 85.2% | 5.9% |
| `/en/about` | 83.0 KB | 85.2% | 100.0% |
| `/en/blog` | 83.4 KB | 85.2% | 100.0% |
| `/en/careers` | 83.5 KB | 85.2% | 100.0% |
| `/en/contact` | 83.3 KB | 85.2% | 94.1% |
| `/en/faq` | 82.8 KB | 85.2% | 100.0% |
| `/en/pricing` | 83.2 KB | 85.2% | 100.0% |
| `/en/products` | 82.9 KB | 85.2% | 100.0% |
| `/en/settings` | 84.5 KB | 85.2% | 100.0% |
| `/en/team` | 82.8 KB | 85.2% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 84.0 KB | 45.5% | 83.3% |
| `/fr/about` | 83.0 KB | 45.5% | 86.3% |
| `/fr/blog` | 83.4 KB | 45.5% | 87.3% |
| `/fr/careers` | 83.5 KB | 45.5% | 88.2% |
| `/fr/contact` | 83.3 KB | 45.5% | 99.0% |
| `/fr/faq` | 82.8 KB | 45.5% | 90.2% |
| `/fr/pricing` | 83.2 KB | 45.5% | 91.2% |
| `/fr/products` | 82.9 KB | 45.5% | 90.2% |
| `/fr/settings` | 84.5 KB | 45.5% | 94.1% |
| `/fr/team` | 82.8 KB | 45.5% | 90.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-primitives-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.8 ms | 0.5 ms | 1.6 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.3 ms | 5.5 ms | 2.3 ms |
| `fr` | 11.7 ms | 5.4 ms | 2.3 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 5 |
| Total app entries | 5 |
| With lib size data | 5 |
| With page bundle data | 20 |
| With component data | 20 |
| With reactivity data | 16 |
| With rendering data | 20 |
