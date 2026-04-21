# Next.js — i18n Benchmark Results

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
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ✅ | 150.8 KB | 0.0% | 0.0% | 0.7 KB | 14.0 ms | 3.6 ms | 14.7 ms | 9.3 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 150.6 KB | 0.0% | 0.0% |
| `/en/about` | 151.6 KB | 0.0% | 0.0% |
| `/en/blog` | 150.6 KB | 0.0% | 0.0% |
| `/en/careers` | 150.6 KB | 0.0% | 0.0% |
| `/en/contact` | 151.9 KB | 0.0% | 0.0% |
| `/en/faq` | 150.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 150.6 KB | 0.0% | 0.0% |
| `/en/products` | 150.6 KB | 0.0% | 0.0% |
| `/en/settings` | 150.6 KB | 0.0% | 0.0% |
| `/en/team` | 150.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 150.6 KB | 0.0% | 0.0% |
| `/fr/about` | 151.6 KB | 0.0% | 0.0% |
| `/fr/blog` | 150.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 150.6 KB | 0.0% | 0.0% |
| `/fr/contact` | 151.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 150.6 KB | 0.0% | 0.0% |
| `/fr/pricing` | 150.6 KB | 0.0% | 0.0% |
| `/fr/products` | 150.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 150.6 KB | 0.0% | 0.0% |
| `/fr/team` | 150.6 KB | 0.0% | 0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/nextjs-base-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.3 ms | 8.9 ms | 25.4 ms | 3.9 ms |
| `fr` | 12.8 ms | 9.8 ms | 18.3 ms | 3.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.5 ms | 9.5 ms | 4.2 ms |
| `fr` | 13.9 ms | 9.1 ms | 4.1 ms |

</details>

---

