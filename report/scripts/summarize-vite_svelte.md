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
| Static | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.8 ms | — | 13.0 ms | 4.1 ms |
| Dynamic | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.8 ms | — | 13.0 ms | 4.1 ms |
| Scoped Static | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.8 ms | — | 13.0 ms | 4.1 ms |
| Scoped Dynamic | ✅ | 31.5 KB | 0.0% | 90.0% | 0.9 KB | 0.8 ms | — | 13.0 ms | 4.1 ms |

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
| `en` | 1.0 ms | 0.4 ms | 2.5 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.4 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.7 ms | 4.8 ms | 1.8 ms |
| `fr` | 11.3 ms | 3.3 ms | 1.7 ms |

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
| `en` | 1.0 ms | 0.4 ms | 2.5 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.4 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.7 ms | 4.8 ms | 1.8 ms |
| `fr` | 11.3 ms | 3.3 ms | 1.7 ms |

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
| `en` | 1.0 ms | 0.4 ms | 2.5 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.4 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.7 ms | 4.8 ms | 1.8 ms |
| `fr` | 11.3 ms | 3.3 ms | 1.7 ms |

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
| `en` | 1.0 ms | 0.4 ms | 2.5 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.4 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.7 ms | 4.8 ms | 1.8 ms |
| `fr` | 11.3 ms | 3.3 ms | 1.7 ms |

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.11 | 2.3 KB | 6.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 105.3 KB | 50.0% | 90.0% | 6.1 KB | 1.6 ms | — | 25.1 ms | 12.3 ms |
| Dynamic | ✅ | 105.3 KB | 50.0% | 90.0% | 6.1 KB | 1.6 ms | — | 25.1 ms | 12.3 ms |
| Scoped Static | ✅ | 105.3 KB | 50.0% | 90.0% | 6.1 KB | 1.6 ms | — | 25.1 ms | 12.3 ms |
| Scoped Dynamic | ✅ | 105.3 KB | 50.0% | 90.0% | 6.1 KB | 1.6 ms | — | 25.1 ms | 12.3 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 105.3 KB | 53.7% | 79.5% |
| `/en/about` | 105.3 KB | 53.7% | 87.2% |
| `/en/blog` | 105.3 KB | 53.7% | 83.3% |
| `/en/careers` | 105.3 KB | 53.7% | 85.9% |
| `/en/contact` | 105.3 KB | 53.7% | 98.7% |
| `/en/faq` | 105.3 KB | 53.7% | 87.2% |
| `/en/pricing` | 105.3 KB | 53.7% | 94.9% |
| `/en/products` | 105.3 KB | 53.7% | 89.7% |
| `/en/settings` | 105.3 KB | 53.7% | 93.6% |
| `/en/team` | 105.3 KB | 53.7% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 105.3 KB | 46.3% | 80.2% |
| `/fr/about` | 105.3 KB | 46.3% | 83.7% |
| `/fr/blog` | 105.3 KB | 46.3% | 84.9% |
| `/fr/careers` | 105.3 KB | 46.3% | 87.2% |
| `/fr/contact` | 105.3 KB | 46.3% | 97.7% |
| `/fr/faq` | 105.3 KB | 46.3% | 88.4% |
| `/fr/pricing` | 105.3 KB | 46.3% | 95.3% |
| `/fr/products` | 105.3 KB | 46.3% | 90.7% |
| `/fr/settings` | 105.3 KB | 46.3% | 91.9% |
| `/fr/team` | 105.3 KB | 46.3% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.8 ms | 1.2 ms | 3.7 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.3 ms | 1.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.7 ms | 5.0 ms | 2.8 ms |
| `fr` | 33.4 ms | 19.7 ms | 3.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 105.3 KB | 53.7% | 79.5% |
| `/en/about` | 105.3 KB | 53.7% | 87.2% |
| `/en/blog` | 105.3 KB | 53.7% | 83.3% |
| `/en/careers` | 105.3 KB | 53.7% | 85.9% |
| `/en/contact` | 105.3 KB | 53.7% | 98.7% |
| `/en/faq` | 105.3 KB | 53.7% | 87.2% |
| `/en/pricing` | 105.3 KB | 53.7% | 94.9% |
| `/en/products` | 105.3 KB | 53.7% | 89.7% |
| `/en/settings` | 105.3 KB | 53.7% | 93.6% |
| `/en/team` | 105.3 KB | 53.7% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 105.3 KB | 46.3% | 80.2% |
| `/fr/about` | 105.3 KB | 46.3% | 83.7% |
| `/fr/blog` | 105.3 KB | 46.3% | 84.9% |
| `/fr/careers` | 105.3 KB | 46.3% | 87.2% |
| `/fr/contact` | 105.3 KB | 46.3% | 97.7% |
| `/fr/faq` | 105.3 KB | 46.3% | 88.4% |
| `/fr/pricing` | 105.3 KB | 46.3% | 95.3% |
| `/fr/products` | 105.3 KB | 46.3% | 90.7% |
| `/fr/settings` | 105.3 KB | 46.3% | 91.9% |
| `/fr/team` | 105.3 KB | 46.3% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.8 ms | 1.2 ms | 3.7 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.3 ms | 1.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.7 ms | 5.0 ms | 2.8 ms |
| `fr` | 33.4 ms | 19.7 ms | 3.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 105.3 KB | 53.7% | 79.5% |
| `/en/about` | 105.3 KB | 53.7% | 87.2% |
| `/en/blog` | 105.3 KB | 53.7% | 83.3% |
| `/en/careers` | 105.3 KB | 53.7% | 85.9% |
| `/en/contact` | 105.3 KB | 53.7% | 98.7% |
| `/en/faq` | 105.3 KB | 53.7% | 87.2% |
| `/en/pricing` | 105.3 KB | 53.7% | 94.9% |
| `/en/products` | 105.3 KB | 53.7% | 89.7% |
| `/en/settings` | 105.3 KB | 53.7% | 93.6% |
| `/en/team` | 105.3 KB | 53.7% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 105.3 KB | 46.3% | 80.2% |
| `/fr/about` | 105.3 KB | 46.3% | 83.7% |
| `/fr/blog` | 105.3 KB | 46.3% | 84.9% |
| `/fr/careers` | 105.3 KB | 46.3% | 87.2% |
| `/fr/contact` | 105.3 KB | 46.3% | 97.7% |
| `/fr/faq` | 105.3 KB | 46.3% | 88.4% |
| `/fr/pricing` | 105.3 KB | 46.3% | 95.3% |
| `/fr/products` | 105.3 KB | 46.3% | 90.7% |
| `/fr/settings` | 105.3 KB | 46.3% | 91.9% |
| `/fr/team` | 105.3 KB | 46.3% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.8 ms | 1.2 ms | 3.7 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.3 ms | 1.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.7 ms | 5.0 ms | 2.8 ms |
| `fr` | 33.4 ms | 19.7 ms | 3.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 105.3 KB | 53.7% | 79.5% |
| `/en/about` | 105.3 KB | 53.7% | 87.2% |
| `/en/blog` | 105.3 KB | 53.7% | 83.3% |
| `/en/careers` | 105.3 KB | 53.7% | 85.9% |
| `/en/contact` | 105.3 KB | 53.7% | 98.7% |
| `/en/faq` | 105.3 KB | 53.7% | 87.2% |
| `/en/pricing` | 105.3 KB | 53.7% | 94.9% |
| `/en/products` | 105.3 KB | 53.7% | 89.7% |
| `/en/settings` | 105.3 KB | 53.7% | 93.6% |
| `/en/team` | 105.3 KB | 53.7% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 105.3 KB | 46.3% | 80.2% |
| `/fr/about` | 105.3 KB | 46.3% | 83.7% |
| `/fr/blog` | 105.3 KB | 46.3% | 84.9% |
| `/fr/careers` | 105.3 KB | 46.3% | 87.2% |
| `/fr/contact` | 105.3 KB | 46.3% | 97.7% |
| `/fr/faq` | 105.3 KB | 46.3% | 88.4% |
| `/fr/pricing` | 105.3 KB | 46.3% | 95.3% |
| `/fr/products` | 105.3 KB | 46.3% | 90.7% |
| `/fr/settings` | 105.3 KB | 46.3% | 91.9% |
| `/fr/team` | 105.3 KB | 46.3% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.8 ms | 1.2 ms | 3.7 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.3 ms | 1.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.7 ms | 5.0 ms | 2.8 ms |
| `fr` | 33.4 ms | 19.7 ms | 3.0 ms |

