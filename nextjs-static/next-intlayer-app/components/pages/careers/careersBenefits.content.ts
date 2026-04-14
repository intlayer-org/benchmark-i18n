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

    remoteFirst: t({
      en: "Remote-first",
      fr: "Télétravail d'abord",
      es: "Primero remoto",
      de: "Remote-First",
      it: "Remote-first",
      pt: "Trabalho remoto primeiro",
      zh: "远程优先",
      ja: "リモートファースト",
      ko: "원격 우선",
      ru: "Удаленная работа прежде всего",
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

    x20TimeForOssContributions: t({
      en: "20% time for OSS contributions",
      fr: "20 % du temps pour les contributions OSS",
      es: "20% de tiempo para contribuciones de OSS",
      de: "20 % Zeit für OSS-Beiträge",
      it: "20% di tempo per contributi OSS",
      pt: "20% de tempo para contribuições OSS",
      zh: "20% 的时间用于 OSS 贡献",
      ja: "OSS への貢献に 20% の時間を割く",
      ko: "OSS 기여를 위한 20% 시간",
      ru: "20% времени на вклад в OSS",
    })
  },
} satisfies Dictionary;

export default careersBenefitsContent;
