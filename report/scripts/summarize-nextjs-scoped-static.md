# Next.js — i18n Benchmark Results

_Generated: 2026-04-19_

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
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ✅ | 152.7 KB | 0.0% | 29.2% | 0.7 KB | 13.9 ms | — | 13.5 ms | 9.9 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/nextjs-base-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.2 ms | 12.3 ms | 26.5 ms | 0.0 ms |
| `fr` | 11.5 ms | 8.4 ms | 15.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.5 ms | 10.9 ms | — |
| `fr` | 12.5 ms | 8.9 ms | — |

</details>

---

## gt-next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 6.16.5 | 173.1 KB | 657.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | 434.3 KB | 0.0% | 41.0% | 174.1 KB | 26.2 ms | 5.7 ms | 25.0 ms | 17.9 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 434.6 KB | 0.0% | 0.0% |
| `/en/about` | 434.5 KB | 0.0% | 0.0% |
| `/en/blog` | 434.2 KB | 0.0% | 0.0% |
| `/en/careers` | 434.2 KB | 0.0% | 0.0% |
| `/en/contact` | 434.2 KB | 0.0% | 0.0% |
| `/en/faq` | 434.2 KB | 0.0% | 0.0% |
| `/en/pricing` | 434.2 KB | 0.0% | 0.0% |
| `/en/products` | 434.2 KB | 0.0% | 0.0% |
| `/en/settings` | 434.2 KB | 0.0% | 0.0% |
| `/en/team` | 434.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 434.6 KB | 0.0% | 65.9% |
| `/fr/about` | 434.5 KB | 0.0% | 77.3% |
| `/fr/blog` | 434.2 KB | 0.0% | 77.2% |
| `/fr/careers` | 434.2 KB | 0.0% | 75.0% |
| `/fr/contact` | 434.2 KB | 0.0% | 97.8% |
| `/fr/faq` | 434.2 KB | 0.0% | 81.5% |
| `/fr/pricing` | 434.2 KB | 0.0% | 91.7% |
| `/fr/products` | 434.2 KB | 0.0% | 81.8% |
| `/fr/settings` | 434.2 KB | 0.0% | 89.8% |
| `/fr/team` | 434.2 KB | 0.0% | 83.0% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-scoped-static-gt-next-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 28.6 ms | 23.2 ms | 33.0 ms | 5.5 ms |
| `fr` | 23.8 ms | 21.0 ms | 31.1 ms | 5.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 26.4 ms | 18.5 ms | 2.3 ms |
| `fr` | 23.6 ms | 17.4 ms | 2.2 ms |

</details>

---

## lingo.dev

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 7.5 KB | 19.6 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ✅ | 162.5 KB | 30.6% | 63.4% | 7.8 KB | 21.9 ms | 5.3 ms | 23.0 ms | 15.6 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 162.9 KB | 33.3% | 79.7% |
| `/en/about` | 162.7 KB | 33.3% | 87.5% |
| `/en/blog` | 162.4 KB | 33.3% | 82.4% |
| `/en/careers` | 162.4 KB | 33.3% | 87.0% |
| `/en/contact` | 163.1 KB | 33.3% | 98.6% |
| `/en/faq` | 162.4 KB | 33.3% | 89.2% |
| `/en/pricing` | 162.4 KB | 33.3% | 94.6% |
| `/en/products` | 162.4 KB | 33.3% | 89.2% |
| `/en/settings` | 162.4 KB | 33.3% | 93.2% |
| `/en/team` | 162.4 KB | 33.3% | 87.8% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 162.9 KB | 33.3% | 21.1% |
| `/fr/about` | 162.7 KB | 40.0% | 23.1% |
| `/fr/blog` | 162.4 KB | 25.0% | 27.8% |
| `/fr/careers` | 162.4 KB | 25.0% | 33.3% |
| `/fr/contact` | 163.1 KB | 33.3% | 60.0% |
| `/fr/faq` | 162.4 KB | 25.0% | 33.3% |
| `/fr/pricing` | 162.4 KB | 25.0% | 55.6% |
| `/fr/products` | 162.4 KB | 25.0% | 38.5% |
| `/fr/settings` | 162.4 KB | 25.0% | 50.0% |
| `/fr/team` | 162.4 KB | 22.2% | 35.7% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-lingo.dev-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 25.7 ms | 21.0 ms | 38.2 ms | 5.4 ms |
| `fr` | 18.2 ms | 15.7 ms | 21.9 ms | 5.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 24.8 ms | 15.8 ms | 5.9 ms |
| `fr` | 21.2 ms | 15.3 ms | 6.0 ms |

