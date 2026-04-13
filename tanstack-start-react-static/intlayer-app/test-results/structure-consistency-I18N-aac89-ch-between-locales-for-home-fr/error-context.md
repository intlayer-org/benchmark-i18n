# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: structure-consistency.test.ts >> I18N Structural Consistency >> Structure should match between locales for home
- Location: ../../test-utils/src/structure-consistency-test.ts:16:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "<!DOCTYPE html><html lang=\"locale\" class=\"light\" style=\"color-scheme: light;\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title><title><link rel=\"modulepreload\" href=\"assetsmain-DphQUTpm.js\"><link rel=\"modulepreload\" href=\"assetsjsx-runtime-CUBmso4R.js\"><link rel=\"modulepreload\" href=\"assetspreload-helper-rov5CBGT.js\"><link rel=\"modulepreload\" href=\"assetsuseDictionary-CEDYLJ4b.js\"><link rel=\"modulepreload\" href=\"assetsMatch--ukx7GUf.js\"><link rel=\"modulepreload\" href=\"assetsusePerformanceMeasure-Db4YRdyo.js\"><link rel=\"modulepreload\" href=\"assetsroute-T2UsIWBS.js\"><link rel=\"modulepreload\" href=\"assets_locale-gne3pqKb.js\"><link rel=\"stylesheet\" href=\"assetsstyles-0Bs1p9yY.css\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsHero-C58qtUNr.js\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsWhyItMatters-C2cGWWhK.js\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsUnderstandingImpact-DV4y-3I_.js\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsResultsTable-B_4HC7B2.js\"><head><body class=\"antialiased [overflow-wrap:anywhere]\"><header class=\"sticky top-0 z-50 border-b border-border bg-card80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline active\" href=\"en\" data-status=\"active\" aria-current=\"page\"><a><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a class=\"nav-link is-active\" href=\"en\" data-status=\"active\" aria-current=\"page\"><a><a href=\"enabout\" class=\"nav-link\"><a><div class=\"relative\"><button type=\"button\" class=\"flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer\"><svg xmlns=\"http:www.w3.org2000svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-chevron-down transition-transform\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\"><path><svg><button><div><div><div><div class=\"flex items-center gap-4\"><a href=\"https:github.comintlayer-orgbenchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"><span><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"><path><svg><a><div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors\"><option value=\"en\" selected=\"\"><option><option value=\"fr\"><option><option value=\"es\"><option><option value=\"de\"><option><option value=\"it\"><option><option value=\"pt\"><option><option value=\"zh\"><option><option value=\"ja\"><option><option value=\"ko\"><option><option value=\"ru\"><option><select><div><button type=\"button\" aria-label=\"Theme mode: auto (system). Click to switch to light mode.\" title=\"Theme mode: auto (system). Click to switch to light mode.\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent80\"><button><div><nav><header><!--$--><div class=\"container py-16\"><!--$--><section class=\"mb-16 text-center\"><h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\"><h1><p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\"><p><div class=\"mt-8 flex justify-center gap-4\"><button type=\"button\" class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity\"><button><button type=\"button\" class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors\"><button><div><section><!--$--><!--$--><section class=\"mb-16\"><h2 class=\"mb-6 text-2xl font-bold text-foreground\"><h2><div class=\"grid gap-6 md:grid-cols-3\"><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div><section><!--$--><!--$--><section class=\"mb-16 mx-auto max-w-3xl space-y-6\"><h2 class=\"text-2xl font-bold text-foreground\"><h2><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><ul class=\"mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5\"><li><li><li><li><li><li><ul><div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><ul class=\"mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5\"><li><strong class=\"text-foreground\"><strong><li><li><strong class=\"text-foreground\"><strong><!-- --><li><li><strong class=\"text-foreground\"><strong><!-- --><li><ul><div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><section><!--$--><!--$--><section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"><h2><div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=\"bg-muted\"><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"><th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"><th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"><th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"><th><tr><thead><tbody><tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tbody><table><div><section><!--$--><div><!--$--><footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><ul class=\"space-y-1\"><li><a href=\"https:github.comintlayer-orgbenchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><li><a href=\"enabout\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><li><a href=\"encontact\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><ul><div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"><div><div><footer><body><html>"
Received: "<!DOCTYPE html><html lang=\"locale\" class=\"light\" style=\"color-scheme: light;\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title><title><link rel=\"modulepreload\" href=\"assetsmain-DphQUTpm.js\"><link rel=\"modulepreload\" href=\"assetsjsx-runtime-CUBmso4R.js\"><link rel=\"modulepreload\" href=\"assetspreload-helper-rov5CBGT.js\"><link rel=\"modulepreload\" href=\"assetsuseDictionary-CEDYLJ4b.js\"><link rel=\"modulepreload\" href=\"assetsMatch--ukx7GUf.js\"><link rel=\"modulepreload\" href=\"assetsusePerformanceMeasure-Db4YRdyo.js\"><link rel=\"modulepreload\" href=\"assetsroute-T2UsIWBS.js\"><link rel=\"modulepreload\" href=\"assets_locale-gne3pqKb.js\"><link rel=\"stylesheet\" href=\"assetsstyles-0Bs1p9yY.css\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsHero-C58qtUNr.js\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsWhyItMatters-C2cGWWhK.js\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsUnderstandingImpact-DV4y-3I_.js\"><link rel=\"modulepreload\" as=\"script\" crossorigin=\"\" href=\"assetsResultsTable-B_4HC7B2.js\"><head><body class=\"antialiased [overflow-wrap:anywhere]\"><header class=\"sticky top-0 z-50 border-b border-border bg-card80 backdrop-blur-lg\"><nav class=\"container flex h-16 items-center justify-between\"><div class=\"flex items-center gap-8\"><a class=\"text-lg font-bold tracking-tight text-primary no-underline active\" href=\"fr\" data-status=\"active\" aria-current=\"page\"><a><div class=\"hidden items-center gap-6 text-sm font-medium md:flex\"><a class=\"nav-link is-active\" href=\"fr\" data-status=\"active\" aria-current=\"page\"><a><a href=\"frabout\" class=\"nav-link\"><a><div class=\"relative\"><button type=\"button\" class=\"flex items-center gap-1 nav-link bg-transparent border-none cursor-pointer\"><svg xmlns=\"http:www.w3.org2000svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-chevron-down transition-transform\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\"><path><svg><button><div><div><div><div class=\"flex items-center gap-4\"><a href=\"https:github.comintlayer-orgbenchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-muted-foreground transition hover:text-foreground\"><span class=\"sr-only\"><span><svg viewBox=\"0 0 16 16\" aria-hidden=\"true\" width=\"20\" height=\"20\"><path fill=\"currentColor\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"><path><svg><a><div class=\"flex items-center gap-2\"><select class=\"h-8 rounded-md border border-border bg-card px-2 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-primary transition-colors\"><option value=\"en\"><option><option value=\"fr\" selected=\"\"><option><option value=\"es\"><option><option value=\"de\"><option><option value=\"it\"><option><option value=\"pt\"><option><option value=\"zh\"><option><option value=\"ja\"><option><option value=\"ko\"><option><option value=\"ru\"><option><select><div><button type=\"button\" aria-label=\"Mode de thème : auto (système). Cliquez pour passer au mode clair.\" title=\"Mode de thème : auto (système). Cliquez pour passer au mode clair.\" class=\"rounded-md border border-border bg-accent px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent80\"><button><div><nav><header><!--$--><div class=\"container py-16\"><!--$--><section class=\"mb-16 text-center\"><h1 class=\"mb-4 text-4xl font-bold tracking-tight text-foreground\"><h1><p class=\"mx-auto max-w-2xl text-lg text-muted-foreground\"><p><div class=\"mt-8 flex justify-center gap-4\"><button type=\"button\" class=\"rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity\"><button><button type=\"button\" class=\"rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors\"><button><div><section><!--$--><!--$--><section class=\"mb-16\"><h2 class=\"mb-6 text-2xl font-bold text-foreground\"><h2><div class=\"grid gap-6 md:grid-cols-3\"><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div><section><!--$--><!--$--><section class=\"mb-16 mx-auto max-w-3xl space-y-6\"><h2 class=\"text-2xl font-bold text-foreground\"><h2><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><ul class=\"mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5\"><li><li><li><li><li><li><ul><div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><ul class=\"mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5\"><li><strong class=\"text-foreground\"><strong><li><li><strong class=\"text-foreground\"><strong><!-- --><li><li><strong class=\"text-foreground\"><strong><!-- --><li><ul><div><div class=\"rounded-lg border border-border bg-card p-6\"><h3 class=\"mb-2 text-lg font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><section><!--$--><!--$--><section><h2 class=\"mb-6 text-2xl font-bold text-foreground\"><h2><div class=\"overflow-x-auto rounded-lg border border-border\"><table class=\"w-full text-sm\"><thead class=\"bg-muted\"><tr><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"><th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"><th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"><th><th class=\"px-4 py-3 text-left font-medium text-muted-foreground\"><th><tr><thead><tbody><tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tr class=\"border-t border-border\"><td class=\"px-4 py-3 font-medium text-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><td class=\"px-4 py-3 text-muted-foreground\"><td><tr><tbody><table><div><section><!--$--><div><!--$--><footer class=\"mt-20 border-t border-border bg-card\"><div class=\"container py-8\"><div class=\"grid gap-8 md:grid-cols-3\"><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><ul class=\"space-y-1\"><li><a href=\"https:github.comintlayer-orgbenchmark-i18n\" target=\"_blank\" rel=\"noreferrer\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><li><a href=\"frabout\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><li><a href=\"frcontact\" class=\"text-sm text-muted-foreground hover:text-foreground transition-colors\"><a><li><ul><div><div><h3 class=\"mb-2 text-sm font-semibold text-foreground\"><h3><p class=\"text-sm text-muted-foreground\"><p><div><div><div class=\"mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground\"><div><div><footer><body><html>"
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
    - generic [ref=e22]:
      - heading "i18n Benchmark" [level=1] [ref=e23]
      - paragraph [ref=e24]: Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.
      - generic [ref=e25]:
        - button "Voir les Résultats" [ref=e26]
        - button "Methodology" [ref=e27]
    - generic [ref=e28]:
      - heading "Pourquoi ces Métriques Comptent" [level=2] [ref=e29]
      - generic [ref=e30]:
        - generic [ref=e31]:
          - heading "Taille du Bundle" [level=3] [ref=e32]
          - paragraph [ref=e33]: "Le bundle représente les données envoyées à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement en poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes."
        - generic [ref=e34]:
          - heading "Rendu & Hydratation" [level=3] [ref=e35]
          - paragraph [ref=e36]: "Connecter un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arborescence. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI)."
        - generic [ref=e37]:
          - heading "Chargement Dynamique" [level=3] [ref=e38]
          - paragraph [ref=e39]: "Charger toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (lazy) divise les traductions par route ou espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade (waterfall), flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel."
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
      - heading "Résultats d'échantillon" [level=2] [ref=e63]
      - table [ref=e65]:
        - rowgroup [ref=e66]:
          - row "Library Taille du bundle Temps de consultation Chargement différé" [ref=e67]:
            - columnheader "Library" [ref=e68]
            - columnheader "Taille du bundle" [ref=e69]
            - columnheader "Temps de consultation" [ref=e70]
            - columnheader "Chargement différé" [ref=e71]
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
      - generic [ref=e111]: i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.
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