</details>

---

## paraglide-js

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.17.0 | 1.5 KB | 3.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 28.1 KB | 0.0% | 0.0% | 1.0 KB | — | — | 8.3 ms | — |
| Dynamic | 🔶 | 28.1 KB | 0.0% | 0.0% | 1.0 KB | — | — | 8.3 ms | — |
| Scoped Static | 🔶 | 28.1 KB | 0.0% | 0.0% | 1.0 KB | — | — | 8.3 ms | — |
| Scoped Dynamic | 🔶 | 28.1 KB | 0.0% | 0.0% | 1.0 KB | — | — | 8.3 ms | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 28.1 KB | 0.0% | 0.0% |
| `/en/about` | 28.1 KB | 0.0% | 0.0% |
| `/en/blog` | 28.1 KB | 0.0% | 0.0% |
| `/en/careers` | 28.1 KB | 0.0% | 0.0% |
| `/en/contact` | 28.1 KB | 0.0% | 0.0% |
| `/en/faq` | 28.1 KB | 0.0% | 0.0% |
| `/en/pricing` | 28.1 KB | 0.0% | 0.0% |
| `/en/products` | 28.1 KB | 0.0% | 0.0% |
| `/en/settings` | 28.1 KB | 0.0% | 0.0% |
| `/en/team` | 28.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 28.1 KB | 0.0% | 0.0% |
| `/fr/about` | 28.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 28.1 KB | 0.0% | 0.0% |
| `/fr/careers` | 28.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 28.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 28.1 KB | 0.0% | 0.0% |
| `/fr/pricing` | 28.1 KB | 0.0% | 0.0% |
| `/fr/products` | 28.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 28.1 KB | 0.0% | 0.0% |
| `/fr/team` | 28.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.1 ms | — | — |
| `fr` | 7.4 ms | — | — |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 28.1 KB | 0.0% | 0.0% |
| `/en/about` | 28.1 KB | 0.0% | 0.0% |
| `/en/blog` | 28.1 KB | 0.0% | 0.0% |
| `/en/careers` | 28.1 KB | 0.0% | 0.0% |
| `/en/contact` | 28.1 KB | 0.0% | 0.0% |
| `/en/faq` | 28.1 KB | 0.0% | 0.0% |
| `/en/pricing` | 28.1 KB | 0.0% | 0.0% |
| `/en/products` | 28.1 KB | 0.0% | 0.0% |
| `/en/settings` | 28.1 KB | 0.0% | 0.0% |
| `/en/team` | 28.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 28.1 KB | 0.0% | 0.0% |
| `/fr/about` | 28.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 28.1 KB | 0.0% | 0.0% |
| `/fr/careers` | 28.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 28.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 28.1 KB | 0.0% | 0.0% |
| `/fr/pricing` | 28.1 KB | 0.0% | 0.0% |
| `/fr/products` | 28.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 28.1 KB | 0.0% | 0.0% |
| `/fr/team` | 28.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.1 ms | — | — |
| `fr` | 7.4 ms | — | — |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 28.1 KB | 0.0% | 0.0% |
| `/en/about` | 28.1 KB | 0.0% | 0.0% |
| `/en/blog` | 28.1 KB | 0.0% | 0.0% |
| `/en/careers` | 28.1 KB | 0.0% | 0.0% |
| `/en/contact` | 28.1 KB | 0.0% | 0.0% |
| `/en/faq` | 28.1 KB | 0.0% | 0.0% |
| `/en/pricing` | 28.1 KB | 0.0% | 0.0% |
| `/en/products` | 28.1 KB | 0.0% | 0.0% |
| `/en/settings` | 28.1 KB | 0.0% | 0.0% |
| `/en/team` | 28.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 28.1 KB | 0.0% | 0.0% |
| `/fr/about` | 28.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 28.1 KB | 0.0% | 0.0% |
| `/fr/careers` | 28.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 28.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 28.1 KB | 0.0% | 0.0% |
| `/fr/pricing` | 28.1 KB | 0.0% | 0.0% |
| `/fr/products` | 28.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 28.1 KB | 0.0% | 0.0% |
| `/fr/team` | 28.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.1 ms | — | — |
| `fr` | 7.4 ms | — | — |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 28.1 KB | 0.0% | 0.0% |
| `/en/about` | 28.1 KB | 0.0% | 0.0% |
| `/en/blog` | 28.1 KB | 0.0% | 0.0% |
| `/en/careers` | 28.1 KB | 0.0% | 0.0% |
| `/en/contact` | 28.1 KB | 0.0% | 0.0% |
| `/en/faq` | 28.1 KB | 0.0% | 0.0% |
| `/en/pricing` | 28.1 KB | 0.0% | 0.0% |
| `/en/products` | 28.1 KB | 0.0% | 0.0% |
| `/en/settings` | 28.1 KB | 0.0% | 0.0% |
| `/en/team` | 28.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 28.1 KB | 0.0% | 0.0% |
| `/fr/about` | 28.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 28.1 KB | 0.0% | 0.0% |
| `/fr/careers` | 28.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 28.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 28.1 KB | 0.0% | 0.0% |
| `/fr/pricing` | 28.1 KB | 0.0% | 0.0% |
| `/fr/products` | 28.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 28.1 KB | 0.0% | 0.0% |
| `/fr/team` | 28.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.1 ms | — | — |
| `fr` | 7.4 ms | — | — |

