# Vite + Svelte — i18n Benchmark Results

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
- [i18n](#i18n)
- [intlayer](#intlayer)
- [paraglide-js](#paraglide-js)

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | — | — | — | 0.9 KB | — | — | — | — |
| Dynamic | 🔶 | — | — | — | 0.9 KB | — | — | — | — |
| Scoped Static | 🔶 | — | — | — | 0.9 KB | — | — | — | — |
| Scoped Dynamic | 🔶 | — | — | — | 0.9 KB | — | — | — | — |

---

## i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.0.1 | 15.9 KB | 62.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 53.5 KB | 26.5% | 90.0% | — | 0.8 ms | — | — | — |
| Dynamic | 🔶 | 53.5 KB | 26.5% | 90.0% | — | 0.8 ms | — | — | — |
| Scoped Static | 🔶 | 53.5 KB | 26.5% | 90.0% | — | 0.8 ms | — | — | — |
| Scoped Dynamic | 🔶 | 53.5 KB | 26.5% | 90.0% | — | 0.8 ms | — | — | — |

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

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.11 | 3.7 KB | 10.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 36.7 KB | 50.0% | 90.0% | — | 1.4 ms | — | — | — |
| Dynamic | 🔶 | 36.7 KB | 50.0% | 90.0% | — | 1.4 ms | — | — | — |
| Scoped Static | 🔶 | 36.7 KB | 50.0% | 90.0% | — | 1.4 ms | — | — | — |
| Scoped Dynamic | 🔶 | 36.7 KB | 50.0% | 90.0% | — | 1.4 ms | — | — | — |

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

---

## paraglide-js

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.17.0 | 1.5 KB | 3.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | — | — | — | — | — | — | — | — |
| Dynamic | 🔶 | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | — | — | — | — | — | — | — | — |

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 4 |
| Total app entries | 4 |
| With lib size data | 4 |
| With page bundle data | 8 |
| With component data | 4 |
| With reactivity data | 8 |
| With rendering data | 0 |
