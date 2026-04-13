import { type Dictionary, t } from 'intlayer';

const teamHeaderContent = {
  key: "team-header",
  content: {
    ourTeam: t({
      en: "Our Team",
      fr: "Notre Équipe",
      es: "Nuestro Equipo",
      de: "Unser Team",
      it: "Il nostro team",
      pt: "Nossa Equipe",
      zh: "我们的团队",
      ja: "私たちのチーム",
      ko: "우리 팀",
      ru: "Наша команда",
    }),

    meetThePeopleBehindI18n: t({
      en: "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools.",
      fr: "Découvrez les personnes derrière i18n Benchmark. Une équipe diverse unie par une passion partagée pour les excellents outils de développement.",
      es: "Conozca a las personas detrás de i18n Benchmark. Un equipo diverso unido por una pasión compartida por las grandes herramientas de desarrollo.",
      de: "Lernen Sie die Menschen hinter i18n Benchmark kennen. Ein vielfältiges Team, das durch eine gemeinsame Leidenschaft für großartige Entwicklertools vereint ist.",
      it: "Incontra le persone dietro i18n Benchmark. Un team diversificato unito da una passione condivisa per i grandi strumenti per sviluppatori.",
      pt: "Conheça as pessoas por trás do i18n Benchmark. Uma equipe diversificada unida por uma paixão compartilhada por ótimas ferramentas de desenvolvedor.",
      zh: "认识 i18n Benchmark 背后的团队。一支多元化的团队，因为对优秀开发人员工具的共同热情而团结在一起。",
      ja: "i18n Benchmark を支える人々を紹介します。素晴らしい開発者ツールへの情熱を共有する多様なチームです。",
      ko: "i18n Benchmark 뒤에 있는 사람들을 만나보세요. 훌륭한 개발자 도구에 대한 공유된 열정으로 뭉친 다양한 팀입니다.",
      ru: "Познакомьтесь с людьми, стоящими за i18n Benchmark. Разнообразная команда, объединенная общей страстью к отличным инструментам для разработчиков.",
    }),
  },
} satisfies Dictionary;

export default teamHeaderContent;
