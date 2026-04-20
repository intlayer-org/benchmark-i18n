# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: reactivity.test.ts >> Measure locale switch reactivity
- Location: ../../../test-utils/src/reactivity-test.ts:317:3

# Error details

```
Error: page.evaluate: Error: E2E timeout: html[lang] did not change to 'fr'
    at eval (eval at evaluate (:302:30), <anonymous>:30:12)
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
          - button "Mock Pages" [ref=e10] [cursor=pointer]:
            - text: Mock Pages
            - img [ref=e11]
      - generic [ref=e13]:
        - link "Go to GitHub" [ref=e14] [cursor=pointer]:
          - /url: https://github.com/intlayer-org/benchmark-i18n
          - generic [ref=e15]: Go to GitHub
          - img [ref=e16]
        - combobox [ref=e19]:
          - option "English" [selected]
          - option "Français"
          - option "Español"
          - option "Deutsch"
          - option "Italiano"
          - option "Português"
          - option "中文"
          - option "日本語"
          - option "한국어"
          - option "Русский"
        - 'button "Theme mode: auto (system). Click to switch to light mode." [ref=e20]': "Theme: Auto"
  - generic [ref=e21]:
    - generic [ref=e22]:
      - heading "i18n Benchmark" [level=1] [ref=e23]
      - paragraph [ref=e24]: A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.
      - generic [ref=e25]:
        - button "View Results" [ref=e26]
        - button "Methodology" [ref=e27]
    - generic [ref=e28]:
      - heading "Why These Metrics Matter" [level=2] [ref=e29]
      - generic [ref=e30]:
        - generic [ref=e31]:
          - heading "Bundle Size" [level=3] [ref=e32]
          - paragraph [ref=e33]: "The bundle is the data shipped to every user across the globe. A larger bundle means longer download times — especially on slow 3G connections common in many regions. i18n libraries vary dramatically in their weight: from a few kilobytes to tens of kilobytes of runtime code, plus the translation files themselves."
        - generic [ref=e34]:
          - heading "Rendering & Hydration" [level=3] [ref=e35]
          - paragraph [ref=e36]: "Connecting a large JSON dictionary to every component creates a hidden dependency: any change in the translation context can trigger re-renders across the entire tree. During SSR hydration, parsing and attaching massive translation objects adds latency before the page becomes interactive — directly impacting Time to Interactive (TTI)."
        - generic [ref=e37]:
          - heading "Dynamic Loading" [level=3] [ref=e38]
          - paragraph [ref=e39]: "Loading all translations upfront overloads the initial payload. Dynamic (lazy) loading splits translations by route or namespace, sending only what the current page needs. However, lazy loading introduces its own trade-offs: waterfall requests, flash of untranslated content, and caching complexity. Measuring both strategies is essential."
    - generic [ref=e40]:
      - heading "Understanding the Impact" [level=2] [ref=e41]
      - generic [ref=e42]:
        - heading "Why a single large JSON can hurt performance" [level=3] [ref=e43]
        - paragraph [ref=e44]: "Many i18n libraries store translations in a single JSON object provided via React context. When this object is large (thousands of keys), every component that consumes translations holds a reference to the entire dictionary. This means:"
        - list [ref=e45]:
          - listitem [ref=e46]: The JSON must be parsed on every page load — blocking the main thread.
          - listitem [ref=e47]: Context-based architectures can cause cascading re-renders when the locale changes, because every consumer is notified even if their specific keys didn't change.
          - listitem [ref=e48]: During server-side rendering, the full dictionary is serialized into the HTML payload, increasing the document size that must be downloaded and hydrated.
      - generic [ref=e49]:
        - heading "The trade-offs of dynamic loading" [level=3] [ref=e50]
        - paragraph [ref=e51]: "Splitting translations into per-route or per-namespace chunks can dramatically reduce the initial payload. But it introduces new challenges:"
        - list [ref=e52]:
          - listitem [ref=e53]:
            - strong [ref=e54]: "Waterfall requests:"
            - text: The app must first load, determine the locale, then fetch the right chunk — adding network round-trips.
          - listitem [ref=e55]:
            - strong [ref=e56]: "Flash of untranslated content (FOUC):"
            - text: Users may briefly see translation keys or a fallback language before the chunk arrives.
          - listitem [ref=e57]:
            - strong [ref=e58]: "Cache invalidation:"
            - text: Updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.
      - generic [ref=e59]:
        - heading "What this benchmark measures" [level=3] [ref=e60]
        - paragraph [ref=e61]: "This test app provides a controlled environment — 10 pages with realistic content — to compare i18n libraries across three axes: the weight they add to your JavaScript bundle, the time spent parsing and rendering translated content, and the effectiveness of their code-splitting and lazy-loading strategies. Each library is integrated into the same app so results are directly comparable."
    - generic [ref=e62]:
      - heading "Sample Results" [level=2] [ref=e63]
      - table [ref=e65]:
        - rowgroup [ref=e66]:
          - row "Library Bundle Size Lookup Time Lazy Loading" [ref=e67]:
            - columnheader "Library" [ref=e68]
            - columnheader "Bundle Size" [ref=e69]
            - columnheader "Lookup Time" [ref=e70]
            - columnheader "Lazy Loading" [ref=e71]
        - rowgroup [ref=e72]:
          - row "react-i18next 42.3 kB 0.12ms Yes" [ref=e73]:
            - cell "react-i18next" [ref=e74]
            - cell "42.3 kB" [ref=e75]
            - cell "0.12ms" [ref=e76]
            - cell "Yes" [ref=e77]
          - row "react-intl 38.1 kB 0.15ms Manual" [ref=e78]:
            - cell "react-intl" [ref=e79]
            - cell "38.1 kB" [ref=e80]
            - cell "0.15ms" [ref=e81]
            - cell "Manual" [ref=e82]
          - row "lingui 12.8 kB 0.08ms Yes" [ref=e83]:
            - cell "lingui" [ref=e84]
            - cell "12.8 kB" [ref=e85]
            - cell "0.08ms" [ref=e86]
            - cell "Yes" [ref=e87]
          - row "typesafe-i18n 5.2 kB 0.05ms Built-in" [ref=e88]:
            - cell "typesafe-i18n" [ref=e89]
            - cell "5.2 kB" [ref=e90]
            - cell "0.05ms" [ref=e91]
            - cell "Built-in" [ref=e92]
  - contentinfo [ref=e93]:
    - generic [ref=e94]:
      - generic [ref=e95]:
        - generic [ref=e96]:
          - heading "i18n Benchmark" [level=3] [ref=e97]
          - paragraph [ref=e98]: An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.
        - generic [ref=e99]:
          - heading "Resources" [level=3] [ref=e100]
          - list [ref=e101]:
            - listitem [ref=e102]:
              - link "GitHub" [ref=e103] [cursor=pointer]:
                - /url: https://github.com/intlayer-org/benchmark-i18n
            - listitem [ref=e104]:
              - link "Methodology" [ref=e105] [cursor=pointer]:
                - /url: /en/about
            - listitem [ref=e106]:
              - link "Contributing" [ref=e107] [cursor=pointer]:
                - /url: /en/contact
        - generic [ref=e108]:
          - heading "Contact" [level=3] [ref=e109]
          - paragraph [ref=e110]: contact@intlayer.org
      - generic [ref=e111]: i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.
```