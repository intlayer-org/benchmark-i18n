import { t, type Dictionary } from 'intlayer';

const heroContent: Dictionary = {
  key: 'hero',
  content: {
    title: t({
      en: 'i18n Benchmark',
      fr: 'Benchmark i18n',
      es: 'i18n Benchmark',
      de: 'i18n Benchmark',
      it: 'i18n Benchmark',
      pt: 'i18n Benchmark',
      zh: 'i18n Benchmark',
      ja: 'i18n Benchmark',
      ko: 'i18n Benchmark',
      ru: 'i18n Benchmark',
    }),

    description: t({
      en: 'A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.',
      fr: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
      es: 'Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga и la reactividad de la representación.',
      de: 'Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungsbibliotheken auf die Bundle-Größe, die Ladeleistung und die Rendering-Reaktivität zu messen.',
      it: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
      pt: 'Uma aplicação de teste progettada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade de renderização.',
      zh: '一个测试应用程序，旨在衡量国际化库对捆绑包大小、加载性能和渲染反应性的真实影响。',
      ja: '国際化ライブラリがバンドルサイズ、ロード性能、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーションです。',
      ko: '번들 크기, 로딩 성능 및 렌더링 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위해 설계된 테스트 애플리케이션입니다.',
      ru: 'Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.',
    }),

    viewResults: t({
      en: 'View Results',
      fr: 'Voir les résultats',
      es: 'Ver Resultados',
      de: 'Ergebnisse anzeigen',
      it: 'Visualizza risultati',
      pt: 'Ver Resultados',
      zh: '查看结果',
      ja: '結果を表示',
      ko: '결과 표시',
      ru: 'Посмотреть результаты',
    }),

    methodology: t({
      en: 'Methodology',
      fr: 'Méthodologie',
      es: 'Metodología',
      de: 'Methodik',
      it: 'Metodologia',
      pt: 'Metodologia',
      zh: '方法论',
      ja: '方法論',
      ko: '방법론',
      ru: 'Методология',
    }),

    hero: t({
      en: 'Hero',
      fr: 'Héros',
      es: 'Héroe',
      de: 'Hero',
      it: 'Eroe',
      pt: 'Herói',
      zh: '主页横幅',
      ja: 'ヒーロー',
      ko: '히어로',
      ru: 'Главная',
    }),
  },
};

export default heroContent;
