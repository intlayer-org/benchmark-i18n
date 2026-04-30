import { type Dictionary, t } from 'intlayer';

const careersBenefitsContent = {
  key: 'careers-benefits',
  content: {
    x20TimeForOssContributions: t({
      en: '20% time for OSS contributions',
      fr: '20 % du temps pour les contributions OSS',
      es: '20% del tiempo para contribuciones OSS',
      de: '20 % der Zeit für OSS-Beiträge',
      it: '20% del tempo per contributi OSS',
      pt: '20% do tempo para contribuições OSS',
      zh: '20% 的时间用于 OSS 贡献',
      ja: 'OSS貢献のための20％の時間',
      ko: 'OSS 기여를 위한 20%의 시간',
      ru: '20% времени на вклад в OSS',
    }),

    openSourceTime: t({
      en: 'Open source time',
      fr: 'Temps open source',
      es: 'Tiempo de código abierto',
      de: 'Open-Source-Zeit',
      it: 'Tempo open source',
      pt: 'Tempo de código aberto',
      zh: '开源时间',
      ja: 'オープンソースの時間',
      ko: '오픈 소스 시간',
      ru: 'Время на открытый исходный код',
    }),

    topOfMarketCompensation: t({
      en: 'Top-of-market compensation',
      fr: 'Rémunération haut de gamme',
      es: 'Compensación líder en el mercado',
      de: 'Marktführende Vergütung',
      it: 'Compensi ai vertici del mercato',
      pt: 'Compensação no topo do mercado',
      zh: '市场顶级的薪酬',
      ja: '市場トップクラスの報酬',
      ko: '업계 최고 수준의 보상',
      ru: 'Вознаграждение выше рыночного',
    }),

    competitivePay: t({
      en: 'Competitive pay',
      fr: 'Salaire compétitif',
      es: 'Salario competitivo',
      de: 'Wettbewerbsfähige Bezahlung',
      it: 'Retribuzione competitiva',
      pt: 'Pagamento competitivo',
      zh: '有竞争力的薪酬',
      ja: '競争力のある給与',
      ko: '경쟁력 있는 급여',
      ru: 'Конкурентоспособная оплата',
    }),

    workFromAnywhereInThe: t({
      en: 'Work from anywhere in the world',
      fr: "Travailler d'où vous voulez dans le monde",
      es: 'Trabaja desde cualquier lugar del mundo',
      de: 'Arbeiten Sie von überall auf der Welt',
      it: 'Lavora da qualsiasi parte del mondo',
      pt: 'Trabalhe de qualquer lugar do mundo',
      zh: '可以在世界任何地方工作',
      ja: '世界中のどこからでも働ける',
      ko: '세계 어디서나 근무 가능',
      ru: 'Работайте из любой точки мира',
    }),
  },
} satisfies Dictionary;

export default careersBenefitsContent;
