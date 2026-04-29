import type { Dictionary } from "intlayer";
import { t } from "intlayer";

const faqHeaderContent: Dictionary = {
  key: "faq-header",
  content: {
    title: t({
      en: 'Frequently Asked Questions',
      fr: 'Questions fréquemment posées',
      es: 'Preguntas frecuentes',
      de: 'Häufig gestellte Fragen',
      it: 'Domande frequenti',
      pt: 'Perguntas frequentes',
      zh: '常见问题',
      ja: 'よくある質問',
      ko: '자주 묻는 질문',
      ru: 'Часто задаваемые вопросы',
    }),
    description: t({
      en: 'Everything you need to know about i18n Benchmark.',
      fr: 'Tout ce que vous devez savoir sur i18n Benchmark.',
      es: 'Todo lo que necesita saber sobre i18n Benchmark.',
      de: 'Alles, was Sie über i18n Benchmark wissen müssen.',
      it: 'Tutto quello che c\'è da sapere su i18n Benchmark.',
      pt: 'Tudo o que você precisa saber sobre o i18n Benchmark.',
      zh: '关于 i18n Benchmark 您需要了解的一切。',
      ja: 'i18n Benchmark について知っておくべきことのすべて。',
      ko: 'i18n Benchmark에 대해 알아야 할 모든 것.',
      ru: 'Все, что вам нужно знать об i18n Benchmark.',
    }),
  },
};

export default faqHeaderContent;
