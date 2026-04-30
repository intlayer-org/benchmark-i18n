import { type Dictionary, t } from 'intlayer';

const teamHeaderContent = {
  key: 'team-header',
  content: {
    ourTeam: t({
      en: 'Our Team',
      fr: 'Notre Équipe',
      es: 'Nuestro equipo',
      de: 'Unser Team',
      it: 'Il nostro team',
      pt: 'Nossa Equipe',
      zh: '我们的团队',
      ja: '私たちのチーム',
      ko: '우리 팀',
      ru: 'Наша команда',
    }),

    meetThePeopleBehindI18n: t({
      en: 'Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.',
      fr: 'Rencontrez les personnes derrière i18n Benchmark. Une équipe diversifiée unie par une passion commune pour les excellents outils de développement.',
      es: 'Conozca a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las excelentes herramientas de desarrollo.',
      de: 'Lernen Sie die Menschen hinter dem i18n Benchmark kennen. Ein vielfältiges Team, das die gemeinsame Leidenschaft für großartige Entwicklertools verbindet.',
      it: 'Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per i grandi strumenti per sviluppatori.',
      pt: 'Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhata por ótimas ferramentas de desenvolvedor.',
      zh: '见见 i18n 基准测试背后的人。一个多元化的团队，因对出色开发人员工具的共同热情而团结在一起。',
      ja: 'i18nベンチマークを支える人々を紹介します。優れた開発者ツールへの情熱を共有する多様なチームです。',
      ko: 'i18n 벤치마크를 만든 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 공통된 열정으로 뭉친 다양한 팀입니다.',
      ru: 'Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам разработки.',
    }),
  },
} satisfies Dictionary;

export default teamHeaderContent;