</details>

---

## lingui

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 5.3.0 | 10.0 KB | 32.4 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | 162.9 KB | 10.4% | 89.1% | 18.9 KB | 22.9 ms | 5.3 ms | 14.6 ms | 9.9 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 161.2 KB | 0.0% | 79.7% |
| `/en/about` | 161.2 KB | 0.0% | 87.3% |
| `/en/blog` | 162.9 KB | 0.0% | 83.5% |
| `/en/careers` | 164.5 KB | 0.0% | 95.1% |
| `/en/contact` | 162.8 KB | 0.0% | 96.3% |
| `/en/faq` | 163.6 KB | 0.0% | 87.3% |
| `/en/pricing` | 163.1 KB | 0.0% | 95.0% |
| `/en/products` | 163.0 KB | 0.0% | 89.9% |
| `/en/settings` | 163.3 KB | 0.0% | 93.7% |
| `/en/team` | 163.1 KB | 0.0% | 87.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 161.2 KB | 18.7% | 81.4% |
| `/fr/about` | 161.2 KB | 18.7% | 83.7% |
| `/fr/blog` | 162.9 KB | 19.4% | 84.9% |
| `/fr/careers` | 164.5 KB | 21.6% | 93.2% |
| `/fr/contact` | 162.8 KB | 18.7% | 95.5% |
| `/fr/faq` | 163.6 KB | 24.3% | 88.6% |
| `/fr/pricing` | 163.1 KB | 21.4% | 88.5% |
| `/fr/products` | 163.0 KB | 18.7% | 91.4% |
| `/fr/settings` | 163.3 KB | 22.3% | 91.9% |
| `/fr/team` | 163.1 KB | 25.0% | 88.4% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-scoped-static-lingui-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 30.3 ms | 12.7 ms | 86.5 ms | 6.3 ms |
| `fr` | 15.5 ms | 9.4 ms | 20.5 ms | 4.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.9 ms | 10.1 ms | 4.8 ms |
| `fr` | 13.4 ms | 9.7 ms | 4.3 ms |

</details>

---

## next-i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 16.0.5 | 17.8 KB | 61.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | 232.7 KB | 0.0% | 89.8% | 25.5 KB | 15.6 ms | 4.3 ms | 15.5 ms | 12.2 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 231.2 KB | 0.0% | 79.5% |
| `/en/about` | 231.2 KB | 0.0% | 84.6% |
| `/en/blog` | 232.7 KB | 0.0% | 83.3% |
| `/en/careers` | 234.2 KB | 0.0% | 94.9% |
| `/en/contact` | 232.7 KB | 0.0% | 97.5% |
| `/en/faq` | 234.1 KB | 0.0% | 91.1% |
| `/en/pricing` | 232.8 KB | 0.0% | 96.2% |
| `/en/products` | 232.6 KB | 0.0% | 89.7% |
| `/en/settings` | 233.0 KB | 0.0% | 93.7% |
| `/en/team` | 232.7 KB | 0.0% | 87.2% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 231.2 KB | 0.0% | 79.5% |
| `/fr/about` | 231.2 KB | 0.0% | 84.6% |
| `/fr/blog` | 232.7 KB | 0.0% | 83.3% |
| `/fr/careers` | 234.2 KB | 0.0% | 94.9% |
| `/fr/contact` | 232.7 KB | 0.0% | 97.5% |
| `/fr/faq` | 234.1 KB | 0.0% | 91.1% |
| `/fr/pricing` | 232.8 KB | 0.0% | 96.2% |
| `/fr/products` | 232.6 KB | 0.0% | 89.7% |
| `/fr/settings` | 233.0 KB | 0.0% | 93.7% |
| `/fr/team` | 232.7 KB | 0.0% | 87.2% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-scoped-static-next-i18next-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 14.9 ms | 11.8 ms | 26.8 ms | 4.4 ms |
| `fr` | 16.3 ms | 13.3 ms | 21.8 ms | 4.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.7 ms | 13.7 ms | 7.2 ms |
| `fr` | 13.3 ms | 10.7 ms | 4.8 ms |

