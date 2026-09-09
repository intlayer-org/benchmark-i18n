# Vite + Solid — i18n Benchmark Results

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
| Static | ✅ | 20.7 KB | 0.0% | 0.0% | 0.8 KB | 0.6 ms | — | 9.5 ms | 2.4 ms |
| Dynamic | ✅ | 20.7 KB | 0.0% | 0.0% | 0.8 KB | 0.6 ms | — | 9.5 ms | 2.4 ms |
| Scoped Static | ✅ | 20.7 KB | 0.0% | 0.0% | 0.8 KB | 0.6 ms | — | 9.5 ms | 2.4 ms |
| Scoped Dynamic | ✅ | 20.7 KB | 0.0% | 0.0% | 0.8 KB | 0.6 ms | — | 9.5 ms | 2.4 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 21.5 KB | 0.0% | 0.0% |
| `/en/about` | 20.8 KB | 0.0% | 0.0% |
| `/en/blog` | 20.5 KB | 0.0% | 0.0% |
| `/en/careers` | 20.9 KB | 0.0% | 0.0% |
| `/en/contact` | 20.2 KB | 0.0% | 0.0% |
| `/en/faq` | 20.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 20.4 KB | 0.0% | 0.0% |
| `/en/products` | 20.3 KB | 0.0% | 0.0% |
| `/en/settings` | 21.4 KB | 0.0% | 0.0% |
| `/en/team` | 20.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 21.5 KB | 0.0% | 0.0% |
| `/fr/about` | 20.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 20.5 KB | 0.0% | 0.0% |
| `/fr/careers` | 20.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 20.2 KB | 0.0% | 0.0% |
| `/fr/faq` | 20.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 20.4 KB | 0.0% | 0.0% |
| `/fr/products` | 20.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 21.4 KB | 0.0% | 0.0% |
| `/fr/team` | 20.4 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.5 ms | 1.1 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.6 ms | 2.5 ms | 1.2 ms |
| `fr` | 9.4 ms | 2.3 ms | 1.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 21.5 KB | 0.0% | 0.0% |
| `/en/about` | 20.8 KB | 0.0% | 0.0% |
| `/en/blog` | 20.5 KB | 0.0% | 0.0% |
| `/en/careers` | 20.9 KB | 0.0% | 0.0% |
| `/en/contact` | 20.2 KB | 0.0% | 0.0% |
| `/en/faq` | 20.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 20.4 KB | 0.0% | 0.0% |
| `/en/products` | 20.3 KB | 0.0% | 0.0% |
| `/en/settings` | 21.4 KB | 0.0% | 0.0% |
| `/en/team` | 20.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 21.5 KB | 0.0% | 0.0% |
| `/fr/about` | 20.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 20.5 KB | 0.0% | 0.0% |
| `/fr/careers` | 20.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 20.2 KB | 0.0% | 0.0% |
| `/fr/faq` | 20.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 20.4 KB | 0.0% | 0.0% |
| `/fr/products` | 20.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 21.4 KB | 0.0% | 0.0% |
| `/fr/team` | 20.4 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.5 ms | 1.1 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.6 ms | 2.5 ms | 1.2 ms |
| `fr` | 9.4 ms | 2.3 ms | 1.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 21.5 KB | 0.0% | 0.0% |
| `/en/about` | 20.8 KB | 0.0% | 0.0% |
| `/en/blog` | 20.5 KB | 0.0% | 0.0% |
| `/en/careers` | 20.9 KB | 0.0% | 0.0% |
| `/en/contact` | 20.2 KB | 0.0% | 0.0% |
| `/en/faq` | 20.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 20.4 KB | 0.0% | 0.0% |
| `/en/products` | 20.3 KB | 0.0% | 0.0% |
| `/en/settings` | 21.4 KB | 0.0% | 0.0% |
| `/en/team` | 20.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 21.5 KB | 0.0% | 0.0% |
| `/fr/about` | 20.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 20.5 KB | 0.0% | 0.0% |
| `/fr/careers` | 20.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 20.2 KB | 0.0% | 0.0% |
| `/fr/faq` | 20.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 20.4 KB | 0.0% | 0.0% |
| `/fr/products` | 20.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 21.4 KB | 0.0% | 0.0% |
| `/fr/team` | 20.4 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.5 ms | 1.1 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.6 ms | 2.5 ms | 1.2 ms |
| `fr` | 9.4 ms | 2.3 ms | 1.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 21.5 KB | 0.0% | 0.0% |
| `/en/about` | 20.8 KB | 0.0% | 0.0% |
| `/en/blog` | 20.5 KB | 0.0% | 0.0% |
| `/en/careers` | 20.9 KB | 0.0% | 0.0% |
| `/en/contact` | 20.2 KB | 0.0% | 0.0% |
| `/en/faq` | 20.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 20.4 KB | 0.0% | 0.0% |
| `/en/products` | 20.3 KB | 0.0% | 0.0% |
| `/en/settings` | 21.4 KB | 0.0% | 0.0% |
| `/en/team` | 20.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 21.5 KB | 0.0% | 0.0% |
| `/fr/about` | 20.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 20.5 KB | 0.0% | 0.0% |
| `/fr/careers` | 20.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 20.2 KB | 0.0% | 0.0% |
| `/fr/faq` | 20.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 20.4 KB | 0.0% | 0.0% |
| `/fr/products` | 20.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 21.4 KB | 0.0% | 0.0% |
| `/fr/team` | 20.4 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.5 ms | 1.1 ms | 0.0 ms |
| `fr` | 0.6 ms | 0.5 ms | 1.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 9.6 ms | 2.5 ms | 1.2 ms |
| `fr` | 9.4 ms | 2.3 ms | 1.2 ms |

