import { type Dictionary, t } from 'intlayer';

const resultsTableContent = {
  key: 'results-table',
  content: {
    yes: t({
      en: 'Yes',
      fr: 'Oui',
      es: 'Sí',
      de: 'Ja',
      it: 'Sì',
      pt: 'Sim',
      zh: '是',
      ja: 'はい',
      ko: '예',
      ru: 'Да',
    }),

    manual: t({
      en: 'Manual',
      fr: 'Manuel',
      es: 'Manual',
      de: 'Manuell',
      it: 'Manuale',
      pt: 'Manual',
      zh: '手动',
      ja: '手動',
      ko: '수동',
      ru: 'Вручную',
    }),

    sampleResults: t({
      en: 'Sample Results',
      fr: 'Exemples de résultats',
      es: 'Resultados de ejemplo',
      de: 'Beispielergebnisse',
      it: 'Risultati di esempio',
      pt: 'Resultados de exemplo',
      zh: '示例结果',
      ja: 'サンプル結果',
      ko: '샘플 결과',
      ru: 'Примеры результатов',
    }),

    library: t({
      en: 'Library',
      fr: 'Bibliothèque',
      es: 'Biblioteca',
      de: 'Bibliothek',
      it: 'Libreria',
      pt: 'Biblioteca',
      zh: '库',
      ja: 'ライブラリ',
      ko: '라이브러리',
      ru: 'Библиотека',
    }),

    bundleSize: t({
      en: 'Bundle Size',
      fr: 'Taille du bundle',
      es: 'Tamaño del bundle',
      de: 'Bundle-Größe',
      it: 'Dimensione del bundle',
      pt: 'Tamanho do bundle',
      zh: '捆绑包大小',
      ja: 'バンドルサイズ',
      ko: '번들 크기',
      ru: 'Размер бандла',
    }),

    lookupTime: t({
      en: 'Lookup Time',
      fr: 'Temps de recherche',
      es: 'Tiempo de búsqueda',
      de: 'Lookup-Zeit',
      it: 'Tempo di ricerca',
      pt: 'Tempo de Busca',
      zh: '查找时间',
      ja: '検索時間',
      ko: '검색 시간',
      ru: 'Время поиска',
    }),

    lazyLoading: t({
      en: 'Lazy Loading',
      fr: 'Chargement différé',
      es: 'Carga diferida',
      de: 'Lazy Loading',
      it: 'Caricamento lazy',
      pt: 'Carregamento Lento',
      zh: '延迟加载',
      ja: '遅延ロード',
      ko: '지연 로드',
      ru: 'Ленивая загрузка',
    }),
  },
} satisfies Dictionary;

export default resultsTableContent;
