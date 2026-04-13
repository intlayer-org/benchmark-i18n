import { T, useTranslate } from "@tolgee/react";

export default function PricingTiers() {
  const { t } = useTranslate("pricing");

  const tiers = [
    {
      name: t("pricingTiers.starterTier", "Starter"),
      price: t("pricingTiers.starterPrice", "$0"),
      period: t("pricingTiers.forever", "forever"),
      features: [
        t("pricingTiers.runsPerDay", "5 benchmark runs/day"),
        t("pricingTiers.libraries3", "3 libraries"),
        t("pricingTiers.communitySupport", "Community support"),
        t("pricingTiers.publicResults", "Public results"),
      ],
      cta: t("pricingTiers.getStarted", "Get Started"),
    },
    {
      name: t("pricingTiers.proTier", "Pro"),
      price: t("pricingTiers.proPrice", "$29"),
      period: t("pricingTiers.perMonth", "/month"),
      features: [
        t("pricingTiers.unlimitedRuns", "Unlimited runs"),
        t("pricingTiers.allLibraries", "All libraries"),
        t("pricingTiers.prioritySupport", "Priority support"),
        t("pricingTiers.privateResults", "Private results"),
        t("pricingTiers.ciIntegration", "CI integration"),
        t("pricingTiers.historicalData", "Historical data"),
      ],
      highlighted: true,
      cta: t("pricingTiers.getStarted", "Get Started"),
    },
    {
      name: t("pricingTiers.enterpriseTier", "Enterprise"),
      price: t("pricingTiers.custom", "Custom"),
      period: "",
      features: [
        t("pricingTiers.everythingInPro", "Everything in Pro"),
        t("pricingTiers.onPremiseOption", "On-premise option"),
        t("pricingTiers.ssoSaml", "SSO & SAML"),
        t("pricingTiers.dedicatedAccountManager", "Dedicated account manager"),
        t("pricingTiers.customSLAs", "Custom SLAs"),
        t("pricingTiers.auditLogs", "Audit logs"),
        t("pricingTiers.trainingSessions", "Training sessions"),
      ],
      cta: t("pricingTiers.contactSales", "Contact Sales"),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`flex flex-col rounded-lg border p-6 ${
            tier.highlighted
              ? "border-primary bg-primary/5 ring-1 ring-primary"
              : "border-border bg-card"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
          <div className="my-4">
            <span className="text-3xl font-bold text-foreground">
              {tier.price}
            </span>
            <span className="text-sm text-muted-foreground">{tier.period}</span>
          </div>
          <ul className="mb-6 flex-1 space-y-2">
            {tier.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${
              tier.highlighted
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-accent"
            }`}
          >
            {tier.cta}
          </button>
        </div>
      ))}
    </div>
  );
}
