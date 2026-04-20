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
| Scoped Static  |     ✅     |         111.0 KB |          0.0% |                      0.0% |        0.7 KB |         8.9 ms |         1.2 ms |   25.9 ms |   26.6 ms |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

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
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  |  8.4 ms |  4.7 ms | 20.0 ms |       1.0 ms |
|  `fr`  |  9.4 ms |  4.3 ms | 23.4 ms |       1.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

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
| Scoped Static  |     🔶     |         596.8 KB |          0.0% |                     82.2% |      683.3 KB |        46.7 ms |         5.0 ms |   17.5 ms |   34.9 ms |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 596.8 KB |          0.0% |       64.4% |
| `/en/about`    | 596.8 KB |          0.0% |       77.8% |
| `/en/blog`     | 596.7 KB |          0.0% |       77.6% |
| `/en/careers`  | 596.8 KB |          0.0% |       75.6% |
| `/en/contact`  | 596.8 KB |          0.0% |       97.8% |
| `/en/faq`      | 596.7 KB |          0.0% |       81.8% |
| `/en/pricing`  | 596.8 KB |          0.0% |       91.8% |
| `/en/products` | 596.7 KB |          0.0% |       82.2% |
| `/en/settings` | 596.9 KB |          0.0% |       90.0% |
| `/en/team`     | 596.7 KB |          0.0% |       83.3% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 596.8 KB |          0.0% |       64.4% |
| `/fr/about`    | 596.8 KB |          0.0% |       77.8% |
| `/fr/blog`     | 596.7 KB |          0.0% |       77.6% |
| `/fr/careers`  | 596.8 KB |          0.0% |       75.6% |
| `/fr/contact`  | 596.8 KB |          0.0% |       97.8% |
| `/fr/faq`      | 596.7 KB |          0.0% |       81.8% |
| `/fr/pricing`  | 596.8 KB |          0.0% |       91.8% |
| `/fr/products` | 596.7 KB |          0.0% |       82.2% |
| `/fr/settings` | 596.9 KB |          0.0% |       90.0% |
| `/fr/team`     | 596.7 KB |          0.0% |       83.3% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-scoped-static-gt-react-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 32.8 ms | 17.5 ms | 55.5 ms |       4.9 ms |
|  `fr`  | 60.6 ms | 43.9 ms | 76.9 ms |       5.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   18.9 ms |   31.7 ms |      3.3 ms |
|  `fr`  |   16.0 ms |   38.0 ms |      3.1 ms |

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
| Scoped Static  |     ✅     |         127.2 KB |         50.0% |                      0.8% |        6.9 KB |        15.6 ms |         4.9 ms |   18.0 ms |   23.7 ms |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 139.4 KB |         51.4% |        5.9% |
| `/en/about`    | 131.5 KB |         58.3% |        0.0% |
| `/en/blog`     | 125.8 KB |         50.0% |        0.0% |
| `/en/careers`  | 126.8 KB |         53.8% |        0.0% |
| `/en/contact`  | 121.6 KB |         60.0% |        0.0% |
| `/en/faq`      | 129.6 KB |         47.6% |        0.0% |
| `/en/pricing`  | 123.0 KB |         68.8% |        0.0% |
| `/en/products` | 124.7 KB |         55.0% |        0.0% |
| `/en/settings` | 124.6 KB |         57.1% |        0.0% |
| `/en/team`     | 125.1 KB |         52.2% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 139.4 KB |         48.6% |       11.1% |
| `/fr/about`    | 131.5 KB |         41.7% |        0.0% |
| `/fr/blog`     | 125.8 KB |         50.0% |        0.0% |
| `/fr/careers`  | 126.8 KB |         46.2% |        0.0% |
| `/fr/contact`  | 121.6 KB |         40.0% |        0.0% |
| `/fr/faq`      | 129.6 KB |         52.4% |        0.0% |
| `/fr/pricing`  | 123.0 KB |         31.3% |        0.0% |
| `/fr/products` | 124.7 KB |         45.0% |        0.0% |
| `/fr/settings` | 124.6 KB |         42.9% |        0.0% |
| `/fr/team`     | 125.1 KB |         47.8% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-static-intlayer-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 22.3 ms | 12.9 ms | 54.5 ms |       5.8 ms |
|  `fr`  |  8.8 ms |  3.0 ms | 30.4 ms |       3.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   18.5 ms |   25.3 ms |      6.1 ms |
|  `fr`  |   17.5 ms |   22.0 ms |      5.5 ms |

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
| Scoped Static  |     ✅     |         122.6 KB |          0.0% |                      0.0% |       18.9 KB |        57.7 ms |         4.8 ms |   16.4 ms |   22.5 ms |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-static-lingo.dev-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale |  E2E avg | E2E min |  E2E max | Profiler avg |
| :----: | -------: | ------: | -------: | -----------: |
|  `en`  | 109.6 ms | 69.2 ms | 157.2 ms |       6.5 ms |
|  `fr`  |   5.8 ms |  2.6 ms |  14.9 ms |       3.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

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
| Scoped Static  |     🔶     |         120.6 KB |          4.0% |                      0.0% |      147.9 KB |              — |              — |   16.8 ms |   27.5 ms |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 121.3 KB |          0.0% |        0.0% |
| `/en/about`    | 120.2 KB |          0.0% |        0.0% |
| `/en/blog`     | 120.2 KB |          0.0% |        0.0% |
| `/en/careers`  | 120.6 KB |          0.0% |        0.0% |
| `/en/contact`  | 120.2 KB |          0.0% |        0.0% |
| `/en/faq`      | 120.9 KB |          0.0% |        0.0% |
| `/en/pricing`  | 120.5 KB |          0.0% |        0.0% |
| `/en/products` | 120.3 KB |          0.0% |        0.0% |
| `/en/settings` | 121.5 KB |          0.0% |        0.0% |
| `/en/team`     | 120.4 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 121.3 KB |          0.0% |        0.0% |
| `/fr/about`    | 120.2 KB |          0.0% |        0.0% |
| `/fr/blog`     | 120.2 KB |          0.0% |        0.0% |
| `/fr/careers`  | 120.6 KB |         25.0% |        0.0% |
| `/fr/contact`  | 120.2 KB |          0.0% |        0.0% |
| `/fr/faq`      | 120.9 KB |         42.1% |        0.0% |
| `/fr/pricing`  | 120.5 KB |         13.3% |        0.0% |
| `/fr/products` | 120.3 KB |          0.0% |        0.0% |
| `/fr/settings` | 121.5 KB |          0.0% |        0.0% |
| `/fr/team`     | 120.4 KB |          0.0% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-scoped-static-lingui-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   19.0 ms |   32.4 ms |      6.2 ms |
|  `fr`  |   14.6 ms |   22.7 ms |      3.7 ms |

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
| Scoped Static  |     ✅     |         192.2 KB |         50.0% |                     89.8% |        5.1 KB |         6.7 ms |         2.3 ms |   21.8 ms |   26.0 ms |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-static-paraglide-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  |  5.9 ms |  3.3 ms | 15.0 ms |       1.3 ms |
|  `fr`  |  7.5 ms |  3.4 ms | 22.2 ms |       3.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

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
| Scoped Static  |     🔶     |         184.0 KB |         50.0% |                     89.8% |       25.3 KB |       186.0 ms |         8.6 ms |   15.4 ms |   26.1 ms |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 184.8 KB |         54.6% |       79.7% |
| `/en/about`    | 183.8 KB |         54.6% |       84.8% |
| `/en/blog`     | 183.8 KB |         54.6% |       83.5% |
| `/en/careers`  | 184.1 KB |         54.6% |       94.9% |
| `/en/contact`  | 183.8 KB |         54.6% |       97.5% |
| `/en/faq`      | 183.6 KB |         54.6% |       91.1% |
| `/en/pricing`  | 183.9 KB |         54.6% |       96.2% |
| `/en/products` | 183.6 KB |         54.6% |       88.6% |
| `/en/settings` | 185.3 KB |         54.6% |       93.8% |
| `/en/team`     | 183.8 KB |         54.6% |       87.3% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 184.8 KB |         45.4% |       83.2% |
| `/fr/about`    | 183.8 KB |         45.4% |       81.1% |
| `/fr/blog`     | 183.8 KB |         45.4% |       86.3% |
| `/fr/careers`  | 184.1 KB |         45.4% |       94.7% |
| `/fr/contact`  | 183.8 KB |         45.4% |       97.9% |
| `/fr/faq`      | 183.6 KB |         45.4% |       93.7% |
| `/fr/pricing`  | 183.9 KB |         45.4% |       91.6% |
| `/fr/products` | 183.6 KB |         45.4% |       88.4% |
| `/fr/settings` | 185.3 KB |         45.4% |       92.7% |
| `/fr/team`     | 183.8 KB |         45.4% |       88.4% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-scoped-static-react-i18next-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale |  E2E avg |  E2E min |  E2E max | Profiler avg |
| :----: | -------: | -------: | -------: | -----------: |
|  `en`  | 224.9 ms | 205.9 ms | 239.2 ms |      13.0 ms |
|  `fr`  | 147.1 ms | 116.1 ms | 204.9 ms |       4.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   15.8 ms |   30.8 ms |      7.2 ms |
|  `fr`  |   15.0 ms |   21.5 ms |      4.4 ms |

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
| Scoped Static  |     🔶     |         130.9 KB |          0.0% |                      0.0% |       23.9 KB |              — |              — |   17.5 ms |   27.4 ms |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-scoped-static-react-intl-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   18.3 ms |   28.7 ms |      5.2 ms |
|  `fr`  |   16.7 ms |   26.0 ms |      4.9 ms |

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
| Scoped Static  |     🔶     |         237.3 KB |         50.0% |                     90.0% |       27.2 KB |        45.0 ms |         5.4 ms |   19.5 ms |   28.5 ms |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-scoped-static-tolgee-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min |  E2E max | Profiler avg |
| :----: | ------: | ------: | -------: | -----------: |
|  `en`  | 60.1 ms | 21.4 ms | 135.7 ms |       5.7 ms |
|  `fr`  | 30.0 ms | 20.8 ms |  39.7 ms |       5.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

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
| Scoped Static  |     🔶     |         128.6 KB |          0.0% |                      0.0% |       87.1 KB |        20.9 ms |         5.0 ms |   19.7 ms |   27.0 ms |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-scoped-static-use-intl-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 22.8 ms | 15.6 ms | 44.1 ms |       5.4 ms |
|  `fr`  | 19.0 ms | 10.5 ms | 49.3 ms |       4.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   19.0 ms |   29.5 ms |      4.6 ms |
|  `fr`  |   20.4 ms |   24.5 ms |      5.2 ms |

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
| Scoped Static  |     🔶     |         120.1 KB |          0.0% |                      0.0% |       26.5 KB |              — |              — |   15.3 ms |   21.5 ms |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 120.3 KB |          0.0% |        0.0% |
| `/en/about`    | 119.5 KB |          0.0% |        0.0% |
| `/en/blog`     | 119.5 KB |          0.0% |        0.0% |
| `/en/careers`  | 120.0 KB |          0.0% |        0.0% |
| `/en/contact`  | 119.7 KB |          0.0% |        0.0% |
| `/en/faq`      | 119.5 KB |          0.0% |        0.0% |
| `/en/pricing`  | 119.7 KB |          0.0% |        0.0% |
| `/en/products` | 119.6 KB |          0.0% |        0.0% |
| `/en/settings` | 121.1 KB |          0.0% |        0.0% |
| `/en/team`     | 119.5 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 120.9 KB |          0.0% |        0.0% |
| `/fr/about`    | 120.0 KB |          0.0% |        0.0% |
| `/fr/blog`     | 120.1 KB |          0.0% |        0.0% |
| `/fr/careers`  | 120.5 KB |          0.0% |        0.0% |
| `/fr/contact`  | 120.3 KB |          0.0% |        0.0% |
| `/fr/faq`      | 120.1 KB |          0.0% |        0.0% |
| `/fr/pricing`  | 120.3 KB |          0.0% |        0.0% |
| `/fr/products` | 120.1 KB |          0.0% |        0.0% |
| `/fr/settings` | 121.6 KB |          0.0% |        0.0% |
| `/fr/team`     | 120.0 KB |          0.0% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/tanstack-scoped-static-wuchale-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   15.5 ms |   23.1 ms |           — |
|  `fr`  |   15.1 ms |   20.0 ms |           — |

</details>

---

## Coverage

| Metric                | Count |
| :-------------------- | :---- |
| Total libraries       | 11    |
| Total app entries     | 33    |
| With lib size data    | 11    |
| With page bundle data | 11    |
| With component data   | 11    |
| With reactivity data  | 8     |
| With rendering data   | 11    |
