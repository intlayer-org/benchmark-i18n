# TanStack Start (React) — i18n Benchmark Results

_Generated: 2026-04-17_

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
| **Page load avg** | `PerformanceNavigationTiming.duration` — full page load time (ms) |
| **Hydration avg** | Custom perf-mark delta for React hydration phase (ms); — = not instrumented |

> **Status icons:** ✅ all data · 🔶 partial · ⬜ missing · ❌ error  
> **⚠ INVALID** = test ran but all measured values were zero (missing instrumentation or broken test)

## Libraries

- [base-app-tanstack](#base-app-tanstack)
- [base-app-vite-react](#base-app-vite-react)
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

## base-app-tanstack

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | — | — |

---

## base-app-vite-react

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | — | — |

---

## gt-react

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 10.18.3 | 679.3 KB | 2507.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 596.8 KB | 0.0% | 82.2% | 683.3 KB | — | — | 18.9 ms | 35.1 ms |
| Dynamic | 🔶 | 568.1 KB | 0.0% | 82.2% | 683.7 KB | — | — | 18.5 ms | 41.7 ms |
| Scoped Static | 🔶 | 596.8 KB | 0.0% | 82.2% | 683.3 KB | — | — | 17.5 ms | 34.9 ms |
| Scoped Dynamic | 🔶 | 573.2 KB | 0.0% | 0.0% | 687.5 KB | — | — | 20.8 ms | 47.5 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 596.8 KB | 0.0% | 64.4% |
| `/en/about` | 596.8 KB | 0.0% | 77.8% |
| `/en/blog` | 596.7 KB | 0.0% | 77.6% |
| `/en/careers` | 596.8 KB | 0.0% | 75.6% |
| `/en/contact` | 596.7 KB | 0.0% | 97.8% |
| `/en/faq` | 596.7 KB | 0.0% | 81.8% |
| `/en/pricing` | 596.7 KB | 0.0% | 91.8% |
| `/en/products` | 596.7 KB | 0.0% | 82.2% |
| `/en/settings` | 596.9 KB | 0.0% | 90.0% |
| `/en/team` | 596.7 KB | 0.0% | 83.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 596.8 KB | 0.0% | 64.4% |
| `/fr/about` | 596.8 KB | 0.0% | 77.8% |
| `/fr/blog` | 596.7 KB | 0.0% | 77.6% |
| `/fr/careers` | 596.8 KB | 0.0% | 75.6% |
| `/fr/contact` | 596.7 KB | 0.0% | 97.8% |
| `/fr/faq` | 596.7 KB | 0.0% | 81.8% |
| `/fr/pricing` | 596.7 KB | 0.0% | 91.8% |
| `/fr/products` | 596.7 KB | 0.0% | 82.2% |
| `/fr/settings` | 596.9 KB | 0.0% | 90.0% |
| `/fr/team` | 596.7 KB | 0.0% | 83.3% |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.1 ms | 35.9 ms | 5.6 ms |
| `fr` | 19.8 ms | 34.4 ms | 3.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 568.2 KB | 0.0% | 64.4% |
| `/en/about` | 568.2 KB | 0.0% | 77.8% |
| `/en/blog` | 568.1 KB | 0.0% | 77.6% |
| `/en/careers` | 568.2 KB | 0.0% | 75.6% |
| `/en/contact` | 568.1 KB | 0.0% | 97.8% |
| `/en/faq` | 568.1 KB | 0.0% | 81.8% |
| `/en/pricing` | 568.1 KB | 0.0% | 91.8% |
| `/en/products` | 568.1 KB | 0.0% | 82.2% |
| `/en/settings` | 568.3 KB | 0.0% | 90.0% |
| `/en/team` | 568.1 KB | 0.0% | 83.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 568.2 KB | 0.0% | 64.4% |
| `/fr/about` | 568.2 KB | 0.0% | 77.8% |
| `/fr/blog` | 568.1 KB | 0.0% | 77.6% |
| `/fr/careers` | 568.2 KB | 0.0% | 75.6% |
| `/fr/contact` | 568.1 KB | 0.0% | 97.8% |
| `/fr/faq` | 568.1 KB | 0.0% | 81.8% |
| `/fr/pricing` | 568.1 KB | 0.0% | 91.8% |
| `/fr/products` | 568.1 KB | 0.0% | 82.2% |
| `/fr/settings` | 568.3 KB | 0.0% | 90.0% |
| `/fr/team` | 568.1 KB | 0.0% | 83.3% |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.4 ms | 51.7 ms | 5.5 ms |
| `fr` | 17.5 ms | 31.6 ms | 3.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 596.8 KB | 0.0% | 64.4% |
| `/en/about` | 596.8 KB | 0.0% | 77.8% |
| `/en/blog` | 596.7 KB | 0.0% | 77.6% |
| `/en/careers` | 596.8 KB | 0.0% | 75.6% |
| `/en/contact` | 596.8 KB | 0.0% | 97.8% |
| `/en/faq` | 596.7 KB | 0.0% | 81.8% |
| `/en/pricing` | 596.8 KB | 0.0% | 91.8% |
| `/en/products` | 596.7 KB | 0.0% | 82.2% |
| `/en/settings` | 596.9 KB | 0.0% | 90.0% |
| `/en/team` | 596.7 KB | 0.0% | 83.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 596.8 KB | 0.0% | 64.4% |
| `/fr/about` | 596.8 KB | 0.0% | 77.8% |
| `/fr/blog` | 596.7 KB | 0.0% | 77.6% |
| `/fr/careers` | 596.8 KB | 0.0% | 75.6% |
| `/fr/contact` | 596.8 KB | 0.0% | 97.8% |
| `/fr/faq` | 596.7 KB | 0.0% | 81.8% |
| `/fr/pricing` | 596.8 KB | 0.0% | 91.8% |
| `/fr/products` | 596.7 KB | 0.0% | 82.2% |
| `/fr/settings` | 596.9 KB | 0.0% | 90.0% |
| `/fr/team` | 596.7 KB | 0.0% | 83.3% |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.9 ms | 31.7 ms | 3.3 ms |
| `fr` | 16.0 ms | 38.0 ms | 3.1 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 573.2 KB | 0.0% | 0.0% |
| `/en/about` | 573.2 KB | 0.0% | 0.0% |
| `/en/blog` | 573.1 KB | 0.0% | 0.0% |
| `/en/careers` | 573.2 KB | 0.0% | 0.0% |
| `/en/contact` | 573.2 KB | 0.0% | 0.0% |
| `/en/faq` | 573.1 KB | 0.0% | 0.0% |
| `/en/pricing` | 573.1 KB | 0.0% | 0.0% |
| `/en/products` | 573.1 KB | 0.0% | 0.0% |
| `/en/settings` | 573.3 KB | 0.0% | 0.0% |
| `/en/team` | 573.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 573.2 KB | 0.0% | 0.0% |
| `/fr/about` | 573.2 KB | 0.0% | 0.0% |
| `/fr/blog` | 573.1 KB | 0.0% | 0.0% |
| `/fr/careers` | 573.2 KB | 0.0% | 0.0% |
| `/fr/contact` | 573.2 KB | 0.0% | 0.0% |
| `/fr/faq` | 573.1 KB | 0.0% | 0.0% |
| `/fr/pricing` | 573.1 KB | 0.0% | 0.0% |
| `/fr/products` | 573.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 573.3 KB | 0.0% | 0.0% |
| `/fr/team` | 573.1 KB | 0.0% | 0.0% |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.6 ms | 47.9 ms | 5.2 ms |
| `fr` | 21.9 ms | 47.1 ms | 3.3 ms |

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.1-canary-1 | 4.7 KB | 12.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 127.2 KB | 50.0% | 0.8% | 6.9 KB | 14.1 ms | 4.3 ms | 16.8 ms | 20.4 ms |
| Dynamic | 🔶 | 117.6 KB | 0.0% | 0.8% | 4.4 KB | — | — | 18.4 ms | 31.6 ms |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | 117.6 KB | 0.0% | 0.8% | 4.4 KB | — | — | 16.8 ms | 28.1 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 139.4 KB | 51.4% | 5.9% |
| `/en/about` | 131.5 KB | 58.3% | 0.0% |
| `/en/blog` | 125.8 KB | 50.0% | 0.0% |
| `/en/careers` | 126.8 KB | 53.8% | 0.0% |
| `/en/contact` | 121.6 KB | 60.0% | 0.0% |
| `/en/faq` | 129.6 KB | 47.6% | 0.0% |
| `/en/pricing` | 123.0 KB | 68.8% | 0.0% |
| `/en/products` | 124.7 KB | 55.0% | 0.0% |
| `/en/settings` | 124.6 KB | 57.1% | 0.0% |
| `/en/team` | 125.1 KB | 52.2% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 139.4 KB | 48.6% | 11.1% |
| `/fr/about` | 131.5 KB | 41.7% | 0.0% |
| `/fr/blog` | 125.8 KB | 50.0% | 0.0% |
| `/fr/careers` | 126.8 KB | 46.2% | 0.0% |
| `/fr/contact` | 121.6 KB | 40.0% | 0.0% |
| `/fr/faq` | 129.6 KB | 52.4% | 0.0% |
| `/fr/pricing` | 123.0 KB | 31.3% | 0.0% |
| `/fr/products` | 124.7 KB | 45.0% | 0.0% |
| `/fr/settings` | 124.6 KB | 42.9% | 0.0% |
| `/fr/team` | 125.1 KB | 47.8% | 0.0% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 22.3 ms | 12.9 ms | 54.5 ms | 5.8 ms |
| `fr` | 5.8 ms | 2.8 ms | 16.7 ms | 2.9 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 16.7 ms | 20.2 ms | 5.5 ms |
| `fr` | 16.9 ms | 20.6 ms | 4.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 119.1 KB | 0.0% | 5.9% |
| `/en/about` | 117.4 KB | 0.0% | 0.0% |
| `/en/blog` | 117.0 KB | 0.0% | 0.0% |
| `/en/careers` | 117.7 KB | 0.0% | 0.0% |
| `/en/contact` | 116.7 KB | 0.0% | 0.0% |
| `/en/faq` | 117.2 KB | 0.0% | 0.0% |
| `/en/pricing` | 116.9 KB | 0.0% | 0.0% |
| `/en/products` | 116.8 KB | 0.0% | 0.0% |
| `/en/settings` | 119.0 KB | 0.0% | 0.0% |
| `/en/team` | 116.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 119.5 KB | 0.0% | 11.1% |
| `/fr/about` | 117.7 KB | 0.0% | 0.0% |
| `/fr/blog` | 117.2 KB | 0.0% | 0.0% |
| `/fr/careers` | 117.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 116.8 KB | 0.0% | 0.0% |
| `/fr/faq` | 117.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 117.0 KB | 0.0% | 0.0% |
| `/fr/products` | 117.0 KB | 0.0% | 0.0% |
| `/fr/settings` | 119.2 KB | 0.0% | 0.0% |
| `/fr/team` | 117.1 KB | 0.0% | 0.0% |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 20.0 ms | 33.9 ms | 1.3 ms |
| `fr` | 16.7 ms | 29.3 ms | 1.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 119.1 KB | 0.0% | 5.9% |
| `/en/about` | 117.4 KB | 0.0% | 0.0% |
| `/en/blog` | 117.0 KB | 0.0% | 0.0% |
| `/en/careers` | 117.7 KB | 0.0% | 0.0% |
| `/en/contact` | 116.7 KB | 0.0% | 0.0% |
| `/en/faq` | 117.2 KB | 0.0% | 0.0% |
| `/en/pricing` | 116.9 KB | 0.0% | 0.0% |
| `/en/products` | 116.8 KB | 0.0% | 0.0% |
| `/en/settings` | 119.0 KB | 0.0% | 0.0% |
| `/en/team` | 116.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 119.5 KB | 0.0% | 11.1% |
| `/fr/about` | 117.7 KB | 0.0% | 0.0% |
| `/fr/blog` | 117.2 KB | 0.0% | 0.0% |
| `/fr/careers` | 117.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 116.8 KB | 0.0% | 0.0% |
| `/fr/faq` | 117.4 KB | 0.0% | 0.0% |
| `/fr/pricing` | 117.0 KB | 0.0% | 0.0% |
| `/fr/products` | 117.0 KB | 0.0% | 0.0% |
| `/fr/settings` | 119.2 KB | 0.0% | 0.0% |
| `/fr/team` | 117.0 KB | 0.0% | 0.0% |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 16.7 ms | 28.7 ms | 1.2 ms |
| `fr` | 16.9 ms | 27.6 ms | 1.3 ms |

</details>

---

## lingo.dev

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 0.133.9 | 7.3 KB | 19.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 122.6 KB | 0.0% | 0.0% | 18.9 KB | — | — | 15.9 ms | 22.5 ms |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 124.2 KB | 0.0% | 0.0% |
| `/en/about` | 122.5 KB | 0.0% | 0.0% |
| `/en/blog` | 122.3 KB | 0.0% | 0.0% |
| `/en/careers` | 122.7 KB | 0.0% | 0.0% |
| `/en/contact` | 121.9 KB | 0.0% | 0.0% |
| `/en/faq` | 122.4 KB | 0.0% | 0.0% |
| `/en/pricing` | 122.1 KB | 0.0% | 0.0% |
| `/en/products` | 122.0 KB | 0.0% | 0.0% |
| `/en/settings` | 123.5 KB | 0.0% | 0.0% |
| `/en/team` | 122.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 124.2 KB | 0.0% | 0.0% |
| `/fr/about` | 122.5 KB | 0.0% | 0.0% |
| `/fr/blog` | 122.3 KB | 0.0% | 0.0% |
| `/fr/careers` | 122.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 121.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 122.4 KB | 0.0% | 0.0% |
| `/fr/pricing` | 122.1 KB | 0.0% | 0.0% |
| `/fr/products` | 122.0 KB | 0.0% | 0.0% |
| `/fr/settings` | 123.5 KB | 0.0% | 0.0% |
| `/fr/team` | 122.2 KB | 0.0% | 0.0% |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 24.8 ms | 5.1 ms |
| `fr` | 16.1 ms | 20.1 ms | 5.0 ms |

</details>

---

## lingui

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 5.3.0 | 10.1 KB | 32.4 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 154.6 KB | 50.0% | 90.0% | 51.7 KB | 12.7 ms | 3.9 ms | 17.7 ms | 22.7 ms |
| Dynamic | 🔶 | 119.5 KB | 9.3% | 0.0% | 84.3 KB | 13.8 ms | 3.6 ms | 18.9 ms | 24.7 ms |
| Scoped Static | 🔶 | 120.6 KB | 4.0% | 0.0% | 147.9 KB | — | — | 20.0 ms | 27.9 ms |
| Scoped Dynamic | 🔶 | 120.2 KB | 8.6% | 0.0% | 83.7 KB | — | — | 16.8 ms | 22.7 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 156.5 KB | 52.6% | 80.0% |
| `/en/about` | 154.6 KB | 52.6% | 87.5% |
| `/en/blog` | 154.2 KB | 52.6% | 83.8% |
| `/en/careers` | 154.6 KB | 52.6% | 95.0% |
| `/en/contact` | 154.1 KB | 52.6% | 96.3% |
| `/en/faq` | 154.8 KB | 52.6% | 87.5% |
| `/en/pricing` | 154.4 KB | 52.6% | 95.0% |
| `/en/products` | 154.3 KB | 52.6% | 90.0% |
| `/en/settings` | 153.7 KB | 52.6% | 97.5% |
| `/en/team` | 154.4 KB | 52.6% | 87.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 156.5 KB | 47.4% | 81.2% |
| `/fr/about` | 154.6 KB | 47.4% | 83.5% |
| `/fr/blog` | 154.2 KB | 47.4% | 84.7% |
| `/fr/careers` | 154.6 KB | 47.4% | 95.3% |
| `/fr/contact` | 154.1 KB | 47.4% | 95.3% |
| `/fr/faq` | 154.8 KB | 47.4% | 88.2% |
| `/fr/pricing` | 154.4 KB | 47.4% | 95.3% |
| `/fr/products` | 154.3 KB | 47.4% | 90.6% |
| `/fr/settings` | 153.7 KB | 47.4% | 97.6% |
| `/fr/team` | 154.4 KB | 47.4% | 88.2% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 12.9 ms | 8.0 ms | 30.3 ms | 3.9 ms |
| `fr` | 12.5 ms | 6.5 ms | 30.0 ms | 3.8 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.3 ms | 23.3 ms | 4.7 ms |
| `fr` | 16.0 ms | 22.1 ms | 4.6 ms |

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

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 13.8 ms | 5.9 ms | 32.8 ms | 3.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.8 ms | 25.0 ms | 5.0 ms |
| `fr` | 19.0 ms | 24.4 ms | 4.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 121.3 KB | 0.0% | 0.0% |
| `/en/about` | 120.2 KB | 0.0% | 0.0% |
| `/en/blog` | 120.2 KB | 0.0% | 0.0% |
| `/en/careers` | 120.6 KB | 0.0% | 0.0% |
| `/en/contact` | 120.2 KB | 0.0% | 0.0% |
| `/en/faq` | 120.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 120.5 KB | 0.0% | 0.0% |
| `/en/products` | 120.3 KB | 0.0% | 0.0% |
| `/en/settings` | 121.5 KB | 0.0% | 0.0% |
| `/en/team` | 120.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 121.3 KB | 0.0% | 0.0% |
| `/fr/about` | 120.2 KB | 0.0% | 0.0% |
| `/fr/blog` | 120.2 KB | 0.0% | 0.0% |
| `/fr/careers` | 120.6 KB | 25.0% | 0.0% |
| `/fr/contact` | 120.2 KB | 0.0% | 0.0% |
| `/fr/faq` | 120.9 KB | 42.1% | 0.0% |
| `/fr/pricing` | 120.5 KB | 13.3% | 0.0% |
| `/fr/products` | 120.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 121.5 KB | 0.0% | 0.0% |
| `/fr/team` | 120.4 KB | 0.0% | 0.0% |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.9 ms | 28.6 ms | 5.1 ms |
| `fr` | 20.1 ms | 27.1 ms | 5.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 120.8 KB | 0.0% | 0.0% |
| `/en/about` | 119.7 KB | 0.0% | 0.0% |
| `/en/blog` | 119.7 KB | 0.0% | 0.0% |
| `/en/careers` | 120.1 KB | 0.0% | 0.0% |
| `/en/contact` | 119.7 KB | 0.0% | 0.0% |
| `/en/faq` | 120.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 120.0 KB | 0.0% | 0.0% |
| `/en/products` | 119.9 KB | 0.0% | 0.0% |
| `/en/settings` | 121.4 KB | 0.0% | 0.0% |
| `/en/team` | 120.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 120.8 KB | 0.0% | 0.0% |
| `/fr/about` | 119.7 KB | 0.0% | 0.0% |
| `/fr/blog` | 119.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 120.1 KB | 25.0% | 0.0% |
| `/fr/contact` | 119.7 KB | 0.0% | 0.0% |
| `/fr/faq` | 120.5 KB | 45.5% | 0.0% |
| `/fr/pricing` | 120.0 KB | 7.1% | 0.0% |
| `/fr/products` | 119.9 KB | 20.0% | 0.0% |
| `/fr/settings` | 121.4 KB | 33.3% | 0.0% |
| `/fr/team` | 120.1 KB | 41.7% | 0.0% |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 17.7 ms | 24.3 ms | 4.1 ms |
| `fr` | 15.8 ms | 21.1 ms | 3.8 ms |

</details>

---

## paraglide

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.15.1 | 1.4 KB | 3.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 192.2 KB | 50.0% | 89.8% | 5.1 KB | 7.3 ms | 3.2 ms | 14.8 ms | 20.4 ms |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

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
| `/en/team` | 191.8 KB | 54.1% | 88.5% |

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
| `/fr/team` | 191.8 KB | 45.9% | 89.3% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.4 ms | 3.2 ms | 23.5 ms | 3.5 ms |
| `fr` | 7.1 ms | 3.2 ms | 21.1 ms | 3.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 15.2 ms | 20.9 ms | 4.9 ms |
| `fr` | 14.4 ms | 19.8 ms | 4.9 ms |

</details>

---

## react-i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 17.0.2 | 17.3 KB | 59.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 180.2 KB | 50.0% | 89.8% | 24.3 KB | 15.4 ms | 3.7 ms | 16.0 ms | 22.9 ms |
| Dynamic | 🔶 | 136.4 KB | 23.1% | 89.8% | 24.8 KB | 25.9 ms | 4.2 ms | 17.4 ms | 35.2 ms |
| Scoped Static | 🔶 | 184.0 KB | 50.0% | 89.8% | 25.3 KB | 221.8 ms | 12.3 ms | 17.2 ms | 30.4 ms |
| Scoped Dynamic | 🔶 | 127.7 KB | 0.0% | 0.0% | 17.7 KB | 21.4 ms | 5.6 ms | 17.4 ms | 26.7 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 181.0 KB | 53.8% | 81.6% |
| `/en/about` | 180.0 KB | 53.8% | 86.2% |
| `/en/blog` | 180.0 KB | 53.8% | 85.1% |
| `/en/careers` | 180.4 KB | 53.8% | 89.7% |
| `/en/contact` | 180.0 KB | 53.8% | 97.7% |
| `/en/faq` | 179.8 KB | 53.8% | 92.0% |
| `/en/pricing` | 180.1 KB | 53.8% | 88.5% |
| `/en/products` | 179.9 KB | 53.8% | 94.3% |
| `/en/settings` | 181.4 KB | 53.8% | 94.3% |
| `/en/team` | 179.9 KB | 53.8% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 181.0 KB | 46.2% | 84.3% |
| `/fr/about` | 180.0 KB | 46.2% | 82.4% |
| `/fr/blog` | 180.0 KB | 46.2% | 87.3% |
| `/fr/careers` | 180.4 KB | 46.2% | 90.2% |
| `/fr/contact` | 180.0 KB | 46.2% | 98.1% |
| `/fr/faq` | 179.8 KB | 46.2% | 94.1% |
| `/fr/pricing` | 180.1 KB | 46.2% | 87.3% |
| `/fr/products` | 179.9 KB | 46.2% | 92.2% |
| `/fr/settings` | 181.4 KB | 46.2% | 93.2% |
| `/fr/team` | 179.9 KB | 46.2% | 89.2% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 15.4 ms | 10.3 ms | 32.1 ms | 3.7 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 16.9 ms | 22.5 ms | 4.8 ms |
| `fr` | 15.1 ms | 23.2 ms | 4.4 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 133.3 KB | 0.0% | 81.6% |
| `/en/about` | 132.3 KB | 0.0% | 86.2% |
| `/en/blog` | 132.3 KB | 0.0% | 85.1% |
| `/en/careers` | 132.7 KB | 0.0% | 89.7% |
| `/en/contact` | 132.3 KB | 0.0% | 97.7% |
| `/en/faq` | 132.1 KB | 0.0% | 92.0% |
| `/en/pricing` | 132.4 KB | 0.0% | 88.5% |
| `/en/products` | 132.2 KB | 0.0% | 94.3% |
| `/en/settings` | 133.7 KB | 0.0% | 94.3% |
| `/en/team` | 132.2 KB | 0.0% | 88.5% |

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

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 25.9 ms | 10.1 ms | 84.5 ms | 4.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.3 ms | 36.1 ms | 5.7 ms |
| `fr` | 16.5 ms | 34.3 ms | 5.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 184.8 KB | 54.6% | 79.7% |
| `/en/about` | 183.8 KB | 54.6% | 84.8% |
| `/en/blog` | 183.8 KB | 54.6% | 83.5% |
| `/en/careers` | 184.1 KB | 54.6% | 94.9% |
| `/en/contact` | 183.8 KB | 54.6% | 97.5% |
| `/en/faq` | 183.6 KB | 54.6% | 91.1% |
| `/en/pricing` | 183.9 KB | 54.6% | 96.2% |
| `/en/products` | 183.6 KB | 54.6% | 88.6% |
| `/en/settings` | 185.3 KB | 54.6% | 93.8% |
| `/en/team` | 183.8 KB | 54.6% | 87.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 184.8 KB | 45.4% | 83.2% |
| `/fr/about` | 183.8 KB | 45.4% | 81.1% |
| `/fr/blog` | 183.8 KB | 45.4% | 86.3% |
| `/fr/careers` | 184.1 KB | 45.4% | 94.7% |
| `/fr/contact` | 183.8 KB | 45.4% | 97.9% |
| `/fr/faq` | 183.6 KB | 45.4% | 93.7% |
| `/fr/pricing` | 183.9 KB | 45.4% | 91.6% |
| `/fr/products` | 183.6 KB | 45.4% | 88.4% |
| `/fr/settings` | 185.3 KB | 45.4% | 92.7% |
| `/fr/team` | 183.8 KB | 45.4% | 88.4% |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 224.9 ms | 205.9 ms | 239.2 ms | 13.0 ms |
| `fr` | 218.6 ms | 193.5 ms | 231.6 ms | 11.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.2 ms | 36.3 ms | 8.1 ms |
| `fr` | 16.2 ms | 24.4 ms | 4.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 128.5 KB | 0.0% | 0.0% |
| `/en/about` | 127.5 KB | 0.0% | 0.0% |
| `/en/blog` | 127.4 KB | 0.0% | 0.0% |
| `/en/careers` | 127.7 KB | 0.0% | 0.0% |
| `/en/contact` | 127.4 KB | 0.0% | 0.0% |
| `/en/faq` | 127.2 KB | 0.0% | 0.0% |
| `/en/pricing` | 127.5 KB | 0.0% | 0.0% |
| `/en/products` | 127.3 KB | 0.0% | 0.0% |
| `/en/settings` | 128.9 KB | 0.0% | 0.0% |
| `/en/team` | 127.4 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 128.5 KB | 0.0% | 0.0% |
| `/fr/about` | 127.5 KB | 0.0% | 0.0% |
| `/fr/blog` | 127.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 127.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 127.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 127.2 KB | 0.0% | 0.0% |
| `/fr/pricing` | 127.5 KB | 0.0% | 0.0% |
| `/fr/products` | 127.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 128.9 KB | 0.0% | 0.0% |
| `/fr/team` | 127.4 KB | 0.0% | 0.0% |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 23.9 ms | 13.0 ms | 65.6 ms | 6.9 ms |
| `fr` | 18.8 ms | 10.0 ms | 47.5 ms | 4.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.0 ms | 27.7 ms | 5.1 ms |
| `fr` | 16.7 ms | 25.7 ms | 4.8 ms |

</details>

---

## react-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 10.1.1 | 14.4 KB | 59.1 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 189.7 KB | 50.0% | 89.7% | 22.6 KB | 8.0 ms | 2.3 ms | 17.9 ms | 22.9 ms |
| Dynamic | 🔶 | 124.5 KB | 0.0% | 89.7% | 22.8 KB | 12.6 ms | 1.6 ms | 16.9 ms | 22.4 ms |
| Scoped Static | 🔶 | 130.9 KB | 0.0% | 0.0% | 23.9 KB | — | — | 17.5 ms | 27.4 ms |
| Scoped Dynamic | 🔶 | 130.9 KB | 0.0% | 0.0% | 23.9 KB | — | — | 19.2 ms | 25.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 190.3 KB | 54.1% | 81.4% |
| `/en/about` | 189.3 KB | 54.1% | 88.4% |
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
| `/fr/about` | 189.3 KB | 45.9% | 86.3% |
| `/fr/blog` | 189.4 KB | 45.9% | 87.3% |
| `/fr/careers` | 189.9 KB | 45.9% | 86.5% |
| `/fr/contact` | 189.4 KB | 45.9% | 98.0% |
| `/fr/faq` | 189.3 KB | 45.9% | 91.2% |
| `/fr/pricing` | 189.5 KB | 45.6% | 91.3% |
| `/fr/products` | 189.3 KB | 45.9% | 90.2% |
| `/fr/settings` | 190.8 KB | 45.9% | 93.1% |
| `/fr/team` | 189.3 KB | 45.9% | 89.2% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 9.0 ms | 3.5 ms | 26.9 ms | 3.2 ms |
| `fr` | 7.0 ms | 3.5 ms | 19.1 ms | 1.4 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.4 ms | 24.2 ms | 5.2 ms |
| `fr` | 17.5 ms | 21.6 ms | 5.3 ms |

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

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.4 ms | 5.3 ms | 52.8 ms | 1.4 ms |
| `fr` | 9.7 ms | 5.8 ms | 21.3 ms | 1.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 17.3 ms | 24.0 ms | 5.1 ms |
| `fr` | 16.5 ms | 20.8 ms | 4.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 131.5 KB | 0.0% | 0.0% |
| `/en/about` | 130.6 KB | 0.0% | 0.0% |
| `/en/blog` | 130.6 KB | 0.0% | 0.0% |
| `/en/careers` | 131.1 KB | 0.0% | 0.0% |
| `/en/contact` | 130.6 KB | 0.0% | 0.0% |
| `/en/faq` | 130.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 130.7 KB | 0.0% | 0.0% |
| `/en/products` | 130.6 KB | 0.0% | 0.0% |
| `/en/settings` | 132.1 KB | 0.0% | 0.0% |
| `/en/team` | 130.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 131.5 KB | 0.0% | 0.0% |
| `/fr/about` | 130.6 KB | 0.0% | 0.0% |
| `/fr/blog` | 130.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 131.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 130.6 KB | 0.0% | 0.0% |
| `/fr/faq` | 130.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 130.7 KB | 0.0% | 0.0% |
| `/fr/products` | 130.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 132.1 KB | 0.0% | 0.0% |
| `/fr/team` | 130.6 KB | 0.0% | 0.0% |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.3 ms | 28.7 ms | 5.2 ms |
| `fr` | 16.7 ms | 26.0 ms | 4.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 131.5 KB | 0.0% | 0.0% |
| `/en/about` | 130.6 KB | 0.0% | 0.0% |
| `/en/blog` | 130.6 KB | 0.0% | 0.0% |
| `/en/careers` | 131.1 KB | 0.0% | 0.0% |
| `/en/contact` | 130.6 KB | 0.0% | 0.0% |
| `/en/faq` | 130.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 130.7 KB | 0.0% | 0.0% |
| `/en/products` | 130.6 KB | 0.0% | 0.0% |
| `/en/settings` | 132.1 KB | 0.0% | 0.0% |
| `/en/team` | 130.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 131.5 KB | 0.0% | 0.0% |
| `/fr/about` | 130.6 KB | 0.0% | 0.0% |
| `/fr/blog` | 130.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 131.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 130.6 KB | 0.0% | 0.0% |
| `/fr/faq` | 130.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 130.7 KB | 0.0% | 0.0% |
| `/fr/products` | 130.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 132.1 KB | 0.0% | 0.0% |
| `/fr/team` | 130.6 KB | 0.0% | 0.0% |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.6 ms | 25.4 ms | 5.2 ms |
| `fr` | 18.7 ms | 25.8 ms | 4.8 ms |

</details>

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 7.0.0 | 11.1 KB | 35.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 201.7 KB | 50.0% | 90.0% | 20.7 KB | — | — | 19.8 ms | 27.3 ms |
| Dynamic | 🔶 | 121.9 KB | 4.9% | 90.0% | 21.1 KB | 13.5 ms | 3.9 ms | 17.6 ms | 20.6 ms |
| Scoped Static | 🔶 | 237.3 KB | 50.0% | 90.0% | 27.2 KB | — | — | 18.4 ms | 27.8 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

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

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 21.1 ms | 28.1 ms | 6.2 ms |
| `fr` | 18.5 ms | 26.5 ms | 6.2 ms |

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

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 13.5 ms | 5.2 ms | 27.1 ms | 3.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 17.6 ms | 20.6 ms | 5.0 ms |
| `fr` | 17.6 ms | 20.5 ms | 4.8 ms |

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

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.0 ms | 29.7 ms | 7.0 ms |
| `fr` | 18.8 ms | 25.9 ms | 4.6 ms |

</details>

---

## use-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.9.1 | 12.8 KB | 50.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 183.2 KB | 50.0% | 89.8% | 75.7 KB | 10.1 ms | 4.0 ms | 19.0 ms | 23.2 ms |
| Dynamic | 🔶 | 122.1 KB | 0.0% | 89.8% | 75.8 KB | 9.7 ms | 1.4 ms | 17.6 ms | 19.5 ms |
| Scoped Static | 🔶 | 128.6 KB | 0.0% | 0.0% | 87.1 KB | 20.9 ms | 5.0 ms | 19.7 ms | 27.0 ms |
| Scoped Dynamic | 🔶 | 128.6 KB | 0.0% | 0.0% | 87.1 KB | 18.6 ms | 2.4 ms | 17.2 ms | 22.6 ms |

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
| `/en/faq` | 182.8 KB | 54.4% | 88.4% |
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
| `/fr/faq` | 182.8 KB | 45.6% | 91.3% |
| `/fr/pricing` | 183.1 KB | 45.4% | 90.4% |
| `/fr/products` | 182.9 KB | 45.6% | 90.3% |
| `/fr/settings` | 184.4 KB | 45.6% | 93.2% |
| `/fr/team` | 182.9 KB | 45.6% | 89.3% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 9.1 ms | 4.9 ms | 14.5 ms | 4.6 ms |
| `fr` | 11.1 ms | 5.0 ms | 31.4 ms | 3.3 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.4 ms | 22.0 ms | 5.8 ms |
| `fr` | 18.5 ms | 24.4 ms | 4.5 ms |

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
| `/en/products` | 121.7 KB | 0.0% | 90.7% |
| `/en/settings` | 123.2 KB | 0.0% | 94.2% |
| `/en/team` | 121.7 KB | 0.0% | 88.4% |

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
| `/fr/products` | 121.7 KB | 0.0% | 90.3% |
| `/fr/settings` | 123.2 KB | 0.0% | 93.2% |
| `/fr/team` | 121.7 KB | 0.0% | 89.3% |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 10.8 ms | 5.3 ms | 25.1 ms | 0.9 ms |
| `fr` | 8.6 ms | 4.1 ms | 25.1 ms | 1.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 20.2 ms | 21.1 ms | 4.9 ms |
| `fr` | 15.1 ms | 17.8 ms | 4.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 129.3 KB | 0.0% | 0.0% |
| `/en/about` | 128.3 KB | 0.0% | 0.0% |
| `/en/blog` | 128.3 KB | 0.0% | 0.0% |
| `/en/careers` | 128.8 KB | 0.0% | 0.0% |
| `/en/contact` | 128.3 KB | 0.0% | 0.0% |
| `/en/faq` | 128.2 KB | 0.0% | 0.0% |
| `/en/pricing` | 128.4 KB | 0.0% | 0.0% |
| `/en/products` | 128.2 KB | 0.0% | 0.0% |
| `/en/settings` | 129.7 KB | 0.0% | 0.0% |
| `/en/team` | 128.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 129.3 KB | 0.0% | 0.0% |
| `/fr/about` | 128.3 KB | 0.0% | 0.0% |
| `/fr/blog` | 128.3 KB | 0.0% | 0.0% |
| `/fr/careers` | 128.8 KB | 0.0% | 0.0% |
| `/fr/contact` | 128.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 128.2 KB | 0.0% | 0.0% |
| `/fr/pricing` | 128.4 KB | 0.0% | 0.0% |
| `/fr/products` | 128.2 KB | 0.0% | 0.0% |
| `/fr/settings` | 129.7 KB | 0.0% | 0.0% |
| `/fr/team` | 128.2 KB | 0.0% | 0.0% |

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

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.0 ms | 29.5 ms | 4.6 ms |
| `fr` | 20.4 ms | 24.5 ms | 5.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 129.3 KB | 0.0% | 0.0% |
| `/en/about` | 128.3 KB | 0.0% | 0.0% |
| `/en/blog` | 128.3 KB | 0.0% | 0.0% |
| `/en/careers` | 128.8 KB | 0.0% | 0.0% |
| `/en/contact` | 128.3 KB | 0.0% | 0.0% |
| `/en/faq` | 128.2 KB | 0.0% | 0.0% |
| `/en/pricing` | 128.4 KB | 0.0% | 0.0% |
| `/en/products` | 128.2 KB | 0.0% | 0.0% |
| `/en/settings` | 129.7 KB | 0.0% | 0.0% |
| `/en/team` | 128.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 129.3 KB | 0.0% | 0.0% |
| `/fr/about` | 128.3 KB | 0.0% | 0.0% |
| `/fr/blog` | 128.3 KB | 0.0% | 0.0% |
| `/fr/careers` | 128.8 KB | 0.0% | 0.0% |
| `/fr/contact` | 128.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 128.2 KB | 0.0% | 0.0% |
| `/fr/pricing` | 128.4 KB | 0.0% | 0.0% |
| `/fr/products` | 128.2 KB | 0.0% | 0.0% |
| `/fr/settings` | 129.7 KB | 0.0% | 0.0% |
| `/fr/team` | 128.2 KB | 0.0% | 0.0% |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 18.6 ms | 6.4 ms | 61.5 ms | 2.4 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 17.3 ms | 25.1 ms | 5.8 ms |
| `fr` | 17.1 ms | 20.1 ms | 3.8 ms |

</details>

---

## wuchale

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 0.22.9 | 0.2 KB | 0.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 114.7 KB | 0.0% | 89.6% | 26.1 KB | 7.6 ms | — | 15.0 ms | 27.8 ms |
| Dynamic | 🔶 | 114.7 KB | 0.0% | 89.6% | 26.1 KB | 8.8 ms | — | 15.2 ms | 24.1 ms |
| Scoped Static | 🔶 | 120.1 KB | 0.0% | 0.0% | 26.5 KB | — | — | 15.5 ms | 21.1 ms |
| Scoped Dynamic | 🔶 | 120.3 KB | 0.0% | 0.0% | 27.1 KB | 9.8 ms | — | 14.3 ms | 20.8 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 114.9 KB | 0.0% | 61.9% |
| `/en/about` | 114.1 KB | 0.0% | 76.2% |
| `/en/blog` | 114.1 KB | 0.0% | 97.6% |
| `/en/careers` | 114.6 KB | 0.0% | 90.7% |
| `/en/contact` | 114.3 KB | 0.0% | 97.6% |
| `/en/faq` | 114.1 KB | 0.0% | 95.2% |
| `/en/pricing` | 114.3 KB | 0.0% | 93.0% |
| `/en/products` | 114.1 KB | 0.0% | 97.6% |
| `/en/settings` | 115.6 KB | 0.0% | 88.1% |
| `/en/team` | 114.1 KB | 0.0% | 97.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 115.4 KB | 0.0% | 66.0% |
| `/fr/about` | 114.6 KB | 0.0% | 72.3% |
| `/fr/blog` | 114.6 KB | 0.0% | 97.9% |
| `/fr/careers` | 115.1 KB | 0.0% | 91.7% |
| `/fr/contact` | 114.8 KB | 0.0% | 97.9% |
| `/fr/faq` | 114.6 KB | 0.0% | 97.9% |
| `/fr/pricing` | 114.8 KB | 0.0% | 91.7% |
| `/fr/products` | 114.6 KB | 0.0% | 97.9% |
| `/fr/settings` | 116.1 KB | 0.0% | 85.1% |
| `/fr/team` | 114.6 KB | 0.0% | 97.9% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.1 ms | 4.1 ms | 18.0 ms | 0.0 ms |
| `fr` | 8.1 ms | 4.2 ms | 12.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 14.9 ms | 32.2 ms | — |
| `fr` | 15.2 ms | 23.4 ms | — |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 114.9 KB | 0.0% | 61.9% |
| `/en/about` | 114.1 KB | 0.0% | 76.2% |
| `/en/blog` | 114.1 KB | 0.0% | 97.6% |
| `/en/careers` | 114.6 KB | 0.0% | 90.7% |
| `/en/contact` | 114.3 KB | 0.0% | 97.6% |
| `/en/faq` | 114.1 KB | 0.0% | 95.2% |
| `/en/pricing` | 114.3 KB | 0.0% | 93.0% |
| `/en/products` | 114.1 KB | 0.0% | 97.6% |
| `/en/settings` | 115.6 KB | 0.0% | 88.1% |
| `/en/team` | 114.0 KB | 0.0% | 97.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 115.4 KB | 0.0% | 66.0% |
| `/fr/about` | 114.6 KB | 0.0% | 72.3% |
| `/fr/blog` | 114.6 KB | 0.0% | 97.9% |
| `/fr/careers` | 115.1 KB | 0.0% | 91.7% |
| `/fr/contact` | 114.8 KB | 0.0% | 97.9% |
| `/fr/faq` | 114.6 KB | 0.0% | 97.9% |
| `/fr/pricing` | 114.8 KB | 0.0% | 91.7% |
| `/fr/products` | 114.6 KB | 0.0% | 97.9% |
| `/fr/settings` | 116.1 KB | 0.0% | 85.1% |
| `/fr/team` | 114.6 KB | 0.0% | 97.9% |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 8.8 ms | 4.6 ms | 16.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 15.1 ms | 23.9 ms | — |
| `fr` | 15.2 ms | 24.3 ms | — |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 120.3 KB | 0.0% | 0.0% |
| `/en/about` | 119.5 KB | 0.0% | 0.0% |
| `/en/blog` | 119.5 KB | 0.0% | 0.0% |
| `/en/careers` | 120.0 KB | 0.0% | 0.0% |
| `/en/contact` | 119.7 KB | 0.0% | 0.0% |
| `/en/faq` | 119.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 119.7 KB | 0.0% | 0.0% |
| `/en/products` | 119.6 KB | 0.0% | 0.0% |
| `/en/settings` | 121.1 KB | 0.0% | 0.0% |
| `/en/team` | 119.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 120.9 KB | 0.0% | 0.0% |
| `/fr/about` | 120.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 120.1 KB | 0.0% | 0.0% |
| `/fr/careers` | 120.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 120.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 120.1 KB | 0.0% | 0.0% |
| `/fr/pricing` | 120.3 KB | 0.0% | 0.0% |
| `/fr/products` | 120.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 121.6 KB | 0.0% | 0.0% |
| `/fr/team` | 120.0 KB | 0.0% | 0.0% |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.4 ms | 23.3 ms | — |
| `fr` | 12.7 ms | 18.8 ms | — |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 120.5 KB | 0.0% | 0.0% |
| `/en/about` | 119.7 KB | 0.0% | 0.0% |
| `/en/blog` | 119.7 KB | 0.0% | 0.0% |
| `/en/careers` | 120.1 KB | 0.0% | 0.0% |
| `/en/contact` | 119.9 KB | 0.0% | 0.0% |
| `/en/faq` | 119.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 119.8 KB | 0.0% | 0.0% |
| `/en/products` | 119.7 KB | 0.0% | 0.0% |
| `/en/settings` | 121.2 KB | 0.0% | 0.0% |
| `/en/team` | 119.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 121.0 KB | 0.0% | 0.0% |
| `/fr/about` | 120.2 KB | 0.0% | 0.0% |
| `/fr/blog` | 120.2 KB | 0.0% | 0.0% |
| `/fr/careers` | 120.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 120.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 120.2 KB | 0.0% | 0.0% |
| `/fr/pricing` | 120.4 KB | 0.0% | 0.0% |
| `/fr/products` | 120.2 KB | 0.0% | 0.0% |
| `/fr/settings` | 121.8 KB | 0.0% | 0.0% |
| `/fr/team` | 120.2 KB | 0.0% | 0.0% |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 9.8 ms | 5.8 ms | 19.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 15.8 ms | 22.8 ms | — |
| `fr` | 12.9 ms | 18.8 ms | — |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 12 |
| Total app entries | 34 |
| With lib size data | 10 |
| With page bundle data | 32 |
| With component data | 32 |
| With reactivity data | 18 |
| With rendering data | 32 |