</details>

---

## i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 26.0.8 | 14.9 KB | 52.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 93.5 KB | 50.0% | 90.0% | 76.7 KB | 0.6 ms | — | 12.2 ms | 3.7 ms |
| Dynamic | ✅ | 93.5 KB | 50.0% | 90.0% | 76.7 KB | 0.6 ms | — | 12.2 ms | 3.7 ms |
| Scoped Static | ✅ | 93.5 KB | 50.0% | 90.0% | 76.7 KB | 0.6 ms | — | 12.2 ms | 3.7 ms |
| Scoped Dynamic | ✅ | 93.5 KB | 50.0% | 90.0% | 76.7 KB | 0.6 ms | — | 12.2 ms | 3.7 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 93.8 KB | 51.4% | 0.0% |
| `/en/about` | 93.2 KB | 51.4% | 100.0% |
| `/en/blog` | 93.1 KB | 51.4% | 100.0% |
| `/en/careers` | 93.7 KB | 51.4% | 100.0% |
| `/en/contact` | 93.5 KB | 51.4% | 100.0% |
| `/en/faq` | 93.0 KB | 51.4% | 100.0% |
| `/en/pricing` | 93.5 KB | 51.4% | 100.0% |
| `/en/products` | 93.2 KB | 51.4% | 100.0% |
| `/en/settings` | 94.8 KB | 51.4% | 100.0% |
| `/en/team` | 93.0 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 93.8 KB | 48.6% | 0.0% |
| `/fr/about` | 93.2 KB | 48.6% | 100.0% |
| `/fr/blog` | 93.1 KB | 48.6% | 100.0% |
| `/fr/careers` | 93.7 KB | 48.6% | 100.0% |
| `/fr/contact` | 93.5 KB | 48.6% | 100.0% |
| `/fr/faq` | 93.0 KB | 48.6% | 100.0% |
| `/fr/pricing` | 93.5 KB | 48.6% | 100.0% |
| `/fr/products` | 93.2 KB | 48.6% | 100.0% |
| `/fr/settings` | 94.8 KB | 48.6% | 100.0% |
| `/fr/team` | 93.0 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-i18next-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.4 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.2 ms | 3.8 ms | 1.9 ms |
| `fr` | 12.1 ms | 3.6 ms | 1.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 93.8 KB | 51.4% | 0.0% |
| `/en/about` | 93.2 KB | 51.4% | 100.0% |
| `/en/blog` | 93.1 KB | 51.4% | 100.0% |
| `/en/careers` | 93.7 KB | 51.4% | 100.0% |
| `/en/contact` | 93.5 KB | 51.4% | 100.0% |
| `/en/faq` | 93.0 KB | 51.4% | 100.0% |
| `/en/pricing` | 93.5 KB | 51.4% | 100.0% |
| `/en/products` | 93.2 KB | 51.4% | 100.0% |
| `/en/settings` | 94.8 KB | 51.4% | 100.0% |
| `/en/team` | 93.0 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 93.8 KB | 48.6% | 0.0% |
| `/fr/about` | 93.2 KB | 48.6% | 100.0% |
| `/fr/blog` | 93.1 KB | 48.6% | 100.0% |
| `/fr/careers` | 93.7 KB | 48.6% | 100.0% |
| `/fr/contact` | 93.5 KB | 48.6% | 100.0% |
| `/fr/faq` | 93.0 KB | 48.6% | 100.0% |
| `/fr/pricing` | 93.5 KB | 48.6% | 100.0% |
| `/fr/products` | 93.2 KB | 48.6% | 100.0% |
| `/fr/settings` | 94.8 KB | 48.6% | 100.0% |
| `/fr/team` | 93.0 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-i18next-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.4 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.2 ms | 3.8 ms | 1.9 ms |
| `fr` | 12.1 ms | 3.6 ms | 1.7 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 93.8 KB | 51.4% | 0.0% |
| `/en/about` | 93.2 KB | 51.4% | 100.0% |
| `/en/blog` | 93.1 KB | 51.4% | 100.0% |
| `/en/careers` | 93.7 KB | 51.4% | 100.0% |
| `/en/contact` | 93.5 KB | 51.4% | 100.0% |
| `/en/faq` | 93.0 KB | 51.4% | 100.0% |
| `/en/pricing` | 93.5 KB | 51.4% | 100.0% |
| `/en/products` | 93.2 KB | 51.4% | 100.0% |
| `/en/settings` | 94.8 KB | 51.4% | 100.0% |
| `/en/team` | 93.0 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 93.8 KB | 48.6% | 0.0% |
| `/fr/about` | 93.2 KB | 48.6% | 100.0% |
| `/fr/blog` | 93.1 KB | 48.6% | 100.0% |
| `/fr/careers` | 93.7 KB | 48.6% | 100.0% |
| `/fr/contact` | 93.5 KB | 48.6% | 100.0% |
| `/fr/faq` | 93.0 KB | 48.6% | 100.0% |
| `/fr/pricing` | 93.5 KB | 48.6% | 100.0% |
| `/fr/products` | 93.2 KB | 48.6% | 100.0% |
| `/fr/settings` | 94.8 KB | 48.6% | 100.0% |
| `/fr/team` | 93.0 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-i18next-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.4 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.2 ms | 3.8 ms | 1.9 ms |
| `fr` | 12.1 ms | 3.6 ms | 1.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 93.8 KB | 51.4% | 0.0% |
| `/en/about` | 93.2 KB | 51.4% | 100.0% |
| `/en/blog` | 93.1 KB | 51.4% | 100.0% |
| `/en/careers` | 93.7 KB | 51.4% | 100.0% |
| `/en/contact` | 93.5 KB | 51.4% | 100.0% |
| `/en/faq` | 93.0 KB | 51.4% | 100.0% |
| `/en/pricing` | 93.5 KB | 51.4% | 100.0% |
| `/en/products` | 93.2 KB | 51.4% | 100.0% |
| `/en/settings` | 94.8 KB | 51.4% | 100.0% |
| `/en/team` | 93.0 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 93.8 KB | 48.6% | 0.0% |
| `/fr/about` | 93.2 KB | 48.6% | 100.0% |
| `/fr/blog` | 93.1 KB | 48.6% | 100.0% |
| `/fr/careers` | 93.7 KB | 48.6% | 100.0% |
| `/fr/contact` | 93.5 KB | 48.6% | 100.0% |
| `/fr/faq` | 93.0 KB | 48.6% | 100.0% |
| `/fr/pricing` | 93.5 KB | 48.6% | 100.0% |
| `/fr/products` | 93.2 KB | 48.6% | 100.0% |
| `/fr/settings` | 94.8 KB | 48.6% | 100.0% |
| `/fr/team` | 93.0 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-i18next-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.6 ms | 0.4 ms | 1.3 ms | 0.0 ms |
| `fr` | 0.5 ms | 0.4 ms | 0.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.2 ms | 3.8 ms | 1.9 ms |
| `fr` | 12.1 ms | 3.6 ms | 1.7 ms |

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.0 | 4.3 KB | 11.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 35.8 KB | 50.0% | 0.0% | 7.0 KB | 1.4 ms | — | 10.6 ms | 3.0 ms |
| Dynamic | 🔶 | 27.2 KB | 0.0% | 0.0% | 3.5 KB | — | — | 10.0 ms | — |
| Scoped Static | ✅ | 35.8 KB | 50.0% | 0.0% | 7.0 KB | 1.4 ms | — | 10.6 ms | 3.0 ms |
| Scoped Dynamic | 🔶 | 27.2 KB | 0.0% | 0.0% | 3.5 KB | — | — | 10.0 ms | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 47.0 KB | 50.0% | 0.0% |
| `/en/about` | 40.3 KB | 50.0% | 0.0% |
| `/en/blog` | 34.7 KB | 50.0% | 0.0% |
| `/en/careers` | 35.3 KB | 50.0% | 0.0% |
| `/en/contact` | 30.5 KB | 50.0% | 0.0% |
| `/en/faq` | 38.1 KB | 50.0% | 0.0% |
| `/en/pricing` | 31.7 KB | 50.0% | 0.0% |
| `/en/products` | 33.0 KB | 50.0% | 0.0% |
| `/en/settings` | 33.9 KB | 50.0% | 0.0% |
| `/en/team` | 33.4 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 47.0 KB | 50.0% | 0.0% |
| `/fr/about` | 40.3 KB | 50.0% | 0.0% |
| `/fr/blog` | 34.7 KB | 50.0% | 0.0% |
| `/fr/careers` | 35.3 KB | 50.0% | 0.0% |
| `/fr/contact` | 30.5 KB | 50.0% | 0.0% |
| `/fr/faq` | 38.1 KB | 50.0% | 0.0% |
| `/fr/pricing` | 31.7 KB | 50.0% | 0.0% |
| `/fr/products` | 33.0 KB | 50.0% | 0.0% |
| `/fr/settings` | 33.9 KB | 50.0% | 0.0% |
| `/fr/team` | 33.4 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.5 ms | 1.1 ms | 2.5 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.2 ms | 1.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 10.7 ms | 3.0 ms | 1.7 ms |
| `fr` | 10.6 ms | 3.0 ms | 1.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 27.2 KB | 0.0% | 0.0% |
| `/en/about` | 27.2 KB | 0.0% | 0.0% |
| `/en/blog` | 27.2 KB | 0.0% | 0.0% |
| `/en/careers` | 27.2 KB | 0.0% | 0.0% |
| `/en/contact` | 27.2 KB | 0.0% | 0.0% |
| `/en/faq` | 27.2 KB | 0.0% | 0.0% |
| `/en/pricing` | 27.2 KB | 0.0% | 0.0% |
| `/en/products` | 27.2 KB | 0.0% | 0.0% |
| `/en/settings` | 27.2 KB | 0.0% | 0.0% |
| `/en/team` | 27.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 27.2 KB | 0.0% | 0.0% |
| `/fr/about` | 27.2 KB | 0.0% | 0.0% |
| `/fr/blog` | 27.2 KB | 0.0% | 0.0% |
| `/fr/careers` | 27.2 KB | 0.0% | 0.0% |
| `/fr/contact` | 27.2 KB | 0.0% | 0.0% |
| `/fr/faq` | 27.2 KB | 0.0% | 0.0% |
| `/fr/pricing` | 27.2 KB | 0.0% | 0.0% |
| `/fr/products` | 27.2 KB | 0.0% | 0.0% |
| `/fr/settings` | 27.2 KB | 0.0% | 0.0% |
| `/fr/team` | 27.2 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.1 ms | — | — |
| `fr` | 8.8 ms | — | — |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 47.0 KB | 50.0% | 0.0% |
| `/en/about` | 40.3 KB | 50.0% | 0.0% |
| `/en/blog` | 34.7 KB | 50.0% | 0.0% |
| `/en/careers` | 35.3 KB | 50.0% | 0.0% |
| `/en/contact` | 30.5 KB | 50.0% | 0.0% |
| `/en/faq` | 38.1 KB | 50.0% | 0.0% |
| `/en/pricing` | 31.7 KB | 50.0% | 0.0% |
| `/en/products` | 33.0 KB | 50.0% | 0.0% |
| `/en/settings` | 33.9 KB | 50.0% | 0.0% |
| `/en/team` | 33.4 KB | 50.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 47.0 KB | 50.0% | 0.0% |
| `/fr/about` | 40.3 KB | 50.0% | 0.0% |
| `/fr/blog` | 34.7 KB | 50.0% | 0.0% |
| `/fr/careers` | 35.3 KB | 50.0% | 0.0% |
| `/fr/contact` | 30.5 KB | 50.0% | 0.0% |
| `/fr/faq` | 38.1 KB | 50.0% | 0.0% |
| `/fr/pricing` | 31.7 KB | 50.0% | 0.0% |
| `/fr/products` | 33.0 KB | 50.0% | 0.0% |
| `/fr/settings` | 33.9 KB | 50.0% | 0.0% |
| `/fr/team` | 33.4 KB | 50.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-intlayer-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.5 ms | 1.1 ms | 2.5 ms | 0.0 ms |
| `fr` | 1.4 ms | 1.2 ms | 1.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 10.7 ms | 3.0 ms | 1.7 ms |
| `fr` | 10.6 ms | 3.0 ms | 1.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 27.2 KB | 0.0% | 0.0% |
| `/en/about` | 27.2 KB | 0.0% | 0.0% |
| `/en/blog` | 27.2 KB | 0.0% | 0.0% |
| `/en/careers` | 27.2 KB | 0.0% | 0.0% |
| `/en/contact` | 27.2 KB | 0.0% | 0.0% |
| `/en/faq` | 27.2 KB | 0.0% | 0.0% |
| `/en/pricing` | 27.2 KB | 0.0% | 0.0% |
| `/en/products` | 27.2 KB | 0.0% | 0.0% |
| `/en/settings` | 27.2 KB | 0.0% | 0.0% |
| `/en/team` | 27.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 27.2 KB | 0.0% | 0.0% |
| `/fr/about` | 27.2 KB | 0.0% | 0.0% |
| `/fr/blog` | 27.2 KB | 0.0% | 0.0% |
| `/fr/careers` | 27.2 KB | 0.0% | 0.0% |
| `/fr/contact` | 27.2 KB | 0.0% | 0.0% |
| `/fr/faq` | 27.2 KB | 0.0% | 0.0% |
| `/fr/pricing` | 27.2 KB | 0.0% | 0.0% |
| `/fr/products` | 27.2 KB | 0.0% | 0.0% |
| `/fr/settings` | 27.2 KB | 0.0% | 0.0% |
| `/fr/team` | 27.2 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-intlayer-dynamic/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 11.1 ms | — | — |
| `fr` | 8.8 ms | — | — |

