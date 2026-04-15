export default {
  "hero": {
    aTestApplicationDesignedTo: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
    viewResults: "Visualizza i risultati",
  },
  "why-it-matters": {
    whyTheseMetricsMatter: "Perché queste metriche sono importanti",
    bundleSize: "Dimensione del bundle",
    theBundleIsTheData: "Il bundle rappresenta i dati inviati a ogni utente nel mondo. Un bundle più grande significa tempi di download più lunghi, specialmente sulle connessioni 3G lente comuni in molte regioni. Le librerie i18n variano drasticamente nel loro peso: da pochi kilobyte a decine di kilobyte di codice runtime, oltre ai file di traduzione stessi.",
    renderingHydration: "Rendering e idratazione",
    connectingALargeJsonDictionary: "Il collegamento di un grande dizionario JSON a ogni componente crea una dipendenza nascosta: qualsiasi modifica nel contesto di traduzione può scatenare nuovi rendering in tutto l'albero. Durante l'idratazione SSR, l'analisi e l'aggiunta di enormi oggetti di traduzione aggiungono latenza prima che la pagina diventi interattiva, influenzando direttamente il Time to Interactive (TTI).",
    dynamicLoading: "Caricamento dinamico",
    loadingAllTranslationsUpfrontOverloads: "Il caricamento di tutte le traduzioni in anticipo sovraccarica il payload iniziale. Il caricamento dinamico (lazy) divide le traduzioni per rotta o namespace, inviando solo ciò di cui la pagina corrente ha bisogno. Tuttavia, il lazy loading introduce i propri compromessi: richieste a cascata, flash di contenuti non tradotti e complessità della cache. Misurare entrambe le strategie è essenziale.",
  },
  "understanding-impact": {
    understandingTheImpact: "Capire l'impatto",
    whyASingleLargeJson: "Perché un singolo JSON di grandi dimensioni può danneggiare le prestazioni",
    manyI18nLibrariesStoreTranslations: "Molte librerie i18n memorizzano le traduzioni in un unico oggetto JSON fornito tramite il contesto React. Quando questo oggetto è grande (migliaia di chiavi), ogni componente che consuma le traduzioni mantiene un riferimento all'intero dizionario. Questo significa :",
    theJsonMustBeParsed: "Il JSON deve essere analizzato a ogni caricamento della pagina, bloccando il thread principale.",
    contextBasedArchitecturesCanCause: "Le architetture basate sul contesto possono causare rendering a cascata quando la localizzazione cambia, perché ogni consumatore viene notificato anche se le sue chiavi specifiche non sono cambiate.",
    duringServerSideRenderingThe: "Durante il rendering lato server, l'intero dizionario viene serializzato nel payload HTML, aumentando la dimensione del documento che deve essere scaricato e idrato.",
    theTradeOffsOfDynamic: "I compromessi del caricamento dinamico",
    splittingTranslationsIntoPerRoute: "La scomposizione delle traduzioni in chunk per rotta o per namespace può ridurre drasticamente il payload iniziale. Ma introduce nuove sfide:",
    waterfallRequests: "Richieste a cascata:",
    flashOfUntranslatedContentFouc: "Flash di contenuti non tradotti (FOUC):",
    cacheInvalidation: "Invalidazione della cache:",
    whatThisBenchmarkMeasures: "Cosa misura questo benchmark",
    thisTestAppProvidesA: "Questa applicazione di test fornisce un ambiente controllato — 10 pagine con contenuti realistici — per confrontare le librerie i18n su tre assi: il peso che aggiungono al tuo bundle JavaScript, il tempo dedicato all'analisi e al rendering dei contenuti tradotti e l'efficacia delle loro strategie di code-splitting e lazy-loading. Ogni libreria è integrata nella stessa app in modo che i risultati siano direttamente confrontabili.",
  },
  "results-table": {
    sampleResults: "Risultati di esempio",
    bundleSize: "Dimensione del bundle",
    lookupTime: "Tempo di ricerca",
    lazyLoading: "Caricamento lazy",
  }
};
