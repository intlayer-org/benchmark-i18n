import { type Dictionary, t } from 'intlayer';

const careersBenefitsContent = {
  key: 'careers-benefits',
  content: {
    workFromAnywhereInThe: t({
      en: "Work from anywhere in the world",
      fr: "Travailler de n'importe où dans le monde",
      es: "Trabaja desde cualquier parte del mundo",
      de: "Arbeiten von überall auf der Welt",
      it: "Lavora da qualsiasi parte del mondo",
      pt: "Trabalhe de qualquer lugar do mundo",
      zh: "在全球任何地方工作",
      ja: "世界中どこからでも仕事ができます",
      ko: "전 세계 어디서나 근무하십시오",
      ru: "Работайте из любой точки мира",
    }),

    competitivePay: t({
      en: "Competitive pay",
      fr: "Rémunération compétitive",
      es: "Salario competitivo",
      de: "Wettbewerbsfähige Bezahlung",
      it: "Retribuzione competitiva",
      pt: "Pagamento competitivo",
      zh: "有竞争力的薪酬",
      ja: "競争力のある報酬",
      ko: "경쟁력있는 보수",
      ru: "Конкурентоспособная оплата",
    }),

    topOfMarketCompensation: t({
      en: "Top-of-market compensation",
      fr: "Rémunération au-dessus du marché",
      es: "Compensación superior al mercado",
      de: "Spitzenvergütung",
      it: "Compensi ai vertici del mercato",
      pt: "Compensação acima do mercado",
      zh: "市场顶级薪酬",
      ja: "市場最高水准の報酬",
      ko: "시장 최고의 보상",
      ru: "Компенсация выше рыночной",
    }),

    openSourceTime: t({
      en: "Open source time",
      fr: "Temps alloué à l'open source",
      es: "Tiempo dedicado al código abierto",
      de: "Open-Source-Zeit",
      it: "Tempo per l'open source",
      pt: "Tempo dedicado ao código aberto",
      zh: "开源贡献时间",
      ja: "オープンソースの時間",
      ko: "오픈 소스 시간",
      ru: "Время на open source",
    }),
  },
} satisfies Dictionary;

export default careersBenefitsContent;
