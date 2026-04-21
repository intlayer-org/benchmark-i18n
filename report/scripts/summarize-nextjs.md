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
| Static | ✅ | 150.8 KB | 0.0% | 0.0% | 0.7 KB | 14.0 ms | 3.6 ms | 14.7 ms | 9.3 ms |
| Dynamic | ✅ | 150.8 KB | 0.0% | 0.0% | 0.7 KB | 14.0 ms | 3.6 ms | 14.7 ms | 9.3 ms |
| Scoped Static | ✅ | 150.8 KB | 0.0% | 0.0% | 0.7 KB | 14.0 ms | 3.6 ms | 14.7 ms | 9.3 ms |
| Scoped Dynamic | ✅ | 150.8 KB | 0.0% | 0.0% | 0.7 KB | 14.0 ms | 3.6 ms | 14.7 ms | 9.3 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.3 ms | 8.9 ms | 25.4 ms | 3.9 ms |
| `fr` | 12.8 ms | 9.8 ms | 18.3 ms | 3.3 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.5 ms | 9.5 ms | 4.2 ms |
| `fr` | 13.9 ms | 9.1 ms | 4.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.3 ms | 8.9 ms | 25.4 ms | 3.9 ms |
| `fr` | 12.8 ms | 9.8 ms | 18.3 ms | 3.3 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.5 ms | 9.5 ms | 4.2 ms |
| `fr` | 13.9 ms | 9.1 ms | 4.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.3 ms | 8.9 ms | 25.4 ms | 3.9 ms |
| `fr` | 12.8 ms | 9.8 ms | 18.3 ms | 3.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.5 ms | 9.5 ms | 4.2 ms |
| `fr` | 13.9 ms | 9.1 ms | 4.1 ms |

</details>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-base-app/bundle/rollup-visualizer.html)

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
| Scoped Static | 🔶 | — | — | — | — | 20.7 ms | 5.7 ms | 25.5 ms | 21.5 ms |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 21.1 ms | 16.8 ms | 32.3 ms | 5.7 ms |
| `fr` | 20.3 ms | 15.6 ms | 27.6 ms | 5.7 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 25.0 ms | 21.8 ms | 3.4 ms |
| `fr` | 26.0 ms | 21.2 ms | 3.0 ms |

</details>

---

## lingo.dev

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 0.4.0 | 7.5 KB | 19.6 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | — | — | — | — | 16.8 ms | 4.7 ms | 20.9 ms | 15.3 ms |
| Dynamic | 🔶 | — | — | — | — | 16.8 ms | 4.7 ms | 20.9 ms | 15.3 ms |
| Scoped Static | 🔶 | — | — | — | — | 16.8 ms | 4.7 ms | 20.9 ms | 15.3 ms |
| Scoped Dynamic | 🔶 | — | — | — | — | 16.8 ms | 4.7 ms | 20.9 ms | 15.3 ms |

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.4 ms | 15.0 ms | 23.6 ms | 4.9 ms |
| `fr` | 15.1 ms | 12.8 ms | 19.0 ms | 4.4 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 24.4 ms | 16.8 ms | 7.9 ms |
| `fr` | 17.4 ms | 13.8 ms | 5.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.4 ms | 15.0 ms | 23.6 ms | 4.9 ms |
| `fr` | 15.1 ms | 12.8 ms | 19.0 ms | 4.4 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 24.4 ms | 16.8 ms | 7.9 ms |
| `fr` | 17.4 ms | 13.8 ms | 5.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.4 ms | 15.0 ms | 23.6 ms | 4.9 ms |
| `fr` | 15.1 ms | 12.8 ms | 19.0 ms | 4.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 24.4 ms | 16.8 ms | 7.9 ms |
| `fr` | 17.4 ms | 13.8 ms | 5.0 ms |