</details>

---

## next-international

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 1.3.1 | 11.1 KB | 34.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ✅ | 224.6 KB | 50.0% | 89.9% | 12.5 KB | 16.6 ms | 5.2 ms | 25.3 ms | 9.2 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 223.4 KB | 54.2% | 82.2% |
| `/en/about` | 223.4 KB | 54.2% | 88.9% |
| `/en/blog` | 224.9 KB | 54.2% | 85.6% |
| `/en/careers` | 225.0 KB | 54.2% | 93.3% |
| `/en/contact` | 224.9 KB | 54.2% | 98.9% |
| `/en/faq` | 224.7 KB | 54.2% | 80.0% |
| `/en/pricing` | 225.0 KB | 53.9% | 95.6% |
| `/en/products` | 224.8 KB | 54.2% | 91.1% |
| `/en/settings` | 225.2 KB | 54.2% | 94.4% |
| `/en/team` | 224.8 KB | 54.2% | 88.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 223.4 KB | 45.8% | 85.0% |
| `/fr/about` | 223.4 KB | 45.8% | 86.9% |
| `/fr/blog` | 224.9 KB | 45.8% | 87.9% |
| `/fr/careers` | 225.0 KB | 45.8% | 91.6% |
| `/fr/contact` | 224.9 KB | 45.8% | 98.1% |
| `/fr/faq` | 224.7 KB | 45.8% | 84.1% |
| `/fr/pricing` | 225.0 KB | 45.6% | 91.7% |
| `/fr/products` | 224.8 KB | 45.8% | 90.7% |
| `/fr/settings` | 225.2 KB | 45.8% | 93.5% |
| `/fr/team` | 224.8 KB | 45.8% | 89.7% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-scoped-static-next-international-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.9 ms | 11.7 ms | 27.6 ms | 5.1 ms |
| `fr` | 17.4 ms | 10.4 ms | 23.0 ms | 5.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 25.8 ms | 10.5 ms | 2.0 ms |
| `fr` | 24.8 ms | 7.8 ms | 0.6 ms |

</details>

---

## next-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.9.1 | 12.8 KB | 51.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | 163.4 KB | 0.0% | 0.0% | 21.8 KB | 17.3 ms | 3.8 ms | 18.9 ms | 14.0 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 164.0 KB | 0.0% | 0.0% |
| `/en/about` | 163.3 KB | 0.0% | 0.0% |
| `/en/blog` | 163.4 KB | 0.0% | 0.0% |
| `/en/careers` | 163.4 KB | 0.0% | 0.0% |
| `/en/contact` | 163.3 KB | 0.0% | 0.0% |
| `/en/faq` | 163.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 163.5 KB | 0.0% | 0.0% |
| `/en/products` | 163.3 KB | 0.0% | 0.0% |
| `/en/settings` | 163.7 KB | 0.0% | 0.0% |
| `/en/team` | 163.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 164.0 KB | 0.0% | 0.0% |
| `/fr/about` | 163.3 KB | 0.0% | 0.0% |
| `/fr/blog` | 163.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 163.4 KB | 0.0% | 0.0% |
| `/fr/contact` | 163.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 163.3 KB | 0.0% | 0.0% |
| `/fr/pricing` | 163.5 KB | 0.0% | 0.0% |
| `/fr/products` | 163.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 163.7 KB | 0.0% | 0.0% |
| `/fr/team` | 163.3 KB | 0.0% | 0.0% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-scoped-static-next-intl-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 22.3 ms | 12.9 ms | 29.5 ms | 4.0 ms |
| `fr` | 12.3 ms | 10.7 ms | 15.3 ms | 3.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.9 ms | 15.4 ms | 6.9 ms |
| `fr` | 17.8 ms | 12.7 ms | 4.4 ms |

