# Next.js — i18n Benchmark Results

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
- [gt-next](#gt-next)
- [lingo.dev](#lingo-dev)
- [lingui](#lingui)
- [next-i18next](#next-i18next)
- [next-international](#next-international)
- [next-intl](#next-intl)
- [next-intlayer](#next-intlayer)
- [next-translate](#next-translate)
- [paraglide-next](#paraglide-next)
- [tolgee](#tolgee)

## base

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| —       |        0.0 KB |         0.0 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         |     ✅     |         152.7 KB |          0.0% |                     29.2% |        0.7 KB |        13.9 ms |              — |   13.5 ms |    9.9 ms |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 152.0 KB |          0.0% |       11.8% |
| `/en/about`    | 152.0 KB |          0.0% |        9.1% |
| `/en/blog`     | 152.8 KB |          0.0% |       18.8% |
| `/en/careers`  | 152.8 KB |          0.0% |       21.4% |
| `/en/contact`  | 153.3 KB |          0.0% |       75.0% |
| `/en/faq`      | 152.8 KB |          0.0% |       23.1% |
| `/en/pricing`  | 152.8 KB |          0.0% |       42.9% |
| `/en/products` | 152.8 KB |          0.0% |       27.3% |
| `/en/settings` | 152.8 KB |          0.0% |       37.5% |
| `/en/team`     | 152.8 KB |          0.0% |       25.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 152.0 KB |          0.0% |       11.8% |
| `/fr/about`    | 152.0 KB |          0.0% |        9.1% |
| `/fr/blog`     | 152.8 KB |          0.0% |       18.8% |
| `/fr/careers`  | 152.8 KB |          0.0% |       21.4% |
| `/fr/contact`  | 153.3 KB |          0.0% |       75.0% |
| `/fr/faq`      | 152.8 KB |          0.0% |       23.1% |
| `/fr/pricing`  | 152.8 KB |          0.0% |       42.9% |
| `/fr/products` | 152.8 KB |          0.0% |       27.3% |
| `/fr/settings` | 152.8 KB |          0.0% |       37.5% |
| `/fr/team`     | 152.8 KB |          0.0% |       25.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/nextjs-base-app)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 16.2 ms | 12.3 ms | 26.5 ms |       0.0 ms |
|  `fr`  | 11.5 ms |  8.4 ms | 15.6 ms |       0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   14.5 ms |   10.9 ms |           — |
|  `fr`  |   12.5 ms |    8.9 ms |           — |

</details>

---

## gt-next

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 6.16.5  |      173.1 KB |       657.9 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         |     ✅     |         434.3 KB |          0.0% |                     45.0% |      174.1 KB |        26.8 ms |         6.7 ms |   23.8 ms |   17.9 ms |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 434.6 KB |          0.0% |        0.0% |
| `/en/about`    | 434.5 KB |          0.0% |        0.0% |
| `/en/blog`     | 434.2 KB |          0.0% |        0.0% |
| `/en/careers`  | 434.2 KB |          0.0% |        0.0% |
| `/en/contact`  | 434.2 KB |          0.0% |        0.0% |
| `/en/faq`      | 434.2 KB |          0.0% |        0.0% |
| `/en/pricing`  | 434.2 KB |          0.0% |        0.0% |
| `/en/products` | 434.2 KB |          0.0% |        0.0% |
| `/en/settings` | 434.2 KB |          0.0% |        0.0% |
| `/en/team`     | 434.2 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 434.6 KB |          0.0% |       82.6% |
| `/fr/about`    | 434.5 KB |          0.0% |       88.4% |
| `/fr/blog`     | 434.2 KB |          0.0% |       84.9% |
| `/fr/careers`  | 434.2 KB |          0.0% |       87.2% |
| `/fr/contact`  | 434.2 KB |          0.0% |       98.8% |
| `/fr/faq`      | 434.2 KB |          0.0% |       88.4% |
| `/fr/pricing`  | 434.2 KB |          0.0% |       95.3% |
| `/fr/products` | 434.2 KB |          0.0% |       90.7% |
| `/fr/settings` | 434.2 KB |          0.0% |       94.2% |
| `/fr/team`     | 434.2 KB |          0.0% |       89.5% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-gt-next-app)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 30.7 ms | 22.8 ms | 50.0 ms |       7.4 ms |
|  `fr`  | 22.9 ms | 19.9 ms | 28.2 ms |       6.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   25.7 ms |   19.0 ms |      2.7 ms |
|  `fr`  |   21.9 ms |   16.7 ms |      2.2 ms |

</details>

---

## lingo.dev

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| —       |        7.5 KB |        19.6 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         |     ✅     |         162.5 KB |         30.6% |                     63.4% |        7.8 KB |        21.9 ms |         5.3 ms |   23.0 ms |   15.6 ms |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 162.9 KB |         33.3% |       79.7% |
| `/en/about`    | 162.7 KB |         33.3% |       87.5% |
| `/en/blog`     | 162.4 KB |         33.3% |       82.4% |
| `/en/careers`  | 162.4 KB |         33.3% |       87.0% |
| `/en/contact`  | 163.1 KB |         33.3% |       98.6% |
| `/en/faq`      | 162.4 KB |         33.3% |       89.2% |
| `/en/pricing`  | 162.4 KB |         33.3% |       94.6% |
| `/en/products` | 162.4 KB |         33.3% |       89.2% |
| `/en/settings` | 162.4 KB |         33.3% |       93.2% |
| `/en/team`     | 162.4 KB |         33.3% |       87.8% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 162.9 KB |         33.3% |       21.1% |
| `/fr/about`    | 162.7 KB |         40.0% |       23.1% |
| `/fr/blog`     | 162.4 KB |         25.0% |       27.8% |
| `/fr/careers`  | 162.4 KB |         25.0% |       33.3% |
| `/fr/contact`  | 163.1 KB |         33.3% |       60.0% |
| `/fr/faq`      | 162.4 KB |         25.0% |       33.3% |
| `/fr/pricing`  | 162.4 KB |         25.0% |       55.6% |
| `/fr/products` | 162.4 KB |         25.0% |       38.5% |
| `/fr/settings` | 162.4 KB |         25.0% |       50.0% |
| `/fr/team`     | 162.4 KB |         22.2% |       35.7% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-lingo.dev-app)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 25.7 ms | 21.0 ms | 38.2 ms |       5.4 ms |
|  `fr`  | 18.2 ms | 15.7 ms | 21.9 ms |       5.2 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   24.8 ms |   15.8 ms |      5.9 ms |
|  `fr`  |   21.2 ms |   15.3 ms |      6.0 ms |

</details>

---

## lingui

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 5.3.0   |       10.0 KB |        32.4 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         |     ✅     |         221.9 KB |         50.0% |                     90.0% |       73.1 KB |        15.2 ms |         4.2 ms |   14.1 ms |   11.7 ms |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 220.3 KB |         54.4% |       80.0% |
| `/en/about`    | 220.3 KB |         54.4% |       87.5% |
| `/en/blog`     | 221.9 KB |         54.4% |       83.8% |
| `/en/careers`  | 223.6 KB |         54.4% |       95.0% |
| `/en/contact`  | 221.8 KB |         54.4% |       98.8% |
| `/en/faq`      | 222.6 KB |         54.4% |       87.5% |
| `/en/pricing`  | 222.2 KB |         54.4% |       95.0% |
| `/en/products` | 222.1 KB |         54.4% |       90.0% |
| `/en/settings` | 222.3 KB |         54.4% |       95.0% |
| `/en/team`     | 222.2 KB |         54.4% |       87.5% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 220.3 KB |         45.6% |       83.3% |
| `/fr/about`    | 220.3 KB |         45.6% |       85.4% |
| `/fr/blog`     | 221.9 KB |         45.6% |       86.5% |
| `/fr/careers`  | 223.6 KB |         45.6% |       93.8% |
| `/fr/contact`  | 221.8 KB |         45.6% |       97.9% |
| `/fr/faq`      | 222.6 KB |         45.6% |       90.6% |
| `/fr/pricing`  | 222.2 KB |         45.6% |       90.6% |
| `/fr/products` | 222.1 KB |         45.6% |       89.6% |
| `/fr/settings` | 222.3 KB |         45.6% |       93.8% |
| `/fr/team`     | 222.2 KB |         45.6% |       88.5% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-lingui-app)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 17.0 ms | 15.0 ms | 20.6 ms |       4.6 ms |
|  `fr`  | 13.4 ms | 11.0 ms | 17.6 ms |       3.9 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   15.4 ms |   13.1 ms |      6.4 ms |
|  `fr`  |   12.8 ms |   10.2 ms |      4.4 ms |

</details>

---

## next-i18next

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 16.0.5  |       17.8 KB |        61.2 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         |     ✅     |         231.1 KB |          0.0% |                     89.8% |       24.5 KB |        20.8 ms |         6.4 ms |   13.4 ms |   11.7 ms |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 229.6 KB |          0.0% |       79.5% |
| `/en/about`    | 229.6 KB |          0.0% |       84.6% |
| `/en/blog`     | 231.1 KB |          0.0% |       83.3% |
| `/en/careers`  | 232.6 KB |          0.0% |       94.9% |
| `/en/contact`  | 231.1 KB |          0.0% |       97.5% |
| `/en/faq`      | 232.4 KB |          0.0% |       91.1% |
| `/en/pricing`  | 231.2 KB |          0.0% |       96.2% |
| `/en/products` | 231.0 KB |          0.0% |       89.7% |
| `/en/settings` | 231.4 KB |          0.0% |       93.7% |
| `/en/team`     | 231.1 KB |          0.0% |       87.2% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 229.6 KB |          0.0% |       79.5% |
| `/fr/about`    | 229.6 KB |          0.0% |       84.6% |
| `/fr/blog`     | 231.1 KB |          0.0% |       83.3% |
| `/fr/careers`  | 232.6 KB |          0.0% |       94.9% |
| `/fr/contact`  | 231.1 KB |          0.0% |       97.5% |
| `/fr/faq`      | 232.4 KB |          0.0% |       91.1% |
| `/fr/pricing`  | 231.2 KB |          0.0% |       96.2% |
| `/fr/products` | 231.0 KB |          0.0% |       89.7% |
| `/fr/settings` | 231.4 KB |          0.0% |       93.7% |
| `/fr/team`     | 231.1 KB |          0.0% |       87.2% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-next-i18next-app)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 26.8 ms | 12.8 ms | 51.1 ms |       5.5 ms |
|  `fr`  | 14.8 ms | 10.2 ms | 17.1 ms |       7.3 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   14.3 ms |   11.6 ms |      4.8 ms |
|  `fr`  |   12.6 ms |   11.9 ms |      4.8 ms |

</details>

---

## next-international

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 1.3.1   |       11.1 KB |        34.9 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         |     ✅     |         251.9 KB |         50.0% |                     89.9% |       11.6 KB |        30.8 ms |        12.0 ms |   15.6 ms |    6.9 ms |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 250.7 KB |         54.7% |       81.6% |
| `/en/about`    | 250.7 KB |         54.7% |       88.5% |
| `/en/blog`     | 252.2 KB |         54.7% |       85.1% |
| `/en/careers`  | 252.4 KB |         54.7% |       87.4% |
| `/en/contact`  | 252.2 KB |         54.7% |       98.9% |
| `/en/faq`      | 252.1 KB |         54.7% |       88.5% |
| `/en/pricing`  | 252.3 KB |         54.5% |       95.5% |
| `/en/products` | 252.1 KB |         54.7% |       90.8% |
| `/en/settings` | 252.5 KB |         54.7% |       94.3% |
| `/en/team`     | 252.2 KB |         54.7% |       88.5% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 250.7 KB |         45.3% |       84.8% |
| `/fr/about`    | 250.7 KB |         45.3% |       86.7% |
| `/fr/blog`     | 252.2 KB |         45.3% |       87.6% |
| `/fr/careers`  | 252.4 KB |         45.3% |       87.6% |
| `/fr/contact`  | 252.2 KB |         45.3% |       98.1% |
| `/fr/faq`      | 252.1 KB |         45.3% |       90.5% |
| `/fr/pricing`  | 252.3 KB |         45.0% |       90.6% |
| `/fr/products` | 252.1 KB |         45.3% |       90.5% |
| `/fr/settings` | 252.5 KB |         45.3% |       93.3% |
| `/fr/team`     | 252.2 KB |         45.3% |       89.5% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-next-international-app)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 32.6 ms | 18.6 ms | 61.5 ms |      12.0 ms |
|  `fr`  | 29.0 ms | 22.1 ms | 40.9 ms |      12.1 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   17.2 ms |    7.1 ms |      0.6 ms |
|  `fr`  |   13.9 ms |    6.8 ms |      0.6 ms |

</details>

---

## next-intl

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 4.9.1   |       12.8 KB |        51.0 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         |     ✅     |         166.7 KB |          4.2% |                     89.8% |       20.5 KB |        16.4 ms |         4.6 ms |   18.5 ms |   13.5 ms |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 165.4 KB |          0.0% |       82.1% |
| `/en/about`    | 165.4 KB |          0.0% |       88.1% |
| `/en/blog`     | 167.0 KB |          0.0% |       84.5% |
| `/en/careers`  | 167.2 KB |          0.0% |       87.1% |
| `/en/contact`  | 166.9 KB |          0.0% |       98.8% |
| `/en/faq`      | 166.9 KB |          0.0% |       88.1% |
| `/en/pricing`  | 167.1 KB |          0.0% |       95.3% |
| `/en/products` | 166.9 KB |          0.0% |       90.5% |
| `/en/settings` | 167.3 KB |          0.0% |       94.0% |
| `/en/team`     | 166.9 KB |          0.0% |       89.3% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 165.4 KB |          8.3% |       83.7% |
| `/fr/about`    | 165.4 KB |          8.3% |       89.8% |
| `/fr/blog`     | 167.0 KB |          8.3% |       86.7% |
| `/fr/careers`  | 167.2 KB |          8.3% |       86.9% |
| `/fr/contact`  | 166.9 KB |          8.3% |       99.0% |
| `/fr/faq`      | 166.9 KB |          8.3% |       89.8% |
| `/fr/pricing`  | 167.1 KB |          8.2% |       89.9% |
| `/fr/products` | 166.9 KB |          8.3% |       89.8% |
| `/fr/settings` | 167.3 KB |          8.3% |       92.9% |
| `/fr/team`     | 166.9 KB |          8.3% |       89.8% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-next-intl-app)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 17.8 ms |  9.8 ms | 31.5 ms |       5.4 ms |
|  `fr`  | 15.1 ms | 12.2 ms | 18.8 ms |       3.7 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   22.0 ms |   16.7 ms |      7.0 ms |
|  `fr`  |   14.9 ms |   10.3 ms |      4.5 ms |

</details>

---

## next-intlayer

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 8.7.4   |        4.8 KB |        13.7 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         |     ✅     |         151.5 KB |          0.0% |                      0.0% |        7.1 KB |        26.8 ms |         5.6 ms |   17.6 ms |   12.8 ms |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 151.5 KB |          0.0% |        0.0% |
| `/en/about`    | 151.5 KB |          0.0% |        0.0% |
| `/en/blog`     | 151.5 KB |          0.0% |        0.0% |
| `/en/careers`  | 151.5 KB |          0.0% |        0.0% |
| `/en/contact`  | 151.5 KB |          0.0% |        0.0% |
| `/en/faq`      | 151.5 KB |          0.0% |        0.0% |
| `/en/pricing`  | 151.5 KB |          0.0% |        0.0% |
| `/en/products` | 151.5 KB |          0.0% |        0.0% |
| `/en/settings` | 151.5 KB |          0.0% |        0.0% |
| `/en/team`     | 151.5 KB |          0.0% |        0.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 151.5 KB |          0.0% |        0.0% |
| `/fr/about`    | 151.5 KB |          0.0% |        0.0% |
| `/fr/blog`     | 151.5 KB |          0.0% |        0.0% |
| `/fr/careers`  | 151.5 KB |          0.0% |        0.0% |
| `/fr/contact`  | 151.5 KB |          0.0% |        0.0% |
| `/fr/faq`      | 151.5 KB |          0.0% |        0.0% |
| `/fr/pricing`  | 151.5 KB |          0.0% |        0.0% |
| `/fr/products` | 151.5 KB |          0.0% |        0.0% |
| `/fr/settings` | 151.5 KB |          0.0% |        0.0% |
| `/fr/team`     | 151.5 KB |          0.0% |        0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-next-intlayer-app)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 27.0 ms | 19.4 ms | 36.8 ms |       5.7 ms |
|  `fr`  | 26.5 ms | 16.9 ms | 33.3 ms |       5.6 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   18.5 ms |   15.1 ms |      8.6 ms |
|  `fr`  |   16.7 ms |   10.5 ms |      5.0 ms |

</details>

---

## next-translate

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 3.1.2   |        2.4 KB |         6.8 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         |     ✅     |         153.0 KB |          0.0% |                     89.8% |       10.0 KB |        21.1 ms |         4.2 ms |   17.9 ms |   12.4 ms |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 153.5 KB |          0.0% |       80.3% |
| `/en/about`    | 152.9 KB |          0.0% |       84.2% |
| `/en/blog`     | 152.9 KB |          0.0% |       82.9% |
| `/en/careers`  | 152.9 KB |          0.0% |       94.7% |
| `/en/contact`  | 152.9 KB |          0.0% |       97.4% |
| `/en/faq`      | 152.7 KB |          0.0% |       90.8% |
| `/en/pricing`  | 153.0 KB |          0.0% |       96.1% |
| `/en/products` | 152.8 KB |          0.0% |       89.5% |
| `/en/settings` | 153.2 KB |          0.0% |       93.5% |
| `/en/team`     | 152.9 KB |          0.0% |       88.2% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 153.5 KB |          0.0% |       82.8% |
| `/fr/about`    | 152.9 KB |          0.0% |       80.6% |
| `/fr/blog`     | 152.9 KB |          0.0% |       86.0% |
| `/fr/careers`  | 152.9 KB |          0.0% |       94.6% |
| `/fr/contact`  | 152.9 KB |          0.0% |       97.9% |
| `/fr/faq`      | 152.7 KB |          0.0% |       93.5% |
| `/fr/pricing`  | 153.0 KB |          0.0% |       91.4% |
| `/fr/products` | 152.8 KB |          0.0% |       89.2% |
| `/fr/settings` | 153.2 KB |          0.0% |       92.6% |
| `/fr/team`     | 152.9 KB |          0.0% |       89.2% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-next-translate-app)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :----: | ------: | ------: | ------: | -----------: |
|  `en`  | 23.5 ms | 18.7 ms | 27.8 ms |       4.5 ms |
|  `fr`  | 18.8 ms | 11.1 ms | 33.7 ms |       3.9 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   21.6 ms |   13.7 ms |      6.7 ms |
|  `fr`  |   14.3 ms |   11.1 ms |      4.1 ms |

</details>

---

## paraglide-next

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 2.15.1  |        0.2 KB |         0.2 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         |     ✅     |         346.6 KB |          0.0% |                     89.8% |        5.4 KB |        32.0 ms |         6.3 ms |   18.2 ms |   16.6 ms |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 230.9 KB |          0.0% |       81.6% |
| `/en/about`    | 230.9 KB |          0.0% |       88.5% |
| `/en/blog`     | 232.4 KB |          0.0% |       85.1% |
| `/en/careers`  | 232.6 KB |          0.0% |       87.5% |
| `/en/contact`  | 232.4 KB |          0.0% |       98.9% |
| `/en/faq`      | 232.3 KB |          0.0% |       88.5% |
| `/en/pricing`  | 232.5 KB |          0.0% |       95.5% |
| `/en/products` | 232.4 KB |          0.0% |       90.8% |
| `/en/settings` | 232.7 KB |          0.0% |       93.1% |
| `/en/team`     | 232.4 KB |          0.0% |       88.5% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 460.3 KB |          0.0% |       81.6% |
| `/fr/about`    | 459.5 KB |          0.0% |       88.5% |
| `/fr/blog`     | 461.2 KB |          0.0% |       85.1% |
| `/fr/careers`  | 461.5 KB |          0.0% |       87.5% |
| `/fr/contact`  | 461.2 KB |          0.0% |       98.9% |
| `/fr/faq`      | 461.0 KB |          0.0% |       88.5% |
| `/fr/pricing`  | 461.4 KB |          0.0% |       95.5% |
| `/fr/products` | 461.1 KB |          0.0% |       90.8% |
| `/fr/settings` | 461.8 KB |          0.0% |       93.1% |
| `/fr/team`     | 461.1 KB |          0.0% |       88.5% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-paraglide-next-app)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min |  E2E max | Profiler avg |
| :----: | ------: | ------: | -------: | -----------: |
|  `en`  | 45.6 ms | 13.9 ms | 100.0 ms |       6.3 ms |
|  `fr`  | 18.3 ms | 15.4 ms |  21.8 ms |       6.3 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   21.8 ms |   16.8 ms |      3.1 ms |
|  `fr`  |   14.7 ms |   16.3 ms |      3.2 ms |

