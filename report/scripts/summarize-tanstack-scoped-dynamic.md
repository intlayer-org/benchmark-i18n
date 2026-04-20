# TanStack Start (React) — i18n Benchmark Results

_Generated: 2026-04-19_

## Metric Legend

| Column               | What it measures                                                              |
| :------------------- | :---------------------------------------------------------------------------- |
| **Lib size (gz)**    | Gzip bytes of the minified i18n library via an empty-component build          |
| **Page JS avg (gz)** | Average gzip JS bundle per page across all locales                            |
| **Locale leak %**    | % of JS bundle containing strings from locales the user is NOT using          |
| **Page leak %**      | % of JS bundle containing strings from pages the user is NOT on               |
| **Comp avg (gz)**    | Average gzip size of individual components compiled in isolation              |
| **E2E reactivity**   | Wall-clock time from locale `<select>` change to `html[lang]` DOM update (ms) |
| **React Profiler**   | Sum of React `actualDuration` during locale-switch re-renders (ms)            |
| **Page load**        | `PerformanceNavigationTiming.duration` — full page load time (ms)             |
| **Hydration avg**    | Custom perf-mark delta for React hydration phase (ms); — = not instrumented   |

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
| :------ | ------------: | -------------: |
| —       |        0.0 KB |         0.0 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic |     ✅     |         111.0 KB |          0.0% |                      0.0% |        0.7 KB |         8.9 ms |         1.2 ms |   25.9 ms |   26.6 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 112.3 KB |          0.0% |        0.0% |
| `/en/about`    | 111.1 KB |          0.0% |        0.0% |
| `/en/blog`     | 110.6 KB |          0.0% |        0.0% |
| `/en/careers`  | 111.0 KB |          0.0% |        0.0% |
| `/en/contact`  | 110.4 KB |          0.0% |        0.0% |
| `/en/faq`      | 110.9 KB |          0.0% |        0.0% |
| `/en/pricing`  | 110.5 KB |          0.0% |        0.0% |
| `/en/products` | 110.5 KB |          0.0% |        0.0% |
| `/en/settings` | 111.8 KB |          0.0% |        0.0% |
| `/en/team`     | 110.5 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 112.3 KB |          0.0% |        0.0% |
| `/fr/about`    | 111.1 KB |          0.0% |        0.0% |
| `/fr/blog`     | 110.6 KB |          0.0% |        0.0% |
| `/fr/careers`  | 111.0 KB |          0.0% |        0.0% |
| `/fr/contact`  | 110.4 KB |          0.0% |        0.0% |
| `/fr/faq`      | 110.9 KB |          0.0% |        0.0% |
| `/fr/pricing`  | 110.5 KB |          0.0% |        0.0% |
| `/fr/products` | 110.5 KB |          0.0% |        0.0% |
| `/fr/settings` | 111.8 KB |          0.0% |        0.0% |
| `/fr/team`     | 110.5 KB |          0.0% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/tanstack-base-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  |  8.4 ms |  4.7 ms | 20.0 ms |       1.0 ms |
|  `fr`  |  9.4 ms |  4.3 ms | 23.4 ms |       1.4 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   28.4 ms |   30.5 ms |      8.8 ms |
|  `fr`  |   23.3 ms |   22.6 ms |      5.4 ms |

</details>

---

## gt-react

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 10.18.3 |      679.3 KB |      2507.2 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic |     🔶     |         573.2 KB |          0.0% |                      0.0% |      687.5 KB |        47.2 ms |         4.8 ms |   19.1 ms |   35.8 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 573.2 KB |          0.0% |        0.0% |
| `/en/about`    | 573.2 KB |          0.0% |        0.0% |
| `/en/blog`     | 573.1 KB |          0.0% |        0.0% |
| `/en/careers`  | 573.2 KB |          0.0% |        0.0% |
| `/en/contact`  | 573.2 KB |          0.0% |        0.0% |
| `/en/faq`      | 573.1 KB |          0.0% |        0.0% |
| `/en/pricing`  | 573.1 KB |          0.0% |        0.0% |
| `/en/products` | 573.1 KB |          0.0% |        0.0% |
| `/en/settings` | 573.3 KB |          0.0% |        0.0% |
| `/en/team`     | 573.1 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 573.2 KB |          0.0% |        0.0% |
| `/fr/about`    | 573.2 KB |          0.0% |        0.0% |
| `/fr/blog`     | 573.1 KB |          0.0% |        0.0% |
| `/fr/careers`  | 573.2 KB |          0.0% |        0.0% |
| `/fr/contact`  | 573.2 KB |          0.0% |        0.0% |
| `/fr/faq`      | 573.1 KB |          0.0% |        0.0% |
| `/fr/pricing`  | 573.1 KB |          0.0% |        0.0% |
| `/fr/products` | 573.1 KB |          0.0% |        0.0% |
| `/fr/settings` | 573.3 KB |          0.0% |        0.0% |
| `/fr/team`     | 573.1 KB |          0.0% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/dynamic/tanstack-scoped-dynamic-gt-react-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 34.4 ms | 18.2 ms | 63.8 ms |       4.7 ms |
|  `fr`  | 60.1 ms | 45.0 ms | 77.4 ms |       4.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   20.1 ms |   36.6 ms |      3.6 ms |
|  `fr`  |   18.0 ms |   35.1 ms |      3.3 ms |

