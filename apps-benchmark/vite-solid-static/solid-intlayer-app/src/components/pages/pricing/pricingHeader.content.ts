import { type Dictionary, t } from 'intlayer';

const pricingHeaderContent = {
  key: 'pricing-header',
  content: {
    simpleTransparentPricing: t({
      en: 'Simple, Transparent Pricing',
      fr: 'Une tarification simple et transparente',
      es: 'Precios simples y transparentes',
      de: 'Einfache, transparente Preise',
      it: 'Prezzi semplici e trasparenti',
      pt: 'Preços Simples e Transparentes',
      zh: '简单、透明的定价',
      ja: 'シンプルで透明性の高い価格設定',
      ko: '단순하고 투명한 가격 책정',
      ru: 'Простые и прозрачные цены',
    }),

    chooseThePlanThatFits: t({
      en: 'Choose the plan that fits your team. No hidden fees.',
      fr: 'Choisissez le forfait qui convient à votre équipe. Pas de frais cachés.',
      es: 'Elija el plan que mejor se adapte a su equipo. Sin cargos ocultos.',
      de: 'Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.',
      it: 'Scegli il piano più adatto al tuo team. Nessun costo nascosto.',
      pt: 'Escolha o plano que melhor se adapta à sua equipe. Sem taxas ocultas.',
      zh: '选择适合您团队的计划。无隐藏费用。',
      ja: 'あなたのチームに合ったプランをお選びください。隠れた費用はありません。',
      ko: '팀에 맞는 플랜을 선택하십시오. 숨겨진 비용은 없습니다.',
      ru: 'Выберите план, который подходит вашей команде. Никаких скрытых платежей.',
    }),
  },
} satisfies Dictionary;

export default pricingHeaderContent;
