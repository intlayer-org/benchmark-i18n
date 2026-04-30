import { t, type Dictionary } from "intlayer";

const heroContent: Dictionary = {
  key: "hero",
  content: {
    title: t({
      en: 'i18n Benchmark',
      fr: 'Benchmark i18n',
      es: 'i18n Benchmark',
      de: 'i18n Benchmark',
      it: 'i18n Benchmark',
      pt: 'i18n Benchmark',
      zh: 'i18n 基准测试',
      ja: 'i18n ベンチマーク',
      ko: 'i18n 벤치마크',
      ru: 'i18n Бенчмарк',
    }),

    description: t({
      en: 'A test application designed to measure the real-world impact of internationalization libraries on bundle size, loading performance, and rendering reactivity.',
      fr: "Une application de test conçue pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, les performances de chargement et la réactivité du rendu.",
      es: 'Una aplicación de prueba diseñada para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el rendimiento de carga y la reactividad del renderizado.',
      de: 'Eine Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladeleistung und Rendering-Reaktivität.',
      it: "Un'applicazione di test progettata per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sulle prestazioni di caricamento e sulla reattività del rendering.",
      pt: 'Uma aplicação de teste projetada para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no desempenho de carregamento e na reatividade da renderização.',
      zh: '一个旨在衡量国际化库对捆绑包大小、加载性能和渲染反应性真实影响的测试应用程序。',
      ja: '国際化ライブラリがバンドルサイズ、ロードパフォーマンス、レンダリングの反応性に与える実際の影響を測定するために設計されたテストアプリケーション。',
      ko: '번들 크기, 로딩 성능 및 렌더링 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하도록 설계된 테스트 애플리케이션입니다.',
      ru: 'Тестовое приложение, предназначенное для измерения реального влияния библиотек интернационализации на размер бандла, производительность загрузки и реактивность рендеринга.',
    }),

    viewResults: t({
      en: 'View Results',
      fr: 'Voir les résultats',
      es: 'Ver resultados',
      de: 'Ergebnisse anzeigen',
      it: 'Visualizza risultati',
      pt: 'Ver Resultados',
      zh: '查看结果',
      ja: '結果を表示',
      ko: '결과 보기',
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
      es: 'Hero',
      de: 'Hero',
      it: 'Hero',
      pt: 'Hero',
      zh: '英雄区',
      ja: 'ヒーロー',
      ko: '히어로',
      ru: 'Главный баннер',
    }),
  },
};

export default heroContent;