</details>

---

## intlayer

| Version        | Lib size (gz) | Lib size (min) |
| :------------- | ------------: | -------------: |
| 8.7.1-canary-1 |        4.6 KB |        12.4 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic |     🔶     |         117.6 KB |          0.0% |                      0.8% |        4.4 KB |              — |              — |   17.3 ms |   30.2 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 119.1 KB |          0.0% |        5.9% |
| `/en/about`    | 117.4 KB |          0.0% |        0.0% |
| `/en/blog`     | 117.0 KB |          0.0% |        0.0% |
| `/en/careers`  | 117.7 KB |          0.0% |        0.0% |
| `/en/contact`  | 116.7 KB |          0.0% |        0.0% |
| `/en/faq`      | 117.2 KB |          0.0% |        0.0% |
| `/en/pricing`  | 116.9 KB |          0.0% |        0.0% |
| `/en/products` | 116.8 KB |          0.0% |        0.0% |
| `/en/settings` | 119.0 KB |          0.0% |        0.0% |
| `/en/team`     | 116.9 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 119.5 KB |          0.0% |       11.1% |
| `/fr/about`    | 117.7 KB |          0.0% |        0.0% |
| `/fr/blog`     | 117.2 KB |          0.0% |        0.0% |
| `/fr/careers`  | 117.9 KB |          0.0% |        0.0% |
| `/fr/contact`  | 116.8 KB |          0.0% |        0.0% |
| `/fr/faq`      | 117.4 KB |          0.0% |        0.0% |
| `/fr/pricing`  | 117.0 KB |          0.0% |        0.0% |
| `/fr/products` | 117.0 KB |          0.0% |        0.0% |
| `/fr/settings` | 119.2 KB |          0.0% |        0.0% |
| `/fr/team`     | 117.0 KB |          0.0% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/dynamic/tanstack-scoped-dynamic-intlayer-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   18.6 ms |   33.6 ms |      1.2 ms |
|  `fr`  |   16.0 ms |   26.8 ms |      1.1 ms |

</details>

---

## lingo.dev

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 0.133.9 |        7.6 KB |        19.8 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic |     ✅     |         122.6 KB |          0.0% |                      0.0% |       18.9 KB |        57.7 ms |         4.8 ms |   16.4 ms |   22.5 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 124.2 KB |          0.0% |        0.0% |
| `/en/about`    | 122.5 KB |          0.0% |        0.0% |
| `/en/blog`     | 122.3 KB |          0.0% |        0.0% |
| `/en/careers`  | 122.7 KB |          0.0% |        0.0% |
| `/en/contact`  | 121.9 KB |          0.0% |        0.0% |
| `/en/faq`      | 122.4 KB |          0.0% |        0.0% |
| `/en/pricing`  | 122.1 KB |          0.0% |        0.0% |
| `/en/products` | 122.0 KB |          0.0% |        0.0% |
| `/en/settings` | 123.5 KB |          0.0% |        0.0% |
| `/en/team`     | 122.2 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 124.2 KB |          0.0% |        0.0% |
| `/fr/about`    | 122.5 KB |          0.0% |        0.0% |
| `/fr/blog`     | 122.3 KB |          0.0% |        0.0% |
| `/fr/careers`  | 122.7 KB |          0.0% |        0.0% |
| `/fr/contact`  | 121.9 KB |          0.0% |        0.0% |
| `/fr/faq`      | 122.4 KB |          0.0% |        0.0% |
| `/fr/pricing`  | 122.1 KB |          0.0% |        0.0% |
| `/fr/products` | 122.0 KB |          0.0% |        0.0% |
| `/fr/settings` | 123.5 KB |          0.0% |        0.0% |
| `/fr/team`     | 122.2 KB |          0.0% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-static-lingo.dev-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale |  E2E avg | E2E min |  E2E max | Profiler avg |
| :----: | -------: | ------: | -------: | -----------: |
|  `en`  | 109.6 ms | 69.2 ms | 157.2 ms |       6.5 ms |
|  `fr`  |   5.8 ms |  2.6 ms |  14.9 ms |       3.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   17.0 ms |   23.6 ms |      6.4 ms |
|  `fr`  |   15.8 ms |   21.5 ms |      3.8 ms |

