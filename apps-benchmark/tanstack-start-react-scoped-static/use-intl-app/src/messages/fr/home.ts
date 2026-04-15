export default {
  "hero": {
    aTestApplicationDesignedTo: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
    viewResults: "Voir les résultats",
  },
  "why-it-matters": {
    whyTheseMetricsMatter: "Pourquoi ces mesures sont importantes",
    bundleSize: "Taille du bundle",
    theBundleIsTheData: "Le bundle représente les données envoyées à chaque utilisateur dans le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur des connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement dans leur poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
    renderingHydration: "Rendu & Hydratation",
    connectingALargeJsonDictionary: "La connexion d'un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arbre. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
    dynamicLoading: "Chargement dynamique",
    loadingAllTranslationsUpfrontOverloads: "Le chargement de toutes les traductions à l'avance surcharge le payload initial. Le chargement dynamique (lazy) divise les traductions par route ou par namespace, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.",
  },
  "understanding-impact": {
    understandingTheImpact: "Comprendre l'impact",
    whyASingleLargeJson: "Pourquoi un seul JSON volumineux peut nuire aux performances",
    manyI18nLibrariesStoreTranslations: "De nombreuses bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsque cet objet est volumineux (des milliers de clés), chaque composant qui consomme des traductions détient une référence à l'ensemble du dictionnaire. Cela signifie :",
    theJsonMustBeParsed: "Le JSON doit être analysé à chaque chargement de page — bloquant le thread principal.",
    contextBasedArchitecturesCanCause: "Les architectures basées sur le contexte peuvent provoquer des re-rendus en cascade lorsque la langue change, car chaque consommateur est notifié même si ses clés spécifiques n'ont pas changé.",
    duringServerSideRenderingThe: "Lors du rendu côté serveur, le dictionnaire complet est sérialisé dans le payload HTML, augmentant la taille du document qui doit être téléchargé et hydraté.",
    theTradeOffsOfDynamic: "Les compromis du chargement dynamique",
    splittingTranslationsIntoPerRoute: "La division des traductions en morceaux par route ou par espace de noms peut réduire considérablement le payload initial. Mais cela introduit de nouveaux défis :",
    waterfallRequests: "Requêtes en cascade :",
    flashOfUntranslatedContentFouc: "Flash de contenu non traduit (FOUC) :",
    cacheInvalidation: "Invalidation du cache :",
    whatThisBenchmarkMeasures: "Ce que ce benchmark mesure",
    thisTestAppProvidesA: "Cette application de test fournit un environnement contrôlé — 10 pages avec un contenu réaliste — pour comparer les bibliothèques i18n selon trois axes : le poids qu'elles ajoutent à votre bundle JavaScript, le temps passé à analyser et à rendre le contenu traduit, et l'efficacité de leurs stratégies de fractionnement de code et de chargement différé. Chaque bibliothèque est intégrée dans la même application afin que les résultats soient directement comparables.",
  },
  "results-table": {
    sampleResults: "Exemples de résultats",
    bundleSize: "Taille du bundle",
    lookupTime: "Temps de recherche",
    lazyLoading: "Chargement différé",
  }
};
