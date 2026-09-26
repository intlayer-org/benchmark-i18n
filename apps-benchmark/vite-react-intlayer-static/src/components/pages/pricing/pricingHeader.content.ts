import { type Dictionary, t } from 'intlayer';

const pricingHeaderContent = {
  key: "pricing-header",
  content: {
    simpleTransparentPricing: t({
      en: "Simple, Transparent Pricing",
      fr: "Tarification Simple et Transparente",
      es: "Precios Simples y Transparentes",
      de: "Einfache, transparente Preisgestaltung",
      it: "Prezzi semplici e trasparenti",
      pt: "Preços Simples e Transparentes",
      zh: "简单透明的定价",
      ja: "シンプルで透明性の高い料金プラン",
      ko: "간단하고 투명한 가격 책정",
      ru: "Простое и прозрачное ценообразование",
    }),

    chooseThePlanThatFits: t({
      en: "Choose the plan that fits your team. No hidden fees.",
      fr: "Choisissez le plan qui convient à votre équipe. Pas de frais cachés.",
      es: "Elija el plan que se adapte a su equipo. Sin cargos ocultos.",
      de: "Wählen Sie den Plan, der zu Ihrem Team passt. Keine versteckten Gebühren.",
      it: "Scegli il piano più adatto al tuo team. Nessun costo nascosto.",
      pt: "Escolha o plano que melhor se adapta à sua equipe. Sem taxas ocultas.",
      zh: "选择适合您团队的计划。无隐藏费用。",
      ja: "チームに合ったプランをお選びください。隠れた費用はありません。",
      ko: "팀에 적합한 요금제를 선택하십시오. 숨겨진 수수료가 없습니다.",
      ru: "Выберите план, который подходит вашей команде. Никаких скрытых комиссий.",
    }),
  },
} satisfies Dictionary;

export default pricingHeaderContent;