</details>

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
| Static | ✅ | 217.0 KB | 50.0% | 90.0% | 73.1 KB | 13.8 ms | 4.6 ms | 15.3 ms | 11.0 ms |
| Dynamic | 🔶 | 155.1 KB | 2.8% | 89.9% | 18.5 KB | 11.2 ms | 3.5 ms | 14.5 ms | 9.8 ms |
| Scoped Static | 🔶 | 157.9 KB | 2.7% | 89.1% | 18.9 KB | 12.7 ms | 4.8 ms | 15.1 ms | 10.2 ms |
| Scoped Dynamic | 🔶 | 158.0 KB | 14.1% | 0.0% | 148.7 KB | 12.0 ms | 3.9 ms | 14.9 ms | 12.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 218.3 KB | 54.4% | 80.0% |
| `/en/about` | 216.9 KB | 54.4% | 87.5% |
| `/en/blog` | 216.6 KB | 54.4% | 83.8% |
| `/en/careers` | 216.7 KB | 54.4% | 95.0% |
| `/en/contact` | 216.5 KB | 54.4% | 98.8% |
| `/en/faq` | 217.3 KB | 54.4% | 87.5% |
| `/en/pricing` | 216.9 KB | 54.4% | 95.0% |
| `/en/products` | 216.8 KB | 54.4% | 90.0% |
| `/en/settings` | 216.9 KB | 54.4% | 95.0% |
| `/en/team` | 216.8 KB | 54.4% | 87.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 218.3 KB | 45.6% | 83.3% |
| `/fr/about` | 216.9 KB | 45.6% | 85.4% |
| `/fr/blog` | 216.6 KB | 45.6% | 86.5% |
| `/fr/careers` | 216.7 KB | 45.6% | 93.8% |
| `/fr/contact` | 216.5 KB | 45.6% | 97.9% |
| `/fr/faq` | 217.3 KB | 45.6% | 90.6% |
| `/fr/pricing` | 216.9 KB | 45.6% | 90.6% |
| `/fr/products` | 216.8 KB | 45.6% | 89.6% |
| `/fr/settings` | 216.9 KB | 45.6% | 93.8% |
| `/fr/team` | 216.8 KB | 45.6% | 88.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.4 ms | 10.8 ms | 30.7 ms | 5.2 ms |
| `fr` | 12.3 ms | 10.2 ms | 16.5 ms | 4.1 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.5 ms | 10.8 ms | 4.4 ms |
| `fr` | 15.0 ms | 11.1 ms | 4.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 156.5 KB | 0.0% | 79.7% |
| `/en/about` | 155.1 KB | 0.0% | 87.2% |
| `/en/blog` | 154.7 KB | 0.0% | 83.3% |
| `/en/careers` | 154.9 KB | 0.0% | 94.9% |
| `/en/contact` | 154.6 KB | 0.0% | 98.7% |
| `/en/faq` | 155.4 KB | 0.0% | 87.2% |
| `/en/pricing` | 155.0 KB | 0.0% | 94.9% |
| `/en/products` | 154.9 KB | 0.0% | 89.7% |
| `/en/settings` | 155.1 KB | 0.0% | 94.9% |
| `/en/team` | 155.0 KB | 0.0% | 87.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 156.5 KB | 14.3% | 83.2% |
| `/fr/about` | 155.1 KB | 4.0% | 85.3% |
| `/fr/blog` | 154.7 KB | 1.0% | 86.3% |
| `/fr/careers` | 154.9 KB | 4.0% | 93.7% |
| `/fr/contact` | 154.6 KB | 0.0% | 97.9% |
| `/fr/faq` | 155.4 KB | 9.4% | 90.5% |
| `/fr/pricing` | 155.0 KB | 4.0% | 90.5% |
| `/fr/products` | 154.9 KB | 6.8% | 89.5% |
| `/fr/settings` | 155.1 KB | 4.0% | 93.7% |
| `/fr/team` | 155.0 KB | 9.4% | 89.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 11.9 ms | 9.2 ms | 19.3 ms | 3.5 ms |
| `fr` | 10.6 ms | 8.4 ms | 17.0 ms | 3.4 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.1 ms | 9.7 ms | 4.1 ms |
| `fr` | 14.9 ms | 10.0 ms | 4.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 159.3 KB | 0.0% | 79.7% |
| `/en/about` | 157.9 KB | 0.0% | 87.2% |
| `/en/blog` | 157.5 KB | 0.0% | 83.3% |
| `/en/careers` | 157.7 KB | 0.0% | 94.9% |
| `/en/contact` | 157.4 KB | 0.0% | 96.3% |
| `/en/faq` | 158.2 KB | 0.0% | 87.2% |
| `/en/pricing` | 157.8 KB | 0.0% | 94.9% |
| `/en/products` | 157.7 KB | 0.0% | 89.7% |
| `/en/settings` | 158.0 KB | 0.0% | 93.6% |
| `/en/team` | 157.8 KB | 0.0% | 87.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 159.3 KB | 15.5% | 81.4% |
| `/fr/about` | 157.9 KB | 4.4% | 83.7% |
| `/fr/blog` | 157.5 KB | 1.1% | 84.9% |
| `/fr/careers` | 157.7 KB | 4.4% | 93.0% |
| `/fr/contact` | 157.4 KB | 0.0% | 95.5% |
| `/fr/faq` | 158.2 KB | 8.4% | 88.6% |
| `/fr/pricing` | 157.8 KB | 4.3% | 88.5% |
| `/fr/products` | 157.7 KB | 0.0% | 91.4% |
| `/fr/settings` | 158.0 KB | 5.4% | 91.9% |
| `/fr/team` | 157.8 KB | 9.4% | 88.4% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 14.0 ms | 9.0 ms | 22.7 ms | 5.6 ms |
| `fr` | 11.5 ms | 9.7 ms | 13.6 ms | 4.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.8 ms | 10.4 ms | 4.7 ms |
| `fr` | 15.3 ms | 10.1 ms | 4.2 ms |

