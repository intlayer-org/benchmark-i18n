const whyItMatters = {
  whyTheseMetricsMatter: "Pourquoi ces Métriques Comptent",
  bundleSize: "Taille du Bundle",
  theBundleIsTheData:
    "Le bundle représente les données envoyées à chaque utilisateur à travers le monde. Un bundle plus volumineux signifie des temps de téléchargement plus longs — particulièrement sur les connexions 3G lentes courantes dans de nombreuses régions. Les bibliothèques i18n varient considérablement en poids : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, plus les fichiers de traduction eux-mêmes.",
  renderingHydration: "Rendu & Hydratation",
  connectingALargeJsonDictionary:
    "Connecter un dictionnaire JSON volumineux à chaque composant crée une dépendance cachée : tout changement dans le contexte de traduction peut déclencher des re-rendus sur l'ensemble de l'arborescence. Pendant l'hydratation SSR, l'analyse et l'attachement d'objets de traduction massifs ajoutent de la latence avant que la page ne devienne interactive — impactant directement le Time to Interactive (TTI).",
  dynamicLoading: "Chargement Dynamique",
  loadingAllTranslationsUpfrontOverloads:
    "Charger toutes les traductions à l'avance surcharge la charge utile initiale. Le chargement dynamique (lazy) divise les traductions par route ou espace de noms, n'envoyant que ce dont la page actuelle a besoin. Cependant, le lazy loading introduit ses propres compromis : requêtes en cascade (waterfall), flash de contenu non traduit et complexité de mise en cache. Mesurer les deux stratégies est essentiel.",
};
export default whyItMatters;
