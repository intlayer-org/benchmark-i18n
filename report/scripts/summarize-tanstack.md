# TanStack Start (React) — i18n Benchmark Results

_Generated: 2026-09-28_

## Metric Legend

| Column | What it measures |
| :--- | :--- |
| **Lib size (gz)** | Gzip bytes of the minified i18n library via an empty-component build |
| **Page JS avg (gz)** | Average gzip JS bundle per page across all locales |
| **Locale leak %** | % of JS bundle containing strings from locales the user is NOT using |
| **Page leak %** | % of JS bundle containing strings from pages the user is NOT on |
| **Comp avg (gz)** | Average gzip size of individual components compiled in isolation |
| **E2E reactivity** | Median wall-clock time from locale `<select>` change to `html[lang]` DOM update (ms); `×n` = relative to the base app in the same CI job |
| **React Profiler** | Sum of React `actualDuration` during locale-switch re-renders (ms) |
| **Page load** | Median `PerformanceNavigationTiming.duration` — full page load time (ms); `×n` = relative to the base app in the same CI job |
| **Hydration avg** | Custom perf-mark delta for React hydration phase (ms); — = not instrumented |

> **Status icons:** ✅ all data · 🔶 partial · ⬜ missing · ❌ error  
> **⚠ INVALID** = test ran but all measured values were zero (missing instrumentation or broken test)

## Libraries

