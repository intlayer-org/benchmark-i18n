const whatWeMeasure = {
  bundleSizeImpact: "Impact sur la taille du bundle",
  theAdditionalJavascriptBytesSent:
    "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers de traduction sont inclus. Cela affecte directement le temps de téléchargement sur les réseaux lents.",
  renderingOverhead: "Surcharge de rendu",
  howMuchExtraTimeThe:
    "Combien de temps supplémentaire la bibliothèque ajoute au cycle de rendu de React. Les bibliothèques qui injectent des traductions via un seul fournisseur de contexte peuvent provoquer des rendus inutiles dans tout l'arbre des composants.",
  hydrationCost: "Coût d'hydratation",
  duringSsrTranslationDataIs:
    "Pendant le SSR, les données de traduction sont sérialisées en HTML. Les dictionnaires volumineux augmentent la charge utile HTML et ralentissent l'hydratation — le moment où la page devient interactive.",
  lazyLoadingEffectiveness: "Efficacité du lazy loading",
  whetherSplittingTranslationsByRoute:
    "Si diviser les traductions par route ou par espace de noms réduit réellement la charge initiale, et quels compromis cela introduit (requêtes en cascade, FOUC, complexité du cache).",
  localeSwitchSpeed: "Vitesse de changement de langue",
  howFastTheAppCan:
    "À quelle vitesse l'application peut passer d'une langue à une autre au moment de l'exécution — y compris la récupération de nouvelles traductions, le rendu des composants et la mise à jour du DOM.",
  whatWeMeasure: "Ce que nous mesurons",
};
export default whatWeMeasure;
