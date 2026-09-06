export default {
  "hero": {
    aTestApplicationDesignedTo: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
    viewResults: "Ver Resultados",
  },
  "why-it-matters": {
    whyTheseMetricsMatter: "Por que essas métricas são importantes",
    bundleSize: "Tamanho do Bundle",
    theBundleIsTheData: "O bundle representa os dados enviados a cada usuário em todo o mundo. Um bundle maior significa tempos de download mais longos — especialmente em conexões 3G lentas comuns em muitas regiões. i18n libraries variam drasticamente em seu peso: de alguns kilobytes a dezenas de kilobytes de código de tempo de execução, além dos próprios arquivos de tradução.",
    renderingHydration: "Renderização e Hidratação",
    connectingALargeJsonDictionary: "Conectar um grande dicionário JSON a cada componente cria uma dependência oculta: qualquer alteração no contexto de tradução pode desencadear novas renderizações em toda a árvore. Durante a hidratação do SSR, a análise e a anexação de objetos de tradução massivos adicionam latência antes que a página se torne interativa — impactando diretamente o Time to Interactive (TTI).",
    dynamicLoading: "Carregamento Dinâmico",
    loadingAllTranslationsUpfrontOverloads: "Carregar todas as traduções antecipadamente sobrecarrega a carga útil inicial. O carregamento dinâmico (lazy) divide as traduções por rota ou namespace, enviando apenas o que a página atual precisa. No entanto, o carregamento tardio introduz suas próprias compensações: solicitações em cascada, flash de conteúdo não traduzido e complexidade de cache. Medir ambas as estratégias é essencial.",
  },
  "understanding-impact": {
    understandingTheImpact: "Entendendo o impacto",
    whyASingleLargeJson: "Por que um único JSON grande pode prejudicar o desempenho",
    manyI18nLibrariesStoreTranslations: "Muitas bibliotecas de i18n armazenam as traduções em um único objeto JSON fornecido através do contexto de React. Quando este objeto é grande (milhares de chaves), cada componente que consome traduções mantém uma referência a todo o dicionário. Isto significa :",
    theJsonMustBeParsed: "O JSON deve ser analisado em cada carga de página — bloqueando a linha de execução principal.",
    contextBasedArchitecturesCanCause: "As arquiteturas baseadas no contexto podem causar renderizações em cascata quando o idioma muda, porque cada consumidor é notificado mesmo que as suas chaves específicas não tenham mudado.",
    duringServerSideRenderingThe: "Durante a renderização do lado do servidor, o dicionário completo é serializado na carga útil de HTML, aumentando o tamanho do documento que deve ser baixado e hidratado.",
    theTradeOffsOfDynamic: "As compensações do carregamento dinâmico",
    splittingTranslationsIntoPerRoute: "Dividir as traduções em partes por rota ou por namespace pode reduzir drasticamente a carga útil inicial. Mas introduz novos desafios:",
    waterfallRequests: "Pedidos em cascata:",
    flashOfUntranslatedContentFouc: "Flash de conteúdo não traduzido (FOUC):",
    cacheInvalidation: "Invalidação de cache:",
    whatThisBenchmarkMeasures: "O que este benchmark mede",
    thisTestAppProvidesA: "Esta aplicação de teste fornece um ambiente controlado — 10 páginas com conteúdo realista — para comparar bibliotecas de i18n em três eixos: o peso que adicionam ao seu pacote de JavaScript, o tempo gasto analisando e renderizando conteúdo traduzido e a eficácia das suas estratégias de divisão de código e de carregamento tardio. Cada biblioteca é integrada na mesma aplicação para que os resultados sejam diretamente comparáveis.",
  },
  "results-table": {
    sampleResults: "Resultados de amostra",
    bundleSize: "Tamanho do bundle",
    lookupTime: "Tempo de consulta",
    lazyLoading: "Carregamento lento",
  }
};