</details>

---

## lingui

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 5.3.0   |       10.0 KB |        32.4 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic |     🔶     |         120.2 KB |          8.6% |                      0.0% |       83.7 KB |        42.1 ms |         4.5 ms |   17.1 ms |   23.6 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 120.8 KB |          0.0% |        0.0% |
| `/en/about`    | 119.7 KB |          0.0% |        0.0% |
| `/en/blog`     | 119.7 KB |          0.0% |        0.0% |
| `/en/careers`  | 120.1 KB |          0.0% |        0.0% |
| `/en/contact`  | 119.7 KB |          0.0% |        0.0% |
| `/en/faq`      | 120.5 KB |          0.0% |        0.0% |
| `/en/pricing`  | 120.0 KB |          0.0% |        0.0% |
| `/en/products` | 119.9 KB |          0.0% |        0.0% |
| `/en/settings` | 121.4 KB |          0.0% |        0.0% |
| `/en/team`     | 120.1 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 120.8 KB |          0.0% |        0.0% |
| `/fr/about`    | 119.7 KB |          0.0% |        0.0% |
| `/fr/blog`     | 119.7 KB |          0.0% |        0.0% |
| `/fr/careers`  | 120.1 KB |         25.0% |        0.0% |
| `/fr/contact`  | 119.7 KB |          0.0% |        0.0% |
| `/fr/faq`      | 120.5 KB |         45.5% |        0.0% |
| `/fr/pricing`  | 120.0 KB |          7.1% |        0.0% |
| `/fr/products` | 119.9 KB |         20.0% |        0.0% |
| `/fr/settings` | 121.4 KB |         33.3% |        0.0% |
| `/fr/team`     | 120.1 KB |         41.7% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/dynamic/tanstack-scoped-dynamic-lingui-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 32.9 ms | 13.3 ms | 80.7 ms |       4.3 ms |
|  `fr`  | 51.3 ms | 28.0 ms | 84.4 ms |       4.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   16.9 ms |   26.5 ms |      6.2 ms |
|  `fr`  |   17.3 ms |   20.7 ms |      4.2 ms |

</details>

---

## paraglide

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 2.15.1  |        1.4 KB |         3.2 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic |     ✅     |         192.2 KB |         50.0% |                     89.8% |        5.1 KB |         6.7 ms |         2.3 ms |   21.8 ms |   26.0 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 192.9 KB |         54.1% |       81.6% |
| `/en/about`    | 191.9 KB |         54.1% |       88.5% |
| `/en/blog`     | 191.9 KB |         54.1% |       85.1% |
| `/en/careers`  | 192.4 KB |         54.1% |       87.5% |
| `/en/contact`  | 192.1 KB |         54.1% |       98.9% |
| `/en/faq`      | 191.8 KB |         54.1% |       88.5% |
| `/en/pricing`  | 192.1 KB |         53.8% |       95.5% |
| `/en/products` | 191.9 KB |         54.1% |       90.8% |
| `/en/settings` | 193.4 KB |         54.1% |       93.1% |
| `/en/team`     | 191.8 KB |         54.1% |       88.5% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 192.9 KB |         45.9% |       84.5% |
| `/fr/about`    | 191.9 KB |         45.9% |       86.4% |
| `/fr/blog`     | 191.9 KB |         45.9% |       87.4% |
| `/fr/careers`  | 192.4 KB |         45.9% |       87.5% |
| `/fr/contact`  | 192.1 KB |         45.9% |       98.1% |
| `/fr/faq`      | 191.8 KB |         45.9% |       91.3% |
| `/fr/pricing`  | 192.1 KB |         45.6% |       90.4% |
| `/fr/products` | 191.9 KB |         45.9% |       90.3% |
| `/fr/settings` | 193.4 KB |         45.9% |       93.2% |
| `/fr/team`     | 191.8 KB |         45.9% |       89.3% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-static-paraglide-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  |  5.9 ms |  3.3 ms | 15.0 ms |       1.3 ms |
|  `fr`  |  7.5 ms |  3.4 ms | 22.2 ms |       3.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   17.2 ms |   22.7 ms |      6.4 ms |
|  `fr`  |   26.5 ms |   29.2 ms |      6.9 ms |

