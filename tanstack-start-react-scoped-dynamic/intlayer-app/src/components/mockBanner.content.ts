import { type Dictionary, t } from 'intlayer';

const mockBannerContent = {
  key: 'mock-banner',
  content: {
    thisPageContainsMockData: t({
      en: "⚠️ This page contains mock data for benchmarking purposes only. It is not related to any real business or service.",
      fr: "⚠️ Cette page contient des données factices à des fins de benchmarking uniquement. Elle n'est liée à aucune entreprise ou service réel.",
      es: "⚠️ Esta página contiene datos simulados solo para fines de benchmarking. No está relacionada con ningún negocio o servicio real.",
      de: "⚠️ Diese Seite enthält fiktive Daten, die nur Benchmark-Zwecken dienen. Sie stehen in keinem Zusammenhang mit realen Unternehmen oder Dienstleistungen.",
      it: "⚠️ Questa pagina contiene dati fittizi solo a scopo di benchmarking. Non è correlata ad alcuna attività o servizio reale.",
      pt: "⚠️ Esta página contém dados fictícios apenas para fins de benchmarking. Não está relacionada com qualquer negócio o serviço real.",
      zh: "⚠️ 此页面仅包含用于基准测试的模拟数据。它与任何真实的业务或服务无关。",
      ja: "⚠️ このページにはベンチマークのみを目的とした模擬データが含まれています。実際のビジネスやサービスとは関係ありません。",
      ko: "⚠️ 이 페이지는 벤치마킹 목적으로만 사용되는 모의 데이터를 포함하고 있습니다. 실제 비즈니스나 서비스와는 관련이 없습니다.",
      ru: "⚠️ Эта страница содержит фиктивные данные только для целей тестирования производительности. Она не связана с каким-либо реальным бизнесом или услугой.",
    })
  },
} satisfies Dictionary;

export default mockBannerContent;