- [@intlayer/lingui](#intlayer-lingui)
- [@intlayer/react-i18next](#intlayer-react-i18next)
- [@intlayer/use-intl](#intlayer-use-intl)
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

## @intlayer/lingui

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.11 | 10.3 KB | 32.7 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 194.1 KB | 50.0% | 88.9% | 79.6 KB | 2.6 ms | — | 15.7 ms | 10.5 ms |
| Dynamic | ✅ | 200.6 KB | 50.0% | 90.0% | 12.8 KB | 3.0 ms | — | 16.9 ms | 18.2 ms |
| Scoped Static | ↳ Static | 194.1 KB | 50.0% | 88.9% | 79.6 KB | 2.6 ms | — | 15.7 ms | 10.5 ms |
| Scoped Dynamic | ↳ Dynamic | 200.6 KB | 50.0% | 90.0% | 12.8 KB | 3.0 ms | — | 16.9 ms | 18.2 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 195.8 KB | 54.0% | 79.2% |
| `/en/about` | 193.9 KB | 54.0% | 87.0% |
| `/en/blog` | 193.4 KB | 54.0% | 83.1% |
| `/en/careers` | 193.9 KB | 54.0% | 94.8% |
| `/en/contact` | 193.4 KB | 54.0% | 98.7% |
| `/en/faq` | 194.1 KB | 54.0% | 87.0% |
| `/en/pricing` | 193.7 KB | 54.0% | 94.8% |
| `/en/products` | 193.6 KB | 54.0% | 89.6% |
| `/en/settings` | 195.0 KB | 54.0% | 87.4% |
| `/en/team` | 193.7 KB | 54.0% | 87.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 195.8 KB | 46.0% | 82.4% |
| `/fr/about` | 193.9 KB | 46.0% | 84.6% |
| `/fr/blog` | 193.4 KB | 46.0% | 85.7% |
| `/fr/careers` | 193.9 KB | 46.0% | 93.4% |
| `/fr/contact` | 193.4 KB | 46.0% | 97.8% |
| `/fr/faq` | 194.1 KB | 46.0% | 90.1% |
| `/fr/pricing` | 193.7 KB | 46.0% | 90.1% |
| `/fr/products` | 193.6 KB | 46.0% | 89.0% |
| `/fr/settings` | 195.0 KB | 46.0% | 89.1% |
| `/fr/team` | 193.7 KB | 46.0% | 87.9% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-intlayer-compat-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.7 ms | 1.9 ms | 5.4 ms | 0.0 ms |
| `fr` | 2.5 ms | 1.9 ms | 4.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.3 ms | 11.2 ms | 2.3 ms |
| `fr` | 15.0 ms | 9.9 ms | 1.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 201.1 KB | 54.4% | 81.4% |
| `/en/about` | 200.0 KB | 54.4% | 88.4% |
| `/en/blog` | 200.1 KB | 54.4% | 84.9% |
| `/en/careers` | 200.9 KB | 54.4% | 88.4% |
| `/en/contact` | 200.1 KB | 54.4% | 98.8% |
| `/en/faq` | 200.8 KB | 54.4% | 88.4% |
| `/en/pricing` | 200.3 KB | 54.4% | 96.5% |
| `/en/products` | 200.3 KB | 54.4% | 90.7% |
| `/en/settings` | 201.7 KB | 54.4% | 94.2% |
| `/en/team` | 200.4 KB | 54.4% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 201.1 KB | 45.6% | 84.3% |
| `/fr/about` | 200.0 KB | 45.6% | 86.3% |
| `/fr/blog` | 200.1 KB | 45.6% | 87.3% |
| `/fr/careers` | 200.9 KB | 45.6% | 88.2% |
| `/fr/contact` | 200.1 KB | 45.6% | 98.0% |
| `/fr/faq` | 200.8 KB | 45.6% | 91.2% |
| `/fr/pricing` | 200.3 KB | 45.6% | 90.2% |
| `/fr/products` | 200.3 KB | 45.6% | 92.2% |
| `/fr/settings` | 201.7 KB | 45.6% | 93.1% |
| `/fr/team` | 200.4 KB | 45.6% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-intlayer-compat-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.2 ms | 2.2 ms | 6.7 ms | 0.0 ms |
| `fr` | 2.8 ms | 2.1 ms | 5.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.3 ms | 20.1 ms | 7.7 ms |
| `fr` | 16.5 ms | 16.4 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 195.8 KB | 54.0% | 79.2% |
| `/en/about` | 193.9 KB | 54.0% | 87.0% |
| `/en/blog` | 193.4 KB | 54.0% | 83.1% |
| `/en/careers` | 193.9 KB | 54.0% | 94.8% |
| `/en/contact` | 193.4 KB | 54.0% | 98.7% |
| `/en/faq` | 194.1 KB | 54.0% | 87.0% |
| `/en/pricing` | 193.7 KB | 54.0% | 94.8% |
| `/en/products` | 193.6 KB | 54.0% | 89.6% |
| `/en/settings` | 195.0 KB | 54.0% | 87.4% |
| `/en/team` | 193.7 KB | 54.0% | 87.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 195.8 KB | 46.0% | 82.4% |
| `/fr/about` | 193.9 KB | 46.0% | 84.6% |
| `/fr/blog` | 193.4 KB | 46.0% | 85.7% |
| `/fr/careers` | 193.9 KB | 46.0% | 93.4% |
| `/fr/contact` | 193.4 KB | 46.0% | 97.8% |
| `/fr/faq` | 194.1 KB | 46.0% | 90.1% |
| `/fr/pricing` | 193.7 KB | 46.0% | 90.1% |
| `/fr/products` | 193.6 KB | 46.0% | 89.0% |
| `/fr/settings` | 195.0 KB | 46.0% | 89.1% |
| `/fr/team` | 193.7 KB | 46.0% | 87.9% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-intlayer-compat-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 2.7 ms | 1.9 ms | 5.4 ms | 0.0 ms |
| `fr` | 2.5 ms | 1.9 ms | 4.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.3 ms | 11.2 ms | 2.3 ms |
| `fr` | 15.0 ms | 9.9 ms | 1.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 201.1 KB | 54.4% | 81.4% |
| `/en/about` | 200.0 KB | 54.4% | 88.4% |
| `/en/blog` | 200.1 KB | 54.4% | 84.9% |
| `/en/careers` | 200.9 KB | 54.4% | 88.4% |
| `/en/contact` | 200.1 KB | 54.4% | 98.8% |
| `/en/faq` | 200.8 KB | 54.4% | 88.4% |
| `/en/pricing` | 200.3 KB | 54.4% | 96.5% |
| `/en/products` | 200.3 KB | 54.4% | 90.7% |
| `/en/settings` | 201.7 KB | 54.4% | 94.2% |
| `/en/team` | 200.4 KB | 54.4% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 201.1 KB | 45.6% | 84.3% |
| `/fr/about` | 200.0 KB | 45.6% | 86.3% |
| `/fr/blog` | 200.1 KB | 45.6% | 87.3% |
| `/fr/careers` | 200.9 KB | 45.6% | 88.2% |
| `/fr/contact` | 200.1 KB | 45.6% | 98.0% |
| `/fr/faq` | 200.8 KB | 45.6% | 91.2% |
| `/fr/pricing` | 200.3 KB | 45.6% | 90.2% |
| `/fr/products` | 200.3 KB | 45.6% | 92.2% |
| `/fr/settings` | 201.7 KB | 45.6% | 93.1% |
| `/fr/team` | 200.4 KB | 45.6% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-intlayer-compat-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.2 ms | 2.2 ms | 6.7 ms | 0.0 ms |
| `fr` | 2.8 ms | 2.1 ms | 5.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.3 ms | 20.1 ms | 7.7 ms |
| `fr` | 16.5 ms | 16.4 ms | 4.8 ms |

</details>

---

## @intlayer/react-i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.11 | 8.8 KB | 26.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 184.6 KB | 50.0% | 89.7% | 70.9 KB | 3.9 ms | — | 17.8 ms | 12.0 ms |
| Dynamic | ✅ | 184.6 KB | 50.0% | 89.7% | 9.2 KB | 3.5 ms | — | 14.2 ms | 10.7 ms |
| Scoped Static | ↳ Static | 184.6 KB | 50.0% | 89.7% | 70.9 KB | 3.9 ms | — | 17.8 ms | 12.0 ms |
| Scoped Dynamic | ↳ Dynamic | 184.6 KB | 50.0% | 89.7% | 9.2 KB | 3.5 ms | — | 14.2 ms | 10.7 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 185.3 KB | 53.9% | 81.4% |
| `/en/about` | 184.2 KB | 53.9% | 88.4% |
| `/en/blog` | 184.3 KB | 53.9% | 84.9% |
| `/en/careers` | 184.8 KB | 53.9% | 87.2% |
| `/en/contact` | 184.3 KB | 53.9% | 97.7% |
| `/en/faq` | 184.2 KB | 53.9% | 88.4% |
| `/en/pricing` | 184.4 KB | 53.6% | 95.4% |
| `/en/products` | 184.2 KB | 53.9% | 90.7% |
| `/en/settings` | 185.7 KB | 53.9% | 94.3% |
| `/en/team` | 184.3 KB | 53.9% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 185.3 KB | 46.1% | 84.2% |
| `/fr/about` | 184.2 KB | 46.1% | 86.1% |
| `/fr/blog` | 184.3 KB | 46.1% | 87.1% |
| `/fr/careers` | 184.8 KB | 46.1% | 87.1% |
| `/fr/contact` | 184.3 KB | 46.1% | 98.0% |
| `/fr/faq` | 184.2 KB | 46.1% | 91.1% |
| `/fr/pricing` | 184.4 KB | 45.9% | 91.2% |
| `/fr/products` | 184.2 KB | 46.1% | 90.1% |
| `/fr/settings` | 185.7 KB | 46.1% | 93.1% |
| `/fr/team` | 184.3 KB | 46.1% | 89.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-intlayer-compat-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.2 ms | 2.8 ms | 9.4 ms | 0.0 ms |
| `fr` | 3.5 ms | 2.6 ms | 6.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.7 ms | 12.3 ms | 3.1 ms |
| `fr` | 16.0 ms | 11.7 ms | 2.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 185.3 KB | 53.9% | 81.4% |
| `/en/about` | 184.3 KB | 53.9% | 88.4% |
| `/en/blog` | 184.3 KB | 53.9% | 84.9% |
| `/en/careers` | 184.8 KB | 53.9% | 87.2% |
| `/en/contact` | 184.3 KB | 53.9% | 97.7% |
| `/en/faq` | 184.2 KB | 53.9% | 88.4% |
| `/en/pricing` | 184.5 KB | 53.6% | 95.4% |
| `/en/products` | 184.3 KB | 53.9% | 90.7% |
| `/en/settings` | 185.7 KB | 53.9% | 94.3% |
| `/en/team` | 184.3 KB | 53.9% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 185.3 KB | 46.1% | 84.2% |
| `/fr/about` | 184.3 KB | 46.1% | 86.1% |
| `/fr/blog` | 184.3 KB | 46.1% | 87.1% |
| `/fr/careers` | 184.8 KB | 46.1% | 87.1% |
| `/fr/contact` | 184.3 KB | 46.1% | 98.0% |
| `/fr/faq` | 184.2 KB | 46.1% | 91.1% |
| `/fr/pricing` | 184.5 KB | 45.9% | 91.2% |
| `/fr/products` | 184.3 KB | 46.1% | 90.1% |
| `/fr/settings` | 185.7 KB | 46.1% | 93.1% |
| `/fr/team` | 184.3 KB | 46.1% | 89.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-intlayer-compat-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.6 ms | 2.5 ms | 7.2 ms | 0.0 ms |
| `fr` | 3.3 ms | 2.6 ms | 5.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.4 ms | 10.8 ms | 2.5 ms |
| `fr` | 14.0 ms | 10.6 ms | 2.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 185.3 KB | 53.9% | 81.4% |
| `/en/about` | 184.2 KB | 53.9% | 88.4% |
| `/en/blog` | 184.3 KB | 53.9% | 84.9% |
| `/en/careers` | 184.8 KB | 53.9% | 87.2% |
| `/en/contact` | 184.3 KB | 53.9% | 97.7% |
| `/en/faq` | 184.2 KB | 53.9% | 88.4% |
| `/en/pricing` | 184.4 KB | 53.6% | 95.4% |
| `/en/products` | 184.2 KB | 53.9% | 90.7% |
| `/en/settings` | 185.7 KB | 53.9% | 94.3% |
| `/en/team` | 184.3 KB | 53.9% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 185.3 KB | 46.1% | 84.2% |
| `/fr/about` | 184.2 KB | 46.1% | 86.1% |
| `/fr/blog` | 184.3 KB | 46.1% | 87.1% |
| `/fr/careers` | 184.8 KB | 46.1% | 87.1% |
| `/fr/contact` | 184.3 KB | 46.1% | 98.0% |
| `/fr/faq` | 184.2 KB | 46.1% | 91.1% |
| `/fr/pricing` | 184.4 KB | 45.9% | 91.2% |
| `/fr/products` | 184.2 KB | 46.1% | 90.1% |
| `/fr/settings` | 185.7 KB | 46.1% | 93.1% |
| `/fr/team` | 184.3 KB | 46.1% | 89.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-intlayer-compat-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.2 ms | 2.8 ms | 9.4 ms | 0.0 ms |
| `fr` | 3.5 ms | 2.6 ms | 6.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.7 ms | 12.3 ms | 3.1 ms |
| `fr` | 16.0 ms | 11.7 ms | 2.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 185.3 KB | 53.9% | 81.4% |
| `/en/about` | 184.3 KB | 53.9% | 88.4% |
| `/en/blog` | 184.3 KB | 53.9% | 84.9% |
| `/en/careers` | 184.8 KB | 53.9% | 87.2% |
| `/en/contact` | 184.3 KB | 53.9% | 97.7% |
| `/en/faq` | 184.2 KB | 53.9% | 88.4% |
| `/en/pricing` | 184.5 KB | 53.6% | 95.4% |
| `/en/products` | 184.3 KB | 53.9% | 90.7% |
| `/en/settings` | 185.7 KB | 53.9% | 94.3% |
| `/en/team` | 184.3 KB | 53.9% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 185.3 KB | 46.1% | 84.2% |
| `/fr/about` | 184.3 KB | 46.1% | 86.1% |
| `/fr/blog` | 184.3 KB | 46.1% | 87.1% |
| `/fr/careers` | 184.8 KB | 46.1% | 87.1% |
| `/fr/contact` | 184.3 KB | 46.1% | 98.0% |
| `/fr/faq` | 184.2 KB | 46.1% | 91.1% |
| `/fr/pricing` | 184.5 KB | 45.9% | 91.2% |
| `/fr/products` | 184.3 KB | 46.1% | 90.1% |
| `/fr/settings` | 185.7 KB | 46.1% | 93.1% |
| `/fr/team` | 184.3 KB | 46.1% | 89.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-intlayer-compat-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.6 ms | 2.5 ms | 7.2 ms | 0.0 ms |
| `fr` | 3.3 ms | 2.6 ms | 5.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.4 ms | 10.8 ms | 2.5 ms |
| `fr` | 14.0 ms | 10.6 ms | 2.2 ms |

</details>

---

## @intlayer/use-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.11 | 7.3 KB | 21.9 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 195.9 KB | 50.0% | 89.8% | 30.4 KB | 3.5 ms | — | 15.5 ms | 13.0 ms |
| Dynamic | ✅ | 201.7 KB | 50.0% | 89.8% | 9.1 KB | 11.7 ms | — | 16.7 ms | 17.0 ms |
| Scoped Static | ↳ Static | 195.9 KB | 50.0% | 89.8% | 30.4 KB | 3.5 ms | — | 15.5 ms | 13.0 ms |
| Scoped Dynamic | ↳ Dynamic | 201.7 KB | 50.0% | 89.8% | 9.1 KB | 11.7 ms | — | 16.7 ms | 17.0 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 196.6 KB | 54.4% | 81.4% |
| `/en/about` | 195.5 KB | 54.4% | 88.4% |
| `/en/blog` | 195.7 KB | 54.4% | 84.9% |
| `/en/careers` | 196.1 KB | 54.4% | 87.4% |
| `/en/contact` | 195.7 KB | 54.4% | 98.8% |
| `/en/faq` | 195.5 KB | 54.4% | 88.4% |
| `/en/pricing` | 195.8 KB | 54.1% | 95.4% |
| `/en/products` | 195.6 KB | 54.4% | 90.7% |
| `/en/settings` | 197.0 KB | 54.4% | 94.2% |
| `/en/team` | 195.6 KB | 54.4% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 196.6 KB | 45.6% | 84.5% |
| `/fr/about` | 195.5 KB | 45.6% | 86.4% |
| `/fr/blog` | 195.7 KB | 45.6% | 87.4% |
| `/fr/careers` | 196.1 KB | 45.6% | 87.5% |
| `/fr/contact` | 195.7 KB | 45.6% | 98.1% |
| `/fr/faq` | 195.5 KB | 45.6% | 91.3% |
| `/fr/pricing` | 195.8 KB | 45.4% | 90.4% |
| `/fr/products` | 195.6 KB | 45.6% | 90.3% |
| `/fr/settings` | 197.0 KB | 45.6% | 93.2% |
| `/fr/team` | 195.6 KB | 45.6% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-intlayer-compat-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.6 ms | 2.9 ms | 6.2 ms | 0.0 ms |
| `fr` | 3.4 ms | 2.7 ms | 6.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.6 ms | 16.2 ms | 7.6 ms |
| `fr` | 14.4 ms | 9.9 ms | 1.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 203.9 KB | 54.4% | 81.4% |
| `/en/about` | 201.8 KB | 54.4% | 88.4% |
| `/en/blog` | 200.9 KB | 54.4% | 84.9% |
| `/en/careers` | 201.9 KB | 54.4% | 87.4% |
| `/en/contact` | 200.3 KB | 54.4% | 98.8% |
| `/en/faq` | 201.1 KB | 54.4% | 88.4% |
| `/en/pricing` | 200.7 KB | 54.1% | 95.4% |
| `/en/products` | 200.6 KB | 54.4% | 90.7% |
| `/en/settings` | 203.7 KB | 54.4% | 94.2% |
| `/en/team` | 200.8 KB | 54.4% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 204.3 KB | 45.6% | 84.5% |
| `/fr/about` | 202.2 KB | 45.6% | 86.4% |
| `/fr/blog` | 201.1 KB | 45.6% | 87.4% |
| `/fr/careers` | 202.2 KB | 45.6% | 87.5% |
| `/fr/contact` | 200.4 KB | 45.6% | 98.1% |
| `/fr/faq` | 201.4 KB | 45.6% | 91.3% |
| `/fr/pricing` | 200.9 KB | 45.4% | 90.4% |
| `/fr/products` | 200.8 KB | 45.6% | 90.3% |
| `/fr/settings` | 203.9 KB | 45.6% | 93.2% |
| `/fr/team` | 201.0 KB | 45.6% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-intlayer-compat-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 12.1 ms | 9.3 ms | 18.6 ms | 0.0 ms |
| `fr` | 11.2 ms | 8.7 ms | 17.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.0 ms | 18.4 ms | 7.3 ms |
| `fr` | 15.4 ms | 15.7 ms | 5.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 196.6 KB | 54.4% | 81.4% |
| `/en/about` | 195.5 KB | 54.4% | 88.4% |
| `/en/blog` | 195.7 KB | 54.4% | 84.9% |
| `/en/careers` | 196.1 KB | 54.4% | 87.4% |
| `/en/contact` | 195.7 KB | 54.4% | 98.8% |
| `/en/faq` | 195.5 KB | 54.4% | 88.4% |
| `/en/pricing` | 195.8 KB | 54.1% | 95.4% |
| `/en/products` | 195.6 KB | 54.4% | 90.7% |
| `/en/settings` | 197.0 KB | 54.4% | 94.2% |
| `/en/team` | 195.6 KB | 54.4% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 196.6 KB | 45.6% | 84.5% |
| `/fr/about` | 195.5 KB | 45.6% | 86.4% |
| `/fr/blog` | 195.7 KB | 45.6% | 87.4% |
| `/fr/careers` | 196.1 KB | 45.6% | 87.5% |
| `/fr/contact` | 195.7 KB | 45.6% | 98.1% |
| `/fr/faq` | 195.5 KB | 45.6% | 91.3% |
| `/fr/pricing` | 195.8 KB | 45.4% | 90.4% |
| `/fr/products` | 195.6 KB | 45.6% | 90.3% |
| `/fr/settings` | 197.0 KB | 45.6% | 93.2% |
| `/fr/team` | 195.6 KB | 45.6% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-intlayer-compat-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.6 ms | 2.9 ms | 6.2 ms | 0.0 ms |
| `fr` | 3.4 ms | 2.7 ms | 6.0 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.6 ms | 16.2 ms | 7.6 ms |
| `fr` | 14.4 ms | 9.9 ms | 1.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 203.9 KB | 54.4% | 81.4% |
| `/en/about` | 201.8 KB | 54.4% | 88.4% |
| `/en/blog` | 200.9 KB | 54.4% | 84.9% |
| `/en/careers` | 201.9 KB | 54.4% | 87.4% |
| `/en/contact` | 200.3 KB | 54.4% | 98.8% |
| `/en/faq` | 201.1 KB | 54.4% | 88.4% |
| `/en/pricing` | 200.7 KB | 54.1% | 95.4% |
| `/en/products` | 200.6 KB | 54.4% | 90.7% |
| `/en/settings` | 203.7 KB | 54.4% | 94.2% |
| `/en/team` | 200.8 KB | 54.4% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 204.3 KB | 45.6% | 84.5% |
| `/fr/about` | 202.2 KB | 45.6% | 86.4% |
| `/fr/blog` | 201.1 KB | 45.6% | 87.4% |
| `/fr/careers` | 202.2 KB | 45.6% | 87.5% |
| `/fr/contact` | 200.4 KB | 45.6% | 98.1% |
| `/fr/faq` | 201.4 KB | 45.6% | 91.3% |
| `/fr/pricing` | 200.9 KB | 45.4% | 90.4% |
| `/fr/products` | 200.8 KB | 45.6% | 90.3% |
| `/fr/settings` | 203.9 KB | 45.6% | 93.2% |
| `/fr/team` | 201.0 KB | 45.6% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-intlayer-compat-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 12.1 ms | 9.3 ms | 18.6 ms | 0.0 ms |
| `fr` | 11.2 ms | 8.7 ms | 17.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.0 ms | 18.4 ms | 7.3 ms |
| `fr` | 15.4 ms | 15.7 ms | 5.1 ms |

</details>

---

## base

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | 0.0 KB | 0.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 117.7 KB | 0.0% | 0.0% | 0.7 KB | 8.1 ms | 1.0 ms | 15.7 ms | 21.6 ms |
| Dynamic | ✅ | 117.7 KB | 0.0% | 0.0% | 0.7 KB | 8.1 ms | 1.0 ms | 15.7 ms | 21.6 ms |
| Scoped Static | ✅ | 117.7 KB | 0.0% | 0.0% | 0.7 KB | 8.1 ms | 1.0 ms | 15.7 ms | 21.6 ms |
| Scoped Dynamic | ✅ | 117.7 KB | 0.0% | 0.0% | 0.7 KB | 8.1 ms | 1.0 ms | 15.7 ms | 21.6 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 119.0 KB | 0.0% | 0.0% |
| `/en/about` | 117.8 KB | 0.0% | 0.0% |
| `/en/blog` | 117.4 KB | 0.0% | 0.0% |
| `/en/careers` | 117.7 KB | 0.0% | 0.0% |
| `/en/contact` | 117.1 KB | 0.0% | 0.0% |
| `/en/faq` | 117.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 117.2 KB | 0.0% | 0.0% |
| `/en/products` | 117.2 KB | 0.0% | 0.0% |
| `/en/settings` | 118.4 KB | 0.0% | 0.0% |
| `/en/team` | 117.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 119.0 KB | 0.0% | 0.0% |
| `/fr/about` | 117.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 117.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 117.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 117.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 117.6 KB | 0.0% | 0.0% |
| `/fr/pricing` | 117.2 KB | 0.0% | 0.0% |
| `/fr/products` | 117.2 KB | 0.0% | 0.0% |
| `/fr/settings` | 118.4 KB | 0.0% | 0.0% |
| `/fr/team` | 117.3 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 8.5 ms | 4.0 ms | 19.1 ms | 1.1 ms |
| `fr` | 7.7 ms | 5.0 ms | 16.9 ms | 1.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 24.3 ms | 5.9 ms |
| `fr` | 13.5 ms | 18.9 ms | 3.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 119.0 KB | 0.0% | 0.0% |
| `/en/about` | 117.8 KB | 0.0% | 0.0% |
| `/en/blog` | 117.4 KB | 0.0% | 0.0% |
| `/en/careers` | 117.7 KB | 0.0% | 0.0% |
| `/en/contact` | 117.1 KB | 0.0% | 0.0% |
| `/en/faq` | 117.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 117.2 KB | 0.0% | 0.0% |
| `/en/products` | 117.2 KB | 0.0% | 0.0% |
| `/en/settings` | 118.4 KB | 0.0% | 0.0% |
| `/en/team` | 117.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 119.0 KB | 0.0% | 0.0% |
| `/fr/about` | 117.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 117.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 117.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 117.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 117.6 KB | 0.0% | 0.0% |
| `/fr/pricing` | 117.2 KB | 0.0% | 0.0% |
| `/fr/products` | 117.2 KB | 0.0% | 0.0% |
| `/fr/settings` | 118.4 KB | 0.0% | 0.0% |
| `/fr/team` | 117.3 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 8.5 ms | 4.0 ms | 19.1 ms | 1.1 ms |
| `fr` | 7.7 ms | 5.0 ms | 16.9 ms | 1.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 24.3 ms | 5.9 ms |
| `fr` | 13.5 ms | 18.9 ms | 3.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 119.0 KB | 0.0% | 0.0% |
| `/en/about` | 117.8 KB | 0.0% | 0.0% |
| `/en/blog` | 117.4 KB | 0.0% | 0.0% |
| `/en/careers` | 117.7 KB | 0.0% | 0.0% |
| `/en/contact` | 117.1 KB | 0.0% | 0.0% |
| `/en/faq` | 117.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 117.2 KB | 0.0% | 0.0% |
| `/en/products` | 117.2 KB | 0.0% | 0.0% |
| `/en/settings` | 118.4 KB | 0.0% | 0.0% |
| `/en/team` | 117.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 119.0 KB | 0.0% | 0.0% |
| `/fr/about` | 117.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 117.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 117.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 117.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 117.6 KB | 0.0% | 0.0% |
| `/fr/pricing` | 117.2 KB | 0.0% | 0.0% |
| `/fr/products` | 117.2 KB | 0.0% | 0.0% |
| `/fr/settings` | 118.4 KB | 0.0% | 0.0% |
| `/fr/team` | 117.3 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 8.5 ms | 4.0 ms | 19.1 ms | 1.1 ms |
| `fr` | 7.7 ms | 5.0 ms | 16.9 ms | 1.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 24.3 ms | 5.9 ms |
| `fr` | 13.5 ms | 18.9 ms | 3.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 119.0 KB | 0.0% | 0.0% |
| `/en/about` | 117.8 KB | 0.0% | 0.0% |
| `/en/blog` | 117.4 KB | 0.0% | 0.0% |
| `/en/careers` | 117.7 KB | 0.0% | 0.0% |
| `/en/contact` | 117.1 KB | 0.0% | 0.0% |
| `/en/faq` | 117.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 117.2 KB | 0.0% | 0.0% |
| `/en/products` | 117.2 KB | 0.0% | 0.0% |
| `/en/settings` | 118.4 KB | 0.0% | 0.0% |
| `/en/team` | 117.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 119.0 KB | 0.0% | 0.0% |
| `/fr/about` | 117.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 117.4 KB | 0.0% | 0.0% |
| `/fr/careers` | 117.7 KB | 0.0% | 0.0% |
| `/fr/contact` | 117.1 KB | 0.0% | 0.0% |
| `/fr/faq` | 117.6 KB | 0.0% | 0.0% |
| `/fr/pricing` | 117.2 KB | 0.0% | 0.0% |
| `/fr/products` | 117.2 KB | 0.0% | 0.0% |
| `/fr/settings` | 118.4 KB | 0.0% | 0.0% |
| `/fr/team` | 117.3 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-base-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 8.5 ms | 4.0 ms | 19.1 ms | 1.1 ms |
| `fr` | 7.7 ms | 5.0 ms | 16.9 ms | 1.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.9 ms | 24.3 ms | 5.9 ms |
| `fr` | 13.5 ms | 18.9 ms | 3.5 ms |

</details>

---

## gt-react

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| latest | 37.1 KB | 130.3 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 196.7 KB | — | 82.1% | — | 3.9 ms | 0.3 ms | 20.5 ms | 16.4 ms |
| Dynamic | 🔶 | 152.5 KB | — | 82.1% | — | — | — | 22.5 ms | 16.4 ms |
| Scoped Static | 🔶 | 181.0 KB | — | 82.1% | — | — | — | 21.8 ms | 16.5 ms |
| Scoped Dynamic | 🔶 | 158.2 KB | — | 0.0% | — | — | — | — | — |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 198.0 KB | — | 64.4% |
| `/en/about` | 196.8 KB | — | 77.8% |
| `/en/blog` | 196.4 KB | — | 77.6% |
| `/en/careers` | 196.8 KB | — | 75.6% |
| `/en/contact` | 196.1 KB | — | 97.8% |
| `/en/faq` | 196.6 KB | — | 81.8% |
| `/en/pricing` | 196.2 KB | — | 91.8% |
| `/en/products` | 196.2 KB | — | 82.2% |
| `/en/settings` | 197.5 KB | — | 90.0% |
| `/en/team` | 196.3 KB | — | 81.8% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 198.0 KB | — | 64.4% |
| `/fr/about` | 196.8 KB | — | 77.8% |
| `/fr/blog` | 196.4 KB | — | 77.6% |
| `/fr/careers` | 196.8 KB | — | 75.6% |
| `/fr/contact` | 196.1 KB | — | 97.8% |
| `/fr/faq` | 196.6 KB | — | 81.8% |
| `/fr/pricing` | 196.2 KB | — | 91.8% |
| `/fr/products` | 196.2 KB | — | 82.2% |
| `/fr/settings` | 197.5 KB | — | 90.0% |
| `/fr/team` | 196.3 KB | — | 81.8% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-gt-react-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `fr` | 3.9 ms | 2.7 ms | 6.6 ms | 0.3 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.4 ms | 17.4 ms | 3.6 ms |
| `fr` | 19.7 ms | 15.4 ms | 3.5 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 153.8 KB | — | 64.4% |
| `/en/about` | 152.5 KB | — | 77.8% |
| `/en/blog` | 152.2 KB | — | 77.6% |
| `/en/careers` | 152.6 KB | — | 75.6% |
| `/en/contact` | 151.9 KB | — | 97.8% |
| `/en/faq` | 152.4 KB | — | 81.8% |
| `/en/pricing` | 152.0 KB | — | 91.8% |
| `/en/products` | 152.0 KB | — | 82.2% |
| `/en/settings` | 153.2 KB | — | 90.0% |
| `/en/team` | 152.1 KB | — | 81.8% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 153.8 KB | — | 64.4% |
| `/fr/about` | 152.5 KB | — | 77.8% |
| `/fr/blog` | 152.2 KB | — | 77.6% |
| `/fr/careers` | 152.6 KB | — | 75.6% |
| `/fr/contact` | 151.9 KB | — | 97.8% |
| `/fr/faq` | 152.4 KB | — | 81.8% |
| `/fr/pricing` | 152.0 KB | — | 91.8% |
| `/fr/products` | 152.0 KB | — | 82.2% |
| `/fr/settings` | 153.2 KB | — | 90.0% |
| `/fr/team` | 152.1 KB | — | 81.8% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-gt-react-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.7 ms | 16.1 ms | 1.3 ms |
| `fr` | 23.2 ms | 16.8 ms | 1.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 182.3 KB | — | 64.4% |
| `/en/about` | 181.1 KB | — | 77.8% |
| `/en/blog` | 180.7 KB | — | 77.6% |
| `/en/careers` | 181.1 KB | — | 75.6% |
| `/en/contact` | 180.4 KB | — | 97.8% |
| `/en/faq` | 180.9 KB | — | 81.8% |
| `/en/pricing` | 180.6 KB | — | 91.8% |
| `/en/products` | 180.6 KB | — | 82.2% |
| `/en/settings` | 181.8 KB | — | 90.0% |
| `/en/team` | 180.6 KB | — | 81.8% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 182.3 KB | — | 64.4% |
| `/fr/about` | 181.1 KB | — | 77.8% |
| `/fr/blog` | 180.7 KB | — | 77.6% |
| `/fr/careers` | 181.1 KB | — | 75.6% |
| `/fr/contact` | 180.4 KB | — | 97.8% |
| `/fr/faq` | 180.9 KB | — | 81.8% |
| `/fr/pricing` | 180.6 KB | — | 91.8% |
| `/fr/products` | 180.6 KB | — | 82.2% |
| `/fr/settings` | 181.8 KB | — | 90.0% |
| `/fr/team` | 180.6 KB | — | 81.8% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-gt-react-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 22.7 ms | 16.7 ms | 1.4 ms |
| `fr` | 21.0 ms | 16.4 ms | 1.3 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 159.6 KB | — | 0.0% |
| `/en/about` | 158.3 KB | — | 0.0% |
| `/en/blog` | 157.9 KB | — | 0.0% |
| `/en/careers` | 158.4 KB | — | 0.0% |
| `/en/contact` | 157.7 KB | — | 0.0% |
| `/en/faq` | 158.1 KB | — | 0.0% |
| `/en/pricing` | 157.8 KB | — | 0.0% |
| `/en/products` | 157.8 KB | — | 0.0% |
| `/en/settings` | 159.1 KB | — | 0.0% |
| `/en/team` | 157.8 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 159.6 KB | — | 0.0% |
| `/fr/about` | 158.3 KB | — | 0.0% |
| `/fr/blog` | 157.9 KB | — | 0.0% |
| `/fr/careers` | 158.4 KB | — | 0.0% |
| `/fr/contact` | 157.7 KB | — | 0.0% |
| `/fr/faq` | 158.1 KB | — | 0.0% |
| `/fr/pricing` | 157.8 KB | — | 0.0% |
| `/fr/products` | 157.8 KB | — | 0.0% |
| `/fr/settings` | 159.1 KB | — | 0.0% |
| `/fr/team` | 157.8 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-gt-react-app/bundle/rollup-visualizer.html)

</details>

---

## intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 9.5.11 | 4.5 KB | 13.4 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 134.3 KB | 49.7% | 0.0% | 7.6 KB | 3.2 ms | — | 14.2 ms | 9.4 ms |
| Dynamic | ✅ | 126.8 KB | 0.0% | 0.0% | 5.8 KB | 5.2 ms | — | 14.8 ms | 10.2 ms |
| Scoped Static | ↳ Static | 134.3 KB | 49.7% | 0.0% | 7.6 KB | 3.2 ms | — | 14.2 ms | 9.4 ms |
| Scoped Dynamic | ✅ | 126.8 KB | 0.0% | 0.0% | 5.8 KB | 6.0 ms | — | 14.7 ms | 11.5 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 146.0 KB | 50.0% | 0.0% |
| `/en/about` | 138.7 KB | 57.1% | 0.0% |
| `/en/blog` | 133.0 KB | 50.0% | 0.0% |
| `/en/careers` | 133.9 KB | 53.3% | 0.0% |
| `/en/contact` | 128.8 KB | 55.6% | 0.0% |
| `/en/faq` | 136.7 KB | 48.0% | 0.0% |
| `/en/pricing` | 130.2 KB | 61.1% | 0.0% |
| `/en/products` | 131.8 KB | 54.2% | 0.0% |
| `/en/settings` | 131.7 KB | 55.6% | 0.0% |
| `/en/team` | 132.3 KB | 51.9% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 146.0 KB | 50.0% | 0.0% |
| `/fr/about` | 138.7 KB | 42.9% | 0.0% |
| `/fr/blog` | 133.0 KB | 50.0% | 0.0% |
| `/fr/careers` | 133.9 KB | 46.7% | 0.0% |
| `/fr/contact` | 128.8 KB | 44.4% | 0.0% |
| `/fr/faq` | 136.7 KB | 52.0% | 0.0% |
| `/fr/pricing` | 130.2 KB | 33.3% | 0.0% |
| `/fr/products` | 131.8 KB | 45.8% | 0.0% |
| `/fr/settings` | 131.7 KB | 44.4% | 0.0% |
| `/fr/team` | 132.3 KB | 48.1% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.4 ms | 2.4 ms | 7.2 ms | 0.0 ms |
| `fr` | 3.0 ms | 2.3 ms | 5.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.3 ms | 9.5 ms | 1.6 ms |
| `fr` | 14.0 ms | 9.3 ms | 1.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 128.3 KB | 0.0% | 0.0% |
| `/en/about` | 126.4 KB | 0.0% | 0.0% |
| `/en/blog` | 126.1 KB | 0.0% | 0.0% |
| `/en/careers` | 127.0 KB | 0.0% | 0.0% |
| `/en/contact` | 125.7 KB | 0.0% | 0.0% |
| `/en/faq` | 126.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 125.9 KB | 0.0% | 0.0% |
| `/en/products` | 125.9 KB | 0.0% | 0.0% |
| `/en/settings` | 128.9 KB | 0.0% | 0.0% |
| `/en/team` | 125.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 128.8 KB | 0.0% | 0.0% |
| `/fr/about` | 126.7 KB | 0.0% | 0.0% |
| `/fr/blog` | 126.2 KB | 0.0% | 0.0% |
| `/fr/careers` | 127.3 KB | 0.0% | 0.0% |
| `/fr/contact` | 125.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 126.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 126.1 KB | 0.0% | 0.0% |
| `/fr/products` | 126.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 129.1 KB | 0.0% | 0.0% |
| `/fr/team` | 126.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 5.6 ms | 4.1 ms | 8.5 ms | 0.0 ms |
| `fr` | 4.9 ms | 3.6 ms | 7.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.3 ms | 10.3 ms | 1.6 ms |
| `fr` | 14.2 ms | 10.2 ms | 1.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 146.0 KB | 50.0% | 0.0% |
| `/en/about` | 138.7 KB | 57.1% | 0.0% |
| `/en/blog` | 133.0 KB | 50.0% | 0.0% |
| `/en/careers` | 133.9 KB | 53.3% | 0.0% |
| `/en/contact` | 128.8 KB | 55.6% | 0.0% |
| `/en/faq` | 136.7 KB | 48.0% | 0.0% |
| `/en/pricing` | 130.2 KB | 61.1% | 0.0% |
| `/en/products` | 131.8 KB | 54.2% | 0.0% |
| `/en/settings` | 131.7 KB | 55.6% | 0.0% |
| `/en/team` | 132.3 KB | 51.9% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 146.0 KB | 50.0% | 0.0% |
| `/fr/about` | 138.7 KB | 42.9% | 0.0% |
| `/fr/blog` | 133.0 KB | 50.0% | 0.0% |
| `/fr/careers` | 133.9 KB | 46.7% | 0.0% |
| `/fr/contact` | 128.8 KB | 44.4% | 0.0% |
| `/fr/faq` | 136.7 KB | 52.0% | 0.0% |
| `/fr/pricing` | 130.2 KB | 33.3% | 0.0% |
| `/fr/products` | 131.8 KB | 45.8% | 0.0% |
| `/fr/settings` | 131.7 KB | 44.4% | 0.0% |
| `/fr/team` | 132.3 KB | 48.1% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.4 ms | 2.4 ms | 7.2 ms | 0.0 ms |
| `fr` | 3.0 ms | 2.3 ms | 5.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.3 ms | 9.5 ms | 1.6 ms |
| `fr` | 14.0 ms | 9.3 ms | 1.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 128.3 KB | 0.0% | 0.0% |
| `/en/about` | 126.4 KB | 0.0% | 0.0% |
| `/en/blog` | 126.1 KB | 0.0% | 0.0% |
| `/en/careers` | 127.0 KB | 0.0% | 0.0% |
| `/en/contact` | 125.8 KB | 0.0% | 0.0% |
| `/en/faq` | 126.3 KB | 0.0% | 0.0% |
| `/en/pricing` | 125.9 KB | 0.0% | 0.0% |
| `/en/products` | 125.9 KB | 0.0% | 0.0% |
| `/en/settings` | 129.0 KB | 0.0% | 0.0% |
| `/en/team` | 125.9 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 128.8 KB | 0.0% | 0.0% |
| `/fr/about` | 126.7 KB | 0.0% | 0.0% |
| `/fr/blog` | 126.2 KB | 0.0% | 0.0% |
| `/fr/careers` | 127.3 KB | 0.0% | 0.0% |
| `/fr/contact` | 125.9 KB | 0.0% | 0.0% |
| `/fr/faq` | 126.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 126.1 KB | 0.0% | 0.0% |
| `/fr/products` | 126.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 129.1 KB | 0.0% | 0.0% |
| `/fr/team` | 126.1 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-intlayer-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 6.2 ms | 3.7 ms | 14.2 ms | 0.0 ms |
| `fr` | 5.7 ms | 3.9 ms | 9.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 15.2 ms | 12.7 ms | 1.9 ms |
| `fr` | 14.2 ms | 10.4 ms | 1.5 ms |

</details>

---

## lingo.dev

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 0.138.7 | 7.5 KB | 19.5 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 120.8 KB | — | 0.0% | — | 3.7 ms | — | 13.7 ms | 10.0 ms |
| Dynamic | ↳ Static | 120.8 KB | — | 0.0% | — | 3.7 ms | — | 13.7 ms | 10.0 ms |
| Scoped Static | ↳ Static | 120.8 KB | — | 0.0% | — | 3.7 ms | — | 13.7 ms | 10.0 ms |
| Scoped Dynamic | ↳ Static | 120.8 KB | — | 0.0% | — | 3.7 ms | — | 13.7 ms | 10.0 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 122.4 KB | — | 0.0% |
| `/en/about` | 120.8 KB | — | 0.0% |
| `/en/blog` | 120.5 KB | — | 0.0% |
| `/en/careers` | 120.9 KB | — | 0.0% |
| `/en/contact` | 120.1 KB | — | 0.0% |
| `/en/faq` | 120.7 KB | — | 0.0% |
| `/en/pricing` | 120.4 KB | — | 0.0% |
| `/en/products` | 120.3 KB | — | 0.0% |
| `/en/settings` | 121.7 KB | — | 0.0% |
| `/en/team` | 120.4 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 122.4 KB | — | 0.0% |
| `/fr/about` | 120.8 KB | — | 0.0% |
| `/fr/blog` | 120.5 KB | — | 0.0% |
| `/fr/careers` | 120.9 KB | — | 0.0% |
| `/fr/contact` | 120.1 KB | — | 0.0% |
| `/fr/faq` | 120.7 KB | — | 0.0% |
| `/fr/pricing` | 120.4 KB | — | 0.0% |
| `/fr/products` | 120.3 KB | — | 0.0% |
| `/fr/settings` | 121.7 KB | — | 0.0% |
| `/fr/team` | 120.4 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.8 ms | 2.7 ms | 6.9 ms | 0.0 ms |
| `fr` | 3.5 ms | 2.8 ms | 5.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.5 ms | 10.2 ms | 2.2 ms |
| `fr` | 12.9 ms | 9.9 ms | 2.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 122.4 KB | — | 0.0% |
| `/en/about` | 120.8 KB | — | 0.0% |
| `/en/blog` | 120.5 KB | — | 0.0% |
| `/en/careers` | 120.9 KB | — | 0.0% |
| `/en/contact` | 120.1 KB | — | 0.0% |
| `/en/faq` | 120.7 KB | — | 0.0% |
| `/en/pricing` | 120.4 KB | — | 0.0% |
| `/en/products` | 120.3 KB | — | 0.0% |
| `/en/settings` | 121.7 KB | — | 0.0% |
| `/en/team` | 120.4 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 122.4 KB | — | 0.0% |
| `/fr/about` | 120.8 KB | — | 0.0% |
| `/fr/blog` | 120.5 KB | — | 0.0% |
| `/fr/careers` | 120.9 KB | — | 0.0% |
| `/fr/contact` | 120.1 KB | — | 0.0% |
| `/fr/faq` | 120.7 KB | — | 0.0% |
| `/fr/pricing` | 120.4 KB | — | 0.0% |
| `/fr/products` | 120.3 KB | — | 0.0% |
| `/fr/settings` | 121.7 KB | — | 0.0% |
| `/fr/team` | 120.4 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.8 ms | 2.7 ms | 6.9 ms | 0.0 ms |
| `fr` | 3.5 ms | 2.8 ms | 5.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.5 ms | 10.2 ms | 2.2 ms |
| `fr` | 12.9 ms | 9.9 ms | 2.1 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 122.4 KB | — | 0.0% |
| `/en/about` | 120.8 KB | — | 0.0% |
| `/en/blog` | 120.5 KB | — | 0.0% |
| `/en/careers` | 120.9 KB | — | 0.0% |
| `/en/contact` | 120.1 KB | — | 0.0% |
| `/en/faq` | 120.7 KB | — | 0.0% |
| `/en/pricing` | 120.4 KB | — | 0.0% |
| `/en/products` | 120.3 KB | — | 0.0% |
| `/en/settings` | 121.7 KB | — | 0.0% |
| `/en/team` | 120.4 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 122.4 KB | — | 0.0% |
| `/fr/about` | 120.8 KB | — | 0.0% |
| `/fr/blog` | 120.5 KB | — | 0.0% |
| `/fr/careers` | 120.9 KB | — | 0.0% |
| `/fr/contact` | 120.1 KB | — | 0.0% |
| `/fr/faq` | 120.7 KB | — | 0.0% |
| `/fr/pricing` | 120.4 KB | — | 0.0% |
| `/fr/products` | 120.3 KB | — | 0.0% |
| `/fr/settings` | 121.7 KB | — | 0.0% |
| `/fr/team` | 120.4 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.8 ms | 2.7 ms | 6.9 ms | 0.0 ms |
| `fr` | 3.5 ms | 2.8 ms | 5.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.5 ms | 10.2 ms | 2.2 ms |
| `fr` | 12.9 ms | 9.9 ms | 2.1 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 122.4 KB | — | 0.0% |
| `/en/about` | 120.8 KB | — | 0.0% |
| `/en/blog` | 120.5 KB | — | 0.0% |
| `/en/careers` | 120.9 KB | — | 0.0% |
| `/en/contact` | 120.1 KB | — | 0.0% |
| `/en/faq` | 120.7 KB | — | 0.0% |
| `/en/pricing` | 120.4 KB | — | 0.0% |
| `/en/products` | 120.3 KB | — | 0.0% |
| `/en/settings` | 121.7 KB | — | 0.0% |
| `/en/team` | 120.4 KB | — | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 122.4 KB | — | 0.0% |
| `/fr/about` | 120.8 KB | — | 0.0% |
| `/fr/blog` | 120.5 KB | — | 0.0% |
| `/fr/careers` | 120.9 KB | — | 0.0% |
| `/fr/contact` | 120.1 KB | — | 0.0% |
| `/fr/faq` | 120.7 KB | — | 0.0% |
| `/fr/pricing` | 120.4 KB | — | 0.0% |
| `/fr/products` | 120.3 KB | — | 0.0% |
| `/fr/settings` | 121.7 KB | — | 0.0% |
| `/fr/team` | 120.4 KB | — | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-lingo.dev-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 3.8 ms | 2.7 ms | 6.9 ms | 0.0 ms |
| `fr` | 3.5 ms | 2.8 ms | 5.8 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.5 ms | 10.2 ms | 2.2 ms |
| `fr` | 12.9 ms | 9.9 ms | 2.1 ms |

</details>

---

## lingui

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 6.6.0 | 3.3 KB | 9.0 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 182.3 KB | 50.0% | 90.0% | 64.3 KB | 3.9 ms | — | 11.7 ms | 19.9 ms |
| Dynamic | ✅ | 124.3 KB | 9.3% | 0.0% | 77.4 KB | 5.9 ms | — | 22.6 ms | 28.0 ms |
| Scoped Static | ✅ | 125.4 KB | 4.0% | 0.0% | 139.8 KB | 7.1 ms | — | 21.0 ms | 33.9 ms |
| Scoped Dynamic | ✅ | 124.7 KB | 8.6% | 0.0% | 77.4 KB | 42.1 ms | 4.5 ms | 21.9 ms | 32.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 184.0 KB | 54.4% | 80.0% |
| `/en/about` | 182.1 KB | 54.4% | 87.5% |
| `/en/blog` | 181.7 KB | 54.4% | 83.8% |
| `/en/careers` | 182.2 KB | 54.4% | 95.0% |
| `/en/contact` | 181.6 KB | 54.4% | 98.8% |
| `/en/faq` | 182.3 KB | 54.4% | 87.5% |
| `/en/pricing` | 182.0 KB | 54.4% | 95.0% |
| `/en/products` | 181.9 KB | 54.4% | 90.0% |
| `/en/settings` | 183.2 KB | 54.4% | 95.0% |
| `/en/team` | 181.9 KB | 54.4% | 87.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 184.0 KB | 45.6% | 83.3% |
| `/fr/about` | 182.1 KB | 45.6% | 85.4% |
| `/fr/blog` | 181.7 KB | 45.6% | 86.5% |
| `/fr/careers` | 182.2 KB | 45.6% | 93.8% |
| `/fr/contact` | 181.6 KB | 45.6% | 97.9% |
| `/fr/faq` | 182.3 KB | 45.6% | 90.6% |
| `/fr/pricing` | 182.0 KB | 45.6% | 90.6% |
| `/fr/products` | 181.9 KB | 45.6% | 89.6% |
| `/fr/settings` | 183.2 KB | 45.6% | 93.8% |
| `/fr/team` | 181.9 KB | 45.6% | 88.5% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.0 ms | 2.4 ms | 9.3 ms | 0.0 ms |
| `fr` | 3.8 ms | 2.6 ms | 7.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.2 ms | 22.4 ms | 6.8 ms |
| `fr` | 11.1 ms | 17.5 ms | 4.1 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 124.8 KB | 0.0% | 0.0% |
| `/en/about` | 123.7 KB | 0.0% | 0.0% |
| `/en/blog` | 123.8 KB | 0.0% | 0.0% |
| `/en/careers` | 124.6 KB | 0.0% | 0.0% |
| `/en/contact` | 123.8 KB | 0.0% | 0.0% |
| `/en/faq` | 124.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 124.1 KB | 0.0% | 0.0% |
| `/en/products` | 124.0 KB | 0.0% | 0.0% |
| `/en/settings` | 125.5 KB | 0.0% | 0.0% |
| `/en/team` | 124.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 124.8 KB | 0.0% | 0.0% |
| `/fr/about` | 123.7 KB | 0.0% | 0.0% |
| `/fr/blog` | 123.8 KB | 0.0% | 0.0% |
| `/fr/careers` | 124.6 KB | 37.5% | 0.0% |
| `/fr/contact` | 123.8 KB | 0.0% | 0.0% |
| `/fr/faq` | 124.5 KB | 45.5% | 0.0% |
| `/fr/pricing` | 124.1 KB | 7.1% | 0.0% |
| `/fr/products` | 124.0 KB | 20.0% | 0.0% |
| `/fr/settings` | 125.5 KB | 33.3% | 0.0% |
| `/fr/team` | 124.2 KB | 41.7% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 5.9 ms | 4.5 ms | 9.6 ms | 0.0 ms |
| `fr` | 5.8 ms | 4.5 ms | 9.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.6 ms | 20.6 ms | 5.8 ms |
| `fr` | 31.5 ms | 35.4 ms | 3.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 126.0 KB | 0.0% | 0.0% |
| `/en/about` | 124.9 KB | 0.0% | 0.0% |
| `/en/blog` | 125.0 KB | 0.0% | 0.0% |
| `/en/careers` | 125.4 KB | 0.0% | 0.0% |
| `/en/contact` | 125.0 KB | 0.0% | 0.0% |
| `/en/faq` | 125.6 KB | 0.0% | 0.0% |
| `/en/pricing` | 125.2 KB | 0.0% | 0.0% |
| `/en/products` | 125.1 KB | 0.0% | 0.0% |
| `/en/settings` | 126.3 KB | 0.0% | 0.0% |
| `/en/team` | 125.2 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 126.0 KB | 0.0% | 0.0% |
| `/fr/about` | 124.9 KB | 0.0% | 0.0% |
| `/fr/blog` | 125.0 KB | 0.0% | 0.0% |
| `/fr/careers` | 125.4 KB | 25.0% | 0.0% |
| `/fr/contact` | 125.0 KB | 0.0% | 0.0% |
| `/fr/faq` | 125.6 KB | 42.1% | 0.0% |
| `/fr/pricing` | 125.2 KB | 13.3% | 0.0% |
| `/fr/products` | 125.1 KB | 0.0% | 0.0% |
| `/fr/settings` | 126.3 KB | 0.0% | 0.0% |
| `/fr/team` | 125.2 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.1 ms | 5.1 ms | 12.1 ms | 0.0 ms |
| `fr` | 7.1 ms | 5.6 ms | 11.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 22.2 ms | 38.3 ms | 7.8 ms |
| `fr` | 19.7 ms | 29.5 ms | 5.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 125.3 KB | 0.0% | 0.0% |
| `/en/about` | 124.2 KB | 0.0% | 0.0% |
| `/en/blog` | 124.3 KB | 0.0% | 0.0% |
| `/en/careers` | 124.7 KB | 0.0% | 0.0% |
| `/en/contact` | 124.3 KB | 0.0% | 0.0% |
| `/en/faq` | 125.0 KB | 0.0% | 0.0% |
| `/en/pricing` | 124.5 KB | 0.0% | 0.0% |
| `/en/products` | 124.5 KB | 0.0% | 0.0% |
| `/en/settings` | 126.0 KB | 0.0% | 0.0% |
| `/en/team` | 124.7 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 125.3 KB | 0.0% | 0.0% |
| `/fr/about` | 124.2 KB | 0.0% | 0.0% |
| `/fr/blog` | 124.3 KB | 0.0% | 0.0% |
| `/fr/careers` | 124.7 KB | 25.0% | 0.0% |
| `/fr/contact` | 124.3 KB | 0.0% | 0.0% |
| `/fr/faq` | 125.0 KB | 45.5% | 0.0% |
| `/fr/pricing` | 124.5 KB | 7.1% | 0.0% |
| `/fr/products` | 124.5 KB | 20.0% | 0.0% |
| `/fr/settings` | 126.0 KB | 33.3% | 0.0% |
| `/fr/team` | 124.7 KB | 41.7% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-lingui-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 32.9 ms | 13.3 ms | 80.7 ms | 4.3 ms |
| `fr` | 51.3 ms | 28.0 ms | 84.4 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.7 ms | 33.9 ms | 7.2 ms |
| `fr` | 23.1 ms | 31.8 ms | 5.3 ms |

</details>

---

## paraglide

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 2.15.1 | 1.6 KB | 3.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 133.8 KB | 49.7% | 0.0% | 5.4 KB | 4.3 ms | — | 22.1 ms | 15.2 ms |
| Dynamic | ↳ Static | 133.8 KB | 49.7% | 0.0% | 5.4 KB | 4.3 ms | — | 22.1 ms | 15.2 ms |
| Scoped Static | ↳ Static | 133.8 KB | 49.7% | 0.0% | 5.4 KB | 4.3 ms | — | 22.1 ms | 15.2 ms |
| Scoped Dynamic | ↳ Static | 133.8 KB | 49.7% | 0.0% | 5.4 KB | 4.3 ms | — | 22.1 ms | 15.2 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 144.5 KB | 50.0% | 0.0% |
| `/en/about` | 138.2 KB | 57.1% | 0.0% |
| `/en/blog` | 132.4 KB | 50.0% | 0.0% |
| `/en/careers` | 133.9 KB | 53.6% | 0.0% |
| `/en/contact` | 128.3 KB | 55.6% | 0.0% |
| `/en/faq` | 136.3 KB | 48.0% | 0.0% |
| `/en/pricing` | 130.2 KB | 63.2% | 0.0% |
| `/en/products` | 131.0 KB | 54.2% | 0.0% |
| `/en/settings` | 131.7 KB | 52.6% | 0.0% |
| `/en/team` | 131.6 KB | 51.9% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 144.5 KB | 50.0% | 0.0% |
| `/fr/about` | 138.2 KB | 42.9% | 0.0% |
| `/fr/blog` | 132.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 133.9 KB | 46.4% | 0.0% |
| `/fr/contact` | 128.3 KB | 44.4% | 0.0% |
| `/fr/faq` | 136.3 KB | 52.0% | 0.0% |
| `/fr/pricing` | 130.2 KB | 31.6% | 0.0% |
| `/fr/products` | 131.0 KB | 45.8% | 0.0% |
| `/fr/settings` | 131.7 KB | 47.4% | 0.0% |
| `/fr/team` | 131.6 KB | 48.1% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-paraglide-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.4 ms | 3.3 ms | 8.4 ms | 0.0 ms |
| `fr` | 4.3 ms | 3.3 ms | 7.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 28.9 ms | 19.9 ms | 2.6 ms |
| `fr` | 15.2 ms | 10.6 ms | 2.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 144.5 KB | 50.0% | 0.0% |
| `/en/about` | 138.2 KB | 57.1% | 0.0% |
| `/en/blog` | 132.4 KB | 50.0% | 0.0% |
| `/en/careers` | 133.9 KB | 53.6% | 0.0% |
| `/en/contact` | 128.3 KB | 55.6% | 0.0% |
| `/en/faq` | 136.3 KB | 48.0% | 0.0% |
| `/en/pricing` | 130.2 KB | 63.2% | 0.0% |
| `/en/products` | 131.0 KB | 54.2% | 0.0% |
| `/en/settings` | 131.7 KB | 52.6% | 0.0% |
| `/en/team` | 131.6 KB | 51.9% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 144.5 KB | 50.0% | 0.0% |
| `/fr/about` | 138.2 KB | 42.9% | 0.0% |
| `/fr/blog` | 132.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 133.9 KB | 46.4% | 0.0% |
| `/fr/contact` | 128.3 KB | 44.4% | 0.0% |
| `/fr/faq` | 136.3 KB | 52.0% | 0.0% |
| `/fr/pricing` | 130.2 KB | 31.6% | 0.0% |
| `/fr/products` | 131.0 KB | 45.8% | 0.0% |
| `/fr/settings` | 131.7 KB | 47.4% | 0.0% |
| `/fr/team` | 131.6 KB | 48.1% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-paraglide-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.4 ms | 3.3 ms | 8.4 ms | 0.0 ms |
| `fr` | 4.3 ms | 3.3 ms | 7.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 28.9 ms | 19.9 ms | 2.6 ms |
| `fr` | 15.2 ms | 10.6 ms | 2.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 144.5 KB | 50.0% | 0.0% |
| `/en/about` | 138.2 KB | 57.1% | 0.0% |
| `/en/blog` | 132.4 KB | 50.0% | 0.0% |
| `/en/careers` | 133.9 KB | 53.6% | 0.0% |
| `/en/contact` | 128.3 KB | 55.6% | 0.0% |
| `/en/faq` | 136.3 KB | 48.0% | 0.0% |
| `/en/pricing` | 130.2 KB | 63.2% | 0.0% |
| `/en/products` | 131.0 KB | 54.2% | 0.0% |
| `/en/settings` | 131.7 KB | 52.6% | 0.0% |
| `/en/team` | 131.6 KB | 51.9% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 144.5 KB | 50.0% | 0.0% |
| `/fr/about` | 138.2 KB | 42.9% | 0.0% |
| `/fr/blog` | 132.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 133.9 KB | 46.4% | 0.0% |
| `/fr/contact` | 128.3 KB | 44.4% | 0.0% |
| `/fr/faq` | 136.3 KB | 52.0% | 0.0% |
| `/fr/pricing` | 130.2 KB | 31.6% | 0.0% |
| `/fr/products` | 131.0 KB | 45.8% | 0.0% |
| `/fr/settings` | 131.7 KB | 47.4% | 0.0% |
| `/fr/team` | 131.6 KB | 48.1% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-paraglide-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.4 ms | 3.3 ms | 8.4 ms | 0.0 ms |
| `fr` | 4.3 ms | 3.3 ms | 7.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 28.9 ms | 19.9 ms | 2.6 ms |
| `fr` | 15.2 ms | 10.6 ms | 2.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 144.5 KB | 50.0% | 0.0% |
| `/en/about` | 138.2 KB | 57.1% | 0.0% |
| `/en/blog` | 132.4 KB | 50.0% | 0.0% |
| `/en/careers` | 133.9 KB | 53.6% | 0.0% |
| `/en/contact` | 128.3 KB | 55.6% | 0.0% |
| `/en/faq` | 136.3 KB | 48.0% | 0.0% |
| `/en/pricing` | 130.2 KB | 63.2% | 0.0% |
| `/en/products` | 131.0 KB | 54.2% | 0.0% |
| `/en/settings` | 131.7 KB | 52.6% | 0.0% |
| `/en/team` | 131.6 KB | 51.9% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 144.5 KB | 50.0% | 0.0% |
| `/fr/about` | 138.2 KB | 42.9% | 0.0% |
| `/fr/blog` | 132.4 KB | 50.0% | 0.0% |
| `/fr/careers` | 133.9 KB | 46.4% | 0.0% |
| `/fr/contact` | 128.3 KB | 44.4% | 0.0% |
| `/fr/faq` | 136.3 KB | 52.0% | 0.0% |
| `/fr/pricing` | 130.2 KB | 31.6% | 0.0% |
| `/fr/products` | 131.0 KB | 45.8% | 0.0% |
| `/fr/settings` | 131.7 KB | 47.4% | 0.0% |
| `/fr/team` | 131.6 KB | 48.1% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-paraglide-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.4 ms | 3.3 ms | 8.4 ms | 0.0 ms |
| `fr` | 4.3 ms | 3.3 ms | 7.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 28.9 ms | 19.9 ms | 2.6 ms |
| `fr` | 15.2 ms | 10.6 ms | 2.2 ms |

</details>

---

## react-i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 17.0.13 | 17.9 KB | 60.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 193.8 KB | 50.0% | 89.7% | 78.0 KB | 12.9 ms | 6.4 ms | 26.2 ms | 85.1 ms |
| Dynamic | ✅ | 145.4 KB | 23.0% | 89.7% | 26.0 KB | 123.1 ms | 4.0 ms | 15.5 ms | 32.9 ms |
| Scoped Static | ✅ | 199.7 KB | 50.0% | 89.8% | 85.0 KB | 185.1 ms | 8.3 ms | 16.8 ms | 25.2 ms |
| Scoped Dynamic | ✅ | 135.9 KB | 0.0% | 0.0% | 27.0 KB | 17.6 ms | 4.6 ms | 17.6 ms | 11.3 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 194.5 KB | 53.9% | 81.4% |
| `/en/about` | 193.4 KB | 53.9% | 88.4% |
| `/en/blog` | 193.5 KB | 53.9% | 84.9% |
| `/en/careers` | 194.0 KB | 53.9% | 87.2% |
| `/en/contact` | 193.5 KB | 53.9% | 97.7% |
| `/en/faq` | 193.4 KB | 53.9% | 88.4% |
| `/en/pricing` | 193.6 KB | 53.6% | 95.4% |
| `/en/products` | 193.5 KB | 53.9% | 90.7% |
| `/en/settings` | 195.0 KB | 53.9% | 94.3% |
| `/en/team` | 193.5 KB | 53.9% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 194.5 KB | 46.1% | 84.2% |
| `/fr/about` | 193.4 KB | 46.1% | 86.1% |
| `/fr/blog` | 193.5 KB | 46.1% | 87.1% |
| `/fr/careers` | 194.0 KB | 46.1% | 87.1% |
| `/fr/contact` | 193.5 KB | 46.1% | 98.0% |
| `/fr/faq` | 193.4 KB | 46.1% | 91.1% |
| `/fr/pricing` | 193.6 KB | 45.9% | 91.2% |
| `/fr/products` | 193.5 KB | 46.1% | 90.1% |
| `/fr/settings` | 195.0 KB | 46.1% | 93.1% |
| `/fr/team` | 193.5 KB | 46.1% | 89.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.7 ms | 3.4 ms | 7.8 ms | 0.0 ms |
| `fr` | 21.1 ms | 10.6 ms | 53.7 ms | 6.4 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.3 ms | 125.1 ms | 7.8 ms |
| `fr` | 31.2 ms | 45.0 ms | 5.6 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 141.9 KB | 0.0% | 81.4% |
| `/en/about` | 140.8 KB | 0.0% | 88.4% |
| `/en/blog` | 140.9 KB | 0.0% | 84.9% |
| `/en/careers` | 141.4 KB | 0.0% | 87.2% |
| `/en/contact` | 140.9 KB | 0.0% | 97.7% |
| `/en/faq` | 140.8 KB | 0.0% | 88.4% |
| `/en/pricing` | 141.1 KB | 0.0% | 95.4% |
| `/en/products` | 140.9 KB | 0.0% | 90.7% |
| `/en/settings` | 142.4 KB | 0.0% | 94.3% |
| `/en/team` | 140.9 KB | 0.0% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 150.3 KB | 46.1% | 84.2% |
| `/fr/about` | 149.2 KB | 46.1% | 86.1% |
| `/fr/blog` | 149.3 KB | 46.1% | 87.1% |
| `/fr/careers` | 149.7 KB | 46.1% | 87.1% |
| `/fr/contact` | 149.3 KB | 46.1% | 98.0% |
| `/fr/faq` | 149.2 KB | 46.1% | 91.1% |
| `/fr/pricing` | 149.4 KB | 45.9% | 91.2% |
| `/fr/products` | 149.2 KB | 46.1% | 90.1% |
| `/fr/settings` | 150.7 KB | 46.1% | 93.1% |
| `/fr/team` | 149.2 KB | 46.1% | 89.1% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 220.3 ms | 201.2 ms | 248.0 ms | 3.8 ms |
| `fr` | 25.9 ms | 10.1 ms | 84.5 ms | 4.2 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.1 ms | 38.2 ms | 7.1 ms |
| `fr` | 14.9 ms | 27.7 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 200.4 KB | 53.9% | 81.8% |
| `/en/about` | 199.3 KB | 53.9% | 88.6% |
| `/en/blog` | 199.4 KB | 53.9% | 85.2% |
| `/en/careers` | 199.9 KB | 53.9% | 87.5% |
| `/en/contact` | 199.4 KB | 53.9% | 97.8% |
| `/en/faq` | 199.3 KB | 53.9% | 88.6% |
| `/en/pricing` | 199.5 KB | 53.9% | 95.5% |
| `/en/products` | 199.3 KB | 53.9% | 89.8% |
| `/en/settings` | 200.8 KB | 53.9% | 94.4% |
| `/en/team` | 199.3 KB | 53.9% | 88.6% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 200.4 KB | 46.1% | 84.5% |
| `/fr/about` | 199.3 KB | 46.1% | 86.4% |
| `/fr/blog` | 199.4 KB | 46.1% | 87.4% |
| `/fr/careers` | 199.9 KB | 46.1% | 87.4% |
| `/fr/contact` | 199.4 KB | 46.1% | 98.1% |
| `/fr/faq` | 199.3 KB | 46.1% | 91.3% |
| `/fr/pricing` | 199.5 KB | 46.1% | 91.3% |
| `/fr/products` | 199.3 KB | 46.1% | 89.3% |
| `/fr/settings` | 200.8 KB | 46.1% | 93.3% |
| `/fr/team` | 199.3 KB | 46.1% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 224.9 ms | 205.9 ms | 239.2 ms | 13.0 ms |
| `fr` | 145.4 ms | 111.7 ms | 212.7 ms | 3.6 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.1 ms | 25.0 ms | 4.7 ms |
| `fr` | 16.6 ms | 25.3 ms | 4.6 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 136.7 KB | 0.0% | 0.0% |
| `/en/about` | 135.6 KB | 0.0% | 0.0% |
| `/en/blog` | 135.6 KB | 0.0% | 0.0% |
| `/en/careers` | 136.1 KB | 0.0% | 0.0% |
| `/en/contact` | 135.6 KB | 0.0% | 0.0% |
| `/en/faq` | 135.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 135.7 KB | 0.0% | 0.0% |
| `/en/products` | 135.6 KB | 0.0% | 0.0% |
| `/en/settings` | 137.1 KB | 0.0% | 0.0% |
| `/en/team` | 135.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 136.7 KB | 0.0% | 0.0% |
| `/fr/about` | 135.6 KB | 0.0% | 0.0% |
| `/fr/blog` | 135.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 136.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 135.6 KB | 0.0% | 0.0% |
| `/fr/faq` | 135.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 135.7 KB | 0.0% | 0.0% |
| `/fr/products` | 135.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 137.1 KB | 0.0% | 0.0% |
| `/fr/team` | 135.6 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-react-i18next-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.9 ms | 11.8 ms | 35.2 ms | 4.4 ms |
| `fr` | 18.3 ms | 12.5 ms | 39.5 ms | 4.9 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.6 ms | 12.3 ms | 2.5 ms |
| `fr` | 15.6 ms | 10.2 ms | 2.1 ms |

</details>

---

## react-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 10.1.26 | 15.1 KB | 60.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 196.5 KB | 50.0% | 89.7% | 81.3 KB | 6.9 ms | 2.0 ms | 18.7 ms | 24.9 ms |
| Dynamic | ✅ | 130.9 KB | 0.0% | 89.7% | 23.3 KB | 11.6 ms | 1.5 ms | 18.9 ms | 24.9 ms |
| Scoped Static | ✅ | 135.1 KB | 0.0% | 0.0% | 91.0 KB | 8.6 ms | — | 17.1 ms | 32.2 ms |
| Scoped Dynamic | ✅ | 135.1 KB | 0.0% | 0.0% | 24.4 KB | 10.3 ms | — | 20.9 ms | 33.4 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 197.1 KB | 54.1% | 81.4% |
| `/en/about` | 196.2 KB | 54.1% | 88.4% |
| `/en/blog` | 196.2 KB | 54.1% | 84.9% |
| `/en/careers` | 196.7 KB | 54.1% | 86.4% |
| `/en/contact` | 196.2 KB | 54.1% | 98.8% |
| `/en/faq` | 196.1 KB | 54.1% | 88.4% |
| `/en/pricing` | 196.3 KB | 53.8% | 95.4% |
| `/en/products` | 196.2 KB | 54.1% | 90.7% |
| `/en/settings` | 197.6 KB | 54.1% | 94.2% |
| `/en/team` | 196.2 KB | 54.1% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 197.1 KB | 45.9% | 84.3% |
| `/fr/about` | 196.2 KB | 45.9% | 86.3% |
| `/fr/blog` | 196.2 KB | 45.9% | 87.3% |
| `/fr/careers` | 196.7 KB | 45.9% | 86.5% |
| `/fr/contact` | 196.2 KB | 45.9% | 98.0% |
| `/fr/faq` | 196.1 KB | 45.9% | 91.2% |
| `/fr/pricing` | 196.3 KB | 45.6% | 91.3% |
| `/fr/products` | 196.2 KB | 45.9% | 90.2% |
| `/fr/settings` | 197.6 KB | 45.9% | 93.1% |
| `/fr/team` | 196.2 KB | 45.9% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-react-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 6.7 ms | 3.4 ms | 15.9 ms | 1.8 ms |
| `fr` | 7.1 ms | 3.4 ms | 18.5 ms | 2.2 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.1 ms | 28.9 ms | 8.9 ms |
| `fr` | 17.2 ms | 20.9 ms | 4.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 131.5 KB | 0.0% | 81.4% |
| `/en/about` | 130.6 KB | 0.0% | 88.4% |
| `/en/blog` | 130.7 KB | 0.0% | 84.9% |
| `/en/careers` | 131.1 KB | 0.0% | 86.4% |
| `/en/contact` | 130.6 KB | 0.0% | 98.8% |
| `/en/faq` | 130.6 KB | 0.0% | 88.4% |
| `/en/pricing` | 130.8 KB | 0.0% | 95.4% |
| `/en/products` | 130.6 KB | 0.0% | 90.7% |
| `/en/settings` | 132.1 KB | 0.0% | 94.2% |
| `/en/team` | 130.6 KB | 0.0% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 131.5 KB | 0.0% | 84.3% |
| `/fr/about` | 130.6 KB | 0.0% | 86.3% |
| `/fr/blog` | 130.7 KB | 0.0% | 87.3% |
| `/fr/careers` | 131.1 KB | 0.0% | 86.5% |
| `/fr/contact` | 130.6 KB | 0.0% | 98.0% |
| `/fr/faq` | 130.6 KB | 0.0% | 91.2% |
| `/fr/pricing` | 130.8 KB | 0.0% | 91.3% |
| `/fr/products` | 130.6 KB | 0.0% | 90.2% |
| `/fr/settings` | 132.1 KB | 0.0% | 93.1% |
| `/fr/team` | 130.6 KB | 0.0% | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-react-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 13.3 ms | 5.5 ms | 39.7 ms | 1.5 ms |
| `fr` | 9.8 ms | 5.4 ms | 23.3 ms | 1.4 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.9 ms | 28.2 ms | 9.1 ms |
| `fr` | 17.9 ms | 21.5 ms | 5.4 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 135.7 KB | 0.0% | 0.0% |
| `/en/about` | 134.8 KB | 0.0% | 0.0% |
| `/en/blog` | 134.9 KB | 0.0% | 0.0% |
| `/en/careers` | 135.3 KB | 0.0% | 0.0% |
| `/en/contact` | 134.8 KB | 0.0% | 0.0% |
| `/en/faq` | 134.8 KB | 0.0% | 0.0% |
| `/en/pricing` | 135.0 KB | 0.0% | 0.0% |
| `/en/products` | 134.8 KB | 0.0% | 0.0% |
| `/en/settings` | 136.3 KB | 0.0% | 0.0% |
| `/en/team` | 134.8 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 135.7 KB | 0.0% | 0.0% |
| `/fr/about` | 134.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 134.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 135.3 KB | 0.0% | 0.0% |
| `/fr/contact` | 134.8 KB | 0.0% | 0.0% |
| `/fr/faq` | 134.8 KB | 0.0% | 0.0% |
| `/fr/pricing` | 135.0 KB | 0.0% | 0.0% |
| `/fr/products` | 134.8 KB | 0.0% | 0.0% |
| `/fr/settings` | 136.3 KB | 0.0% | 0.0% |
| `/fr/team` | 134.8 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-react-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 9.2 ms | 6.3 ms | 19.1 ms | 0.0 ms |
| `fr` | 8.1 ms | 6.6 ms | 11.2 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.1 ms | 38.0 ms | 5.1 ms |
| `fr` | 15.1 ms | 26.4 ms | 4.7 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 135.7 KB | 0.0% | 0.0% |
| `/en/about` | 134.8 KB | 0.0% | 0.0% |
| `/en/blog` | 134.9 KB | 0.0% | 0.0% |
| `/en/careers` | 135.3 KB | 0.0% | 0.0% |
| `/en/contact` | 134.8 KB | 0.0% | 0.0% |
| `/en/faq` | 134.8 KB | 0.0% | 0.0% |
| `/en/pricing` | 135.0 KB | 0.0% | 0.0% |
| `/en/products` | 134.8 KB | 0.0% | 0.0% |
| `/en/settings` | 136.3 KB | 0.0% | 0.0% |
| `/en/team` | 134.8 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 135.7 KB | 0.0% | 0.0% |
| `/fr/about` | 134.8 KB | 0.0% | 0.0% |
| `/fr/blog` | 134.9 KB | 0.0% | 0.0% |
| `/fr/careers` | 135.3 KB | 0.0% | 0.0% |
| `/fr/contact` | 134.8 KB | 0.0% | 0.0% |
| `/fr/faq` | 134.8 KB | 0.0% | 0.0% |
| `/fr/pricing` | 135.0 KB | 0.0% | 0.0% |
| `/fr/products` | 134.8 KB | 0.0% | 0.0% |
| `/fr/settings` | 136.3 KB | 0.0% | 0.0% |
| `/fr/team` | 134.8 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-react-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 10.3 ms | 7.0 ms | 16.9 ms | 0.0 ms |
| `fr` | 10.3 ms | 6.6 ms | 19.1 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.0 ms | 36.7 ms | 5.8 ms |
| `fr` | 20.8 ms | 30.1 ms | 5.3 ms |

</details>

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 7.2.0 | 13.8 KB | 43.8 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 193.1 KB | 50.0% | 90.0% | 78.6 KB | 4.0 ms | — | 18.8 ms | 27.8 ms |
| Dynamic | ✅ | 129.6 KB | 0.0% | 90.0% | 21.9 KB | 5.8 ms | — | 15.2 ms | 11.1 ms |
| Scoped Static | ✅ | 251.0 KB | 50.0% | 90.0% | 138.2 KB | 45.0 ms | 5.4 ms | 20.9 ms | 27.9 ms |
| Scoped Dynamic | ✅ | 135.6 KB | 0.0% | 7.1% | 14.1 KB | 15.6 ms | — | 30.6 ms | 13.2 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 193.9 KB | 54.1% | 81.6% |
| `/en/about` | 192.8 KB | 54.1% | 88.5% |
| `/en/blog` | 192.9 KB | 54.1% | 85.1% |
| `/en/careers` | 193.3 KB | 54.1% | 87.4% |
| `/en/contact` | 192.9 KB | 54.1% | 98.9% |
| `/en/faq` | 192.8 KB | 54.1% | 88.5% |
| `/en/pricing` | 193.0 KB | 54.1% | 96.6% |
| `/en/products` | 192.8 KB | 54.1% | 90.8% |
| `/en/settings` | 194.2 KB | 54.1% | 94.3% |
| `/en/team` | 192.8 KB | 54.1% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 193.9 KB | 45.9% | 84.5% |
| `/fr/about` | 192.8 KB | 45.9% | 86.4% |
| `/fr/blog` | 192.9 KB | 45.9% | 87.4% |
| `/fr/careers` | 193.3 KB | 45.9% | 87.4% |
| `/fr/contact` | 192.9 KB | 45.9% | 98.1% |
| `/fr/faq` | 192.8 KB | 45.9% | 91.3% |
| `/fr/pricing` | 193.0 KB | 45.9% | 92.2% |
| `/fr/products` | 192.8 KB | 45.9% | 90.3% |
| `/fr/settings` | 194.2 KB | 45.9% | 93.2% |
| `/fr/team` | 192.8 KB | 45.9% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.2 ms | 3.0 ms | 6.9 ms | 0.0 ms |
| `fr` | 3.9 ms | 2.9 ms | 6.3 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 20.6 ms | 30.7 ms | 8.7 ms |
| `fr` | 17.0 ms | 24.8 ms | 6.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 130.3 KB | 0.0% | 81.6% |
| `/en/about` | 129.2 KB | 0.0% | 88.5% |
| `/en/blog` | 129.3 KB | 0.0% | 85.1% |
| `/en/careers` | 129.7 KB | 0.0% | 87.4% |
| `/en/contact` | 129.3 KB | 0.0% | 98.9% |
| `/en/faq` | 129.2 KB | 0.0% | 88.5% |
| `/en/pricing` | 129.4 KB | 0.0% | 96.6% |
| `/en/products` | 129.2 KB | 0.0% | 90.8% |
| `/en/settings` | 130.7 KB | 0.0% | 94.3% |
| `/en/team` | 129.3 KB | 0.0% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 130.3 KB | 0.0% | 84.5% |
| `/fr/about` | 129.2 KB | 0.0% | 86.4% |
| `/fr/blog` | 129.3 KB | 0.0% | 87.4% |
| `/fr/careers` | 129.7 KB | 0.0% | 87.4% |
| `/fr/contact` | 129.3 KB | 0.0% | 98.1% |
| `/fr/faq` | 129.2 KB | 0.0% | 91.3% |
| `/fr/pricing` | 129.4 KB | 0.0% | 92.2% |
| `/fr/products` | 129.2 KB | 0.0% | 90.3% |
| `/fr/settings` | 130.7 KB | 0.0% | 93.2% |
| `/fr/team` | 129.3 KB | 0.0% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 6.0 ms | 4.4 ms | 9.8 ms | 0.0 ms |
| `fr` | 5.7 ms | 4.3 ms | 9.4 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.2 ms | 11.2 ms | 3.1 ms |
| `fr` | 14.3 ms | 11.0 ms | 3.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 251.7 KB | 54.1% | 81.6% |
| `/en/about` | 250.7 KB | 54.1% | 88.5% |
| `/en/blog` | 250.7 KB | 54.1% | 85.1% |
| `/en/careers` | 251.2 KB | 54.1% | 87.4% |
| `/en/contact` | 250.7 KB | 54.1% | 98.9% |
| `/en/faq` | 250.6 KB | 54.1% | 88.5% |
| `/en/pricing` | 250.8 KB | 54.1% | 96.6% |
| `/en/products` | 250.7 KB | 54.1% | 90.8% |
| `/en/settings` | 252.1 KB | 54.1% | 94.3% |
| `/en/team` | 250.7 KB | 54.1% | 88.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 251.7 KB | 45.9% | 84.5% |
| `/fr/about` | 250.7 KB | 45.9% | 86.4% |
| `/fr/blog` | 250.7 KB | 45.9% | 87.4% |
| `/fr/careers` | 251.2 KB | 45.9% | 87.4% |
| `/fr/contact` | 250.7 KB | 45.9% | 98.1% |
| `/fr/faq` | 250.6 KB | 45.9% | 91.3% |
| `/fr/pricing` | 250.8 KB | 45.9% | 92.2% |
| `/fr/products` | 250.7 KB | 45.9% | 90.3% |
| `/fr/settings` | 252.1 KB | 45.9% | 93.2% |
| `/fr/team` | 250.7 KB | 45.9% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 60.1 ms | 21.4 ms | 135.7 ms | 5.7 ms |
| `fr` | 30.0 ms | 20.8 ms | 39.7 ms | 5.2 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 21.2 ms | 29.0 ms | 5.2 ms |
| `fr` | 20.7 ms | 26.8 ms | 4.8 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 136.3 KB | 0.0% | 0.0% |
| `/en/about` | 135.3 KB | 0.0% | 0.0% |
| `/en/blog` | 135.3 KB | 0.0% | 0.0% |
| `/en/careers` | 135.8 KB | 0.0% | 0.0% |
| `/en/contact` | 135.3 KB | 0.0% | 0.0% |
| `/en/faq` | 135.2 KB | 0.0% | 0.0% |
| `/en/pricing` | 135.5 KB | 0.0% | 0.0% |
| `/en/products` | 135.3 KB | 0.0% | 11.1% |
| `/en/settings` | 136.7 KB | 0.0% | 0.0% |
| `/en/team` | 135.3 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 136.3 KB | 0.0% | 5.9% |
| `/fr/about` | 135.3 KB | 0.0% | 6.7% |
| `/fr/blog` | 135.3 KB | 0.0% | 7.1% |
| `/fr/careers` | 135.8 KB | 0.0% | 7.1% |
| `/fr/contact` | 135.3 KB | 0.0% | 33.3% |
| `/fr/faq` | 135.2 KB | 0.0% | 10.0% |
| `/fr/pricing` | 135.5 KB | 0.0% | 11.1% |
| `/fr/products` | 135.3 KB | 0.0% | 41.2% |
| `/fr/settings` | 136.7 KB | 0.0% | 0.0% |
| `/fr/team` | 135.3 KB | 0.0% | 8.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-tolgee-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 16.6 ms | 12.5 ms | 28.8 ms | 0.0 ms |
| `fr` | 14.7 ms | 10.9 ms | 20.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 26.9 ms | 12.3 ms | 2.8 ms |
| `fr` | 34.3 ms | 14.1 ms | 2.8 ms |

</details>

---

## use-intl

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 4.14.2 | 13.0 KB | 51.6 KB |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ✅ | 190.0 KB | 50.0% | 89.8% | 74.7 KB | 6.7 ms | 2.7 ms | 12.5 ms | 15.3 ms |
| Dynamic | ✅ | 128.9 KB | 0.0% | 89.8% | 74.9 KB | 7.0 ms | 1.6 ms | 12.5 ms | 15.4 ms |
| Scoped Static | ✅ | 131.9 KB | 0.0% | 0.0% | 87.7 KB | 20.9 ms | 5.0 ms | 17.5 ms | 24.8 ms |
| Scoped Dynamic | ✅ | 131.9 KB | 0.0% | 0.0% | 87.7 KB | 13.3 ms | 3.5 ms | 17.4 ms | 25.9 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 190.7 KB | 54.4% | 81.4% |
| `/en/about` | 189.6 KB | 54.4% | 88.4% |
| `/en/blog` | 189.7 KB | 54.4% | 84.9% |
| `/en/careers` | 190.2 KB | 54.4% | 87.4% |
| `/en/contact` | 189.7 KB | 54.4% | 98.8% |
| `/en/faq` | 189.6 KB | 54.4% | 88.4% |
| `/en/pricing` | 189.8 KB | 54.1% | 95.4% |
| `/en/products` | 189.7 KB | 54.4% | 90.7% |
| `/en/settings` | 191.1 KB | 54.4% | 94.2% |
| `/en/team` | 189.7 KB | 54.4% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 190.7 KB | 45.6% | 84.5% |
| `/fr/about` | 189.6 KB | 45.6% | 86.4% |
| `/fr/blog` | 189.7 KB | 45.6% | 87.4% |
| `/fr/careers` | 190.2 KB | 45.6% | 87.5% |
| `/fr/contact` | 189.7 KB | 45.6% | 98.1% |
| `/fr/faq` | 189.6 KB | 45.6% | 91.3% |
| `/fr/pricing` | 189.8 KB | 45.4% | 90.4% |
| `/fr/products` | 189.7 KB | 45.6% | 90.3% |
| `/fr/settings` | 191.1 KB | 45.6% | 93.2% |
| `/fr/team` | 189.7 KB | 45.6% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.1 ms | 3.8 ms | 16.1 ms | 3.0 ms |
| `fr` | 6.3 ms | 3.9 ms | 13.3 ms | 2.5 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 12.9 ms | 16.9 ms | 6.0 ms |
| `fr` | 12.2 ms | 13.6 ms | 4.9 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 129.6 KB | 0.0% | 81.4% |
| `/en/about` | 128.5 KB | 0.0% | 88.4% |
| `/en/blog` | 128.6 KB | 0.0% | 84.9% |
| `/en/careers` | 129.1 KB | 0.0% | 87.4% |
| `/en/contact` | 128.6 KB | 0.0% | 98.8% |
| `/en/faq` | 128.5 KB | 0.0% | 88.4% |
| `/en/pricing` | 128.7 KB | 0.0% | 95.4% |
| `/en/products` | 128.6 KB | 0.0% | 90.7% |
| `/en/settings` | 130.0 KB | 0.0% | 94.2% |
| `/en/team` | 128.6 KB | 0.0% | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 129.6 KB | 0.0% | 84.5% |
| `/fr/about` | 128.5 KB | 0.0% | 86.4% |
| `/fr/blog` | 128.6 KB | 0.0% | 87.4% |
| `/fr/careers` | 129.1 KB | 0.0% | 87.5% |
| `/fr/contact` | 128.6 KB | 0.0% | 98.1% |
| `/fr/faq` | 128.5 KB | 0.0% | 91.3% |
| `/fr/pricing` | 128.7 KB | 0.0% | 90.4% |
| `/fr/products` | 128.6 KB | 0.0% | 90.3% |
| `/fr/settings` | 130.0 KB | 0.0% | 93.2% |
| `/fr/team` | 128.6 KB | 0.0% | 89.3% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.9 ms | 3.3 ms | 21.9 ms | 0.6 ms |
| `fr` | 6.1 ms | 3.4 ms | 14.9 ms | 2.7 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 13.2 ms | 17.6 ms | 7.6 ms |
| `fr` | 11.8 ms | 13.3 ms | 4.7 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 132.6 KB | 0.0% | 0.0% |
| `/en/about` | 131.5 KB | 0.0% | 0.0% |
| `/en/blog` | 131.6 KB | 0.0% | 0.0% |
| `/en/careers` | 132.1 KB | 0.0% | 0.0% |
| `/en/contact` | 131.6 KB | 0.0% | 0.0% |
| `/en/faq` | 131.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 131.7 KB | 0.0% | 0.0% |
| `/en/products` | 131.6 KB | 0.0% | 0.0% |
| `/en/settings` | 133.1 KB | 0.0% | 0.0% |
| `/en/team` | 131.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 132.6 KB | 0.0% | 0.0% |
| `/fr/about` | 131.5 KB | 0.0% | 0.0% |
| `/fr/blog` | 131.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 132.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 131.6 KB | 0.0% | 0.0% |
| `/fr/faq` | 131.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 131.7 KB | 0.0% | 0.0% |
| `/fr/products` | 131.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 133.1 KB | 0.0% | 0.0% |
| `/fr/team` | 131.6 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 22.8 ms | 15.6 ms | 44.1 ms | 5.4 ms |
| `fr` | 19.0 ms | 10.5 ms | 49.3 ms | 4.5 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 19.3 ms | 27.9 ms | 6.7 ms |
| `fr` | 15.6 ms | 21.8 ms | 5.2 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 132.6 KB | 0.0% | 0.0% |
| `/en/about` | 131.5 KB | 0.0% | 0.0% |
| `/en/blog` | 131.6 KB | 0.0% | 0.0% |
| `/en/careers` | 132.1 KB | 0.0% | 0.0% |
| `/en/contact` | 131.6 KB | 0.0% | 0.0% |
| `/en/faq` | 131.5 KB | 0.0% | 0.0% |
| `/en/pricing` | 131.7 KB | 0.0% | 0.0% |
| `/en/products` | 131.6 KB | 0.0% | 0.0% |
| `/en/settings` | 133.1 KB | 0.0% | 0.0% |
| `/en/team` | 131.6 KB | 0.0% | 0.0% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 132.6 KB | 0.0% | 0.0% |
| `/fr/about` | 131.5 KB | 0.0% | 0.0% |
| `/fr/blog` | 131.6 KB | 0.0% | 0.0% |
| `/fr/careers` | 132.1 KB | 0.0% | 0.0% |
| `/fr/contact` | 131.6 KB | 0.0% | 0.0% |
| `/fr/faq` | 131.5 KB | 0.0% | 0.0% |
| `/fr/pricing` | 131.7 KB | 0.0% | 0.0% |
| `/fr/products` | 131.6 KB | 0.0% | 0.0% |
| `/fr/settings` | 133.1 KB | 0.0% | 0.0% |
| `/fr/team` | 131.6 KB | 0.0% | 0.0% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-use-intl-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 6.7 ms | 5.2 ms | 11.0 ms | 0.0 ms |
| `fr` | 19.8 ms | 8.3 ms | 62.1 ms | 3.5 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.5 ms | 30.6 ms | 7.1 ms |
| `fr` | 17.2 ms | 21.2 ms | 3.9 ms |

</details>

---

## wuchale

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 0.26.6 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Other page content leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load | Hydration |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | 147.8 KB | — | 89.8% | 32.0 KB | 7.6 ms | — | 17.9 ms | 28.0 ms |
| Dynamic | ✅ | 124.9 KB | — | 89.9% | 34.0 KB | 12.3 ms | — | 14.3 ms | 23.2 ms |
| Scoped Static | ✅ | 148.2 KB | — | 89.8% | 33.4 KB | 3.4 ms | — | 15.3 ms | 9.1 ms |
| Scoped Dynamic | ✅ | 125.0 KB | — | 89.8% | 34.9 KB | 23.0 ms | 4.0 ms | 16.5 ms | 22.8 ms |

<details>
<summary><strong>Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 148.3 KB | — | 81.4% |
| `/en/about` | 147.4 KB | — | 88.4% |
| `/en/blog` | 147.5 KB | — | 84.9% |
| `/en/careers` | 148.0 KB | — | 87.4% |
| `/en/contact` | 147.6 KB | — | 98.8% |
| `/en/faq` | 147.5 KB | — | 88.4% |
| `/en/pricing` | 147.7 KB | — | 95.4% |
| `/en/products` | 147.5 KB | — | 90.7% |
| `/en/settings` | 149.1 KB | — | 94.2% |
| `/en/team` | 147.4 KB | — | 88.4% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 148.3 KB | — | 84.3% |
| `/fr/about` | 147.4 KB | — | 86.3% |
| `/fr/blog` | 147.5 KB | — | 87.3% |
| `/fr/careers` | 148.0 KB | — | 87.4% |
| `/fr/contact` | 147.6 KB | — | 98.0% |
| `/fr/faq` | 147.5 KB | — | 91.2% |
| `/fr/pricing` | 147.7 KB | — | 91.3% |
| `/fr/products` | 147.5 KB | — | 90.2% |
| `/fr/settings` | 149.1 KB | — | 93.1% |
| `/fr/team` | 147.4 KB | — | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-static-wuchale-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.2 ms | 4.4 ms | 14.3 ms | 0.0 ms |
| `fr` | 8.0 ms | 5.1 ms | 13.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 18.5 ms | 28.0 ms | — |
| `fr` | 17.2 ms | 27.9 ms | — |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 125.0 KB | — | 81.2% |
| `/en/about` | 124.2 KB | — | 88.2% |
| `/en/blog` | 124.3 KB | — | 84.7% |
| `/en/careers` | 124.7 KB | — | 87.2% |
| `/en/contact` | 124.4 KB | — | 98.8% |
| `/en/faq` | 124.3 KB | — | 88.2% |
| `/en/pricing` | 124.4 KB | — | 97.6% |
| `/en/products` | 124.3 KB | — | 90.6% |
| `/en/settings` | 125.7 KB | — | 94.1% |
| `/en/team` | 124.2 KB | — | 88.2% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 125.8 KB | — | 84.3% |
| `/fr/about` | 125.0 KB | — | 86.3% |
| `/fr/blog` | 125.0 KB | — | 87.3% |
| `/fr/careers` | 125.5 KB | — | 87.4% |
| `/fr/contact` | 125.2 KB | — | 98.0% |
| `/fr/faq` | 125.0 KB | — | 91.2% |
| `/fr/pricing` | 125.2 KB | — | 91.3% |
| `/fr/products` | 125.0 KB | — | 90.2% |
| `/fr/settings` | 126.4 KB | — | 93.1% |
| `/fr/team` | 125.0 KB | — | 89.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-dynamic-wuchale-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 7.1 ms | 4.3 ms | 12.3 ms | 0.0 ms |
| `fr` | 17.4 ms | 7.1 ms | 53.7 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 14.6 ms | 23.5 ms | — |
| `fr` | 14.0 ms | 22.9 ms | — |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 148.7 KB | — | 80.2% |
| `/en/about` | 147.9 KB | — | 87.7% |
| `/en/blog` | 147.9 KB | — | 84.0% |
| `/en/careers` | 148.4 KB | — | 92.7% |
| `/en/contact` | 148.1 KB | — | 98.8% |
| `/en/faq` | 147.9 KB | — | 87.7% |
| `/en/pricing` | 148.1 KB | — | 95.1% |
| `/en/products` | 147.9 KB | — | 90.1% |
| `/en/settings` | 149.5 KB | — | 93.8% |
| `/en/team` | 147.9 KB | — | 87.7% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 148.7 KB | — | 83.2% |
| `/fr/about` | 147.9 KB | — | 85.3% |
| `/fr/blog` | 147.9 KB | — | 86.3% |
| `/fr/careers` | 148.4 KB | — | 93.8% |
| `/fr/contact` | 148.1 KB | — | 97.9% |
| `/fr/faq` | 147.9 KB | — | 90.5% |
| `/fr/pricing` | 148.1 KB | — | 90.6% |
| `/fr/products` | 147.9 KB | — | 89.5% |
| `/fr/settings` | 149.5 KB | — | 92.6% |
| `/fr/team` | 147.9 KB | — | 88.4% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-static-wuchale-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 4.1 ms | 2.1 ms | 11.2 ms | 0.0 ms |
| `fr` | 2.7 ms | 2.1 ms | 4.9 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Static</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 16.1 ms | 9.1 ms | — |
| `fr` | 14.5 ms | 9.0 ms | — |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale page bundle</summary>

**Locale: `en`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/en/` | 125.1 KB | — | 76.8% |
| `/en/about` | 124.3 KB | — | 85.5% |
| `/en/blog` | 124.4 KB | — | 98.6% |
| `/en/careers` | 124.8 KB | — | 91.4% |
| `/en/contact` | 124.5 KB | — | 98.6% |
| `/en/faq` | 124.4 KB | — | 85.5% |
| `/en/pricing` | 124.5 KB | — | 94.3% |
| `/en/products` | 124.4 KB | — | 88.4% |
| `/en/settings` | 125.8 KB | — | 92.8% |
| `/en/team` | 124.3 KB | — | 85.5% |

**Locale: `fr`**

| Page | JS (gz) | Locale leak % | Page leak % |
| :--- | ---: | ---: | ---: |
| `/fr/` | 125.9 KB | — | 82.8% |
| `/fr/about` | 125.1 KB | — | 84.9% |
| `/fr/blog` | 125.2 KB | — | 86.0% |
| `/fr/careers` | 125.6 KB | — | 93.6% |
| `/fr/contact` | 125.3 KB | — | 100.0% |
| `/fr/faq` | 125.2 KB | — | 90.3% |
| `/fr/pricing` | 125.4 KB | — | 90.4% |
| `/fr/products` | 125.2 KB | — | 89.2% |
| `/fr/settings` | 126.6 KB | — | 92.5% |
| `/fr/team` | 125.1 KB | — | 88.2% |

**Bundle link:** [View bundle visualizer](https://htmlpreview.github.io/?https://github.com/intlayer-org/benchmark-i18n/blob/main/results/tanstack-scoped-dynamic-wuchale-app/bundle/rollup-visualizer.html)

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 36.2 ms | 15.4 ms | 81.3 ms | 4.0 ms |
| `fr` | 9.8 ms | 5.8 ms | 19.6 ms | 0.0 ms |

</details>

<details>
<summary><strong>Scoped Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load | Hydration | React mount |
| :---: | ---: | ---: | ---: |
| `en` | 17.4 ms | 25.4 ms | — |
| `fr` | 15.6 ms | 20.2 ms | — |

</details>

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 14 |
| Total app entries | 40 |
| With lib size data | 13 |
| With page bundle data | 56 |
| With component data | 56 |
| With reactivity data | 53 |
| With rendering data | 55 |
