# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: structure-consistency.test.ts >> Cross-App Structural Consistency - vite-svelte-static >> Match Reference App structure for [fr] - home
- Location: ../../test-utils/src/structure-consistency-test.ts:24:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "<!DOCTYPE html><html lang=\"locale\" class=\"light\" style=\"color-scheme: light;\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title><title><head><body class=\"[overflow-wrap:anywhere] antialiased\"><div id=\"mount\"><header class=\"backdrop-blur-lg bg-card80 border-b border-border sticky top-0 z-50\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex gap-8 items-center\"><a href=\"locale\" class=\"font-bold no-underline text-lg text-primary tracking-tight\"><a href=\"\"><div class=\"font-medium gap-6 hidden items-center md:flex text-sm\"><a href=\"locale\" class=\"nav-link\"><a href=\"\"><a href=\"localeabout\" class=\"nav-link\"><a href=\"\"><div class=\"relative\"><button class=\"bg-transparent border-none cursor-pointer flex gap-1 items-center nav-link\" type=\"button\"><svg><path d=\"m6 9 6 6 6-6\"><path><svg><button><div><div><div><div class=\"flex gap-4 items-center\"><a href=\"https:github.comintlayer-orgbenchmark-i18n\" class=\"hover:text-foreground text-muted-foreground transition\"><span class=\"sr-only\"><span><svg><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"><path><svg><a href=\"\"><div class=\"flex gap-2 items-center\"><select class=\"bg-card border border-border focus:outline-none focus:ring-1 focus:ring-primary font-medium h-8 px-2 rounded-md text-xs transition-colors\"><option value=\"en\"><option><option value=\"fr\"><option><option value=\"es\"><option><option value=\"de\"><option><option value=\"it\"><option><option value=\"pt\"><option><option value=\"zh\"><option><option value=\"ja\"><option><option value=\"ko\"><option><option value=\"ru\"><option><select><div><button aria-label=\"normalized\" class=\"bg-accent border border-border font-medium hover:bg-accent80 px-3 py-1.5 rounded-md text-foreground text-xs transition-colors\" title=\"normalized\" type=\"button\"><button><div><nav><header><div class=\"container py-16\"><section class=\"mb-16 text-center\"><h1 class=\"font-bold mb-4 text-4xl text-foreground tracking-tight\"><h1><p class=\"max-w-2xl mx-auto text-lg text-muted-foreground\"><p><div class=\"flex gap-4 justify-center mt-8\"><button class=\"bg-primary font-medium hover:opacity-90 px-6 py-3 rounded-lg text-primary-foreground text-sm transition-opacity\" type=\"button\"><button><button class=\"border border-border font-medium hover:bg-accent px-6 py-3 rounded-lg text-foreground text-sm transition-colors\" type=\"button\"><button><div><section><section class=\"mb-16\"><h2 class=\"font-bold mb-6 text-2xl text-foreground\"><h2><div class=\"gap-6 grid md:grid-cols-3\"><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div><section><section class=\"max-w-3xl mb-16 mx-auto space-y-6\"><h2 class=\"font-bold text-2xl text-foreground\"><h2><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><ul class=\"list-disc mt-3 pl-5 space-y-2 text-muted-foreground text-sm\"><li><li><li><li><li><li><ul><div><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><ul class=\"list-disc mt-3 pl-5 space-y-2 text-muted-foreground text-sm\"><li><strong class=\"text-foreground\"><strong><li><li><strong class=\"text-foreground\"><strong><li><li><strong class=\"text-foreground\"><strong><li><ul><div><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><section><section><h2 class=\"font-bold mb-6 text-2xl text-foreground\"><h2><div class=\"border border-border overflow-x-auto rounded-lg\"><table class=\"text-sm w-full\"><thead class=\"bg-muted\"><tr><th class=\"font-medium px-4 py-3 text-left text-muted-foreground\"><th><th class=\"font-medium px-4 py-3 text-left text-muted-foreground\"><th><th class=\"font-medium px-4 py-3 text-left text-muted-foreground\"><th><th class=\"font-medium px-4 py-3 text-left text-muted-foreground\"><th><tr><thead><tbody><tr class=\"border-border border-t\"><td class=\"font-medium px-4 py-3 text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-border border-t\"><td class=\"font-medium px-4 py-3 text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-border border-t\"><td class=\"font-medium px-4 py-3 text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-border border-t\"><td class=\"font-medium px-4 py-3 text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tbody><table><div><section><div><footer class=\"bg-card border-border border-t mt-20\"><div class=\"container py-8\"><div class=\"gap-8 grid md:grid-cols-3\"><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><ul class=\"space-y-1\"><li><a href=\"https:github.comintlayer-orgbenchmark-i18n\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><li><li><a href=\"localeabout\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><li><li><a href=\"localecontact\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><li><ul><div><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div><div class=\"border-border border-t mt-8 pt-4 text-center text-muted-foreground text-xs\"><div><div><footer><div><body><html>"
Received: "<!DOCTYPE html><html lang=\"locale\" class=\"light\" style=\"color-scheme: light;\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title><title><head><body class=\"[overflow-wrap:anywhere] antialiased\"><div id=\"mount\"><!----><!----><header class=\"backdrop-blur-lg bg-card80 border-b border-border sticky top-0 z-50\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex gap-8 items-center\"><a href=\"locale\" class=\"font-bold no-underline text-lg text-primary tracking-tight\"><a href=\"\"><div class=\"font-medium gap-6 hidden items-center md:flex text-sm\"><a href=\"locale\" class=\"nav-link\"><a href=\"\"><a href=\"localeabout\" class=\"nav-link\"><a href=\"\"><div class=\"relative\"><button class=\"bg-transparent border-none cursor-pointer flex gap-1 items-center nav-link\" type=\"button\"><svg><!----><path d=\"m6 9 6 6 6-6\"><path><!----><!----><!----><svg><!----><button><!----><div><div><div><div class=\"flex gap-4 items-center\"><a href=\"https:github.comintlayer-orgbenchmark-i18n\" class=\"hover:text-foreground text-muted-foreground transition\"><span class=\"sr-only\"><span><svg><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"><path><svg><a href=\"\"><div class=\"flex gap-2 items-center\"><select class=\"bg-card border border-border focus:outline-none focus:ring-1 focus:ring-primary font-medium h-8 px-2 rounded-md text-xs transition-colors\"><option value=\"en\"><option><option value=\"fr\"><option><option value=\"es\"><option><option value=\"de\"><option><option value=\"it\"><option><option value=\"pt\"><option><option value=\"zh\"><option><option value=\"ja\"><option><option value=\"ko\"><option><option value=\"ru\"><option><select><div><!----><button aria-label=\"normalized\" class=\"bg-accent border border-border font-medium hover:bg-accent80 px-3 py-1.5 rounded-md text-foreground text-xs transition-colors\" title=\"normalized\" type=\"button\"><button><!----><div><nav><header><!----><!----><div class=\"container py-16\"><section class=\"mb-16 text-center\"><h1 class=\"font-bold mb-4 text-4xl text-foreground tracking-tight\"><h1><p class=\"max-w-2xl mx-auto text-lg text-muted-foreground\"><p><div class=\"flex gap-4 justify-center mt-8\"><button class=\"bg-primary font-medium hover:opacity-90 px-6 py-3 rounded-lg text-primary-foreground text-sm transition-opacity\" type=\"button\"><button><button class=\"border border-border font-medium hover:bg-accent px-6 py-3 rounded-lg text-foreground text-sm transition-colors\" type=\"button\"><button><div><section><!----><section class=\"mb-16\"><h2 class=\"font-bold mb-6 text-2xl text-foreground\"><h2><div class=\"gap-6 grid md:grid-cols-3\"><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div><section><!----><section class=\"max-w-3xl mb-16 mx-auto space-y-6\"><h2 class=\"font-bold text-2xl text-foreground\"><h2><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><ul class=\"list-disc mt-3 pl-5 space-y-2 text-muted-foreground text-sm\"><li><li><li><li><li><li><ul><div><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><ul class=\"list-disc mt-3 pl-5 space-y-2 text-muted-foreground text-sm\"><li><strong class=\"text-foreground\"><strong><li><li><strong class=\"text-foreground\"><strong><li><li><strong class=\"text-foreground\"><strong><li><ul><div><div class=\"bg-card border border-border p-6 rounded-lg\"><h3 class=\"font-semibold mb-2 text-foreground text-lg\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><section><!----><section><h2 class=\"font-bold mb-6 text-2xl text-foreground\"><h2><div class=\"border border-border overflow-x-auto rounded-lg\"><table class=\"text-sm w-full\"><thead class=\"bg-muted\"><tr><th class=\"font-medium px-4 py-3 text-left text-muted-foreground\"><th><th class=\"font-medium px-4 py-3 text-left text-muted-foreground\"><th><th class=\"font-medium px-4 py-3 text-left text-muted-foreground\"><th><th class=\"font-medium px-4 py-3 text-left text-muted-foreground\"><th><tr><thead><tbody><tr class=\"border-border border-t\"><td class=\"font-medium px-4 py-3 text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-border border-t\"><td class=\"font-medium px-4 py-3 text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-border border-t\"><td class=\"font-medium px-4 py-3 text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-border border-t\"><td class=\"font-medium px-4 py-3 text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tbody><table><div><section><!----><div><!----><footer class=\"bg-card border-border border-t mt-20\"><div class=\"container py-8\"><div class=\"gap-8 grid md:grid-cols-3\"><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><ul class=\"space-y-1\"><li><a href=\"https:github.comintlayer-orgbenchmark-i18n\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><!----><li><li><a href=\"localeabout\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><!----><li><li><a href=\"localecontact\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><!----><li><ul><div><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div><div class=\"border-border border-t mt-8 pt-4 text-center text-muted-foreground text-xs\"><div><div><footer><!----><div><body><html>"
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e5]:
        - link "i18n Bench" [ref=e6] [cursor=pointer]:
          - /url: /fr
        - generic [ref=e7]:
          - link "Home" [ref=e8] [cursor=pointer]:
            - /url: /fr
          - link "Methodology" [ref=e9] [cursor=pointer]:
            - /url: /fr/about
          - button "Mock Pages" [ref=e11] [cursor=pointer]:
            - text: Mock Pages
            - img [ref=e12]
      - generic [ref=e13]:
        - link "Go to GitHub" [ref=e14] [cursor=pointer]:
          - /url: https://github.com/intlayer-org/benchmark-i18n
          - generic [ref=e15]: Go to GitHub
          - img [ref=e16]
        - combobox [ref=e19]:
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
            - text: the app must first load, determine the locale, then fetch the right chunk — adding network round-trips.
          - listitem [ref=e55]:
            - strong [ref=e56]: "Flash of untranslated content (FOUC):"
            - text: users may briefly see translation keys or a fallback language before the chunk arrives.
          - listitem [ref=e57]:
            - strong [ref=e58]: "Cache invalidation:"
            - text: updating translations requires cache-busting strategies to ensure users get fresh content without re-downloading unchanged chunks.
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
                - /url: /fr/about
            - listitem [ref=e106]:
              - link "Contributing" [ref=e107] [cursor=pointer]:
                - /url: /fr/contact
        - generic [ref=e108]:
          - heading "Contact" [level=3] [ref=e109]
          - paragraph [ref=e110]: contact@intlayer.org
      - generic [ref=e111]: i18n Benchmark — Open-source project. Built with Svelte, Vite, and a client-side router.
