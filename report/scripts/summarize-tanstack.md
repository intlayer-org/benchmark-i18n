# TanStack Start (React) — i18n Benchmark Results

_Generated: 2026-04-21_

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
- [gt-react](#gt-react)
- [intlayer](#intlayer)
- [lingo.dev](#lingo-dev)
- [lingui](#lingui)
- [paraglide](#paraglide)
- [react-i18next](#react-i18next)
- [react-intl](#react-intl)
- [tolgee](#tolgee)
- [use-intl](#use-intl)
- [wuchale](#wuchale)

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 111.0 KB | 0.0% | 0.0% | 0.7 KB | 8.1 ms | 1.0 ms | 15.7 ms | 21.6 ms |
| Dynamic | ✅ | 111.0 KB | 0.0% | 0.0% | 0.7 KB | 8.1 ms | 1.0 ms | 15.7 ms | 21.6 ms |
| Scoped Static | ✅ | 111.0 KB | 0.0% | 0.0% | 0.7 KB | 8.1 ms | 1.0 ms | 15.7 ms | 21.6 ms |
| Scoped Dynamic | ✅ | 111.0 KB | 0.0% | 0.0% | 0.7 KB | 8.1 ms | 1.0 ms | 15.7 ms | 21.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 112.3 KB | 0.0% | 0.0% |
| `/en/about` | 111.1 KB | 0.0% | 0.0% |
| `/en/blog` | 110.6 KB | 0.0% | 0.0% |
| `/en/careers` | 111.0 KB | 0.0% | 0.0% |
| `/en/contact` | 110.4 KB | 0.0% | 0.0% |
| `/en/faq` | 110.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 110.5 KB | 0.0% | 0.0% |
| `/en/products` | 110.5 KB | 0.0% | 0.0% |
| `/en/settings` | 111.8 KB | 0.0% | 0.0% |
| `/en/team` | 110.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 112.3 KB | 0.0% | 0.0% |
| `/fr/about` | 111.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 110.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 111.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 110.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 110.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 110.5 KB | 0.0% | 0.0% |
| `/fr/products` | 110.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 111.8 KB | 0.0% | 0.0% |
| `/fr/team` | 110.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 8.5 ms | 4.0 ms | 19.1 ms | 1.1 ms |
| `fr` | 7.7 ms | 5.0 ms | 16.9 ms | 1.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 24.3 ms | 5.9 ms |
| `fr` | 13.5 ms | 18.9 ms | 3.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 112.3 KB | 0.0% | 0.0% |
| `/en/about` | 111.1 KB | 0.0% | 0.0% |
| `/en/blog` | 110.6 KB | 0.0% | 0.0% |
| `/en/careers` | 111.0 KB | 0.0% | 0.0% |
| `/en/contact` | 110.4 KB | 0.0% | 0.0% |
| `/en/faq` | 110.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 110.5 KB | 0.0% | 0.0% |
| `/en/products` | 110.5 KB | 0.0% | 0.0% |
| `/en/settings` | 111.8 KB | 0.0% | 0.0% |
| `/en/team` | 110.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 112.3 KB | 0.0% | 0.0% |
| `/fr/about` | 111.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 110.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 111.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 110.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 110.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 110.5 KB | 0.0% | 0.0% |
| `/fr/products` | 110.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 111.8 KB | 0.0% | 0.0% |
| `/fr/team` | 110.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 8.5 ms | 4.0 ms | 19.1 ms | 1.1 ms |
| `fr` | 7.7 ms | 5.0 ms | 16.9 ms | 1.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 24.3 ms | 5.9 ms |
| `fr` | 13.5 ms | 18.9 ms | 3.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 112.3 KB | 0.0% | 0.0% |
| `/en/about` | 111.1 KB | 0.0% | 0.0% |
| `/en/blog` | 110.6 KB | 0.0% | 0.0% |
| `/en/careers` | 111.0 KB | 0.0% | 0.0% |
| `/en/contact` | 110.4 KB | 0.0% | 0.0% |
| `/en/faq` | 110.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 110.5 KB | 0.0% | 0.0% |
| `/en/products` | 110.5 KB | 0.0% | 0.0% |
| `/en/settings` | 111.8 KB | 0.0% | 0.0% |
| `/en/team` | 110.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 112.3 KB | 0.0% | 0.0% |
| `/fr/about` | 111.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 110.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 111.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 110.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 110.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 110.5 KB | 0.0% | 0.0% |
| `/fr/products` | 110.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 111.8 KB | 0.0% | 0.0% |
| `/fr/team` | 110.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 8.5 ms | 4.0 ms | 19.1 ms | 1.1 ms |
| `fr` | 7.7 ms | 5.0 ms | 16.9 ms | 1.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 24.3 ms | 5.9 ms |
| `fr` | 13.5 ms | 18.9 ms | 3.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 112.3 KB | 0.0% | 0.0% |
| `/en/about` | 111.1 KB | 0.0% | 0.0% |
| `/en/blog` | 110.6 KB | 0.0% | 0.0% |
| `/en/careers` | 111.0 KB | 0.0% | 0.0% |
| `/en/contact` | 110.4 KB | 0.0% | 0.0% |
| `/en/faq` | 110.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 110.5 KB | 0.0% | 0.0% |
| `/en/products` | 110.5 KB | 0.0% | 0.0% |
| `/en/settings` | 111.8 KB | 0.0% | 0.0% |
| `/en/team` | 110.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 112.3 KB | 0.0% | 0.0% |
| `/fr/about` | 111.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 110.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 111.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 110.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 110.9 KB | 0.0% | 0.0% |
| `/fr/pricing` | 110.5 KB | 0.0% | 0.0% |
| `/fr/products` | 110.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 111.8 KB | 0.0% | 0.0% |
| `/fr/team` | 110.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 8.5 ms | 4.0 ms | 19.1 ms | 1.1 ms |
| `fr` | 7.7 ms | 5.0 ms | 16.9 ms | 1.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 24.3 ms | 5.9 ms |
| `fr` | 13.5 ms | 18.9 ms | 3.5 ms |

</details>

---

## gt-react

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| latest | 439.8 KB | 1643.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 597.2 KB | — | 82.2% | — | 3.9 ms | 0.3 ms | 18.2 ms | 42.6 ms |
| Dynamic | ✅ | 597.2 KB | — | 82.2% | — | 3.9 ms | 0.3 ms | 18.2 ms | 42.6 ms |
| Scoped Static | ✅ | 597.2 KB | — | 82.2% | — | 3.9 ms | 0.3 ms | 18.2 ms | 42.6 ms |
| Scoped Dynamic | ✅ | 597.2 KB | — | 82.2% | — | 3.9 ms | 0.3 ms | 18.2 ms | 42.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 597.3 KB | — | 64.4% |
| `/en/about` | 597.2 KB | — | 77.8% |
| `/en/blog` | 597.2 KB | — | 77.6% |
| `/en/careers` | 597.2 KB | — | 75.6% |
| `/en/contact` | 597.2 KB | — | 97.8% |
| `/en/faq` | 597.2 KB | — | 81.8% |
| `/en/pricing` | 597.2 KB | — | 91.8% |
| `/en/products` | 597.2 KB | — | 82.2% |
| `/en/settings` | 597.3 KB | — | 90.0% |
| `/en/team` | 597.2 KB | — | 83.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 597.3 KB | — | 64.4% |
| `/fr/about` | 597.2 KB | — | 77.8% |
| `/fr/blog` | 597.2 KB | — | 77.6% |
| `/fr/careers` | 597.2 KB | — | 75.6% |
| `/fr/contact` | 597.2 KB | — | 97.8% |
| `/fr/faq` | 597.2 KB | — | 81.8% |
| `/fr/pricing` | 597.2 KB | — | 91.8% |
| `/fr/products` | 597.2 KB | — | 82.2% |
| `/fr/settings` | 597.3 KB | — | 90.0% |
| `/fr/team` | 597.2 KB | — | 83.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-gt-react-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 3.9 ms | 2.7 ms | 6.6 ms | 0.3 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.8 ms | 38.6 ms | 5.8 ms |
| `fr` | 15.5 ms | 46.6 ms | 3.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 597.3 KB | — | 64.4% |
| `/en/about` | 597.2 KB | — | 77.8% |
| `/en/blog` | 597.2 KB | — | 77.6% |
| `/en/careers` | 597.2 KB | — | 75.6% |
| `/en/contact` | 597.2 KB | — | 97.8% |
| `/en/faq` | 597.2 KB | — | 81.8% |
| `/en/pricing` | 597.2 KB | — | 91.8% |
| `/en/products` | 597.2 KB | — | 82.2% |
| `/en/settings` | 597.3 KB | — | 90.0% |
| `/en/team` | 597.2 KB | — | 83.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 597.3 KB | — | 64.4% |
| `/fr/about` | 597.2 KB | — | 77.8% |
| `/fr/blog` | 597.2 KB | — | 77.6% |
| `/fr/careers` | 597.2 KB | — | 75.6% |
| `/fr/contact` | 597.2 KB | — | 97.8% |
| `/fr/faq` | 597.2 KB | — | 81.8% |
| `/fr/pricing` | 597.2 KB | — | 91.8% |
| `/fr/products` | 597.2 KB | — | 82.2% |
| `/fr/settings` | 597.3 KB | — | 90.0% |
| `/fr/team` | 597.2 KB | — | 83.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-gt-react-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 3.9 ms | 2.7 ms | 6.6 ms | 0.3 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.8 ms | 38.6 ms | 5.8 ms |
| `fr` | 15.5 ms | 46.6 ms | 3.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 597.3 KB | — | 64.4% |
| `/en/about` | 597.2 KB | — | 77.8% |
| `/en/blog` | 597.2 KB | — | 77.6% |
| `/en/careers` | 597.2 KB | — | 75.6% |
| `/en/contact` | 597.2 KB | — | 97.8% |
| `/en/faq` | 597.2 KB | — | 81.8% |
| `/en/pricing` | 597.2 KB | — | 91.8% |
| `/en/products` | 597.2 KB | — | 82.2% |
| `/en/settings` | 597.3 KB | — | 90.0% |
| `/en/team` | 597.2 KB | — | 83.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 597.3 KB | — | 64.4% |
| `/fr/about` | 597.2 KB | — | 77.8% |
| `/fr/blog` | 597.2 KB | — | 77.6% |
| `/fr/careers` | 597.2 KB | — | 75.6% |
| `/fr/contact` | 597.2 KB | — | 97.8% |
| `/fr/faq` | 597.2 KB | — | 81.8% |
| `/fr/pricing` | 597.2 KB | — | 91.8% |
| `/fr/products` | 597.2 KB | — | 82.2% |
| `/fr/settings` | 597.3 KB | — | 90.0% |
| `/fr/team` | 597.2 KB | — | 83.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-gt-react-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 3.9 ms | 2.7 ms | 6.6 ms | 0.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.8 ms | 38.6 ms | 5.8 ms |
| `fr` | 15.5 ms | 46.6 ms | 3.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 597.3 KB | — | 64.4% |
| `/en/about` | 597.2 KB | — | 77.8% |
| `/en/blog` | 597.2 KB | — | 77.6% |
| `/en/careers` | 597.2 KB | — | 75.6% |
| `/en/contact` | 597.2 KB | — | 97.8% |
| `/en/faq` | 597.2 KB | — | 81.8% |
| `/en/pricing` | 597.2 KB | — | 91.8% |
| `/en/products` | 597.2 KB | — | 82.2% |
| `/en/settings` | 597.3 KB | — | 90.0% |
| `/en/team` | 597.2 KB | — | 83.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 597.3 KB | — | 64.4% |
| `/fr/about` | 597.2 KB | — | 77.8% |
| `/fr/blog` | 597.2 KB | — | 77.6% |
| `/fr/careers` | 597.2 KB | — | 75.6% |
| `/fr/contact` | 597.2 KB | — | 97.8% |
| `/fr/faq` | 597.2 KB | — | 81.8% |
| `/fr/pricing` | 597.2 KB | — | 91.8% |
| `/fr/products` | 597.2 KB | — | 82.2% |
| `/fr/settings` | 597.3 KB | — | 90.0% |
| `/fr/team` | 597.2 KB | — | 83.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-gt-react-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 3.9 ms | 2.7 ms | 6.6 ms | 0.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.8 ms | 38.6 ms | 5.8 ms |
| `fr` | 15.5 ms | 46.6 ms | 3.2 ms |

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.5-canary.0 | 4.7 KB | 12.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 127.8 KB | 50.0% | 0.8% | 7.1 KB | 9.6 ms | 3.4 ms | 18.0 ms | 24.1 ms |
| Dynamic | 🔶 | 118.1 KB | 0.0% | 0.8% | 4.6 KB | — | — | 35.0 ms | 41.7 ms |
| Scoped Static | ✅ | 127.8 KB | 50.0% | 0.8% | 7.1 KB | 9.6 ms | 3.4 ms | 18.0 ms | 24.1 ms |
| Scoped Dynamic | 🔶 | 118.1 KB | 0.0% | 0.8% | 4.6 KB | — | — | 19.0 ms | 23.7 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 140.0 KB | 51.4% | 5.9% |
| `/en/about` | 132.1 KB | 58.3% | 0.0% |
| `/en/blog` | 126.4 KB | 50.0% | 0.0% |
| `/en/careers` | 127.4 KB | 53.8% | 0.0% |
| `/en/contact` | 122.2 KB | 60.0% | 0.0% |
| `/en/faq` | 130.1 KB | 47.6% | 0.0% |
| `/en/pricing` | 123.6 KB | 68.8% | 0.0% |
| `/en/products` | 125.2 KB | 55.0% | 0.0% |
| `/en/settings` | 125.2 KB | 57.1% | 0.0% |
| `/en/team` | 125.7 KB | 52.2% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 140.0 KB | 48.6% | 11.1% |
| `/fr/about` | 132.1 KB | 41.7% | 0.0% |
| `/fr/blog` | 126.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 127.4 KB | 46.2% | 0.0% |
| `/fr/contact` | 122.2 KB | 40.0% | 0.0% |
| `/fr/faq` | 130.1 KB | 52.4% | 0.0% |
| `/fr/pricing` | 123.6 KB | 31.3% | 0.0% |
| `/fr/products` | 125.2 KB | 45.0% | 0.0% |
| `/fr/settings` | 125.2 KB | 42.9% | 0.0% |
| `/fr/team` | 125.7 KB | 47.8% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 11.0 ms | 4.4 ms | 31.9 ms | 2.8 ms |
| `fr` | 8.1 ms | 4.2 ms | 15.1 ms | 4.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.4 ms | 25.8 ms | 7.1 ms |
| `fr` | 16.6 ms | 22.4 ms | 4.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 119.7 KB | 0.0% | 5.9% |
| `/en/about` | 118.0 KB | 0.0% | 0.0% |
| `/en/blog` | 117.6 KB | 0.0% | 0.0% |
| `/en/careers` | 118.3 KB | 0.0% | 0.0% |
| `/en/contact` | 117.3 KB | 0.0% | 0.0% |
| `/en/faq` | 117.8 KB | 0.0% | 0.0% |
| `/en/pricing` | 117.4 KB | 0.0% | 0.0% |
| `/en/products` | 117.4 KB | 0.0% | 0.0% |
| `/en/settings` | 119.6 KB | 0.0% | 0.0% |
| `/en/team` | 117.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 120.1 KB | 0.0% | 11.1% |
| `/fr/about` | 118.3 KB | 0.0% | 0.0% |
| `/fr/blog` | 117.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 118.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 117.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 118.0 KB | 0.0% | 0.0% |
| `/fr/pricing` | 117.6 KB | 0.0% | 0.0% |
| `/fr/products` | 117.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 119.8 KB | 0.0% | 0.0% |
| `/fr/team` | 117.6 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 41.2 ms | 49.4 ms | 1.5 ms |
| `fr` | 28.8 ms | 33.9 ms | 1.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 140.0 KB | 51.4% | 5.9% |
| `/en/about` | 132.1 KB | 58.3% | 0.0% |
| `/en/blog` | 126.4 KB | 50.0% | 0.0% |
| `/en/careers` | 127.4 KB | 53.8% | 0.0% |
| `/en/contact` | 122.2 KB | 60.0% | 0.0% |
| `/en/faq` | 130.1 KB | 47.6% | 0.0% |
| `/en/pricing` | 123.6 KB | 68.8% | 0.0% |
| `/en/products` | 125.2 KB | 55.0% | 0.0% |
| `/en/settings` | 125.2 KB | 57.1% | 0.0% |
| `/en/team` | 125.7 KB | 52.2% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 140.0 KB | 48.6% | 11.1% |
| `/fr/about` | 132.1 KB | 41.7% | 0.0% |
| `/fr/blog` | 126.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 127.4 KB | 46.2% | 0.0% |
| `/fr/contact` | 122.2 KB | 40.0% | 0.0% |
| `/fr/faq` | 130.1 KB | 52.4% | 0.0% |
| `/fr/pricing` | 123.6 KB | 31.3% | 0.0% |
| `/fr/products` | 125.2 KB | 45.0% | 0.0% |
| `/fr/settings` | 125.2 KB | 42.9% | 0.0% |
| `/fr/team` | 125.7 KB | 47.8% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 11.0 ms | 4.4 ms | 31.9 ms | 2.8 ms |
| `fr` | 8.1 ms | 4.2 ms | 15.1 ms | 4.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.4 ms | 25.8 ms | 7.1 ms |
| `fr` | 16.6 ms | 22.4 ms | 4.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 119.7 KB | 0.0% | 5.9% |
| `/en/about` | 118.0 KB | 0.0% | 0.0% |
| `/en/blog` | 117.6 KB | 0.0% | 0.0% |
| `/en/careers` | 118.3 KB | 0.0% | 0.0% |
| `/en/contact` | 117.3 KB | 0.0% | 0.0% |
| `/en/faq` | 117.8 KB | 0.0% | 0.0% |
| `/en/pricing` | 117.5 KB | 0.0% | 0.0% |
| `/en/products` | 117.4 KB | 0.0% | 0.0% |
| `/en/settings` | 119.6 KB | 0.0% | 0.0% |
| `/en/team` | 117.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 120.1 KB | 0.0% | 11.1% |
| `/fr/about` | 118.3 KB | 0.0% | 0.0% |
| `/fr/blog` | 117.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 118.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 117.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 118.0 KB | 0.0% | 0.0% |
| `/fr/pricing` | 117.6 KB | 0.0% | 0.0% |
| `/fr/products` | 117.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 119.8 KB | 0.0% | 0.0% |
| `/fr/team` | 117.6 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.6 ms | 22.2 ms | 1.3 ms |
| `fr` | 20.3 ms | 25.1 ms | 1.4 ms |

</details>

---

## lingo.dev

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 0.133.9 | 7.6 KB | 19.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 122.6 KB | — | 0.0% | — | — | — | 17.1 ms | 43.6 ms |
| Dynamic | 🔶 | 122.6 KB | — | 0.0% | — | — | — | 17.1 ms | 43.6 ms |
| Scoped Static | 🔶 | 122.6 KB | — | 0.0% | — | — | — | 17.1 ms | 43.6 ms |
| Scoped Dynamic | 🔶 | 122.6 KB | — | 0.0% | — | — | — | 17.1 ms | 43.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 124.2 KB | — | 0.0% |
| `/en/about` | 122.5 KB | — | 0.0% |
| `/en/blog` | 122.3 KB | — | 0.0% |
| `/en/careers` | 122.7 KB | — | 0.0% |
| `/en/contact` | 121.9 KB | — | 0.0% |
| `/en/faq` | 122.4 KB | — | 0.0% |
| `/en/pricing` | 122.1 KB | — | 0.0% |
| `/en/products` | 122.0 KB | — | 0.0% |
| `/en/settings` | 123.5 KB | — | 0.0% |
| `/en/team` | 122.2 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 124.2 KB | — | 0.0% |
| `/fr/about` | 122.5 KB | — | 0.0% |
| `/fr/blog` | 122.3 KB | — | 0.0% |
| `/fr/careers` | 122.7 KB | — | 0.0% |
| `/fr/contact` | 121.9 KB | — | 0.0% |
| `/fr/faq` | 122.4 KB | — | 0.0% |
| `/fr/pricing` | 122.1 KB | — | 0.0% |
| `/fr/products` | 122.0 KB | — | 0.0% |
| `/fr/settings` | 123.5 KB | — | 0.0% |
| `/fr/team` | 122.2 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.0 ms | 64.3 ms | 5.2 ms |
| `fr` | 19.2 ms | 22.8 ms | 4.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 124.2 KB | — | 0.0% |
| `/en/about` | 122.5 KB | — | 0.0% |
| `/en/blog` | 122.3 KB | — | 0.0% |
| `/en/careers` | 122.7 KB | — | 0.0% |
| `/en/contact` | 121.9 KB | — | 0.0% |
| `/en/faq` | 122.4 KB | — | 0.0% |
| `/en/pricing` | 122.1 KB | — | 0.0% |
| `/en/products` | 122.0 KB | — | 0.0% |
| `/en/settings` | 123.5 KB | — | 0.0% |
| `/en/team` | 122.2 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 124.2 KB | — | 0.0% |
| `/fr/about` | 122.5 KB | — | 0.0% |
| `/fr/blog` | 122.3 KB | — | 0.0% |
| `/fr/careers` | 122.7 KB | — | 0.0% |
| `/fr/contact` | 121.9 KB | — | 0.0% |
| `/fr/faq` | 122.4 KB | — | 0.0% |
| `/fr/pricing` | 122.1 KB | — | 0.0% |
| `/fr/products` | 122.0 KB | — | 0.0% |
| `/fr/settings` | 123.5 KB | — | 0.0% |
| `/fr/team` | 122.2 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.0 ms | 64.3 ms | 5.2 ms |
| `fr` | 19.2 ms | 22.8 ms | 4.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 124.2 KB | — | 0.0% |
| `/en/about` | 122.5 KB | — | 0.0% |
| `/en/blog` | 122.3 KB | — | 0.0% |
| `/en/careers` | 122.7 KB | — | 0.0% |
| `/en/contact` | 121.9 KB | — | 0.0% |
| `/en/faq` | 122.4 KB | — | 0.0% |
| `/en/pricing` | 122.1 KB | — | 0.0% |
| `/en/products` | 122.0 KB | — | 0.0% |
| `/en/settings` | 123.5 KB | — | 0.0% |
| `/en/team` | 122.2 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 124.2 KB | — | 0.0% |
| `/fr/about` | 122.5 KB | — | 0.0% |
| `/fr/blog` | 122.3 KB | — | 0.0% |
| `/fr/careers` | 122.7 KB | — | 0.0% |
| `/fr/contact` | 121.9 KB | — | 0.0% |
| `/fr/faq` | 122.4 KB | — | 0.0% |
| `/fr/pricing` | 122.1 KB | — | 0.0% |
| `/fr/products` | 122.0 KB | — | 0.0% |
| `/fr/settings` | 123.5 KB | — | 0.0% |
| `/fr/team` | 122.2 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.0 ms | 64.3 ms | 5.2 ms |
| `fr` | 19.2 ms | 22.8 ms | 4.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 124.2 KB | — | 0.0% |
| `/en/about` | 122.5 KB | — | 0.0% |
| `/en/blog` | 122.3 KB | — | 0.0% |
| `/en/careers` | 122.7 KB | — | 0.0% |
| `/en/contact` | 121.9 KB | — | 0.0% |
| `/en/faq` | 122.4 KB | — | 0.0% |
| `/en/pricing` | 122.1 KB | — | 0.0% |
| `/en/products` | 122.0 KB | — | 0.0% |
| `/en/settings` | 123.5 KB | — | 0.0% |
| `/en/team` | 122.2 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 124.2 KB | — | 0.0% |
| `/fr/about` | 122.5 KB | — | 0.0% |
| `/fr/blog` | 122.3 KB | — | 0.0% |
| `/fr/careers` | 122.7 KB | — | 0.0% |
| `/fr/contact` | 121.9 KB | — | 0.0% |
| `/fr/faq` | 122.4 KB | — | 0.0% |
| `/fr/pricing` | 122.1 KB | — | 0.0% |
| `/fr/products` | 122.0 KB | — | 0.0% |
| `/fr/settings` | 123.5 KB | — | 0.0% |
| `/fr/team` | 122.2 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.0 ms | 64.3 ms | 5.2 ms |
| `fr` | 19.2 ms | 22.8 ms | 4.5 ms |

</details>

---

## lingui

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 5.3.0 | 10.0 KB | 32.4 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 154.6 KB | 50.0% | 90.0% | 51.7 KB | 7.5 ms | 0.5 ms | 23.9 ms | 43.2 ms |
| Dynamic | 🔶 | 119.5 KB | 9.3% | 0.0% | 84.3 KB | 24.0 ms | 4.8 ms | 22.2 ms | 29.0 ms |
| Scoped Static | 🔶 | 120.8 KB | 4.0% | 0.0% | 147.9 KB | — | — | 21.0 ms | 33.9 ms |
| Scoped Dynamic | 🔶 | 120.2 KB | 8.6% | 0.0% | 83.7 KB | 42.1 ms | 4.5 ms | 21.9 ms | 32.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 156.5 KB | 52.6% | 80.0% |
| `/en/about` | 154.7 KB | 52.6% | 87.5% |
| `/en/blog` | 154.2 KB | 52.6% | 83.8% |
| `/en/careers` | 154.6 KB | 52.6% | 95.0% |
| `/en/contact` | 154.1 KB | 52.6% | 96.3% |
| `/en/faq` | 154.8 KB | 52.6% | 87.5% |
| `/en/pricing` | 154.5 KB | 52.6% | 95.0% |
| `/en/products` | 154.4 KB | 52.6% | 90.0% |
| `/en/settings` | 153.7 KB | 52.6% | 97.5% |
| `/en/team` | 154.4 KB | 52.6% | 87.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 156.5 KB | 47.4% | 81.2% |
| `/fr/about` | 154.7 KB | 47.4% | 83.5% |
| `/fr/blog` | 154.2 KB | 47.4% | 84.7% |
| `/fr/careers` | 154.6 KB | 47.4% | 95.3% |
| `/fr/contact` | 154.1 KB | 47.4% | 95.3% |
| `/fr/faq` | 154.8 KB | 47.4% | 88.2% |
| `/fr/pricing` | 154.5 KB | 47.4% | 95.3% |
| `/fr/products` | 154.4 KB | 47.4% | 90.6% |
| `/fr/settings` | 153.7 KB | 47.4% | 97.6% |
| `/fr/team` | 154.4 KB | 47.4% | 88.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 8.2 ms | 2.6 ms | 24.5 ms | 0.7 ms |
| `fr` | 6.9 ms | 4.6 ms | 10.3 ms | 0.3 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 24.9 ms | 61.3 ms | 6.4 ms |
| `fr` | 22.8 ms | 25.2 ms | 5.4 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 120.1 KB | 0.0% | 0.0% |
| `/en/about` | 119.0 KB | 0.0% | 0.0% |
| `/en/blog` | 119.0 KB | 0.0% | 0.0% |
| `/en/careers` | 119.8 KB | 0.0% | 0.0% |
| `/en/contact` | 119.0 KB | 0.0% | 0.0% |
| `/en/faq` | 119.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 119.3 KB | 0.0% | 0.0% |
| `/en/products` | 119.2 KB | 0.0% | 0.0% |
| `/en/settings` | 120.7 KB | 0.0% | 0.0% |
| `/en/team` | 119.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 120.1 KB | 0.0% | 0.0% |
| `/fr/about` | 119.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 119.0 KB | 0.0% | 0.0% |
| `/fr/careers` | 119.8 KB | 37.5% | 0.0% |
| `/fr/contact` | 119.0 KB | 0.0% | 0.0% |
| `/fr/faq` | 119.7 KB | 45.5% | 0.0% |
| `/fr/pricing` | 119.3 KB | 7.1% | 0.0% |
| `/fr/products` | 119.2 KB | 20.0% | 0.0% |
| `/fr/settings` | 120.7 KB | 33.3% | 0.0% |
| `/fr/team` | 119.4 KB | 41.7% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 31.8 ms | 20.1 ms | 46.3 ms | 4.8 ms |
| `fr` | 16.2 ms | 5.4 ms | 41.6 ms | 4.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 23.9 ms | 31.6 ms | 4.4 ms |
| `fr` | 20.4 ms | 26.5 ms | 4.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 121.4 KB | 0.0% | 0.0% |
| `/en/about` | 120.3 KB | 0.0% | 0.0% |
| `/en/blog` | 120.4 KB | 0.0% | 0.0% |
| `/en/careers` | 120.8 KB | 0.0% | 0.0% |
| `/en/contact` | 120.3 KB | 0.0% | 0.0% |
| `/en/faq` | 121.0 KB | 0.0% | 0.0% |
| `/en/pricing` | 120.6 KB | 0.0% | 0.0% |
| `/en/products` | 120.5 KB | 0.0% | 0.0% |
| `/en/settings` | 121.6 KB | 0.0% | 0.0% |
| `/en/team` | 120.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 121.4 KB | 0.0% | 0.0% |
| `/fr/about` | 120.3 KB | 0.0% | 0.0% |
| `/fr/blog` | 120.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 120.8 KB | 25.0% | 0.0% |
| `/fr/contact` | 120.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 121.0 KB | 42.1% | 0.0% |
| `/fr/pricing` | 120.6 KB | 13.3% | 0.0% |
| `/fr/products` | 120.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 121.6 KB | 0.0% | 0.0% |
| `/fr/team` | 120.6 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 22.2 ms | 38.3 ms | 7.8 ms |
| `fr` | 19.7 ms | 29.5 ms | 5.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 120.8 KB | 0.0% | 0.0% |
| `/en/about` | 119.7 KB | 0.0% | 0.0% |
| `/en/blog` | 119.7 KB | 0.0% | 0.0% |
| `/en/careers` | 120.2 KB | 0.0% | 0.0% |
| `/en/contact` | 119.7 KB | 0.0% | 0.0% |
| `/en/faq` | 120.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 120.0 KB | 0.0% | 0.0% |
| `/en/products` | 120.0 KB | 0.0% | 0.0% |
| `/en/settings` | 121.4 KB | 0.0% | 0.0% |
| `/en/team` | 120.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 120.8 KB | 0.0% | 0.0% |
| `/fr/about` | 119.7 KB | 0.0% | 0.0% |
| `/fr/blog` | 119.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 120.2 KB | 25.0% | 0.0% |
| `/fr/contact` | 119.7 KB | 0.0% | 0.0% |
| `/fr/faq` | 120.5 KB | 45.5% | 0.0% |
| `/fr/pricing` | 120.0 KB | 7.1% | 0.0% |
| `/fr/products` | 120.0 KB | 20.0% | 0.0% |
| `/fr/settings` | 121.4 KB | 33.3% | 0.0% |
| `/fr/team` | 120.1 KB | 41.7% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 32.9 ms | 13.3 ms | 80.7 ms | 4.3 ms |
| `fr` | 51.3 ms | 28.0 ms | 84.4 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.7 ms | 33.9 ms | 7.2 ms |
| `fr` | 23.1 ms | 31.8 ms | 5.3 ms |

</details>

---

## paraglide

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.15.1 | 1.4 KB | 3.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 192.2 KB | 50.0% | 89.8% | 5.1 KB | 7.4 ms | 3.6 ms | 15.0 ms | 23.7 ms |
| Dynamic | ✅ | 192.2 KB | 50.0% | 89.8% | 5.1 KB | 7.4 ms | 3.6 ms | 15.0 ms | 23.7 ms |
| Scoped Static | ✅ | 192.2 KB | 50.0% | 89.8% | 5.1 KB | 7.4 ms | 3.6 ms | 15.0 ms | 23.7 ms |
| Scoped Dynamic | ✅ | 192.2 KB | 50.0% | 89.8% | 5.1 KB | 7.4 ms | 3.6 ms | 15.0 ms | 23.7 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 192.9 KB | 54.1% | 81.6% |
| `/en/about` | 191.9 KB | 54.1% | 88.5% |
| `/en/blog` | 191.9 KB | 54.1% | 85.1% |
| `/en/careers` | 192.4 KB | 54.1% | 87.5% |
| `/en/contact` | 192.1 KB | 54.1% | 98.9% |
| `/en/faq` | 191.8 KB | 54.1% | 88.5% |
| `/en/pricing` | 192.1 KB | 53.8% | 95.5% |
| `/en/products` | 191.9 KB | 54.1% | 90.8% |
| `/en/settings` | 193.4 KB | 54.1% | 93.1% |
| `/en/team` | 191.9 KB | 54.1% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 192.9 KB | 45.9% | 84.5% |
| `/fr/about` | 191.9 KB | 45.9% | 86.4% |
| `/fr/blog` | 191.9 KB | 45.9% | 87.4% |
| `/fr/careers` | 192.4 KB | 45.9% | 87.5% |
| `/fr/contact` | 192.1 KB | 45.9% | 98.1% |
| `/fr/faq` | 191.8 KB | 45.9% | 91.3% |
| `/fr/pricing` | 192.1 KB | 45.6% | 90.4% |
| `/fr/products` | 191.9 KB | 45.9% | 90.3% |
| `/fr/settings` | 193.4 KB | 45.9% | 93.2% |
| `/fr/team` | 191.9 KB | 45.9% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-paraglide-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.5 ms | 3.4 ms | 22.0 ms | 3.5 ms |
| `fr` | 7.4 ms | 3.5 ms | 21.7 ms | 3.6 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 25.3 ms | 7.5 ms |
| `fr` | 14.4 ms | 22.1 ms | 4.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 192.9 KB | 54.1% | 81.6% |
| `/en/about` | 191.9 KB | 54.1% | 88.5% |
| `/en/blog` | 191.9 KB | 54.1% | 85.1% |
| `/en/careers` | 192.4 KB | 54.1% | 87.5% |
| `/en/contact` | 192.1 KB | 54.1% | 98.9% |
| `/en/faq` | 191.8 KB | 54.1% | 88.5% |
| `/en/pricing` | 192.1 KB | 53.8% | 95.5% |
| `/en/products` | 191.9 KB | 54.1% | 90.8% |
| `/en/settings` | 193.4 KB | 54.1% | 93.1% |
| `/en/team` | 191.9 KB | 54.1% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 192.9 KB | 45.9% | 84.5% |
| `/fr/about` | 191.9 KB | 45.9% | 86.4% |
| `/fr/blog` | 191.9 KB | 45.9% | 87.4% |
| `/fr/careers` | 192.4 KB | 45.9% | 87.5% |
| `/fr/contact` | 192.1 KB | 45.9% | 98.1% |
| `/fr/faq` | 191.8 KB | 45.9% | 91.3% |
| `/fr/pricing` | 192.1 KB | 45.6% | 90.4% |
| `/fr/products` | 191.9 KB | 45.9% | 90.3% |
| `/fr/settings` | 193.4 KB | 45.9% | 93.2% |
| `/fr/team` | 191.9 KB | 45.9% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-paraglide-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.5 ms | 3.4 ms | 22.0 ms | 3.5 ms |
| `fr` | 7.4 ms | 3.5 ms | 21.7 ms | 3.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 25.3 ms | 7.5 ms |
| `fr` | 14.4 ms | 22.1 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 192.9 KB | 54.1% | 81.6% |
| `/en/about` | 191.9 KB | 54.1% | 88.5% |
| `/en/blog` | 191.9 KB | 54.1% | 85.1% |
| `/en/careers` | 192.4 KB | 54.1% | 87.5% |
| `/en/contact` | 192.1 KB | 54.1% | 98.9% |
| `/en/faq` | 191.8 KB | 54.1% | 88.5% |
| `/en/pricing` | 192.1 KB | 53.8% | 95.5% |
| `/en/products` | 191.9 KB | 54.1% | 90.8% |
| `/en/settings` | 193.4 KB | 54.1% | 93.1% |
| `/en/team` | 191.9 KB | 54.1% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 192.9 KB | 45.9% | 84.5% |
| `/fr/about` | 191.9 KB | 45.9% | 86.4% |
| `/fr/blog` | 191.9 KB | 45.9% | 87.4% |
| `/fr/careers` | 192.4 KB | 45.9% | 87.5% |
| `/fr/contact` | 192.1 KB | 45.9% | 98.1% |
| `/fr/faq` | 191.8 KB | 45.9% | 91.3% |
| `/fr/pricing` | 192.1 KB | 45.6% | 90.4% |
| `/fr/products` | 191.9 KB | 45.9% | 90.3% |
| `/fr/settings` | 193.4 KB | 45.9% | 93.2% |
| `/fr/team` | 191.9 KB | 45.9% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-paraglide-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.5 ms | 3.4 ms | 22.0 ms | 3.5 ms |
| `fr` | 7.4 ms | 3.5 ms | 21.7 ms | 3.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 25.3 ms | 7.5 ms |
| `fr` | 14.4 ms | 22.1 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 192.9 KB | 54.1% | 81.6% |
| `/en/about` | 191.9 KB | 54.1% | 88.5% |
| `/en/blog` | 191.9 KB | 54.1% | 85.1% |
| `/en/careers` | 192.4 KB | 54.1% | 87.5% |
| `/en/contact` | 192.1 KB | 54.1% | 98.9% |
| `/en/faq` | 191.8 KB | 54.1% | 88.5% |
| `/en/pricing` | 192.1 KB | 53.8% | 95.5% |
| `/en/products` | 191.9 KB | 54.1% | 90.8% |
| `/en/settings` | 193.4 KB | 54.1% | 93.1% |
| `/en/team` | 191.9 KB | 54.1% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 192.9 KB | 45.9% | 84.5% |
| `/fr/about` | 191.9 KB | 45.9% | 86.4% |
| `/fr/blog` | 191.9 KB | 45.9% | 87.4% |
| `/fr/careers` | 192.4 KB | 45.9% | 87.5% |
| `/fr/contact` | 192.1 KB | 45.9% | 98.1% |
| `/fr/faq` | 191.8 KB | 45.9% | 91.3% |
| `/fr/pricing` | 192.1 KB | 45.6% | 90.4% |
| `/fr/products` | 191.9 KB | 45.9% | 90.3% |
| `/fr/settings` | 193.4 KB | 45.9% | 93.2% |
| `/fr/team` | 191.9 KB | 45.9% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-paraglide-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.5 ms | 3.4 ms | 22.0 ms | 3.5 ms |
| `fr` | 7.4 ms | 3.5 ms | 21.7 ms | 3.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 25.3 ms | 7.5 ms |
| `fr` | 14.4 ms | 22.1 ms | 4.8 ms |

</details>

---

## react-i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 17.0.2 | 17.3 KB | 59.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 180.3 KB | 50.0% | 89.8% | 24.3 KB | 21.1 ms | 6.4 ms | 26.2 ms | 85.1 ms |
| Dynamic | 🔶 | 136.4 KB | 23.1% | 89.8% | 24.8 KB | 123.1 ms | 4.0 ms | 15.5 ms | 32.9 ms |
| Scoped Static | 🔶 | 184.2 KB | 50.7% | 89.8% | 25.3 KB | 185.1 ms | 8.3 ms | 16.8 ms | 25.2 ms |
| Scoped Dynamic | 🔶 | 127.8 KB | 0.0% | 0.0% | 17.7 KB | 17.6 ms | 4.6 ms | 18.1 ms | 25.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 181.1 KB | 53.8% | 81.6% |
| `/en/about` | 180.1 KB | 53.8% | 86.2% |
| `/en/blog` | 180.1 KB | 53.8% | 85.1% |
| `/en/careers` | 180.5 KB | 53.8% | 89.7% |
| `/en/contact` | 180.1 KB | 53.8% | 97.7% |
| `/en/faq` | 179.9 KB | 53.8% | 92.0% |
| `/en/pricing` | 180.2 KB | 53.8% | 88.5% |
| `/en/products` | 180.0 KB | 53.8% | 94.3% |
| `/en/settings` | 181.5 KB | 53.8% | 94.3% |
| `/en/team` | 180.0 KB | 53.8% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 181.1 KB | 46.2% | 84.3% |
| `/fr/about` | 180.1 KB | 46.2% | 82.4% |
| `/fr/blog` | 180.1 KB | 46.2% | 87.3% |
| `/fr/careers` | 180.5 KB | 46.2% | 90.2% |
| `/fr/contact` | 180.1 KB | 46.2% | 98.1% |
| `/fr/faq` | 179.9 KB | 46.2% | 94.1% |
| `/fr/pricing` | 180.2 KB | 46.2% | 87.3% |
| `/fr/products` | 180.0 KB | 46.2% | 92.2% |
| `/fr/settings` | 181.5 KB | 46.2% | 93.2% |
| `/fr/team` | 180.0 KB | 46.2% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 21.1 ms | 10.6 ms | 53.7 ms | 6.4 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.3 ms | 125.1 ms | 7.8 ms |
| `fr` | 31.2 ms | 45.0 ms | 5.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 133.3 KB | 0.0% | 80.7% |
| `/en/about` | 132.3 KB | 0.0% | 85.5% |
| `/en/blog` | 132.3 KB | 0.0% | 84.3% |
| `/en/careers` | 132.7 KB | 0.0% | 89.2% |
| `/en/contact` | 132.3 KB | 0.0% | 97.6% |
| `/en/faq` | 132.1 KB | 0.0% | 91.6% |
| `/en/pricing` | 132.4 KB | 0.0% | 88.0% |
| `/en/products` | 132.2 KB | 0.0% | 94.0% |
| `/en/settings` | 133.7 KB | 1.1% | 100.0% |
| `/en/team` | 132.2 KB | 0.0% | 88.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 141.0 KB | 46.2% | 84.3% |
| `/fr/about` | 140.0 KB | 46.2% | 82.4% |
| `/fr/blog` | 139.9 KB | 46.2% | 87.3% |
| `/fr/careers` | 140.3 KB | 46.2% | 90.2% |
| `/fr/contact` | 139.9 KB | 46.2% | 98.1% |
| `/fr/faq` | 139.7 KB | 46.2% | 94.1% |
| `/fr/pricing` | 140.0 KB | 46.2% | 87.3% |
| `/fr/products` | 139.8 KB | 46.2% | 92.2% |
| `/fr/settings` | 141.4 KB | 46.2% | 93.2% |
| `/fr/team` | 139.9 KB | 46.2% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 220.3 ms | 201.2 ms | 248.0 ms | 3.8 ms |
| `fr` | 25.9 ms | 10.1 ms | 84.5 ms | 4.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.1 ms | 38.2 ms | 7.1 ms |
| `fr` | 14.9 ms | 27.7 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 185.0 KB | 55.9% | 78.7% |
| `/en/about` | 183.9 KB | 55.9% | 84.0% |
| `/en/blog` | 183.9 KB | 55.9% | 82.7% |
| `/en/careers` | 184.2 KB | 55.9% | 94.7% |
| `/en/contact` | 183.9 KB | 55.9% | 97.4% |
| `/en/faq` | 183.7 KB | 55.9% | 90.7% |
| `/en/pricing` | 184.0 KB | 55.9% | 96.0% |
| `/en/products` | 183.7 KB | 55.9% | 88.0% |
| `/en/settings` | 185.4 KB | 56.1% | 100.0% |
| `/en/team` | 183.9 KB | 55.9% | 86.7% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 185.0 KB | 45.4% | 83.2% |
| `/fr/about` | 183.9 KB | 45.4% | 81.1% |
| `/fr/blog` | 183.9 KB | 45.4% | 86.3% |
| `/fr/careers` | 184.2 KB | 45.4% | 94.7% |
| `/fr/contact` | 183.9 KB | 45.4% | 97.9% |
| `/fr/faq` | 183.7 KB | 45.4% | 93.7% |
| `/fr/pricing` | 184.0 KB | 45.4% | 91.6% |
| `/fr/products` | 183.7 KB | 45.4% | 88.4% |
| `/fr/settings` | 185.4 KB | 45.4% | 92.7% |
| `/fr/team` | 183.9 KB | 45.4% | 88.4% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 224.9 ms | 205.9 ms | 239.2 ms | 13.0 ms |
| `fr` | 145.4 ms | 111.7 ms | 212.7 ms | 3.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.1 ms | 25.0 ms | 4.7 ms |
| `fr` | 16.6 ms | 25.3 ms | 4.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 128.6 KB | 0.0% | 0.0% |
| `/en/about` | 127.6 KB | 0.0% | 0.0% |
| `/en/blog` | 127.6 KB | 0.0% | 0.0% |
| `/en/careers` | 127.8 KB | 0.0% | 0.0% |
| `/en/contact` | 127.6 KB | 0.0% | 0.0% |
| `/en/faq` | 127.4 KB | 0.0% | 0.0% |
| `/en/pricing` | 127.7 KB | 0.0% | 0.0% |
| `/en/products` | 127.4 KB | 0.0% | 0.0% |
| `/en/settings` | 129.0 KB | 0.0% | 0.0% |
| `/en/team` | 127.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 128.6 KB | 0.0% | 0.0% |
| `/fr/about` | 127.6 KB | 0.0% | 0.0% |
| `/fr/blog` | 127.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 127.8 KB | 0.0% | 0.0% |
| `/fr/contact` | 127.6 KB | 0.0% | 0.0% |
| `/fr/faq` | 127.4 KB | 0.0% | 0.0% |
| `/fr/pricing` | 127.7 KB | 0.0% | 0.0% |
| `/fr/products` | 127.4 KB | 0.0% | 0.0% |
| `/fr/settings` | 129.0 KB | 0.0% | 0.0% |
| `/fr/team` | 127.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.9 ms | 11.8 ms | 35.2 ms | 4.4 ms |
| `fr` | 18.3 ms | 12.5 ms | 39.5 ms | 4.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.4 ms | 26.3 ms | 5.6 ms |
| `fr` | 16.8 ms | 25.6 ms | 5.0 ms |

</details>

---

## react-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 10.1.1 | 14.4 KB | 59.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 189.7 KB | 50.0% | 89.7% | 22.6 KB | 6.9 ms | 2.0 ms | 18.7 ms | 24.9 ms |
| Dynamic | 🔶 | 124.5 KB | 0.0% | 89.7% | 22.8 KB | 11.6 ms | 1.5 ms | 18.9 ms | 24.9 ms |
| Scoped Static | 🔶 | 131.0 KB | 0.0% | 0.0% | 23.9 KB | — | — | 17.1 ms | 32.2 ms |
| Scoped Dynamic | 🔶 | 131.0 KB | 0.0% | 0.0% | 23.9 KB | — | — | 20.9 ms | 33.4 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 190.3 KB | 54.1% | 81.4% |
| `/en/about` | 189.4 KB | 54.1% | 88.4% |
| `/en/blog` | 189.4 KB | 54.1% | 84.9% |
| `/en/careers` | 189.9 KB | 54.1% | 86.4% |
| `/en/contact` | 189.4 KB | 54.1% | 98.8% |
| `/en/faq` | 189.3 KB | 54.1% | 88.4% |
| `/en/pricing` | 189.5 KB | 53.8% | 95.4% |
| `/en/products` | 189.3 KB | 54.1% | 90.7% |
| `/en/settings` | 190.8 KB | 54.1% | 94.2% |
| `/en/team` | 189.3 KB | 54.1% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 190.3 KB | 45.9% | 84.3% |
| `/fr/about` | 189.4 KB | 45.9% | 86.3% |
| `/fr/blog` | 189.4 KB | 45.9% | 87.3% |
| `/fr/careers` | 189.9 KB | 45.9% | 86.5% |
| `/fr/contact` | 189.4 KB | 45.9% | 98.0% |
| `/fr/faq` | 189.3 KB | 45.9% | 91.2% |
| `/fr/pricing` | 189.5 KB | 45.6% | 91.3% |
| `/fr/products` | 189.3 KB | 45.9% | 90.2% |
| `/fr/settings` | 190.8 KB | 45.9% | 93.1% |
| `/fr/team` | 189.3 KB | 45.9% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-react-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 6.7 ms | 3.4 ms | 15.9 ms | 1.8 ms |
| `fr` | 7.1 ms | 3.4 ms | 18.5 ms | 2.2 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.1 ms | 28.9 ms | 8.9 ms |
| `fr` | 17.2 ms | 20.9 ms | 4.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 125.1 KB | 0.0% | 81.4% |
| `/en/about` | 124.2 KB | 0.0% | 88.4% |
| `/en/blog` | 124.2 KB | 0.0% | 84.9% |
| `/en/careers` | 124.7 KB | 0.0% | 86.4% |
| `/en/contact` | 124.2 KB | 0.0% | 98.8% |
| `/en/faq` | 124.1 KB | 0.0% | 88.4% |
| `/en/pricing` | 124.3 KB | 0.0% | 95.4% |
| `/en/products` | 124.2 KB | 0.0% | 90.7% |
| `/en/settings` | 125.7 KB | 0.0% | 94.2% |
| `/en/team` | 124.2 KB | 0.0% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 125.1 KB | 0.0% | 84.3% |
| `/fr/about` | 124.2 KB | 0.0% | 86.3% |
| `/fr/blog` | 124.2 KB | 0.0% | 87.3% |
| `/fr/careers` | 124.7 KB | 0.0% | 86.5% |
| `/fr/contact` | 124.2 KB | 0.0% | 98.0% |
| `/fr/faq` | 124.1 KB | 0.0% | 91.2% |
| `/fr/pricing` | 124.3 KB | 0.0% | 91.3% |
| `/fr/products` | 124.2 KB | 0.0% | 90.2% |
| `/fr/settings` | 125.7 KB | 0.0% | 93.1% |
| `/fr/team` | 124.2 KB | 0.0% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-react-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 13.3 ms | 5.5 ms | 39.7 ms | 1.5 ms |
| `fr` | 9.8 ms | 5.4 ms | 23.3 ms | 1.4 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.9 ms | 28.2 ms | 9.1 ms |
| `fr` | 17.9 ms | 21.5 ms | 5.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 131.7 KB | 0.0% | 0.0% |
| `/en/about` | 130.7 KB | 0.0% | 0.0% |
| `/en/blog` | 130.8 KB | 0.0% | 0.0% |
| `/en/careers` | 131.3 KB | 0.0% | 0.0% |
| `/en/contact` | 130.7 KB | 0.0% | 0.0% |
| `/en/faq` | 130.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 130.9 KB | 0.0% | 0.0% |
| `/en/products` | 130.7 KB | 0.0% | 0.0% |
| `/en/settings` | 132.2 KB | 0.0% | 0.0% |
| `/en/team` | 130.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 131.7 KB | 0.0% | 0.0% |
| `/fr/about` | 130.7 KB | 0.0% | 0.0% |
| `/fr/blog` | 130.8 KB | 0.0% | 0.0% |
| `/fr/careers` | 131.3 KB | 0.0% | 0.0% |
| `/fr/contact` | 130.7 KB | 0.0% | 0.0% |
| `/fr/faq` | 130.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 130.9 KB | 0.0% | 0.0% |
| `/fr/products` | 130.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 132.2 KB | 0.0% | 0.0% |
| `/fr/team` | 130.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-react-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.1 ms | 38.0 ms | 5.1 ms |
| `fr` | 15.1 ms | 26.4 ms | 4.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 131.7 KB | 0.0% | 0.0% |
| `/en/about` | 130.7 KB | 0.0% | 0.0% |
| `/en/blog` | 130.8 KB | 0.0% | 0.0% |
| `/en/careers` | 131.3 KB | 0.0% | 0.0% |
| `/en/contact` | 130.7 KB | 0.0% | 0.0% |
| `/en/faq` | 130.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 130.9 KB | 0.0% | 0.0% |
| `/en/products` | 130.7 KB | 0.0% | 0.0% |
| `/en/settings` | 132.2 KB | 0.0% | 0.0% |
| `/en/team` | 130.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 131.7 KB | 0.0% | 0.0% |
| `/fr/about` | 130.7 KB | 0.0% | 0.0% |
| `/fr/blog` | 130.8 KB | 0.0% | 0.0% |
| `/fr/careers` | 131.3 KB | 0.0% | 0.0% |
| `/fr/contact` | 130.7 KB | 0.0% | 0.0% |
| `/fr/faq` | 130.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 130.9 KB | 0.0% | 0.0% |
| `/fr/products` | 130.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 132.2 KB | 0.0% | 0.0% |
| `/fr/team` | 130.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-react-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.0 ms | 36.7 ms | 5.8 ms |
| `fr` | 20.8 ms | 30.1 ms | 5.3 ms |

</details>

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 7.0.0 | 11.1 KB | 35.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 201.7 KB | 50.0% | 90.0% | 20.7 KB | — | — | 18.8 ms | 27.8 ms |
| Dynamic | 🔶 | 121.9 KB | 4.9% | 90.0% | 21.1 KB | 27.9 ms | 4.6 ms | 24.4 ms | 28.8 ms |
| Scoped Static | 🔶 | 237.3 KB | 50.0% | 90.0% | 27.2 KB | 45.0 ms | 5.4 ms | 20.9 ms | 27.9 ms |
| Scoped Dynamic | 🔶 | 121.9 KB | 4.9% | 90.0% | 21.1 KB | 27.9 ms | 4.6 ms | 24.4 ms | 28.8 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 203.2 KB | 53.5% | 82.6% |
| `/en/about` | 201.8 KB | 53.5% | 89.1% |
| `/en/blog` | 201.4 KB | 53.5% | 85.9% |
| `/en/careers` | 201.8 KB | 53.5% | 88.0% |
| `/en/contact` | 201.0 KB | 53.5% | 97.8% |
| `/en/faq` | 201.6 KB | 53.5% | 89.1% |
| `/en/pricing` | 201.2 KB | 53.5% | 89.1% |
| `/en/products` | 201.1 KB | 53.5% | 94.6% |
| `/en/settings` | 202.5 KB | 53.5% | 94.6% |
| `/en/team` | 201.2 KB | 53.5% | 89.1% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 203.2 KB | 46.5% | 84.9% |
| `/fr/about` | 201.8 KB | 46.5% | 86.8% |
| `/fr/blog` | 201.4 KB | 46.5% | 87.7% |
| `/fr/careers` | 201.8 KB | 46.5% | 88.7% |
| `/fr/contact` | 201.0 KB | 46.5% | 97.2% |
| `/fr/faq` | 201.6 KB | 46.5% | 91.5% |
| `/fr/pricing` | 201.2 KB | 46.5% | 87.7% |
| `/fr/products` | 201.1 KB | 46.5% | 92.5% |
| `/fr/settings` | 202.5 KB | 46.5% | 93.4% |
| `/fr/team` | 201.2 KB | 46.5% | 89.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.6 ms | 30.7 ms | 8.7 ms |
| `fr` | 17.0 ms | 24.8 ms | 6.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 123.4 KB | 0.0% | 82.6% |
| `/en/about` | 122.1 KB | 0.0% | 89.1% |
| `/en/blog` | 121.7 KB | 0.0% | 85.9% |
| `/en/careers` | 122.1 KB | 0.0% | 88.0% |
| `/en/contact` | 121.3 KB | 0.0% | 97.8% |
| `/en/faq` | 121.9 KB | 0.0% | 89.1% |
| `/en/pricing` | 121.4 KB | 0.0% | 89.1% |
| `/en/products` | 121.3 KB | 0.0% | 94.6% |
| `/en/settings` | 122.8 KB | 0.0% | 94.6% |
| `/en/team` | 121.5 KB | 0.0% | 89.1% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 123.4 KB | 14.3% | 84.8% |
| `/fr/about` | 122.1 KB | 10.0% | 86.7% |
| `/fr/blog` | 121.7 KB | 12.2% | 87.7% |
| `/fr/careers` | 122.1 KB | 11.5% | 88.6% |
| `/fr/contact` | 121.3 KB | 3.6% | 97.1% |
| `/fr/faq` | 121.9 KB | 10.7% | 91.4% |
| `/fr/pricing` | 121.4 KB | 10.7% | 87.6% |
| `/fr/products` | 121.3 KB | 6.9% | 92.4% |
| `/fr/settings` | 122.8 KB | 6.9% | 93.3% |
| `/fr/team` | 121.5 KB | 10.7% | 89.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 40.4 ms | 19.9 ms | 60.4 ms | 4.9 ms |
| `fr` | 15.4 ms | 11.9 ms | 18.8 ms | 4.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 30.5 ms | 35.4 ms | 10.2 ms |
| `fr` | 18.4 ms | 22.1 ms | 5.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 238.8 KB | 55.1% | 82.6% |
| `/en/about` | 237.5 KB | 55.1% | 89.1% |
| `/en/blog` | 237.1 KB | 55.1% | 85.9% |
| `/en/careers` | 237.5 KB | 55.1% | 88.0% |
| `/en/contact` | 236.7 KB | 55.1% | 97.8% |
| `/en/faq` | 237.3 KB | 55.1% | 89.1% |
| `/en/pricing` | 236.8 KB | 55.1% | 89.1% |
| `/en/products` | 236.7 KB | 55.1% | 94.6% |
| `/en/settings` | 238.2 KB | 55.1% | 94.6% |
| `/en/team` | 236.8 KB | 55.1% | 89.1% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 238.8 KB | 44.9% | 84.3% |
| `/fr/about` | 237.5 KB | 44.9% | 87.3% |
| `/fr/blog` | 237.1 KB | 44.9% | 87.3% |
| `/fr/careers` | 237.5 KB | 44.9% | 89.2% |
| `/fr/contact` | 236.7 KB | 44.9% | 98.0% |
| `/fr/faq` | 237.3 KB | 44.9% | 90.2% |
| `/fr/pricing` | 236.8 KB | 44.9% | 87.3% |
| `/fr/products` | 236.7 KB | 44.9% | 92.2% |
| `/fr/settings` | 238.2 KB | 44.9% | 94.1% |
| `/fr/team` | 236.8 KB | 44.9% | 90.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 60.1 ms | 21.4 ms | 135.7 ms | 5.7 ms |
| `fr` | 30.0 ms | 20.8 ms | 39.7 ms | 5.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.2 ms | 29.0 ms | 5.2 ms |
| `fr` | 20.7 ms | 26.8 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 123.4 KB | 0.0% | 82.6% |
| `/en/about` | 122.1 KB | 0.0% | 89.1% |
| `/en/blog` | 121.7 KB | 0.0% | 85.9% |
| `/en/careers` | 122.1 KB | 0.0% | 88.0% |
| `/en/contact` | 121.3 KB | 0.0% | 97.8% |
| `/en/faq` | 121.9 KB | 0.0% | 89.1% |
| `/en/pricing` | 121.4 KB | 0.0% | 89.1% |
| `/en/products` | 121.3 KB | 0.0% | 94.6% |
| `/en/settings` | 122.8 KB | 0.0% | 94.6% |
| `/en/team` | 121.5 KB | 0.0% | 89.1% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 123.4 KB | 14.3% | 84.8% |
| `/fr/about` | 122.1 KB | 10.0% | 86.7% |
| `/fr/blog` | 121.7 KB | 12.2% | 87.7% |
| `/fr/careers` | 122.1 KB | 11.5% | 88.6% |
| `/fr/contact` | 121.3 KB | 3.6% | 97.1% |
| `/fr/faq` | 121.9 KB | 10.7% | 91.4% |
| `/fr/pricing` | 121.4 KB | 10.7% | 87.6% |
| `/fr/products` | 121.3 KB | 6.9% | 92.4% |
| `/fr/settings` | 122.8 KB | 6.9% | 93.3% |
| `/fr/team` | 121.5 KB | 10.7% | 89.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 40.4 ms | 19.9 ms | 60.4 ms | 4.9 ms |
| `fr` | 15.4 ms | 11.9 ms | 18.8 ms | 4.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 30.5 ms | 35.4 ms | 10.2 ms |
| `fr` | 18.4 ms | 22.1 ms | 5.8 ms |

</details>

---

## use-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.9.1 | 12.8 KB | 50.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 183.2 KB | 50.0% | 89.8% | 75.7 KB | 9.8 ms | 2.4 ms | 19.9 ms | 24.7 ms |
| Dynamic | 🔶 | 122.1 KB | 0.0% | 89.8% | 75.8 KB | 12.3 ms | 1.8 ms | 18.1 ms | 22.6 ms |
| Scoped Static | 🔶 | 128.7 KB | 0.0% | 0.0% | 87.1 KB | 20.9 ms | 5.0 ms | 17.5 ms | 24.8 ms |
| Scoped Dynamic | 🔶 | 128.7 KB | 0.0% | 0.0% | 87.1 KB | 19.8 ms | 3.5 ms | 17.4 ms | 25.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 184.0 KB | 54.4% | 81.4% |
| `/en/about` | 182.9 KB | 54.4% | 88.4% |
| `/en/blog` | 183.0 KB | 54.4% | 84.9% |
| `/en/careers` | 183.4 KB | 54.4% | 87.4% |
| `/en/contact` | 183.0 KB | 54.4% | 98.8% |
| `/en/faq` | 182.9 KB | 54.4% | 88.4% |
| `/en/pricing` | 183.1 KB | 54.1% | 95.4% |
| `/en/products` | 182.9 KB | 54.4% | 90.7% |
| `/en/settings` | 184.4 KB | 54.4% | 94.2% |
| `/en/team` | 182.9 KB | 54.4% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 184.0 KB | 45.6% | 84.5% |
| `/fr/about` | 182.9 KB | 45.6% | 86.4% |
| `/fr/blog` | 183.0 KB | 45.6% | 87.4% |
| `/fr/careers` | 183.4 KB | 45.6% | 87.5% |
| `/fr/contact` | 183.0 KB | 45.6% | 98.1% |
| `/fr/faq` | 182.9 KB | 45.6% | 91.3% |
| `/fr/pricing` | 183.1 KB | 45.4% | 90.4% |
| `/fr/products` | 182.9 KB | 45.6% | 90.3% |
| `/fr/settings` | 184.4 KB | 45.6% | 93.2% |
| `/fr/team` | 182.9 KB | 45.6% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 12.2 ms | 4.1 ms | 39.2 ms | 4.3 ms |
| `fr` | 7.4 ms | 4.3 ms | 17.9 ms | 0.6 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.0 ms | 28.2 ms | 7.2 ms |
| `fr` | 18.8 ms | 21.1 ms | 5.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 122.9 KB | 0.0% | 81.4% |
| `/en/about` | 121.8 KB | 0.0% | 88.4% |
| `/en/blog` | 121.8 KB | 0.0% | 84.9% |
| `/en/careers` | 122.3 KB | 0.0% | 87.4% |
| `/en/contact` | 121.8 KB | 0.0% | 98.8% |
| `/en/faq` | 121.7 KB | 0.0% | 88.4% |
| `/en/pricing` | 121.9 KB | 0.0% | 95.4% |
| `/en/products` | 121.8 KB | 0.0% | 90.7% |
| `/en/settings` | 123.2 KB | 0.0% | 94.2% |
| `/en/team` | 121.8 KB | 0.0% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 122.9 KB | 0.0% | 84.5% |
| `/fr/about` | 121.8 KB | 0.0% | 86.4% |
| `/fr/blog` | 121.8 KB | 0.0% | 87.4% |
| `/fr/careers` | 122.3 KB | 0.0% | 87.5% |
| `/fr/contact` | 121.8 KB | 0.0% | 98.1% |
| `/fr/faq` | 121.7 KB | 0.0% | 91.3% |
| `/fr/pricing` | 121.9 KB | 0.0% | 90.4% |
| `/fr/products` | 121.8 KB | 0.0% | 90.3% |
| `/fr/settings` | 123.2 KB | 0.0% | 93.2% |
| `/fr/team` | 121.8 KB | 0.0% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 5.4 ms | 50.3 ms | 2.6 ms |
| `fr` | 8.8 ms | 4.0 ms | 20.1 ms | 0.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.6 ms | 25.3 ms | 7.7 ms |
| `fr` | 17.5 ms | 20.0 ms | 4.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 129.5 KB | 0.0% | 0.0% |
| `/en/about` | 128.4 KB | 0.0% | 0.0% |
| `/en/blog` | 128.4 KB | 0.0% | 0.0% |
| `/en/careers` | 128.9 KB | 0.0% | 0.0% |
| `/en/contact` | 128.4 KB | 0.0% | 0.0% |
| `/en/faq` | 128.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 128.5 KB | 0.0% | 0.0% |
| `/en/products` | 128.4 KB | 0.0% | 0.0% |
| `/en/settings` | 129.9 KB | 0.0% | 0.0% |
| `/en/team` | 128.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 129.5 KB | 0.0% | 0.0% |
| `/fr/about` | 128.4 KB | 0.0% | 0.0% |
| `/fr/blog` | 128.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 128.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 128.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 128.3 KB | 0.0% | 0.0% |
| `/fr/pricing` | 128.5 KB | 0.0% | 0.0% |
| `/fr/products` | 128.4 KB | 0.0% | 0.0% |
| `/fr/settings` | 129.9 KB | 0.0% | 0.0% |
| `/fr/team` | 128.4 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 22.8 ms | 15.6 ms | 44.1 ms | 5.4 ms |
| `fr` | 19.0 ms | 10.5 ms | 49.3 ms | 4.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.3 ms | 27.9 ms | 6.7 ms |
| `fr` | 15.6 ms | 21.8 ms | 5.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 129.5 KB | 0.0% | 0.0% |
| `/en/about` | 128.4 KB | 0.0% | 0.0% |
| `/en/blog` | 128.4 KB | 0.0% | 0.0% |
| `/en/careers` | 128.9 KB | 0.0% | 0.0% |
| `/en/contact` | 128.4 KB | 0.0% | 0.0% |
| `/en/faq` | 128.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 128.5 KB | 0.0% | 0.0% |
| `/en/products` | 128.4 KB | 0.0% | 0.0% |
| `/en/settings` | 129.9 KB | 0.0% | 0.0% |
| `/en/team` | 128.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 129.5 KB | 0.0% | 0.0% |
| `/fr/about` | 128.4 KB | 0.0% | 0.0% |
| `/fr/blog` | 128.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 128.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 128.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 128.3 KB | 0.0% | 0.0% |
| `/fr/pricing` | 128.5 KB | 0.0% | 0.0% |
| `/fr/products` | 128.4 KB | 0.0% | 0.0% |
| `/fr/settings` | 129.9 KB | 0.0% | 0.0% |
| `/fr/team` | 128.4 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 19.8 ms | 8.3 ms | 62.1 ms | 3.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.5 ms | 30.6 ms | 7.1 ms |
| `fr` | 17.2 ms | 21.2 ms | 3.9 ms |

</details>

---

## wuchale

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 0.22.11 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 114.7 KB | — | 89.5% | 26.1 KB | 7.6 ms | — | 17.9 ms | 28.0 ms |
| Dynamic | 🔶 | 114.7 KB | — | 89.6% | 26.1 KB | 12.3 ms | — | 14.3 ms | 23.2 ms |
| Scoped Static | 🔶 | 120.2 KB | — | 0.0% | 26.5 KB | — | — | 15.9 ms | 23.8 ms |
| Scoped Dynamic | 🔶 | 120.4 KB | — | 0.0% | 27.1 KB | 23.0 ms | 4.0 ms | 16.5 ms | 22.8 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 114.9 KB | — | 50.0% |
| `/en/about` | 114.1 KB | — | 100.0% |
| `/en/blog` | 114.1 KB | — | 96.9% |
| `/en/careers` | 114.6 KB | — | 87.9% |
| `/en/contact` | 114.3 KB | — | 96.9% |
| `/en/faq` | 114.1 KB | — | 93.8% |
| `/en/pricing` | 114.3 KB | — | 90.9% |
| `/en/products` | 114.1 KB | — | 96.9% |
| `/en/settings` | 115.6 KB | — | 84.4% |
| `/en/team` | 114.0 KB | — | 96.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 115.4 KB | — | 66.0% |
| `/fr/about` | 114.6 KB | — | 72.3% |
| `/fr/blog` | 114.6 KB | — | 97.9% |
| `/fr/careers` | 115.1 KB | — | 91.7% |
| `/fr/contact` | 114.8 KB | — | 97.9% |
| `/fr/faq` | 114.6 KB | — | 97.9% |
| `/fr/pricing` | 114.8 KB | — | 91.7% |
| `/fr/products` | 114.6 KB | — | 97.9% |
| `/fr/settings` | 116.1 KB | — | 85.1% |
| `/fr/team` | 114.6 KB | — | 97.9% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-wuchale-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.2 ms | 4.4 ms | 14.3 ms | 0.0 ms |
| `fr` | 8.0 ms | 5.1 ms | 13.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.5 ms | 28.0 ms | — |
| `fr` | 17.2 ms | 27.9 ms | — |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 114.9 KB | — | 61.9% |
| `/en/about` | 114.1 KB | — | 76.2% |
| `/en/blog` | 114.1 KB | — | 97.6% |
| `/en/careers` | 114.6 KB | — | 90.7% |
| `/en/contact` | 114.3 KB | — | 97.6% |
| `/en/faq` | 114.1 KB | — | 95.2% |
| `/en/pricing` | 114.3 KB | — | 93.0% |
| `/en/products` | 114.1 KB | — | 97.6% |
| `/en/settings` | 115.6 KB | — | 88.1% |
| `/en/team` | 114.1 KB | — | 97.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 115.4 KB | — | 66.0% |
| `/fr/about` | 114.6 KB | — | 72.3% |
| `/fr/blog` | 114.6 KB | — | 97.9% |
| `/fr/careers` | 115.1 KB | — | 91.7% |
| `/fr/contact` | 114.8 KB | — | 97.9% |
| `/fr/faq` | 114.6 KB | — | 97.9% |
| `/fr/pricing` | 114.8 KB | — | 91.7% |
| `/fr/products` | 114.6 KB | — | 97.9% |
| `/fr/settings` | 116.1 KB | — | 85.1% |
| `/fr/team` | 114.6 KB | — | 97.9% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-wuchale-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.1 ms | 4.3 ms | 12.3 ms | 0.0 ms |
| `fr` | 17.4 ms | 7.1 ms | 53.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.6 ms | 23.5 ms | — |
| `fr` | 14.0 ms | 22.9 ms | — |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 120.4 KB | — | 0.0% |
| `/en/about` | 119.6 KB | — | 0.0% |
| `/en/blog` | 119.6 KB | — | 0.0% |
| `/en/careers` | 120.1 KB | — | 0.0% |
| `/en/contact` | 119.8 KB | — | 0.0% |
| `/en/faq` | 119.6 KB | — | 0.0% |
| `/en/pricing` | 119.8 KB | — | 0.0% |
| `/en/products` | 119.7 KB | — | 0.0% |
| `/en/settings` | 121.2 KB | — | 0.0% |
| `/en/team` | 119.6 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 121.0 KB | — | 0.0% |
| `/fr/about` | 120.2 KB | — | 0.0% |
| `/fr/blog` | 120.2 KB | — | 0.0% |
| `/fr/careers` | 120.6 KB | — | 0.0% |
| `/fr/contact` | 120.4 KB | — | 0.0% |
| `/fr/faq` | 120.2 KB | — | 0.0% |
| `/fr/pricing` | 120.4 KB | — | 0.0% |
| `/fr/products` | 120.2 KB | — | 0.0% |
| `/fr/settings` | 121.7 KB | — | 0.0% |
| `/fr/team` | 120.1 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-wuchale-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.4 ms | 24.5 ms | — |
| `fr` | 16.5 ms | 23.0 ms | — |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 120.6 KB | — | 0.0% |
| `/en/about` | 119.8 KB | — | 0.0% |
| `/en/blog` | 119.8 KB | — | 0.0% |
| `/en/careers` | 120.2 KB | — | 0.0% |
| `/en/contact` | 120.0 KB | — | 0.0% |
| `/en/faq` | 119.8 KB | — | 0.0% |
| `/en/pricing` | 120.0 KB | — | 0.0% |
| `/en/products` | 119.8 KB | — | 0.0% |
| `/en/settings` | 121.3 KB | — | 0.0% |
| `/en/team` | 119.7 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 121.1 KB | — | 0.0% |
| `/fr/about` | 120.3 KB | — | 0.0% |
| `/fr/blog` | 120.3 KB | — | 0.0% |
| `/fr/careers` | 120.8 KB | — | 0.0% |
| `/fr/contact` | 120.5 KB | — | 0.0% |
| `/fr/faq` | 120.3 KB | — | 0.0% |
| `/fr/pricing` | 120.5 KB | — | 0.0% |
| `/fr/products` | 120.4 KB | — | 0.0% |
| `/fr/settings` | 121.9 KB | — | 0.0% |
| `/fr/team` | 120.3 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-wuchale-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 36.2 ms | 15.4 ms | 81.3 ms | 4.0 ms |
| `fr` | 9.8 ms | 5.8 ms | 19.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.4 ms | 25.4 ms | — |
| `fr` | 15.6 ms | 20.2 ms | — |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 11 |
| Total app entries | 30 |
| With lib size data | 10 |
| With page bundle data | 44 |
| With component data | 44 |
| With reactivity data | 33 |
| With rendering data | 44 |