</details>

---

## next-intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.4 | 4.8 KB | 13.7 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ✅ | 151.5 KB | 0.0% | 0.0% | 7.1 KB | 26.8 ms | 5.6 ms | 17.6 ms | 12.8 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 151.5 KB | 0.0% | 0.0% |
| `/en/about` | 151.5 KB | 0.0% | 0.0% |
| `/en/blog` | 151.5 KB | 0.0% | 0.0% |
| `/en/careers` | 151.5 KB | 0.0% | 0.0% |
| `/en/contact` | 151.5 KB | 0.0% | 0.0% |
| `/en/faq` | 151.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 151.5 KB | 0.0% | 0.0% |
| `/en/products` | 151.5 KB | 0.0% | 0.0% |
| `/en/settings` | 151.5 KB | 0.0% | 0.0% |
| `/en/team` | 151.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 151.5 KB | 0.0% | 0.0% |
| `/fr/about` | 151.5 KB | 0.0% | 0.0% |
| `/fr/blog` | 151.5 KB | 0.0% | 0.0% |
| `/fr/careers` | 151.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 151.5 KB | 0.0% | 0.0% |
| `/fr/faq` | 151.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 151.5 KB | 0.0% | 0.0% |
| `/fr/products` | 151.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 151.5 KB | 0.0% | 0.0% |
| `/fr/team` | 151.5 KB | 0.0% | 0.0% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-next-intlayer-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 27.0 ms | 19.4 ms | 36.8 ms | 5.7 ms |
| `fr` | 26.5 ms | 16.9 ms | 33.3 ms | 5.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.5 ms | 15.1 ms | 8.6 ms |
| `fr` | 16.7 ms | 10.5 ms | 5.0 ms |

</details>

---

## next-translate

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 3.1.2 | 2.4 KB | 6.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | 153.0 KB | 0.0% | 89.8% | 11.1 KB | 18.1 ms | 4.5 ms | 20.0 ms | 13.8 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 153.5 KB | 0.0% | 80.3% |
| `/en/about` | 152.9 KB | 0.0% | 84.2% |
| `/en/blog` | 152.9 KB | 0.0% | 82.9% |
| `/en/careers` | 152.9 KB | 0.0% | 94.7% |
| `/en/contact` | 152.9 KB | 0.0% | 97.4% |
| `/en/faq` | 152.7 KB | 0.0% | 90.8% |
| `/en/pricing` | 153.0 KB | 0.0% | 96.1% |
| `/en/products` | 152.8 KB | 0.0% | 89.5% |
| `/en/settings` | 153.2 KB | 0.0% | 93.5% |
| `/en/team` | 152.9 KB | 0.0% | 88.2% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.5 KB | 0.0% | 82.8% |
| `/fr/about` | 152.9 KB | 0.0% | 80.6% |
| `/fr/blog` | 152.9 KB | 0.0% | 86.0% |
| `/fr/careers` | 152.9 KB | 0.0% | 94.6% |
| `/fr/contact` | 152.9 KB | 0.0% | 97.9% |
| `/fr/faq` | 152.7 KB | 0.0% | 93.5% |
| `/fr/pricing` | 153.0 KB | 0.0% | 91.4% |
| `/fr/products` | 152.8 KB | 0.0% | 89.2% |
| `/fr/settings` | 153.2 KB | 0.0% | 92.6% |
| `/fr/team` | 152.9 KB | 0.0% | 89.2% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-scoped-static-next-translate-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 20.2 ms | 13.0 ms | 34.8 ms | 4.6 ms |
| `fr` | 16.1 ms | 11.7 ms | 22.7 ms | 4.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 22.0 ms | 14.8 ms | 5.4 ms |
| `fr` | 18.0 ms | 12.9 ms | 5.3 ms |

</details>

---

