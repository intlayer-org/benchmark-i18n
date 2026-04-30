import { type Dictionary, t } from 'intlayer';

const careersBenefitsContent = {
  key: 'careers-benefits',
  content: {
    workFromAnywhereInThe: t({
      en: 'Work from anywhere in the world',
      fr: "Travailler de n'importe où dans le monde",
      es: 'Trabaje desde cualquier lugar del mundo',
      de: 'Arbeiten Sie von überall auf der Welt',
      it: 'Lavora da qualsiasi parte del mondo',
      pt: 'Trabalhe de qualquer lugar do mundo',
      zh: '在全球任何地方工作',
      ja: '世界中のどこからでも仕事ができます',
      ko: '전 세계 어디에서나 근무 가능',
      ru: 'Работайте из любой точки мира',
    }),

    competitivePay: t({
      en: 'Competitive pay',
      fr: 'Salaire compétitif',
      es: 'Salario competitivo',
      de: 'Wettbewerbsfähige Bezahlung',
      it: 'Retribuzione competitiva',
      pt: 'Salário competitivo',
      zh: '具有竞争力的薪酬',
      ja: '競争力のある給与',
      ko: '경쟁력 있는 급여',
      ru: 'Конкурентоспособная оплата',
    }),

    topOfMarketCompensation: t({
      en: 'Top-of-market compensation',
      fr: 'Rémunération au sommet du marché',
      es: 'Compensación de nivel superior en el mercado',
      de: 'Marktführende Vergütung',
      it: 'Compensi ai vertici del mercato',
      pt: 'Compensação acima do mercado',
      zh: '市场顶尖的薪酬',
      ja: '市場トップクラスの報酬',
      ko: '업계 최고 수준의 보상',
      ru: 'Компенсация на уровне лидеров рынка',
    }),

    openSourceTime: t({
      en: 'Open source time',
      fr: 'Temps pour l\'open source',
      es: 'Tiempo de código abierto',
      de: 'Open-Source-Zeit',
      it: "Tempo per l'open source",
      pt: 'Tempo para open source',
      zh: '开源时间',
      ja: 'オープンソース時間',
      ko: '오픈 소스 시간',
      ru: 'Время на open source',
    }),

    x20TimeForOssContributions: t({
      en: '20% time for OSS contributions',
      fr: '20 % du temps pour les contributions OSS',
      es: '20% de tiempo para contribuciones de OSS',
      de: '20 % Zeit für OSS-Beiträge',
      it: '20% del tempo per contributi OSS',
      pt: '20% do tempo para contribuições OSS',
      zh: '20% 的时间用于 OSS 贡献',
      ja: 'OSSへの貢献に20％の時間',
      ko: 'OSS 기여를 위한 20% 시간',
      ru: '20% времени на вклад в OSS',
    }),
  },
} satisfies Dictionary;

export default careersBenefitsContent;
