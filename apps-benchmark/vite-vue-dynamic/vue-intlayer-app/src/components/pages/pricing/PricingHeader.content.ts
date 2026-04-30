import { t, type Dictionary } from "intlayer";

const pricingHeaderContent: Dictionary = {
  key: "pricing-header",
  content: {
    title: t({
      en: 'Simple, Transparent Pricing',
      fr: 'Tarification simple et transparente',
      es: 'Precios simples y transparentes',
      de: 'Einfache, transparente Preise',
      it: 'Prezzi semplici e trasparenti',
      pt: 'Preços Simples e Transparentes',
      zh: '简单、透明的定价',
      ja: 'シンプルで透明性の高い料金体系',
      ko: '단순하고 투명한 요금제',
      ru: 'Простые и прозрачные цены',
    }),
    description: t({
      en: 'Choose the plan that fits your team. No hidden fees.',
      fr: "Choisissez l'offre adaptée à votre équipe. Sans frais cachés.",
      es: 'Elija el plan que se adapte a su equipo. Sin cargos ocultos.',
      de: 'Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.',
      it: 'Scegli il piano più adatto al tuo team. Nessun costo nascosto.',
      pt: 'Escolha o plano que melhor se adapta à sua equipe. Sem taxas ocultas.',
      zh: '选择适合您团队的计划。无隐藏费用。',
      ja: 'チームに合ったプランをお選びください。隠れた費用はありません。',
      ko: '팀에 적합한 플랜을 선택하세요. 숨겨진 수수료가 없습니다.',
      ru: 'Выберите план, который подходит вашей команде. Никаких скрытых платежей.',
    }),
  },
};

export default pricingHeaderContent;
