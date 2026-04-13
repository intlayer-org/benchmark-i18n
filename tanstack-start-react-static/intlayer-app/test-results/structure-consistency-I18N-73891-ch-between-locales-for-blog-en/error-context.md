# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: structure-consistency.test.ts >> I18N Structural Consistency >> Structure should match between locales for blog
- Location: ../../test-utils/src/structure-consistency-test.ts:16:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "<!DOCTYPE html><html lang=\"locale\" class=\"light\" style=\"color-scheme: light;\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title><title><link rel=\"modulepreload\" href=\"assetsmain-DphQUTpm.js\"><link rel=\"modulepreload\" href=\"assetsjsx-runtime-CUBmso4R.js\"><link rel=\"modulepreload\" href=\"assetspreload-helper-rov5CBGT.js\"><link rel=\"modulepreload\" href=\"assetsuseDictionary-CEDYLJ4b.js\"><link rel=\"modulepreload\" href=\"assetsMatch--ukx7GUf.js\"><link rel=\"modulepreload\" href=\"assetsusePerformanceMeasure-Db4YRdyo.js\"><link rel=\"modulepreload\" href=\"assetsroute-T2UsIWBS.js\"><link rel=\"modulepreload\" href=\"assetsblog-CXW1PnDj.js\"><link rel=\"stylesheet\" href=\"assetsstyles-0Bs1p9yY.css\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsBlogHeader-BKvNGspn.js\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsMockBanner-EQOJFjX3.js\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsBlogList-BvdqMlJ9.js\"><head><body class=\"antialiased [overflow-wrap:anywhere]\"><header class=\"sticky top-0 z-50 border-b border-border bg-card80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline active\" href=\"en\" data-status=\"active\" aria-current=\"page\"><a><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a href=\"en\" class=\"nav-link\"><a><a href=\"enabout\" class=\"nav-link\"><a><div class=\"relative\"><button type=\"button\" class=\"flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer\"><svg xmlns=\"http:www.w3.org2000svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-chevron-down transition-transform\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\"><path><svg><button><div><div><div><div class=\"flex items-center gap-4\"><a href=\"https:github.comintlayer-orgbenchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"><span><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"><path><svg><a><div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors\"><option value=\"en\" selected=\"\"><option><option value=\"fr\"><option><option value=\"es\"><option><option value=\"de\"><option><option value=\"it\"><option><option value=\"pt\"><option><option value=\"zh\"><option><option value=\"ja\"><option><option value=\"ko\"><option><option value=\"ru\"><option><select><div><button type=\"button\" aria-label=\"Theme mode: auto (system). Click to switch to light mode.\" title=\"Theme mode: auto (system). Click to switch to light mode.\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent80\"><button><div><nav><header><!--$--><div class=\"container py-16\"><!--$--><div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"><div><h1 class=\"mb-2 text-3xl font-bold text-foreground\"><h1><p class=\"mb-10 text-muted-foreground\"><p><!--$--><!--$--><div class=\"grid gap-6 md:grid-cols-2\"><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><div><!--$--><div><!--$--><footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><ul class=\"space-y-1\"><li><a href=\"https:github.comintlayer-orgbenchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><li><a href=\"enabout\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><li><a href=\"encontact\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><ul><div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"><div><div><footer><body><html>"
Received: "<!DOCTYPE html><html lang=\"locale\" class=\"light\" style=\"color-scheme: light;\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title><title><link rel=\"modulepreload\" href=\"assetsmain-DphQUTpm.js\"><link rel=\"modulepreload\" href=\"assetsjsx-runtime-CUBmso4R.js\"><link rel=\"modulepreload\" href=\"assetspreload-helper-rov5CBGT.js\"><link rel=\"modulepreload\" href=\"assetsuseDictionary-CEDYLJ4b.js\"><link rel=\"modulepreload\" href=\"assetsMatch--ukx7GUf.js\"><link rel=\"modulepreload\" href=\"assetsusePerformanceMeasure-Db4YRdyo.js\"><link rel=\"modulepreload\" href=\"assetsroute-T2UsIWBS.js\"><link rel=\"modulepreload\" href=\"assetsblog-CXW1PnDj.js\"><link rel=\"stylesheet\" href=\"assetsstyles-0Bs1p9yY.css\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsBlogHeader-BKvNGspn.js\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsMockBanner-EQOJFjX3.js\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsBlogList-BvdqMlJ9.js\"><head><body class=\"antialiased [overflow-wrap:anywhere]\"><header class=\"sticky top-0 z-50 border-b border-border bg-card80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline active\" href=\"fr\" data-status=\"active\" aria-current=\"page\"><a><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a href=\"fr\" class=\"nav-link\"><a><a href=\"frabout\" class=\"nav-link\"><a><div class=\"relative\"><button type=\"button\" class=\"flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer\"><svg xmlns=\"http:www.w3.org2000svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-chevron-down transition-transform\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\"><path><svg><button><div><div><div><div class=\"flex items-center gap-4\"><a href=\"https:github.comintlayer-orgbenchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"><span><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"><path><svg><a><div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors\"><option value=\"en\"><option><option value=\"fr\" selected=\"\"><option><option value=\"es\"><option><option value=\"de\"><option><option value=\"it\"><option><option value=\"pt\"><option><option value=\"zh\"><option><option value=\"ja\"><option><option value=\"ko\"><option><option value=\"ru\"><option><select><div><button type=\"button\" aria-label=\"Mode de thème : auto (système). Cliquez pour passer au mode clair.\" title=\"Mode de thème : auto (système). Cliquez pour passer au mode clair.\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent80\"><button><div><nav><header><!--$--><div class=\"container py-16\"><!--$--><div class=\"mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground\"><div><h1 class=\"mb-2 text-3xl font-bold text-foreground\"><h1><p class=\"mb-10 text-muted-foreground\"><p><!--$--><!--$--><div class=\"grid gap-6 md:grid-cols-2\"><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><article class=\"rounded-lg border border-border bg-card p-6\"><div class=\"mb-3 flex items-center gap-3\"><span class=\"rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground\"><span><span class=\"text-xs text-muted-foreground\"><span><div><h2 class=\"mb-2 text-lg font-semibold text-foreground\"><h2><p class=\"mb-4 text-sm text-muted-foreground\"><p><button type=\"button\" class=\"text-sm font-medium text-primary hover:underline\"><button><article><div><!--$--><div><!--$--><footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><ul class=\"space-y-1\"><li><a href=\"https:github.comintlayer-orgbenchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><li><a href=\"frabout\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><li><a href=\"frcontact\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><ul><div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"><div><div><footer><body><html>"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
        - link "i18n Bench" [ref=e5] [cursor=pointer]:
          - /url: /fr
        - generic [ref=e6]:
          - link "Accueil" [ref=e7] [cursor=pointer]:
            - /url: /fr
          - link "Méthodologie" [ref=e8] [cursor=pointer]:
            - /url: /fr/about
          - button "Pages de Test" [ref=e10] [cursor=pointer]:
            - text: Pages de Test
            - img [ref=e11]
      - generic [ref=e13]:
        - link "Aller sur GitHub" [ref=e14] [cursor=pointer]:
          - /url: https://github.com/intlayer-org/benchmark-i18n
          - generic [ref=e15]: Aller sur GitHub
          - img [ref=e16]
        - combobox [ref=e19]:
          - option "English"
          - option "français" [selected]
          - option "español"
          - option "Deutsch"
          - option "italiano"
          - option "português"
          - option "中文"
          - option "日本語"
          - option "한국어"
          - option "русский"
        - 'button "Mode de thème : auto (système). Cliquez pour passer au mode clair." [ref=e20]': "Thème : Auto"
  - generic [ref=e21]:
    - generic [ref=e22]: ⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.
    - heading "Blog" [level=1] [ref=e23]
    - paragraph [ref=e24]: Aperçus, tutoriels et analyses de la communauté i18n.
    - generic [ref=e25]:
      - article [ref=e26]:
        - generic [ref=e27]:
          - generic [ref=e28]: Benchmark
          - generic [ref=e29]: 15/03/2026
        - heading "15/03/2026" [level=2] [ref=e30]
        - paragraph [ref=e31]: Nous avons testé 12 bibliothèques d'internationalisation différentes sur la performance, la taille du bundle et la DX. Voici les résultats surprenants.
        - button "Lire la suite →" [ref=e32]
      - article [ref=e33]:
        - generic [ref=e34]:
          - generic [ref=e35]: Tutorial
          - generic [ref=e36]: 8 mars 2026
        - heading "Comment réduire votre bundle i18n de 60 %" [level=2] [ref=e37]
        - paragraph [ref=e38]: Stratégies pratiques pour optimiser les bundles de traduction, y compris le lazy loading, le fractionnement du code et les optimisations au moment de la compilation.
        - button "Lire la suite →" [ref=e39]
      - article [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e42]: Analysis
          - generic [ref=e43]: 28 février 2026
        - heading "L'état de l'internationalisation dans React" [level=2] [ref=e44]
        - paragraph [ref=e45]: Un aperçu de l'écosystème i18n actuel dans React, couvrant les tendances, les modèles émergents et les préférences de la communauté.
        - button "Lire la suite →" [ref=e46]
      - article [ref=e47]:
        - generic [ref=e48]:
          - generic [ref=e49]: Tutorial
          - generic [ref=e50]: 15 février 2026
        - heading "Migrer de react-i18next vers Lingui" [level=2] [ref=e51]
        - paragraph [ref=e52]: Un guide étape par étape sur la migration d'une application de production avec 50 000 clés de traduction de react-i18next vers Lingui.
        - button "Lire la suite →" [ref=e53]
      - article [ref=e54]:
        - generic [ref=e55]:
          - generic [ref=e56]: Analysis
          - generic [ref=e57]: 1er février 2026
        - 'heading "Server Components et i18n : qu''est-ce qui change ?" [level=2] [ref=e58]'
        - paragraph [ref=e59]: Les React Server Components introduisent de nouveaux modèles pour l'internationalisation. Nous explorons les implications et les meilleures pratiques.
        - button "Lire la suite →" [ref=e60]
      - article [ref=e61]:
        - generic [ref=e62]:
          - generic [ref=e63]: Meta
          - generic [ref=e64]: 20 janvier 2026
        - 'heading "Méthodologie du Benchmark : comment nous testons" [level=2] [ref=e65]'
        - paragraph [ref=e66]: Un regard transparent sur notre méthodologie de benchmark, incluant les environnements de test, les méthodes statistiques et la reproductibilité.
        - button "Lire la suite →" [ref=e67]
  - contentinfo [ref=e68]:
    - generic [ref=e69]:
      - generic [ref=e70]:
        - generic [ref=e71]:
          - heading "i18n Benchmark" [level=3] [ref=e72]
          - paragraph [ref=e73]: An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.
        - generic [ref=e74]:
          - heading "Resources" [level=3] [ref=e75]
          - list [ref=e76]:
            - listitem [ref=e77]:
              - link "GitHub" [ref=e78] [cursor=pointer]:
                - /url: https://github.com/intlayer-org/benchmark-i18n
            - listitem [ref=e79]:
              - link "Methodology" [ref=e80] [cursor=pointer]:
                - /url: /fr/about
            - listitem [ref=e81]:
              - link "Contributing" [ref=e82] [cursor=pointer]:
                - /url: /fr/contact
        - generic [ref=e83]:
          - heading "Contact" [level=3] [ref=e84]
          - paragraph [ref=e85]: contact@intlayer.org
      - generic [ref=e86]: i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.