## gt-next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 6.16.5 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | — | — | — | 174.1 KB | 20.7 ms | 5.7 ms | 25.5 ms | 21.5 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 21.1 ms | 16.8 ms | 32.3 ms | 5.7 ms |
| `fr` | 20.3 ms | 15.6 ms | 27.6 ms | 5.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 25.0 ms | 21.8 ms | 3.4 ms |
| `fr` | 26.0 ms | 21.2 ms | 3.0 ms |

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
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | — | — | — | 7.8 KB | 16.8 ms | 4.7 ms | 20.9 ms | 15.3 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.4 ms | 15.0 ms | 23.6 ms | 4.9 ms |
| `fr` | 15.1 ms | 12.8 ms | 19.0 ms | 4.4 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 24.4 ms | 16.8 ms | 7.9 ms |
| `fr` | 17.4 ms | 13.8 ms | 5.0 ms |

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
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | 158.0 KB | 14.1% | 0.0% | 148.7 KB | 12.0 ms | 3.9 ms | 14.9 ms | 12.9 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 159.4 KB | 0.0% | 0.0% |
| `/en/about` | 158.0 KB | 0.0% | 0.0% |
| `/en/blog` | 157.6 KB | 0.0% | 0.0% |
| `/en/careers` | 157.8 KB | 0.0% | 0.0% |
| `/en/contact` | 157.5 KB | 0.0% | 0.0% |
| `/en/faq` | 158.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 157.9 KB | 0.0% | 0.0% |
| `/en/products` | 157.8 KB | 0.0% | 0.0% |
| `/en/settings` | 158.1 KB | 0.0% | 0.0% |
| `/en/team` | 157.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 159.4 KB | 47.1% | 0.0% |
| `/fr/about` | 158.0 KB | 20.0% | 0.0% |
| `/fr/blog` | 157.6 KB | 6.3% | 0.0% |
| `/fr/careers` | 157.8 KB | 33.3% | 0.0% |
| `/fr/contact` | 157.5 KB | 0.0% | 0.0% |
| `/fr/faq` | 158.3 KB | 47.6% | 0.0% |
| `/fr/pricing` | 157.9 KB | 25.0% | 0.0% |
| `/fr/products` | 157.8 KB | 25.0% | 0.0% |
| `/fr/settings` | 158.1 KB | 35.7% | 0.0% |
| `/fr/team` | 157.9 KB | 42.9% | 0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/nextjs-scoped-dynamic/lingui-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 13.6 ms | 10.4 ms | 22.0 ms | 4.2 ms |
| `fr` | 10.4 ms | 9.4 ms | 13.6 ms | 3.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 15.1 ms | 8.4 ms |
| `fr` | 13.7 ms | 10.7 ms | 5.2 ms |

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
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | 173.1 KB | 0.0% | 0.0% | 25.8 KB | 12.4 ms | 5.9 ms | 14.9 ms | 13.4 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 173.7 KB | 0.0% | 0.0% |
| `/en/about` | 173.0 KB | 0.0% | 0.0% |
| `/en/blog` | 173.0 KB | 0.0% | 0.0% |
| `/en/careers` | 173.0 KB | 0.0% | 0.0% |
| `/en/contact` | 173.0 KB | 0.0% | 0.0% |
| `/en/faq` | 172.8 KB | 0.0% | 0.0% |
| `/en/pricing` | 173.1 KB | 0.0% | 0.0% |
| `/en/products` | 172.9 KB | 0.0% | 0.0% |
| `/en/settings` | 173.3 KB | 0.0% | 0.0% |
| `/en/team` | 173.0 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 173.7 KB | 0.0% | 0.0% |
| `/fr/about` | 173.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 173.0 KB | 0.0% | 0.0% |
| `/fr/careers` | 173.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 173.0 KB | 0.0% | 0.0% |
| `/fr/faq` | 172.8 KB | 0.0% | 0.0% |
| `/fr/pricing` | 173.1 KB | 0.0% | 0.0% |
| `/fr/products` | 172.9 KB | 0.0% | 0.0% |
| `/fr/settings` | 173.3 KB | 0.0% | 0.0% |
| `/fr/team` | 173.0 KB | 0.0% | 0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/nextjs-scoped-dynamic/next-i18next-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 13.1 ms | 9.5 ms | 24.2 ms | 6.0 ms |
| `fr` | 11.6 ms | 10.8 ms | 14.5 ms | 5.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.9 ms | 15.2 ms | 2.0 ms |
| `fr` | 13.8 ms | 11.7 ms | 1.6 ms |

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
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ✅ | 162.5 KB | 0.0% | 89.9% | 11.9 KB | 20.1 ms | 4.8 ms | 16.8 ms | 7.8 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 162.4 KB | 0.0% | 82.2% |
| `/en/about` | 161.8 KB | 0.0% | 88.9% |
| `/en/blog` | 161.9 KB | 0.0% | 85.6% |
| `/en/careers` | 161.9 KB | 0.0% | 93.3% |
| `/en/contact` | 161.9 KB | 0.0% | 98.9% |
| `/en/faq` | 161.7 KB | 0.0% | 80.0% |
| `/en/pricing` | 162.0 KB | 0.0% | 95.6% |
| `/en/products` | 161.8 KB | 0.0% | 91.1% |
| `/en/settings` | 162.2 KB | 0.0% | 94.4% |
| `/en/team` | 161.8 KB | 0.0% | 88.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 163.5 KB | 0.0% | 85.0% |
| `/fr/about` | 162.9 KB | 0.0% | 86.9% |
| `/fr/blog` | 163.0 KB | 0.0% | 87.9% |
| `/fr/careers` | 163.1 KB | 0.0% | 91.6% |
| `/fr/contact` | 163.0 KB | 0.0% | 98.1% |
| `/fr/faq` | 162.9 KB | 0.0% | 84.1% |
| `/fr/pricing` | 163.1 KB | 0.0% | 91.7% |
| `/fr/products` | 163.0 KB | 0.0% | 90.7% |
| `/fr/settings` | 163.3 KB | 0.0% | 93.5% |
| `/fr/team` | 162.9 KB | 0.0% | 89.7% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/nextjs-scoped-dynamic/next-international-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.8 ms | 12.2 ms | 32.5 ms | 4.1 ms |
| `fr` | 20.4 ms | 13.3 ms | 30.3 ms | 5.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.2 ms | 8.7 ms | 1.2 ms |
| `fr` | 16.3 ms | 6.9 ms | 1.0 ms |

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
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | 163.5 KB | 0.0% | 0.0% | 21.5 KB | 17.0 ms | 3.6 ms | 19.4 ms | 19.5 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/nextjs-scoped-dynamic/next-intl-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.0 ms | 13.6 ms | 19.2 ms | 3.6 ms |
| `fr` | 17.0 ms | 12.6 ms | 24.5 ms | 3.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.5 ms | 26.2 ms | 14.5 ms |
| `fr` | 18.3 ms | 12.7 ms | 4.7 ms |

