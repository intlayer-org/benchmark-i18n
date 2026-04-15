export default {
  "hero": {
    aTestApplicationDesignedTo: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.",
    viewResults: "Ver resultados",
  },
  "why-it-matters": {
    whyTheseMetricsMatter: "Por qué son importantes estas métricas",
    bundleSize: "Tamaño del bundle",
    theBundleIsTheData: "El bundle representa los datos enviados a cada usuario en todo el mundo. Un bundle más grande significa tiempos de descarga más largos, especialmente en las conexiones 3G lentas comunes en muchas regiones. Las bibliotecas i18n varían drásticamente en su peso: desde unos pocos kilobytes hasta decenas de kilobytes de código runtime, además de los propios archivos de traducción.",
    renderingHydration: "Renderizado e hidratación",
    connectingALargeJsonDictionary: "Conectar un diccionario JSON grande a cada componente crea una dependencia oculta: cualquier cambio en el contexto de traducción puede desencadenar nuevos renderizados en todo el árbol. Durante la hidratación de SSR, el análisis y la anexión de objetos de traducción masivos añaden latencia antes de que la página sea interactiva, lo que afecta directamente al Time to Interactive (TTI).",
    dynamicLoading: "Carga dinámica",
    loadingAllTranslationsUpfrontOverloads: "Cargar todas las traducciones por adelantado sobrecarga el payload inicial. La carga dinámica (lazy) divide las traducciones por ruta o espacio de nombres, enviando solo lo que la página actual necesita. Sin embargo, la carga diferida introduce sus propias compensaciones: solicitudes en cascada, parpadeo de contenido no traducido y complejidad de la caché. Medir ambas estrategias es esencial.",
  },
  "understanding-impact": {
    understandingTheImpact: "Entendiendo el impacto",
    whyASingleLargeJson: "Por qué un solo JSON grande puede perjudicar el rendimiento",
    manyI18nLibrariesStoreTranslations: "Muchas bibliotecas i18n almacenan las traducciones en un único objeto JSON proporcionado a través del contexto de React. Cuando este objeto es grande (miles de claves), cada componente que consume traducciones mantiene una referencia a todo el diccionario. Esto significa:",
    theJsonMustBeParsed: "El JSON debe analizarse en cada carga de página, bloqueando el hilo principal.",
    contextBasedArchitecturesCanCause: "Las arquitecturas basadas en el contexto pueden causar renderizados en cascada cuando cambia el idioma, porque cada consumidor es notificado aunque sus claves específicas no hayan cambiado.",
    duringServerSideRenderingThe: "Durante el renderizado del lado del servidor, el diccionario completo se serializa en el payload HTML, aumentando el tamaño del documento que debe descargarse e hidratarse.",
    theTradeOffsOfDynamic: "Las compensaciones de la carga dinámica",
    splittingTranslationsIntoPerRoute: "Dividir las traducciones en fragmentos por ruta o por espacio de nombres puede reducir drásticamente el payload inicial. Pero introduce nuevos desafíos:",
    waterfallRequests: "Solicitudes en cascada:",
    flashOfUntranslatedContentFouc: "Parpadeo de contenido no traducido (FOUC):",
    cacheInvalidation: "Invalidación de la caché:",
    whatThisBenchmarkMeasures: "Qué mide este benchmark",
    thisTestAppProvidesA: "Esta aplicación de prueba proporciona un entorno controlado —10 páginas con contenido realista— para comparar bibliotecas i18n en tres ejes: el peso que añaden a tu bundle de JavaScript, el tiempo dedicado a analizar y renderizar el contenido traducido y la eficacia de sus estrategias de división de código y carga diferida. Cada biblioteca se integra en la misma aplicación para que los resultados sean directamente comparables.",
  },
  "results-table": {
    sampleResults: "Resultados de muestra",
    bundleSize: "Tamaño del bundle",
    lookupTime: "Tiempo de búsqueda",
    lazyLoading: "Carga diferida",
  }
};
