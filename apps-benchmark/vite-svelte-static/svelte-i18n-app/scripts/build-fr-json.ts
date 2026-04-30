/**
 * Builds French strings in fr.json from English (en.json) leaves.
 * Run: bun scripts/build-fr-json.ts
 */
import * as fs from "node:fs";
import * as path from "node:path";

const root = path.join(import.meta.dir, "..");
const enPath = path.join(root, "src/locales/en.json");
const frPath = path.join(root, "src/locales/fr.json");

type Json = string | number | boolean | null | Json[] | { [k: string]: Json };

const frLeaves: Record<string, string> = {
  "shared.appName": "Bench i18n",
  "shared.siteName": "Benchmark i18n",
  "shared.contactEmail": "contact@intlayer.org",
  "shared.goToGithub": "Aller sur GitHub",
  "header.home": "Accueil",
  "header.methodology": "Méthodologie",
  "header.mockPages": "Pages fictives",
  "header.products": "Produits",
  "header.pricing": "Tarifs",
  "header.team": "Équipe",
  "header.blog": "Blog",
  "header.careers": "Carrières",
  "header.faq": "FAQ",
  "header.contact": "Contact",
  "header.settings": "Paramètres",
  "footer.title": "Benchmark i18n",
  "footer.description":
    "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
  "footer.resources": "Ressources",
  "footer.github": "GitHub",
  "footer.methodology": "Méthodologie",
  "footer.contributing": "Contribuer",
  "footer.contact": "Contact",
  "footer.builtWith":
    "Benchmark i18n — Projet open source. Construit avec Svelte, Vite et un routeur côté client.",
  "themeToggle.auto": "Thème : automatique",
  "themeToggle.dark": "Thème : sombre",
  "themeToggle.light": "Thème : clair",
  "themeToggle.labelAuto":
    "Mode thème : automatique (système). Cliquez pour passer en mode clair.",
  "themeToggle.labelOther": "Mode thème : {mode}. Cliquez pour changer de mode.",
  "mockBanner":
    "⚠️ Cette page contient des données fictives à des fins de benchmark uniquement. Elle n'est liée à aucune activité commerciale ou service réel.",
  "home.hero.title": "Benchmark i18n",
  "home.hero.description":
    "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
  "home.hero.viewResults": "Voir les résultats",
  "home.hero.methodology": "Méthodologie",
  "home.whyItMatters.title": "Pourquoi ces métriques comptent",
  "home.whyItMatters.bundleSizeTitle": "Taille du bundle",
  "home.whyItMatters.bundleSizeDesc":
    "Le bundle est l'ensemble des données livrées à chaque utilisateur dans le monde. Un bundle plus lourd implique des temps de téléchargement plus longs — surtout sur des connexions 3G lentes encore très répandues. Les bibliothèques i18n ont des poids très variables : de quelques kilo-octets à des dizaines de kilo-octets de code d'exécution, sans compter les fichiers de traduction.",
  "home.whyItMatters.renderingTitle": "Rendu et hydratation",
  "home.whyItMatters.renderingDesc":
    "Brancher un gros dictionnaire JSON sur chaque composant crée une dépendance cachée : tout changement de contexte de traduction peut déclencher des re-rendus sur tout l'arbre. Lors de l'hydratation SSR, analyser et attacher d'immenses objets de traduction ajoute de la latence avant que la page soit interactive — impact direct sur le Time to Interactive (TTI).",
  "home.whyItMatters.dynamicLoadingTitle": "Chargement dynamique",
  "home.whyItMatters.dynamicLoadingDesc":
    "Charger toutes les traductions d'un coup surdimensionne la charge initiale. Le chargement paresseux découpe les traductions par route ou espace de noms et n'envoie que le nécessaire. Il introduit pourtant ses propres compromis : requêtes en cascade, flash de contenu non traduit et complexité du cache. Il faut mesurer les deux approches.",
  "home.understandingImpact.title": "Comprendre l'impact",
  "home.understandingImpact.singleJsonTitle":
    "Pourquoi un unique gros JSON peut nuire aux performances",
  "home.understandingImpact.singleJsonIntro":
    "Beaucoup de bibliothèques i18n stockent les traductions dans un seul objet JSON fourni via le contexte React. Lorsqu'il est volumineux (milliers de clés), chaque composant qui consomme des traductions garde une référence à tout le dictionnaire. Cela signifie :",
  "home.understandingImpact.singleJsonBullet1":
    "Le JSON doit être analysé à chaque chargement de page — en bloquant le thread principal.",
  "home.understandingImpact.singleJsonBullet2":
    "Les architectures fondées sur le contexte peuvent provoquer des re-rendus en cascade quand la langue change, car chaque consommateur est notifié même si ses clés n'ont pas changé.",
  "home.understandingImpact.singleJsonBullet3":
    "Lors du rendu serveur, tout le dictionnaire est sérialisé dans le HTML, alourdissant le document à télécharger et à hydrater.",
  "home.understandingImpact.tradeOffsTitle":
    "Les compromis du chargement dynamique",
  "home.understandingImpact.tradeOffsIntro":
    "Découper les traductions par route ou espace de noms réduit fortement la charge initiale, mais pose de nouveaux défis :",
  "home.understandingImpact.waterfallLabel": "Requêtes en cascade :",
  "home.understandingImpact.waterfallDesc":
    "l'application doit d'abord charger, déterminer la langue, puis récupérer le bon fragment — avec des allers-retours réseau supplémentaires.",
  "home.understandingImpact.foucLabel":
    "Flash de contenu non traduit (FOUC) :",
  "home.understandingImpact.foucDesc":
    "l'utilisateur peut voir brièvement des clés ou une langue de secours avant l'arrivée du fragment.",
  "home.understandingImpact.cacheLabel": "Invalidation du cache :",
  "home.understandingImpact.cacheDesc":
    "mettre à jour les traductions exige des stratégies de cache busting pour livrer du contenu à jour sans re-télécharger l'inutile.",
  "home.understandingImpact.measuresTitle": "Ce que mesure ce benchmark",
  "home.understandingImpact.measuresDesc":
    "Cette appli de test offre un environnement contrôlé — 10 pages au contenu réaliste — pour comparer les bibliothèques i18n sur trois axes : le poids ajouté au bundle JavaScript, le temps passé à analyser et afficher le texte traduit, et l'efficacité du découpage de code et du chargement paresseux. Chaque bibliothèque est intégrée dans la même base pour des résultats comparables.",
  "home.resultsTable.title": "Exemple de résultats",
  "home.resultsTable.library": "Bibliothèque",
  "home.resultsTable.bundleSize": "Taille du bundle",
  "home.resultsTable.lookupTime": "Temps de recherche",
  "home.resultsTable.lazyLoading": "Chargement paresseux",
  "home.resultsTable.yes": "Oui",
  "home.resultsTable.manual": "Manuel",
  "home.resultsTable.builtIn": "Intégré",
  "about.header.title": "À propos de ce benchmark",
  "about.header.description":
    "Il s'agit d'une application de test open source — pas d'un produit ni d'une entreprise. Elle sert uniquement de base multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans les mêmes conditions.",
  "about.grid.whyExistsTitle": "Pourquoi ce projet existe",
  "about.grid.whyExistsDesc":
    "Choisir une bibliothèque i18n est une décision d'architecture à long terme. Beaucoup de comparatifs insistent sur l'ergonomie d'API, mais peu mesurent le coût performance : poids ajouté au bundle ? impact sur le rendu avec des milliers de clés ? le chargement paresseux aide-t-il vraiment ou déplace-t-il seulement le coût ? Ce benchmark répond avec des données réelles.",
  "about.grid.methodologyTitle": "Méthodologie",
  "about.grid.methodologyDesc":
    "La même application 10 pages est construite pour chaque bibliothèque. Nous mesurons le bundle de production (rollup-plugin-visualizer), lançons des audits Lighthouse et utilisons le profilage pour capturer le rendu lors des changements de langue. Tout s'exécute en CI sur du matériel homogène pour des résultats reproductibles.",
  "about.whatWeMeasure.title": "Ce que nous mesurons",
  "about.whatWeMeasure.bundleSizeImpact": "Impact sur la taille du bundle",
  "about.whatWeMeasure.bundleSizeImpactDesc":
    "Les octets JavaScript supplémentaires envoyés aux utilisateurs lorsque la bibliothèque i18n et ses fichiers sont inclus — impact direct sur les réseaux lents.",
  "about.whatWeMeasure.renderingOverhead": "Surcharge de rendu",
  "about.whatWeMeasure.renderingOverheadDesc":
    "Temps supplémentaire ajouté au cycle de rendu. Les bibliothèques qui injectent les traductions via un seul provider de contexte peuvent provoquer des re-rendus inutiles.",
  "about.whatWeMeasure.hydrationCost": "Coût d'hydratation",
  "about.whatWeMeasure.hydrationCostDesc":
    "En SSR, les données de traduction sont sérialisées dans le HTML. De gros dictionnaires alourdissent la page et ralentissent l'hydratation.",
  "about.whatWeMeasure.lazyLoading": "Efficacité du chargement paresseux",
  "about.whatWeMeasure.lazyLoadingDesc":
    "Le découpage par route ou espace de noms réduit-il vraiment la charge initiale, et quels compromis cela introduit (cascade, FOUC, cache) ?",
  "about.whatWeMeasure.localeSwitch": "Vitesse de changement de langue",
  "about.whatWeMeasure.localeSwitchDesc":
    "À quelle vitesse l'application peut basculer de langue à l'exécution — récupération des traductions, re-rendu, mise à jour du DOM.",
  "blog.header.title": "Blog",
  "blog.header.description":
    "Articles, tutoriels et analyses de la communauté i18n.",
  "blog.list.readMore": "Lire la suite →",
  "blog.list.post1Title":
    "Comparer les bibliothèques i18n en 2026 : plongée détaillée",
  "blog.list.post1Date": "15 mars 2026",
  "blog.list.post1Excerpt":
    "Nous avons testé 12 bibliothèques sur la perf, la taille du bundle et l'expérience développeur. Voici les résultats surprenants.",
  "blog.list.post1Category": "Benchmark",
  "blog.list.post2Title": "Réduire votre bundle i18n de 60 %",
  "blog.list.post2Date": "8 mars 2026",
  "blog.list.post2Excerpt":
    "Stratégies concrètes : chargement paresseux, découpage et optimisations à la compilation.",
  "blog.list.post2Category": "Tutoriel",
  "blog.list.post3Title":
    "État de l'internationalisation dans l'écosystème React",
  "blog.list.post3Date": "28 février 2026",
  "blog.list.post3Excerpt":
    "Panorama des tendances, patterns émergents et préférences de la communauté.",
  "blog.list.post3Category": "Analyse",
  "blog.list.post4Title": "Migrer de react-i18next vers Lingui",
  "blog.list.post4Date": "15 février 2026",
  "blog.list.post4Excerpt":
    "Guide pas à pas pour migrer une app en production avec 50 000 clés de traduction.",
  "blog.list.post4Category": "Tutoriel",
  "blog.list.post5Title": "Server Components et i18n : qu'est-ce qui change ?",
  "blog.list.post5Date": "1er février 2026",
  "blog.list.post5Excerpt":
    "Les React Server Components introduisent de nouveaux motifs pour l'i18n.",
  "blog.list.post5Category": "Analyse",
  "blog.list.post6Title": "Méthodologie de benchmark : comment nous testons",
  "blog.list.post6Date": "20 janvier 2026",
  "blog.list.post6Excerpt":
    "Transparence sur l'environnement de test, les méthodes statistiques et la reproductibilité.",
  "blog.list.post6Category": "Méta",
  "careers.header.title": "Carrières",
  "careers.header.description":
    "Rejoignez notre mission pour améliorer l'écosystème i18n. Équipe remote-first, impact, transparence et apprentissage continu.",
  "careers.benefits.remoteLabel": "Remote-first",
  "careers.benefits.remoteValue": "Travaillez depuis n'importe où",
  "careers.benefits.payLabel": "Rémunération compétitive",
  "careers.benefits.payValue": "Fourchettes haut de marché",
  "careers.benefits.ossLabel": "Temps open source",
  "careers.benefits.ossValue": "20 % du temps pour contribuer à l'OSS",
  "careers.openPositions.title": "Postes ouverts",
  "careers.openPositions.applyNow": "Postuler",
  "careers.openPositions.remote": "À distance",
  "careers.openPositions.fullTime": "Temps plein",
  "careers.openPositions.partTime": "Temps partiel",
  "careers.openPositions.engineering": "Ingénierie",
  "careers.openPositions.documentation": "Documentation",
  "careers.openPositions.community": "Communauté",
  "careers.openPositions.sfRemote": "San Francisco / télétravail",
  "careers.openPositions.frontendTitle": "Ingénieur front-end senior",
  "careers.openPositions.frontendDesc":
    "Construire et maintenir le tableau de bord de benchmark et les outils dev avec React, TypeScript et Vite.",
  "careers.openPositions.backendTitle": "Ingénieur back-end",
  "careers.openPositions.backendDesc":
    "Concevoir et faire évoluer l'infrastructure cloud qui exécute des milliers de benchmarks automatisés.",
  "careers.openPositions.writerTitle": "Rédacteur·rice technique",
  "careers.openPositions.writerDesc":
    "Guides, références d'API et tutoriels pour la plateforme de benchmark.",
  "careers.openPositions.devrelTitle": "Ingénieur DevRel",
  "careers.openPositions.devrelDesc":
    "Animer la communauté i18n : conférences, ateliers, articles et contributions OSS.",
  "careers.openPositions.qaTitle": "Ingénieur QA",
  "careers.openPositions.qaDesc":
    "Garantir la fiabilité des résultats par des tests et validations rigoureux.",
  "contact.header.title": "Contact",
  "contact.header.description":
    "Une idée, un bug ou envie de contribuer un benchmark ? Écrivez-nous à",
  "contact.form.name": "Nom",
  "contact.form.yourName": "Votre nom",
  "contact.form.email": "E-mail",
  "contact.form.emailPlaceholder": "vous@exemple.com",
  "contact.form.topic": "Sujet",
  "contact.form.bugReport": "Rapport de bug",
  "contact.form.newBenchmarkIdea": "Idée de benchmark",
  "contact.form.methodologyQuestion": "Question de méthodologie",
  "contact.form.contribution": "Contribution",
  "contact.form.other": "Autre",
  "contact.form.message": "Message",
  "contact.form.messagePlaceholder": "Décrivez votre question ou idée…",
  "contact.form.sendMessage": "Envoyer",
  "faq.header.title": "Questions fréquentes",
  "faq.header.description": "Tout savoir sur i18n Benchmark.",
  "faq.list.q1": "Qu'est-ce qu'i18n Benchmark ?",
  "faq.list.a1":
    "Une suite open source qui mesure et compare performance, taille de bundle et expérience développeur des bibliothèques i18n pour JavaScript et React.",
  "faq.list.q2": "Comment sont menés les benchmarks ?",
  "faq.list.a2":
    "Tests standardisés sur matériel cohomogène, répétés pour la significativité statistique. Les configs sont publiques sur GitHub.",
  "faq.list.q3": "Quelles bibliothèques sont prises en charge ?",
  "faq.list.a3":
    "react-i18next, react-intl, Lingui, typesafe-i18n, next-intl, Paraglide, Rosetta, i18n-js, Polyglot.js, vue-i18n, @fluent/react, Tolgee, etc.",
  "faq.list.q4": "Puis-je proposer des benchmarks ?",
  "faq.list.a4":
    "Oui — forkez le dépôt, suivez le guide de contribution et ouvrez une pull request.",
  "faq.list.q5": "À quelle fréquence sont-ils mis à jour ?",
  "faq.list.a5":
    "Chaque semaine sur les dernières versions stables ; une release majeure relance immédiatement les mesures.",
  "faq.list.q6": "Les données sont-elles fiables ?",
  "faq.list.a6":
    "Méthodologie statistique stricte, échauffement, détection d'anomalies, intervalles de confiance — données brutes publiées.",
  "faq.list.q7": "Proposez-vous du conseil ?",
  "faq.list.a7":
    "Oui, le plan Enterprise inclut des heures pour aider les équipes à choisir une solution i18n.",
  "faq.list.q8": "Comment contribuer ?",
  "faq.list.a8":
    "Benchmarks, documentation, bugs, nouvelles métriques ou sponsorship — voir GitHub.",
  "pricing.header.title": "Tarification simple et transparente",
  "pricing.header.description":
    "Choisissez l'offre adaptée à votre équipe. Sans frais cachés.",
  "pricing.tiers.starterName": "Starter",
  "pricing.tiers.starterPrice": "0 €",
  "pricing.tiers.starterPeriod": "pour toujours",
  "pricing.tiers.starterFeature1": "5 exécutions de benchmark / jour",
  "pricing.tiers.starterFeature2": "3 bibliothèques",
  "pricing.tiers.starterFeature3": "Support communautaire",
  "pricing.tiers.starterFeature4": "Résultats publics",
  "pricing.tiers.proName": "Pro",
  "pricing.tiers.proPrice": "29 €",
  "pricing.tiers.proPeriod": "/ mois",
  "pricing.tiers.proFeature1": "Exécutions illimitées",
  "pricing.tiers.proFeature2": "Toutes les bibliothèques",
  "pricing.tiers.proFeature3": "Support prioritaire",
  "pricing.tiers.proFeature4": "Résultats privés",
  "pricing.tiers.proFeature5": "Intégration CI",
  "pricing.tiers.proFeature6": "Historique",
  "pricing.tiers.enterpriseName": "Enterprise",
  "pricing.tiers.enterprisePrice": "Sur mesure",
  "pricing.tiers.enterpriseFeature1": "Tout le Pro",
  "pricing.tiers.enterpriseFeature2": "Option on-premise",
  "pricing.tiers.enterpriseFeature3": "SSO et SAML",
  "pricing.tiers.enterpriseFeature4": "Account manager dédié",
  "pricing.tiers.enterpriseFeature5": "SLA sur mesure",
  "pricing.tiers.enterpriseFeature6": "Journaux d'audit",
  "pricing.tiers.enterpriseFeature7": "Sessions de formation",
  "pricing.tiers.contactSales": "Contacter les ventes",
  "pricing.tiers.getStarted": "Commencer",
  "products.header.title": "Produits",
  "products.header.description":
    "Outils et services pour fluidifier votre flux i18n.",
  "products.grid.learnMore": "En savoir plus",
  "products.grid.cliName": "Benchmark CLI",
  "products.grid.cliDesc":
    "Lancez des benchmarks en local. Configurations personnalisées et CI.",
  "products.grid.cliPrice": "Gratuit",
  "products.grid.cloudName": "Benchmark Cloud",
  "products.grid.cloudDesc":
    "Benchmarks cloud automatisés, historique, alertes et tableaux d'équipe.",
  "products.grid.cloudPrice": "29 €/mois",
  "products.grid.enterpriseName": "Benchmark Enterprise",
  "products.grid.enterpriseDesc":
    "On-premise avec SSO, journaux d'audit, SLA et support dédié.",
  "products.grid.enterprisePrice": "Nous contacter",
  "products.grid.migrationName": "Assistant de migration",
  "products.grid.migrationDesc":
    "Outil assisté par IA pour migrer entre bibliothèques i18n sans interruption.",
  "products.grid.migrationPrice": "99 € (unique)",
  "products.grid.qaName": "QA des traductions",
  "products.grid.qaDesc":
    "Contrôles automatiques : clés manquantes, pluriels, contexte.",
  "products.grid.qaPrice": "19 €/mois",
  "products.grid.optimizerName": "Optimiseur de bundle",
  "products.grid.optimizerDesc":
    "Analyse et optimise votre bundle i18n en production (tree-shaking, découpage).",
  "products.grid.optimizerPrice": "49 €/mois",
  "settings.header.title": "Paramètres",
  "settings.header.description":
    "Gérez les préférences et la configuration de votre compte.",
  "settings.profile.title": "Profil",
  "settings.profile.displayName": "Nom affiché",
  "settings.profile.email": "E-mail",
  "settings.preferences.title": "Préférences",
  "settings.preferences.emailNotifications": "Notifications e-mail",
  "settings.preferences.weeklyReports": "Recevoir les rapports hebdomadaires",
  "settings.preferences.toggleNotifications": "Activer/désactiver les notifications",
  "settings.preferences.darkMode": "Mode sombre",
  "settings.preferences.darkColorScheme": "Utiliser le thème sombre",
  "settings.preferences.toggleDarkMode": "Basculer le mode sombre",
  "settings.preferences.defaultLanguage": "Langue par défaut",
  "settings.preferences.english": "Anglais (en)",
  "settings.preferences.french": "Français (fr)",
  "settings.preferences.german": "Allemand (de)",
  "settings.preferences.spanish": "Espagnol (es)",
  "settings.preferences.japanese": "Japonais (ja)",
  "settings.preferences.chinese": "Chinois simplifié (zh-CN)",
  "settings.preferences.arabic": "Arabe (ar)",
  "settings.apiAccess.title": "Accès API",
  "settings.apiAccess.apiKey": "Clé API",
  "settings.apiAccess.copy": "Copier",
  "settings.apiAccess.description":
    "Utilisez cette clé pour appeler l'API de benchmark par programmation.",
  "settings.footer.cancel": "Annuler",
  "settings.footer.saveChanges": "Enregistrer",
  "team.header.title": "Notre équipe",
  "team.header.description":
    "Les personnes derrière i18n Benchmark, unies par la passion des outils développeurs.",
  "team.grid.member1Name": "Sarah Chen",
  "team.grid.member1Role": "Fondatrice & lead ingénieur",
  "team.grid.member1Bio":
    "Ex-ingénieure Google, 10 ans sur l'internationalisation à grande échelle.",
  "team.grid.member2Name": "Marcus Weber",
  "team.grid.member2Role": "Ingénieur performance",
  "team.grid.member2Bio":
    "Optimisation JavaScript et méthodologie de benchmark — précédemment chez Vercel.",
  "team.grid.member3Name": "Aisha Patel",
  "team.grid.member3Role": "Developer advocate",
  "team.grid.member3Bio":
    "Expérience développeur et pédagogie — conférencière React Conf, JSConf, i18nNext.",
  "team.grid.member4Name": "Tomás Rodríguez",
  "team.grid.member4Role": "Développeur full-stack",
  "team.grid.member4Bio":
    "Infrastructure de benchmark et CI/CD — contributeur open source à Lingui.",
  "team.grid.member5Name": "Yuki Tanaka",
  "team.grid.member5Role": "Analyste de données",
  "team.grid.member5Bio":
    "Rigueur statistique des résultats — doctorat en statistiques appliquées (MIT).",
  "team.grid.member6Name": "Elena Kowalski",
  "team.grid.member6Role": "Community manager",
  "team.grid.member6Bio":
    "Contributions communautaires, partenariats et événements — gouvernance open source.",
  "notFound.title": "404",
  "notFound.description": "Oups ! Page introuvable",
  "notFound.returnHome": "Retour à l'accueil",
};

