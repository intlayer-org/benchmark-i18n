import { type Dictionary, t } from 'intlayer';

const footerContent = {
  key: 'footer',
  content: {
    anOpenSourceTestApplication: t({
      en: 'An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.',
      fr: "Une application de test open source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
      es: 'Una aplicación de prueba de código abierto para medir el impacto real de las bibliotecas de internacionalización en el tamaño del paquete, el tiempo de carga y la reactividad de la aplicación.',
      de: 'Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungsbibliotheken auf Bundle-Größe, Ladezeit und App-Reaktivität.',
      it: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulle dimensioni del bundle, sui tempi di caricamento e sulla reattività dell'app.",
      pt: 'Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, no tempo de carregamento e na reatividade da aplicação.',
      zh: '一个开源测试应用程序，用于衡量国际化库对捆绑包大小、加载时间和应用程序反应性的真实影响。',
      ja: '国際化ライブラリがバンドルサイズ、ロード時間、アプリの反応性に与える実際の影響を測定するためのオープンソーステストアプリケーションです。',
      ko: '번들 크기, 로딩 시간 및 앱 반응성에 대한 국제화 라이브러리의 실제 영향을 측정하기 위한 오픈 소스 테스트 애플ри케이션입니다.',
      ru: 'Тестовое приложение с открытым исходным кодом для измерения реального влияния библиотек интернационализации на размер бандла, время загрузки и реактивность приложения.',
    }),

    resources: t({
      en: 'Resources',
      fr: 'Ressources',
      es: 'Recursos',
      de: 'Ressourcen',
      it: 'Risorse',
      pt: 'Recursos',
      zh: '资源',
      ja: 'リソース',
      ko: '리소스',
      ru: 'Ресурсы',
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

    contributing: t({
      en: 'Contributing',
      fr: 'Contribuer',
      es: 'Contribución',
      de: 'Beitragen',
      it: 'Contribuire',
      pt: 'Contribuindo',
      zh: '贡献',
      ja: '貢献する',
      ko: '기여',
      ru: 'Вклад',
    }),

    contact: t({
      en: 'Contact',
      fr: 'Contact',
      es: 'Contacto',
      de: 'Kontakt',
      it: 'Contatti',
      pt: 'Contato',
      zh: '联系我们',
      ja: 'お問い合わせ',
      ko: '문의',
      ru: 'Контакт',
    }),

    i18nBenchmarkOpenSourceProject: t({
      en: 'i18n Benchmark — Open-source project. Built with Solid, Vite & Solid Router.',
      fr: 'i18n Benchmark — Projet open source. Construit avec Solid, Vite & Solid Router.',
      es: 'i18n Benchmark — Proyecto de código abierto. Construido con Solid, Vite y Solid Router.',
      de: 'i18n Benchmark — Open-Source-Projekt. Erstellt mit Solid, Vite & Solid Router.',
      it: 'i18n Benchmark — Progetto open source. Creato con Solid, Vite & Solid Router.',
      pt: 'i18n Benchmark — Projeto de código aberto. Construído com Solid, Vite & Solid Router.',
      zh: 'i18n Benchmark — 开源项目。使用 Solid、Vite 和 Solid Router 构建。',
      ja: 'i18n Benchmark — オープンソースプロジェクト。Solid、Vite、Solid Routerで構築されています。',
      ko: 'i18n Benchmark — 오픈 소스 프로젝트. Solid, Vite 및 Solid Router로 제작되었습니다.',
      ru: 'i18n Benchmark — проект с открытым исходным кодом. Построен на Solid, Vite и Solid Router.',
    }),
  },
} satisfies Dictionary;

export default footerContent;
