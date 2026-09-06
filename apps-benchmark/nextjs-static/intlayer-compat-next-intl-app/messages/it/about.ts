export default {
  "about-header": {
    aboutThisBenchmark: "Informazioni su questo benchmark",
    thisIsAnOpenSource: "Questa è un'applicazione di test open-source, non un prodotto o un'azienda. Il suo unico scopo è fornire un'applicazione React multi-pagina realistica dove diverse librerie i18n possono essere integrate e mesurate in condizioni identiche.",
  },
  "about-grid": {
    whyThisExists: "Perché esiste questo progetto",
    choosingAnI18nLibraryIs: "Scegliere una libreria i18n è una decisione architettonica con conseguenze a lungo termine. La maggior parte dei confronti si concentra sull'ergonomia delle API, ma pochi misurano il costo delle prestazioni: quanto peso aggiunge la libreria al bundle? In che modo influisce sul rendering quando vengono caricate migliaia di chiavi di traduzione? Il caricamento pigro aiuta davvero o sposta solo il costo? Questo benchmark risponde a queste domande con dati reali.",
    methodology: "Metodologia",
    theSame10PageApp: "La stessa app di 10 pagine viene costruita una volta per libreria. Misuriamo il bundle di produzione (tramite rollup-plugin-visualizer), eseguiamo audit Lighthouse per le metriche di caricamento e utilizziamo React Profiler per catturare i tempi di rendering durante i cambi di lingua. Tutti i test vengono eseguiti in CI su hardware coerente per garantire risultati riproducibili.",
  },
  "what-we-measure": {
    bundleSizeImpact: "Impatto sulla dimensione del bundle",
    theAdditionalJavascriptBytesSent: "I byte JavaScript aggiuntivi inviati agli utenti quando la libreria i18n e i suoi file di traduzione sono inclusi. Ciò influisce direttamente sul tempo di download sulle reti lente.",
    renderingOverhead: "Sovrapprezzo di rendering",
    howMuchExtraTimeThe: "Quanto tempo extra la libreria aggiunge al ciclo di rendering di React. Le librerie che iniettano traduzioni tramite un unico provider di contesto possono causare rendering non necessari in tutto l'albero dei componenti.",
    hydrationCost: "Costo di idratazione",
    duringSsrTranslationDataIs: "Durante l'SSR, i dati di traduzione vengono serializzati nell'HTML. Dizionari di grandi dimensioni aumentano il payload HTML e rallentano l'idratazione — il momento in cui la pagina diventa interattiva.",
    lazyLoadingEffectiveness: "Efficacia del caricamento pigro",
    whetherSplittingTranslationsByRoute: "Se la scomposizione delle traduzioni per rotta o namespace riduca effettivamente il carico iniziale e quali compromessi introduca (richieste a cascata, FOUC, complessità della cache).",
    localeSwitchSpeed: "Velocità di cambio lingua",
    howFastTheAppCan: "Quanto velocemente l'app può passare da una lingua all'altra in fase di esecuzione — inclusi il recupero delle nuove traduzioni, il rendering dei componenti e l'aggiornamento del DOM.",
    whatWeMeasure: "Cosa misuriamo",
  }
};
