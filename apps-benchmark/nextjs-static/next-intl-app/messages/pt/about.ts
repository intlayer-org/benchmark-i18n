export default {
  "about-header": {
    aboutThisBenchmark: "Sobre este benchmark",
    thisIsAnOpenSource: "Esta é uma aplicação de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo React realista e de várias páginas onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas.",
  },
  "about-grid": {
    whyThisExists: "Por que isso existe",
    choosingAnI18nLibraryIs: "Escolher uma biblioteca i18n é uma decisão arquitetônica com consequências de longo prazo. A maioria das comparações se concentra na ergonomia da API, mas poucas medem o custo de desempenho: quanto peso a biblioteca adiciona ao pacote? Como isso afeta a renderização quando milhares de chaves de tradução são carregadas? O carregamento tardio realmente ajuda ou apenas desloca o custo? Este benchmark responde a essas perguntas com dados reais.",
    methodology: "Metodologia",
    theSame10PageApp: "O mesmo aplicativo de 10 páginas é construído uma vez por biblioteca. Medimos o bundle de produção (via rollup-plugin-visualizer), realizamos auditorias do Lighthouse para métricas de carregamento e usamos o React Profiler para capturar tempos de renderização durante as trocas de localidade. Todos os testes são executados em CI em hardware consistente para garantir resultados reproduzíveis.",
  },
  "what-we-measure": {
    bundleSizeImpact: "Impacto no tamanho do bundle",
    theAdditionalJavascriptBytesSent: "Os bytes extras de JavaScript enviados aos usuários quando a biblioteca de i18n e seus arquivos de tradução são incluídos. Isso afeta diretamente o tempo de download em redes lentas.",
    renderingOverhead: "Sobrecarga de renderização",
    howMuchExtraTimeThe: "Quanto tempo extra a biblioteca adiciona ao ciclo de renderização do React. Bibliotecas que injetam traduções via um único provedor de contexto podem causar re-renderizações desnecessárias em toda a árvore de componentes.",
    hydrationCost: "Costo de hidratação",
    duringSsrTranslationDataIs: "Durante o SSR, os dados de tradução são serializados em HTML. Dicionários grandes aumentam a carga de HTML e desaceleram a hidratação — o momento em que a página se torna interativa.",
    lazyLoadingEffectiveness: "Eficácia do carregamento lento",
    whetherSplittingTranslationsByRoute: "Se a divisão de traduções por rota ou namespace realmente reduz a carga inicial e quais compensações ela introduz (solicitações em cascada, FOUC, complexidade de cache).",
    localeSwitchSpeed: "Velocidade de troca de idioma",
    howFastTheAppCan: "Quão rápido o aplicativo pode mudar de um idioma para outro em tempo de execução — incluindo a busca de novas traduções, a re-renderização de componentes e a atualização do DOM.",
    whatWeMeasure: "O que medimos",
  }
};
