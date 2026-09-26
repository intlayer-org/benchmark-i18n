# Vite + React — i18n Benchmark Results

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

- [base](#base)
- [intlayer](#intlayer)

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 84.9 KB | 0.0% | 0.0% | 0.7 KB | — | — | — | — |
| Dynamic | 🔶 | 84.9 KB | 0.0% | 0.0% | 0.7 KB | — | — | — | — |
| Scoped Static | 🔶 | 84.9 KB | 0.0% | 0.0% | 0.7 KB | — | — | — | — |
| Scoped Dynamic | 🔶 | 84.9 KB | 0.0% | 0.0% | 0.7 KB | — | — | — | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 86.2 KB | 0.0% | 0.0% |
| `/en/about` | 85.0 KB | 0.0% | 0.0% |
| `/en/blog` | 84.6 KB | 0.0% | 0.0% |
| `/en/careers` | 84.9 KB | 0.0% | 0.0% |
| `/en/contact` | 84.3 KB | 0.0% | 0.0% |
| `/en/faq` | 84.8 KB | 0.0% | 0.0% |
| `/en/pricing` | 84.4 KB | 0.0% | 0.0% |
| `/en/products` | 84.4 KB | 0.0% | 0.0% |
| `/en/settings` | 85.6 KB | 0.0% | 0.0% |
| `/en/team` | 84.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 86.2 KB | 0.0% | 0.0% |
| `/fr/about` | 85.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 84.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 84.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 84.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 84.8 KB | 0.0% | 0.0% |
| `/fr/pricing` | 84.4 KB | 0.0% | 0.0% |
| `/fr/products` | 84.4 KB | 0.0% | 0.0% |
| `/fr/settings` | 85.6 KB | 0.0% | 0.0% |
| `/fr/team` | 84.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 86.2 KB | 0.0% | 0.0% |
| `/en/about` | 85.0 KB | 0.0% | 0.0% |
| `/en/blog` | 84.6 KB | 0.0% | 0.0% |
| `/en/careers` | 84.9 KB | 0.0% | 0.0% |
| `/en/contact` | 84.3 KB | 0.0% | 0.0% |
| `/en/faq` | 84.8 KB | 0.0% | 0.0% |
| `/en/pricing` | 84.4 KB | 0.0% | 0.0% |
| `/en/products` | 84.4 KB | 0.0% | 0.0% |
| `/en/settings` | 85.6 KB | 0.0% | 0.0% |
| `/en/team` | 84.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 86.2 KB | 0.0% | 0.0% |
| `/fr/about` | 85.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 84.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 84.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 84.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 84.8 KB | 0.0% | 0.0% |
| `/fr/pricing` | 84.4 KB | 0.0% | 0.0% |
| `/fr/products` | 84.4 KB | 0.0% | 0.0% |
| `/fr/settings` | 85.6 KB | 0.0% | 0.0% |
| `/fr/team` | 84.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 86.2 KB | 0.0% | 0.0% |
| `/en/about` | 85.0 KB | 0.0% | 0.0% |
| `/en/blog` | 84.6 KB | 0.0% | 0.0% |
| `/en/careers` | 84.9 KB | 0.0% | 0.0% |
| `/en/contact` | 84.3 KB | 0.0% | 0.0% |
| `/en/faq` | 84.8 KB | 0.0% | 0.0% |
| `/en/pricing` | 84.4 KB | 0.0% | 0.0% |
| `/en/products` | 84.4 KB | 0.0% | 0.0% |
| `/en/settings` | 85.6 KB | 0.0% | 0.0% |
| `/en/team` | 84.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 86.2 KB | 0.0% | 0.0% |
| `/fr/about` | 85.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 84.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 84.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 84.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 84.8 KB | 0.0% | 0.0% |
| `/fr/pricing` | 84.4 KB | 0.0% | 0.0% |
| `/fr/products` | 84.4 KB | 0.0% | 0.0% |
| `/fr/settings` | 85.6 KB | 0.0% | 0.0% |
| `/fr/team` | 84.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 86.2 KB | 0.0% | 0.0% |
| `/en/about` | 85.0 KB | 0.0% | 0.0% |
| `/en/blog` | 84.6 KB | 0.0% | 0.0% |
| `/en/careers` | 84.9 KB | 0.0% | 0.0% |
| `/en/contact` | 84.3 KB | 0.0% | 0.0% |
| `/en/faq` | 84.8 KB | 0.0% | 0.0% |
| `/en/pricing` | 84.4 KB | 0.0% | 0.0% |
| `/en/products` | 84.4 KB | 0.0% | 0.0% |
| `/en/settings` | 85.6 KB | 0.0% | 0.0% |
| `/en/team` | 84.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 86.2 KB | 0.0% | 0.0% |
| `/fr/about` | 85.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 84.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 84.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 84.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 84.8 KB | 0.0% | 0.0% |
| `/fr/pricing` | 84.4 KB | 0.0% | 0.0% |
| `/fr/products` | 84.4 KB | 0.0% | 0.0% |
| `/fr/settings` | 85.6 KB | 0.0% | 0.0% |
| `/fr/team` | 84.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-react-base-app/bundle/rollup-visualizer.html)

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 106.3 KB | 50.0% | 0.0% | 7.4 KB | 3.7 ms | 1.0 ms | 6.6 ms | 4.0 ms |
| Dynamic | ↳ Static | 106.3 KB | 50.0% | 0.0% | 7.4 KB | 3.7 ms | 1.0 ms | 6.6 ms | 4.0 ms |
| Scoped Static | ↳ Static | 106.3 KB | 50.0% | 0.0% | 7.4 KB | 3.7 ms | 1.0 ms | 6.6 ms | 4.0 ms |
| Scoped Dynamic | ↳ Static | 106.3 KB | 50.0% | 0.0% | 7.4 KB | 3.7 ms | 1.0 ms | 6.6 ms | 4.0 ms |

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
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.8 ms | 1.9 ms | 11.2 ms | 0.9 ms |
| `fr` | 3.5 ms | 2.2 ms | 4.8 ms | 1.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 6.8 ms | 3.8 ms | 1.2 ms |
| `fr` | 6.4 ms | 4.2 ms | 1.2 ms |

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
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.8 ms | 1.9 ms | 11.2 ms | 0.9 ms |
| `fr` | 3.5 ms | 2.2 ms | 4.8 ms | 1.1 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 6.8 ms | 3.8 ms | 1.2 ms |
| `fr` | 6.4 ms | 4.2 ms | 1.2 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 2 |
| Total app entries | 2 |
| With lib size data | 1 |
| With page bundle data | 8 |
| With component data | 8 |
| With reactivity data | 4 |
| With rendering data | 4 |