</details>

---

## paraglide-js

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.25.1 | 1.6 KB | 3.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 45.6 KB | 15.2% | 5.0% | 7.4 KB | 0.7 ms | — | 13.4 ms | 5.8 ms |
| Dynamic | ✅ | 45.6 KB | 15.2% | 5.0% | 7.4 KB | 0.7 ms | — | 13.4 ms | 5.8 ms |
| Scoped Static | ✅ | 45.6 KB | 15.2% | 5.0% | 7.4 KB | 0.7 ms | — | 13.4 ms | 5.8 ms |
| Scoped Dynamic | ✅ | 45.6 KB | 15.2% | 5.0% | 7.4 KB | 0.7 ms | — | 13.4 ms | 5.8 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 48.3 KB | 51.5% | 0.0% |
| `/en/about` | 40.9 KB | 0.0% | 0.0% |
| `/en/blog` | 36.7 KB | 0.0% | 0.0% |
| `/en/careers` | 37.6 KB | 0.0% | 0.0% |
| `/en/contact` | 32.3 KB | 0.0% | 0.0% |
| `/en/faq` | 119.3 KB | 51.5% | 100.0% |
| `/en/pricing` | 34.3 KB | 0.0% | 0.0% |
| `/en/products` | 34.9 KB | 0.0% | 0.0% |
| `/en/settings` | 36.2 KB | 0.0% | 0.0% |
| `/en/team` | 35.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 48.3 KB | 100.0% | 0.0% |
| `/fr/about` | 40.9 KB | 0.0% | 0.0% |
| `/fr/blog` | 36.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 37.6 KB | 0.0% | 0.0% |
| `/fr/contact` | 32.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 119.3 KB | 100.0% | 0.0% |
| `/fr/pricing` | 34.3 KB | 0.0% | 0.0% |
| `/fr/products` | 34.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 36.2 KB | 0.0% | 0.0% |
| `/fr/team` | 35.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.5 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.7 ms | 0.5 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.0 ms | 6.1 ms | 2.9 ms |
| `fr` | 12.7 ms | 5.5 ms | 2.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 48.3 KB | 51.5% | 0.0% |
| `/en/about` | 40.9 KB | 0.0% | 0.0% |
| `/en/blog` | 36.7 KB | 0.0% | 0.0% |
| `/en/careers` | 37.6 KB | 0.0% | 0.0% |
| `/en/contact` | 32.3 KB | 0.0% | 0.0% |
| `/en/faq` | 119.3 KB | 51.5% | 100.0% |
| `/en/pricing` | 34.3 KB | 0.0% | 0.0% |
| `/en/products` | 34.9 KB | 0.0% | 0.0% |
| `/en/settings` | 36.2 KB | 0.0% | 0.0% |
| `/en/team` | 35.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 48.3 KB | 100.0% | 0.0% |
| `/fr/about` | 40.9 KB | 0.0% | 0.0% |
| `/fr/blog` | 36.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 37.6 KB | 0.0% | 0.0% |
| `/fr/contact` | 32.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 119.3 KB | 100.0% | 0.0% |
| `/fr/pricing` | 34.3 KB | 0.0% | 0.0% |
| `/fr/products` | 34.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 36.2 KB | 0.0% | 0.0% |
| `/fr/team` | 35.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.5 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.7 ms | 0.5 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.0 ms | 6.1 ms | 2.9 ms |
| `fr` | 12.7 ms | 5.5 ms | 2.7 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 48.3 KB | 51.5% | 0.0% |
| `/en/about` | 40.9 KB | 0.0% | 0.0% |
| `/en/blog` | 36.7 KB | 0.0% | 0.0% |
| `/en/careers` | 37.6 KB | 0.0% | 0.0% |
| `/en/contact` | 32.3 KB | 0.0% | 0.0% |
| `/en/faq` | 119.3 KB | 51.5% | 100.0% |
| `/en/pricing` | 34.3 KB | 0.0% | 0.0% |
| `/en/products` | 34.9 KB | 0.0% | 0.0% |
| `/en/settings` | 36.2 KB | 0.0% | 0.0% |
| `/en/team` | 35.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 48.3 KB | 100.0% | 0.0% |
| `/fr/about` | 40.9 KB | 0.0% | 0.0% |
| `/fr/blog` | 36.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 37.6 KB | 0.0% | 0.0% |
| `/fr/contact` | 32.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 119.3 KB | 100.0% | 0.0% |
| `/fr/pricing` | 34.3 KB | 0.0% | 0.0% |
| `/fr/products` | 34.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 36.2 KB | 0.0% | 0.0% |
| `/fr/team` | 35.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.5 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.7 ms | 0.5 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.0 ms | 6.1 ms | 2.9 ms |
| `fr` | 12.7 ms | 5.5 ms | 2.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 48.3 KB | 51.5% | 0.0% |
| `/en/about` | 40.9 KB | 0.0% | 0.0% |
| `/en/blog` | 36.7 KB | 0.0% | 0.0% |
| `/en/careers` | 37.6 KB | 0.0% | 0.0% |
| `/en/contact` | 32.3 KB | 0.0% | 0.0% |
| `/en/faq` | 119.3 KB | 51.5% | 100.0% |
| `/en/pricing` | 34.3 KB | 0.0% | 0.0% |
| `/en/products` | 34.9 KB | 0.0% | 0.0% |
| `/en/settings` | 36.2 KB | 0.0% | 0.0% |
| `/en/team` | 35.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 48.3 KB | 100.0% | 0.0% |
| `/fr/about` | 40.9 KB | 0.0% | 0.0% |
| `/fr/blog` | 36.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 37.6 KB | 0.0% | 0.0% |
| `/fr/contact` | 32.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 119.3 KB | 100.0% | 0.0% |
| `/fr/pricing` | 34.3 KB | 0.0% | 0.0% |
| `/fr/products` | 34.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 36.2 KB | 0.0% | 0.0% |
| `/fr/team` | 35.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-paraglide-js-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.7 ms | 0.5 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.7 ms | 0.5 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.0 ms | 6.1 ms | 2.9 ms |
| `fr` | 12.7 ms | 5.5 ms | 2.7 ms |