```

# Test source

```ts
  1  | /**
  2  |  * Registers Playwright tests that compare HTML structure across locales.
  3  |  *
  4  |  * Usage in each app's structure-consistency.test.ts:
  5  |  *   import { registerStructureConsistencyTest } from "test-utils/structure-consistency-test";
  6  |  *   registerStructureConsistencyTest();
  7  |  */
  8  | 
  9  | import { test, expect } from '@playwright/test';
  10 | import { DEFAULT_PAGES, DEFAULT_LOCALES } from './pages-test';
  11 | import { getStructuralBlueprint } from './structure-consistency';
  12 | 
  13 | export function registerStructureConsistencyTest(): void {
  14 |   test.describe('I18N Structural Consistency', () => {
  15 |     for (const pageConfig of DEFAULT_PAGES) {
  16 |       test(`Structure should match between locales for ${pageConfig.name}`, async ({ page }) => {
  17 |         const blueprints: Record<string, string> = {};
  18 | 
  19 |         for (const locale of DEFAULT_LOCALES) {
  20 |           const url = `/${locale}${pageConfig.path === '/' ? '' : pageConfig.path}`;
  21 | 
  22 |           await page.goto(url, { waitUntil: 'networkidle' });
  23 | 
  24 |           const html = await page.content();
  25 |           blueprints[locale] = getStructuralBlueprint(html);
  26 |         }
  27 | 
> 28 |         expect(blueprints['fr']).toBe(blueprints['en']);
     |                                  ^ Error: expect(received).toBe(expected) // Object.is equality
  29 |       });
  30 |     }
  31 |   });
  32 | }
  33 | 
```