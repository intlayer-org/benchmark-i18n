import { type Dictionary, t } from 'intlayer';

const contactHeaderContent = {
  key: 'contact-header',
  content: {
    getInTouch: t({
      en: "Get in Touch",
      fr: "Contactez-nous",
      es: "Póngase en contacto",
      de: "Kontaktieren Sie uns",
      it: "Mettiti in contatto",
      pt: "Entre em contato",
      zh: "联系我们",
      ja: "お問い合わせ",
      ko: "문의하기",
      ru: "Связаться с нами",
    }),

    haveIdeasFoundABug: t({
      en: "Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at",
      fr: "Vous avez des idées, trouvé un bug ou vous voulez contribuer à un benchmark ? Contactez-nous à",
      es: "¿Tienes ideas, encontraste un error o quieres contribuir con un benchmark ? Contáctanos en",
      de: "Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern ? Kontaktieren Sie uns unter",
      it: "Hai delle idee, hai trovato un bug o vuoi contribuire con un benchmark ? Contattaci all'indirizzo",
      pt: "Tem ideias, encontrou um bug ou quer contribuir com um benchmark ? Entre em contato conosco em",
      zh: "有想法、发现了错误或想贡献基准测试？请通过以下方式联系我们",
      ja: "アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでご連絡ください",
      ko: "아이디어가 있거나 버그를 발견했거나 벤치마크에 기여하고 싶으신가요? 다음 주소로 연락해 주세요",
      ru: "Есть идеи, нашли баг или хотите предложить бенчмарк? Свяжитесь с нами по адресу",
    })
  },
} satisfies Dictionary;

export default contactHeaderContent;