function flattenKeys(
  obj: Json,
  prefix = "",
  out: Record<string, string> = {},
): Record<string, string> {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return out;
  for (const [k, v] of Object.entries(obj)) {
    const p = prefix ? `${prefix}.${k}` : k;
    if (typeof v === "string") out[p] = v;
    else if (v && typeof v === "object" && !Array.isArray(v))
      flattenKeys(v as Json, p, out);
  }
  return out;
}

function applyFr(enNode: Json, path: string): Json {
  if (typeof enNode === "string") {
    const fr = frLeaves[path];
    if (fr === undefined)
      throw new Error(`Missing French for path: ${path}`);
    return fr;
  }
  if (enNode === null || Array.isArray(enNode)) return enNode;
  if (typeof enNode !== "object") return enNode;
  const out: { [k: string]: Json } = {};
  for (const [k, v] of Object.entries(enNode)) {
    const p = path ? `${path}.${k}` : k;
    out[k] = applyFr(v as Json, p);
  }
  return out;
}

const en = JSON.parse(fs.readFileSync(enPath, "utf8")) as Json;
const flatEn = flattenKeys(en);
for (const k of Object.keys(flatEn)) {
  if (!(k in frLeaves)) throw new Error(`frLeaves missing key: ${k}`);
}
for (const k of Object.keys(frLeaves)) {
  if (!(k in flatEn)) throw new Error(`frLeaves has unknown key: ${k}`);
}
const fr = applyFr(en, "");
fs.writeFileSync(frPath, `${JSON.stringify(fr, null, 2)}\n`);
console.log(`Wrote ${frPath} → fr (${Object.keys(frLeaves).length} keys)`);
