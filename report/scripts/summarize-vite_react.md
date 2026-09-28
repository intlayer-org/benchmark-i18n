# Vite + React — i18n Benchmark Results

_Generated: 2026-09-28_

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

- [base](#base)
- [intlayer](#intlayer)
- [lingui](#lingui)

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 90.9 KB | 0.0% | 0.0% | 0.6 KB | — | — | — | — |
| Dynamic | 🔶 | 90.9 KB | 0.0% | 0.0% | 0.6 KB | — | — | — | — |
| Scoped Static | 🔶 | 90.9 KB | 0.0% | 0.0% | 0.6 KB | — | — | — | — |
| Scoped Dynamic | 🔶 | 90.9 KB | 0.0% | 0.0% | 0.6 KB | — | — | — | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 91.8 KB | 0.0% | 0.0% |
| `/en/about` | 91.0 KB | 0.0% | 0.0% |
| `/en/blog` | 90.6 KB | 0.0% | 0.0% |
| `/en/careers` | 91.0 KB | 0.0% | 0.0% |
| `/en/contact` | 90.4 KB | 0.0% | 0.0% |
| `/en/faq` | 90.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 90.5 KB | 0.0% | 0.0% |
| `/en/products` | 90.5 KB | 0.0% | 0.0% |
| `/en/settings` | 91.7 KB | 0.0% | 0.0% |
| `/en/team` | 90.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 91.8 KB | 0.0% | 0.0% |
| `/fr/about` | 91.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 90.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 91.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 90.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 90.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 90.5 KB | 0.0% | 0.0% |
| `/fr/products` | 90.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 91.7 KB | 0.0% | 0.0% |
| `/fr/team` | 90.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 91.8 KB | 0.0% | 0.0% |
| `/en/about` | 91.0 KB | 0.0% | 0.0% |
| `/en/blog` | 90.6 KB | 0.0% | 0.0% |
| `/en/careers` | 91.0 KB | 0.0% | 0.0% |
| `/en/contact` | 90.4 KB | 0.0% | 0.0% |
| `/en/faq` | 90.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 90.5 KB | 0.0% | 0.0% |
| `/en/products` | 90.5 KB | 0.0% | 0.0% |
| `/en/settings` | 91.7 KB | 0.0% | 0.0% |
| `/en/team` | 90.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 91.8 KB | 0.0% | 0.0% |
| `/fr/about` | 91.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 90.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 91.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 90.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 90.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 90.5 KB | 0.0% | 0.0% |
| `/fr/products` | 90.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 91.7 KB | 0.0% | 0.0% |
| `/fr/team` | 90.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 91.8 KB | 0.0% | 0.0% |
| `/en/about` | 91.0 KB | 0.0% | 0.0% |
| `/en/blog` | 90.6 KB | 0.0% | 0.0% |
| `/en/careers` | 91.0 KB | 0.0% | 0.0% |
| `/en/contact` | 90.4 KB | 0.0% | 0.0% |
| `/en/faq` | 90.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 90.5 KB | 0.0% | 0.0% |
| `/en/products` | 90.5 KB | 0.0% | 0.0% |
| `/en/settings` | 91.7 KB | 0.0% | 0.0% |
| `/en/team` | 90.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 91.8 KB | 0.0% | 0.0% |
| `/fr/about` | 91.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 90.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 91.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 90.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 90.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 90.5 KB | 0.0% | 0.0% |
| `/fr/products` | 90.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 91.7 KB | 0.0% | 0.0% |
| `/fr/team` | 90.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 91.8 KB | 0.0% | 0.0% |
| `/en/about` | 91.0 KB | 0.0% | 0.0% |
| `/en/blog` | 90.6 KB | 0.0% | 0.0% |
| `/en/careers` | 91.0 KB | 0.0% | 0.0% |
| `/en/contact` | 90.4 KB | 0.0% | 0.0% |
| `/en/faq` | 90.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 90.5 KB | 0.0% | 0.0% |
| `/en/products` | 90.5 KB | 0.0% | 0.0% |
| `/en/settings` | 91.7 KB | 0.0% | 0.0% |
| `/en/team` | 90.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 91.8 KB | 0.0% | 0.0% |
| `/fr/about` | 91.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 90.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 91.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 90.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 90.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 90.5 KB | 0.0% | 0.0% |
| `/fr/products` | 90.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 91.7 KB | 0.0% | 0.0% |
| `/fr/team` | 90.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-base-app/bundle/rollup-visualizer.html)

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.11 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 106.3 KB | 50.0% | 0.0% | 7.4 KB | 3.7 ms | 1.0 ms | 6.6 ms | 4.0 ms |
| Dynamic | 🔶 | 98.5 KB | 0.0% | 0.0% | 4.9 KB | — | — | — | — |
| Scoped Static | ↳ Static | 106.3 KB | 50.0% | 0.0% | 7.4 KB | 3.7 ms | 1.0 ms | 6.6 ms | 4.0 ms |
| Scoped Dynamic | ↳ Dynamic | 98.5 KB | 0.0% | 0.0% | 4.9 KB | — | — | — | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 118.4 KB | 50.0% | 0.0% |
| `/en/about` | 111.5 KB | 56.7% | 0.0% |
| `/en/blog` | 104.8 KB | 50.0% | 0.0% |
| `/en/careers` | 105.8 KB | 53.3% | 0.0% |
| `/en/contact` | 100.6 KB | 55.6% | 0.0% |
| `/en/faq` | 108.5 KB | 48.0% | 0.0% |
| `/en/pricing` | 102.0 KB | 64.7% | 0.0% |
| `/en/products` | 103.6 KB | 54.2% | 0.0% |
| `/en/settings` | 103.5 KB | 55.6% | 0.0% |
| `/en/team` | 104.1 KB | 51.9% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 118.4 KB | 50.0% | 0.0% |
| `/fr/about` | 111.5 KB | 43.3% | 0.0% |
| `/fr/blog` | 104.8 KB | 50.0% | 0.0% |
| `/fr/careers` | 105.8 KB | 46.7% | 0.0% |
| `/fr/contact` | 100.6 KB | 44.4% | 0.0% |
| `/fr/faq` | 108.5 KB | 52.0% | 0.0% |
| `/fr/pricing` | 102.0 KB | 35.3% | 0.0% |
| `/fr/products` | 103.6 KB | 45.8% | 0.0% |
| `/fr/settings` | 103.5 KB | 44.4% | 0.0% |
| `/fr/team` | 104.1 KB | 48.1% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.8 ms | 1.9 ms | 11.2 ms | 0.9 ms |
| `fr` | 3.5 ms | 2.2 ms | 4.8 ms | 1.1 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 6.8 ms | 3.8 ms | 1.2 ms |
| `fr` | 6.4 ms | 4.2 ms | 1.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 100.2 KB | 0.0% | 0.0% |
| `/en/about` | 98.7 KB | 0.0% | 0.0% |
| `/en/blog` | 97.7 KB | 0.0% | 0.0% |
| `/en/careers` | 98.7 KB | 0.0% | 0.0% |
| `/en/contact` | 97.4 KB | 0.0% | 0.0% |
| `/en/faq` | 97.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 97.6 KB | 0.0% | 0.0% |
| `/en/products` | 97.6 KB | 0.0% | 0.0% |
| `/en/settings` | 100.6 KB | 0.0% | 0.0% |
| `/en/team` | 97.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 100.6 KB | 0.0% | 0.0% |
| `/fr/about` | 99.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 97.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 98.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 97.5 KB | 0.0% | 0.0% |
| `/fr/faq` | 98.2 KB | 0.0% | 0.0% |
| `/fr/pricing` | 97.8 KB | 0.0% | 0.0% |
| `/fr/products` | 97.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 100.8 KB | 0.0% | 0.0% |
| `/fr/team` | 97.8 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 118.4 KB | 50.0% | 0.0% |
| `/en/about` | 111.5 KB | 56.7% | 0.0% |
| `/en/blog` | 104.8 KB | 50.0% | 0.0% |
| `/en/careers` | 105.8 KB | 53.3% | 0.0% |
| `/en/contact` | 100.6 KB | 55.6% | 0.0% |
| `/en/faq` | 108.5 KB | 48.0% | 0.0% |
| `/en/pricing` | 102.0 KB | 64.7% | 0.0% |
| `/en/products` | 103.6 KB | 54.2% | 0.0% |
| `/en/settings` | 103.5 KB | 55.6% | 0.0% |
| `/en/team` | 104.1 KB | 51.9% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 118.4 KB | 50.0% | 0.0% |
| `/fr/about` | 111.5 KB | 43.3% | 0.0% |
| `/fr/blog` | 104.8 KB | 50.0% | 0.0% |
| `/fr/careers` | 105.8 KB | 46.7% | 0.0% |
| `/fr/contact` | 100.6 KB | 44.4% | 0.0% |
| `/fr/faq` | 108.5 KB | 52.0% | 0.0% |
| `/fr/pricing` | 102.0 KB | 35.3% | 0.0% |
| `/fr/products` | 103.6 KB | 45.8% | 0.0% |
| `/fr/settings` | 103.5 KB | 44.4% | 0.0% |
| `/fr/team` | 104.1 KB | 48.1% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.8 ms | 1.9 ms | 11.2 ms | 0.9 ms |
| `fr` | 3.5 ms | 2.2 ms | 4.8 ms | 1.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 6.8 ms | 3.8 ms | 1.2 ms |
| `fr` | 6.4 ms | 4.2 ms | 1.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 100.2 KB | 0.0% | 0.0% |
| `/en/about` | 98.7 KB | 0.0% | 0.0% |
| `/en/blog` | 97.7 KB | 0.0% | 0.0% |
| `/en/careers` | 98.7 KB | 0.0% | 0.0% |
| `/en/contact` | 97.4 KB | 0.0% | 0.0% |
| `/en/faq` | 97.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 97.6 KB | 0.0% | 0.0% |
| `/en/products` | 97.6 KB | 0.0% | 0.0% |
| `/en/settings` | 100.6 KB | 0.0% | 0.0% |
| `/en/team` | 97.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 100.6 KB | 0.0% | 0.0% |
| `/fr/about` | 99.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 97.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 98.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 97.5 KB | 0.0% | 0.0% |
| `/fr/faq` | 98.2 KB | 0.0% | 0.0% |
| `/fr/pricing` | 97.8 KB | 0.0% | 0.0% |
| `/fr/products` | 97.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 100.8 KB | 0.0% | 0.0% |
| `/fr/team` | 97.8 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

---

## lingui

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 6.6.0 | 11.3 KB | 36.1 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 159.7 KB | 50.0% | 90.0% | 68.4 KB | — | — | — | — |
| Dynamic | 🔶 | 105.3 KB | 1.8% | 90.0% | 85.8 KB | — | — | — | — |
| Scoped Static | ↳ Static | 159.7 KB | 50.0% | 90.0% | 68.4 KB | — | — | — | — |
| Scoped Dynamic | ↳ Dynamic | 105.3 KB | 1.8% | 90.0% | 85.8 KB | — | — | — | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 161.0 KB | 53.9% | 81.6% |
| `/en/about` | 159.6 KB | 53.9% | 88.5% |
| `/en/blog` | 159.1 KB | 53.9% | 85.1% |
| `/en/careers` | 160.0 KB | 53.9% | 88.5% |
| `/en/contact` | 159.1 KB | 53.9% | 98.9% |
| `/en/faq` | 159.8 KB | 53.9% | 88.5% |
| `/en/pricing` | 159.4 KB | 53.9% | 95.4% |
| `/en/products` | 159.3 KB | 53.9% | 90.8% |
| `/en/settings` | 160.7 KB | 53.9% | 94.3% |
| `/en/team` | 159.4 KB | 53.9% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 161.0 KB | 46.1% | 84.3% |
| `/fr/about` | 159.6 KB | 46.1% | 86.3% |
| `/fr/blog` | 159.1 KB | 46.1% | 87.3% |
| `/fr/careers` | 160.0 KB | 46.1% | 89.2% |
| `/fr/contact` | 159.1 KB | 46.1% | 98.0% |
| `/fr/faq` | 159.8 KB | 46.1% | 91.2% |
| `/fr/pricing` | 159.4 KB | 46.1% | 91.2% |
| `/fr/products` | 159.3 KB | 46.1% | 90.2% |
| `/fr/settings` | 160.7 KB | 46.1% | 93.1% |
| `/fr/team` | 159.4 KB | 46.1% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-lingui-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 104.5 KB | 0.0% | 81.4% |
| `/en/about` | 103.9 KB | 0.0% | 88.4% |
| `/en/blog` | 104.0 KB | 0.0% | 84.9% |
| `/en/careers` | 104.8 KB | 0.0% | 88.4% |
| `/en/contact` | 104.0 KB | 0.0% | 98.8% |
| `/en/faq` | 104.7 KB | 0.0% | 88.4% |
| `/en/pricing` | 104.3 KB | 0.0% | 96.5% |
| `/en/products` | 104.2 KB | 0.0% | 90.7% |
| `/en/settings` | 105.6 KB | 0.0% | 94.2% |
| `/en/team` | 104.4 KB | 0.0% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 106.3 KB | 0.0% | 84.6% |
| `/fr/about` | 105.7 KB | 0.0% | 86.5% |
| `/fr/blog` | 105.7 KB | 0.0% | 87.5% |
| `/fr/careers` | 106.5 KB | 7.8% | 88.5% |
| `/fr/contact` | 105.7 KB | 0.0% | 98.1% |
| `/fr/faq` | 106.5 KB | 8.6% | 91.3% |
| `/fr/pricing` | 106.0 KB | 0.9% | 90.4% |
| `/fr/products` | 106.0 KB | 6.2% | 90.4% |
| `/fr/settings` | 107.3 KB | 4.5% | 93.3% |
| `/fr/team` | 106.1 KB | 8.6% | 89.4% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-lingui-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 161.0 KB | 53.9% | 81.6% |
| `/en/about` | 159.6 KB | 53.9% | 88.5% |
| `/en/blog` | 159.1 KB | 53.9% | 85.1% |
| `/en/careers` | 160.0 KB | 53.9% | 88.5% |
| `/en/contact` | 159.1 KB | 53.9% | 98.9% |
| `/en/faq` | 159.8 KB | 53.9% | 88.5% |
| `/en/pricing` | 159.4 KB | 53.9% | 95.4% |
| `/en/products` | 159.3 KB | 53.9% | 90.8% |
| `/en/settings` | 160.7 KB | 53.9% | 94.3% |
| `/en/team` | 159.4 KB | 53.9% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 161.0 KB | 46.1% | 84.3% |
| `/fr/about` | 159.6 KB | 46.1% | 86.3% |
| `/fr/blog` | 159.1 KB | 46.1% | 87.3% |
| `/fr/careers` | 160.0 KB | 46.1% | 89.2% |
| `/fr/contact` | 159.1 KB | 46.1% | 98.0% |
| `/fr/faq` | 159.8 KB | 46.1% | 91.2% |
| `/fr/pricing` | 159.4 KB | 46.1% | 91.2% |
| `/fr/products` | 159.3 KB | 46.1% | 90.2% |
| `/fr/settings` | 160.7 KB | 46.1% | 93.1% |
| `/fr/team` | 159.4 KB | 46.1% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-lingui-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 104.5 KB | 0.0% | 81.4% |
| `/en/about` | 103.9 KB | 0.0% | 88.4% |
| `/en/blog` | 104.0 KB | 0.0% | 84.9% |
| `/en/careers` | 104.8 KB | 0.0% | 88.4% |
| `/en/contact` | 104.0 KB | 0.0% | 98.8% |
| `/en/faq` | 104.7 KB | 0.0% | 88.4% |
| `/en/pricing` | 104.3 KB | 0.0% | 96.5% |
| `/en/products` | 104.2 KB | 0.0% | 90.7% |
| `/en/settings` | 105.6 KB | 0.0% | 94.2% |
| `/en/team` | 104.4 KB | 0.0% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 106.3 KB | 0.0% | 84.6% |
| `/fr/about` | 105.7 KB | 0.0% | 86.5% |
| `/fr/blog` | 105.7 KB | 0.0% | 87.5% |
| `/fr/careers` | 106.5 KB | 7.8% | 88.5% |
| `/fr/contact` | 105.7 KB | 0.0% | 98.1% |
| `/fr/faq` | 106.5 KB | 8.6% | 91.3% |
| `/fr/pricing` | 106.0 KB | 0.9% | 90.4% |
| `/fr/products` | 106.0 KB | 6.2% | 90.4% |
| `/fr/settings` | 107.3 KB | 4.5% | 93.3% |
| `/fr/team` | 106.1 KB | 8.6% | 89.4% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-lingui-dynamic/bundle/rollup-visualizer.html)

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 3 |
| Total app entries | 5 |
| With lib size data | 2 |
| With page bundle data | 12 |
| With component data | 12 |
| With reactivity data | 2 |
| With rendering data | 2 |
