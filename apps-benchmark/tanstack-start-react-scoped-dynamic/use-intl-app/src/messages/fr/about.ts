export default {
  "about-header": {
    aboutThisBenchmark: "À propos de ce benchmark",
    thisIsAnOpenSource: "Il s'agit d'une application de test open source, pas d'un produit ou d'une entreprise. Son seul but est de fournir une application React multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.",
  },
  "about-grid": {
    whyThisExists: "Pourquoi cela existe",
    choosingAnI18nLibraryIs: "Choisir une bibliothèque i18n est une décision architecturale ayant des conséquences à long terme. La plupart des comparaisons se concentrent sur l'ergonomie de l'API, mais peu mesurent le coût en termes de performances : quel poids la bibliothèque ajoute-t-elle au bundle ? Comment cela affecte-t-il le rendu lorsque des milliers de clés de traduction sont chargées ? Le chargement différé aide-t-il réellement ou déplace-t-il simplement le coût ? Ce benchmark répond à ces questions avec des données réelles.",
    methodology: "Méthodologie",
    theSame10PageApp: "La même application de 10 pages est construite une fois par bibliothèque. Nous mesurons le bundle de production (via rollup-plugin-visualizer), effectuons des audits Lighthouse pour les métriques de chargement et utilisons React Profiler pour capturer les temps de rendu lors des changements de langue. Tous les tests sont effectués en CI sur un matériel identique pour garantir des résultats reproductibles.",
  },
  "what-we-measure": {
    bundleSizeImpact: "Impact sur la taille du bundle",
    theAdditionalJavascriptBytesSent: "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.",
    renderingOverhead: "Surcharge de rendu",
    howMuchExtraTimeThe: "Combien de temps supplémentaire la bibliothèque ajoute au suite de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des re-rendus inutiles dans l'arbre des composants.",
    hydrationCost: "Coût d'hydratation",
    duringSsrTranslationDataIs: "Pendant le SSR, les données de traduction sont sérialisées dans le HTML. Les dictionnaire volumineux augmentent le payload HTML et ralentissent l'hydratation — le moment en que la page devient interactive.",
    lazyLoadingEffectiveness: "Efficacité du chargement différé",
    whetherSplittingTranslationsByRoute: "Si le fractionnement des traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).",
    localeSwitchSpeed: "Vitesse de changement de langue",
    howFastTheAppCan: "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération des nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
    whatWeMeasure: "Ce que nous mesurons",
  }
};
