import { type Dictionary, t } from 'intlayer';

const resultsTableContent = {
  key: 'results-table',
  content: {
    sampleResults: t({
      en: "Sample Results",
      fr: "Résultats d'échantillon",
      es: "Resultados de muestra",
      de: "Beispielergebnisse",
      it: "Risultati del campione",
      pt: "Resultados de amostra",
      zh: "样本结果",
      ja: "サンプル結果",
      ko: "샘플 결과",
      ru: "Примеры результатов",
    }),

    bundleSize: t({
      en: "Bundle Size",
      fr: "Taille du bundle",
      es: "Tamaño del bundle",
      de: "Bundle-Größe",
      it: "Dimensioni del bundle",
      pt: "Tamanho do bundle",
      zh: "包大小",
      ja: "バンドルサイズ",
      ko: "번들 크기",
      ru: "Размер бандла",
    }),

    lookupTime: t({
      en: "Lookup Time",
      fr: "Temps de consultation",
      es: "Tiempo de consulta",
      de: "Abfragezeit",
      it: "Tempo di ricerca",
      pt: "Tempo de consulta",
      zh: "查询时间",
      ja: "検索時間",
      ko: "조회 시간",
      ru: "Время поиска",
    }),

    lazyLoading: t({
      en: "Lazy Loading",
      fr: "Chargement différé",
      es: "Carga diferida",
      de: "Lazy Loading",
      it: "Caricamento lento",
      pt: "Carregamento lento",
      zh: "延迟加载",
      ja: "遅延読み込み",
      ko: "지연 로딩",
      ru: "Ленивая загрузка",
    })
  },
} satisfies Dictionary;

export default resultsTableContent;