</details>

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :------ | ------------: | -------------: |
| 7.0.0   |       11.0 KB |        35.8 KB |

| Category       |   Status   | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :------------- | :--------: | ---------------: | ------------: | ------------------------: | ------------: | -------------: | -------------: | --------: | --------: |
| Static         |     ✅     |         291.2 KB |         53.8% |                     90.0% |       24.1 KB |        51.5 ms |         5.0 ms |   26.0 ms |   10.2 ms |
| Dynamic        | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Static  | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |
| Scoped Dynamic | ⬜ missing |                — |             — |                         — |             — |              — |              — |         — |         — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/en/`         | 292.4 KB |         13.8% |       83.5% |
| `/en/about`    | 291.4 KB |         13.8% |       89.0% |
| `/en/blog`     | 291.1 KB |         13.8% |       85.7% |
| `/en/careers`  | 291.2 KB |         13.8% |       87.9% |
| `/en/contact`  | 290.7 KB |         13.8% |       97.8% |
| `/en/faq`      | 291.4 KB |         13.8% |       89.0% |
| `/en/pricing`  | 290.9 KB |         13.8% |       89.0% |
| `/en/products` | 290.8 KB |         13.8% |       94.5% |
| `/en/settings` | 291.1 KB |         13.8% |       94.5% |
| `/en/team`     | 290.9 KB |         13.8% |       89.0% |

**Locale: `fr`**

| Page           |  JS (gz) | Locale leak % | Page leak % |
| :------------- | -------: | ------------: | ----------: |
| `/fr/`         | 292.4 KB |         93.8% |      100.0% |
| `/fr/about`    | 291.4 KB |         93.8% |      100.0% |
| `/fr/blog`     | 291.1 KB |         93.8% |      100.0% |
| `/fr/careers`  | 291.2 KB |         93.8% |      100.0% |
| `/fr/contact`  | 290.7 KB |         93.8% |      100.0% |
| `/fr/faq`      | 291.4 KB |         93.8% |      100.0% |
| `/fr/pricing`  | 290.9 KB |         93.8% |      100.0% |
| `/fr/products` | 290.8 KB |         93.8% |      100.0% |
| `/fr/settings` | 291.1 KB |         93.8% |        0.0% |
| `/fr/team`     | 290.9 KB |         93.8% |      100.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-tolgee-app)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min |  E2E max | Profiler avg |
| :----: | ------: | ------: | -------: | -----------: |
|  `en`  | 29.8 ms | 18.3 ms |  49.3 ms |       5.0 ms |
|  `fr`  | 73.2 ms | 45.6 ms | 143.8 ms |       5.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :----: | --------: | --------: | ----------: |
|  `en`  |   28.8 ms |   10.3 ms |      1.9 ms |
|  `fr`  |   23.1 ms |   10.1 ms |      2.6 ms |

</details>

---

## Coverage

| Metric                | Count |
| :-------------------- | :---- |
| Total libraries       | 11    |
| Total app entries     | 32    |
| With lib size data    | 11    |
| With page bundle data | 11    |
| With component data   | 11    |
| With reactivity data  | 11    |
| With rendering data   | 11    |
