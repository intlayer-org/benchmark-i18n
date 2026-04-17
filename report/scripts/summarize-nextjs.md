# Next.js — i18n Benchmark Results

_Generated: 2026-04-17_

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
- [lingui](#lingui)
- [next-i18next](#next-i18next)
- [next-international](#next-international)
- [next-intlayer](#next-intlayer)
- [paraglide-next](#paraglide-next)
- [tolgee](#tolgee)

## base-app-nextjs

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | — | — |

---

## lingui

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 5.3.0 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Dynamic | 🔶 | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 18.5 KB | — | — | — | — |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

---

## next-i18next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 16.0.5 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 24.5 KB | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 26.0 KB | — | — | — | — |

---

## next-international

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 1.3.1 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 11.6 KB | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

---

## next-intlayer

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 8.7.1-canary-1 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | — | — | — | — | 20.3 ms | 7.8 ms | 17.1 ms | 12.4 ms |
| Dynamic | 🔶 | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 12.7 KB | 18.3 ms | — | 16.4 ms | 12.1 ms |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

<details>
<summary><strong>Static</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 25.3 ms | 12.3 ms | 38.7 ms | 10.8 ms |
| `fr` | 15.3 ms | 13.6 ms | 18.1 ms | 4.8 ms |

</details>

<details>
<summary><strong>Static</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 19.6 ms | 14.1 ms | 7.4 ms |
| `fr` | 14.7 ms | 10.8 ms | 5.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale reactivity</summary>

| Locale | E2E avg | E2E min | E2E max | Profiler avg |
| :---: | ---: | ---: | ---: | ---: |
| `en` | 19.0 ms | 9.8 ms | 33.1 ms | 0.0 ms |
| `fr` | 17.6 ms | 12.7 ms | 23.5 ms | 0.0 ms |

</details>

<details>
<summary><strong>Dynamic</strong> — per-locale rendering</summary>

| Locale | Page load avg | Hydration avg | React mount avg |
| :---: | ---: | ---: | ---: |
| `en` | 18.5 ms | 13.8 ms | — |
| `fr` | 14.4 ms | 10.3 ms | — |

</details>

---

## paraglide-next

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| — | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 5.4 KB | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |

---

## tolgee

| Version | Lib size (gz) | Lib size (min) |
| :--- | ---: | ---: |
| 7.0.0 | — | — |

| Category | Status | Page JS avg (gz) | Locale leak % | Page leak % | Comp avg (gz) | E2E reactivity | React Profiler | Page load avg | Hydration avg |
| :--- | :---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Static | 🔶 | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 24.2 KB | — | — | — | — |
| Dynamic | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Static | ⬜ missing | — | — | — | — | — | — | — | — |
| Scoped Dynamic | 🔶 | ⚠ INVALID | ⚠ INVALID | ⚠ INVALID | 31.0 KB | — | — | — | — |

---

## Coverage

| Metric | Count |
| :--- | :--- |
| Total libraries | 7 |
| Total app entries | 10 |
| With lib size data | 0 |
| With page bundle data | 0 |
| With component data | 8 |
| With reactivity data | 2 |
| With rendering data | 2 |