</details>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-lingui-app/bundle/rollup-visualizer.html)

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
| Static | ✅ | 227.5 KB | 0.0% | 89.8% | 24.5 KB | 14.6 ms | 6.9 ms | 15.1 ms | 11.6 ms |
| Dynamic | 🔶 | 178.8 KB | 48.6% | 89.8% | 24.8 KB | 14.2 ms | 3.9 ms | 14.8 ms | 19.2 ms |
| Scoped Static | 🔶 | 229.1 KB | 0.0% | 89.8% | 25.6 KB | 15.9 ms | 4.5 ms | 13.6 ms | 11.5 ms |
| Scoped Dynamic | 🔶 | 173.1 KB | 0.0% | 0.0% | 25.8 KB | 12.4 ms | 5.9 ms | 14.9 ms | 13.4 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 228.1 KB | 0.0% | 79.5% |
| `/en/about` | 227.4 KB | 0.0% | 84.6% |
| `/en/blog` | 227.5 KB | 0.0% | 83.3% |
| `/en/careers` | 227.4 KB | 0.0% | 94.9% |
| `/en/contact` | 227.4 KB | 0.0% | 97.5% |
| `/en/faq` | 227.3 KB | 0.0% | 91.0% |
| `/en/pricing` | 227.5 KB | 0.0% | 96.2% |
| `/en/products` | 227.3 KB | 0.0% | 89.7% |
| `/en/settings` | 227.8 KB | 0.0% | 93.7% |
| `/en/team` | 227.4 KB | 0.0% | 87.2% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 228.1 KB | 0.0% | 79.5% |
| `/fr/about` | 227.4 KB | 0.0% | 84.6% |
| `/fr/blog` | 227.5 KB | 0.0% | 83.3% |
| `/fr/careers` | 227.4 KB | 0.0% | 94.9% |
| `/fr/contact` | 227.4 KB | 0.0% | 97.5% |
| `/fr/faq` | 227.3 KB | 0.0% | 91.0% |
| `/fr/pricing` | 227.5 KB | 0.0% | 96.2% |
| `/fr/products` | 227.3 KB | 0.0% | 89.7% |
| `/fr/settings` | 227.8 KB | 0.0% | 93.7% |
| `/fr/team` | 227.4 KB | 0.0% | 87.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.5 ms | 12.4 ms | 28.8 ms | 9.9 ms |
| `fr` | 12.7 ms | 10.8 ms | 17.7 ms | 3.9 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 11.7 ms | 4.8 ms |
| `fr` | 14.6 ms | 11.5 ms | 4.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 175.6 KB | 58.7% | 81.8% |
| `/en/about` | 174.9 KB | 58.7% | 76.1% |
| `/en/blog` | 175.0 KB | 58.7% | 85.2% |
| `/en/careers` | 175.0 KB | 58.7% | 95.5% |
| `/en/contact` | 175.0 KB | 58.7% | 97.8% |
| `/en/faq` | 174.8 KB | 58.7% | 90.9% |
| `/en/pricing` | 175.1 KB | 58.7% | 96.6% |
| `/en/products` | 174.8 KB | 58.7% | 90.9% |
| `/en/settings` | 175.3 KB | 58.7% | 94.4% |
| `/en/team` | 175.0 KB | 58.7% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 183.1 KB | 38.5% | 85.2% |
| `/fr/about` | 182.4 KB | 38.5% | 88.9% |
| `/fr/blog` | 182.5 KB | 38.5% | 88.0% |
| `/fr/careers` | 182.5 KB | 38.5% | 88.9% |
| `/fr/contact` | 182.5 KB | 38.5% | 98.2% |
| `/fr/faq` | 182.3 KB | 38.5% | 93.5% |
| `/fr/pricing` | 182.6 KB | 38.5% | 76.9% |
| `/fr/products` | 182.3 KB | 38.5% | 92.6% |
| `/fr/settings` | 182.8 KB | 38.5% | 95.4% |
| `/fr/team` | 182.5 KB | 38.5% | 90.7% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.5 ms | 9.8 ms | 34.4 ms | 4.0 ms |
| `fr` | 11.8 ms | 10.1 ms | 14.8 ms | 3.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.1 ms | 19.4 ms | 4.2 ms |
| `fr` | 14.5 ms | 19.0 ms | 4.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 229.7 KB | 0.0% | 79.5% |
| `/en/about` | 229.0 KB | 0.0% | 84.6% |
| `/en/blog` | 229.0 KB | 0.0% | 83.3% |
| `/en/careers` | 229.0 KB | 0.0% | 94.9% |
| `/en/contact` | 229.0 KB | 0.0% | 97.5% |
| `/en/faq` | 228.8 KB | 0.0% | 91.0% |
| `/en/pricing` | 229.1 KB | 0.0% | 96.2% |
| `/en/products` | 228.9 KB | 0.0% | 89.7% |
| `/en/settings` | 229.4 KB | 0.0% | 93.7% |
| `/en/team` | 229.0 KB | 0.0% | 87.2% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 229.7 KB | 0.0% | 79.5% |
| `/fr/about` | 229.0 KB | 0.0% | 84.6% |
| `/fr/blog` | 229.0 KB | 0.0% | 83.3% |
| `/fr/careers` | 229.0 KB | 0.0% | 94.9% |
| `/fr/contact` | 229.0 KB | 0.0% | 97.5% |
| `/fr/faq` | 228.8 KB | 0.0% | 91.0% |
| `/fr/pricing` | 229.1 KB | 0.0% | 96.2% |
| `/fr/products` | 228.9 KB | 0.0% | 89.7% |
| `/fr/settings` | 229.4 KB | 0.0% | 93.7% |
| `/fr/team` | 229.0 KB | 0.0% | 87.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-next-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.1 ms | 13.2 ms | 23.3 ms | 4.4 ms |
| `fr` | 15.7 ms | 12.4 ms | 25.7 ms | 4.7 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.4 ms | 11.2 ms | 4.8 ms |
| `fr` | 12.7 ms | 11.8 ms | 5.0 ms |

