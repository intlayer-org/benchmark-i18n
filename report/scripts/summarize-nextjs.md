# Next.js — i18n Benchmark Results

_Generated: 2026-04-18_

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

- [base-app-nextjs](#base-app-nextjs)
- [gt-next](#gt-next)
- [lingo.dev-app-nextjs](#lingo-dev-app-nextjs)
- [lingui](#lingui)
- [next-i18next](#next-i18next)
- [next-international](#next-international)
- [next-intl](#next-intl)
- [next-intlayer](#next-intlayer)
- [next-translate](#next-translate)
- [paraglide-next](#paraglide-next)
- [tolgee](#tolgee)

## base-app-nextjs

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | — | — |

---

## gt-next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 6.16.5 | 173.1 KB | 657.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 434.3 KB | 0.0% | 45.0% | 174.1 KB | 26.8 ms | 6.7 ms | 23.8 ms | 17.9 ms |
| Dynamic | 🔶 | 434.3 KB | 0.0% | 45.0% | 174.1 KB | 24.8 ms | 5.8 ms | 23.4 ms | 21.9 ms |
| Scoped Static | 🔶 | 434.3 KB | 0.0% | 41.0% | 174.1 KB | 26.2 ms | 5.7 ms | 25.0 ms | 17.9 ms |
| Scoped Dynamic | 🔶 | 434.3 KB | 0.0% | 41.0% | 174.1 KB | 31.5 ms | 6.5 ms | 33.1 ms | 20.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

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
| `/fr/` | 434.6 KB | 0.0% | 82.6% |
| `/fr/about` | 434.5 KB | 0.0% | 88.4% |
| `/fr/blog` | 434.2 KB | 0.0% | 84.9% |
| `/fr/careers` | 434.2 KB | 0.0% | 87.2% |
| `/fr/contact` | 434.2 KB | 0.0% | 98.8% |
| `/fr/faq` | 434.2 KB | 0.0% | 88.4% |
| `/fr/pricing` | 434.2 KB | 0.0% | 95.3% |
| `/fr/products` | 434.2 KB | 0.0% | 90.7% |
| `/fr/settings` | 434.2 KB | 0.0% | 94.2% |
| `/fr/team` | 434.2 KB | 0.0% | 89.5% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 30.7 ms | 22.8 ms | 50.0 ms | 7.4 ms |
| `fr` | 22.9 ms | 19.9 ms | 28.2 ms | 6.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 25.7 ms | 19.0 ms | 2.7 ms |
| `fr` | 21.9 ms | 16.7 ms | 2.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

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
| `/fr/` | 434.6 KB | 0.0% | 82.6% |
| `/fr/about` | 434.5 KB | 0.0% | 88.4% |
| `/fr/blog` | 434.2 KB | 0.0% | 84.9% |
| `/fr/careers` | 434.2 KB | 0.0% | 87.2% |
| `/fr/contact` | 434.2 KB | 0.0% | 98.8% |
| `/fr/faq` | 434.2 KB | 0.0% | 88.4% |
| `/fr/pricing` | 434.2 KB | 0.0% | 95.3% |
| `/fr/products` | 434.2 KB | 0.0% | 90.7% |
| `/fr/settings` | 434.2 KB | 0.0% | 94.2% |
| `/fr/team` | 434.2 KB | 0.0% | 89.5% |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 26.0 ms | 17.6 ms | 39.1 ms | 5.5 ms |
| `fr` | 23.5 ms | 19.9 ms | 29.6 ms | 6.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 24.0 ms | 26.8 ms | 2.8 ms |
| `fr` | 22.7 ms | 17.1 ms | 2.2 ms |

</details>

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

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 26.4 ms | 18.5 ms | 2.3 ms |
| `fr` | 23.6 ms | 17.4 ms | 2.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

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

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 36.8 ms | 28.6 ms | 66.3 ms | 6.8 ms |
| `fr` | 26.2 ms | 25.0 ms | 27.0 ms | 6.1 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 40.3 ms | 20.4 ms | 2.8 ms |
| `fr` | 25.8 ms | 21.4 ms | 2.7 ms |

</details>

---

## lingo.dev-app-nextjs

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 7.5 KB | 19.6 KB |

---

## lingui

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 5.3.0 | 10.0 KB | 32.4 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 221.9 KB | 50.0% | 90.0% | 73.1 KB | 15.2 ms | 4.2 ms | 14.1 ms | 11.7 ms |
| Dynamic | 🔶 | 160.1 KB | 10.0% | 89.9% | 18.5 KB | 16.9 ms | 3.8 ms | 15.5 ms | 11.5 ms |
| Scoped Static | 🔶 | 162.9 KB | 10.4% | 89.1% | 18.9 KB | 22.9 ms | 5.3 ms | 14.6 ms | 9.9 ms |
| Scoped Dynamic | 🔶 | 162.9 KB | 10.4% | 89.1% | 148.9 KB | 17.8 ms | 5.4 ms | 15.3 ms | 10.0 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 220.3 KB | 54.4% | 80.0% |
| `/en/about` | 220.3 KB | 54.4% | 87.5% |
| `/en/blog` | 221.9 KB | 54.4% | 83.8% |
| `/en/careers` | 223.6 KB | 54.4% | 95.0% |
| `/en/contact` | 221.8 KB | 54.4% | 98.8% |
| `/en/faq` | 222.6 KB | 54.4% | 87.5% |
| `/en/pricing` | 222.2 KB | 54.4% | 95.0% |
| `/en/products` | 222.1 KB | 54.4% | 90.0% |
| `/en/settings` | 222.3 KB | 54.4% | 95.0% |
| `/en/team` | 222.2 KB | 54.4% | 87.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 220.3 KB | 45.6% | 83.3% |
| `/fr/about` | 220.3 KB | 45.6% | 85.4% |
| `/fr/blog` | 221.9 KB | 45.6% | 86.5% |
| `/fr/careers` | 223.6 KB | 45.6% | 93.8% |
| `/fr/contact` | 221.8 KB | 45.6% | 97.9% |
| `/fr/faq` | 222.6 KB | 45.6% | 90.6% |
| `/fr/pricing` | 222.2 KB | 45.6% | 90.6% |
| `/fr/products` | 222.1 KB | 45.6% | 89.6% |
| `/fr/settings` | 222.3 KB | 45.6% | 93.8% |
| `/fr/team` | 222.2 KB | 45.6% | 88.5% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.0 ms | 15.0 ms | 20.6 ms | 4.6 ms |
| `fr` | 13.4 ms | 11.0 ms | 17.6 ms | 3.9 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 15.4 ms | 13.1 ms | 6.4 ms |
| `fr` | 12.8 ms | 10.2 ms | 4.4 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 158.4 KB | 0.0% | 79.7% |
| `/en/about` | 158.4 KB | 0.0% | 87.3% |
| `/en/blog` | 160.1 KB | 0.0% | 83.5% |
| `/en/careers` | 161.7 KB | 0.0% | 94.9% |
| `/en/contact` | 160.0 KB | 0.0% | 98.7% |
| `/en/faq` | 160.8 KB | 0.0% | 87.3% |
| `/en/pricing` | 160.3 KB | 0.0% | 94.9% |
| `/en/products` | 160.2 KB | 0.0% | 89.9% |
| `/en/settings` | 160.4 KB | 0.0% | 94.9% |
| `/en/team` | 160.3 KB | 0.0% | 87.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 158.4 KB | 17.2% | 83.2% |
| `/fr/about` | 158.4 KB | 17.2% | 85.3% |
| `/fr/blog` | 160.1 KB | 17.9% | 86.3% |
| `/fr/careers` | 161.7 KB | 20.0% | 93.7% |
| `/fr/contact` | 160.0 KB | 17.2% | 97.9% |
| `/fr/faq` | 160.8 KB | 23.8% | 90.5% |
| `/fr/pricing` | 160.3 KB | 20.0% | 90.5% |
| `/fr/products` | 160.2 KB | 22.0% | 89.5% |
| `/fr/settings` | 160.4 KB | 20.0% | 93.7% |
| `/fr/team` | 160.3 KB | 23.8% | 89.5% |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.0 ms | 11.3 ms | 27.9 ms | 3.8 ms |
| `fr` | 15.8 ms | 14.2 ms | 19.9 ms | 3.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.4 ms | 14.2 ms | 5.8 ms |
| `fr` | 12.5 ms | 8.7 ms | 3.8 ms |

</details>

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

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 15.9 ms | 10.1 ms | 4.8 ms |
| `fr` | 13.4 ms | 9.7 ms | 4.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 161.3 KB | 0.0% | 79.7% |
| `/en/about` | 161.3 KB | 0.0% | 87.3% |
| `/en/blog` | 162.9 KB | 0.0% | 83.5% |
| `/en/careers` | 164.5 KB | 0.0% | 95.1% |
| `/en/contact` | 162.8 KB | 0.0% | 96.3% |
| `/en/faq` | 163.6 KB | 0.0% | 87.3% |
| `/en/pricing` | 163.2 KB | 0.0% | 95.0% |
| `/en/products` | 163.1 KB | 0.0% | 89.9% |
| `/en/settings` | 163.3 KB | 0.0% | 93.7% |
| `/en/team` | 163.1 KB | 0.0% | 87.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 161.3 KB | 18.7% | 81.4% |
| `/fr/about` | 161.3 KB | 18.7% | 83.7% |
| `/fr/blog` | 162.9 KB | 19.4% | 84.9% |
| `/fr/careers` | 164.5 KB | 21.6% | 93.2% |
| `/fr/contact` | 162.8 KB | 18.7% | 95.5% |
| `/fr/faq` | 163.6 KB | 24.3% | 88.6% |
| `/fr/pricing` | 163.2 KB | 21.4% | 88.5% |
| `/fr/products` | 163.1 KB | 18.7% | 91.4% |
| `/fr/settings` | 163.3 KB | 22.3% | 91.9% |
| `/fr/team` | 163.1 KB | 25.0% | 88.4% |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 20.0 ms | 14.4 ms | 28.8 ms | 6.4 ms |
| `fr` | 15.7 ms | 12.6 ms | 21.0 ms | 4.4 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 17.2 ms | 13.3 ms | 6.9 ms |
| `fr` | 13.5 ms | 6.6 ms | 1.3 ms |

</details>

---

## next-i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 16.0.5 | 17.8 KB | 61.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 231.1 KB | 0.0% | 89.8% | 24.5 KB | 20.8 ms | 6.4 ms | 13.4 ms | 11.7 ms |
| Dynamic | 🔶 | 182.5 KB | 56.0% | 89.8% | 24.8 KB | 19.2 ms | 4.1 ms | 13.5 ms | 18.6 ms |
| Scoped Static | 🔶 | 232.7 KB | 0.0% | 89.8% | 25.5 KB | 15.6 ms | 4.3 ms | 15.5 ms | 12.2 ms |
| Scoped Dynamic | 🔶 | 190.9 KB | 48.7% | 89.8% | 26.0 KB | 15.8 ms | 6.2 ms | 14.0 ms | 18.3 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 229.6 KB | 0.0% | 79.5% |
| `/en/about` | 229.6 KB | 0.0% | 84.6% |
| `/en/blog` | 231.1 KB | 0.0% | 83.3% |
| `/en/careers` | 232.6 KB | 0.0% | 94.9% |
| `/en/contact` | 231.1 KB | 0.0% | 97.5% |
| `/en/faq` | 232.4 KB | 0.0% | 91.1% |
| `/en/pricing` | 231.2 KB | 0.0% | 96.2% |
| `/en/products` | 231.0 KB | 0.0% | 89.7% |
| `/en/settings` | 231.4 KB | 0.0% | 93.7% |
| `/en/team` | 231.1 KB | 0.0% | 87.2% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 229.6 KB | 0.0% | 79.5% |
| `/fr/about` | 229.6 KB | 0.0% | 84.6% |
| `/fr/blog` | 231.1 KB | 0.0% | 83.3% |
| `/fr/careers` | 232.6 KB | 0.0% | 94.9% |
| `/fr/contact` | 231.1 KB | 0.0% | 97.5% |
| `/fr/faq` | 232.4 KB | 0.0% | 91.1% |
| `/fr/pricing` | 231.2 KB | 0.0% | 96.2% |
| `/fr/products` | 231.0 KB | 0.0% | 89.7% |
| `/fr/settings` | 231.4 KB | 0.0% | 93.7% |
| `/fr/team` | 231.1 KB | 0.0% | 87.2% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 26.8 ms | 12.8 ms | 51.1 ms | 5.5 ms |
| `fr` | 14.8 ms | 10.2 ms | 17.1 ms | 7.3 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 14.3 ms | 11.6 ms | 4.8 ms |
| `fr` | 12.6 ms | 11.9 ms | 4.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 177.1 KB | 75.9% | 81.8% |
| `/en/about` | 177.1 KB | 75.9% | 76.1% |
| `/en/blog` | 178.7 KB | 75.9% | 85.2% |
| `/en/careers` | 180.1 KB | 75.9% | 95.5% |
| `/en/contact` | 178.6 KB | 75.9% | 97.8% |
| `/en/faq` | 180.0 KB | 75.9% | 91.0% |
| `/en/pricing` | 178.7 KB | 75.9% | 96.6% |
| `/en/products` | 179.9 KB | 75.9% | 91.0% |
| `/en/settings` | 179.0 KB | 75.9% | 94.4% |
| `/en/team` | 178.6 KB | 75.9% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 184.6 KB | 36.2% | 86.3% |
| `/fr/about` | 184.6 KB | 36.2% | 82.1% |
| `/fr/blog` | 186.1 KB | 36.2% | 88.9% |
| `/fr/careers` | 187.6 KB | 36.2% | 89.8% |
| `/fr/contact` | 186.1 KB | 36.2% | 98.3% |
| `/fr/faq` | 187.5 KB | 36.2% | 94.1% |
| `/fr/pricing` | 186.2 KB | 36.2% | 78.6% |
| `/fr/products` | 187.4 KB | 36.2% | 93.2% |
| `/fr/settings` | 186.5 KB | 36.2% | 95.8% |
| `/fr/team` | 186.1 KB | 36.2% | 91.5% |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 23.8 ms | 12.0 ms | 43.1 ms | 4.3 ms |
| `fr` | 14.5 ms | 11.5 ms | 20.4 ms | 3.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 13.9 ms | 18.6 ms | 4.1 ms |
| `fr` | 13.1 ms | 18.7 ms | 4.4 ms |

</details>

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

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 17.7 ms | 13.7 ms | 7.2 ms |
| `fr` | 13.3 ms | 10.7 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 184.1 KB | 32.1% | 81.7% |
| `/en/about` | 184.1 KB | 32.1% | 88.5% |
| `/en/blog` | 185.6 KB | 32.1% | 87.5% |
| `/en/careers` | 187.1 KB | 32.1% | 88.6% |
| `/en/contact` | 185.6 KB | 32.1% | 96.2% |
| `/en/faq` | 186.9 KB | 32.1% | 93.3% |
| `/en/pricing` | 185.7 KB | 32.1% | 97.1% |
| `/en/products` | 185.4 KB | 32.1% | 92.3% |
| `/en/settings` | 185.9 KB | 32.1% | 82.9% |
| `/en/team` | 185.6 KB | 32.1% | 90.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 194.6 KB | 65.3% | 79.5% |
| `/fr/about` | 194.6 KB | 65.3% | 84.6% |
| `/fr/blog` | 196.1 KB | 65.3% | 83.3% |
| `/fr/careers` | 197.6 KB | 65.3% | 94.9% |
| `/fr/contact` | 196.1 KB | 65.3% | 97.5% |
| `/fr/faq` | 197.5 KB | 65.3% | 91.1% |
| `/fr/pricing` | 196.2 KB | 65.3% | 96.2% |
| `/fr/products` | 196.0 KB | 65.3% | 89.7% |
| `/fr/settings` | 196.4 KB | 65.3% | 93.7% |
| `/fr/team` | 196.1 KB | 65.3% | 87.2% |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 12.3 ms | 31.2 ms | 5.3 ms |
| `fr` | 13.7 ms | 11.5 ms | 17.1 ms | 7.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 14.2 ms | 17.3 ms | 2.4 ms |
| `fr` | 13.9 ms | 19.3 ms | 4.4 ms |

</details>

---

## next-international

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 1.3.1 | 10.9 KB | 38.5 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 251.9 KB | 50.0% | 89.9% | 11.6 KB | 37.4 ms | 12.9 ms | 17.5 ms | 7.2 ms |
| Dynamic | ✅ | 166.9 KB | 17.9% | 89.9% | 11.7 KB | 27.6 ms | 10.6 ms | 19.4 ms | 6.5 ms |
| Scoped Static | ✅ | 224.6 KB | 50.0% | 89.9% | 12.5 KB | 16.6 ms | 5.2 ms | 25.3 ms | 9.2 ms |
| Scoped Dynamic | ✅ | 165.6 KB | 0.0% | 89.9% | 11.9 KB | 20.4 ms | 5.5 ms | 20.1 ms | 9.1 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 250.7 KB | 54.7% | 81.6% |
| `/en/about` | 250.7 KB | 54.7% | 88.5% |
| `/en/blog` | 252.2 KB | 54.7% | 85.1% |
| `/en/careers` | 252.4 KB | 54.7% | 87.4% |
| `/en/contact` | 252.2 KB | 54.7% | 98.9% |
| `/en/faq` | 252.1 KB | 54.7% | 88.5% |
| `/en/pricing` | 252.3 KB | 54.5% | 95.5% |
| `/en/products` | 252.1 KB | 54.7% | 90.8% |
| `/en/settings` | 252.5 KB | 54.7% | 94.3% |
| `/en/team` | 252.2 KB | 54.7% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 250.7 KB | 45.3% | 84.8% |
| `/fr/about` | 250.7 KB | 45.3% | 86.7% |
| `/fr/blog` | 252.2 KB | 45.3% | 87.6% |
| `/fr/careers` | 252.4 KB | 45.3% | 87.6% |
| `/fr/contact` | 252.2 KB | 45.3% | 98.1% |
| `/fr/faq` | 252.1 KB | 45.3% | 90.5% |
| `/fr/pricing` | 252.3 KB | 45.0% | 90.6% |
| `/fr/products` | 252.1 KB | 45.3% | 90.5% |
| `/fr/settings` | 252.5 KB | 45.3% | 93.3% |
| `/fr/team` | 252.2 KB | 45.3% | 89.5% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 34.3 ms | 27.2 ms | 58.2 ms | 12.1 ms |
| `fr` | 40.4 ms | 28.0 ms | 71.9 ms | 13.7 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.9 ms | 7.1 ms | 0.6 ms |
| `fr` | 15.1 ms | 7.3 ms | 0.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 163.5 KB | 0.0% | 81.6% |
| `/en/about` | 163.5 KB | 0.0% | 88.5% |
| `/en/blog` | 165.0 KB | 0.0% | 85.1% |
| `/en/careers` | 165.2 KB | 0.0% | 87.4% |
| `/en/contact` | 165.0 KB | 0.0% | 98.9% |
| `/en/faq` | 164.9 KB | 0.0% | 88.5% |
| `/en/pricing` | 165.1 KB | 0.0% | 95.5% |
| `/en/products` | 164.9 KB | 0.0% | 90.8% |
| `/en/settings` | 165.3 KB | 0.0% | 94.3% |
| `/en/team` | 165.0 KB | 0.0% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 167.8 KB | 35.8% | 84.8% |
| `/fr/about` | 167.8 KB | 35.8% | 86.7% |
| `/fr/blog` | 169.3 KB | 35.8% | 87.6% |
| `/fr/careers` | 169.5 KB | 35.8% | 87.6% |
| `/fr/contact` | 169.3 KB | 35.8% | 98.1% |
| `/fr/faq` | 169.2 KB | 35.8% | 90.5% |
| `/fr/pricing` | 169.5 KB | 35.6% | 90.6% |
| `/fr/products` | 169.3 KB | 35.8% | 90.5% |
| `/fr/settings` | 169.6 KB | 35.8% | 93.3% |
| `/fr/team` | 169.3 KB | 35.8% | 89.5% |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 27.6 ms | 19.8 ms | 38.1 ms | 10.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 23.3 ms | 6.9 ms | 1.1 ms |
| `fr` | 15.5 ms | 6.2 ms | 0.8 ms |

</details>

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

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 25.8 ms | 10.5 ms | 2.0 ms |
| `fr` | 24.8 ms | 7.8 ms | 0.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 163.8 KB | 0.0% | 82.2% |
| `/en/about` | 163.8 KB | 0.0% | 88.9% |
| `/en/blog` | 165.3 KB | 0.0% | 85.6% |
| `/en/careers` | 165.4 KB | 0.0% | 93.3% |
| `/en/contact` | 165.3 KB | 0.0% | 98.9% |
| `/en/faq` | 165.1 KB | 0.0% | 80.0% |
| `/en/pricing` | 165.4 KB | 0.0% | 95.6% |
| `/en/products` | 165.2 KB | 0.0% | 91.1% |
| `/en/settings` | 165.6 KB | 0.0% | 94.4% |
| `/en/team` | 165.2 KB | 0.0% | 88.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 164.9 KB | 0.0% | 85.0% |
| `/fr/about` | 164.9 KB | 0.0% | 86.9% |
| `/fr/blog` | 166.5 KB | 0.0% | 87.9% |
| `/fr/careers` | 166.5 KB | 0.0% | 91.6% |
| `/fr/contact` | 166.4 KB | 0.0% | 98.1% |
| `/fr/faq` | 166.3 KB | 0.0% | 84.1% |
| `/fr/pricing` | 166.6 KB | 0.0% | 91.7% |
| `/fr/products` | 166.4 KB | 0.0% | 90.7% |
| `/fr/settings` | 166.7 KB | 0.0% | 93.5% |
| `/fr/team` | 166.3 KB | 0.0% | 89.7% |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 20.4 ms | 13.3 ms | 30.3 ms | 5.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 26.0 ms | 11.8 ms | 1.1 ms |
| `fr` | 14.1 ms | 6.3 ms | 0.9 ms |

</details>

---

## next-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.9.1 | 12.8 KB | 51.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 166.7 KB | 4.2% | 89.8% | 20.5 KB | 16.4 ms | 4.6 ms | 18.5 ms | 13.5 ms |
| Dynamic | 🔶 | 166.7 KB | 9.7% | 89.9% | 20.5 KB | 14.7 ms | 4.0 ms | 16.0 ms | 10.8 ms |
| Scoped Static | 🔶 | 163.4 KB | 0.0% | 0.0% | 21.8 KB | 17.3 ms | 3.8 ms | 18.9 ms | 14.0 ms |
| Scoped Dynamic | 🔶 | 163.5 KB | 0.0% | 0.0% | 21.5 KB | 15.7 ms | 4.0 ms | 16.4 ms | 14.7 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 165.4 KB | 0.0% | 82.1% |
| `/en/about` | 165.4 KB | 0.0% | 88.1% |
| `/en/blog` | 167.0 KB | 0.0% | 84.5% |
| `/en/careers` | 167.2 KB | 0.0% | 87.1% |
| `/en/contact` | 166.9 KB | 0.0% | 98.8% |
| `/en/faq` | 166.9 KB | 0.0% | 88.1% |
| `/en/pricing` | 167.1 KB | 0.0% | 95.3% |
| `/en/products` | 166.9 KB | 0.0% | 90.5% |
| `/en/settings` | 167.3 KB | 0.0% | 94.0% |
| `/en/team` | 166.9 KB | 0.0% | 89.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 165.4 KB | 8.3% | 83.7% |
| `/fr/about` | 165.4 KB | 8.3% | 89.8% |
| `/fr/blog` | 167.0 KB | 8.3% | 86.7% |
| `/fr/careers` | 167.2 KB | 8.3% | 86.9% |
| `/fr/contact` | 166.9 KB | 8.3% | 99.0% |
| `/fr/faq` | 166.9 KB | 8.3% | 89.8% |
| `/fr/pricing` | 167.1 KB | 8.2% | 89.9% |
| `/fr/products` | 166.9 KB | 8.3% | 89.8% |
| `/fr/settings` | 167.3 KB | 8.3% | 92.9% |
| `/fr/team` | 166.9 KB | 8.3% | 89.8% |

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.8 ms | 9.8 ms | 31.5 ms | 5.4 ms |
| `fr` | 15.1 ms | 12.2 ms | 18.8 ms | 3.7 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 22.0 ms | 16.7 ms | 7.0 ms |
| `fr` | 14.9 ms | 10.3 ms | 4.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 165.4 KB | 0.0% | 81.5% |
| `/en/about` | 165.4 KB | 0.0% | 87.7% |
| `/en/blog` | 167.0 KB | 0.0% | 84.0% |
| `/en/careers` | 167.0 KB | 0.0% | 91.4% |
| `/en/contact` | 166.9 KB | 0.0% | 98.8% |
| `/en/faq` | 166.8 KB | 0.0% | 87.7% |
| `/en/pricing` | 167.1 KB | 0.0% | 95.1% |
| `/en/products` | 166.9 KB | 0.0% | 90.1% |
| `/en/settings` | 167.3 KB | 0.0% | 93.8% |
| `/en/team` | 166.9 KB | 0.0% | 88.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 165.4 KB | 19.4% | 83.3% |
| `/fr/about` | 165.4 KB | 19.4% | 89.6% |
| `/fr/blog` | 167.0 KB | 19.4% | 86.5% |
| `/fr/careers` | 167.0 KB | 19.4% | 90.6% |
| `/fr/contact` | 166.9 KB | 19.4% | 97.9% |
| `/fr/faq` | 166.8 KB | 19.4% | 89.6% |
| `/fr/pricing` | 167.1 KB | 19.1% | 89.7% |
| `/fr/products` | 166.9 KB | 19.4% | 89.6% |
| `/fr/settings` | 167.3 KB | 19.4% | 92.7% |
| `/fr/team` | 166.9 KB | 19.4% | 89.6% |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.9 ms | 10.6 ms | 28.2 ms | 4.2 ms |
| `fr` | 13.5 ms | 10.5 ms | 17.5 ms | 3.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.2 ms | 12.0 ms | 5.7 ms |
| `fr` | 13.7 ms | 9.5 ms | 4.2 ms |

</details>

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

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.9 ms | 15.4 ms | 6.9 ms |
| `fr` | 17.8 ms | 12.7 ms | 4.4 ms |

</details>

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

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 10.7 ms | 26.5 ms | 4.0 ms |
| `fr` | 13.5 ms | 11.1 ms | 20.5 ms | 3.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 16.9 ms | 18.3 ms | 6.1 ms |
| `fr` | 15.8 ms | 11.1 ms | 4.3 ms |

</details>

---

## next-intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.1-canary-1 | 20.5 KB | 74.4 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 151.5 KB | 0.0% | 0.0% | 7.1 KB | 18.4 ms | 5.0 ms | 19.9 ms | 12.2 ms |
| Dynamic | 🔶 | 151.5 KB | 0.0% | 0.0% | 12.6 KB | 16.9 ms | 7.3 ms | 16.9 ms | 12.5 ms |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

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

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 23.1 ms | 14.8 ms | 43.9 ms | 5.4 ms |
| `fr` | 13.7 ms | 11.4 ms | 17.0 ms | 4.6 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 24.9 ms | 14.1 ms | 6.8 ms |
| `fr` | 14.9 ms | 10.3 ms | 4.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

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

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.7 ms | 12.9 ms | 26.7 ms | 10.0 ms |
| `fr` | 14.0 ms | 11.6 ms | 16.3 ms | 4.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 20.1 ms | 14.8 ms | 8.0 ms |
| `fr` | 13.8 ms | 10.2 ms | 5.0 ms |

</details>

---

## next-translate

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 3.1.2 | 2.4 KB | 6.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 153.0 KB | 0.0% | 89.8% | 10.0 KB | 21.1 ms | 4.2 ms | 17.9 ms | 12.4 ms |
| Dynamic | 🔶 | 153.0 KB | 0.0% | 89.8% | 10.2 KB | 16.0 ms | 3.8 ms | 17.1 ms | 14.6 ms |
| Scoped Static | 🔶 | 153.0 KB | 0.0% | 89.8% | 11.1 KB | 18.1 ms | 4.5 ms | 20.0 ms | 13.8 ms |
| Scoped Dynamic | 🔶 | 153.0 KB | 0.0% | 89.8% | 11.4 KB | 18.5 ms | 3.9 ms | 17.4 ms | 12.0 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

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

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 23.5 ms | 18.7 ms | 27.8 ms | 4.5 ms |
| `fr` | 18.8 ms | 11.1 ms | 33.7 ms | 3.9 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 21.6 ms | 13.7 ms | 6.7 ms |
| `fr` | 14.3 ms | 11.1 ms | 4.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

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

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.1 ms | 12.2 ms | 31.3 ms | 4.0 ms |
| `fr` | 14.0 ms | 10.5 ms | 18.8 ms | 3.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.7 ms | 17.1 ms | 6.2 ms |
| `fr` | 14.5 ms | 12.2 ms | 4.2 ms |

</details>

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

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 22.0 ms | 14.8 ms | 5.4 ms |
| `fr` | 18.0 ms | 12.9 ms | 5.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

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

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 20.0 ms | 16.7 ms | 30.5 ms | 4.1 ms |
| `fr` | 17.0 ms | 13.1 ms | 23.3 ms | 3.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.0 ms | 13.0 ms | 4.2 ms |
| `fr` | 16.8 ms | 10.9 ms | 4.1 ms |

</details>

---

## paraglide-next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.2 KB | 0.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 346.6 KB | 0.0% | 89.8% | 5.4 KB | — | — | 18.2 ms | 16.6 ms |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

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

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 21.8 ms | 16.8 ms | 3.1 ms |
| `fr` | 14.7 ms | 16.3 ms | 3.2 ms |

</details>

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 7.0.0 | 11.0 KB | 35.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 291.2 KB | 50.0% | 45.0% | 24.1 KB | — | — | 14.7 ms | 8.6 ms |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | 🔶 | 264.5 KB | 39.4% | 90.0% | 27.4 KB | 15.3 ms | 4.0 ms | 17.8 ms | 14.4 ms |
| Scoped Dynamic | 🔶 | 156.2 KB | 12.7% | 89.9% | 31.0 KB | 1.3 ms | — | 15.5 ms | 13.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 292.4 KB | 0.0% | 83.5% |
| `/en/about` | 291.4 KB | 0.0% | 89.0% |
| `/en/blog` | 291.1 KB | 0.0% | 85.7% |
| `/en/careers` | 291.2 KB | 0.0% | 87.9% |
| `/en/contact` | 290.7 KB | 0.0% | 97.8% |
| `/en/faq` | 291.4 KB | 0.0% | 89.0% |
| `/en/pricing` | 290.9 KB | 0.0% | 89.0% |
| `/en/products` | 290.8 KB | 0.0% | 94.5% |
| `/en/settings` | 291.1 KB | 0.0% | 94.5% |
| `/en/team` | 290.9 KB | 0.0% | 89.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 292.4 KB | 100.0% | 0.0% |
| `/fr/about` | 291.4 KB | 100.0% | 0.0% |
| `/fr/blog` | 291.1 KB | 100.0% | 0.0% |
| `/fr/careers` | 291.2 KB | 100.0% | 0.0% |
| `/fr/contact` | 290.7 KB | 100.0% | 0.0% |
| `/fr/faq` | 291.4 KB | 100.0% | 0.0% |
| `/fr/pricing` | 290.9 KB | 100.0% | 0.0% |
| `/fr/products` | 290.8 KB | 100.0% | 0.0% |
| `/fr/settings` | 291.1 KB | 100.0% | 0.0% |
| `/fr/team` | 290.9 KB | 100.0% | 0.0% |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 16.1 ms | 9.2 ms | 1.8 ms |
| `fr` | 13.4 ms | 8.1 ms | 1.8 ms |

</details>

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

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 20.5 ms | 16.5 ms | 8.5 ms |
| `fr` | 15.1 ms | 12.4 ms | 5.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 154.5 KB | 0.0% | 83.3% |
| `/en/about` | 154.5 KB | 0.0% | 88.9% |
| `/en/blog` | 156.7 KB | 0.0% | 85.6% |
| `/en/careers` | 156.8 KB | 0.0% | 87.8% |
| `/en/contact` | 156.3 KB | 0.0% | 97.8% |
| `/en/faq` | 157.0 KB | 0.0% | 88.9% |
| `/en/pricing` | 156.5 KB | 0.0% | 88.9% |
| `/en/products` | 156.3 KB | 0.0% | 94.4% |
| `/en/settings` | 156.7 KB | 0.0% | 94.4% |
| `/en/team` | 156.5 KB | 0.0% | 89.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 154.5 KB | 22.0% | 85.0% |
| `/fr/about` | 154.5 KB | 22.0% | 87.0% |
| `/fr/blog` | 156.7 KB | 26.4% | 87.0% |
| `/fr/careers` | 156.8 KB | 22.9% | 89.0% |
| `/fr/contact` | 156.3 KB | 22.9% | 98.0% |
| `/fr/faq` | 157.0 KB | 31.2% | 90.0% |
| `/fr/pricing` | 156.5 KB | 31.2% | 87.0% |
| `/fr/products` | 156.3 KB | 27.3% | 92.0% |
| `/fr/settings` | 156.7 KB | 24.7% | 94.0% |
| `/fr/team` | 156.5 KB | 23.8% | 90.1% |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 1.5 ms | 0.6 ms | 4.4 ms | 0.0 ms |
| `fr` | 1.0 ms | 0.5 ms | 2.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 16.8 ms | 15.3 ms | 8.6 ms |
| `fr` | 14.3 ms | 11.9 ms | 5.8 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 11 |
| Total app entries | 32 |
| With lib size data | 10 |
| With page bundle data | 30 |
| With component data | 30 |
| With reactivity data | 28 |
| With rendering data | 30 |
