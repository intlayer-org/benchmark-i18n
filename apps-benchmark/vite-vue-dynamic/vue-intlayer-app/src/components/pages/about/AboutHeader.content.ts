import { t, type Dictionary } from "intlayer";

const aboutHeaderContent: Dictionary = {
  key: "about-header",
  content: {
    title: t({
      en: 'About This Benchmark',
      fr: 'À propos de ce benchmark',
      es: 'Acerca de este benchmark',
      de: 'Über diesen Benchmark',
      it: 'Informazioni su questo benchmark',
      pt: 'Sobre este Benchmark',
      zh: '关于此基准测试',
      ja: 'このベンチマークについて',
      ko: '이 벤치마크에 대하여',
      ru: 'Об этом бенчмарке',
    }),
    description: t({
      en: 'This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page application where different i18n libraries can be integrated and measured under identical conditions.',
      fr: "Il s'agit d'une application de test open-source — pas d'un produit ou d'une entreprise. Son seul but est de fournir une application multi-pages réaliste où différentes bibliothèques i18n peuvent être intégrées et mesurées dans des conditions identiques.",
      es: 'Esta es una aplicación de prueba de código abierto, no un producto o una empresa. Su único propósito es proporcionar una aplicación multipágina realista donde se puedan integrar y medir diferentes bibliotecas i18n bajo condiciones idénticas.',
      de: 'Dies ist eine Open-Source-Testanwendung – kein Produkt oder Unternehmen. Ihr einziger Zweck ist es, eine realistische, mehrseitige Anwendung bereitzustellen, in der verschiedene i18n-Bibliotheken unter identischen Bedingungen integriert und gemessen werden können.',
      it: 'Questa è un\'applicazione di test open source — non un prodotto o un\'azienda. Il suo unico scopo è fornire un\'applicazione multi-pagina realistica in cui diverse librerie i18n possano essere integrate e misurate in condizioni identiche.',
      pt: 'Este é um aplicativo de teste de código aberto — não um produto ou uma empresa. Seu único propósito é fornecer um aplicativo de várias páginas realista, onde diferentes bibliotecas i18n possam ser integradas e medidas em condições idênticas.',
      zh: '这是一个开源测试应用程序——不是产品或公司。其唯一目的是提供一个逼真的多页面应用程序，可以在相同条件下集成和测量不同的 i18n 库。',
      ja: 'これはオープンソースのテストアプリケーションであり、製品や企業ではありません。その唯一の目的は、同一の条件下でさまざまなi18nライブラリを統合および測定できる、現実的なマルチページアプリケーションを提供することです。',
      ko: '이것은 오픈 소스 테스트 애플리케이션이며 제품이나 회사가 아닙니다. 유일한 목적은 동일한 조건에서 서로 다른 i18n 라이브러리를 통합하고 측정할 수 있는 현실적인 다중 페이지 애플리케이션을 제공하는 것입니다.',
      ru: 'Это тестовое приложение с открытым исходным кодом — не продукт и не компания. Его единственная цель — предоставить реалистичное многостраничное приложение, в которое можно интегрировать различные библиотеки i18n и измерять их в идентичных условиях.',
    }),
  },
};

export default aboutHeaderContent;
