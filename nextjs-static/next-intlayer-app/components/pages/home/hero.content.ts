import { type Dictionary, t } from 'intlayer';

const heroContent = {
  key: 'hero',
  content: {
    aTestApplicationDesignedTo: t({
      en: "A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.",
      fr: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
      es: "Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del bundle, el rendimiento de carga y la reactividad del renderizado.",
      de: "Eine Testanwendung, die entwickelt wurde, um die realen Auswirkungen von Internationalisierungs-Bibliotheken auf die Bundle-Größe, Ladeleistung und Rendering-Reaktivität zu messen.",
      it: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
      pt: "Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.",
      zh: "一个测试应用程序，旨在衡量国际化库对包大小、加载性能和渲染反应性的实际影响。",
      ja: "国際化ライブラリがバンドルサイズ、読み込みパフォーマンス、およびレンダリングの反応性に与える実際の影を測定するために設計されたテストアプリケーション。",
      ko: "번들 크기, 로딩 성능 및 렌더링 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.",
      ru: "Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.",
    }),

    viewResults: t({
      en: "View Results",
      fr: "Voir les Résultats",
      es: "Ver Resultados",
      de: "Ergebnisse anzeigen",
      it: "Visualizza i risultati",
      pt: "Ver Resultados",
      zh: "查看结果",
      ja: "結果を表示",
      ko: "결과 보기",
      ru: "Посмотреть результаты",
    }),

    hero: t({
      en: "Hero",
      fr: "Héros",
      es: "Héroe",
      de: "Held",
      it: "Eroe",
      pt: "Herói",
      zh: "英雄",
      ja: "ヒーロー",
      ko: "영웅",
      ru: "Герой",
    }),

    methodology: t({
      en: "Methodology",
      fr: "Méthodologie",
      es: "Metodología",
      de: "Methodik",
      it: "Metodologia",
      pt: "Metodologia",
      zh: "方法论",
      ja: "方法論",
      ko: "방법론",
      ru: "Методология",
    }),

    i18nBenchmarkTitle: t({
      en: "i18n Benchmark",
      fr: "Benchmark i18n",
      es: "Benchmark i18n",
      de: "i18n Benchmark",
      it: "Benchmark i18n",
      pt: "Benchmark i18n",
      zh: "i18n 基准测试",
      ja: "i18n ベンチマーク",
      ko: "i18n 벤치마크",
      ru: "i18n Бенчмарк",
    }),
  },
} satisfies Dictionary;

export default heroContent;