</details>

---

## react-i18next

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 17.0.2  |       17.3 KB |        59.8 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic |     🔶     |         127.7 KB |          0.0% |                      0.0% |       17.7 KB |        21.1 ms |         5.9 ms |   19.8 ms |   28.9 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 128.5 KB |          0.0% |        0.0% |
| `/en/about`    | 127.5 KB |          0.0% |        0.0% |
| `/en/blog`     | 127.4 KB |          0.0% |        0.0% |
| `/en/careers`  | 127.7 KB |          0.0% |        0.0% |
| `/en/contact`  | 127.4 KB |          0.0% |        0.0% |
| `/en/faq`      | 127.2 KB |          0.0% |        0.0% |
| `/en/pricing`  | 127.5 KB |          0.0% |        0.0% |
| `/en/products` | 127.3 KB |          0.0% |        0.0% |
| `/en/settings` | 128.9 KB |          0.0% |        0.0% |
| `/en/team`     | 127.4 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 128.5 KB |          0.0% |        0.0% |
| `/fr/about`    | 127.5 KB |          0.0% |        0.0% |
| `/fr/blog`     | 127.4 KB |          0.0% |        0.0% |
| `/fr/careers`  | 127.7 KB |          0.0% |        0.0% |
| `/fr/contact`  | 127.4 KB |          0.0% |        0.0% |
| `/fr/faq`      | 127.2 KB |          0.0% |        0.0% |
| `/fr/pricing`  | 127.5 KB |          0.0% |        0.0% |
| `/fr/products` | 127.3 KB |          0.0% |        0.0% |
| `/fr/settings` | 128.9 KB |          0.0% |        0.0% |
| `/fr/team`     | 127.4 KB |          0.0% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/dynamic/tanstack-scoped-dynamic-react-i18next-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 23.9 ms | 13.0 ms | 65.6 ms |       6.9 ms |
|  `fr`  | 18.3 ms | 12.5 ms | 39.5 ms |       4.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   20.6 ms |   29.0 ms |      5.6 ms |
|  `fr`  |   19.1 ms |   28.7 ms |      6.1 ms |

</details>

---

## react-intl

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 10.1.1  |       14.4 KB |        59.0 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic |     🔶     |         130.9 KB |          0.0% |                      0.0% |       23.9 KB |              — |              — |   23.0 ms |   41.4 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 131.5 KB |          0.0% |        0.0% |
| `/en/about`    | 130.6 KB |          0.0% |        0.0% |
| `/en/blog`     | 130.6 KB |          0.0% |        0.0% |
| `/en/careers`  | 131.1 KB |          0.0% |        0.0% |
| `/en/contact`  | 130.6 KB |          0.0% |        0.0% |
| `/en/faq`      | 130.5 KB |          0.0% |        0.0% |
| `/en/pricing`  | 130.7 KB |          0.0% |        0.0% |
| `/en/products` | 130.6 KB |          0.0% |        0.0% |
| `/en/settings` | 132.1 KB |          0.0% |        0.0% |
| `/en/team`     | 130.6 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 131.5 KB |          0.0% |        0.0% |
| `/fr/about`    | 130.6 KB |          0.0% |        0.0% |
| `/fr/blog`     | 130.6 KB |          0.0% |        0.0% |
| `/fr/careers`  | 131.1 KB |          0.0% |        0.0% |
| `/fr/contact`  | 130.6 KB |          0.0% |        0.0% |
| `/fr/faq`      | 130.5 KB |          0.0% |        0.0% |
| `/fr/pricing`  | 130.7 KB |          0.0% |        0.0% |
| `/fr/products` | 130.6 KB |          0.0% |        0.0% |
| `/fr/settings` | 132.1 KB |          0.0% |        0.0% |
| `/fr/team`     | 130.6 KB |          0.0% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/dynamic/tanstack-scoped-dynamic-react-intl-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   27.1 ms |   44.8 ms |      7.8 ms |
|  `fr`  |   19.0 ms |   37.9 ms |      5.9 ms |

