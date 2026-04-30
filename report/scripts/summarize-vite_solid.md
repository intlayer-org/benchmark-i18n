# Vite + Solid — i18n Benchmark Results

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
| Static | 🔶 | — | — | — | — | — | — | — | — |
| Dynamic | 🔶 | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | — | — | — | — | — | — | — | — |

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.11 | 25.0 KB | 88.6 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | — | — | — | — | — | — | — | — |
| Dynamic | 🔶 | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | — | — | — | — | — | — | — | — |

---

## paraglide-js

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.17.0 | 1.4 KB | 3.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | — | — | — | — | — | — | — | — |
| Dynamic | 🔶 | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | — | — | — | — | — | — | — | — |

---

## primitives-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.2.1 | 0.5 KB | 0.9 KB |

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
| Total libraries | 5 |
| Total app entries | 5 |
| With lib size data | 5 |
| With page bundle data | 4 |
| With component data | 4 |
| With reactivity data | 4 |
| With rendering data | 4 |
