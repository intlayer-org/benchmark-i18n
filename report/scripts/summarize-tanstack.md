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
- [intlayer](#intlayer)
- [lingui](#lingui)
- [react-i18next](#react-i18next)
- [tolgee](#tolgee)
- [use-intl](#use-intl)
- [wuchale](#wuchale)

## base-app-tanstack

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | — | — |

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.1-canary-1 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 127.2 KB | 50.0% | 0.8% | 6.9 KB | 20.0 ms | 5.3 ms | — | — |
| Dynamic | 🔶 | 117.6 KB | 0.0% | 0.8% | 4.4 KB | — | — | — | — |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

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
| `fr` | 17.6 ms | 13.3 ms | 31.9 ms | 4.8 ms |

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

---

## lingui

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 5.3.0 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | — | — | — | — | — | — | 18.5 ms | 26.9 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.6 ms | 30.5 ms | 5.0 ms |
| `fr` | 18.4 ms | 23.4 ms | 2.9 ms |

</details>

---

## react-i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 17.0.2 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | 184.0 KB | 50.0% | 89.8% | 25.3 KB | 221.8 ms | 12.3 ms | — | — |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

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

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 7.0.0 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | — | — | — | — | — | — | 18.8 ms | 28.3 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.5 ms | 31.2 ms | 6.7 ms |
| `fr` | 18.2 ms | 25.4 ms | 4.7 ms |

</details>

---

## use-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.9.1 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | 🔶 | — | — | — | — | 23.4 ms | 5.8 ms | — | — |
| Scoped Static | 🔶 | 128.6 KB | 0.0% | 0.0% | 87.1 KB | 22.7 ms | 5.4 ms | — | — |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 27.4 ms | 14.1 ms | 58.7 ms | 6.8 ms |
| `fr` | 19.4 ms | 14.5 ms | 33.6 ms | 4.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 129.4 KB | 0.0% | 0.0% |
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
| `/fr/` | 129.4 KB | 0.0% | 0.0% |
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
| `fr` | 22.6 ms | 16.8 ms | 33.8 ms | 5.3 ms |

</details>

---

## wuchale

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 0.22.9 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | — | — | — | — | — | — | 15.0 ms | 21.8 ms |
| Scoped Dynamic | 🔶 | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 27.1 KB | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 16.4 ms | 22.2 ms | 0.9 ms |
| `fr` | 13.6 ms | 21.4 ms | 0.7 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 7 |
| Total app entries | 10 |
| With lib size data | 0 |
| With page bundle data | 4 |
| With component data | 5 |
| With reactivity data | 4 |
| With rendering data | 3 |