</details>

---

## next-intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.5-canary.0 | 4.9 KB | 14.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | 152.0 KB | 0.0% | 0.0% | 12.7 KB | 13.0 ms | 4.9 ms | 15.0 ms | 9.9 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 152.0 KB | 0.0% | 0.0% |
| `/en/about` | 152.0 KB | 0.0% | 0.0% |
| `/en/blog` | 152.0 KB | 0.0% | 0.0% |
| `/en/careers` | 152.0 KB | 0.0% | 0.0% |
| `/en/contact` | 152.0 KB | 0.0% | 0.0% |
| `/en/faq` | 152.0 KB | 0.0% | 0.0% |
| `/en/pricing` | 152.0 KB | 0.0% | 0.0% |
| `/en/products` | 152.0 KB | 0.0% | 0.0% |
| `/en/settings` | 152.0 KB | 0.0% | 0.0% |
| `/en/team` | 152.0 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 152.0 KB | 0.0% | 0.0% |
| `/fr/about` | 152.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 152.0 KB | 0.0% | 0.0% |
| `/fr/careers` | 152.0 KB | 0.0% | 0.0% |
| `/fr/contact` | 152.0 KB | 0.0% | 0.0% |
| `/fr/faq` | 152.0 KB | 0.0% | 0.0% |
| `/fr/pricing` | 152.0 KB | 0.0% | 0.0% |
| `/fr/products` | 152.0 KB | 0.0% | 0.0% |
| `/fr/settings` | 152.0 KB | 0.0% | 0.0% |
| `/fr/team` | 152.0 KB | 0.0% | 0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/nextjs-dynamic/next-intlayer-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 13.8 ms | 10.1 ms | 25.7 ms | 4.9 ms |
| `fr` | 12.2 ms | 9.8 ms | 16.1 ms | 4.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.2 ms | 10.1 ms | 4.9 ms |
| `fr` | 14.8 ms | 9.8 ms | 4.7 ms |

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
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | 153.0 KB | 0.0% | 0.0% | 11.3 KB | 13.5 ms | 4.0 ms | 17.3 ms | 13.3 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 153.5 KB | 0.0% | 0.0% |
| `/en/about` | 152.8 KB | 0.0% | 0.0% |
| `/en/blog` | 152.9 KB | 0.0% | 0.0% |
| `/en/careers` | 152.9 KB | 0.0% | 0.0% |
| `/en/contact` | 152.9 KB | 0.0% | 0.0% |
| `/en/faq` | 152.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 153.0 KB | 0.0% | 0.0% |
| `/en/products` | 152.7 KB | 0.0% | 0.0% |
| `/en/settings` | 153.2 KB | 0.0% | 0.0% |
| `/en/team` | 152.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.5 KB | 0.0% | 0.0% |
| `/fr/about` | 152.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 152.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 152.9 KB | 0.0% | 0.0% |
| `/fr/contact` | 152.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 152.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 153.0 KB | 0.0% | 0.0% |
| `/fr/products` | 152.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 153.2 KB | 0.0% | 0.0% |
| `/fr/team` | 152.9 KB | 0.0% | 0.0% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/nextjs-scoped-dynamic/next-translate-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.0 ms | 11.9 ms | 21.2 ms | 4.4 ms |
| `fr` | 12.1 ms | 9.6 ms | 17.4 ms | 3.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.1 ms | 15.2 ms | 7.2 ms |
| `fr` | 15.5 ms | 11.5 ms | 4.4 ms |

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
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ✅ | 228.9 KB | 0.0% | 89.8% | 5.4 KB | 16.9 ms | 9.1 ms | 15.0 ms | 16.4 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 229.5 KB | 0.0% | 81.6% |
| `/en/about` | 228.7 KB | 0.0% | 88.5% |
| `/en/blog` | 228.8 KB | 0.0% | 85.1% |
| `/en/careers` | 229.0 KB | 0.0% | 87.5% |
| `/en/contact` | 228.8 KB | 0.0% | 98.9% |
| `/en/faq` | 228.7 KB | 0.0% | 88.5% |
| `/en/pricing` | 228.9 KB | 0.0% | 95.5% |
| `/en/products` | 228.8 KB | 0.0% | 90.8% |
| `/en/settings` | 229.1 KB | 0.0% | 93.1% |
| `/en/team` | 228.7 KB | 0.0% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 229.5 KB | 0.0% | 81.6% |
| `/fr/about` | 228.7 KB | 0.0% | 88.5% |
| `/fr/blog` | 228.8 KB | 0.0% | 85.1% |
| `/fr/careers` | 229.0 KB | 0.0% | 87.5% |
| `/fr/contact` | 228.8 KB | 0.0% | 98.9% |
| `/fr/faq` | 228.7 KB | 0.0% | 88.5% |
| `/fr/pricing` | 228.9 KB | 0.0% | 95.5% |
| `/fr/products` | 228.8 KB | 0.0% | 90.8% |
| `/fr/settings` | 229.1 KB | 0.0% | 93.1% |
| `/fr/team` | 228.7 KB | 0.0% | 88.5% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/nextjs-static/paraglide-next-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 12.4 ms | 26.0 ms | 12.0 ms |
| `fr` | 17.9 ms | 11.2 ms | 36.9 ms | 6.1 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 16.6 ms | 5.4 ms |
| `fr` | 14.3 ms | 16.2 ms | 5.3 ms |

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
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | 150.7 KB | 5.1% | 89.9% | 31.0 KB | 2.4 ms | 1.0 ms | 14.7 ms | 11.7 ms |

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 152.0 KB | 0.0% | 83.3% |
| `/en/about` | 151.0 KB | 0.0% | 88.8% |
| `/en/blog` | 150.7 KB | 0.0% | 85.4% |
| `/en/careers` | 150.7 KB | 0.0% | 87.6% |
| `/en/contact` | 150.2 KB | 0.0% | 97.8% |
| `/en/faq` | 150.9 KB | 0.0% | 88.8% |
| `/en/pricing` | 150.4 KB | 0.0% | 88.8% |
| `/en/products` | 150.3 KB | 0.0% | 94.4% |
| `/en/settings` | 150.7 KB | 0.0% | 94.4% |
| `/en/team` | 150.5 KB | 0.0% | 88.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 152.0 KB | 20.0% | 85.0% |
| `/fr/about` | 151.0 KB | 5.9% | 87.0% |
| `/fr/blog` | 150.7 KB | 9.9% | 87.0% |
| `/fr/careers` | 150.7 KB | 4.5% | 89.0% |
| `/fr/contact` | 150.2 KB | 4.5% | 98.0% |
| `/fr/faq` | 150.9 KB | 16.9% | 90.0% |
| `/fr/pricing` | 150.4 KB | 16.9% | 87.0% |
| `/fr/products` | 150.3 KB | 11.1% | 92.0% |
| `/fr/settings` | 150.7 KB | 7.2% | 94.0% |
| `/fr/team` | 150.5 KB | 5.9% | 90.1% |

**Bundle link:** [View on GitHub](https://github.com/intlayer-org/benchmark-bloom/tree/main/apps-benchmark/nextjs-scoped-dynamic/tolgee-app)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.4 ms | 0.7 ms | 14.0 ms | 1.0 ms |
| `fr` | 1.4 ms | 0.8 ms | 3.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.5 ms | 11.7 ms | 5.5 ms |
| `fr` | 14.9 ms | 11.7 ms | 5.8 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 11 |
| Total app entries | 29 |
| With lib size data | 10 |
| With page bundle data | 9 |
| With component data | 11 |
| With reactivity data | 11 |
| With rendering data | 11 |
