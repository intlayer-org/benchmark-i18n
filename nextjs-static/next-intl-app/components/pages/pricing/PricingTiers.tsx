"use client";

import { useTranslations } from "next-intl";

export default function PricingTiers() {
  const t = useTranslations();

  const tiers = [
    {
      name: t("pricing.pricing-tiers.starter"),
      price: t("pricing.pricing-tiers.price0"),
      period: t("pricing.pricing-tiers.forever"),
      features: [
        t("pricing.pricing-tiers.benchmarkRunPerDay", { runs: 5 }),
        t("pricing.pricing-tiers.librariesNumber", { libs: 3 }),
        t("pricing.pricing-tiers.communitySupport"),
        t("pricing.pricing-tiers.publicResults"),
      ],
    },
    {
      name: t("pricing.pricing-tiers.pro"),
      price: t("pricing.pricing-tiers.price29"),
      period: t("pricing.pricing-tiers.month"),
      features: [
        t("pricing.pricing-tiers.unlimitedRuns"),
        t("pricing.pricing-tiers.allLibraries"),
        t("pricing.pricing-tiers.prioritySupport"),
        t("pricing.pricing-tiers.privateResults"),
        t("pricing.pricing-tiers.ciIntegration"),
        t("pricing.pricing-tiers.historicalData"),
      ],
      highlighted: true,
    },
    {
      name: t("pricing.pricing-tiers.enterprise"),
      price: t("pricing.pricing-tiers.customPrice"),
      period: "",
      features: [
        t("pricing.pricing-tiers.everythingInPro"),
        t("pricing.pricing-tiers.onPremiseOption"),
        t("pricing.pricing-tiers.ssoSaml"),
        t("pricing.pricing-tiers.dedicatedAccountManager"),
        t("pricing.pricing-tiers.customSlas"),
        t("pricing.pricing-tiers.auditLogs"),
        t("pricing.pricing-tiers.trainingSessions"),
      ],
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
            {tier.name === t("pricing.pricing-tiers.enterprise")
              ? t("pricing.pricing-tiers.contactSales")
              : t("pricing.pricing-tiers.getStarted")}
          </button>
        </div>
      ))}
    </div>
  );
}
