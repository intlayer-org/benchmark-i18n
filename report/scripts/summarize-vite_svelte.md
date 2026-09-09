# Vite + Svelte — i18n Benchmark Results

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
- [intlayer](#intlayer)
- [paraglide-js](#paraglide-js)
- [svelte-i18n](#svelte-i18n)

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 28.2 KB | 0.0% | 61.6% | 0.9 KB | 0.8 ms | — | 10.4 ms | 3.0 ms |
| Dynamic | ✅ | 28.2 KB | 0.0% | 61.6% | 0.9 KB | 0.8 ms | — | 10.4 ms | 3.0 ms |
| Scoped Static | ✅ | 28.2 KB | 0.0% | 61.6% | 0.9 KB | 0.8 ms | — | 10.4 ms | 3.0 ms |
| Scoped Dynamic | ✅ | 28.2 KB | 0.0% | 61.6% | 0.9 KB | 0.8 ms | — | 10.4 ms | 3.0 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 26.8 KB | 0.0% | 0.0% |
| `/en/about` | 28.5 KB | 0.0% | 61.5% |
| `/en/blog` | 28.3 KB | 0.0% | 55.2% |
| `/en/careers` | 28.5 KB | 0.0% | 59.3% |
| `/en/contact` | 28.0 KB | 0.0% | 94.1% |
| `/en/faq` | 28.5 KB | 0.0% | 61.5% |
| `/en/pricing` | 28.2 KB | 0.0% | 80.0% |
| `/en/products` | 28.2 KB | 0.0% | 66.7% |
| `/en/settings` | 28.3 KB | 0.0% | 76.2% |
| `/en/team` | 28.2 KB | 0.0% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 26.8 KB | 0.0% | 0.0% |
| `/fr/about` | 28.5 KB | 0.0% | 61.5% |
| `/fr/blog` | 28.3 KB | 0.0% | 55.2% |
| `/fr/careers` | 28.5 KB | 0.0% | 59.3% |
| `/fr/contact` | 28.0 KB | 0.0% | 94.1% |
| `/fr/faq` | 28.5 KB | 0.0% | 61.5% |
| `/fr/pricing` | 28.2 KB | 0.0% | 80.0% |
| `/fr/products` | 28.2 KB | 0.0% | 66.7% |
| `/fr/settings` | 28.3 KB | 0.0% | 76.2% |
| `/fr/team` | 28.2 KB | 0.0% | 61.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.0 ms | 0.5 ms | 2.9 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 10.2 ms | 2.8 ms | 1.9 ms |
| `fr` | 10.7 ms | 3.2 ms | 1.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 26.8 KB | 0.0% | 0.0% |
| `/en/about` | 28.5 KB | 0.0% | 61.5% |
| `/en/blog` | 28.3 KB | 0.0% | 55.2% |
| `/en/careers` | 28.5 KB | 0.0% | 59.3% |
| `/en/contact` | 28.0 KB | 0.0% | 94.1% |
| `/en/faq` | 28.5 KB | 0.0% | 61.5% |
| `/en/pricing` | 28.2 KB | 0.0% | 80.0% |
| `/en/products` | 28.2 KB | 0.0% | 66.7% |
| `/en/settings` | 28.3 KB | 0.0% | 76.2% |
| `/en/team` | 28.2 KB | 0.0% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 26.8 KB | 0.0% | 0.0% |
| `/fr/about` | 28.5 KB | 0.0% | 61.5% |
| `/fr/blog` | 28.3 KB | 0.0% | 55.2% |
| `/fr/careers` | 28.5 KB | 0.0% | 59.3% |
| `/fr/contact` | 28.0 KB | 0.0% | 94.1% |
| `/fr/faq` | 28.5 KB | 0.0% | 61.5% |
| `/fr/pricing` | 28.2 KB | 0.0% | 80.0% |
| `/fr/products` | 28.2 KB | 0.0% | 66.7% |
| `/fr/settings` | 28.3 KB | 0.0% | 76.2% |
| `/fr/team` | 28.2 KB | 0.0% | 61.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.0 ms | 0.5 ms | 2.9 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 10.2 ms | 2.8 ms | 1.9 ms |
| `fr` | 10.7 ms | 3.2 ms | 1.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 26.8 KB | 0.0% | 0.0% |
| `/en/about` | 28.5 KB | 0.0% | 61.5% |
| `/en/blog` | 28.3 KB | 0.0% | 55.2% |
| `/en/careers` | 28.5 KB | 0.0% | 59.3% |
| `/en/contact` | 28.0 KB | 0.0% | 94.1% |
| `/en/faq` | 28.5 KB | 0.0% | 61.5% |
| `/en/pricing` | 28.2 KB | 0.0% | 80.0% |
| `/en/products` | 28.2 KB | 0.0% | 66.7% |
| `/en/settings` | 28.3 KB | 0.0% | 76.2% |
| `/en/team` | 28.2 KB | 0.0% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 26.8 KB | 0.0% | 0.0% |
| `/fr/about` | 28.5 KB | 0.0% | 61.5% |
| `/fr/blog` | 28.3 KB | 0.0% | 55.2% |
| `/fr/careers` | 28.5 KB | 0.0% | 59.3% |
| `/fr/contact` | 28.0 KB | 0.0% | 94.1% |
| `/fr/faq` | 28.5 KB | 0.0% | 61.5% |
| `/fr/pricing` | 28.2 KB | 0.0% | 80.0% |
| `/fr/products` | 28.2 KB | 0.0% | 66.7% |
| `/fr/settings` | 28.3 KB | 0.0% | 76.2% |
| `/fr/team` | 28.2 KB | 0.0% | 61.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.0 ms | 0.5 ms | 2.9 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 10.2 ms | 2.8 ms | 1.9 ms |
| `fr` | 10.7 ms | 3.2 ms | 1.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 26.8 KB | 0.0% | 0.0% |
| `/en/about` | 28.5 KB | 0.0% | 61.5% |
| `/en/blog` | 28.3 KB | 0.0% | 55.2% |
| `/en/careers` | 28.5 KB | 0.0% | 59.3% |
| `/en/contact` | 28.0 KB | 0.0% | 94.1% |
| `/en/faq` | 28.5 KB | 0.0% | 61.5% |
| `/en/pricing` | 28.2 KB | 0.0% | 80.0% |
| `/en/products` | 28.2 KB | 0.0% | 66.7% |
| `/en/settings` | 28.3 KB | 0.0% | 76.2% |
| `/en/team` | 28.2 KB | 0.0% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 26.8 KB | 0.0% | 0.0% |
| `/fr/about` | 28.5 KB | 0.0% | 61.5% |
| `/fr/blog` | 28.3 KB | 0.0% | 55.2% |
| `/fr/careers` | 28.5 KB | 0.0% | 59.3% |
| `/fr/contact` | 28.0 KB | 0.0% | 94.1% |
| `/fr/faq` | 28.5 KB | 0.0% | 61.5% |
| `/fr/pricing` | 28.2 KB | 0.0% | 80.0% |
| `/fr/products` | 28.2 KB | 0.0% | 66.7% |
| `/fr/settings` | 28.3 KB | 0.0% | 76.2% |
| `/fr/team` | 28.2 KB | 0.0% | 61.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.0 ms | 0.5 ms | 2.9 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 10.2 ms | 2.8 ms | 1.9 ms |
| `fr` | 10.7 ms | 3.2 ms | 1.9 ms |

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.0 | 3.6 KB | 10.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 59.0 KB | 50.0% | 59.9% | 7.2 KB | 3.3 ms | — | 15.8 ms | 5.5 ms |
| Dynamic | 🔶 | 38.1 KB | 36.5% | 0.0% | 3.6 KB | 1.2 ms | — | 12.7 ms | 4.2 ms |
| Scoped Static | ✅ | 59.0 KB | 50.0% | 59.9% | 7.2 KB | 3.3 ms | — | 15.8 ms | 5.5 ms |
| Scoped Dynamic | 🔶 | 38.1 KB | 36.5% | 0.0% | 3.6 KB | 1.2 ms | — | 12.7 ms | 4.2 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 51.2 KB | 51.4% | 0.0% |
| `/en/about` | 64.5 KB | 54.1% | 61.5% |
| `/en/blog` | 60.6 KB | 50.8% | 55.2% |
| `/en/careers` | 60.9 KB | 50.8% | 59.3% |
| `/en/contact` | 56.2 KB | 52.4% | 94.1% |
| `/en/faq` | 63.3 KB | 50.8% | 61.5% |
| `/en/pricing` | 57.1 KB | 55.8% | 80.0% |
| `/en/products` | 58.7 KB | 52.6% | 66.7% |
| `/en/settings` | 58.2 KB | 52.9% | 76.2% |
| `/en/team` | 59.5 KB | 52.5% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 51.2 KB | 48.6% | 0.0% |
| `/fr/about` | 64.5 KB | 45.9% | 54.8% |
| `/fr/blog` | 60.6 KB | 49.2% | 56.7% |
| `/fr/careers` | 60.9 KB | 49.2% | 60.7% |
| `/fr/contact` | 56.2 KB | 47.6% | 89.5% |
| `/fr/faq` | 63.3 KB | 49.2% | 63.0% |
| `/fr/pricing` | 57.1 KB | 44.2% | 65.4% |
| `/fr/products` | 58.7 KB | 47.4% | 63.0% |
| `/fr/settings` | 58.2 KB | 47.1% | 70.8% |
| `/fr/team` | 59.5 KB | 47.5% | 58.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.4 ms | 2.4 ms | 5.6 ms | 0.0 ms |
| `fr` | 3.1 ms | 2.5 ms | 3.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.2 ms | 5.7 ms | 3.7 ms |
| `fr` | 15.4 ms | 5.3 ms | 3.7 ms |

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
| `/en/pricing` | 37.1 KB | 0.0% | 0.0% |
| `/en/products` | 37.2 KB | 0.0% | 0.0% |
| `/en/settings` | 37.7 KB | 0.0% | 0.0% |
| `/en/team` | 37.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 42.0 KB | 48.6% | 0.0% |
| `/fr/about` | 40.5 KB | 42.9% | 0.0% |
| `/fr/blog` | 37.5 KB | 100.0% | 0.0% |
| `/fr/careers` | 36.9 KB | 100.0% | 0.0% |
| `/fr/contact` | 38.7 KB | 44.4% | 0.0% |
| `/fr/faq` | 39.9 KB | 50.0% | 0.0% |
| `/fr/pricing` | 37.1 KB | 100.0% | 0.0% |
| `/fr/products` | 37.2 KB | 100.0% | 0.0% |
| `/fr/settings` | 39.7 KB | 44.4% | 0.0% |
| `/fr/team` | 37.4 KB | 100.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.5 ms | 1.0 ms | 3.1 ms | 0.0 ms |
| `fr` | 0.9 ms | 0.8 ms | 1.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.4 ms | 4.5 ms | 2.5 ms |
| `fr` | 12.0 ms | 4.0 ms | 2.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 51.2 KB | 51.4% | 0.0% |
| `/en/about` | 64.5 KB | 54.1% | 61.5% |
| `/en/blog` | 60.6 KB | 50.8% | 55.2% |
| `/en/careers` | 60.9 KB | 50.8% | 59.3% |
| `/en/contact` | 56.2 KB | 52.4% | 94.1% |
| `/en/faq` | 63.3 KB | 50.8% | 61.5% |
| `/en/pricing` | 57.1 KB | 55.8% | 80.0% |
| `/en/products` | 58.7 KB | 52.6% | 66.7% |
| `/en/settings` | 58.2 KB | 52.9% | 76.2% |
| `/en/team` | 59.5 KB | 52.5% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 51.2 KB | 48.6% | 0.0% |
| `/fr/about` | 64.5 KB | 45.9% | 54.8% |
| `/fr/blog` | 60.6 KB | 49.2% | 56.7% |
| `/fr/careers` | 60.9 KB | 49.2% | 60.7% |
| `/fr/contact` | 56.2 KB | 47.6% | 89.5% |
| `/fr/faq` | 63.3 KB | 49.2% | 63.0% |
| `/fr/pricing` | 57.1 KB | 44.2% | 65.4% |
| `/fr/products` | 58.7 KB | 47.4% | 63.0% |
| `/fr/settings` | 58.2 KB | 47.1% | 70.8% |
| `/fr/team` | 59.5 KB | 47.5% | 58.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.4 ms | 2.4 ms | 5.6 ms | 0.0 ms |
| `fr` | 3.1 ms | 2.5 ms | 3.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.2 ms | 5.7 ms | 3.7 ms |
| `fr` | 15.4 ms | 5.3 ms | 3.7 ms |

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
| `/en/pricing` | 37.1 KB | 0.0% | 0.0% |
| `/en/products` | 37.2 KB | 0.0% | 0.0% |
| `/en/settings` | 37.7 KB | 0.0% | 0.0% |
| `/en/team` | 37.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 42.0 KB | 48.6% | 0.0% |
| `/fr/about` | 40.5 KB | 42.9% | 0.0% |
| `/fr/blog` | 37.5 KB | 100.0% | 0.0% |
| `/fr/careers` | 36.9 KB | 100.0% | 0.0% |
| `/fr/contact` | 38.7 KB | 44.4% | 0.0% |
| `/fr/faq` | 39.9 KB | 50.0% | 0.0% |
| `/fr/pricing` | 37.1 KB | 100.0% | 0.0% |
| `/fr/products` | 37.2 KB | 100.0% | 0.0% |
| `/fr/settings` | 39.7 KB | 44.4% | 0.0% |
| `/fr/team` | 37.4 KB | 100.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.5 ms | 1.0 ms | 3.1 ms | 0.0 ms |
| `fr` | 0.9 ms | 0.8 ms | 1.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.4 ms | 4.5 ms | 2.5 ms |
| `fr` | 12.0 ms | 4.0 ms | 2.2 ms |

</details>

---

## paraglide-js

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.25.1 | 1.7 KB | 3.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 63.0 KB | 45.0% | 62.5% | 7.6 KB | 1.1 ms | — | 12.0 ms | 4.1 ms |
| Dynamic | ✅ | 63.0 KB | 45.0% | 62.5% | 7.6 KB | 1.1 ms | — | 12.0 ms | 4.1 ms |
| Scoped Static | ✅ | 63.0 KB | 45.0% | 62.5% | 7.6 KB | 1.1 ms | — | 12.0 ms | 4.1 ms |
| Scoped Dynamic | ✅ | 63.0 KB | 45.0% | 62.5% | 7.6 KB | 1.1 ms | — | 12.0 ms | 4.1 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 49.5 KB | 0.0% | 0.0% |
| `/en/about` | 62.1 KB | 58.3% | 61.5% |
| `/en/blog` | 59.2 KB | 50.0% | 55.2% |
| `/en/careers` | 59.5 KB | 53.8% | 59.3% |
| `/en/contact` | 54.9 KB | 50.0% | 94.1% |
| `/en/faq` | 115.5 KB | 54.4% | 88.6% |
| `/en/pricing` | 56.8 KB | 66.7% | 80.0% |
| `/en/products` | 57.4 KB | 55.6% | 66.7% |
| `/en/settings` | 57.2 KB | 53.8% | 76.2% |
| `/en/team` | 57.6 KB | 50.0% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 49.5 KB | 0.0% | 0.0% |
| `/fr/about` | 62.1 KB | 41.7% | 53.3% |
| `/fr/blog` | 59.2 KB | 50.0% | 55.2% |
| `/fr/careers` | 59.5 KB | 46.2% | 55.2% |
| `/fr/contact` | 54.9 KB | 50.0% | 94.1% |
| `/fr/faq` | 115.5 KB | 45.6% | 90.2% |
| `/fr/pricing` | 56.8 KB | 33.3% | 64.0% |
| `/fr/products` | 57.4 KB | 44.4% | 61.5% |
| `/fr/settings` | 57.2 KB | 46.2% | 72.7% |
| `/fr/team` | 57.6 KB | 50.0% | 61.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.2 ms | 0.8 ms | 2.3 ms | 0.0 ms |
| `fr` | 1.1 ms | 0.7 ms | 2.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.3 ms | 4.3 ms | 2.6 ms |
| `fr` | 11.6 ms | 3.8 ms | 2.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 49.5 KB | 0.0% | 0.0% |
| `/en/about` | 62.1 KB | 58.3% | 61.5% |
| `/en/blog` | 59.2 KB | 50.0% | 55.2% |
| `/en/careers` | 59.5 KB | 53.8% | 59.3% |
| `/en/contact` | 54.9 KB | 50.0% | 94.1% |
| `/en/faq` | 115.5 KB | 54.4% | 88.6% |
| `/en/pricing` | 56.8 KB | 66.7% | 80.0% |
| `/en/products` | 57.4 KB | 55.6% | 66.7% |
| `/en/settings` | 57.2 KB | 53.8% | 76.2% |
| `/en/team` | 57.6 KB | 50.0% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 49.5 KB | 0.0% | 0.0% |
| `/fr/about` | 62.1 KB | 41.7% | 53.3% |
| `/fr/blog` | 59.2 KB | 50.0% | 55.2% |
| `/fr/careers` | 59.5 KB | 46.2% | 55.2% |
| `/fr/contact` | 54.9 KB | 50.0% | 94.1% |
| `/fr/faq` | 115.5 KB | 45.6% | 90.2% |
| `/fr/pricing` | 56.8 KB | 33.3% | 64.0% |
| `/fr/products` | 57.4 KB | 44.4% | 61.5% |
| `/fr/settings` | 57.2 KB | 46.2% | 72.7% |
| `/fr/team` | 57.6 KB | 50.0% | 61.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.2 ms | 0.8 ms | 2.3 ms | 0.0 ms |
| `fr` | 1.1 ms | 0.7 ms | 2.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.3 ms | 4.3 ms | 2.6 ms |
| `fr` | 11.6 ms | 3.8 ms | 2.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 49.5 KB | 0.0% | 0.0% |
| `/en/about` | 62.1 KB | 58.3% | 61.5% |
| `/en/blog` | 59.2 KB | 50.0% | 55.2% |
| `/en/careers` | 59.5 KB | 53.8% | 59.3% |
| `/en/contact` | 54.9 KB | 50.0% | 94.1% |
| `/en/faq` | 115.5 KB | 54.4% | 88.6% |
| `/en/pricing` | 56.8 KB | 66.7% | 80.0% |
| `/en/products` | 57.4 KB | 55.6% | 66.7% |
| `/en/settings` | 57.2 KB | 53.8% | 76.2% |
| `/en/team` | 57.6 KB | 50.0% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 49.5 KB | 0.0% | 0.0% |
| `/fr/about` | 62.1 KB | 41.7% | 53.3% |
| `/fr/blog` | 59.2 KB | 50.0% | 55.2% |
| `/fr/careers` | 59.5 KB | 46.2% | 55.2% |
| `/fr/contact` | 54.9 KB | 50.0% | 94.1% |
| `/fr/faq` | 115.5 KB | 45.6% | 90.2% |
| `/fr/pricing` | 56.8 KB | 33.3% | 64.0% |
| `/fr/products` | 57.4 KB | 44.4% | 61.5% |
| `/fr/settings` | 57.2 KB | 46.2% | 72.7% |
| `/fr/team` | 57.6 KB | 50.0% | 61.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.2 ms | 0.8 ms | 2.3 ms | 0.0 ms |
| `fr` | 1.1 ms | 0.7 ms | 2.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.3 ms | 4.3 ms | 2.6 ms |
| `fr` | 11.6 ms | 3.8 ms | 2.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 49.5 KB | 0.0% | 0.0% |
| `/en/about` | 62.1 KB | 58.3% | 61.5% |
| `/en/blog` | 59.2 KB | 50.0% | 55.2% |
| `/en/careers` | 59.5 KB | 53.8% | 59.3% |
| `/en/contact` | 54.9 KB | 50.0% | 94.1% |
| `/en/faq` | 115.5 KB | 54.4% | 88.6% |
| `/en/pricing` | 56.8 KB | 66.7% | 80.0% |
| `/en/products` | 57.4 KB | 55.6% | 66.7% |
| `/en/settings` | 57.2 KB | 53.8% | 76.2% |
| `/en/team` | 57.6 KB | 50.0% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 49.5 KB | 0.0% | 0.0% |
| `/fr/about` | 62.1 KB | 41.7% | 53.3% |
| `/fr/blog` | 59.2 KB | 50.0% | 55.2% |
| `/fr/careers` | 59.5 KB | 46.2% | 55.2% |
| `/fr/contact` | 54.9 KB | 50.0% | 94.1% |
| `/fr/faq` | 115.5 KB | 45.6% | 90.2% |
| `/fr/pricing` | 56.8 KB | 33.3% | 64.0% |
| `/fr/products` | 57.4 KB | 44.4% | 61.5% |
| `/fr/settings` | 57.2 KB | 46.2% | 72.7% |
| `/fr/team` | 57.6 KB | 50.0% | 61.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.2 ms | 0.8 ms | 2.3 ms | 0.0 ms |
| `fr` | 1.1 ms | 0.7 ms | 2.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.3 ms | 4.3 ms | 2.6 ms |
| `fr` | 11.6 ms | 3.8 ms | 2.5 ms |

</details>

---

## svelte-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.0.1 | 16.6 KB | 64.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 103.2 KB | 50.0% | 90.0% | 16.1 KB | 0.8 ms | — | 13.9 ms | 5.6 ms |
| Dynamic | ✅ | 103.2 KB | 50.0% | 90.0% | 16.1 KB | 0.8 ms | — | 13.9 ms | 5.6 ms |
| Scoped Static | ✅ | 103.2 KB | 50.0% | 90.0% | 16.1 KB | 0.8 ms | — | 13.9 ms | 5.6 ms |
| Scoped Dynamic | ✅ | 103.2 KB | 50.0% | 90.0% | 16.1 KB | 0.8 ms | — | 13.9 ms | 5.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 101.9 KB | 53.8% | 81.8% |
| `/en/about` | 102.9 KB | 53.8% | 88.6% |
| `/en/blog` | 103.0 KB | 53.8% | 85.2% |
| `/en/careers` | 103.5 KB | 53.8% | 87.5% |
| `/en/contact` | 103.5 KB | 53.8% | 98.9% |
| `/en/faq` | 102.9 KB | 53.8% | 88.6% |
| `/en/pricing` | 103.4 KB | 53.8% | 95.5% |
| `/en/products` | 103.2 KB | 53.8% | 90.9% |
| `/en/settings` | 104.1 KB | 53.8% | 94.3% |
| `/en/team` | 103.0 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 101.9 KB | 46.2% | 83.5% |
| `/fr/about` | 102.9 KB | 46.2% | 86.4% |
| `/fr/blog` | 103.0 KB | 46.2% | 87.4% |
| `/fr/careers` | 103.5 KB | 46.2% | 87.4% |
| `/fr/contact` | 103.5 KB | 46.2% | 99.0% |
| `/fr/faq` | 102.9 KB | 46.2% | 90.3% |
| `/fr/pricing` | 103.4 KB | 46.2% | 91.3% |
| `/fr/products` | 103.2 KB | 46.2% | 90.3% |
| `/fr/settings` | 104.1 KB | 46.2% | 94.2% |
| `/fr/team` | 103.0 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.0 ms | 0.5 ms | 2.6 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.4 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.9 ms | 5.6 ms | 2.7 ms |
| `fr` | 13.9 ms | 5.6 ms | 2.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 101.9 KB | 53.8% | 81.8% |
| `/en/about` | 102.9 KB | 53.8% | 88.6% |
| `/en/blog` | 103.0 KB | 53.8% | 85.2% |
| `/en/careers` | 103.5 KB | 53.8% | 87.5% |
| `/en/contact` | 103.5 KB | 53.8% | 98.9% |
| `/en/faq` | 102.9 KB | 53.8% | 88.6% |
| `/en/pricing` | 103.4 KB | 53.8% | 95.5% |
| `/en/products` | 103.2 KB | 53.8% | 90.9% |
| `/en/settings` | 104.1 KB | 53.8% | 94.3% |
| `/en/team` | 103.0 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 101.9 KB | 46.2% | 83.5% |
| `/fr/about` | 102.9 KB | 46.2% | 86.4% |
| `/fr/blog` | 103.0 KB | 46.2% | 87.4% |
| `/fr/careers` | 103.5 KB | 46.2% | 87.4% |
| `/fr/contact` | 103.5 KB | 46.2% | 99.0% |
| `/fr/faq` | 102.9 KB | 46.2% | 90.3% |
| `/fr/pricing` | 103.4 KB | 46.2% | 91.3% |
| `/fr/products` | 103.2 KB | 46.2% | 90.3% |
| `/fr/settings` | 104.1 KB | 46.2% | 94.2% |
| `/fr/team` | 103.0 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.0 ms | 0.5 ms | 2.6 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.4 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.9 ms | 5.6 ms | 2.7 ms |
| `fr` | 13.9 ms | 5.6 ms | 2.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 101.9 KB | 53.8% | 81.8% |
| `/en/about` | 102.9 KB | 53.8% | 88.6% |
| `/en/blog` | 103.0 KB | 53.8% | 85.2% |
| `/en/careers` | 103.5 KB | 53.8% | 87.5% |
| `/en/contact` | 103.5 KB | 53.8% | 98.9% |
| `/en/faq` | 102.9 KB | 53.8% | 88.6% |
| `/en/pricing` | 103.4 KB | 53.8% | 95.5% |
| `/en/products` | 103.2 KB | 53.8% | 90.9% |
| `/en/settings` | 104.1 KB | 53.8% | 94.3% |
| `/en/team` | 103.0 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 101.9 KB | 46.2% | 83.5% |
| `/fr/about` | 102.9 KB | 46.2% | 86.4% |
| `/fr/blog` | 103.0 KB | 46.2% | 87.4% |
| `/fr/careers` | 103.5 KB | 46.2% | 87.4% |
| `/fr/contact` | 103.5 KB | 46.2% | 99.0% |
| `/fr/faq` | 102.9 KB | 46.2% | 90.3% |
| `/fr/pricing` | 103.4 KB | 46.2% | 91.3% |
| `/fr/products` | 103.2 KB | 46.2% | 90.3% |
| `/fr/settings` | 104.1 KB | 46.2% | 94.2% |
| `/fr/team` | 103.0 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.0 ms | 0.5 ms | 2.6 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.4 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.9 ms | 5.6 ms | 2.7 ms |
| `fr` | 13.9 ms | 5.6 ms | 2.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 101.9 KB | 53.8% | 81.8% |
| `/en/about` | 102.9 KB | 53.8% | 88.6% |
| `/en/blog` | 103.0 KB | 53.8% | 85.2% |
| `/en/careers` | 103.5 KB | 53.8% | 87.5% |
| `/en/contact` | 103.5 KB | 53.8% | 98.9% |
| `/en/faq` | 102.9 KB | 53.8% | 88.6% |
| `/en/pricing` | 103.4 KB | 53.8% | 95.5% |
| `/en/products` | 103.2 KB | 53.8% | 90.9% |
| `/en/settings` | 104.1 KB | 53.8% | 94.3% |
| `/en/team` | 103.0 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 101.9 KB | 46.2% | 83.5% |
| `/fr/about` | 102.9 KB | 46.2% | 86.4% |
| `/fr/blog` | 103.0 KB | 46.2% | 87.4% |
| `/fr/careers` | 103.5 KB | 46.2% | 87.4% |
| `/fr/contact` | 103.5 KB | 46.2% | 99.0% |
| `/fr/faq` | 102.9 KB | 46.2% | 90.3% |
| `/fr/pricing` | 103.4 KB | 46.2% | 91.3% |
| `/fr/products` | 103.2 KB | 46.2% | 90.3% |
| `/fr/settings` | 104.1 KB | 46.2% | 94.2% |
| `/fr/team` | 103.0 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.0 ms | 0.5 ms | 2.6 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.4 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.9 ms | 5.6 ms | 2.7 ms |
| `fr` | 13.9 ms | 5.6 ms | 2.6 ms |

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