</details>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-next-i18next-app/bundle/rollup-visualizer.html)

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
| Static | ✅ | 248.9 KB | 50.0% | 89.9% | 11.6 KB | 30.1 ms | 11.9 ms | 15.0 ms | 7.2 ms |
| Dynamic | ✅ | 163.8 KB | 17.9% | 89.9% | 11.7 KB | 32.8 ms | 5.3 ms | 14.8 ms | 6.5 ms |
| Scoped Static | ✅ | 221.5 KB | 50.0% | 89.9% | 12.5 KB | 17.0 ms | 5.5 ms | 16.0 ms | 9.1 ms |
| Scoped Dynamic | ✅ | 162.5 KB | 0.0% | 89.9% | 11.9 KB | 17.6 ms | 4.5 ms | 19.5 ms | 8.2 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 249.3 KB | 54.7% | 81.6% |
| `/en/about` | 248.7 KB | 54.7% | 88.5% |
| `/en/blog` | 248.8 KB | 54.7% | 85.1% |
| `/en/careers` | 249.0 KB | 54.7% | 87.4% |
| `/en/contact` | 248.8 KB | 54.7% | 98.9% |
| `/en/faq` | 248.7 KB | 54.7% | 88.5% |
| `/en/pricing` | 248.9 KB | 54.5% | 95.5% |
| `/en/products` | 248.7 KB | 54.7% | 90.8% |
| `/en/settings` | 249.1 KB | 54.7% | 94.3% |
| `/en/team` | 248.8 KB | 54.7% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 249.3 KB | 45.3% | 84.8% |
| `/fr/about` | 248.7 KB | 45.3% | 86.7% |
| `/fr/blog` | 248.8 KB | 45.3% | 87.6% |
| `/fr/careers` | 249.0 KB | 45.3% | 87.6% |
| `/fr/contact` | 248.8 KB | 45.3% | 98.1% |
| `/fr/faq` | 248.7 KB | 45.3% | 90.5% |
| `/fr/pricing` | 248.9 KB | 45.0% | 90.6% |
| `/fr/products` | 248.7 KB | 45.3% | 90.5% |
| `/fr/settings` | 249.1 KB | 45.3% | 93.3% |
| `/fr/team` | 248.8 KB | 45.3% | 89.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-international-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 31.1 ms | 26.3 ms | 48.4 ms | 11.6 ms |
| `fr` | 29.0 ms | 22.1 ms | 40.9 ms | 12.1 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.5 ms | 7.2 ms | 0.6 ms |
| `fr` | 14.6 ms | 7.1 ms | 0.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 162.1 KB | 0.0% | 81.6% |
| `/en/about` | 161.5 KB | 0.0% | 88.5% |
| `/en/blog` | 161.6 KB | 0.0% | 85.1% |
| `/en/careers` | 161.8 KB | 0.0% | 87.4% |
| `/en/contact` | 161.6 KB | 0.0% | 98.9% |
| `/en/faq` | 161.5 KB | 0.0% | 88.5% |
| `/en/pricing` | 161.7 KB | 0.0% | 95.5% |
| `/en/products` | 161.5 KB | 0.0% | 90.8% |
| `/en/settings` | 161.9 KB | 0.0% | 94.3% |
| `/en/team` | 161.6 KB | 0.0% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 166.4 KB | 35.8% | 84.8% |
| `/fr/about` | 165.8 KB | 35.8% | 86.7% |
| `/fr/blog` | 165.9 KB | 35.8% | 87.6% |
| `/fr/careers` | 166.1 KB | 35.8% | 87.6% |
| `/fr/contact` | 165.9 KB | 35.8% | 98.1% |
| `/fr/faq` | 165.8 KB | 35.8% | 90.5% |
| `/fr/pricing` | 166.1 KB | 35.6% | 90.6% |
| `/fr/products` | 165.9 KB | 35.8% | 90.5% |
| `/fr/settings` | 166.2 KB | 35.8% | 93.3% |
| `/fr/team` | 165.9 KB | 35.8% | 89.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-international-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 44.3 ms | 31.7 ms | 75.0 ms | 9.4 ms |
| `fr` | 21.4 ms | 15.6 ms | 33.2 ms | 1.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.1 ms | 6.5 ms | 1.1 ms |
| `fr` | 14.5 ms | 6.4 ms | 0.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 222.0 KB | 54.2% | 82.2% |
| `/en/about` | 221.4 KB | 54.2% | 88.9% |
| `/en/blog` | 221.5 KB | 54.2% | 85.6% |
| `/en/careers` | 221.5 KB | 54.2% | 93.3% |
| `/en/contact` | 221.4 KB | 54.2% | 98.9% |
| `/en/faq` | 221.3 KB | 54.2% | 80.0% |
| `/en/pricing` | 221.6 KB | 53.9% | 95.6% |
| `/en/products` | 221.4 KB | 54.2% | 91.1% |
| `/en/settings` | 221.8 KB | 54.2% | 94.4% |
| `/en/team` | 221.4 KB | 54.2% | 88.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 222.0 KB | 45.8% | 85.0% |
| `/fr/about` | 221.4 KB | 45.8% | 86.9% |
| `/fr/blog` | 221.5 KB | 45.8% | 87.9% |
| `/fr/careers` | 221.5 KB | 45.8% | 91.6% |
| `/fr/contact` | 221.4 KB | 45.8% | 98.1% |
| `/fr/faq` | 221.3 KB | 45.8% | 84.1% |
| `/fr/pricing` | 221.6 KB | 45.6% | 91.7% |
| `/fr/products` | 221.4 KB | 45.8% | 90.7% |
| `/fr/settings` | 221.8 KB | 45.8% | 93.5% |
| `/fr/team` | 221.4 KB | 45.8% | 89.7% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-next-international-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.4 ms | 13.4 ms | 41.4 ms | 5.3 ms |
| `fr` | 14.5 ms | 12.1 ms | 18.2 ms | 5.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.5 ms | 10.8 ms | 2.0 ms |
| `fr` | 14.5 ms | 7.4 ms | 0.6 ms |