</details>

---

## primitives-i18n

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.2.1 | 0.6 KB | 1.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 80.3 KB | 50.0% | 90.0% | 62.1 KB | 0.8 ms | — | 11.6 ms | 4.0 ms |
| Dynamic | ✅ | 80.3 KB | 50.0% | 90.0% | 62.1 KB | 0.8 ms | — | 11.6 ms | 4.0 ms |
| Scoped Static | ✅ | 80.3 KB | 50.0% | 90.0% | 62.1 KB | 0.8 ms | — | 11.6 ms | 4.0 ms |
| Scoped Dynamic | ✅ | 80.3 KB | 50.0% | 90.0% | 62.1 KB | 0.8 ms | — | 11.6 ms | 4.0 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 80.5 KB | 51.4% | 0.0% |
| `/en/about` | 80.0 KB | 51.4% | 100.0% |
| `/en/blog` | 80.4 KB | 51.4% | 100.0% |
| `/en/careers` | 80.5 KB | 51.4% | 100.0% |
| `/en/contact` | 80.2 KB | 51.4% | 100.0% |
| `/en/faq` | 79.7 KB | 51.4% | 100.0% |
| `/en/pricing` | 80.1 KB | 51.4% | 100.0% |
| `/en/products` | 79.8 KB | 51.4% | 100.0% |
| `/en/settings` | 81.6 KB | 51.4% | 100.0% |
| `/en/team` | 79.8 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 80.5 KB | 48.6% | 0.0% |
| `/fr/about` | 80.0 KB | 48.6% | 100.0% |
| `/fr/blog` | 80.4 KB | 48.6% | 100.0% |
| `/fr/careers` | 80.5 KB | 48.6% | 100.0% |
| `/fr/contact` | 80.2 KB | 48.6% | 100.0% |
| `/fr/faq` | 79.7 KB | 48.6% | 100.0% |
| `/fr/pricing` | 80.1 KB | 48.6% | 100.0% |
| `/fr/products` | 79.8 KB | 48.6% | 100.0% |
| `/fr/settings` | 81.6 KB | 48.6% | 100.0% |
| `/fr/team` | 79.8 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-primitives-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.8 ms | 0.6 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.7 ms | 0.6 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.0 ms | 4.2 ms | 1.3 ms |
| `fr` | 11.3 ms | 3.8 ms | 1.3 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 80.5 KB | 51.4% | 0.0% |
| `/en/about` | 80.0 KB | 51.4% | 100.0% |
| `/en/blog` | 80.4 KB | 51.4% | 100.0% |
| `/en/careers` | 80.5 KB | 51.4% | 100.0% |
| `/en/contact` | 80.2 KB | 51.4% | 100.0% |
| `/en/faq` | 79.7 KB | 51.4% | 100.0% |
| `/en/pricing` | 80.1 KB | 51.4% | 100.0% |
| `/en/products` | 79.8 KB | 51.4% | 100.0% |
| `/en/settings` | 81.6 KB | 51.4% | 100.0% |
| `/en/team` | 79.8 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 80.5 KB | 48.6% | 0.0% |
| `/fr/about` | 80.0 KB | 48.6% | 100.0% |
| `/fr/blog` | 80.4 KB | 48.6% | 100.0% |
| `/fr/careers` | 80.5 KB | 48.6% | 100.0% |
| `/fr/contact` | 80.2 KB | 48.6% | 100.0% |
| `/fr/faq` | 79.7 KB | 48.6% | 100.0% |
| `/fr/pricing` | 80.1 KB | 48.6% | 100.0% |
| `/fr/products` | 79.8 KB | 48.6% | 100.0% |
| `/fr/settings` | 81.6 KB | 48.6% | 100.0% |
| `/fr/team` | 79.8 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-primitives-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.8 ms | 0.6 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.7 ms | 0.6 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.0 ms | 4.2 ms | 1.3 ms |
| `fr` | 11.3 ms | 3.8 ms | 1.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 80.5 KB | 51.4% | 0.0% |
| `/en/about` | 80.0 KB | 51.4% | 100.0% |
| `/en/blog` | 80.4 KB | 51.4% | 100.0% |
| `/en/careers` | 80.5 KB | 51.4% | 100.0% |
| `/en/contact` | 80.2 KB | 51.4% | 100.0% |
| `/en/faq` | 79.7 KB | 51.4% | 100.0% |
| `/en/pricing` | 80.1 KB | 51.4% | 100.0% |
| `/en/products` | 79.8 KB | 51.4% | 100.0% |
| `/en/settings` | 81.6 KB | 51.4% | 100.0% |
| `/en/team` | 79.8 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 80.5 KB | 48.6% | 0.0% |
| `/fr/about` | 80.0 KB | 48.6% | 100.0% |
| `/fr/blog` | 80.4 KB | 48.6% | 100.0% |
| `/fr/careers` | 80.5 KB | 48.6% | 100.0% |
| `/fr/contact` | 80.2 KB | 48.6% | 100.0% |
| `/fr/faq` | 79.7 KB | 48.6% | 100.0% |
| `/fr/pricing` | 80.1 KB | 48.6% | 100.0% |
| `/fr/products` | 79.8 KB | 48.6% | 100.0% |
| `/fr/settings` | 81.6 KB | 48.6% | 100.0% |
| `/fr/team` | 79.8 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-primitives-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.8 ms | 0.6 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.7 ms | 0.6 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.0 ms | 4.2 ms | 1.3 ms |
| `fr` | 11.3 ms | 3.8 ms | 1.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 80.5 KB | 51.4% | 0.0% |
| `/en/about` | 80.0 KB | 51.4% | 100.0% |
| `/en/blog` | 80.4 KB | 51.4% | 100.0% |
| `/en/careers` | 80.5 KB | 51.4% | 100.0% |
| `/en/contact` | 80.2 KB | 51.4% | 100.0% |
| `/en/faq` | 79.7 KB | 51.4% | 100.0% |
| `/en/pricing` | 80.1 KB | 51.4% | 100.0% |
| `/en/products` | 79.8 KB | 51.4% | 100.0% |
| `/en/settings` | 81.6 KB | 51.4% | 100.0% |
| `/en/team` | 79.8 KB | 51.4% | 100.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 80.5 KB | 48.6% | 0.0% |
| `/fr/about` | 80.0 KB | 48.6% | 100.0% |
| `/fr/blog` | 80.4 KB | 48.6% | 100.0% |
| `/fr/careers` | 80.5 KB | 48.6% | 100.0% |
| `/fr/contact` | 80.2 KB | 48.6% | 100.0% |
| `/fr/faq` | 79.7 KB | 48.6% | 100.0% |
| `/fr/pricing` | 80.1 KB | 48.6% | 100.0% |
| `/fr/products` | 79.8 KB | 48.6% | 100.0% |
| `/fr/settings` | 81.6 KB | 48.6% | 100.0% |
| `/fr/team` | 79.8 KB | 48.6% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/vite-solid-primitives-i18n-static/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 0.8 ms | 0.6 ms | 1.5 ms | 0.0 ms |
| `fr` | 0.7 ms | 0.6 ms | 1.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.0 ms | 4.2 ms | 1.3 ms |
| `fr` | 11.3 ms | 3.8 ms | 1.3 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 5 |
| Total app entries | 6 |
| With lib size data | 5 |
| With page bundle data | 20 |
| With component data | 20 |
| With reactivity data | 18 |
| With rendering data | 20 |
