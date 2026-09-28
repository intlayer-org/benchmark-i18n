import { useTranslate } from "../../../i18n/config";

export default function PricingTiers() {
  const { t } = useTranslate();

  const tiers = [
    {
      name: t("pricingTiers.starter"),
      price: t("pricingTiers.price0"),
      period: t("pricingTiers.forever"),
      features: [
        t("pricingTiers.benchmarkRunPerDay", { runs: 5 }),
        t("pricingTiers.librariesNumber", { libs: 3 }),
        t("pricingTiers.communitySupport"),
        t("pricingTiers.publicResults"),
      ],
    },
    {
      name: t("pricingTiers.pro"),
      price: t("pricingTiers.price29"),
      period: t("pricingTiers.month"),
      features: [
        t("pricingTiers.unlimitedRuns"),
        t("pricingTiers.allLibraries"),
        t("pricingTiers.prioritySupport"),
        t("pricingTiers.privateResults"),
        t("pricingTiers.ciIntegration"),
        t("pricingTiers.historicalData"),
      ],
      highlighted: true,
    },
    {
      name: t("pricingTiers.enterprise"),
      price: t("pricingTiers.customPrice"),
      period: "",
      features: [
        t("pricingTiers.everythingInPro"),
        t("pricingTiers.onPremiseOption"),
        t("pricingTiers.ssoSaml"),
        t("pricingTiers.dedicatedAccountManager"),
        t("pricingTiers.customSlas"),
        t("pricingTiers.auditLogs"),
        t("pricingTiers.trainingSessions"),
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
            {tier.name === t("pricingTiers.enterprise")
              ? t("pricingTiers.contactSales")
              : t("pricingTiers.getStarted")}
          </button>
        </div>
      ))}
    </div>
  );
}