</details>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-next-international-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.8 ms | 12.2 ms | 32.5 ms | 4.1 ms |
| `fr` | 15.4 ms | 13.1 ms | 20.2 ms | 5.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 23.1 ms | 9.6 ms | 1.3 ms |
| `fr` | 15.8 ms | 6.9 ms | 0.9 ms |

</details>

---

## next-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.9.1 | 12.8 KB | 51.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 163.5 KB | 4.2% | 89.8% | 20.5 KB | 15.0 ms | 4.3 ms | 16.2 ms | 10.1 ms |
| Dynamic | 🔶 | 163.4 KB | 9.7% | 89.9% | 20.5 KB | 11.9 ms | 5.2 ms | 13.9 ms | 9.4 ms |
| Scoped Static | 🔶 | 163.5 KB | 0.0% | 0.0% | 21.8 KB | 14.2 ms | 3.6 ms | 22.8 ms | 15.2 ms |
| Scoped Dynamic | 🔶 | 163.5 KB | 0.0% | 0.0% | 21.5 KB | 17.0 ms | 3.6 ms | 19.4 ms | 19.5 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 164.0 KB | 0.0% | 82.1% |
| `/en/about` | 163.3 KB | 0.0% | 88.1% |
| `/en/blog` | 163.4 KB | 0.0% | 84.5% |
| `/en/careers` | 163.6 KB | 0.0% | 87.1% |
| `/en/contact` | 163.3 KB | 0.0% | 98.8% |
| `/en/faq` | 163.3 KB | 0.0% | 88.1% |
| `/en/pricing` | 163.5 KB | 0.0% | 95.3% |
| `/en/products` | 163.3 KB | 0.0% | 90.5% |
| `/en/settings` | 163.7 KB | 0.0% | 94.0% |
| `/en/team` | 163.3 KB | 0.0% | 89.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 164.0 KB | 8.3% | 83.7% |
| `/fr/about` | 163.3 KB | 8.3% | 89.8% |
| `/fr/blog` | 163.4 KB | 8.3% | 86.7% |
| `/fr/careers` | 163.6 KB | 8.3% | 86.9% |
| `/fr/contact` | 163.3 KB | 8.3% | 99.0% |
| `/fr/faq` | 163.3 KB | 8.3% | 89.8% |
| `/fr/pricing` | 163.5 KB | 8.2% | 89.9% |
| `/fr/products` | 163.3 KB | 8.3% | 89.8% |
| `/fr/settings` | 163.7 KB | 8.3% | 92.9% |
| `/fr/team` | 163.3 KB | 8.3% | 89.8% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.2 ms | 10.3 ms | 32.6 ms | 5.0 ms |
| `fr` | 13.7 ms | 11.2 ms | 17.1 ms | 3.6 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.3 ms | 9.5 ms | 3.5 ms |
| `fr` | 16.1 ms | 10.7 ms | 4.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 164.0 KB | 0.0% | 81.5% |
| `/en/about` | 163.2 KB | 0.0% | 87.7% |
| `/en/blog` | 163.4 KB | 0.0% | 84.0% |
| `/en/careers` | 163.4 KB | 0.0% | 91.4% |
| `/en/contact` | 163.3 KB | 0.0% | 98.8% |
| `/en/faq` | 163.3 KB | 0.0% | 87.7% |
| `/en/pricing` | 163.5 KB | 0.0% | 95.1% |
| `/en/products` | 163.3 KB | 0.0% | 90.1% |
| `/en/settings` | 163.7 KB | 0.0% | 93.8% |
| `/en/team` | 163.3 KB | 0.0% | 88.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 164.0 KB | 19.4% | 83.3% |
| `/fr/about` | 163.2 KB | 19.4% | 89.6% |
| `/fr/blog` | 163.4 KB | 19.4% | 86.5% |
| `/fr/careers` | 163.4 KB | 19.4% | 90.6% |
| `/fr/contact` | 163.3 KB | 19.4% | 97.9% |
| `/fr/faq` | 163.3 KB | 19.4% | 89.6% |
| `/fr/pricing` | 163.5 KB | 19.1% | 89.7% |
| `/fr/products` | 163.3 KB | 19.4% | 89.6% |
| `/fr/settings` | 163.7 KB | 19.4% | 92.7% |
| `/fr/team` | 163.3 KB | 19.4% | 89.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 13.2 ms | 9.7 ms | 23.1 ms | 6.8 ms |
| `fr` | 10.6 ms | 9.8 ms | 12.5 ms | 3.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.3 ms | 9.6 ms | 4.4 ms |
| `fr` | 13.6 ms | 9.2 ms | 4.1 ms |

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-next-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 14.5 ms | 10.8 ms | 21.8 ms | 3.9 ms |
| `fr` | 14.0 ms | 10.6 ms | 21.0 ms | 3.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 23.9 ms | 17.3 ms | 8.3 ms |
| `fr` | 21.7 ms | 13.2 ms | 4.9 ms |

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-next-intl-app/bundle/rollup-visualizer.html)

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
| Static | ✅ | 152.1 KB | 0.0% | 0.0% | 7.2 KB | 13.2 ms | 5.2 ms | 16.8 ms | 11.0 ms |
| Dynamic | 🔶 | 152.1 KB | 0.0% | 0.0% | 12.7 KB | 11.9 ms | 7.4 ms | 16.0 ms | 12.1 ms |
| Scoped Static | ✅ | 152.1 KB | 0.0% | 0.0% | 7.2 KB | 13.2 ms | 5.2 ms | 16.8 ms | 11.0 ms |
| Scoped Dynamic | 🔶 | 152.1 KB | 0.0% | 0.0% | 12.7 KB | 11.9 ms | 7.4 ms | 16.0 ms | 12.1 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 152.1 KB | 0.0% | 0.0% |
| `/en/about` | 152.1 KB | 0.0% | 0.0% |
| `/en/blog` | 152.1 KB | 0.0% | 0.0% |
| `/en/careers` | 152.1 KB | 0.0% | 0.0% |
| `/en/contact` | 152.1 KB | 0.0% | 0.0% |
| `/en/faq` | 152.1 KB | 0.0% | 0.0% |
| `/en/pricing` | 152.1 KB | 0.0% | 0.0% |
| `/en/products` | 152.1 KB | 0.0% | 0.0% |
| `/en/settings` | 152.1 KB | 0.0% | 0.0% |
| `/en/team` | 152.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 152.1 KB | 0.0% | 0.0% |
| `/fr/about` | 152.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 152.1 KB | 0.0% | 0.0% |
| `/fr/careers` | 152.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 152.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 152.1 KB | 0.0% | 0.0% |
| `/fr/pricing` | 152.1 KB | 0.0% | 0.0% |
| `/fr/products` | 152.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 152.1 KB | 0.0% | 0.0% |
| `/fr/team` | 152.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 13.6 ms | 10.8 ms | 21.6 ms | 5.4 ms |
| `fr` | 12.7 ms | 11.5 ms | 16.3 ms | 5.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.0 ms | 14.3 ms | 8.1 ms |
| `fr` | 16.5 ms | 7.8 ms | 2.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 152.1 KB | 0.0% | 0.0% |
| `/en/about` | 152.1 KB | 0.0% | 0.0% |
| `/en/blog` | 152.1 KB | 0.0% | 0.0% |
| `/en/careers` | 152.1 KB | 0.0% | 0.0% |
| `/en/contact` | 152.1 KB | 0.0% | 0.0% |
| `/en/faq` | 152.1 KB | 0.0% | 0.0% |
| `/en/pricing` | 152.1 KB | 0.0% | 0.0% |
| `/en/products` | 152.1 KB | 0.0% | 0.0% |
| `/en/settings` | 152.1 KB | 0.0% | 0.0% |
| `/en/team` | 152.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 152.1 KB | 0.0% | 0.0% |
| `/fr/about` | 152.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 152.1 KB | 0.0% | 0.0% |
| `/fr/careers` | 152.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 152.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 152.1 KB | 0.0% | 0.0% |
| `/fr/pricing` | 152.1 KB | 0.0% | 0.0% |
| `/fr/products` | 152.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 152.1 KB | 0.0% | 0.0% |
| `/fr/team` | 152.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 12.9 ms | 10.1 ms | 19.1 ms | 10.2 ms |
| `fr` | 10.8 ms | 9.0 ms | 13.7 ms | 4.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 13.2 ms | 7.2 ms |
| `fr` | 16.1 ms | 10.9 ms | 5.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 152.1 KB | 0.0% | 0.0% |
| `/en/about` | 152.1 KB | 0.0% | 0.0% |
| `/en/blog` | 152.1 KB | 0.0% | 0.0% |
| `/en/careers` | 152.1 KB | 0.0% | 0.0% |
| `/en/contact` | 152.1 KB | 0.0% | 0.0% |
| `/en/faq` | 152.1 KB | 0.0% | 0.0% |
| `/en/pricing` | 152.1 KB | 0.0% | 0.0% |
| `/en/products` | 152.1 KB | 0.0% | 0.0% |
| `/en/settings` | 152.1 KB | 0.0% | 0.0% |
| `/en/team` | 152.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 152.1 KB | 0.0% | 0.0% |
| `/fr/about` | 152.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 152.1 KB | 0.0% | 0.0% |
| `/fr/careers` | 152.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 152.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 152.1 KB | 0.0% | 0.0% |
| `/fr/pricing` | 152.1 KB | 0.0% | 0.0% |
| `/fr/products` | 152.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 152.1 KB | 0.0% | 0.0% |
| `/fr/team` | 152.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 13.6 ms | 10.8 ms | 21.6 ms | 5.4 ms |
| `fr` | 12.7 ms | 11.5 ms | 16.3 ms | 5.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.0 ms | 14.3 ms | 8.1 ms |
| `fr` | 16.5 ms | 7.8 ms | 2.1 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 152.1 KB | 0.0% | 0.0% |
| `/en/about` | 152.1 KB | 0.0% | 0.0% |
| `/en/blog` | 152.1 KB | 0.0% | 0.0% |
| `/en/careers` | 152.1 KB | 0.0% | 0.0% |
| `/en/contact` | 152.1 KB | 0.0% | 0.0% |
| `/en/faq` | 152.1 KB | 0.0% | 0.0% |
| `/en/pricing` | 152.1 KB | 0.0% | 0.0% |
| `/en/products` | 152.1 KB | 0.0% | 0.0% |
| `/en/settings` | 152.1 KB | 0.0% | 0.0% |
| `/en/team` | 152.1 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 152.1 KB | 0.0% | 0.0% |
| `/fr/about` | 152.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 152.1 KB | 0.0% | 0.0% |
| `/fr/careers` | 152.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 152.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 152.1 KB | 0.0% | 0.0% |
| `/fr/pricing` | 152.1 KB | 0.0% | 0.0% |
| `/fr/products` | 152.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 152.1 KB | 0.0% | 0.0% |
| `/fr/team` | 152.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 12.9 ms | 10.1 ms | 19.1 ms | 10.2 ms |
| `fr` | 10.8 ms | 9.0 ms | 13.7 ms | 4.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 13.2 ms | 7.2 ms |
| `fr` | 16.1 ms | 10.9 ms | 5.2 ms |

