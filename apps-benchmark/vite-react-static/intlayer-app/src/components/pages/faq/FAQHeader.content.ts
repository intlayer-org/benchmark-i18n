import { type Dictionary, t } from 'intlayer';

const faqHeader1Content = {
  key: "faq-header1",
  content: {
    frequentlyAskedQuestions: t({
      en: "Frequently Asked Questions",
      fr: "Foire Aux Questions",
      es: "Preguntas Frecuentes",
      de: "Häufig gestellte Fragen",
      it: "Domande frequenti",
      pt: "Perguntas Frequentes",
      zh: "常见问题",
      ja: "よくある質問",
      ko: "자주 묻는 질문",
      ru: "Часто задаваемые вопросы",
    }),

    everythingYouNeedToKnow: t({
      en: "Everything you need to know about i18n Benchmark.",
      fr: "Tout ce que vous devez savoir sur i18n Benchmark.",
      es: "Todo lo que necesitas saber sobre i18n Benchmark.",
      de: "Alles, was Sie über i18n Benchmark wissen müssen.",
      it: "Tutto quello che c'è da sapere su i18n Benchmark.",
      pt: "Tudo o que você precisa saber sobre o i18n Benchmark.",
      zh: "您需要了解的有关 i18n Benchmark 的一切。",
      ja: "i18n Benchmark について知っておくべきことのすべて。",
      ko: "i18n Benchmark에 대해 알아야 할 모든 것.",
      ru: "Все, что вам нужно знать об i18n Benchmark.",
    }),
  },
} satisfies Dictionary;

export default faqHeader1Content;