## paraglide-next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.15.1 | 0.2 KB | 0.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ✅ | 346.6 KB | 0.0% | 89.8% | 5.4 KB | 32.0 ms | 6.3 ms | 18.2 ms | 16.6 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 230.9 KB | 0.0% | 81.6% |
| `/en/about` | 230.9 KB | 0.0% | 88.5% |
| `/en/blog` | 232.4 KB | 0.0% | 85.1% |
| `/en/careers` | 232.6 KB | 0.0% | 87.5% |
| `/en/contact` | 232.4 KB | 0.0% | 98.9% |
| `/en/faq` | 232.3 KB | 0.0% | 88.5% |
| `/en/pricing` | 232.5 KB | 0.0% | 95.5% |
| `/en/products` | 232.4 KB | 0.0% | 90.8% |
| `/en/settings` | 232.7 KB | 0.0% | 93.1% |
| `/en/team` | 232.4 KB | 0.0% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 460.3 KB | 0.0% | 81.6% |
| `/fr/about` | 459.5 KB | 0.0% | 88.5% |
| `/fr/blog` | 461.2 KB | 0.0% | 85.1% |
| `/fr/careers` | 461.5 KB | 0.0% | 87.5% |
| `/fr/contact` | 461.2 KB | 0.0% | 98.9% |
| `/fr/faq` | 461.0 KB | 0.0% | 88.5% |
| `/fr/pricing` | 461.4 KB | 0.0% | 95.5% |
| `/fr/products` | 461.1 KB | 0.0% | 90.8% |
| `/fr/settings` | 461.8 KB | 0.0% | 93.1% |
| `/fr/team` | 461.1 KB | 0.0% | 88.5% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-static-paraglide-next-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 45.6 ms | 13.9 ms | 100.0 ms | 6.3 ms |
| `fr` | 18.3 ms | 15.4 ms | 21.8 ms | 6.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.8 ms | 16.8 ms | 3.1 ms |
| `fr` | 14.7 ms | 16.3 ms | 3.2 ms |

</details>

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 7.0.0 | 11.0 KB | 35.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | 264.5 KB | 39.4% | 90.0% | 27.4 KB | 15.3 ms | 4.0 ms | 17.8 ms | 14.4 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 262.8 KB | 32.9% | 83.5% |
| `/en/about` | 262.8 KB | 32.9% | 89.0% |
| `/en/blog` | 265.0 KB | 32.9% | 85.7% |
| `/en/careers` | 265.1 KB | 32.9% | 87.9% |
| `/en/contact` | 264.6 KB | 32.9% | 97.8% |
| `/en/faq` | 265.3 KB | 32.9% | 89.0% |
| `/en/pricing` | 264.8 KB | 32.9% | 89.0% |
| `/en/products` | 264.6 KB | 32.9% | 94.5% |
| `/en/settings` | 265.0 KB | 32.9% | 94.5% |
| `/en/team` | 264.8 KB | 32.9% | 89.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 262.8 KB | 45.8% | 85.1% |
| `/fr/about` | 262.8 KB | 45.8% | 87.1% |
| `/fr/blog` | 265.0 KB | 45.8% | 87.1% |
| `/fr/careers` | 265.1 KB | 45.8% | 89.1% |
| `/fr/contact` | 264.6 KB | 45.8% | 98.0% |
| `/fr/faq` | 265.3 KB | 45.8% | 90.1% |
| `/fr/pricing` | 264.8 KB | 45.8% | 87.1% |
| `/fr/products` | 264.6 KB | 45.8% | 92.1% |
| `/fr/settings` | 265.0 KB | 45.8% | 94.1% |
| `/fr/team` | 264.8 KB | 45.8% | 90.1% |

**Bundle link:** [View on GitHub](https://github.com/aymericzip/benchmark-bloom/tree/main/apps-benchmark/static/nextjs-scoped-static-tolgee-app)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 12.7 ms | 27.1 ms | 4.0 ms |
| `fr` | 14.7 ms | 11.2 ms | 25.5 ms | 3.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.5 ms | 16.5 ms | 8.5 ms |
| `fr` | 15.1 ms | 12.4 ms | 5.6 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 11 |
| Total app entries | 32 |
| With lib size data | 11 |
| With page bundle data | 11 |
| With component data | 11 |
| With reactivity data | 11 |
| With rendering data | 11 |
