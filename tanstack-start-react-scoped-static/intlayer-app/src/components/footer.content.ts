import { type Dictionary, t } from "intlayer";

const footerContent = {
  key: "footer",
  content: {
    resources: t({
      en: "Resources",
      fr: "Ressources",
      es: "Recursos",
      de: "Ressourcen",
      it: "Risorse",
      pt: "Recursos",
      zh: "资源",
      ja: "リソース",
      ko: "리소스",
      ru: "Ресурсы",
    }),

    contact: t({
      en: "Contact",
      fr: "Contact",
      es: "Contacto",
      de: "Kontakt",
      it: "Contatti",
      pt: "Contato",
      zh: "联系",
      ja: "連絡先",
      ko: "연락처",
      ru: "Контакт",
    }),

    github: t({
      en: "GitHub",
      fr: "GitHub",
      es: "GitHub",
      de: "GitHub",
      it: "GitHub",
      pt: "GitHub",
      zh: "GitHub",
      ja: "GitHub",
      ko: "GitHub",
      ru: "GitHub",
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

    contributing: t({
      en: "Contributing",
      fr: "Contribuer",
      es: "Contribuir",
      de: "Mitwirken",
      it: "Contribuire",
      pt: "Contribuir",
      zh: "贡献",
      ja: "貢献",
      ko: "기여",
      ru: "Вклад",
    }),

    builtWith: t({
      en: "i18n Benchmark — Open-source project. Built with React, Vite & TanStack Router.",
      fr: "i18n Benchmark — Projet open-source. Construit avec React, Vite & TanStack Router.",
      es: "i18n Benchmark — Proyecto de código abierto. Construido con React, Vite y TanStack Router.",
      de: "i18n Benchmark — Open-Source-Projekt. Erstellt mit React, Vite & TanStack Router.",
      it: "i18n Benchmark — Progetto open source. Costruito con React, Vite e TanStack Router.",
      pt: "i18n Benchmark — Projeto de código aberto. Construído com React, Vite e TanStack Router.",
      zh: "i18n Benchmark — 开源项目。使用 React, Vite 和 TanStack Router 构建。",
      ja: "i18n Benchmark — オープンソースプロジェクト。React, Vite & TanStack Router で構築。",
      ko: "i18n Benchmark — 오픈 소스 프로젝트. React, Vite 및 TanStack Router로 구축되었습니다.",
      ru: "i18n Benchmark — Открытый проект. Построен на React, Vite и TanStack Router.",
    }),

    anOpenSourceTestApplication: t({
      en: "An open-source test application for measuring the real-world impact of internationalization libraries on bundle size, loading time, and app reactivity.",
      fr: "Une application de test open-source pour mesurer l'impact réel des bibliothèques d'internationalisation sur la taille du bundle, le temps de chargement et la réactivité de l'application.",
      es: "Una aplicación de prueba de código abierto para medir el impacto en el mundo real de las bibliotecas de internacionalización en el tamaño del bundle, el tiempo de carga y la reactividad de la aplicación.",
      de: "Eine Open-Source-Testanwendung zur Messung der realen Auswirkungen von Internationalisierungs-Bibliotheken auf die Bundle-Größe, Ladezeit und App-Reaktivität.",
      it: "Un'applicazione di test open source per misurare l'impatto reale delle librerie di internazionalizzazione sulla dimensione del bundle, sui tempi di caricamento e sulla reattività dell'app.",
      pt: "Uma aplicação de teste de código aberto para medir o impacto real das bibliotecas de internacionalização no tamanho do bundle, tempo de carregamento e reatividade do aplicativo.",
      zh: "一个开源测试应用程序，用于衡量国际化库对包大小、加载时间和应用程序反应性的实际影响。",
      ja: "国際化ライブラリがバンドルサイズ、読み込み時間、アプリの反応性に与える実際の影響を測定するためのオープンソースのテストアプリケーション。",
      ko: "국제화 라이브러리가 번들 크기, 로드 시간 및 앱 반응성에 미치는 실제 영향을 측정하기 위한 오픈 소스 테스트 애플리케이션입니다.",
      ru: "Открытое приложение для тестирования реального влияния библиотек интернационализации на размер бандла, время загрузки и отзывчивость приложения.",
    }),
  },
} satisfies Dictionary;

export default footerContent;
