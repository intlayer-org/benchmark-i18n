# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reactivity.test.ts >> Measure locale switch reactivity
- Location: ../../../test-utils/src/reactivity-test.ts:436:3

# Error details

```
Error: page.evaluate: Error: E2E timeout: html[lang] did not change to 'fr'
    at eval (eval at evaluate (:302:30), <anonymous>:41:12)
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
        - link "i18n Bench" [ref=e5] [cursor=pointer]:
          - /url: /en
        - generic [ref=e6]:
          - link "Home" [ref=e7] [cursor=pointer]:
            - /url: /en
          - link "Methodology" [ref=e8] [cursor=pointer]:
            - /url: /en/about
          - button "Mock Pages" [ref=e10]:
            - text: Mock Pages
            - img [ref=e11]
      - generic [ref=e13]:
        - link "Go to GitHub" [ref=e14] [cursor=pointer]:
          - /url: https://github.com/intlayer-org/benchmark-i18n
          - text: Go to GitHub
          - img [ref=e15]
        - combobox [ref=e18]:
          - option "English"
          - option "Français" [selected]
          - option "Español"
          - option "Deutsch"
          - option "Italiano"
          - option "Português"
          - option "中文"
          - option "日本語"
          - option "한국어"
          - option "Русский"
        - 'button "Theme mode: auto (system). Click to switch to light mode." [ref=e19]': "Theme: Auto"
  - generic [ref=e20]:
    - generic [ref=e21]:
      - heading "i18n Benchmark" [level=1] [ref=e22]
      - paragraph [ref=e23]: A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.
      - generic [ref=e24]:
        - button "View Results" [ref=e25]
        - button "Methodology" [ref=e26]
    - generic [ref=e27]:
      - heading "Why These Metrics Matter" [level=2] [ref=e28]
      - generic [ref=e29]:
        - generic [ref=e30]:
          - heading "Bundle Size" [level=3] [ref=e31]
          - paragraph [ref=e32]: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
        - generic [ref=e33]:
          - heading "Rendering & Hydration" [level=3] [ref=e34]
          - paragraph [ref=e35]: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
        - generic [ref=e36]:
          - heading "Dynamic Loading" [level=3] [ref=e37]
          - paragraph [ref=e38]: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
    - generic [ref=e39]:
      - heading "Understanding the Impact" [level=2] [ref=e40]
      - generic [ref=e41]:
        - heading "Why a single large JSON can hurt performance" [level=3] [ref=e42]
        - paragraph [ref=e43]: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
        - list [ref=e44]:
          - listitem [ref=e45]: The JSON must be parsed on every page load — blocking the main thread.
          - listitem [ref=e46]: Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.
          - listitem [ref=e47]: During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.
      - generic [ref=e48]:
        - heading "The trade-offs of dynamic loading" [level=3] [ref=e49]
        - paragraph [ref=e50]: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
        - list [ref=e51]:
          - listitem [ref=e52]:
            - strong [ref=e53]: "Waterfall requests:"
            - text: the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.
          - listitem [ref=e54]:
            - strong [ref=e55]: "Flash of untranslated content (FOUC):"
            - text: users may briefly see translation keys or a fallback language before the chunk arrives.
          - listitem [ref=e56]:
            - strong [ref=e57]: "Cache invalidation:"
            - text: updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.
      - generic [ref=e58]:
        - heading "What this benchmark measures" [level=3] [ref=e59]
        - paragraph [ref=e60]: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
    - generic [ref=e61]:
      - heading "Sample Results" [level=2] [ref=e62]
      - table [ref=e64]:
        - rowgroup [ref=e65]:
          - row "Library Bundle Size Lookup Time Lazy Loading" [ref=e66]:
            - columnheader "Library" [ref=e67]
            - columnheader "Bundle Size" [ref=e68]
            - columnheader "Lookup Time" [ref=e69]
            - columnheader "Lazy Loading" [ref=e70]
        - rowgroup [ref=e71]:
          - row "react-i18next 42.3 kB 0.12ms Yes" [ref=e72]:
            - cell "react-i18next" [ref=e73]
            - cell "42.3 kB" [ref=e74]
            - cell "0.12ms" [ref=e75]
            - cell "Yes" [ref=e76]
          - row "react-intl 38.1 kB 0.15ms Manual" [ref=e77]:
            - cell "react-intl" [ref=e78]
            - cell "38.1 kB" [ref=e79]
            - cell "0.15ms" [ref=e80]
            - cell "Manual" [ref=e81]
          - row "lingui 12.8 kB 0.08ms Yes" [ref=e82]:
            - cell "lingui" [ref=e83]
            - cell "12.8 kB" [ref=e84]
            - cell "0.08ms" [ref=e85]
            - cell "Yes" [ref=e86]
          - row "typesafe-i18n 5.2 kB 0.05ms Built-in" [ref=e87]:
            - cell "typesafe-i18n" [ref=e88]
            - cell "5.2 kB" [ref=e89]
            - cell "0.05ms" [ref=e90]
            - cell "Built-in" [ref=e91]
  - contentinfo [ref=e92]:
    - generic [ref=e93]:
      - generic [ref=e94]:
        - generic [ref=e95]:
          - heading "i18n Benchmark" [level=3] [ref=e96]
          - paragraph [ref=e97]: An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.
        - generic [ref=e98]:
          - heading "Resources" [level=3] [ref=e99]
          - list [ref=e100]:
            - listitem [ref=e101]:
              - link "GitHub" [ref=e102] [cursor=pointer]:
                - /url: https://github.com/intlayer-org/benchmark-i18n
            - listitem [ref=e103]:
              - link "Methodology" [ref=e104] [cursor=pointer]:
                - /url: /en/about
            - listitem [ref=e105]:
              - link "Contributing" [ref=e106] [cursor=pointer]:
                - /url: /en/contact
        - generic [ref=e107]:
          - heading "Contact" [level=3] [ref=e108]
          - paragraph [ref=e109]: contact@intlayer.org
      - generic [ref=e110]: i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.
```