"use client";

import useTranslation from "next-translate/useTranslation";

export default function PricingTiers() {
  const { t } = useTranslation("common");

  const tiers = [
    {
      name: t("pricing.pricingTiers.starterTier"),
      price: t("pricing.pricingTiers.starterPrice"),
      period: t("pricing.pricingTiers.forever"),
      features: [
        t("pricing.pricingTiers.runsPerDay"),
        t("pricing.pricingTiers.libraries3"),
        t("pricing.pricingTiers.communitySupport"),
        t("pricing.pricingTiers.publicResults"),
      ],
      buttonText: t("pricing.pricingTiers.getStarted"),
    },
    {
      name: t("pricing.pricingTiers.proTier"),
      price: t("pricing.pricingTiers.proPrice"),
      period: t("pricing.pricingTiers.perMonth"),
      features: [
        t("pricing.pricingTiers.unlimitedRuns"),
        t("pricing.pricingTiers.allLibraries"),
        t("pricing.pricingTiers.prioritySupport"),
        t("pricing.pricingTiers.privateResults"),
        t("pricing.pricingTiers.ciIntegration"),
        t("pricing.pricingTiers.historicalData"),
      ],
      buttonText: t("pricing.pricingTiers.getStarted"),
      highlighted: true,
    },
    {
      name: t("pricing.pricingTiers.enterpriseTier"),
      price: t("pricing.pricingTiers.custom"),
      period: "",
      features: [
        t("pricing.pricingTiers.everythingInPro"),
        t("pricing.pricingTiers.onPremiseOption"),
        t("pricing.pricingTiers.ssoSaml"),
        t("pricing.pricingTiers.dedicatedAccountManager"),
        t("pricing.pricingTiers.customSLAs"),
        t("pricing.pricingTiers.auditLogs"),
        t("pricing.pricingTiers.trainingSessions"),
      ],
      buttonText: t("pricing.pricingTiers.contactSales"),
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tItem) => (
        <div
          key={tItem.name}
          className={`flex flex-col rounded-lg border p-6 ${
            tItem.highlighted
              ? "border-primary bg-primary/5 ring-1 ring-primary"
              : "border-border bg-card"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground">
            {tItem.name}
          </h3>
          <div className="my-4">
            <span className="text-3xl font-bold text-foreground">
              {tItem.price}
            </span>
            <span className="text-sm text-muted-foreground">
              {tItem.period}
            </span>
          </div>
          <ul className="mb-6 flex-1 space-y-2">
            {tItem.features.map((f) => (
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
              tItem.highlighted
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-accent"
            }`}
          >
            {tItem.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
}
