# Next.js — i18n Benchmark Results

_Generated: 2026-09-09_

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

- [@intlayer/next-i18next](#intlayer-next-i18next)
- [@intlayer/next-intl](#intlayer-next-intl)
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

## @intlayer/next-i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.1 | 24.4 KB | 92.5 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 152.9 KB | 0.0% | 0.0% | 24.7 KB | 14.4 ms | 3.6 ms | 18.2 ms | 17.7 ms |
| Dynamic | 🔶 | 152.9 KB | 0.0% | 0.0% | 24.7 KB | 14.8 ms | 3.6 ms | 15.6 ms | 13.4 ms |
| Scoped Static | ✅ | 152.9 KB | 0.0% | 0.0% | 24.7 KB | 14.4 ms | 3.6 ms | 18.2 ms | 17.7 ms |
| Scoped Dynamic | 🔶 | 152.9 KB | 0.0% | 0.0% | 24.7 KB | 14.8 ms | 3.6 ms | 15.6 ms | 13.4 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 153.5 KB | 0.0% | 0.0% |
| `/en/about` | 152.8 KB | 0.0% | 0.0% |
| `/en/blog` | 152.9 KB | 0.0% | 0.0% |
| `/en/careers` | 152.8 KB | 0.0% | 0.0% |
| `/en/contact` | 152.9 KB | 0.0% | 0.0% |
| `/en/faq` | 152.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 153.0 KB | 0.0% | 0.0% |
| `/en/products` | 152.7 KB | 0.0% | 0.0% |
| `/en/settings` | 153.2 KB | 0.0% | 0.0% |
| `/en/team` | 152.8 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.5 KB | 0.0% | 0.0% |
| `/fr/about` | 152.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 152.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 152.8 KB | 0.0% | 0.0% |
| `/fr/contact` | 152.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 152.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 153.0 KB | 0.0% | 0.0% |
| `/fr/products` | 152.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 153.2 KB | 0.0% | 0.0% |
| `/fr/team` | 152.8 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-intlayer-compat-next-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.1 ms | 12.2 ms | 29.8 ms | 3.7 ms |
| `fr` | 12.7 ms | 10.4 ms | 17.1 ms | 3.5 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.7 ms | 18.1 ms | 9.8 ms |
| `fr` | 19.7 ms | 17.2 ms | 6.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 153.5 KB | 0.0% | 0.0% |
| `/en/about` | 152.8 KB | 0.0% | 0.0% |
| `/en/blog` | 152.9 KB | 0.0% | 0.0% |
| `/en/careers` | 152.8 KB | 0.0% | 0.0% |
| `/en/contact` | 152.9 KB | 0.0% | 0.0% |
| `/en/faq` | 152.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 153.0 KB | 0.0% | 0.0% |
| `/en/products` | 152.6 KB | 0.0% | 0.0% |
| `/en/settings` | 153.2 KB | 0.0% | 0.0% |
| `/en/team` | 152.8 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.5 KB | 0.0% | 0.0% |
| `/fr/about` | 152.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 152.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 152.8 KB | 0.0% | 0.0% |
| `/fr/contact` | 152.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 152.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 153.0 KB | 0.0% | 0.0% |
| `/fr/products` | 152.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 153.2 KB | 0.0% | 0.0% |
| `/fr/team` | 152.8 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-intlayer-compat-next-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.4 ms | 12.6 ms | 25.3 ms | 3.7 ms |
| `fr` | 14.1 ms | 11.3 ms | 17.6 ms | 3.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 13.4 ms | 6.1 ms |
| `fr` | 15.3 ms | 13.3 ms | 6.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 153.5 KB | 0.0% | 0.0% |
| `/en/about` | 152.8 KB | 0.0% | 0.0% |
| `/en/blog` | 152.9 KB | 0.0% | 0.0% |
| `/en/careers` | 152.8 KB | 0.0% | 0.0% |
| `/en/contact` | 152.9 KB | 0.0% | 0.0% |
| `/en/faq` | 152.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 153.0 KB | 0.0% | 0.0% |
| `/en/products` | 152.7 KB | 0.0% | 0.0% |
| `/en/settings` | 153.2 KB | 0.0% | 0.0% |
| `/en/team` | 152.8 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.5 KB | 0.0% | 0.0% |
| `/fr/about` | 152.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 152.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 152.8 KB | 0.0% | 0.0% |
| `/fr/contact` | 152.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 152.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 153.0 KB | 0.0% | 0.0% |
| `/fr/products` | 152.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 153.2 KB | 0.0% | 0.0% |
| `/fr/team` | 152.8 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-intlayer-compat-next-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.1 ms | 12.2 ms | 29.8 ms | 3.7 ms |
| `fr` | 12.7 ms | 10.4 ms | 17.1 ms | 3.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.7 ms | 18.1 ms | 9.8 ms |
| `fr` | 19.7 ms | 17.2 ms | 6.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 153.5 KB | 0.0% | 0.0% |
| `/en/about` | 152.8 KB | 0.0% | 0.0% |
| `/en/blog` | 152.9 KB | 0.0% | 0.0% |
| `/en/careers` | 152.8 KB | 0.0% | 0.0% |
| `/en/contact` | 152.9 KB | 0.0% | 0.0% |
| `/en/faq` | 152.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 153.0 KB | 0.0% | 0.0% |
| `/en/products` | 152.6 KB | 0.0% | 0.0% |
| `/en/settings` | 153.2 KB | 0.0% | 0.0% |
| `/en/team` | 152.8 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.5 KB | 0.0% | 0.0% |
| `/fr/about` | 152.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 152.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 152.8 KB | 0.0% | 0.0% |
| `/fr/contact` | 152.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 152.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 153.0 KB | 0.0% | 0.0% |
| `/fr/products` | 152.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 153.2 KB | 0.0% | 0.0% |
| `/fr/team` | 152.8 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-intlayer-compat-next-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.4 ms | 12.6 ms | 25.3 ms | 3.7 ms |
| `fr` | 14.1 ms | 11.3 ms | 17.6 ms | 3.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.0 ms | 13.4 ms | 6.1 ms |
| `fr` | 15.3 ms | 13.3 ms | 6.1 ms |

</details>

---

## @intlayer/next-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.1 | 34.5 KB | 123.1 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 149.7 KB | 0.0% | 0.0% | 34.5 KB | 18.0 ms | 3.4 ms | 16.7 ms | 16.9 ms |
| Dynamic | 🔶 | 150.8 KB | 0.0% | 0.0% | 34.5 KB | 13.8 ms | 3.6 ms | 15.1 ms | 13.5 ms |
| Scoped Static | ✅ | 149.7 KB | 0.0% | 0.0% | 34.5 KB | 18.0 ms | 3.4 ms | 16.7 ms | 16.9 ms |
| Scoped Dynamic | 🔶 | 150.8 KB | 0.0% | 0.0% | 34.5 KB | 13.8 ms | 3.6 ms | 15.1 ms | 13.5 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 149.9 KB | 0.0% | 0.0% |
| `/en/about` | 149.7 KB | 0.0% | 0.0% |
| `/en/blog` | 149.5 KB | 0.0% | 0.0% |
| `/en/careers` | 149.5 KB | 0.0% | 0.0% |
| `/en/contact` | 150.0 KB | 0.0% | 0.0% |
| `/en/faq` | 149.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 149.5 KB | 0.0% | 0.0% |
| `/en/products` | 149.5 KB | 0.0% | 0.0% |
| `/en/settings` | 150.4 KB | 0.0% | 0.0% |
| `/en/team` | 149.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 149.9 KB | 0.0% | 0.0% |
| `/fr/about` | 149.7 KB | 0.0% | 0.0% |
| `/fr/blog` | 149.5 KB | 0.0% | 0.0% |
| `/fr/careers` | 149.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 150.0 KB | 0.0% | 0.0% |
| `/fr/faq` | 149.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 149.5 KB | 0.0% | 0.0% |
| `/fr/products` | 149.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 150.4 KB | 0.0% | 0.0% |
| `/fr/team` | 149.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-intlayer-compat-next-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.0 ms | 14.1 ms | 31.0 ms | 3.3 ms |
| `fr` | 16.9 ms | 13.8 ms | 21.1 ms | 3.5 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.3 ms | 17.9 ms | 6.2 ms |
| `fr` | 16.0 ms | 16.0 ms | 6.3 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 151.4 KB | 0.0% | 0.0% |
| `/en/about` | 150.6 KB | 0.0% | 0.0% |
| `/en/blog` | 150.7 KB | 0.0% | 0.0% |
| `/en/careers` | 150.8 KB | 0.0% | 0.0% |
| `/en/contact` | 150.7 KB | 0.0% | 0.0% |
| `/en/faq` | 150.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 150.8 KB | 0.0% | 0.0% |
| `/en/products` | 150.7 KB | 0.0% | 0.0% |
| `/en/settings` | 151.0 KB | 0.0% | 0.0% |
| `/en/team` | 150.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 151.4 KB | 0.0% | 0.0% |
| `/fr/about` | 150.6 KB | 0.0% | 0.0% |
| `/fr/blog` | 150.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 150.8 KB | 0.0% | 0.0% |
| `/fr/contact` | 150.7 KB | 0.0% | 0.0% |
| `/fr/faq` | 150.6 KB | 0.0% | 0.0% |
| `/fr/pricing` | 150.8 KB | 0.0% | 0.0% |
| `/fr/products` | 150.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 151.0 KB | 0.0% | 0.0% |
| `/fr/team` | 150.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-intlayer-compat-next-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 14.8 ms | 10.6 ms | 26.1 ms | 3.6 ms |
| `fr` | 12.7 ms | 10.7 ms | 16.5 ms | 3.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.3 ms | 13.5 ms | 6.9 ms |
| `fr` | 14.9 ms | 13.6 ms | 7.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 149.9 KB | 0.0% | 0.0% |
| `/en/about` | 149.7 KB | 0.0% | 0.0% |
| `/en/blog` | 149.5 KB | 0.0% | 0.0% |
| `/en/careers` | 149.5 KB | 0.0% | 0.0% |
| `/en/contact` | 150.0 KB | 0.0% | 0.0% |
| `/en/faq` | 149.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 149.5 KB | 0.0% | 0.0% |
| `/en/products` | 149.5 KB | 0.0% | 0.0% |
| `/en/settings` | 150.4 KB | 0.0% | 0.0% |
| `/en/team` | 149.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 149.9 KB | 0.0% | 0.0% |
| `/fr/about` | 149.7 KB | 0.0% | 0.0% |
| `/fr/blog` | 149.5 KB | 0.0% | 0.0% |
| `/fr/careers` | 149.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 150.0 KB | 0.0% | 0.0% |
| `/fr/faq` | 149.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 149.5 KB | 0.0% | 0.0% |
| `/fr/products` | 149.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 150.4 KB | 0.0% | 0.0% |
| `/fr/team` | 149.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-intlayer-compat-next-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.0 ms | 14.1 ms | 31.0 ms | 3.3 ms |
| `fr` | 16.9 ms | 13.8 ms | 21.1 ms | 3.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.3 ms | 17.9 ms | 6.2 ms |
| `fr` | 16.0 ms | 16.0 ms | 6.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 151.4 KB | 0.0% | 0.0% |
| `/en/about` | 150.6 KB | 0.0% | 0.0% |
| `/en/blog` | 150.7 KB | 0.0% | 0.0% |
| `/en/careers` | 150.8 KB | 0.0% | 0.0% |
| `/en/contact` | 150.7 KB | 0.0% | 0.0% |
| `/en/faq` | 150.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 150.8 KB | 0.0% | 0.0% |
| `/en/products` | 150.7 KB | 0.0% | 0.0% |
| `/en/settings` | 151.0 KB | 0.0% | 0.0% |
| `/en/team` | 150.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 151.4 KB | 0.0% | 0.0% |
| `/fr/about` | 150.6 KB | 0.0% | 0.0% |
| `/fr/blog` | 150.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 150.8 KB | 0.0% | 0.0% |
| `/fr/contact` | 150.7 KB | 0.0% | 0.0% |
| `/fr/faq` | 150.6 KB | 0.0% | 0.0% |
| `/fr/pricing` | 150.8 KB | 0.0% | 0.0% |
| `/fr/products` | 150.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 151.0 KB | 0.0% | 0.0% |
| `/fr/team` | 150.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-intlayer-compat-next-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 14.8 ms | 10.6 ms | 26.1 ms | 3.6 ms |
| `fr` | 12.7 ms | 10.7 ms | 16.5 ms | 3.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.3 ms | 13.5 ms | 6.9 ms |
| `fr` | 14.9 ms | 13.6 ms | 7.0 ms |

</details>

---

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 141.0 KB | 0.0% | 0.0% | 0.9 KB | 13.4 ms | 3.8 ms | 15.2 ms | 11.8 ms |
| Dynamic | ✅ | 141.0 KB | 0.0% | 0.0% | 0.9 KB | 13.4 ms | 3.8 ms | 15.2 ms | 11.8 ms |
| Scoped Static | ✅ | 141.0 KB | 0.0% | 0.0% | 0.9 KB | 13.4 ms | 3.8 ms | 15.2 ms | 11.8 ms |
| Scoped Dynamic | ✅ | 141.0 KB | 0.0% | 0.0% | 0.9 KB | 13.4 ms | 3.8 ms | 15.2 ms | 11.8 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 140.7 KB | 0.0% | 0.0% |
| `/en/about` | 142.1 KB | 0.0% | 0.0% |
| `/en/blog` | 140.7 KB | 0.0% | 0.0% |
| `/en/careers` | 140.7 KB | 0.0% | 0.0% |
| `/en/contact` | 142.3 KB | 0.0% | 0.0% |
| `/en/faq` | 140.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 140.7 KB | 0.0% | 0.0% |
| `/en/products` | 140.7 KB | 0.0% | 0.0% |
| `/en/settings` | 140.7 KB | 0.0% | 0.0% |
| `/en/team` | 140.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 140.7 KB | 0.0% | 0.0% |
| `/fr/about` | 142.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 140.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 140.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 142.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 140.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 140.7 KB | 0.0% | 0.0% |
| `/fr/products` | 140.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 140.7 KB | 0.0% | 0.0% |
| `/fr/team` | 140.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 14.5 ms | 12.9 ms | 18.8 ms | 3.7 ms |
| `fr` | 12.3 ms | 11.6 ms | 13.2 ms | 3.8 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 11.8 ms | 5.6 ms |
| `fr` | 14.7 ms | 11.8 ms | 5.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 140.7 KB | 0.0% | 0.0% |
| `/en/about` | 142.1 KB | 0.0% | 0.0% |
| `/en/blog` | 140.7 KB | 0.0% | 0.0% |
| `/en/careers` | 140.7 KB | 0.0% | 0.0% |
| `/en/contact` | 142.3 KB | 0.0% | 0.0% |
| `/en/faq` | 140.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 140.7 KB | 0.0% | 0.0% |
| `/en/products` | 140.7 KB | 0.0% | 0.0% |
| `/en/settings` | 140.7 KB | 0.0% | 0.0% |
| `/en/team` | 140.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 140.7 KB | 0.0% | 0.0% |
| `/fr/about` | 142.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 140.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 140.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 142.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 140.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 140.7 KB | 0.0% | 0.0% |
| `/fr/products` | 140.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 140.7 KB | 0.0% | 0.0% |
| `/fr/team` | 140.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 14.5 ms | 12.9 ms | 18.8 ms | 3.7 ms |
| `fr` | 12.3 ms | 11.6 ms | 13.2 ms | 3.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 11.8 ms | 5.6 ms |
| `fr` | 14.7 ms | 11.8 ms | 5.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 140.7 KB | 0.0% | 0.0% |
| `/en/about` | 142.1 KB | 0.0% | 0.0% |
| `/en/blog` | 140.7 KB | 0.0% | 0.0% |
| `/en/careers` | 140.7 KB | 0.0% | 0.0% |
| `/en/contact` | 142.3 KB | 0.0% | 0.0% |
| `/en/faq` | 140.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 140.7 KB | 0.0% | 0.0% |
| `/en/products` | 140.7 KB | 0.0% | 0.0% |
| `/en/settings` | 140.7 KB | 0.0% | 0.0% |
| `/en/team` | 140.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 140.7 KB | 0.0% | 0.0% |
| `/fr/about` | 142.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 140.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 140.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 142.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 140.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 140.7 KB | 0.0% | 0.0% |
| `/fr/products` | 140.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 140.7 KB | 0.0% | 0.0% |
| `/fr/team` | 140.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 14.5 ms | 12.9 ms | 18.8 ms | 3.7 ms |
| `fr` | 12.3 ms | 11.6 ms | 13.2 ms | 3.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 11.8 ms | 5.6 ms |
| `fr` | 14.7 ms | 11.8 ms | 5.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 140.7 KB | 0.0% | 0.0% |
| `/en/about` | 142.1 KB | 0.0% | 0.0% |
| `/en/blog` | 140.7 KB | 0.0% | 0.0% |
| `/en/careers` | 140.7 KB | 0.0% | 0.0% |
| `/en/contact` | 142.3 KB | 0.0% | 0.0% |
| `/en/faq` | 140.7 KB | 0.0% | 0.0% |
| `/en/pricing` | 140.7 KB | 0.0% | 0.0% |
| `/en/products` | 140.7 KB | 0.0% | 0.0% |
| `/en/settings` | 140.7 KB | 0.0% | 0.0% |
| `/en/team` | 140.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 140.7 KB | 0.0% | 0.0% |
| `/fr/about` | 142.1 KB | 0.0% | 0.0% |
| `/fr/blog` | 140.7 KB | 0.0% | 0.0% |
| `/fr/careers` | 140.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 142.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 140.7 KB | 0.0% | 0.0% |
| `/fr/pricing` | 140.7 KB | 0.0% | 0.0% |
| `/fr/products` | 140.7 KB | 0.0% | 0.0% |
| `/fr/settings` | 140.7 KB | 0.0% | 0.0% |
| `/fr/team` | 140.7 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 14.5 ms | 12.9 ms | 18.8 ms | 3.7 ms |
| `fr` | 12.3 ms | 11.6 ms | 13.2 ms | 3.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.7 ms | 11.8 ms | 5.6 ms |
| `fr` | 14.7 ms | 11.8 ms | 5.9 ms |

</details>

---

## gt-next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 11.1.24 | 37.7 KB | 132.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 193.9 KB | — | 0.0% | — | 22.8 ms | 6.8 ms | 22.1 ms | 26.8 ms |
| Dynamic | ✅ | 193.9 KB | — | 0.0% | — | 22.8 ms | 6.8 ms | 22.1 ms | 26.8 ms |
| Scoped Static | 🔶 | 193.9 KB | — | 0.0% | — | 26.9 ms | 7.0 ms | 20.5 ms | 24.1 ms |
| Scoped Dynamic | 🔶 | 193.9 KB | — | 0.0% | — | 26.0 ms | 6.6 ms | 21.0 ms | 26.0 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 194.2 KB | — | 0.0% |
| `/en/about` | 194.1 KB | — | 0.0% |
| `/en/blog` | 193.8 KB | — | 0.0% |
| `/en/careers` | 193.8 KB | — | 0.0% |
| `/en/contact` | 193.8 KB | — | 0.0% |
| `/en/faq` | 193.8 KB | — | 0.0% |
| `/en/pricing` | 193.8 KB | — | 0.0% |
| `/en/products` | 193.8 KB | — | 0.0% |
| `/en/settings` | 193.8 KB | — | 0.0% |
| `/en/team` | 193.8 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 194.2 KB | — | 0.0% |
| `/fr/about` | 194.1 KB | — | 0.0% |
| `/fr/blog` | 193.8 KB | — | 0.0% |
| `/fr/careers` | 193.8 KB | — | 0.0% |
| `/fr/contact` | 193.8 KB | — | 0.0% |
| `/fr/faq` | 193.8 KB | — | 0.0% |
| `/fr/pricing` | 193.8 KB | — | 0.0% |
| `/fr/products` | 193.8 KB | — | 0.0% |
| `/fr/settings` | 193.8 KB | — | 0.0% |
| `/fr/team` | 193.8 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-gt-next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 24.7 ms | 20.4 ms | 36.1 ms | 6.5 ms |
| `fr` | 20.8 ms | 18.6 ms | 24.9 ms | 7.1 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 25.1 ms | 27.9 ms | 11.2 ms |
| `fr` | 19.2 ms | 25.6 ms | 10.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 194.2 KB | — | 0.0% |
| `/en/about` | 194.1 KB | — | 0.0% |
| `/en/blog` | 193.8 KB | — | 0.0% |
| `/en/careers` | 193.8 KB | — | 0.0% |
| `/en/contact` | 193.8 KB | — | 0.0% |
| `/en/faq` | 193.8 KB | — | 0.0% |
| `/en/pricing` | 193.8 KB | — | 0.0% |
| `/en/products` | 193.8 KB | — | 0.0% |
| `/en/settings` | 193.8 KB | — | 0.0% |
| `/en/team` | 193.8 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 194.2 KB | — | 0.0% |
| `/fr/about` | 194.1 KB | — | 0.0% |
| `/fr/blog` | 193.8 KB | — | 0.0% |
| `/fr/careers` | 193.8 KB | — | 0.0% |
| `/fr/contact` | 193.8 KB | — | 0.0% |
| `/fr/faq` | 193.8 KB | — | 0.0% |
| `/fr/pricing` | 193.8 KB | — | 0.0% |
| `/fr/products` | 193.8 KB | — | 0.0% |
| `/fr/settings` | 193.8 KB | — | 0.0% |
| `/fr/team` | 193.8 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-gt-next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 24.7 ms | 20.4 ms | 36.1 ms | 6.5 ms |
| `fr` | 20.8 ms | 18.6 ms | 24.9 ms | 7.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 25.1 ms | 27.9 ms | 11.2 ms |
| `fr` | 19.2 ms | 25.6 ms | 10.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 194.3 KB | — | 0.0% |
| `/en/about` | 194.1 KB | — | 0.0% |
| `/en/blog` | 193.8 KB | — | 0.0% |
| `/en/careers` | 193.8 KB | — | 0.0% |
| `/en/contact` | 193.8 KB | — | 0.0% |
| `/en/faq` | 193.8 KB | — | 0.0% |
| `/en/pricing` | 193.8 KB | — | 0.0% |
| `/en/products` | 193.8 KB | — | 0.0% |
| `/en/settings` | 193.8 KB | — | 0.0% |
| `/en/team` | 193.8 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 194.3 KB | — | 0.0% |
| `/fr/about` | 194.1 KB | — | 0.0% |
| `/fr/blog` | 193.8 KB | — | 0.0% |
| `/fr/careers` | 193.8 KB | — | 0.0% |
| `/fr/contact` | 193.8 KB | — | 0.0% |
| `/fr/faq` | 193.8 KB | — | 0.0% |
| `/fr/pricing` | 193.8 KB | — | 0.0% |
| `/fr/products` | 193.8 KB | — | 0.0% |
| `/fr/settings` | 193.8 KB | — | 0.0% |
| `/fr/team` | 193.8 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-gt-next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 29.2 ms | 22.7 ms | 43.6 ms | 7.3 ms |
| `fr` | 24.6 ms | 21.3 ms | 32.6 ms | 6.7 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.0 ms | 25.7 ms | 10.3 ms |
| `fr` | 20.0 ms | 22.5 ms | 10.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 194.3 KB | — | 0.0% |
| `/en/about` | 194.1 KB | — | 0.0% |
| `/en/blog` | 193.8 KB | — | 0.0% |
| `/en/careers` | 193.8 KB | — | 0.0% |
| `/en/contact` | 193.8 KB | — | 0.0% |
| `/en/faq` | 193.8 KB | — | 0.0% |
| `/en/pricing` | 193.8 KB | — | 0.0% |
| `/en/products` | 193.8 KB | — | 0.0% |
| `/en/settings` | 193.8 KB | — | 0.0% |
| `/en/team` | 193.8 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 194.3 KB | — | 0.0% |
| `/fr/about` | 194.1 KB | — | 0.0% |
| `/fr/blog` | 193.8 KB | — | 0.0% |
| `/fr/careers` | 193.8 KB | — | 0.0% |
| `/fr/contact` | 193.8 KB | — | 0.0% |
| `/fr/faq` | 193.8 KB | — | 0.0% |
| `/fr/pricing` | 193.8 KB | — | 0.0% |
| `/fr/products` | 193.8 KB | — | 0.0% |
| `/fr/settings` | 193.8 KB | — | 0.0% |
| `/fr/team` | 193.8 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-gt-next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 26.1 ms | 22.2 ms | 36.2 ms | 6.7 ms |
| `fr` | 25.9 ms | 21.9 ms | 40.2 ms | 6.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 22.6 ms | 26.1 ms | 10.7 ms |
| `fr` | 19.3 ms | 25.8 ms | 10.3 ms |

</details>

---

## lingo.dev

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 0.4.12 | 7.8 KB | 20.5 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 152.8 KB | — | 0.0% | — | 17.7 ms | 4.7 ms | 19.0 ms | 15.6 ms |
| Dynamic | ✅ | 152.8 KB | — | 0.0% | — | 17.7 ms | 4.7 ms | 19.0 ms | 15.6 ms |
| Scoped Static | ✅ | 152.8 KB | — | 0.0% | — | 17.7 ms | 4.7 ms | 19.0 ms | 15.6 ms |
| Scoped Dynamic | ✅ | 152.8 KB | — | 0.0% | — | 17.7 ms | 4.7 ms | 19.0 ms | 15.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 153.1 KB | — | 0.0% |
| `/en/about` | 153.0 KB | — | 0.0% |
| `/en/blog` | 152.6 KB | — | 0.0% |
| `/en/careers` | 152.6 KB | — | 0.0% |
| `/en/contact` | 153.3 KB | — | 0.0% |
| `/en/faq` | 152.6 KB | — | 0.0% |
| `/en/pricing` | 152.6 KB | — | 0.0% |
| `/en/products` | 152.6 KB | — | 0.0% |
| `/en/settings` | 152.6 KB | — | 0.0% |
| `/en/team` | 152.6 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.1 KB | — | 0.0% |
| `/fr/about` | 153.0 KB | — | 0.0% |
| `/fr/blog` | 152.6 KB | — | 0.0% |
| `/fr/careers` | 152.6 KB | — | 0.0% |
| `/fr/contact` | 153.3 KB | — | 0.0% |
| `/fr/faq` | 152.6 KB | — | 0.0% |
| `/fr/pricing` | 152.6 KB | — | 0.0% |
| `/fr/products` | 152.6 KB | — | 0.0% |
| `/fr/settings` | 152.6 KB | — | 0.0% |
| `/fr/team` | 152.6 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.5 ms | 15.7 ms | 26.2 ms | 4.6 ms |
| `fr` | 17.0 ms | 15.5 ms | 20.9 ms | 4.8 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.3 ms | 15.8 ms | 6.0 ms |
| `fr` | 16.6 ms | 15.4 ms | 5.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 153.1 KB | — | 0.0% |
| `/en/about` | 153.0 KB | — | 0.0% |
| `/en/blog` | 152.6 KB | — | 0.0% |
| `/en/careers` | 152.6 KB | — | 0.0% |
| `/en/contact` | 153.3 KB | — | 0.0% |
| `/en/faq` | 152.6 KB | — | 0.0% |
| `/en/pricing` | 152.6 KB | — | 0.0% |
| `/en/products` | 152.6 KB | — | 0.0% |
| `/en/settings` | 152.6 KB | — | 0.0% |
| `/en/team` | 152.6 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.1 KB | — | 0.0% |
| `/fr/about` | 153.0 KB | — | 0.0% |
| `/fr/blog` | 152.6 KB | — | 0.0% |
| `/fr/careers` | 152.6 KB | — | 0.0% |
| `/fr/contact` | 153.3 KB | — | 0.0% |
| `/fr/faq` | 152.6 KB | — | 0.0% |
| `/fr/pricing` | 152.6 KB | — | 0.0% |
| `/fr/products` | 152.6 KB | — | 0.0% |
| `/fr/settings` | 152.6 KB | — | 0.0% |
| `/fr/team` | 152.6 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.5 ms | 15.7 ms | 26.2 ms | 4.6 ms |
| `fr` | 17.0 ms | 15.5 ms | 20.9 ms | 4.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.3 ms | 15.8 ms | 6.0 ms |
| `fr` | 16.6 ms | 15.4 ms | 5.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 153.1 KB | — | 0.0% |
| `/en/about` | 153.0 KB | — | 0.0% |
| `/en/blog` | 152.6 KB | — | 0.0% |
| `/en/careers` | 152.6 KB | — | 0.0% |
| `/en/contact` | 153.3 KB | — | 0.0% |
| `/en/faq` | 152.6 KB | — | 0.0% |
| `/en/pricing` | 152.6 KB | — | 0.0% |
| `/en/products` | 152.6 KB | — | 0.0% |
| `/en/settings` | 152.6 KB | — | 0.0% |
| `/en/team` | 152.6 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.1 KB | — | 0.0% |
| `/fr/about` | 153.0 KB | — | 0.0% |
| `/fr/blog` | 152.6 KB | — | 0.0% |
| `/fr/careers` | 152.6 KB | — | 0.0% |
| `/fr/contact` | 153.3 KB | — | 0.0% |
| `/fr/faq` | 152.6 KB | — | 0.0% |
| `/fr/pricing` | 152.6 KB | — | 0.0% |
| `/fr/products` | 152.6 KB | — | 0.0% |
| `/fr/settings` | 152.6 KB | — | 0.0% |
| `/fr/team` | 152.6 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.5 ms | 15.7 ms | 26.2 ms | 4.6 ms |
| `fr` | 17.0 ms | 15.5 ms | 20.9 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.3 ms | 15.8 ms | 6.0 ms |
| `fr` | 16.6 ms | 15.4 ms | 5.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 153.1 KB | — | 0.0% |
| `/en/about` | 153.0 KB | — | 0.0% |
| `/en/blog` | 152.6 KB | — | 0.0% |
| `/en/careers` | 152.6 KB | — | 0.0% |
| `/en/contact` | 153.3 KB | — | 0.0% |
| `/en/faq` | 152.6 KB | — | 0.0% |
| `/en/pricing` | 152.6 KB | — | 0.0% |
| `/en/products` | 152.6 KB | — | 0.0% |
| `/en/settings` | 152.6 KB | — | 0.0% |
| `/en/team` | 152.6 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.1 KB | — | 0.0% |
| `/fr/about` | 153.0 KB | — | 0.0% |
| `/fr/blog` | 152.6 KB | — | 0.0% |
| `/fr/careers` | 152.6 KB | — | 0.0% |
| `/fr/contact` | 153.3 KB | — | 0.0% |
| `/fr/faq` | 152.6 KB | — | 0.0% |
| `/fr/pricing` | 152.6 KB | — | 0.0% |
| `/fr/products` | 152.6 KB | — | 0.0% |
| `/fr/settings` | 152.6 KB | — | 0.0% |
| `/fr/team` | 152.6 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.5 ms | 15.7 ms | 26.2 ms | 4.6 ms |
| `fr` | 17.0 ms | 15.5 ms | 20.9 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.3 ms | 15.8 ms | 6.0 ms |
| `fr` | 16.6 ms | 15.4 ms | 5.9 ms |

</details>

---

## lingui

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 6.6.0 | 72.1 KB | 269.1 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 207.4 KB | 50.0% | 90.0% | 73.3 KB | 15.3 ms | 4.2 ms | 16.5 ms | 15.2 ms |
| Dynamic | 🔶 | 145.4 KB | 2.8% | 89.9% | 19.9 KB | 15.7 ms | 4.1 ms | 15.8 ms | 12.7 ms |
| Scoped Static | 🔶 | 148.2 KB | 2.7% | 89.1% | 20.4 KB | 15.1 ms | 4.2 ms | 16.3 ms | 13.1 ms |
| Scoped Dynamic | 🔶 | 148.6 KB | 14.8% | 0.0% | 152.6 KB | 16.1 ms | 4.3 ms | 16.6 ms | 14.8 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 208.7 KB | 54.4% | 80.0% |
| `/en/about` | 207.4 KB | 54.4% | 87.5% |
| `/en/blog` | 207.0 KB | 54.4% | 83.8% |
| `/en/careers` | 207.2 KB | 54.4% | 95.0% |
| `/en/contact` | 206.9 KB | 54.4% | 98.8% |
| `/en/faq` | 207.7 KB | 54.4% | 87.5% |
| `/en/pricing` | 207.3 KB | 54.4% | 95.0% |
| `/en/products` | 207.2 KB | 54.4% | 90.0% |
| `/en/settings` | 207.4 KB | 54.4% | 95.0% |
| `/en/team` | 207.3 KB | 54.4% | 87.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 208.7 KB | 45.6% | 83.3% |
| `/fr/about` | 207.4 KB | 45.6% | 85.4% |
| `/fr/blog` | 207.0 KB | 45.6% | 86.5% |
| `/fr/careers` | 207.2 KB | 45.6% | 93.8% |
| `/fr/contact` | 206.9 KB | 45.6% | 97.9% |
| `/fr/faq` | 207.7 KB | 45.6% | 90.6% |
| `/fr/pricing` | 207.3 KB | 45.6% | 90.6% |
| `/fr/products` | 207.2 KB | 45.6% | 89.6% |
| `/fr/settings` | 207.4 KB | 45.6% | 93.8% |
| `/fr/team` | 207.3 KB | 45.6% | 88.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.1 ms | 13.0 ms | 30.1 ms | 4.2 ms |
| `fr` | 13.6 ms | 11.3 ms | 17.9 ms | 4.1 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.4 ms | 17.0 ms | 8.5 ms |
| `fr` | 15.6 ms | 13.4 ms | 5.8 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 146.8 KB | 0.0% | 79.7% |
| `/en/about` | 145.4 KB | 0.0% | 87.2% |
| `/en/blog` | 145.0 KB | 0.0% | 83.3% |
| `/en/careers` | 145.2 KB | 0.0% | 94.9% |
| `/en/contact` | 144.9 KB | 0.0% | 98.7% |
| `/en/faq` | 145.7 KB | 0.0% | 87.2% |
| `/en/pricing` | 145.3 KB | 0.0% | 94.9% |
| `/en/products` | 145.2 KB | 0.0% | 89.7% |
| `/en/settings` | 145.4 KB | 0.0% | 94.9% |
| `/en/team` | 145.3 KB | 0.0% | 87.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 146.8 KB | 14.3% | 83.2% |
| `/fr/about` | 145.4 KB | 4.0% | 85.3% |
| `/fr/blog` | 145.0 KB | 1.0% | 86.3% |
| `/fr/careers` | 145.2 KB | 4.0% | 93.7% |
| `/fr/contact` | 144.9 KB | 0.0% | 97.9% |
| `/fr/faq` | 145.7 KB | 9.4% | 90.5% |
| `/fr/pricing` | 145.3 KB | 4.0% | 90.5% |
| `/fr/products` | 145.2 KB | 6.8% | 89.5% |
| `/fr/settings` | 145.4 KB | 4.0% | 93.7% |
| `/fr/team` | 145.3 KB | 9.4% | 89.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.8 ms | 12.7 ms | 26.9 ms | 4.2 ms |
| `fr` | 14.6 ms | 13.0 ms | 18.6 ms | 3.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.3 ms | 12.9 ms | 6.1 ms |
| `fr` | 15.3 ms | 12.4 ms | 5.7 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 149.6 KB | 0.0% | 79.7% |
| `/en/about` | 148.2 KB | 0.0% | 87.2% |
| `/en/blog` | 147.8 KB | 0.0% | 83.3% |
| `/en/careers` | 148.0 KB | 0.0% | 94.9% |
| `/en/contact` | 147.7 KB | 0.0% | 96.3% |
| `/en/faq` | 148.5 KB | 0.0% | 87.2% |
| `/en/pricing` | 148.1 KB | 0.0% | 94.9% |
| `/en/products` | 148.0 KB | 0.0% | 89.7% |
| `/en/settings` | 148.3 KB | 0.0% | 93.6% |
| `/en/team` | 148.1 KB | 0.0% | 87.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 149.6 KB | 15.5% | 81.4% |
| `/fr/about` | 148.2 KB | 4.4% | 83.7% |
| `/fr/blog` | 147.8 KB | 1.1% | 84.9% |
| `/fr/careers` | 148.0 KB | 4.4% | 93.0% |
| `/fr/contact` | 147.7 KB | 0.0% | 95.5% |
| `/fr/faq` | 148.5 KB | 8.4% | 88.6% |
| `/fr/pricing` | 148.1 KB | 4.3% | 88.5% |
| `/fr/products` | 148.0 KB | 0.0% | 91.4% |
| `/fr/settings` | 148.3 KB | 5.4% | 91.9% |
| `/fr/team` | 148.1 KB | 9.4% | 88.4% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.6 ms | 13.5 ms | 21.7 ms | 4.1 ms |
| `fr` | 14.6 ms | 13.2 ms | 18.2 ms | 4.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.6 ms | 13.2 ms | 6.5 ms |
| `fr` | 15.9 ms | 12.9 ms | 6.4 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 149.9 KB | 0.0% | 0.0% |
| `/en/about` | 148.5 KB | 0.0% | 0.0% |
| `/en/blog` | 148.2 KB | 0.0% | 0.0% |
| `/en/careers` | 148.3 KB | 0.0% | 0.0% |
| `/en/contact` | 148.1 KB | 0.0% | 0.0% |
| `/en/faq` | 148.9 KB | 0.0% | 0.0% |
| `/en/pricing` | 148.5 KB | 0.0% | 0.0% |
| `/en/products` | 148.4 KB | 0.0% | 0.0% |
| `/en/settings` | 148.6 KB | 0.0% | 0.0% |
| `/en/team` | 148.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 149.9 KB | 47.1% | 0.0% |
| `/fr/about` | 148.5 KB | 20.0% | 0.0% |
| `/fr/blog` | 148.2 KB | 6.3% | 0.0% |
| `/fr/careers` | 148.3 KB | 30.8% | 0.0% |
| `/fr/contact` | 148.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 148.9 KB | 47.6% | 0.0% |
| `/fr/pricing` | 148.5 KB | 25.0% | 0.0% |
| `/fr/products` | 148.4 KB | 38.9% | 0.0% |
| `/fr/settings` | 148.6 KB | 35.7% | 0.0% |
| `/fr/team` | 148.5 KB | 45.5% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.4 ms | 13.7 ms | 29.3 ms | 4.5 ms |
| `fr` | 14.7 ms | 12.9 ms | 20.7 ms | 4.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.8 ms | 16.4 ms | 8.6 ms |
| `fr` | 16.4 ms | 13.2 ms | 6.2 ms |

</details>

---

## next-i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 16.3.0 | 19.7 KB | 67.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 218.5 KB | 0.0% | 89.8% | 78.5 KB | 16.4 ms | 4.3 ms | 15.3 ms | 15.6 ms |
| Dynamic | 🔶 | 169.5 KB | 50.0% | 89.8% | 26.1 KB | 15.4 ms | 4.1 ms | 16.2 ms | 27.7 ms |
| Scoped Static | 🔶 | 220.1 KB | 0.0% | 89.8% | 78.9 KB | 16.4 ms | 4.4 ms | 15.6 ms | 14.7 ms |
| Scoped Dynamic | 🔶 | 163.4 KB | 0.0% | 0.0% | 27.1 KB | 15.9 ms | 6.5 ms | 16.6 ms | 15.1 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 219.1 KB | 0.0% | 79.5% |
| `/en/about` | 218.4 KB | 0.0% | 84.6% |
| `/en/blog` | 218.4 KB | 0.0% | 83.3% |
| `/en/careers` | 218.4 KB | 0.0% | 94.9% |
| `/en/contact` | 218.4 KB | 0.0% | 97.5% |
| `/en/faq` | 218.3 KB | 0.0% | 91.0% |
| `/en/pricing` | 218.5 KB | 0.0% | 96.2% |
| `/en/products` | 218.3 KB | 0.0% | 89.7% |
| `/en/settings` | 218.8 KB | 0.0% | 93.7% |
| `/en/team` | 218.4 KB | 0.0% | 87.2% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 219.1 KB | 0.0% | 79.5% |
| `/fr/about` | 218.4 KB | 0.0% | 84.6% |
| `/fr/blog` | 218.4 KB | 0.0% | 83.3% |
| `/fr/careers` | 218.4 KB | 0.0% | 94.9% |
| `/fr/contact` | 218.4 KB | 0.0% | 97.5% |
| `/fr/faq` | 218.3 KB | 0.0% | 91.0% |
| `/fr/pricing` | 218.5 KB | 0.0% | 96.2% |
| `/fr/products` | 218.3 KB | 0.0% | 89.7% |
| `/fr/settings` | 218.8 KB | 0.0% | 93.7% |
| `/fr/team` | 218.4 KB | 0.0% | 87.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.7 ms | 12.9 ms | 31.0 ms | 4.4 ms |
| `fr` | 15.2 ms | 13.6 ms | 20.0 ms | 4.2 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.9 ms | 16.0 ms | 7.0 ms |
| `fr` | 14.7 ms | 15.3 ms | 6.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 166.4 KB | 70.7% | 82.2% |
| `/en/about` | 165.7 KB | 70.7% | 86.7% |
| `/en/blog` | 165.7 KB | 70.7% | 85.6% |
| `/en/careers` | 165.7 KB | 70.7% | 95.6% |
| `/en/contact` | 165.7 KB | 70.7% | 97.8% |
| `/en/faq` | 165.5 KB | 70.7% | 78.9% |
| `/en/pricing` | 165.8 KB | 70.7% | 96.7% |
| `/en/products` | 165.5 KB | 70.7% | 91.1% |
| `/en/settings` | 166.1 KB | 70.7% | 94.5% |
| `/en/team` | 165.7 KB | 70.7% | 88.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 173.9 KB | 29.3% | 85.5% |
| `/fr/about` | 173.2 KB | 29.3% | 80.9% |
| `/fr/blog` | 173.2 KB | 29.3% | 88.2% |
| `/fr/careers` | 173.2 KB | 29.3% | 96.4% |
| `/fr/contact` | 173.2 KB | 29.3% | 98.2% |
| `/fr/faq` | 173.0 KB | 29.3% | 93.6% |
| `/fr/pricing` | 173.3 KB | 29.3% | 76.4% |
| `/fr/products` | 173.0 KB | 29.3% | 92.7% |
| `/fr/settings` | 173.6 KB | 29.3% | 95.5% |
| `/fr/team` | 173.2 KB | 29.3% | 90.9% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.8 ms | 12.5 ms | 26.4 ms | 4.1 ms |
| `fr` | 13.9 ms | 12.6 ms | 16.5 ms | 4.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.1 ms | 30.3 ms | 7.6 ms |
| `fr` | 15.4 ms | 25.1 ms | 5.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 220.6 KB | 0.0% | 79.5% |
| `/en/about` | 219.9 KB | 0.0% | 84.6% |
| `/en/blog` | 220.0 KB | 0.0% | 83.3% |
| `/en/careers` | 220.0 KB | 0.0% | 94.9% |
| `/en/contact` | 220.0 KB | 0.0% | 97.5% |
| `/en/faq` | 219.8 KB | 0.0% | 91.0% |
| `/en/pricing` | 220.1 KB | 0.0% | 96.2% |
| `/en/products` | 219.9 KB | 0.0% | 89.7% |
| `/en/settings` | 220.3 KB | 0.0% | 93.7% |
| `/en/team` | 220.0 KB | 0.0% | 87.2% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 220.6 KB | 0.0% | 79.5% |
| `/fr/about` | 219.9 KB | 0.0% | 84.6% |
| `/fr/blog` | 220.0 KB | 0.0% | 83.3% |
| `/fr/careers` | 220.0 KB | 0.0% | 94.9% |
| `/fr/contact` | 220.0 KB | 0.0% | 97.5% |
| `/fr/faq` | 219.8 KB | 0.0% | 91.0% |
| `/fr/pricing` | 220.1 KB | 0.0% | 96.2% |
| `/fr/products` | 219.9 KB | 0.0% | 89.7% |
| `/fr/settings` | 220.3 KB | 0.0% | 93.7% |
| `/fr/team` | 220.0 KB | 0.0% | 87.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-next-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.2 ms | 14.8 ms | 23.5 ms | 4.5 ms |
| `fr` | 15.6 ms | 14.0 ms | 20.7 ms | 4.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.8 ms | 14.8 ms | 7.2 ms |
| `fr` | 15.4 ms | 14.5 ms | 6.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 164.0 KB | 0.0% | 0.0% |
| `/en/about` | 163.3 KB | 0.0% | 0.0% |
| `/en/blog` | 163.4 KB | 0.0% | 0.0% |
| `/en/careers` | 163.3 KB | 0.0% | 0.0% |
| `/en/contact` | 163.4 KB | 0.0% | 0.0% |
| `/en/faq` | 163.2 KB | 0.0% | 0.0% |
| `/en/pricing` | 163.5 KB | 0.0% | 0.0% |
| `/en/products` | 163.2 KB | 0.0% | 0.0% |
| `/en/settings` | 163.7 KB | 0.0% | 0.0% |
| `/en/team` | 163.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 164.0 KB | 0.0% | 0.0% |
| `/fr/about` | 163.3 KB | 0.0% | 0.0% |
| `/fr/blog` | 163.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 163.3 KB | 0.0% | 0.0% |
| `/fr/contact` | 163.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 163.2 KB | 0.0% | 0.0% |
| `/fr/pricing` | 163.5 KB | 0.0% | 0.0% |
| `/fr/products` | 163.2 KB | 0.0% | 0.0% |
| `/fr/settings` | 163.7 KB | 0.0% | 0.0% |
| `/fr/team` | 163.3 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-next-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.6 ms | 12.5 ms | 28.2 ms | 6.6 ms |
| `fr` | 15.3 ms | 13.3 ms | 22.0 ms | 6.4 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.8 ms | 15.1 ms | 1.9 ms |
| `fr` | 16.4 ms | 15.0 ms | 2.0 ms |

</details>

---

## next-international

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 1.3.1 | 4.1 KB | 16.1 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 238.8 KB | 50.0% | 89.9% | 109.0 KB | 25.8 ms | 13.3 ms | 17.7 ms | 10.3 ms |
| Dynamic | ✅ | 152.3 KB | 0.0% | 89.9% | 12.1 KB | 22.8 ms | 11.5 ms | 17.1 ms | 7.6 ms |
| Scoped Static | ✅ | 211.4 KB | 50.0% | 89.9% | 70.5 KB | 17.8 ms | 5.6 ms | 18.4 ms | 11.6 ms |
| Scoped Dynamic | ✅ | 152.5 KB | 0.0% | 89.9% | 12.3 KB | 15.9 ms | 5.0 ms | 19.1 ms | 8.4 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 239.2 KB | 54.7% | 81.6% |
| `/en/about` | 238.6 KB | 54.7% | 88.5% |
| `/en/blog` | 238.8 KB | 54.7% | 85.1% |
| `/en/careers` | 238.9 KB | 54.7% | 87.4% |
| `/en/contact` | 238.7 KB | 54.7% | 98.9% |
| `/en/faq` | 238.7 KB | 54.7% | 88.5% |
| `/en/pricing` | 238.9 KB | 54.5% | 95.5% |
| `/en/products` | 238.7 KB | 54.7% | 90.8% |
| `/en/settings` | 239.1 KB | 54.7% | 94.3% |
| `/en/team` | 238.7 KB | 54.7% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 239.2 KB | 45.3% | 84.8% |
| `/fr/about` | 238.6 KB | 45.3% | 86.7% |
| `/fr/blog` | 238.8 KB | 45.3% | 87.6% |
| `/fr/careers` | 238.9 KB | 45.3% | 87.6% |
| `/fr/contact` | 238.7 KB | 45.3% | 98.1% |
| `/fr/faq` | 238.7 KB | 45.3% | 90.5% |
| `/fr/pricing` | 238.9 KB | 45.0% | 90.6% |
| `/fr/products` | 238.7 KB | 45.3% | 90.5% |
| `/fr/settings` | 239.1 KB | 45.3% | 93.3% |
| `/fr/team` | 238.7 KB | 45.3% | 89.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-international-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 28.1 ms | 23.7 ms | 40.7 ms | 13.7 ms |
| `fr` | 23.5 ms | 21.8 ms | 27.8 ms | 13.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.8 ms | 11.9 ms | 0.8 ms |
| `fr` | 16.5 ms | 8.6 ms | 0.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 152.0 KB | 0.0% | 81.6% |
| `/en/about` | 151.5 KB | 0.0% | 88.5% |
| `/en/blog` | 151.6 KB | 0.0% | 85.1% |
| `/en/careers` | 151.8 KB | 0.0% | 87.4% |
| `/en/contact` | 151.5 KB | 0.0% | 98.9% |
| `/en/faq` | 151.5 KB | 0.0% | 88.5% |
| `/en/pricing` | 151.7 KB | 0.0% | 95.5% |
| `/en/products` | 151.5 KB | 0.0% | 90.8% |
| `/en/settings` | 151.9 KB | 0.0% | 94.3% |
| `/en/team` | 151.5 KB | 0.0% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.2 KB | 0.0% | 84.6% |
| `/fr/about` | 152.7 KB | 0.0% | 86.5% |
| `/fr/blog` | 152.8 KB | 0.0% | 87.5% |
| `/fr/careers` | 153.0 KB | 0.0% | 87.5% |
| `/fr/contact` | 152.7 KB | 0.0% | 98.1% |
| `/fr/faq` | 152.7 KB | 0.0% | 91.3% |
| `/fr/pricing` | 152.9 KB | 0.0% | 90.5% |
| `/fr/products` | 152.7 KB | 0.0% | 90.4% |
| `/fr/settings` | 153.1 KB | 0.0% | 93.3% |
| `/fr/team` | 152.7 KB | 0.0% | 89.4% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-international-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 24.1 ms | 20.6 ms | 26.2 ms | 11.6 ms |
| `fr` | 21.4 ms | 11.3 ms | 24.6 ms | 11.4 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.7 ms | 7.7 ms | 1.0 ms |
| `fr` | 16.6 ms | 7.6 ms | 1.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 211.9 KB | 54.2% | 82.2% |
| `/en/about` | 211.3 KB | 54.2% | 88.9% |
| `/en/blog` | 211.4 KB | 54.2% | 85.6% |
| `/en/careers` | 211.4 KB | 54.2% | 93.3% |
| `/en/contact` | 211.4 KB | 54.2% | 98.9% |
| `/en/faq` | 211.2 KB | 54.2% | 80.0% |
| `/en/pricing` | 211.5 KB | 53.9% | 95.6% |
| `/en/products` | 211.3 KB | 54.2% | 91.1% |
| `/en/settings` | 211.7 KB | 54.2% | 94.4% |
| `/en/team` | 211.3 KB | 54.2% | 88.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 211.9 KB | 45.8% | 85.0% |
| `/fr/about` | 211.3 KB | 45.8% | 86.9% |
| `/fr/blog` | 211.4 KB | 45.8% | 87.9% |
| `/fr/careers` | 211.4 KB | 45.8% | 91.6% |
| `/fr/contact` | 211.4 KB | 45.8% | 98.1% |
| `/fr/faq` | 211.2 KB | 45.8% | 84.1% |
| `/fr/pricing` | 211.5 KB | 45.6% | 91.7% |
| `/fr/products` | 211.3 KB | 45.8% | 90.7% |
| `/fr/settings` | 211.7 KB | 45.8% | 93.5% |
| `/fr/team` | 211.3 KB | 45.8% | 89.7% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-next-international-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.5 ms | 15.0 ms | 33.9 ms | 5.8 ms |
| `fr` | 16.2 ms | 14.7 ms | 20.6 ms | 5.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.0 ms | 11.5 ms | 0.8 ms |
| `fr` | 17.8 ms | 11.7 ms | 0.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 152.4 KB | 0.0% | 82.2% |
| `/en/about` | 151.8 KB | 0.0% | 88.9% |
| `/en/blog` | 151.9 KB | 0.0% | 85.6% |
| `/en/careers` | 151.9 KB | 0.0% | 93.3% |
| `/en/contact` | 151.8 KB | 0.0% | 98.9% |
| `/en/faq` | 151.7 KB | 0.0% | 80.0% |
| `/en/pricing` | 152.0 KB | 0.0% | 95.6% |
| `/en/products` | 151.8 KB | 0.0% | 91.1% |
| `/en/settings` | 152.2 KB | 0.0% | 94.4% |
| `/en/team` | 151.7 KB | 0.0% | 88.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.5 KB | 0.0% | 85.0% |
| `/fr/about` | 152.9 KB | 0.0% | 86.9% |
| `/fr/blog` | 153.0 KB | 0.0% | 87.9% |
| `/fr/careers` | 153.0 KB | 0.0% | 91.6% |
| `/fr/contact` | 153.0 KB | 0.0% | 98.1% |
| `/fr/faq` | 152.8 KB | 0.0% | 84.1% |
| `/fr/pricing` | 153.1 KB | 0.0% | 91.7% |
| `/fr/products` | 152.9 KB | 0.0% | 90.7% |
| `/fr/settings` | 153.3 KB | 0.0% | 93.5% |
| `/fr/team` | 152.9 KB | 0.0% | 89.7% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-next-international-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.5 ms | 14.6 ms | 17.8 ms | 5.0 ms |
| `fr` | 15.3 ms | 10.9 ms | 17.1 ms | 5.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.6 ms | 8.3 ms | 1.1 ms |
| `fr` | 18.6 ms | 8.5 ms | 1.2 ms |

</details>

---

## next-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.14.2 | 14.7 KB | 56.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 153.6 KB | 4.2% | 89.8% | 21.8 KB | 16.0 ms | 4.0 ms | 16.5 ms | 14.7 ms |
| Dynamic | 🔶 | 153.6 KB | 9.7% | 89.9% | 21.8 KB | 15.6 ms | 4.0 ms | 16.5 ms | 14.8 ms |
| Scoped Static | 🔶 | 153.6 KB | 0.0% | 0.0% | 80.1 KB | 17.9 ms | 4.1 ms | 17.5 ms | 17.4 ms |
| Scoped Dynamic | 🔶 | 153.6 KB | 0.0% | 0.0% | 22.9 KB | 17.8 ms | 4.1 ms | 17.1 ms | 16.8 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 154.2 KB | 0.0% | 82.1% |
| `/en/about` | 153.4 KB | 0.0% | 88.1% |
| `/en/blog` | 153.5 KB | 0.0% | 84.5% |
| `/en/careers` | 153.7 KB | 0.0% | 87.1% |
| `/en/contact` | 153.5 KB | 0.0% | 98.8% |
| `/en/faq` | 153.4 KB | 0.0% | 88.1% |
| `/en/pricing` | 153.6 KB | 0.0% | 95.3% |
| `/en/products` | 153.5 KB | 0.0% | 90.5% |
| `/en/settings` | 153.8 KB | 0.0% | 94.0% |
| `/en/team` | 153.5 KB | 0.0% | 89.3% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 154.2 KB | 8.3% | 83.7% |
| `/fr/about` | 153.4 KB | 8.3% | 89.8% |
| `/fr/blog` | 153.5 KB | 8.3% | 86.7% |
| `/fr/careers` | 153.7 KB | 8.3% | 86.9% |
| `/fr/contact` | 153.5 KB | 8.3% | 99.0% |
| `/fr/faq` | 153.4 KB | 8.3% | 89.8% |
| `/fr/pricing` | 153.6 KB | 8.2% | 89.9% |
| `/fr/products` | 153.5 KB | 8.3% | 89.8% |
| `/fr/settings` | 153.8 KB | 8.3% | 92.9% |
| `/fr/team` | 153.5 KB | 8.3% | 89.8% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.5 ms | 13.5 ms | 28.0 ms | 4.1 ms |
| `fr` | 14.6 ms | 13.0 ms | 18.5 ms | 3.9 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.9 ms | 16.2 ms | 8.2 ms |
| `fr` | 16.2 ms | 13.3 ms | 5.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 154.1 KB | 0.0% | 81.5% |
| `/en/about` | 153.4 KB | 0.0% | 87.7% |
| `/en/blog` | 153.5 KB | 0.0% | 84.0% |
| `/en/careers` | 153.6 KB | 0.0% | 91.4% |
| `/en/contact` | 153.5 KB | 0.0% | 98.8% |
| `/en/faq` | 153.4 KB | 0.0% | 87.7% |
| `/en/pricing` | 153.6 KB | 0.0% | 95.1% |
| `/en/products` | 153.5 KB | 0.0% | 90.1% |
| `/en/settings` | 153.8 KB | 0.0% | 93.8% |
| `/en/team` | 153.5 KB | 0.0% | 88.9% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 154.1 KB | 19.4% | 83.3% |
| `/fr/about` | 153.4 KB | 19.4% | 89.6% |
| `/fr/blog` | 153.5 KB | 19.4% | 86.5% |
| `/fr/careers` | 153.6 KB | 19.4% | 90.6% |
| `/fr/contact` | 153.5 KB | 19.4% | 97.9% |
| `/fr/faq` | 153.4 KB | 19.4% | 89.6% |
| `/fr/pricing` | 153.6 KB | 19.1% | 89.7% |
| `/fr/products` | 153.5 KB | 19.4% | 89.6% |
| `/fr/settings` | 153.8 KB | 19.4% | 92.7% |
| `/fr/team` | 153.5 KB | 19.4% | 89.6% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.2 ms | 13.2 ms | 29.0 ms | 4.1 ms |
| `fr` | 14.0 ms | 12.4 ms | 17.4 ms | 3.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.0 ms | 16.5 ms | 8.4 ms |
| `fr` | 16.0 ms | 13.1 ms | 5.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 154.1 KB | 0.0% | 0.0% |
| `/en/about` | 153.4 KB | 0.0% | 0.0% |
| `/en/blog` | 153.5 KB | 0.0% | 0.0% |
| `/en/careers` | 153.5 KB | 0.0% | 0.0% |
| `/en/contact` | 153.5 KB | 0.0% | 0.0% |
| `/en/faq` | 153.4 KB | 0.0% | 0.0% |
| `/en/pricing` | 153.6 KB | 0.0% | 0.0% |
| `/en/products` | 153.5 KB | 0.0% | 0.0% |
| `/en/settings` | 153.8 KB | 0.0% | 0.0% |
| `/en/team` | 153.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 154.1 KB | 0.0% | 0.0% |
| `/fr/about` | 153.4 KB | 0.0% | 0.0% |
| `/fr/blog` | 153.5 KB | 0.0% | 0.0% |
| `/fr/careers` | 153.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 153.5 KB | 0.0% | 0.0% |
| `/fr/faq` | 153.4 KB | 0.0% | 0.0% |
| `/fr/pricing` | 153.6 KB | 0.0% | 0.0% |
| `/fr/products` | 153.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 153.8 KB | 0.0% | 0.0% |
| `/fr/team` | 153.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-next-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.6 ms | 15.5 ms | 30.2 ms | 4.3 ms |
| `fr` | 16.3 ms | 14.6 ms | 20.7 ms | 3.9 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.2 ms | 17.0 ms | 6.1 ms |
| `fr` | 16.8 ms | 17.8 ms | 6.1 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 154.1 KB | 0.0% | 0.0% |
| `/en/about` | 153.4 KB | 0.0% | 0.0% |
| `/en/blog` | 153.5 KB | 0.0% | 0.0% |
| `/en/careers` | 153.5 KB | 0.0% | 0.0% |
| `/en/contact` | 153.5 KB | 0.0% | 0.0% |
| `/en/faq` | 153.4 KB | 0.0% | 0.0% |
| `/en/pricing` | 153.6 KB | 0.0% | 0.0% |
| `/en/products` | 153.5 KB | 0.0% | 0.0% |
| `/en/settings` | 153.8 KB | 0.0% | 0.0% |
| `/en/team` | 153.5 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 154.1 KB | 0.0% | 0.0% |
| `/fr/about` | 153.4 KB | 0.0% | 0.0% |
| `/fr/blog` | 153.5 KB | 0.0% | 0.0% |
| `/fr/careers` | 153.5 KB | 0.0% | 0.0% |
| `/fr/contact` | 153.5 KB | 0.0% | 0.0% |
| `/fr/faq` | 153.4 KB | 0.0% | 0.0% |
| `/fr/pricing` | 153.6 KB | 0.0% | 0.0% |
| `/fr/products` | 153.5 KB | 0.0% | 0.0% |
| `/fr/settings` | 153.8 KB | 0.0% | 0.0% |
| `/fr/team` | 153.5 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-next-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.8 ms | 15.4 ms | 30.5 ms | 4.2 ms |
| `fr` | 15.7 ms | 12.7 ms | 19.6 ms | 4.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 17.2 ms | 6.4 ms |
| `fr` | 16.3 ms | 16.4 ms | 5.9 ms |

</details>

---

## next-intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.1 | 5.5 KB | 16.6 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 141.3 KB | 0.0% | 0.0% | 8.5 KB | 15.5 ms | 5.3 ms | 19.6 ms | 16.9 ms |
| Dynamic | 🔶 | 141.3 KB | 0.0% | 0.0% | 6.9 KB | 15.3 ms | 5.2 ms | 19.3 ms | 15.9 ms |
| Scoped Static | ✅ | 141.3 KB | 0.0% | 0.0% | 8.5 KB | 15.5 ms | 5.3 ms | 19.6 ms | 16.9 ms |
| Scoped Dynamic | 🔶 | 141.3 KB | 0.0% | 0.0% | 6.9 KB | 15.3 ms | 5.2 ms | 19.3 ms | 15.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 141.3 KB | 0.0% | 0.0% |
| `/en/about` | 141.3 KB | 0.0% | 0.0% |
| `/en/blog` | 141.3 KB | 0.0% | 0.0% |
| `/en/careers` | 141.3 KB | 0.0% | 0.0% |
| `/en/contact` | 141.3 KB | 0.0% | 0.0% |
| `/en/faq` | 141.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 141.3 KB | 0.0% | 0.0% |
| `/en/products` | 141.3 KB | 0.0% | 0.0% |
| `/en/settings` | 141.3 KB | 0.0% | 0.0% |
| `/en/team` | 141.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 141.3 KB | 0.0% | 0.0% |
| `/fr/about` | 141.3 KB | 0.0% | 0.0% |
| `/fr/blog` | 141.3 KB | 0.0% | 0.0% |
| `/fr/careers` | 141.3 KB | 0.0% | 0.0% |
| `/fr/contact` | 141.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 141.3 KB | 0.0% | 0.0% |
| `/fr/pricing` | 141.3 KB | 0.0% | 0.0% |
| `/fr/products` | 141.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 141.3 KB | 0.0% | 0.0% |
| `/fr/team` | 141.3 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.8 ms | 13.6 ms | 28.9 ms | 5.3 ms |
| `fr` | 13.1 ms | 12.0 ms | 16.2 ms | 5.2 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.7 ms | 16.1 ms | 6.6 ms |
| `fr` | 18.6 ms | 17.8 ms | 6.3 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 141.3 KB | 0.0% | 0.0% |
| `/en/about` | 141.3 KB | 0.0% | 0.0% |
| `/en/blog` | 141.3 KB | 0.0% | 0.0% |
| `/en/careers` | 141.3 KB | 0.0% | 0.0% |
| `/en/contact` | 141.3 KB | 0.0% | 0.0% |
| `/en/faq` | 141.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 141.3 KB | 0.0% | 0.0% |
| `/en/products` | 141.3 KB | 0.0% | 0.0% |
| `/en/settings` | 141.3 KB | 0.0% | 0.0% |
| `/en/team` | 141.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 141.3 KB | 0.0% | 0.0% |
| `/fr/about` | 141.3 KB | 0.0% | 0.0% |
| `/fr/blog` | 141.3 KB | 0.0% | 0.0% |
| `/fr/careers` | 141.3 KB | 0.0% | 0.0% |
| `/fr/contact` | 141.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 141.3 KB | 0.0% | 0.0% |
| `/fr/pricing` | 141.3 KB | 0.0% | 0.0% |
| `/fr/products` | 141.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 141.3 KB | 0.0% | 0.0% |
| `/fr/team` | 141.3 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.8 ms | 13.5 ms | 30.3 ms | 5.5 ms |
| `fr` | 12.8 ms | 11.0 ms | 16.3 ms | 5.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.9 ms | 16.1 ms | 6.5 ms |
| `fr` | 18.6 ms | 15.6 ms | 6.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 141.3 KB | 0.0% | 0.0% |
| `/en/about` | 141.3 KB | 0.0% | 0.0% |
| `/en/blog` | 141.3 KB | 0.0% | 0.0% |
| `/en/careers` | 141.3 KB | 0.0% | 0.0% |
| `/en/contact` | 141.3 KB | 0.0% | 0.0% |
| `/en/faq` | 141.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 141.3 KB | 0.0% | 0.0% |
| `/en/products` | 141.3 KB | 0.0% | 0.0% |
| `/en/settings` | 141.3 KB | 0.0% | 0.0% |
| `/en/team` | 141.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 141.3 KB | 0.0% | 0.0% |
| `/fr/about` | 141.3 KB | 0.0% | 0.0% |
| `/fr/blog` | 141.3 KB | 0.0% | 0.0% |
| `/fr/careers` | 141.3 KB | 0.0% | 0.0% |
| `/fr/contact` | 141.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 141.3 KB | 0.0% | 0.0% |
| `/fr/pricing` | 141.3 KB | 0.0% | 0.0% |
| `/fr/products` | 141.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 141.3 KB | 0.0% | 0.0% |
| `/fr/team` | 141.3 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.8 ms | 13.6 ms | 28.9 ms | 5.3 ms |
| `fr` | 13.1 ms | 12.0 ms | 16.2 ms | 5.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.7 ms | 16.1 ms | 6.6 ms |
| `fr` | 18.6 ms | 17.8 ms | 6.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 141.3 KB | 0.0% | 0.0% |
| `/en/about` | 141.3 KB | 0.0% | 0.0% |
| `/en/blog` | 141.3 KB | 0.0% | 0.0% |
| `/en/careers` | 141.3 KB | 0.0% | 0.0% |
| `/en/contact` | 141.3 KB | 0.0% | 0.0% |
| `/en/faq` | 141.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 141.3 KB | 0.0% | 0.0% |
| `/en/products` | 141.3 KB | 0.0% | 0.0% |
| `/en/settings` | 141.3 KB | 0.0% | 0.0% |
| `/en/team` | 141.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 141.3 KB | 0.0% | 0.0% |
| `/fr/about` | 141.3 KB | 0.0% | 0.0% |
| `/fr/blog` | 141.3 KB | 0.0% | 0.0% |
| `/fr/careers` | 141.3 KB | 0.0% | 0.0% |
| `/fr/contact` | 141.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 141.3 KB | 0.0% | 0.0% |
| `/fr/pricing` | 141.3 KB | 0.0% | 0.0% |
| `/fr/products` | 141.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 141.3 KB | 0.0% | 0.0% |
| `/fr/team` | 141.3 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 17.8 ms | 13.5 ms | 30.3 ms | 5.5 ms |
| `fr` | 12.8 ms | 11.0 ms | 16.3 ms | 5.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.9 ms | 16.1 ms | 6.5 ms |
| `fr` | 18.6 ms | 15.6 ms | 6.6 ms |

</details>

---

## next-translate

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 3.2.0 | 3.5 KB | 10.2 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 143.1 KB | 0.0% | 89.8% | 61.3 KB | 17.4 ms | 4.4 ms | 17.8 ms | 15.5 ms |
| Dynamic | 🔶 | 143.1 KB | 0.0% | 89.8% | 10.7 KB | 16.2 ms | 4.2 ms | 19.0 ms | 15.5 ms |
| Scoped Static | 🔶 | 143.1 KB | 0.0% | 89.8% | 61.5 KB | 18.4 ms | 4.5 ms | 17.6 ms | 15.2 ms |
| Scoped Dynamic | 🔶 | 143.1 KB | 0.0% | 61.5% | 11.7 KB | 18.1 ms | 4.5 ms | 18.9 ms | 17.1 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 143.7 KB | 0.0% | 80.3% |
| `/en/about` | 143.0 KB | 0.0% | 84.2% |
| `/en/blog` | 143.1 KB | 0.0% | 82.9% |
| `/en/careers` | 143.0 KB | 0.0% | 94.7% |
| `/en/contact` | 143.0 KB | 0.0% | 97.4% |
| `/en/faq` | 142.9 KB | 0.0% | 90.8% |
| `/en/pricing` | 143.2 KB | 0.0% | 96.1% |
| `/en/products` | 142.9 KB | 0.0% | 89.5% |
| `/en/settings` | 143.4 KB | 0.0% | 93.5% |
| `/en/team` | 143.0 KB | 0.0% | 88.2% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 143.7 KB | 0.0% | 82.8% |
| `/fr/about` | 143.0 KB | 0.0% | 80.6% |
| `/fr/blog` | 143.1 KB | 0.0% | 86.0% |
| `/fr/careers` | 143.0 KB | 0.0% | 94.6% |
| `/fr/contact` | 143.0 KB | 0.0% | 97.9% |
| `/fr/faq` | 142.9 KB | 0.0% | 93.5% |
| `/fr/pricing` | 143.2 KB | 0.0% | 91.4% |
| `/fr/products` | 142.9 KB | 0.0% | 89.2% |
| `/fr/settings` | 143.4 KB | 0.0% | 92.6% |
| `/fr/team` | 143.0 KB | 0.0% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-next-translate-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.4 ms | 14.7 ms | 29.7 ms | 4.7 ms |
| `fr` | 15.4 ms | 13.8 ms | 19.8 ms | 4.2 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.2 ms | 15.3 ms | 6.1 ms |
| `fr` | 16.4 ms | 15.6 ms | 6.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 143.7 KB | 0.0% | 80.3% |
| `/en/about` | 143.0 KB | 0.0% | 84.2% |
| `/en/blog` | 143.1 KB | 0.0% | 82.9% |
| `/en/careers` | 143.0 KB | 0.0% | 94.7% |
| `/en/contact` | 143.0 KB | 0.0% | 97.4% |
| `/en/faq` | 142.9 KB | 0.0% | 90.8% |
| `/en/pricing` | 143.2 KB | 0.0% | 96.1% |
| `/en/products` | 142.9 KB | 0.0% | 89.5% |
| `/en/settings` | 143.4 KB | 0.0% | 93.5% |
| `/en/team` | 143.0 KB | 0.0% | 88.2% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 143.7 KB | 0.0% | 82.8% |
| `/fr/about` | 143.0 KB | 0.0% | 80.6% |
| `/fr/blog` | 143.1 KB | 0.0% | 86.0% |
| `/fr/careers` | 143.0 KB | 0.0% | 94.6% |
| `/fr/contact` | 143.0 KB | 0.0% | 97.9% |
| `/fr/faq` | 142.9 KB | 0.0% | 93.5% |
| `/fr/pricing` | 143.2 KB | 0.0% | 91.4% |
| `/fr/products` | 142.9 KB | 0.0% | 89.2% |
| `/fr/settings` | 143.4 KB | 0.0% | 92.6% |
| `/fr/team` | 143.0 KB | 0.0% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-dynamic-next-translate-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 18.0 ms | 14.2 ms | 24.4 ms | 4.2 ms |
| `fr` | 14.4 ms | 10.5 ms | 17.7 ms | 4.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.0 ms | 15.5 ms | 6.2 ms |
| `fr` | 17.0 ms | 15.6 ms | 6.3 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 143.7 KB | 0.0% | 80.3% |
| `/en/about` | 143.0 KB | 0.0% | 84.2% |
| `/en/blog` | 143.1 KB | 0.0% | 82.9% |
| `/en/careers` | 143.0 KB | 0.0% | 94.7% |
| `/en/contact` | 143.1 KB | 0.0% | 97.4% |
| `/en/faq` | 142.9 KB | 0.0% | 90.8% |
| `/en/pricing` | 143.2 KB | 0.0% | 96.1% |
| `/en/products` | 142.9 KB | 0.0% | 89.5% |
| `/en/settings` | 143.4 KB | 0.0% | 93.5% |
| `/en/team` | 143.0 KB | 0.0% | 88.2% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 143.7 KB | 0.0% | 82.8% |
| `/fr/about` | 143.0 KB | 0.0% | 80.6% |
| `/fr/blog` | 143.1 KB | 0.0% | 86.0% |
| `/fr/careers` | 143.0 KB | 0.0% | 94.6% |
| `/fr/contact` | 143.1 KB | 0.0% | 97.9% |
| `/fr/faq` | 142.9 KB | 0.0% | 93.5% |
| `/fr/pricing` | 143.2 KB | 0.0% | 91.4% |
| `/fr/products` | 142.9 KB | 0.0% | 89.2% |
| `/fr/settings` | 143.4 KB | 0.0% | 92.6% |
| `/fr/team` | 143.0 KB | 0.0% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-next-translate-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 21.4 ms | 16.7 ms | 33.6 ms | 4.8 ms |
| `fr` | 15.5 ms | 14.0 ms | 19.9 ms | 4.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.9 ms | 15.2 ms | 6.0 ms |
| `fr` | 16.3 ms | 15.3 ms | 5.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 143.7 KB | 0.0% | 0.0% |
| `/en/about` | 143.0 KB | 0.0% | 55.6% |
| `/en/blog` | 143.0 KB | 0.0% | 53.6% |
| `/en/careers` | 143.0 KB | 0.0% | 78.9% |
| `/en/contact` | 143.0 KB | 0.0% | 88.2% |
| `/en/faq` | 142.9 KB | 0.0% | 68.2% |
| `/en/pricing` | 143.1 KB | 0.0% | 83.3% |
| `/en/products` | 142.9 KB | 0.0% | 65.2% |
| `/en/settings` | 143.4 KB | 0.0% | 75.0% |
| `/en/team` | 143.0 KB | 0.0% | 62.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 143.7 KB | 0.0% | 0.0% |
| `/fr/about` | 143.0 KB | 0.0% | 47.1% |
| `/fr/blog` | 143.0 KB | 0.0% | 55.2% |
| `/fr/careers` | 143.0 KB | 0.0% | 76.2% |
| `/fr/contact` | 143.0 KB | 0.0% | 88.9% |
| `/fr/faq` | 142.9 KB | 0.0% | 72.7% |
| `/fr/pricing` | 143.1 KB | 0.0% | 66.7% |
| `/fr/products` | 142.9 KB | 0.0% | 61.5% |
| `/fr/settings` | 143.4 KB | 0.0% | 69.6% |
| `/fr/team` | 143.0 KB | 0.0% | 61.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-next-translate-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.2 ms | 15.6 ms | 25.7 ms | 4.3 ms |
| `fr` | 17.0 ms | 15.4 ms | 20.6 ms | 4.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.5 ms | 16.3 ms | 6.5 ms |
| `fr` | 17.3 ms | 18.0 ms | 6.3 ms |

</details>

---

## paraglide-next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.15.1 | 2.3 KB | 6.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 155.3 KB | 0.0% | 0.0% | 6.0 KB | 13.7 ms | 4.8 ms | 18.0 ms | 21.6 ms |
| Dynamic | ✅ | 155.3 KB | 0.0% | 0.0% | 6.0 KB | 13.7 ms | 4.8 ms | 18.0 ms | 21.6 ms |
| Scoped Static | ✅ | 155.3 KB | 0.0% | 0.0% | 6.0 KB | 13.7 ms | 4.8 ms | 18.0 ms | 21.6 ms |
| Scoped Dynamic | ✅ | 155.3 KB | 0.0% | 0.0% | 6.0 KB | 13.7 ms | 4.8 ms | 18.0 ms | 21.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 165.4 KB | 0.0% | 0.0% |
| `/en/about` | 159.0 KB | 0.0% | 0.0% |
| `/en/blog` | 154.8 KB | 0.0% | 0.0% |
| `/en/careers` | 154.7 KB | 0.0% | 0.0% |
| `/en/contact` | 150.4 KB | 0.0% | 0.0% |
| `/en/faq` | 158.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 152.3 KB | 0.0% | 0.0% |
| `/en/products` | 153.3 KB | 0.0% | 0.0% |
| `/en/settings` | 151.8 KB | 0.0% | 0.0% |
| `/en/team` | 153.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 165.4 KB | 0.0% | 0.0% |
| `/fr/about` | 159.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 154.8 KB | 0.0% | 0.0% |
| `/fr/careers` | 154.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 150.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 158.6 KB | 0.0% | 0.0% |
| `/fr/pricing` | 152.3 KB | 0.0% | 0.0% |
| `/fr/products` | 153.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 151.8 KB | 0.0% | 0.0% |
| `/fr/team` | 153.2 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-paraglide-next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.5 ms | 10.8 ms | 27.7 ms | 4.9 ms |
| `fr` | 11.8 ms | 9.9 ms | 15.0 ms | 4.7 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.2 ms | 21.9 ms | 6.5 ms |
| `fr` | 17.8 ms | 21.4 ms | 6.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 165.4 KB | 0.0% | 0.0% |
| `/en/about` | 159.0 KB | 0.0% | 0.0% |
| `/en/blog` | 154.8 KB | 0.0% | 0.0% |
| `/en/careers` | 154.7 KB | 0.0% | 0.0% |
| `/en/contact` | 150.4 KB | 0.0% | 0.0% |
| `/en/faq` | 158.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 152.3 KB | 0.0% | 0.0% |
| `/en/products` | 153.3 KB | 0.0% | 0.0% |
| `/en/settings` | 151.8 KB | 0.0% | 0.0% |
| `/en/team` | 153.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 165.4 KB | 0.0% | 0.0% |
| `/fr/about` | 159.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 154.8 KB | 0.0% | 0.0% |
| `/fr/careers` | 154.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 150.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 158.6 KB | 0.0% | 0.0% |
| `/fr/pricing` | 152.3 KB | 0.0% | 0.0% |
| `/fr/products` | 153.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 151.8 KB | 0.0% | 0.0% |
| `/fr/team` | 153.2 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-paraglide-next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.5 ms | 10.8 ms | 27.7 ms | 4.9 ms |
| `fr` | 11.8 ms | 9.9 ms | 15.0 ms | 4.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.2 ms | 21.9 ms | 6.5 ms |
| `fr` | 17.8 ms | 21.4 ms | 6.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 165.4 KB | 0.0% | 0.0% |
| `/en/about` | 159.0 KB | 0.0% | 0.0% |
| `/en/blog` | 154.8 KB | 0.0% | 0.0% |
| `/en/careers` | 154.7 KB | 0.0% | 0.0% |
| `/en/contact` | 150.4 KB | 0.0% | 0.0% |
| `/en/faq` | 158.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 152.3 KB | 0.0% | 0.0% |
| `/en/products` | 153.3 KB | 0.0% | 0.0% |
| `/en/settings` | 151.8 KB | 0.0% | 0.0% |
| `/en/team` | 153.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 165.4 KB | 0.0% | 0.0% |
| `/fr/about` | 159.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 154.8 KB | 0.0% | 0.0% |
| `/fr/careers` | 154.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 150.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 158.6 KB | 0.0% | 0.0% |
| `/fr/pricing` | 152.3 KB | 0.0% | 0.0% |
| `/fr/products` | 153.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 151.8 KB | 0.0% | 0.0% |
| `/fr/team` | 153.2 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-paraglide-next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.5 ms | 10.8 ms | 27.7 ms | 4.9 ms |
| `fr` | 11.8 ms | 9.9 ms | 15.0 ms | 4.7 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.2 ms | 21.9 ms | 6.5 ms |
| `fr` | 17.8 ms | 21.4 ms | 6.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 165.4 KB | 0.0% | 0.0% |
| `/en/about` | 159.0 KB | 0.0% | 0.0% |
| `/en/blog` | 154.8 KB | 0.0% | 0.0% |
| `/en/careers` | 154.7 KB | 0.0% | 0.0% |
| `/en/contact` | 150.4 KB | 0.0% | 0.0% |
| `/en/faq` | 158.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 152.3 KB | 0.0% | 0.0% |
| `/en/products` | 153.3 KB | 0.0% | 0.0% |
| `/en/settings` | 151.8 KB | 0.0% | 0.0% |
| `/en/team` | 153.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 165.4 KB | 0.0% | 0.0% |
| `/fr/about` | 159.0 KB | 0.0% | 0.0% |
| `/fr/blog` | 154.8 KB | 0.0% | 0.0% |
| `/fr/careers` | 154.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 150.4 KB | 0.0% | 0.0% |
| `/fr/faq` | 158.6 KB | 0.0% | 0.0% |
| `/fr/pricing` | 152.3 KB | 0.0% | 0.0% |
| `/fr/products` | 153.3 KB | 0.0% | 0.0% |
| `/fr/settings` | 151.8 KB | 0.0% | 0.0% |
| `/fr/team` | 153.2 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-paraglide-next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.5 ms | 10.8 ms | 27.7 ms | 4.9 ms |
| `fr` | 11.8 ms | 9.9 ms | 15.0 ms | 4.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.2 ms | 21.9 ms | 6.5 ms |
| `fr` | 17.8 ms | 21.4 ms | 6.5 ms |

</details>

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 7.2.0 | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 283.8 KB | 50.0% | 90.0% | 0.0 KB | 2.6 ms | — | 16.7 ms | 23.1 ms |
| Dynamic | ✅ | 283.8 KB | 50.0% | 90.0% | 0.0 KB | 2.6 ms | — | 16.7 ms | 23.1 ms |
| Scoped Static | 🔶 | 268.5 KB | 39.4% | 90.0% | 0.0 KB | 13.7 ms | 4.8 ms | 19.1 ms | 18.5 ms |
| Scoped Dynamic | 🔶 | 160.3 KB | 33.3% | 0.0% | 13.9 KB | 2.1 ms | — | 16.1 ms | 15.2 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 284.9 KB | 53.8% | 83.5% |
| `/en/about` | 283.9 KB | 53.8% | 89.0% |
| `/en/blog` | 283.7 KB | 53.8% | 85.7% |
| `/en/careers` | 283.8 KB | 53.8% | 87.9% |
| `/en/contact` | 283.3 KB | 53.8% | 97.8% |
| `/en/faq` | 284.0 KB | 53.8% | 89.0% |
| `/en/pricing` | 283.5 KB | 53.8% | 89.0% |
| `/en/products` | 283.3 KB | 53.8% | 94.5% |
| `/en/settings` | 283.7 KB | 53.8% | 94.5% |
| `/en/team` | 283.5 KB | 53.8% | 89.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 284.9 KB | 46.2% | 85.6% |
| `/fr/about` | 283.9 KB | 46.2% | 87.5% |
| `/fr/blog` | 283.7 KB | 46.2% | 87.5% |
| `/fr/careers` | 283.8 KB | 46.2% | 88.5% |
| `/fr/contact` | 283.3 KB | 46.2% | 98.1% |
| `/fr/faq` | 284.0 KB | 46.2% | 90.4% |
| `/fr/pricing` | 283.5 KB | 46.2% | 87.5% |
| `/fr/products` | 283.3 KB | 46.2% | 92.3% |
| `/fr/settings` | 283.7 KB | 46.2% | 94.2% |
| `/fr/team` | 283.5 KB | 46.2% | 88.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.2 ms | 1.5 ms | 8.6 ms | 0.0 ms |
| `fr` | 2.1 ms | 1.4 ms | 3.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.4 ms | 23.6 ms | 8.9 ms |
| `fr` | 16.0 ms | 22.7 ms | 8.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 284.9 KB | 53.8% | 83.5% |
| `/en/about` | 283.9 KB | 53.8% | 89.0% |
| `/en/blog` | 283.7 KB | 53.8% | 85.7% |
| `/en/careers` | 283.8 KB | 53.8% | 87.9% |
| `/en/contact` | 283.3 KB | 53.8% | 97.8% |
| `/en/faq` | 284.0 KB | 53.8% | 89.0% |
| `/en/pricing` | 283.5 KB | 53.8% | 89.0% |
| `/en/products` | 283.3 KB | 53.8% | 94.5% |
| `/en/settings` | 283.7 KB | 53.8% | 94.5% |
| `/en/team` | 283.5 KB | 53.8% | 89.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 284.9 KB | 46.2% | 85.6% |
| `/fr/about` | 283.9 KB | 46.2% | 87.5% |
| `/fr/blog` | 283.7 KB | 46.2% | 87.5% |
| `/fr/careers` | 283.8 KB | 46.2% | 88.5% |
| `/fr/contact` | 283.3 KB | 46.2% | 98.1% |
| `/fr/faq` | 284.0 KB | 46.2% | 90.4% |
| `/fr/pricing` | 283.5 KB | 46.2% | 87.5% |
| `/fr/products` | 283.3 KB | 46.2% | 92.3% |
| `/fr/settings` | 283.7 KB | 46.2% | 94.2% |
| `/fr/team` | 283.5 KB | 46.2% | 88.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-static-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.2 ms | 1.5 ms | 8.6 ms | 0.0 ms |
| `fr` | 2.1 ms | 1.4 ms | 3.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.4 ms | 23.6 ms | 8.9 ms |
| `fr` | 16.0 ms | 22.7 ms | 8.7 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 269.8 KB | 32.9% | 83.5% |
| `/en/about` | 268.8 KB | 32.9% | 89.0% |
| `/en/blog` | 268.5 KB | 32.9% | 85.7% |
| `/en/careers` | 268.5 KB | 32.9% | 87.9% |
| `/en/contact` | 268.0 KB | 32.9% | 97.8% |
| `/en/faq` | 268.7 KB | 32.9% | 89.0% |
| `/en/pricing` | 268.2 KB | 32.9% | 89.0% |
| `/en/products` | 268.1 KB | 32.9% | 94.5% |
| `/en/settings` | 268.5 KB | 32.9% | 94.5% |
| `/en/team` | 268.2 KB | 32.9% | 89.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 269.8 KB | 45.8% | 85.1% |
| `/fr/about` | 268.8 KB | 45.8% | 87.1% |
| `/fr/blog` | 268.5 KB | 45.8% | 87.1% |
| `/fr/careers` | 268.5 KB | 45.8% | 89.1% |
| `/fr/contact` | 268.0 KB | 45.8% | 98.0% |
| `/fr/faq` | 268.7 KB | 45.8% | 90.1% |
| `/fr/pricing` | 268.2 KB | 45.8% | 87.1% |
| `/fr/products` | 268.1 KB | 45.8% | 92.1% |
| `/fr/settings` | 268.5 KB | 45.8% | 94.1% |
| `/fr/team` | 268.2 KB | 45.8% | 90.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-static-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 15.4 ms | 10.7 ms | 27.9 ms | 5.0 ms |
| `fr` | 12.0 ms | 10.6 ms | 15.6 ms | 4.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.3 ms | 20.1 ms | 11.0 ms |
| `fr` | 18.9 ms | 17.0 ms | 8.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 161.7 KB | 0.0% | 0.0% |
| `/en/about` | 160.6 KB | 0.0% | 0.0% |
| `/en/blog` | 160.3 KB | 0.0% | 0.0% |
| `/en/careers` | 160.3 KB | 0.0% | 0.0% |
| `/en/contact` | 159.8 KB | 0.0% | 0.0% |
| `/en/faq` | 160.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 160.0 KB | 0.0% | 0.0% |
| `/en/products` | 159.9 KB | 0.0% | 0.0% |
| `/en/settings` | 160.3 KB | 0.0% | 0.0% |
| `/en/team` | 160.0 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 161.7 KB | 66.7% | 0.0% |
| `/fr/about` | 160.6 KB | 66.7% | 0.0% |
| `/fr/blog` | 160.3 KB | 66.7% | 0.0% |
| `/fr/careers` | 160.3 KB | 66.7% | 0.0% |
| `/fr/contact` | 159.8 KB | 66.7% | 0.0% |
| `/fr/faq` | 160.5 KB | 66.7% | 0.0% |
| `/fr/pricing` | 160.0 KB | 66.7% | 0.0% |
| `/fr/products` | 159.9 KB | 66.7% | 0.0% |
| `/fr/settings` | 160.3 KB | 66.7% | 0.0% |
| `/fr/team` | 160.0 KB | 66.7% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/nextjs-scoped-dynamic-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.7 ms | 1.0 ms | 8.9 ms | 0.0 ms |
| `fr` | 1.4 ms | 0.8 ms | 3.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.3 ms | 16.8 ms | 9.4 ms |
| `fr` | 15.9 ms | 13.6 ms | 6.8 ms |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 13 |
| Total app entries | 35 |
| With lib size data | 13 |
| With page bundle data | 52 |
| With component data | 52 |
| With reactivity data | 52 |
| With rendering data | 52 |