</details>

---

## next-translate

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 3.1.2 | 2.4 KB | 6.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 153.0 KB | 0.0% | 89.8% | 10.0 KB | 14.0 ms | 4.0 ms | 17.1 ms | 10.8 ms |
| Dynamic | 🔶 | 153.0 KB | 0.0% | 89.8% | 10.2 KB | 20.3 ms | 3.8 ms | 18.9 ms | 12.6 ms |
| Scoped Static | 🔶 | 153.0 KB | 0.0% | 89.8% | 11.1 KB | 18.2 ms | 4.3 ms | 25.9 ms | 15.1 ms |
| Scoped Dynamic | 🔶 | 153.0 KB | 0.0% | 0.0% | 11.3 KB | 13.5 ms | 4.0 ms | 17.3 ms | 13.3 ms |

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-translate-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 14.8 ms | 11.6 ms | 21.9 ms | 4.4 ms |
| `fr` | 13.1 ms | 10.0 ms | 17.2 ms | 3.7 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 11.1 ms | 4.3 ms |
| `fr` | 16.2 ms | 10.5 ms | 1.8 ms |

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-translate-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 26.8 ms | 12.1 ms | 75.4 ms | 4.1 ms |
| `fr` | 13.8 ms | 11.6 ms | 16.4 ms | 3.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.1 ms | 13.5 ms | 5.1 ms |
| `fr` | 17.6 ms | 11.7 ms | 4.3 ms |

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-next-translate-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.8 ms | 14.6 ms | 28.6 ms | 4.5 ms |
| `fr` | 17.6 ms | 13.9 ms | 23.1 ms | 4.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 25.9 ms | 16.0 ms | 6.8 ms |
| `fr` | 25.9 ms | 14.3 ms | 4.2 ms |

