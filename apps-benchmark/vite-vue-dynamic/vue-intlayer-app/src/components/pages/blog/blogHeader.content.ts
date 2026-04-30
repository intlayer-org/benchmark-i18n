import { type Dictionary, t } from 'intlayer';

const blogHeaderContent = {
  key: 'blog-header',
  content: {
    insightsTutorialsAndAnalysisFrom: t({
      en: 'Insights, tutorials, and analysis from the i18n community.',
      fr: 'Des analyses, tutoriels et points de vue de la communauté i18n.',
      es: 'Ideas, tutoriales y análisis de la comunidad i18n.',
      de: 'Einblicke, Tutorials und Analysen aus der i18n-Community.',
      it: 'Approfondimenti, tutorial e analisi dalla comunità i18n.',
      pt: 'Insights, tutoriais e análises da comunidade i18n.',
      zh: '来自 i18n 社区的见解、教程 and 分析。',
      ja: 'i18nコミュニティからのインサイト、チュートリアル、分析。',
      ko: 'i18n 커뮤니티의 인사이트, 튜토리얼 및 분석.',
      ru: 'Идеи, руководства и аналитика от сообщества i18n.',
    }),

    blog: t({
      en: 'Blog',
      fr: 'Blog',
      es: 'Blog',
      de: 'Blog',
      it: 'Blog',
      pt: 'Blog',
      zh: '博客',
      ja: 'ブログ',
      ko: '블로그',
      ru: 'Блог',
    }),
  },
} satisfies Dictionary;

export default blogHeaderContent;
