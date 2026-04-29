import { type Dictionary, t } from 'intlayer';

const faqHeaderContent = {
  key: 'faq-header',
  content: {
    frequentlyAskedQuestions: t({
      en: 'Frequently Asked Questions',
      fr: 'Questions fréquemment posées',
      es: 'Preguntas frecuentes',
      de: 'Häufig gestellte Fragen (FAQ)',
      it: 'Domande frequenti',
      pt: 'Perguntas Frequentes',
      zh: '常见问题',
      ja: 'よくある質問',
      ko: '자주 묻는 질문',
      ru: 'Часто задаваемые вопросы',
    }),

    everythingYouNeedToKnow: t({
      en: 'Everything you need to know about i18n Benchmark.',
      fr: 'Tout ce que vous devez savoir sur i18n Benchmark.',
      es: 'Todo lo que necesita saber sobre i18n Benchmark.',
      de: 'Alles, was Sie über den i18n Benchmark wissen müssen.',
      it: "Tutto quello che c'è da sapere su i18n Benchmark.",
      pt: 'Tudo o que você precisa saber sobre o i18n Benchmark.',
      zh: '关于 i18n 基准测试您需要了解的一切。',
      ja: 'i18nベンチマークについて知っておくべきすべてのこと。',
      ko: 'i18n 벤치마크에 대해 알아야 할 모든 것.',
      ru: 'Все, что вам нужно знать об i18n Benchmark.',
    }),
  },
} satisfies Dictionary;

export default faqHeaderContent;
