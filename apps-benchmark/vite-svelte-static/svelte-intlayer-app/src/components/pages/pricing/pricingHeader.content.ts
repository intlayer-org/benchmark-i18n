import { type Dictionary, t } from 'intlayer';

const pricingHeaderContent = {
  key: 'pricing-header',
  content: {
    chooseThePlanThatFits: t({
      en: 'Choose the plan that fits your team. No hidden fees.',
      fr: 'Choisissez le plan qui convient à votre équipe. Pas de frais cachés.',
      es: 'Elija el plan que se adapte a su equipo. Sin cargos ocultos.',
      de: 'Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.',
      it: 'Scegli il piano più adatto al tuo team. Nessun costo nascosto.',
      pt: 'Escolha o plano adequado à sua equipe. Sem taxas ocultas.',
      zh: '选择适合您团队的计划。没有隐藏费用。',
      ja: 'チームにぴったりのプランをお選びください。隠れた費用はありません。',
      ko: '팀에 적합한 플랜을 선택하세요. 숨겨진 수수료가 없습니다.',
      ru: 'Выберите план, который подходит вашей команде. Никаких скрытых комиссий.',
    }),
    simpleTransparentPricing: t({
      en: 'Simple, Transparent Pricing',
      fr: 'Une tarification simple et transparente',
      es: 'Precios simples и transparentes',
      de: 'Einfache, transparente Preisgestaltung',
      it: 'Prezzi semplici e trasparenti',
      pt: 'Preços simples e transparentes',
      zh: '简单透明的定价',
      ja: 'シンプルで透明性の高い価格設定',
      ko: '심플하고 투명한 가격 정책',
      ru: 'Простая и прозрачная цена',
    }),
  },
} satisfies Dictionary;

export default pricingHeaderContent;
