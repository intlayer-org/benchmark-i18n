export default {
  "hero": {
    aTestApplicationDesignedTo: "Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.",
    viewResults: "Ergebnisse anzeigen",
  },
  "why-it-matters": {
    whyTheseMetricsMatter: "Warum diese Metriken wichtig sind",
    bundleSize: "Bundle-Größe",
    theBundleIsTheData: "Das Bundle sind die Daten, die an jeden Benutzer weltweit gesendet werden. Ein größeres Bundle bedeutet längere Download-Zeiten — besonders bei langsamen 3G-Verbindungen, die in vielen Regionen üblich sind. i18n-Bibliotheken variieren drastisch in ihrem Gewicht: von einigen Kilobytes bis zu zig Kilobytes an Laufzeitcode, plus die Übersetzungsdateien selbst.",
    renderingHydration: "Rendering & Hydratisierung",
    connectingALargeJsonDictionary: "Das Verbinden eines großen JSON-Wörterbuchs mit jeder Komponente erzeugt eine versteckte Abhängigkeit: Jede Änderung im Übersetzungskontext kann Re-Renderings im gesamten Baum auslösen. Während der SSR-Hydratisierung führt das Parsen und Anhängen massiver Übersetzungsobjekte zu Latenzzeiten, bevor die Seite interaktiv wird — was sich direkt auf die Time to Interactive (TTI) auswirkt.",
    dynamicLoading: "Dynamisches Laden",
    loadingAllTranslationsUpfrontOverloads: "Das Laden aller Übersetzungen im Voraus überlastet den initialen Payload. Dynamisches (Lazy) Loading teilt Übersetzungen nach Route oder Namensraum auf und sendet nur das, was die aktuelle Seite benötigt. Lazy Loading bringt jedoch eigene Kompromisse mit sich: Waterfall-Anfragen, Aufblitzen von nicht übersetzten Inhalten (FOUC) und Cache-Komplexität. Die Messung beider Strategien ist essenziell.",
  },
  "understanding-impact": {
    understandingTheImpact: "Die Auswirkungen verstehen",
    whyASingleLargeJson: "Warum ein einziges großes JSON die Leistung beeinträchtigen kann",
    manyI18nLibrariesStoreTranslations: "Viele i18n-Bibliotheken speichern Übersetzungen in einem einzigen JSON-Objekt, das über den React-Kontext bereitgestellt wird. Wenn dieses Objekt groß ist (Tausende von Schlüsseln), hält jede Komponente, die Übersetzungen verwendet, eine Referenz auf das gesamte Wörterbuch. Das bedeutet:",
    theJsonMustBeParsed: "Das JSON muss bei jedem Seitenladen geparst werden — was den Haupt-Thread blockiert.",
    contextBasedArchitecturesCanCause: "Kontextbasierte Architekturen können kaskadierende Re-Renderings verursachen, wenn sich das Gebietsschema ändert, da jeder Consumer benachrichtigt wird, auch wenn sich seine spezifischen Schlüssel nicht geändert haben.",
    duringServerSideRenderingThe: "Während des serverseitigen Renderings wird das vollständige Wörterbuch in den HTML-Payload serialisiert, wodurch sich die Dokumentgröße erhöht, die heruntergeladen und hydratisiert werden muss.",
    theTradeOffsOfDynamic: "Die Kompromisse beim dynamischen Laden",
    splittingTranslationsIntoPerRoute: "Das Aufteilen von Übersetzungen in Teilstücke pro Route oder Namensraum kann den initialen Payload drastisch reduzieren. Es bringt jedoch neue Herausforderungen mit sich:",
    waterfallRequests: "Waterfall-Anfragen:",
    flashOfUntranslatedContentFouc: "Aufblitzen von nicht übersetztem Inhalt (FOUC):",
    cacheInvalidation: "Cache-Invalidierung:",
    whatThisBenchmarkMeasures: "Was dieser Benchmark misst",
    thisTestAppProvidesA: "Diese Test-App bietet eine kontrollierte Umgebung — 10 Seiten mit realistischen Inhalten —, um i18n-Bibliotheken in drei Achsen zu vergleichen: das Gewicht, das sie Ihrem JavaScript-Bundle hinzufügen, die Zeit, die für das Parsen und Rendern übersetzter Inhalte aufgewendet wird, und die Effektivität ihrer Code-Splitting- und Lazy-Loading-Strategien. Jede Bibliothek ist in dieselbe App integriert, sodass die Ergebnisse direkt vergleichbar sind.",
  },
  "results-table": {
    sampleResults: "Beispielergebnisse",
    bundleSize: "Bundle-Größe",
    lookupTime: "Suchzeit",
    lazyLoading: "Lazy Loading",
  }
};