</details>

---

## svelte-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.0.1 | 15.9 KB | 62.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 53.5 KB | 26.5% | 90.0% | 16.2 KB | 0.8 ms | — | 11.8 ms | 3.9 ms |
| Dynamic | ✅ | 53.5 KB | 26.5% | 90.0% | 16.2 KB | 0.8 ms | — | 11.8 ms | 3.9 ms |
| Scoped Static | ✅ | 53.5 KB | 26.5% | 90.0% | 16.2 KB | 0.8 ms | — | 11.8 ms | 3.9 ms |
| Scoped Dynamic | ✅ | 53.5 KB | 26.5% | 90.0% | 16.2 KB | 0.8 ms | — | 11.8 ms | 3.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 50.3 KB | 0.0% | 100.0% |
| `/en/about` | 50.3 KB | 0.0% | 86.1% |
| `/en/blog` | 50.3 KB | 0.0% | 81.9% |
| `/en/careers` | 50.3 KB | 0.0% | 84.7% |
| `/en/contact` | 50.3 KB | 0.0% | 98.6% |
| `/en/faq` | 50.3 KB | 0.0% | 86.1% |
| `/en/pricing` | 50.3 KB | 0.0% | 94.4% |
| `/en/products` | 50.3 KB | 0.0% | 88.9% |
| `/en/settings` | 50.3 KB | 0.0% | 93.1% |
| `/en/team` | 50.3 KB | 0.0% | 86.1% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 56.8 KB | 53.1% | 77.0% |
| `/fr/about` | 56.8 KB | 53.1% | 81.1% |
| `/fr/blog` | 56.8 KB | 53.1% | 82.4% |
| `/fr/careers` | 56.8 KB | 53.1% | 100.0% |
| `/fr/contact` | 56.8 KB | 53.1% | 98.6% |
| `/fr/faq` | 56.8 KB | 53.1% | 100.0% |
| `/fr/pricing` | 56.8 KB | 53.1% | 87.8% |
| `/fr/products` | 56.8 KB | 53.1% | 86.5% |
| `/fr/settings` | 56.8 KB | 53.1% | 100.0% |
| `/fr/team` | 56.8 KB | 53.1% | 86.5% |

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
| `/en/` | 50.3 KB | 0.0% | 100.0% |
| `/en/about` | 50.3 KB | 0.0% | 86.1% |
| `/en/blog` | 50.3 KB | 0.0% | 81.9% |
| `/en/careers` | 50.3 KB | 0.0% | 84.7% |
| `/en/contact` | 50.3 KB | 0.0% | 98.6% |
| `/en/faq` | 50.3 KB | 0.0% | 86.1% |
| `/en/pricing` | 50.3 KB | 0.0% | 94.4% |
| `/en/products` | 50.3 KB | 0.0% | 88.9% |
| `/en/settings` | 50.3 KB | 0.0% | 93.1% |
| `/en/team` | 50.3 KB | 0.0% | 86.1% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 56.8 KB | 53.1% | 77.0% |
| `/fr/about` | 56.8 KB | 53.1% | 81.1% |
| `/fr/blog` | 56.8 KB | 53.1% | 82.4% |
| `/fr/careers` | 56.8 KB | 53.1% | 100.0% |
| `/fr/contact` | 56.8 KB | 53.1% | 98.6% |
| `/fr/faq` | 56.8 KB | 53.1% | 100.0% |
| `/fr/pricing` | 56.8 KB | 53.1% | 87.8% |
| `/fr/products` | 56.8 KB | 53.1% | 86.5% |
| `/fr/settings` | 56.8 KB | 53.1% | 100.0% |
| `/fr/team` | 56.8 KB | 53.1% | 86.5% |

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
| `/en/` | 50.3 KB | 0.0% | 100.0% |
| `/en/about` | 50.3 KB | 0.0% | 86.1% |
| `/en/blog` | 50.3 KB | 0.0% | 81.9% |
| `/en/careers` | 50.3 KB | 0.0% | 84.7% |
| `/en/contact` | 50.3 KB | 0.0% | 98.6% |
| `/en/faq` | 50.3 KB | 0.0% | 86.1% |
| `/en/pricing` | 50.3 KB | 0.0% | 94.4% |
| `/en/products` | 50.3 KB | 0.0% | 88.9% |
| `/en/settings` | 50.3 KB | 0.0% | 93.1% |
| `/en/team` | 50.3 KB | 0.0% | 86.1% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 56.8 KB | 53.1% | 77.0% |
| `/fr/about` | 56.8 KB | 53.1% | 81.1% |
| `/fr/blog` | 56.8 KB | 53.1% | 82.4% |
| `/fr/careers` | 56.8 KB | 53.1% | 100.0% |
| `/fr/contact` | 56.8 KB | 53.1% | 98.6% |
| `/fr/faq` | 56.8 KB | 53.1% | 100.0% |
| `/fr/pricing` | 56.8 KB | 53.1% | 87.8% |
| `/fr/products` | 56.8 KB | 53.1% | 86.5% |
| `/fr/settings` | 56.8 KB | 53.1% | 100.0% |
| `/fr/team` | 56.8 KB | 53.1% | 86.5% |

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
| `/en/` | 50.3 KB | 0.0% | 100.0% |
| `/en/about` | 50.3 KB | 0.0% | 86.1% |
| `/en/blog` | 50.3 KB | 0.0% | 81.9% |
| `/en/careers` | 50.3 KB | 0.0% | 84.7% |
| `/en/contact` | 50.3 KB | 0.0% | 98.6% |
| `/en/faq` | 50.3 KB | 0.0% | 86.1% |
| `/en/pricing` | 50.3 KB | 0.0% | 94.4% |
| `/en/products` | 50.3 KB | 0.0% | 88.9% |
| `/en/settings` | 50.3 KB | 0.0% | 93.1% |
| `/en/team` | 50.3 KB | 0.0% | 86.1% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 56.8 KB | 53.1% | 77.0% |
| `/fr/about` | 56.8 KB | 53.1% | 81.1% |
| `/fr/blog` | 56.8 KB | 53.1% | 82.4% |
| `/fr/careers` | 56.8 KB | 53.1% | 100.0% |
| `/fr/contact` | 56.8 KB | 53.1% | 98.6% |
| `/fr/faq` | 56.8 KB | 53.1% | 100.0% |
| `/fr/pricing` | 56.8 KB | 53.1% | 87.8% |
| `/fr/products` | 56.8 KB | 53.1% | 86.5% |
| `/fr/settings` | 56.8 KB | 53.1% | 100.0% |
| `/fr/team` | 56.8 KB | 53.1% | 86.5% |

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
| Total app entries | 4 |
| With lib size data | 4 |
| With page bundle data | 16 |
| With component data | 16 |
| With reactivity data | 12 |
| With rendering data | 16 |