</details>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-next-translate-app/bundle/rollup-visualizer.html)

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
| Static | ✅ | 228.9 KB | 0.0% | 89.8% | 5.4 KB | 16.9 ms | 9.1 ms | 15.0 ms | 16.4 ms |
| Dynamic | ✅ | 228.9 KB | 0.0% | 89.8% | 5.4 KB | 16.9 ms | 9.1 ms | 15.0 ms | 16.4 ms |
| Scoped Static | ✅ | 228.9 KB | 0.0% | 89.8% | 5.4 KB | 16.9 ms | 9.1 ms | 15.0 ms | 16.4 ms |
| Scoped Dynamic | ✅ | 228.9 KB | 0.0% | 89.8% | 5.4 KB | 16.9 ms | 9.1 ms | 15.0 ms | 16.4 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-paraglide-next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 12.4 ms | 26.0 ms | 12.0 ms |
| `fr` | 17.9 ms | 11.2 ms | 36.9 ms | 6.1 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 16.6 ms | 5.4 ms |
| `fr` | 14.3 ms | 16.2 ms | 5.3 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-paraglide-next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 12.4 ms | 26.0 ms | 12.0 ms |
| `fr` | 17.9 ms | 11.2 ms | 36.9 ms | 6.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 16.6 ms | 5.4 ms |
| `fr` | 14.3 ms | 16.2 ms | 5.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-paraglide-next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 12.4 ms | 26.0 ms | 12.0 ms |
| `fr` | 17.9 ms | 11.2 ms | 36.9 ms | 6.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 16.6 ms | 5.4 ms |
| `fr` | 14.3 ms | 16.2 ms | 5.3 ms |

