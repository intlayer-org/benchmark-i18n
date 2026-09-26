# Vite + Svelte — i18n Benchmark Results

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

- [@intlayer/svelte-i18n](#intlayer-svelte-i18n)
- [base](#base)
- [intlayer](#intlayer)
- [paraglide-js](#paraglide-js)
- [svelte-i18n](#svelte-i18n)
- [tolgee](#tolgee)

## @intlayer/svelte-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 96.0 KB | 50.0% | 90.0% | — | — | — | — | — |
| Dynamic | ↳ Static | 96.0 KB | 50.0% | 90.0% | — | — | — | — | — |
| Scoped Static | ↳ Static | 96.0 KB | 50.0% | 90.0% | — | — | — | — | — |
| Scoped Dynamic | ↳ Static | 96.0 KB | 50.0% | 90.0% | — | — | — | — | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 94.8 KB | 53.8% | 81.8% |
| `/en/about` | 95.8 KB | 53.8% | 88.6% |
| `/en/blog` | 95.9 KB | 53.8% | 85.2% |
| `/en/careers` | 96.4 KB | 53.8% | 87.5% |
| `/en/contact` | 96.4 KB | 53.8% | 98.9% |
| `/en/faq` | 95.8 KB | 53.8% | 88.6% |
| `/en/pricing` | 96.3 KB | 53.8% | 95.5% |
| `/en/products` | 96.0 KB | 53.8% | 90.9% |
| `/en/settings` | 97.0 KB | 53.8% | 94.3% |
| `/en/team` | 95.9 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 94.8 KB | 46.2% | 83.5% |
| `/fr/about` | 95.8 KB | 46.2% | 86.4% |
| `/fr/blog` | 95.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 96.4 KB | 46.2% | 87.4% |
| `/fr/contact` | 96.4 KB | 46.2% | 99.0% |
| `/fr/faq` | 95.8 KB | 46.2% | 90.3% |
| `/fr/pricing` | 96.3 KB | 46.2% | 91.3% |
| `/fr/products` | 96.0 KB | 46.2% | 90.3% |
| `/fr/settings` | 97.0 KB | 46.2% | 94.2% |
| `/fr/team` | 95.9 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-compat-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 94.8 KB | 53.8% | 81.8% |
| `/en/about` | 95.8 KB | 53.8% | 88.6% |
| `/en/blog` | 95.9 KB | 53.8% | 85.2% |
| `/en/careers` | 96.4 KB | 53.8% | 87.5% |
| `/en/contact` | 96.4 KB | 53.8% | 98.9% |
| `/en/faq` | 95.8 KB | 53.8% | 88.6% |
| `/en/pricing` | 96.3 KB | 53.8% | 95.5% |
| `/en/products` | 96.0 KB | 53.8% | 90.9% |
| `/en/settings` | 97.0 KB | 53.8% | 94.3% |
| `/en/team` | 95.9 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 94.8 KB | 46.2% | 83.5% |
| `/fr/about` | 95.8 KB | 46.2% | 86.4% |
| `/fr/blog` | 95.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 96.4 KB | 46.2% | 87.4% |
| `/fr/contact` | 96.4 KB | 46.2% | 99.0% |
| `/fr/faq` | 95.8 KB | 46.2% | 90.3% |
| `/fr/pricing` | 96.3 KB | 46.2% | 91.3% |
| `/fr/products` | 96.0 KB | 46.2% | 90.3% |
| `/fr/settings` | 97.0 KB | 46.2% | 94.2% |
| `/fr/team` | 95.9 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-compat-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 94.8 KB | 53.8% | 81.8% |
| `/en/about` | 95.8 KB | 53.8% | 88.6% |
| `/en/blog` | 95.9 KB | 53.8% | 85.2% |
| `/en/careers` | 96.4 KB | 53.8% | 87.5% |
| `/en/contact` | 96.4 KB | 53.8% | 98.9% |
| `/en/faq` | 95.8 KB | 53.8% | 88.6% |
| `/en/pricing` | 96.3 KB | 53.8% | 95.5% |
| `/en/products` | 96.0 KB | 53.8% | 90.9% |
| `/en/settings` | 97.0 KB | 53.8% | 94.3% |
| `/en/team` | 95.9 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 94.8 KB | 46.2% | 83.5% |
| `/fr/about` | 95.8 KB | 46.2% | 86.4% |
| `/fr/blog` | 95.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 96.4 KB | 46.2% | 87.4% |
| `/fr/contact` | 96.4 KB | 46.2% | 99.0% |
| `/fr/faq` | 95.8 KB | 46.2% | 90.3% |
| `/fr/pricing` | 96.3 KB | 46.2% | 91.3% |
| `/fr/products` | 96.0 KB | 46.2% | 90.3% |
| `/fr/settings` | 97.0 KB | 46.2% | 94.2% |
| `/fr/team` | 95.9 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-compat-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 94.8 KB | 53.8% | 81.8% |
| `/en/about` | 95.8 KB | 53.8% | 88.6% |
| `/en/blog` | 95.9 KB | 53.8% | 85.2% |
| `/en/careers` | 96.4 KB | 53.8% | 87.5% |
| `/en/contact` | 96.4 KB | 53.8% | 98.9% |
| `/en/faq` | 95.8 KB | 53.8% | 88.6% |
| `/en/pricing` | 96.3 KB | 53.8% | 95.5% |
| `/en/products` | 96.0 KB | 53.8% | 90.9% |
| `/en/settings` | 97.0 KB | 53.8% | 94.3% |
| `/en/team` | 95.9 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 94.8 KB | 46.2% | 83.5% |
| `/fr/about` | 95.8 KB | 46.2% | 86.4% |
| `/fr/blog` | 95.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 96.4 KB | 46.2% | 87.4% |
| `/fr/contact` | 96.4 KB | 46.2% | 99.0% |
| `/fr/faq` | 95.8 KB | 46.2% | 90.3% |
| `/fr/pricing` | 96.3 KB | 46.2% | 91.3% |
| `/fr/products` | 96.0 KB | 46.2% | 90.3% |
| `/fr/settings` | 97.0 KB | 46.2% | 94.2% |
| `/fr/team` | 95.9 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-compat-svelte-i18n-static/bundle/rollup-visualizer.html)

</details>

---

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
| 9.5.10 | 3.6 KB | 9.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 59.0 KB | 50.0% | 59.9% | 6.8 KB | 0.9 ms | — | 13.9 ms | 5.2 ms |
| Dynamic | 🔶 | 37.4 KB | 19.5% | 59.9% | 5.6 KB | 1.2 ms | — | 11.8 ms | 4.4 ms |
| Scoped Static | ↳ Static | 59.0 KB | 50.0% | 59.9% | 6.8 KB | 0.9 ms | — | 13.9 ms | 5.2 ms |
| Scoped Dynamic | ↳ Dynamic | 37.4 KB | 19.5% | 59.9% | 5.6 KB | 1.2 ms | — | 11.8 ms | 4.4 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 51.1 KB | 51.4% | 0.0% |
| `/en/about` | 64.5 KB | 54.1% | 61.5% |
| `/en/blog` | 60.5 KB | 50.8% | 55.2% |
| `/en/careers` | 60.9 KB | 50.8% | 59.3% |
| `/en/contact` | 56.1 KB | 52.4% | 94.1% |
| `/en/faq` | 63.2 KB | 50.8% | 61.5% |
| `/en/pricing` | 57.0 KB | 55.8% | 80.0% |
| `/en/products` | 58.7 KB | 52.6% | 66.7% |
| `/en/settings` | 58.1 KB | 52.9% | 76.2% |
| `/en/team` | 59.4 KB | 52.5% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 51.1 KB | 48.6% | 0.0% |
| `/fr/about` | 64.5 KB | 45.9% | 54.8% |
| `/fr/blog` | 60.5 KB | 49.2% | 56.7% |
| `/fr/careers` | 60.9 KB | 49.2% | 60.7% |
| `/fr/contact` | 56.1 KB | 47.6% | 89.5% |
| `/fr/faq` | 63.2 KB | 49.2% | 63.0% |
| `/fr/pricing` | 57.0 KB | 44.2% | 65.4% |
| `/fr/products` | 58.7 KB | 47.4% | 63.0% |
| `/fr/settings` | 58.1 KB | 47.1% | 70.8% |
| `/fr/team` | 59.4 KB | 47.5% | 58.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.0 ms | 0.8 ms | 1.9 ms | 0.0 ms |
| `fr` | 0.8 ms | 0.7 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.5 ms | 5.1 ms | 2.3 ms |
| `fr` | 14.3 ms | 5.2 ms | 2.4 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 32.9 KB | 0.0% | 0.0% |
| `/en/about` | 35.6 KB | 0.0% | 61.5% |
| `/en/blog` | 36.5 KB | 0.0% | 55.2% |
| `/en/careers` | 36.8 KB | 0.0% | 59.3% |
| `/en/contact` | 36.1 KB | 0.0% | 94.1% |
| `/en/faq` | 36.2 KB | 0.0% | 61.5% |
| `/en/pricing` | 36.2 KB | 0.0% | 80.0% |
| `/en/products` | 36.2 KB | 0.0% | 66.7% |
| `/en/settings` | 37.3 KB | 0.0% | 76.2% |
| `/en/team` | 36.3 KB | 0.0% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 35.5 KB | 48.6% | 0.0% |
| `/fr/about` | 38.5 KB | 35.3% | 54.8% |
| `/fr/blog` | 39.3 KB | 35.3% | 56.7% |
| `/fr/careers` | 39.7 KB | 36.7% | 60.7% |
| `/fr/contact` | 38.8 KB | 45.0% | 89.5% |
| `/fr/faq` | 38.6 KB | 37.5% | 63.0% |
| `/fr/pricing` | 39.0 KB | 38.3% | 65.4% |
| `/fr/products` | 38.9 KB | 37.5% | 63.0% |
| `/fr/settings` | 40.0 KB | 40.0% | 70.8% |
| `/fr/team` | 39.1 KB | 36.0% | 58.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.4 ms | 0.9 ms | 2.8 ms | 0.0 ms |
| `fr` | 1.0 ms | 0.7 ms | 1.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.2 ms | 4.1 ms | 2.1 ms |
| `fr` | 12.4 ms | 4.7 ms | 2.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 51.1 KB | 51.4% | 0.0% |
| `/en/about` | 64.5 KB | 54.1% | 61.5% |
| `/en/blog` | 60.5 KB | 50.8% | 55.2% |
| `/en/careers` | 60.9 KB | 50.8% | 59.3% |
| `/en/contact` | 56.1 KB | 52.4% | 94.1% |
| `/en/faq` | 63.2 KB | 50.8% | 61.5% |
| `/en/pricing` | 57.0 KB | 55.8% | 80.0% |
| `/en/products` | 58.7 KB | 52.6% | 66.7% |
| `/en/settings` | 58.1 KB | 52.9% | 76.2% |
| `/en/team` | 59.4 KB | 52.5% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 51.1 KB | 48.6% | 0.0% |
| `/fr/about` | 64.5 KB | 45.9% | 54.8% |
| `/fr/blog` | 60.5 KB | 49.2% | 56.7% |
| `/fr/careers` | 60.9 KB | 49.2% | 60.7% |
| `/fr/contact` | 56.1 KB | 47.6% | 89.5% |
| `/fr/faq` | 63.2 KB | 49.2% | 63.0% |
| `/fr/pricing` | 57.0 KB | 44.2% | 65.4% |
| `/fr/products` | 58.7 KB | 47.4% | 63.0% |
| `/fr/settings` | 58.1 KB | 47.1% | 70.8% |
| `/fr/team` | 59.4 KB | 47.5% | 58.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.0 ms | 0.8 ms | 1.9 ms | 0.0 ms |
| `fr` | 0.8 ms | 0.7 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.5 ms | 5.1 ms | 2.3 ms |
| `fr` | 14.3 ms | 5.2 ms | 2.4 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 32.9 KB | 0.0% | 0.0% |
| `/en/about` | 35.6 KB | 0.0% | 61.5% |
| `/en/blog` | 36.5 KB | 0.0% | 55.2% |
| `/en/careers` | 36.8 KB | 0.0% | 59.3% |
| `/en/contact` | 36.1 KB | 0.0% | 94.1% |
| `/en/faq` | 36.2 KB | 0.0% | 61.5% |
| `/en/pricing` | 36.2 KB | 0.0% | 80.0% |
| `/en/products` | 36.2 KB | 0.0% | 66.7% |
| `/en/settings` | 37.3 KB | 0.0% | 76.2% |
| `/en/team` | 36.3 KB | 0.0% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 35.5 KB | 48.6% | 0.0% |
| `/fr/about` | 38.5 KB | 35.3% | 54.8% |
| `/fr/blog` | 39.3 KB | 35.3% | 56.7% |
| `/fr/careers` | 39.7 KB | 36.7% | 60.7% |
| `/fr/contact` | 38.8 KB | 45.0% | 89.5% |
| `/fr/faq` | 38.6 KB | 37.5% | 63.0% |
| `/fr/pricing` | 39.0 KB | 38.3% | 65.4% |
| `/fr/products` | 38.9 KB | 37.5% | 63.0% |
| `/fr/settings` | 40.0 KB | 40.0% | 70.8% |
| `/fr/team` | 39.1 KB | 36.0% | 58.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.4 ms | 0.9 ms | 2.8 ms | 0.0 ms |
| `fr` | 1.0 ms | 0.7 ms | 1.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.2 ms | 4.1 ms | 2.1 ms |
| `fr` | 12.4 ms | 4.7 ms | 2.4 ms |

</details>

---

## paraglide-js

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.25.1 | 1.7 KB | 3.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 63.0 KB | 50.0% | 63.1% | 7.6 KB | 1.1 ms | — | 12.0 ms | 4.1 ms |
| Dynamic | ↳ Static | 63.0 KB | 50.0% | 63.1% | 7.6 KB | 1.1 ms | — | 12.0 ms | 4.1 ms |
| Scoped Static | ↳ Static | 63.0 KB | 50.0% | 63.1% | 7.6 KB | 1.1 ms | — | 12.0 ms | 4.1 ms |
| Scoped Dynamic | ↳ Static | 63.0 KB | 50.0% | 63.1% | 7.6 KB | 1.1 ms | — | 12.0 ms | 4.1 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 49.5 KB | 51.4% | 0.0% |
| `/en/about` | 62.1 KB | 54.1% | 61.5% |
| `/en/blog` | 59.2 KB | 50.8% | 55.2% |
| `/en/careers` | 59.5 KB | 52.4% | 59.3% |
| `/en/contact` | 54.8 KB | 51.2% | 94.1% |
| `/en/faq` | 115.5 KB | 53.8% | 88.6% |
| `/en/pricing` | 56.8 KB | 55.8% | 80.0% |
| `/en/products` | 57.4 KB | 52.6% | 66.7% |
| `/en/settings` | 57.2 KB | 52.0% | 76.2% |
| `/en/team` | 57.6 KB | 50.8% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 49.5 KB | 48.6% | 0.0% |
| `/fr/about` | 62.1 KB | 45.9% | 54.8% |
| `/fr/blog` | 59.2 KB | 49.2% | 56.7% |
| `/fr/careers` | 59.5 KB | 47.6% | 56.7% |
| `/fr/contact` | 54.8 KB | 48.8% | 94.4% |
| `/fr/faq` | 115.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 56.8 KB | 44.2% | 65.4% |
| `/fr/products` | 57.4 KB | 47.4% | 63.0% |
| `/fr/settings` | 57.2 KB | 48.0% | 73.9% |
| `/fr/team` | 57.6 KB | 49.2% | 63.0% |

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
| `/en/` | 49.5 KB | 51.4% | 0.0% |
| `/en/about` | 62.1 KB | 54.1% | 61.5% |
| `/en/blog` | 59.2 KB | 50.8% | 55.2% |
| `/en/careers` | 59.5 KB | 52.4% | 59.3% |
| `/en/contact` | 54.8 KB | 51.2% | 94.1% |
| `/en/faq` | 115.5 KB | 53.8% | 88.6% |
| `/en/pricing` | 56.8 KB | 55.8% | 80.0% |
| `/en/products` | 57.4 KB | 52.6% | 66.7% |
| `/en/settings` | 57.2 KB | 52.0% | 76.2% |
| `/en/team` | 57.6 KB | 50.8% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 49.5 KB | 48.6% | 0.0% |
| `/fr/about` | 62.1 KB | 45.9% | 54.8% |
| `/fr/blog` | 59.2 KB | 49.2% | 56.7% |
| `/fr/careers` | 59.5 KB | 47.6% | 56.7% |
| `/fr/contact` | 54.8 KB | 48.8% | 94.4% |
| `/fr/faq` | 115.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 56.8 KB | 44.2% | 65.4% |
| `/fr/products` | 57.4 KB | 47.4% | 63.0% |
| `/fr/settings` | 57.2 KB | 48.0% | 73.9% |
| `/fr/team` | 57.6 KB | 49.2% | 63.0% |

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
| `/en/` | 49.5 KB | 51.4% | 0.0% |
| `/en/about` | 62.1 KB | 54.1% | 61.5% |
| `/en/blog` | 59.2 KB | 50.8% | 55.2% |
| `/en/careers` | 59.5 KB | 52.4% | 59.3% |
| `/en/contact` | 54.8 KB | 51.2% | 94.1% |
| `/en/faq` | 115.5 KB | 53.8% | 88.6% |
| `/en/pricing` | 56.8 KB | 55.8% | 80.0% |
| `/en/products` | 57.4 KB | 52.6% | 66.7% |
| `/en/settings` | 57.2 KB | 52.0% | 76.2% |
| `/en/team` | 57.6 KB | 50.8% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 49.5 KB | 48.6% | 0.0% |
| `/fr/about` | 62.1 KB | 45.9% | 54.8% |
| `/fr/blog` | 59.2 KB | 49.2% | 56.7% |
| `/fr/careers` | 59.5 KB | 47.6% | 56.7% |
| `/fr/contact` | 54.8 KB | 48.8% | 94.4% |
| `/fr/faq` | 115.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 56.8 KB | 44.2% | 65.4% |
| `/fr/products` | 57.4 KB | 47.4% | 63.0% |
| `/fr/settings` | 57.2 KB | 48.0% | 73.9% |
| `/fr/team` | 57.6 KB | 49.2% | 63.0% |

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
| `/en/` | 49.5 KB | 51.4% | 0.0% |
| `/en/about` | 62.1 KB | 54.1% | 61.5% |
| `/en/blog` | 59.2 KB | 50.8% | 55.2% |
| `/en/careers` | 59.5 KB | 52.4% | 59.3% |
| `/en/contact` | 54.8 KB | 51.2% | 94.1% |
| `/en/faq` | 115.5 KB | 53.8% | 88.6% |
| `/en/pricing` | 56.8 KB | 55.8% | 80.0% |
| `/en/products` | 57.4 KB | 52.6% | 66.7% |
| `/en/settings` | 57.2 KB | 52.0% | 76.2% |
| `/en/team` | 57.6 KB | 50.8% | 61.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 49.5 KB | 48.6% | 0.0% |
| `/fr/about` | 62.1 KB | 45.9% | 54.8% |
| `/fr/blog` | 59.2 KB | 49.2% | 56.7% |
| `/fr/careers` | 59.5 KB | 47.6% | 56.7% |
| `/fr/contact` | 54.8 KB | 48.8% | 94.4% |
| `/fr/faq` | 115.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 56.8 KB | 44.2% | 65.4% |
| `/fr/products` | 57.4 KB | 47.4% | 63.0% |
| `/fr/settings` | 57.2 KB | 48.0% | 73.9% |
| `/fr/team` | 57.6 KB | 49.2% | 63.0% |

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
| Dynamic | 🔶 | 52.7 KB | 23.1% | 90.0% | 16.1 KB | — | — | — | — |
| Scoped Static | ↳ Static | 103.2 KB | 50.0% | 90.0% | 16.1 KB | 0.8 ms | — | 13.9 ms | 5.6 ms |
| Scoped Dynamic | ↳ Dynamic | 52.7 KB | 23.1% | 90.0% | 16.1 KB | — | — | — | — |

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
| `/en/` | 48.2 KB | 0.0% | 81.8% |
| `/en/about` | 49.2 KB | 0.0% | 88.6% |
| `/en/blog` | 49.4 KB | 0.0% | 85.2% |
| `/en/careers` | 49.8 KB | 0.0% | 87.5% |
| `/en/contact` | 49.8 KB | 0.0% | 98.9% |
| `/en/faq` | 49.2 KB | 0.0% | 88.6% |
| `/en/pricing` | 49.7 KB | 0.0% | 95.5% |
| `/en/products` | 49.5 KB | 0.0% | 90.9% |
| `/en/settings` | 50.4 KB | 0.0% | 94.3% |
| `/en/team` | 49.3 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 54.8 KB | 46.2% | 83.5% |
| `/fr/about` | 55.8 KB | 46.2% | 86.4% |
| `/fr/blog` | 55.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 56.4 KB | 46.2% | 87.4% |
| `/fr/contact` | 56.4 KB | 46.2% | 99.0% |
| `/fr/faq` | 55.8 KB | 46.2% | 90.3% |
| `/fr/pricing` | 56.3 KB | 46.2% | 91.3% |
| `/fr/products` | 56.0 KB | 46.2% | 90.3% |
| `/fr/settings` | 57.0 KB | 46.2% | 94.2% |
| `/fr/team` | 55.9 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-i18n-dynamic/bundle/rollup-visualizer.html)

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
| `/en/` | 48.2 KB | 0.0% | 81.8% |
| `/en/about` | 49.2 KB | 0.0% | 88.6% |
| `/en/blog` | 49.4 KB | 0.0% | 85.2% |
| `/en/careers` | 49.8 KB | 0.0% | 87.5% |
| `/en/contact` | 49.8 KB | 0.0% | 98.9% |
| `/en/faq` | 49.2 KB | 0.0% | 88.6% |
| `/en/pricing` | 49.7 KB | 0.0% | 95.5% |
| `/en/products` | 49.5 KB | 0.0% | 90.9% |
| `/en/settings` | 50.4 KB | 0.0% | 94.3% |
| `/en/team` | 49.3 KB | 0.0% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 54.8 KB | 46.2% | 83.5% |
| `/fr/about` | 55.8 KB | 46.2% | 86.4% |
| `/fr/blog` | 55.9 KB | 46.2% | 87.4% |
| `/fr/careers` | 56.4 KB | 46.2% | 87.4% |
| `/fr/contact` | 56.4 KB | 46.2% | 99.0% |
| `/fr/faq` | 55.8 KB | 46.2% | 90.3% |
| `/fr/pricing` | 56.3 KB | 46.2% | 91.3% |
| `/fr/products` | 56.0 KB | 46.2% | 90.3% |
| `/fr/settings` | 57.0 KB | 46.2% | 94.2% |
| `/fr/team` | 55.9 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-i18n-dynamic/bundle/rollup-visualizer.html)

</details>

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 7.2.1 | 13.0 KB | 41.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 100.8 KB | 50.0% | 90.0% | 73.2 KB | 0.5 ms | — | 13.0 ms | 6.2 ms |
| Dynamic | ↳ Static | 100.8 KB | 50.0% | 90.0% | 73.2 KB | 0.5 ms | — | 13.0 ms | 6.2 ms |
| Scoped Static | ↳ Static | 100.8 KB | 50.0% | 90.0% | 73.2 KB | 0.5 ms | — | 13.0 ms | 6.2 ms |
| Scoped Dynamic | ↳ Static | 100.8 KB | 50.0% | 90.0% | 73.2 KB | 0.5 ms | — | 13.0 ms | 6.2 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 99.5 KB | 53.8% | 81.8% |
| `/en/about` | 100.6 KB | 53.8% | 88.6% |
| `/en/blog` | 100.7 KB | 53.8% | 85.2% |
| `/en/careers` | 101.1 KB | 53.8% | 87.5% |
| `/en/contact` | 101.1 KB | 53.8% | 98.9% |
| `/en/faq` | 100.5 KB | 53.8% | 88.6% |
| `/en/pricing` | 101.0 KB | 53.8% | 95.5% |
| `/en/products` | 100.8 KB | 53.8% | 90.9% |
| `/en/settings` | 101.7 KB | 53.8% | 94.3% |
| `/en/team` | 100.6 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 99.5 KB | 46.2% | 83.5% |
| `/fr/about` | 100.6 KB | 46.2% | 86.4% |
| `/fr/blog` | 100.7 KB | 46.2% | 87.4% |
| `/fr/careers` | 101.1 KB | 46.2% | 87.4% |
| `/fr/contact` | 101.1 KB | 46.2% | 99.0% |
| `/fr/faq` | 100.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 101.0 KB | 46.2% | 91.3% |
| `/fr/products` | 100.8 KB | 46.2% | 90.3% |
| `/fr/settings` | 101.7 KB | 46.2% | 94.2% |
| `/fr/team` | 100.6 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-tolgee-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.3 ms | 1.9 ms | 0.0 ms |
| `fr` | 0.4 ms | 0.3 ms | 0.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.0 ms | 6.2 ms | 2.0 ms |
| `fr` | 13.0 ms | 6.3 ms | 2.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 99.5 KB | 53.8% | 81.8% |
| `/en/about` | 100.6 KB | 53.8% | 88.6% |
| `/en/blog` | 100.7 KB | 53.8% | 85.2% |
| `/en/careers` | 101.1 KB | 53.8% | 87.5% |
| `/en/contact` | 101.1 KB | 53.8% | 98.9% |
| `/en/faq` | 100.5 KB | 53.8% | 88.6% |
| `/en/pricing` | 101.0 KB | 53.8% | 95.5% |
| `/en/products` | 100.8 KB | 53.8% | 90.9% |
| `/en/settings` | 101.7 KB | 53.8% | 94.3% |
| `/en/team` | 100.6 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 99.5 KB | 46.2% | 83.5% |
| `/fr/about` | 100.6 KB | 46.2% | 86.4% |
| `/fr/blog` | 100.7 KB | 46.2% | 87.4% |
| `/fr/careers` | 101.1 KB | 46.2% | 87.4% |
| `/fr/contact` | 101.1 KB | 46.2% | 99.0% |
| `/fr/faq` | 100.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 101.0 KB | 46.2% | 91.3% |
| `/fr/products` | 100.8 KB | 46.2% | 90.3% |
| `/fr/settings` | 101.7 KB | 46.2% | 94.2% |
| `/fr/team` | 100.6 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-tolgee-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.3 ms | 1.9 ms | 0.0 ms |
| `fr` | 0.4 ms | 0.3 ms | 0.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.0 ms | 6.2 ms | 2.0 ms |
| `fr` | 13.0 ms | 6.3 ms | 2.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 99.5 KB | 53.8% | 81.8% |
| `/en/about` | 100.6 KB | 53.8% | 88.6% |
| `/en/blog` | 100.7 KB | 53.8% | 85.2% |
| `/en/careers` | 101.1 KB | 53.8% | 87.5% |
| `/en/contact` | 101.1 KB | 53.8% | 98.9% |
| `/en/faq` | 100.5 KB | 53.8% | 88.6% |
| `/en/pricing` | 101.0 KB | 53.8% | 95.5% |
| `/en/products` | 100.8 KB | 53.8% | 90.9% |
| `/en/settings` | 101.7 KB | 53.8% | 94.3% |
| `/en/team` | 100.6 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 99.5 KB | 46.2% | 83.5% |
| `/fr/about` | 100.6 KB | 46.2% | 86.4% |
| `/fr/blog` | 100.7 KB | 46.2% | 87.4% |
| `/fr/careers` | 101.1 KB | 46.2% | 87.4% |
| `/fr/contact` | 101.1 KB | 46.2% | 99.0% |
| `/fr/faq` | 100.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 101.0 KB | 46.2% | 91.3% |
| `/fr/products` | 100.8 KB | 46.2% | 90.3% |
| `/fr/settings` | 101.7 KB | 46.2% | 94.2% |
| `/fr/team` | 100.6 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-tolgee-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.3 ms | 1.9 ms | 0.0 ms |
| `fr` | 0.4 ms | 0.3 ms | 0.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.0 ms | 6.2 ms | 2.0 ms |
| `fr` | 13.0 ms | 6.3 ms | 2.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 99.5 KB | 53.8% | 81.8% |
| `/en/about` | 100.6 KB | 53.8% | 88.6% |
| `/en/blog` | 100.7 KB | 53.8% | 85.2% |
| `/en/careers` | 101.1 KB | 53.8% | 87.5% |
| `/en/contact` | 101.1 KB | 53.8% | 98.9% |
| `/en/faq` | 100.5 KB | 53.8% | 88.6% |
| `/en/pricing` | 101.0 KB | 53.8% | 95.5% |
| `/en/products` | 100.8 KB | 53.8% | 90.9% |
| `/en/settings` | 101.7 KB | 53.8% | 94.3% |
| `/en/team` | 100.6 KB | 53.8% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 99.5 KB | 46.2% | 83.5% |
| `/fr/about` | 100.6 KB | 46.2% | 86.4% |
| `/fr/blog` | 100.7 KB | 46.2% | 87.4% |
| `/fr/careers` | 101.1 KB | 46.2% | 87.4% |
| `/fr/contact` | 101.1 KB | 46.2% | 99.0% |
| `/fr/faq` | 100.5 KB | 46.2% | 90.3% |
| `/fr/pricing` | 101.0 KB | 46.2% | 91.3% |
| `/fr/products` | 100.8 KB | 46.2% | 90.3% |
| `/fr/settings` | 101.7 KB | 46.2% | 94.2% |
| `/fr/team` | 100.6 KB | 46.2% | 90.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-svelte-tolgee-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.3 ms | 1.9 ms | 0.0 ms |
| `fr` | 0.4 ms | 0.3 ms | 0.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.0 ms | 6.2 ms | 2.0 ms |
| `fr` | 13.0 ms | 6.3 ms | 2.0 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 6 |
| Total app entries | 8 |
| With lib size data | 5 |
| With page bundle data | 24 |
| With component data | 20 |
| With reactivity data | 18 |
| With rendering data | 18 |
