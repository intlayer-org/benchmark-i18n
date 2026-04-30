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
| 8.7.12 | 3.7 KB | 10.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 36.7 KB | 50.0% | 90.0% | 6.1 KB | 1.4 ms | — | 12.9 ms | 4.0 ms |
| Dynamic | ✅ | 36.7 KB | 50.0% | 90.0% | 6.1 KB | 1.4 ms | — | 12.9 ms | 4.0 ms |
| Scoped Static | ✅ | 36.7 KB | 50.0% | 90.0% | 6.1 KB | 1.4 ms | — | 12.9 ms | 4.0 ms |
| Scoped Dynamic | ✅ | 36.7 KB | 50.0% | 90.0% | 6.1 KB | 1.4 ms | — | 12.9 ms | 4.0 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 36.7 KB | 54.1% | 81.8% |
| `/en/about` | 36.7 KB | 54.1% | 88.6% |
| `/en/blog` | 36.7 KB | 54.1% | 85.2% |
| `/en/careers` | 36.7 KB | 54.1% | 87.5% |
| `/en/contact` | 36.7 KB | 54.1% | 98.9% |
| `/en/faq` | 36.7 KB | 54.1% | 88.6% |
| `/en/pricing` | 36.7 KB | 54.1% | 95.5% |
| `/en/products` | 36.7 KB | 54.1% | 90.9% |
| `/en/settings` | 36.7 KB | 54.1% | 94.3% |
| `/en/team` | 36.7 KB | 54.1% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 36.7 KB | 45.9% | 81.7% |
| `/fr/about` | 36.7 KB | 45.9% | 84.9% |
| `/fr/blog` | 36.7 KB | 45.9% | 86.0% |
| `/fr/careers` | 36.7 KB | 45.9% | 88.2% |
| `/fr/contact` | 36.7 KB | 45.9% | 98.9% |
| `/fr/faq` | 36.7 KB | 45.9% | 89.2% |
| `/fr/pricing` | 36.7 KB | 45.9% | 95.7% |
| `/fr/products` | 36.7 KB | 45.9% | 91.4% |
| `/fr/settings` | 36.7 KB | 45.9% | 94.6% |
| `/fr/team` | 36.7 KB | 45.9% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.6 ms | 1.0 ms | 3.1 ms | 0.0 ms |
| `fr` | 1.2 ms | 1.0 ms | 1.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.4 ms | 4.0 ms | 2.5 ms |
| `fr` | 12.5 ms | 4.0 ms | 2.4 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 36.7 KB | 54.1% | 81.8% |
| `/en/about` | 36.7 KB | 54.1% | 88.6% |
| `/en/blog` | 36.7 KB | 54.1% | 85.2% |
| `/en/careers` | 36.7 KB | 54.1% | 87.5% |
| `/en/contact` | 36.7 KB | 54.1% | 98.9% |
| `/en/faq` | 36.7 KB | 54.1% | 88.6% |
| `/en/pricing` | 36.7 KB | 54.1% | 95.5% |
| `/en/products` | 36.7 KB | 54.1% | 90.9% |
| `/en/settings` | 36.7 KB | 54.1% | 94.3% |
| `/en/team` | 36.7 KB | 54.1% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 36.7 KB | 45.9% | 81.7% |
| `/fr/about` | 36.7 KB | 45.9% | 84.9% |
| `/fr/blog` | 36.7 KB | 45.9% | 86.0% |
| `/fr/careers` | 36.7 KB | 45.9% | 88.2% |
| `/fr/contact` | 36.7 KB | 45.9% | 98.9% |
| `/fr/faq` | 36.7 KB | 45.9% | 89.2% |
| `/fr/pricing` | 36.7 KB | 45.9% | 95.7% |
| `/fr/products` | 36.7 KB | 45.9% | 91.4% |
| `/fr/settings` | 36.7 KB | 45.9% | 94.6% |
| `/fr/team` | 36.7 KB | 45.9% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.6 ms | 1.0 ms | 3.1 ms | 0.0 ms |
| `fr` | 1.2 ms | 1.0 ms | 1.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.4 ms | 4.0 ms | 2.5 ms |
| `fr` | 12.5 ms | 4.0 ms | 2.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 36.7 KB | 54.1% | 81.8% |
| `/en/about` | 36.7 KB | 54.1% | 88.6% |
| `/en/blog` | 36.7 KB | 54.1% | 85.2% |
| `/en/careers` | 36.7 KB | 54.1% | 87.5% |
| `/en/contact` | 36.7 KB | 54.1% | 98.9% |
| `/en/faq` | 36.7 KB | 54.1% | 88.6% |
| `/en/pricing` | 36.7 KB | 54.1% | 95.5% |
| `/en/products` | 36.7 KB | 54.1% | 90.9% |
| `/en/settings` | 36.7 KB | 54.1% | 94.3% |
| `/en/team` | 36.7 KB | 54.1% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 36.7 KB | 45.9% | 81.7% |
| `/fr/about` | 36.7 KB | 45.9% | 84.9% |
| `/fr/blog` | 36.7 KB | 45.9% | 86.0% |
| `/fr/careers` | 36.7 KB | 45.9% | 88.2% |
| `/fr/contact` | 36.7 KB | 45.9% | 98.9% |
| `/fr/faq` | 36.7 KB | 45.9% | 89.2% |
| `/fr/pricing` | 36.7 KB | 45.9% | 95.7% |
| `/fr/products` | 36.7 KB | 45.9% | 91.4% |
| `/fr/settings` | 36.7 KB | 45.9% | 94.6% |
| `/fr/team` | 36.7 KB | 45.9% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.6 ms | 1.0 ms | 3.1 ms | 0.0 ms |
| `fr` | 1.2 ms | 1.0 ms | 1.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.4 ms | 4.0 ms | 2.5 ms |
| `fr` | 12.5 ms | 4.0 ms | 2.4 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 36.7 KB | 54.1% | 81.8% |
| `/en/about` | 36.7 KB | 54.1% | 88.6% |
| `/en/blog` | 36.7 KB | 54.1% | 85.2% |
| `/en/careers` | 36.7 KB | 54.1% | 87.5% |
| `/en/contact` | 36.7 KB | 54.1% | 98.9% |
| `/en/faq` | 36.7 KB | 54.1% | 88.6% |
| `/en/pricing` | 36.7 KB | 54.1% | 95.5% |
| `/en/products` | 36.7 KB | 54.1% | 90.9% |
| `/en/settings` | 36.7 KB | 54.1% | 94.3% |
| `/en/team` | 36.7 KB | 54.1% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 36.7 KB | 45.9% | 81.7% |
| `/fr/about` | 36.7 KB | 45.9% | 84.9% |
| `/fr/blog` | 36.7 KB | 45.9% | 86.0% |
| `/fr/careers` | 36.7 KB | 45.9% | 88.2% |
| `/fr/contact` | 36.7 KB | 45.9% | 98.9% |
| `/fr/faq` | 36.7 KB | 45.9% | 89.2% |
| `/fr/pricing` | 36.7 KB | 45.9% | 95.7% |
| `/fr/products` | 36.7 KB | 45.9% | 91.4% |
| `/fr/settings` | 36.7 KB | 45.9% | 94.6% |
| `/fr/team` | 36.7 KB | 45.9% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.6 ms | 1.0 ms | 3.1 ms | 0.0 ms |
| `fr` | 1.2 ms | 1.0 ms | 1.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.4 ms | 4.0 ms | 2.5 ms |
| `fr` | 12.5 ms | 4.0 ms | 2.4 ms |

</details>

---

## paraglide-js

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.17.0 | 1.5 KB | 3.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 28.1 KB | 0.0% | 0.0% | 1.0 KB | — | — | 9.2 ms | — |
| Dynamic | 🔶 | 28.1 KB | 0.0% | 0.0% | 1.0 KB | — | — | 9.2 ms | — |
| Scoped Static | 🔶 | 28.1 KB | 0.0% | 0.0% | 1.0 KB | — | — | 9.2 ms | — |
| Scoped Dynamic | 🔶 | 28.1 KB | 0.0% | 0.0% | 1.0 KB | — | — | 9.2 ms | — |

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
| `en` | 11.9 ms | — | — |
| `fr` | 6.6 ms | — | — |

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
| `en` | 11.9 ms | — | — |
| `fr` | 6.6 ms | — | — |

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
| `en` | 11.9 ms | — | — |
| `fr` | 6.6 ms | — | — |

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
| `en` | 11.9 ms | — | — |
| `fr` | 6.6 ms | — | — |

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
| Total app entries | 4 |
| With lib size data | 4 |
| With page bundle data | 16 |
| With component data | 16 |
| With reactivity data | 12 |
| With rendering data | 16 |