</details>

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 7.0.0   |       11.1 KB |        35.9 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic |     🔶     |         237.3 KB |         50.0% |                     90.0% |       27.2 KB |        45.0 ms |         5.4 ms |   19.5 ms |   28.5 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 238.8 KB |         55.1% |       82.6% |
| `/en/about`    | 237.5 KB |         55.1% |       89.1% |
| `/en/blog`     | 237.1 KB |         55.1% |       85.9% |
| `/en/careers`  | 237.5 KB |         55.1% |       88.0% |
| `/en/contact`  | 236.7 KB |         55.1% |       97.8% |
| `/en/faq`      | 237.3 KB |         55.1% |       89.1% |
| `/en/pricing`  | 236.8 KB |         55.1% |       89.1% |
| `/en/products` | 236.7 KB |         55.1% |       94.6% |
| `/en/settings` | 238.2 KB |         55.1% |       94.6% |
| `/en/team`     | 236.8 KB |         55.1% |       89.1% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 238.8 KB |         44.9% |       84.3% |
| `/fr/about`    | 237.5 KB |         44.9% |       87.3% |
| `/fr/blog`     | 237.1 KB |         44.9% |       87.3% |
| `/fr/careers`  | 237.5 KB |         44.9% |       89.2% |
| `/fr/contact`  | 236.7 KB |         44.9% |       98.0% |
| `/fr/faq`      | 237.3 KB |         44.9% |       90.2% |
| `/fr/pricing`  | 236.8 KB |         44.9% |       87.3% |
| `/fr/products` | 236.7 KB |         44.9% |       92.2% |
| `/fr/settings` | 238.2 KB |         44.9% |       94.1% |
| `/fr/team`     | 236.8 KB |         44.9% |       90.2% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-scoped-static-tolgee-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min |  E2E max | Profiler avg |
| :----: | ------: | ------: | -------: | -----------: |
|  `en`  | 60.1 ms | 21.4 ms | 135.7 ms |       5.7 ms |
|  `fr`  | 30.0 ms | 20.8 ms |  39.7 ms |       5.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   19.2 ms |   28.4 ms |      4.7 ms |
|  `fr`  |   19.9 ms |   28.7 ms |      4.3 ms |

</details>

---

## use-intl

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 4.9.1   |       12.8 KB |        50.8 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic |     🔶     |         128.6 KB |          0.0% |                      0.0% |       87.1 KB |        19.8 ms |         3.5 ms |   17.8 ms |   24.1 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 129.3 KB |          0.0% |        0.0% |
| `/en/about`    | 128.3 KB |          0.0% |        0.0% |
| `/en/blog`     | 128.3 KB |          0.0% |        0.0% |
| `/en/careers`  | 128.8 KB |          0.0% |        0.0% |
| `/en/contact`  | 128.3 KB |          0.0% |        0.0% |
| `/en/faq`      | 128.2 KB |          0.0% |        0.0% |
| `/en/pricing`  | 128.4 KB |          0.0% |        0.0% |
| `/en/products` | 128.2 KB |          0.0% |        0.0% |
| `/en/settings` | 129.7 KB |          0.0% |        0.0% |
| `/en/team`     | 128.2 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 129.3 KB |          0.0% |        0.0% |
| `/fr/about`    | 128.3 KB |          0.0% |        0.0% |
| `/fr/blog`     | 128.3 KB |          0.0% |        0.0% |
| `/fr/careers`  | 128.8 KB |          0.0% |        0.0% |
| `/fr/contact`  | 128.3 KB |          0.0% |        0.0% |
| `/fr/faq`      | 128.2 KB |          0.0% |        0.0% |
| `/fr/pricing`  | 128.4 KB |          0.0% |        0.0% |
| `/fr/products` | 128.2 KB |          0.0% |        0.0% |
| `/fr/settings` | 129.7 KB |          0.0% |        0.0% |
| `/fr/team`     | 128.2 KB |          0.0% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/dynamic/tanstack-scoped-dynamic-use-intl-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `fr`  | 19.8 ms |  8.3 ms | 62.1 ms |       3.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   19.2 ms |   24.9 ms |      3.7 ms |
|  `fr`  |   16.5 ms |   23.2 ms |      3.6 ms |

</details>

---

## wuchale

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 0.22.9  |        0.2 KB |         0.2 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic |     🔶     |        ⚠ INVALID |     ⚠ INVALID |                 ⚠ INVALID |       27.1 KB |        23.0 ms |         4.0 ms |   16.7 ms |   23.6 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 36.2 ms | 15.4 ms | 81.3 ms |       4.0 ms |
|  `fr`  |  9.8 ms |  5.8 ms | 19.6 ms |       0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   15.1 ms |   20.2 ms |           — |
|  `fr`  |   18.4 ms |   27.0 ms |           — |

</details>

---

## Coverage

| Metric                | Count |
| :-------------------- | :---- |
| Total libraries       | 11    |
| Total app entries     | 33    |
| With lib size data    | 11    |
| With page bundle data | 10    |
| With component data   | 11    |
| With reactivity data  | 9     |
| With rendering data   | 11    |
