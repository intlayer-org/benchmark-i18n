# Benchmark Bloom — Results

_Generated: 2026-04-17_

## Table of Contents

- [Next.js](#next-js)
  - [Base (no i18n)](#base-no-i18n)
  - [Static — all-in-one bundle, no lazy loading](#static-all-in-one-bundle-no-lazy-loading)
  - [Dynamic — lazy-loaded, no namespacing](#dynamic-lazy-loaded-no-namespacing)
  - [Scoped Dynamic — namespaced + lazy loading (gold standard)](#scoped-dynamic-namespaced-lazy-loading-gold-standard)
- [TanStack Start (React)](#tanstack-start-react)
  - [Base (no i18n)](#base-no-i18n)
  - [Static — all-in-one bundle, no lazy loading](#static-all-in-one-bundle-no-lazy-loading)
  - [Dynamic — lazy-loaded, no namespacing](#dynamic-lazy-loaded-no-namespacing)
  - [Scoped Static — namespaced, no lazy loading](#scoped-static-namespaced-no-lazy-loading)
  - [Scoped Dynamic — namespaced + lazy loading (gold standard)](#scoped-dynamic-namespaced-lazy-loading-gold-standard)

## Metric Legend

| Column | What it measures |
| :--- | :--- |
| **Lib size (gz)** | Gzip bytes of the minified i18n library, measured via an empty component that only imports the lib |
| **Page JS avg (gz)** | Average gzip JS bundle size per page across all locales |
| **Page JS min–max** | Lightest and heaviest page JS bundle |
| **Locale leak %** | % of JS bundle containing strings from locales the user is NOT using |
| **Page leak %** | % of JS bundle containing strings from pages the user is NOT on |
| **Comp avg (gz)** | Average gzip size of individual components compiled in isolation |
| **E2E reactivity** | Wall-clock time from locale `<select>` change to `html[lang]` DOM update (ms) |
| **React Profiler** | Sum of React `actualDuration` during locale-switch re-renders (ms) |
| **Page load avg** | `PerformanceNavigationTiming.duration` — full page load time (ms) |
| **Hydration avg** | Custom perf-mark delta for React hydration phase (ms); 0 = not instrumented |

> **Status icons:** ✅ all data present · 🔶 some data missing · ⬜ no data · ❌ error  
> **⚠ INVALID** = test ran but all measured values were zero (missing instrumentation or broken test)

## Next.js

### Base (no i18n)

| Library | Version | Status | Lib size (gz) | Page JS avg (gz) | Page JS min–max (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **base-app-nextjs** | — | 🔶 partial | — | 152.7 KB | 152.0 KB – 153.3 KB | 0.0% | 29.2% | 0.7 KB | 13.9 ms | — | 13.5 ms | 9.9 ms |

<details>
<summary>Per-locale page bundle breakdown</summary>

#### base-app-nextjs

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 152.0 KB | 0.0% | 11.8% |
| `/en/about` | 152.0 KB | 0.0% | 9.1% |
| `/en/blog` | 152.8 KB | 0.0% | 18.8% |
| `/en/careers` | 152.8 KB | 0.0% | 21.4% |
| `/en/contact` | 153.3 KB | 0.0% | 75.0% |
| `/en/faq` | 152.8 KB | 0.0% | 23.1% |
| `/en/pricing` | 152.8 KB | 0.0% | 42.9% |
| `/en/products` | 152.8 KB | 0.0% | 27.3% |
| `/en/settings` | 152.8 KB | 0.0% | 37.5% |
| `/en/team` | 152.8 KB | 0.0% | 25.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 152.0 KB | 0.0% | 11.8% |
| `/fr/about` | 152.0 KB | 0.0% | 9.1% |
| `/fr/blog` | 152.8 KB | 0.0% | 18.8% |
| `/fr/careers` | 152.8 KB | 0.0% | 21.4% |
| `/fr/contact` | 153.3 KB | 0.0% | 75.0% |
| `/fr/faq` | 152.8 KB | 0.0% | 23.1% |
| `/fr/pricing` | 152.8 KB | 0.0% | 42.9% |
| `/fr/products` | 152.8 KB | 0.0% | 27.3% |
| `/fr/settings` | 152.8 KB | 0.0% | 37.5% |
| `/fr/team` | 152.8 KB | 0.0% | 25.0% |

</details>

<details>
<summary>Per-locale reactivity breakdown</summary>

| Library | Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :--- | :---: | ---: | ---: | ---: | ---: |
| **base-app-nextjs** | `en` | 16.2 ms | 12.3 ms | 26.5 ms | 0.0 ms |
| **base-app-nextjs** | `fr` | 11.5 ms | 8.4 ms | 15.6 ms | 0.0 ms |

</details>

<details>
<summary>Per-locale rendering breakdown</summary>

| Library | Locale | Page load avg | Hydration avg | React mount avg |
| :--- | :---: | ---: | ---: | ---: |
| **base-app-nextjs** | `en` | 14.5 ms | 10.9 ms | — |
| **base-app-nextjs** | `fr` | 12.5 ms | 8.9 ms | — |

</details>

### Static — all-in-one bundle, no lazy loading

| Library | Version | Status | Lib size (gz) | Page JS avg (gz) | Page JS min–max (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **next-i18next** | 16.0.5 | 🔶 partial | — | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 24.5 KB | — | — | — | — |
| **next-international** | 1.3.1 | 🔶 partial | — | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 11.6 KB | — | — | — | — |
| **next-intlayer** | 8.7.1-canary-1 | 🔶 partial | — | — | — | — | — | — | 20.3 ms | 7.8 ms | 17.1 ms | 12.4 ms |
| **paraglide-next** | — | 🔶 partial | — | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 5.4 KB | — | — | — | — |
| **tolgee** | 7.0.0 | 🔶 partial | — | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 24.2 KB | — | — | — | — |

<details>
<summary>Per-locale reactivity breakdown</summary>

| Library | Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :--- | :---: | ---: | ---: | ---: | ---: |
| **next-intlayer** | `en` | 25.3 ms | 12.3 ms | 38.7 ms | 10.8 ms |
| **next-intlayer** | `fr` | 15.3 ms | 13.6 ms | 18.1 ms | 4.8 ms |

</details>

<details>
<summary>Per-locale rendering breakdown</summary>

| Library | Locale | Page load avg | Hydration avg | React mount avg |
| :--- | :---: | ---: | ---: | ---: |
| **next-intlayer** | `en` | 19.6 ms | 14.1 ms | 7.4 ms |
| **next-intlayer** | `fr` | 14.7 ms | 10.8 ms | 5.0 ms |

</details>

### Dynamic — lazy-loaded, no namespacing

| Library | Version | Status | Lib size (gz) | Page JS avg (gz) | Page JS min–max (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **lingui** | 5.3.0 | 🔶 partial | — | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 18.5 KB | — | — | — | — |
| **next-intlayer** | 8.7.1-canary-1 | 🔶 partial | — | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 12.7 KB | 18.3 ms | — | 16.4 ms | 12.1 ms |

<details>
<summary>Per-locale reactivity breakdown</summary>

| Library | Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :--- | :---: | ---: | ---: | ---: | ---: |
| **next-intlayer** | `en` | 19.0 ms | 9.8 ms | 33.1 ms | 0.0 ms |
| **next-intlayer** | `fr` | 17.6 ms | 12.7 ms | 23.5 ms | 0.0 ms |

</details>

<details>
<summary>Per-locale rendering breakdown</summary>

| Library | Locale | Page load avg | Hydration avg | React mount avg |
| :--- | :---: | ---: | ---: | ---: |
| **next-intlayer** | `en` | 18.5 ms | 13.8 ms | — |
| **next-intlayer** | `fr` | 14.4 ms | 10.3 ms | — |

</details>

### Scoped Dynamic — namespaced + lazy loading (gold standard)

| Library | Version | Status | Lib size (gz) | Page JS avg (gz) | Page JS min–max (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **next-i18next** | 16.0.5 | 🔶 partial | — | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 26.0 KB | — | — | — | — |
| **tolgee** | 7.0.0 | 🔶 partial | — | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 31.0 KB | — | — | — | — |

## TanStack Start (React)

### Base (no i18n)

| Library | Version | Status | Lib size (gz) | Page JS avg (gz) | Page JS min–max (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **base-app-tanstack** | — | 🔶 partial | — | — | — | — | — | — | — | 0.5 ms | — | — |

<details>
<summary>Per-locale reactivity breakdown</summary>

| Library | Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :--- | :---: | ---: | ---: | ---: | ---: |
| **base-app-tanstack** | `en` | 0.0 ms | 0.0 ms | 0.0 ms | 0.5 ms |
| **base-app-tanstack** | `fr` | 0.0 ms | 0.0 ms | 0.0 ms | 0.4 ms |

</details>

### Static — all-in-one bundle, no lazy loading

| Library | Version | Status | Lib size (gz) | Page JS avg (gz) | Page JS min–max (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **intlayer** | 8.7.1-canary-1 | 🔶 partial | — | 127.2 KB | 121.6 KB – 139.4 KB | 50.0% | 0.8% | 6.9 KB | 20.0 ms | 5.3 ms | — | — |

<details>
<summary>Per-locale page bundle breakdown</summary>

#### intlayer

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
<summary>Per-locale reactivity breakdown</summary>

| Library | Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :--- | :---: | ---: | ---: | ---: | ---: |
| **intlayer** | `en` | 22.3 ms | 12.9 ms | 54.5 ms | 5.8 ms |
| **intlayer** | `fr` | 17.6 ms | 13.3 ms | 31.9 ms | 4.8 ms |

</details>

### Dynamic — lazy-loaded, no namespacing

| Library | Version | Status | Lib size (gz) | Page JS avg (gz) | Page JS min–max (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **intlayer** | 8.7.1-canary-1 | 🔶 partial | — | 117.6 KB | 116.7 KB – 119.5 KB | 0.0% | 0.8% | 4.4 KB | — | — | — | — |
| **use-intl** | 4.9.1 | 🔶 partial | — | — | — | — | — | — | 23.4 ms | 5.8 ms | — | — |

<details>
<summary>Per-locale page bundle breakdown</summary>

#### intlayer

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
<summary>Per-locale reactivity breakdown</summary>

| Library | Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :--- | :---: | ---: | ---: | ---: | ---: |
| **use-intl** | `en` | 27.4 ms | 14.1 ms | 58.7 ms | 6.8 ms |
| **use-intl** | `fr` | 19.4 ms | 14.5 ms | 33.6 ms | 4.9 ms |

</details>

### Scoped Static — namespaced, no lazy loading

| Library | Version | Status | Lib size (gz) | Page JS avg (gz) | Page JS min–max (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **lingui** | 5.3.0 | 🔶 partial | — | — | — | — | — | — | — | — | 18.5 ms | 26.9 ms |
| **react-i18next** | 17.0.2 | 🔶 partial | — | 184.0 KB | 183.6 KB – 185.3 KB | 50.0% | 89.8% | 25.3 KB | 221.8 ms | 12.3 ms | — | — |
| **tolgee** | 7.0.0 | 🔶 partial | — | — | — | — | — | — | — | — | 18.8 ms | 28.3 ms |
| **use-intl** | 4.9.1 | 🔶 partial | — | 128.6 KB | 128.2 KB – 129.7 KB | 0.0% | 0.0% | 87.1 KB | 22.7 ms | 5.4 ms | — | — |
| **wuchale** | 0.22.9 | 🔶 partial | — | — | — | — | — | — | — | — | 15.0 ms | 21.8 ms |

<details>
<summary>Per-locale page bundle breakdown</summary>

#### react-i18next

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

#### use-intl

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
<summary>Per-locale reactivity breakdown</summary>

| Library | Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :--- | :---: | ---: | ---: | ---: | ---: |
| **react-i18next** | `en` | 224.9 ms | 205.9 ms | 239.2 ms | 13.0 ms |
| **react-i18next** | `fr` | 218.6 ms | 193.5 ms | 231.6 ms | 11.5 ms |
| **use-intl** | `en` | 22.8 ms | 15.6 ms | 44.1 ms | 5.4 ms |
| **use-intl** | `fr` | 22.6 ms | 16.8 ms | 33.8 ms | 5.3 ms |

</details>

<details>
<summary>Per-locale rendering breakdown</summary>

| Library | Locale | Page load avg | Hydration avg | React mount avg |
| :--- | :---: | ---: | ---: | ---: |
| **lingui** | `en` | 18.6 ms | 30.5 ms | 5.0 ms |
| **lingui** | `fr` | 18.4 ms | 23.4 ms | 2.9 ms |
| **tolgee** | `en` | 19.5 ms | 31.2 ms | 6.7 ms |
| **tolgee** | `fr` | 18.2 ms | 25.4 ms | 4.7 ms |
| **wuchale** | `en` | 16.4 ms | 22.2 ms | 0.9 ms |
| **wuchale** | `fr` | 13.6 ms | 21.4 ms | 0.7 ms |

</details>

### Scoped Dynamic — namespaced + lazy loading (gold standard)

| Library | Version | Status | Lib size (gz) | Page JS avg (gz) | Page JS min–max (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| **wuchale** | 0.22.9 | 🔶 partial | — | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 27.1 KB | — | — | — | — |

---

## Coverage

| Metric | Apps with data |
| :--- | :--- |
| Total apps | 20 |
| Page bundle data | 5 |
| Component data | 14 |
| Reactivity data | 8 |
| Rendering data | 6 |
| Lib size data | 0 |
