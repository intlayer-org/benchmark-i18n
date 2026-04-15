import { type Dictionary, t, insert } from 'intlayer';

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
    }),

    yes: t({
      en: "Yes",
      fr: "Oui",
      es: "Sí",
      de: "Ja",
      it: "Sì",
      pt: "Sim",
      zh: "是",
      ja: "はい",
      ko: "예",
      ru: "Да",
    }),

    manual: t({
      en: "Manual",
      fr: "Manuel",
      es: "Manual",
      de: "Manuell",
      it: "Manuale",
      pt: "Manual",
      zh: "手动",
      ja: "マニュアル",
      ko: "수동",
      ru: "Вручную",
    }),

    library: t({
      en: "Library",
      fr: "Bibliothèque",
      es: "Biblioteca",
      de: "Bibliothek",
      it: "Libreria",
      pt: "Biblioteca",
      zh: "库",
      ja: "ライブラリ",
      ko: "라이브러리",
      ru: "Библиотека",
    }),

    builtIn: t({
      en: "Built-in",
      fr: "Intégré",
      es: "Incorporado",
      de: "Integriert",
      it: "Integrato",
      pt: "Integrado",
      zh: "内置",
      ja: "組み込み",
      ko: "내장",
      ru: "Встроенный",
    }),

    kilobytes: insert(t({
      en: "{val} kB",
      fr: "{val} ko",
      es: "{val} kB",
      de: "{val} kB",
      it: "{val} kB",
      pt: "{val} kB",
      zh: "{val} kB",
      ja: "{val} kB",
      ko: "{val} kB",
      ru: "{val} кБ",
    })),

    milliseconds: insert(t({
      en: "{val}ms",
      fr: "{val} ms",
      es: "{val} ms",
      de: "{val} ms",
      it: "{val} ms",
      pt: "{val} ms",
      zh: "{val} 毫秒",
      ja: "{val}ms",
      ko: "{val}ms",
      ru: "{val} мс",
    }))
  },
} satisfies Dictionary;

export default resultsTableContent;
