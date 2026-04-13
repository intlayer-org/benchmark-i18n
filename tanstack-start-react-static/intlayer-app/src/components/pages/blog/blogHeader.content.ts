import { type Dictionary, t } from "intlayer";

const blogHeaderContent = {
  key: "blog-header",
  content: {
    insightsTutorialsAndAnalysisFrom: t({
      en: "Insights, tutorials, and analysis from the i18n community.",
      fr: "Aperçus, tutoriels et analyses de la communauté i18n.",
      es: "Información, tutoriales y análisis de la comunidad i18n.",
      de: "Einblicke, Tutorials und Analysen aus der i18n-Community.",
      it: "Approfondimenti, tutorial e analisi dalla comunità i18n.",
      pt: "Insights, tutoriais e análises da comunidade i18n.",
      zh: "来自 i18n 社区 de 见解、教程和分析。",
      ja: "i18n コミュニティからの洞察、チュートリアル、分析。",
      ko: "i18n 커뮤니티의 인사이트, 튜토리얼 및 분석.",
      ru: "Инсайты, руководства и анализ от сообщества i18n.",
    }),
  },
} satisfies Dictionary;

export default blogHeaderContent;