</details>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-paraglide-next-app/bundle/rollup-visualizer.html)

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
| Static | ✅ | 291.2 KB | 61.2% | 90.0% | 24.1 KB | 51.5 ms | 5.0 ms | 14.7 ms | 9.7 ms |
| Dynamic | ✅ | 291.2 KB | 61.2% | 90.0% | 24.1 KB | 51.5 ms | 5.0 ms | 14.7 ms | 9.7 ms |
| Scoped Static | 🔶 | 259.0 KB | 39.4% | 90.0% | 27.4 KB | 13.0 ms | 4.0 ms | 15.0 ms | 10.8 ms |
| Scoped Dynamic | 🔶 | 150.7 KB | 5.1% | 89.9% | 31.0 KB | 2.4 ms | 1.0 ms | 14.7 ms | 11.7 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 292.4 KB | 34.5% | 83.5% |
| `/en/about` | 291.4 KB | 34.5% | 89.0% |
| `/en/blog` | 291.2 KB | 34.5% | 85.7% |
| `/en/careers` | 291.3 KB | 34.5% | 87.9% |
| `/en/contact` | 290.8 KB | 34.5% | 97.8% |
| `/en/faq` | 291.4 KB | 34.5% | 89.0% |
| `/en/pricing` | 290.9 KB | 34.5% | 89.0% |
| `/en/products` | 290.8 KB | 34.5% | 94.5% |
| `/en/settings` | 291.1 KB | 34.5% | 94.5% |
| `/en/team` | 291.0 KB | 34.5% | 89.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 292.4 KB | 87.9% | 100.0% |
| `/fr/about` | 291.4 KB | 87.9% | 100.0% |
| `/fr/blog` | 291.2 KB | 87.9% | 100.0% |
| `/fr/careers` | 291.3 KB | 87.9% | 100.0% |
| `/fr/contact` | 290.8 KB | 87.9% | 100.0% |
| `/fr/faq` | 291.4 KB | 87.9% | 0.0% |
| `/fr/pricing` | 290.9 KB | 87.9% | 100.0% |
| `/fr/products` | 290.8 KB | 87.9% | 100.0% |
| `/fr/settings` | 291.1 KB | 87.9% | 100.0% |
| `/fr/team` | 291.0 KB | 87.9% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 29.8 ms | 18.3 ms | 49.3 ms | 5.0 ms |
| `fr` | 73.2 ms | 45.6 ms | 143.8 ms | 5.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.2 ms | 10.6 ms | 4.0 ms |
| `fr` | 13.2 ms | 8.8 ms | 1.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 292.4 KB | 34.5% | 83.5% |
| `/en/about` | 291.4 KB | 34.5% | 89.0% |
| `/en/blog` | 291.2 KB | 34.5% | 85.7% |
| `/en/careers` | 291.3 KB | 34.5% | 87.9% |
| `/en/contact` | 290.8 KB | 34.5% | 97.8% |
| `/en/faq` | 291.4 KB | 34.5% | 89.0% |
| `/en/pricing` | 290.9 KB | 34.5% | 89.0% |
| `/en/products` | 290.8 KB | 34.5% | 94.5% |
| `/en/settings` | 291.1 KB | 34.5% | 94.5% |
| `/en/team` | 291.0 KB | 34.5% | 89.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 292.4 KB | 87.9% | 100.0% |
| `/fr/about` | 291.4 KB | 87.9% | 100.0% |
| `/fr/blog` | 291.2 KB | 87.9% | 100.0% |
| `/fr/careers` | 291.3 KB | 87.9% | 100.0% |
| `/fr/contact` | 290.8 KB | 87.9% | 100.0% |
| `/fr/faq` | 291.4 KB | 87.9% | 0.0% |
| `/fr/pricing` | 290.9 KB | 87.9% | 100.0% |
| `/fr/products` | 290.8 KB | 87.9% | 100.0% |
| `/fr/settings` | 291.1 KB | 87.9% | 100.0% |
| `/fr/team` | 291.0 KB | 87.9% | 100.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 29.8 ms | 18.3 ms | 49.3 ms | 5.0 ms |
| `fr` | 73.2 ms | 45.6 ms | 143.8 ms | 5.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.2 ms | 10.6 ms | 4.0 ms |
| `fr` | 13.2 ms | 8.8 ms | 1.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 260.3 KB | 32.9% | 83.5% |
| `/en/about` | 259.3 KB | 32.9% | 89.0% |
| `/en/blog` | 258.9 KB | 32.9% | 85.7% |
| `/en/careers` | 259.0 KB | 32.9% | 87.9% |
| `/en/contact` | 258.5 KB | 32.9% | 97.8% |
| `/en/faq` | 259.2 KB | 32.9% | 89.0% |
| `/en/pricing` | 258.7 KB | 32.9% | 89.0% |
| `/en/products` | 258.6 KB | 32.9% | 94.5% |
| `/en/settings` | 258.9 KB | 32.9% | 94.5% |
| `/en/team` | 258.7 KB | 32.9% | 89.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 260.3 KB | 45.8% | 85.1% |
| `/fr/about` | 259.3 KB | 45.8% | 87.1% |
| `/fr/blog` | 258.9 KB | 45.8% | 87.1% |
| `/fr/careers` | 259.0 KB | 45.8% | 89.1% |
| `/fr/contact` | 258.5 KB | 45.8% | 98.0% |
| `/fr/faq` | 259.2 KB | 45.8% | 90.1% |
| `/fr/pricing` | 258.7 KB | 45.8% | 87.1% |
| `/fr/products` | 258.6 KB | 45.8% | 92.1% |
| `/fr/settings` | 258.9 KB | 45.8% | 94.1% |
| `/fr/team` | 258.7 KB | 45.8% | 90.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 13.9 ms | 10.7 ms | 18.8 ms | 4.4 ms |
| `fr` | 12.2 ms | 9.0 ms | 17.8 ms | 3.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.3 ms | 9.7 ms | 2.6 ms |
| `fr` | 14.6 ms | 11.8 ms | 5.3 ms |

</details>

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

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-tolgee-app/bundle/rollup-visualizer.html)

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
| With page bundle data | 36 |
| With component data | 41 |
| With reactivity data | 41 |
| With rendering data | 41 |