```

# Test source

```ts
  1  | import { test, expect, type Page } from "@playwright/test";
  2  | import { DEFAULT_PAGES, DEFAULT_LOCALES } from "./pages-test";
  3  | import { getStructuralBlueprint } from "./structure-consistency";
  4  | 
  5  | const NAV_WAIT_UNTIL = "load" as const;
  6  | const GOTO_TIMEOUT_MS = 60_000;
  7  | 
  8  | /** Wait until lazy routes (React Suspense, etc.) have rendered real content, not fallbacks. */
  9  | async function waitForPageShell(page: Page): Promise<void> {
  10 |   await page.getByRole("heading", { level: 1 }).first().waitFor({
  11 |     state: "visible",
  12 |     timeout: GOTO_TIMEOUT_MS,
  13 |   });
  14 | }
  15 | 
  16 | export function registerStructureConsistencyTest(
  17 |   test: any,
  18 |   expect: any,
  19 |   group: string,
  20 | ): void {
  21 |   test.describe(`Cross-App Structural Consistency - ${group}`, () => {
  22 |     for (const pageConfig of DEFAULT_PAGES) {
  23 |       for (const locale of DEFAULT_LOCALES) {
  24 |         test(`Match Reference App structure for [${locale}] - ${pageConfig.name}`, async ({
  25 |           page,
  26 |         }: {
  27 |           page: Page;
  28 |         }) => {
  29 |           const path = `${locale}${pageConfig.path === "/" ? "" : pageConfig.path}`;
  30 | 
  31 |           let baseBlueprint = "";
  32 |           try {
  33 |             const refBase = process.env.STRUCTURE_REFERENCE_BASE_URL?.replace(
  34 |               /\/$/,
  35 |               "",
  36 |             ).trim();
  37 |             const referenceTarget = refBase
  38 |               ? `${refBase}/${path}`
  39 |               : `${group}/${path}`;
  40 |             await page.goto(referenceTarget, {
  41 |               waitUntil: NAV_WAIT_UNTIL,
  42 |               timeout: GOTO_TIMEOUT_MS,
  43 |             });
  44 |             await waitForPageShell(page);
  45 |             const baseHtml = await page.content();
  46 |             baseBlueprint = getStructuralBlueprint(baseHtml);
  47 |           } catch (err) {
  48 |             console.error(
  49 |               `Structure consistency: reference app failed [${locale}] ${pageConfig.name}:`,
  50 |               err,
  51 |             );
  52 |             baseBlueprint = "__reference_load_failed__";
  53 |           }
  54 | 
  55 |           let currentBlueprint = "";
  56 |           try {
  57 |             await page.goto(`/${path}`, {
  58 |               waitUntil: NAV_WAIT_UNTIL,
  59 |               timeout: GOTO_TIMEOUT_MS,
  60 |             });
  61 |             await waitForPageShell(page);
  62 |             const currentHtml = await page.content();
  63 |             currentBlueprint = getStructuralBlueprint(currentHtml);
  64 |           } catch (err) {
  65 |             console.error(
  66 |               `Structure consistency: current app failed [${locale}] ${pageConfig.name}:`,
  67 |               err,
  68 |             );
  69 |             currentBlueprint = "__current_load_failed__";
  70 |           }
  71 | 
> 72 |           expect(currentBlueprint).toBe(baseBlueprint);
     |                                    ^ Error: expect(received).toBe(expected) // Object.is equality
  73 |         });
  74 |       }
  75 |     }
  76 |   });
  77 | }
  78 | 
```