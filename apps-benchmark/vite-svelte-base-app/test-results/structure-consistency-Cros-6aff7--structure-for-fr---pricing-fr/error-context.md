# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: structure-consistency.test.ts >> Cross-App Structural Consistency - vite-svelte-static >> Match Reference App structure for [fr] - pricing
- Location: ../../test-utils/src/structure-consistency-test.ts:24:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "<!DOCTYPE html><html lang=\"locale\" class=\"light\" style=\"color-scheme: light;\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title><title><head><body class=\"[overflow-wrap:anywhere] antialiased\"><div id=\"mount\"><header class=\"backdrop-blur-lg bg-card80 border-b border-border sticky top-0 z-50\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex gap-8 items-center\"><a href=\"locale\" class=\"font-bold no-underline text-lg text-primary tracking-tight\"><a href=\"\"><div class=\"font-medium gap-6 hidden items-center md:flex text-sm\"><a href=\"locale\" class=\"nav-link\"><a href=\"\"><a href=\"localeabout\" class=\"nav-link\"><a href=\"\"><div class=\"relative\"><button class=\"bg-transparent border-none cursor-pointer flex gap-1 items-center nav-link\" type=\"button\"><svg><path d=\"m6 9 6 6 6-6\"><path><svg><button><div><div><div><div class=\"flex gap-4 items-center\"><a href=\"https:github.comintlayer-orgbenchmark-i18n\" class=\"hover:text-foreground text-muted-foreground transition\"><span class=\"sr-only\"><span><svg><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"><path><svg><a href=\"\"><div class=\"flex gap-2 items-center\"><select class=\"bg-card border border-border focus:outline-none focus:ring-1 focus:ring-primary font-medium h-8 px-2 rounded-md text-xs transition-colors\"><option value=\"en\"><option><option value=\"fr\"><option><option value=\"es\"><option><option value=\"de\"><option><option value=\"it\"><option><option value=\"pt\"><option><option value=\"zh\"><option><option value=\"ja\"><option><option value=\"ko\"><option><option value=\"ru\"><option><select><div><button aria-label=\"normalized\" class=\"bg-accent border border-border font-medium hover:bg-accent80 px-3 py-1.5 rounded-md text-foreground text-xs transition-colors\" title=\"normalized\" type=\"button\"><button><div><nav><header><div class=\"container py-16\"><div class=\"bg-muted border border-border mb-6 px-4 py-3 rounded-md text-center text-muted-foreground text-sm\"><div><div class=\"mb-12 text-center\"><h1 class=\"font-bold mb-3 text-3xl text-foreground\"><h1><p class=\"text-muted-foreground\"><p><div><div class=\"gap-6 grid md:grid-cols-3\"><div class=\"bg-card border border-border flex flex-col p-6 rounded-lg\"><h3 class=\"font-semibold text-foreground text-lg\"><h3><div class=\"my-4\"><span class=\"font-bold text-3xl text-foreground\"><span><span class=\"text-muted-foreground text-sm\"><span><div><ul class=\"flex-1 mb-6 space-y-2\"><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><ul><button class=\"border border-border font-medium hover:bg-accent hover:opacity-90 px-4 py-2 rounded-md text-foreground text-sm transition-opacity w-full\" type=\"button\"><button><div><div class=\"bg-primary5 border border-primary flex flex-col p-6 ring-1 ring-primary rounded-lg\"><h3 class=\"font-semibold text-foreground text-lg\"><h3><div class=\"my-4\"><span class=\"font-bold text-3xl text-foreground\"><span><span class=\"text-muted-foreground text-sm\"><span><div><ul class=\"flex-1 mb-6 space-y-2\"><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><ul><button class=\"bg-primary font-medium hover:opacity-90 px-4 py-2 rounded-md text-primary-foreground text-sm transition-opacity w-full\" type=\"button\"><button><div><div class=\"bg-card border border-border flex flex-col p-6 rounded-lg\"><h3 class=\"font-semibold text-foreground text-lg\"><h3><div class=\"my-4\"><span class=\"font-bold text-3xl text-foreground\"><span><span class=\"text-muted-foreground text-sm\"><span><div><ul class=\"flex-1 mb-6 space-y-2\"><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><ul><button class=\"border border-border font-medium hover:bg-accent hover:opacity-90 px-4 py-2 rounded-md text-foreground text-sm transition-opacity w-full\" type=\"button\"><button><div><div><div><footer class=\"bg-card border-border border-t mt-20\"><div class=\"container py-8\"><div class=\"gap-8 grid md:grid-cols-3\"><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><ul class=\"space-y-1\"><li><a href=\"https:github.comintlayer-orgbenchmark-i18n\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><li><li><a href=\"localeabout\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><li><li><a href=\"localecontact\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><li><ul><div><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div><div class=\"border-border border-t mt-8 pt-4 text-center text-muted-foreground text-xs\"><div><div><footer><div><body><html>"
Received: "<!DOCTYPE html><html lang=\"locale\" class=\"light\" style=\"color-scheme: light;\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title><title><head><body class=\"[overflow-wrap:anywhere] antialiased\"><div id=\"mount\"><!----><!----><header class=\"backdrop-blur-lg bg-card80 border-b border-border sticky top-0 z-50\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex gap-8 items-center\"><a href=\"locale\" class=\"font-bold no-underline text-lg text-primary tracking-tight\"><a href=\"\"><div class=\"font-medium gap-6 hidden items-center md:flex text-sm\"><a href=\"locale\" class=\"nav-link\"><a href=\"\"><a href=\"localeabout\" class=\"nav-link\"><a href=\"\"><div class=\"relative\"><button class=\"bg-transparent border-none cursor-pointer flex gap-1 items-center nav-link\" type=\"button\"><svg><!----><path d=\"m6 9 6 6 6-6\"><path><!----><!----><!----><svg><!----><button><!----><div><div><div><div class=\"flex gap-4 items-center\"><a href=\"https:github.comintlayer-orgbenchmark-i18n\" class=\"hover:text-foreground text-muted-foreground transition\"><span class=\"sr-only\"><span><svg><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"><path><svg><a href=\"\"><div class=\"flex gap-2 items-center\"><select class=\"bg-card border border-border focus:outline-none focus:ring-1 focus:ring-primary font-medium h-8 px-2 rounded-md text-xs transition-colors\"><option value=\"en\"><option><option value=\"fr\"><option><option value=\"es\"><option><option value=\"de\"><option><option value=\"it\"><option><option value=\"pt\"><option><option value=\"zh\"><option><option value=\"ja\"><option><option value=\"ko\"><option><option value=\"ru\"><option><select><div><!----><button aria-label=\"normalized\" class=\"bg-accent border border-border font-medium hover:bg-accent80 px-3 py-1.5 rounded-md text-foreground text-xs transition-colors\" title=\"normalized\" type=\"button\"><button><!----><div><nav><header><!----><!----><div class=\"container py-16\"><!----><div class=\"bg-muted border border-border mb-6 px-4 py-3 rounded-md text-center text-muted-foreground text-sm\"><div><!----><div class=\"mb-12 text-center\"><h1 class=\"font-bold mb-3 text-3xl text-foreground\"><h1><p class=\"text-muted-foreground\"><p><div><!----><div class=\"gap-6 grid md:grid-cols-3\"><div class=\"bg-card border border-border flex flex-col p-6 rounded-lg\"><h3 class=\"font-semibold text-foreground text-lg\"><h3><div class=\"my-4\"><span class=\"font-bold text-3xl text-foreground\"><span><span class=\"text-muted-foreground text-sm\"><span><div><ul class=\"flex-1 mb-6 space-y-2\"><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><ul><button class=\"border border-border font-medium hover:bg-accent hover:opacity-90 px-4 py-2 rounded-md text-foreground text-sm transition-opacity w-full\" type=\"button\"><button><div><div class=\"bg-primary5 border border-primary flex flex-col p-6 ring-1 ring-primary rounded-lg\"><h3 class=\"font-semibold text-foreground text-lg\"><h3><div class=\"my-4\"><span class=\"font-bold text-3xl text-foreground\"><span><span class=\"text-muted-foreground text-sm\"><span><div><ul class=\"flex-1 mb-6 space-y-2\"><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><ul><button class=\"bg-primary font-medium hover:opacity-90 px-4 py-2 rounded-md text-primary-foreground text-sm transition-opacity w-full\" type=\"button\"><button><div><div class=\"bg-card border border-border flex flex-col p-6 rounded-lg\"><h3 class=\"font-semibold text-foreground text-lg\"><h3><div class=\"my-4\"><span class=\"font-bold text-3xl text-foreground\"><span><span class=\"text-muted-foreground text-sm\"><span><div><ul class=\"flex-1 mb-6 space-y-2\"><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><li class=\"flex gap-2 items-center text-muted-foreground text-sm\"><span class=\"text-primary\"><span><li><ul><button class=\"border border-border font-medium hover:bg-accent hover:opacity-90 px-4 py-2 rounded-md text-foreground text-sm transition-opacity w-full\" type=\"button\"><button><div><div><!----><div><!----><footer class=\"bg-card border-border border-t mt-20\"><div class=\"container py-8\"><div class=\"gap-8 grid md:grid-cols-3\"><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><ul class=\"space-y-1\"><li><a href=\"https:github.comintlayer-orgbenchmark-i18n\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><!----><li><li><a href=\"localeabout\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><!----><li><li><a href=\"localecontact\" class=\"hover:text-foreground text-muted-foreground text-sm transition-colors\"><a href=\"\"><!----><li><ul><div><div><h3 class=\"font-semibold mb-2 text-foreground text-sm\"><h3><p class=\"text-muted-foreground text-sm\"><p><div><div><div class=\"border-border border-t mt-8 pt-4 text-center text-muted-foreground text-xs\"><div><div><footer><!----><div><body><html>"
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
    - generic [ref=e22]: ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.
    - generic [ref=e23]:
      - heading "Simple, Transparent Pricing" [level=1] [ref=e24]
      - paragraph [ref=e25]: Choose the plan that fits your team. No hidden fees.
    - generic [ref=e26]:
      - generic [ref=e27]:
        - heading "Starter" [level=3] [ref=e28]
        - generic [ref=e29]: $0 forever
        - list [ref=e30]:
          - listitem [ref=e31]:
            - generic [ref=e32]: ✓
            - text: 5 benchmark runs/day
          - listitem [ref=e33]:
            - generic [ref=e34]: ✓
            - text: 3 libraries
          - listitem [ref=e35]:
            - generic [ref=e36]: ✓
            - text: Community support
          - listitem [ref=e37]:
            - generic [ref=e38]: ✓
            - text: Public results
        - button "Get Started" [ref=e39]
      - generic [ref=e40]:
        - heading "Pro" [level=3] [ref=e41]
        - generic [ref=e42]: $29 /month
        - list [ref=e43]:
          - listitem [ref=e44]:
            - generic [ref=e45]: ✓
            - text: Unlimited runs
          - listitem [ref=e46]:
            - generic [ref=e47]: ✓
            - text: All libraries
          - listitem [ref=e48]:
            - generic [ref=e49]: ✓
            - text: Priority support
          - listitem [ref=e50]:
            - generic [ref=e51]: ✓
            - text: Private results
          - listitem [ref=e52]:
            - generic [ref=e53]: ✓
            - text: CI integration
          - listitem [ref=e54]:
            - generic [ref=e55]: ✓
            - text: Historical data
        - button "Get Started" [ref=e56]
      - generic [ref=e57]:
        - heading "Enterprise" [level=3] [ref=e58]
        - generic [ref=e59]: Custom
        - list [ref=e60]:
          - listitem [ref=e61]:
            - generic [ref=e62]: ✓
            - text: Everything in Pro
          - listitem [ref=e63]:
            - generic [ref=e64]: ✓
            - text: On-premise option
          - listitem [ref=e65]:
            - generic [ref=e66]: ✓
            - text: SSO & SAML
          - listitem [ref=e67]:
            - generic [ref=e68]: ✓
            - text: Dedicated account manager
          - listitem [ref=e69]:
            - generic [ref=e70]: ✓
            - text: Custom SLAs
          - listitem [ref=e71]:
            - generic [ref=e72]: ✓
            - text: Audit logs
          - listitem [ref=e73]:
            - generic [ref=e74]: ✓
            - text: Training sessions
        - button "Contact Sales" [ref=e75]
  - contentinfo [ref=e76]:
    - generic [ref=e77]:
      - generic [ref=e78]:
        - generic [ref=e79]:
          - heading "i18n Benchmark" [level=3] [ref=e80]
          - paragraph [ref=e81]: An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.
        - generic [ref=e82]:
          - heading "Resources" [level=3] [ref=e83]
          - list [ref=e84]:
            - listitem [ref=e85]:
              - link "GitHub" [ref=e86] [cursor=pointer]:
                - /url: https://github.com/intlayer-org/benchmark-i18n
            - listitem [ref=e87]:
              - link "Methodology" [ref=e88] [cursor=pointer]:
                - /url: /fr/about
            - listitem [ref=e89]:
              - link "Contributing" [ref=e90] [cursor=pointer]:
                - /url: /fr/contact
        - generic [ref=e91]:
          - heading "Contact" [level=3] [ref=e92]
          - paragraph [ref=e93]: contact@intlayer.org
      - generic [ref=e94]: i18n Benchmark — Open-source project. Built with Svelte, Vite, and a client-side router.
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