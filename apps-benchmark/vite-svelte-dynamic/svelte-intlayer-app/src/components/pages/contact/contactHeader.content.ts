import { type Dictionary, t } from 'intlayer';

const contactHeaderContent = {
  key: 'contact-header',
  content: {
    haveIdeasFoundABug: t({
      en: 'Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at',
      fr: 'Vous avez des idées, trouvé un bug ou souhaitez contribuer à un benchmark ? Contactez-nous à',
      es: '¿Tiene ideas, encontró un error o quiere contribuir con un benchmark? Contáctenos en',
      de: 'Haben Sie Ideen, einen Fehler gefunden oder möchten Sie einen Benchmark beisteuern? Kontaktieren Sie uns unter',
      it: 'Hai idee, hai trovato un bug o vuoi contribuire con un benchmark? Contattaci a',
      pt: 'Tem ideias, encontrou um bug ou quer contribuir com um benchmark? Entre em contato conosco em',
      zh: '有想法、发现了错误或想贡献基准测试？请通过以下方式联系我们：',
      ja: 'アイデアがある、バグを見つけた、またはベンチマークを提供したいですか？こちらまでご連絡ください：',
      ko: '아이디어가 있거나 버그를 발견했거나 벤치마크에 기여하고 싶으신가요? 다음 주소로 문의해 주세요.',
      ru: 'Есть идеи, нашли баг или хотите предложить свой бенчмарк? Свяжитесь с нами по адресу',
    }),
    getInTouch: t({
      en: 'Get in Touch',
      fr: 'Contactez-nous',
      es: 'Ponte en contacto',
      de: 'Kontakt aufnehmen',
      it: 'Mettiti in contatto',
      pt: 'Entre em contato',
      zh: '保持联系',
      ja: 'お問い合わせ',
      ko: '문의하기',
      ru: 'Связаться с нами',
    }),
  },
} satisfies Dictionary;

export default contactHeaderContent;
