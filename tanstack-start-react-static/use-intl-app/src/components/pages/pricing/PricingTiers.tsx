import { useTranslations } from "use-intl";

export default function PricingTiers() {
  const t = useTranslations("pricing-tiers");

  const tiers = [
    {
      name: t("starter"),
      price: t("price0"),
      period: t("forever"),
      features: [
        t("benchmarkRunPerDay", { runs: 5 }),
        t("librariesNumber", { libs: 3 }),
        t("communitySupport"),
        t("publicResults"),
      ],
    },
    {
      name: t("pro"),
      price: t("price29"),
      period: t("month"),
      features: [
        t("unlimitedRuns"),
        t("allLibraries"),
        t("prioritySupport"),
        t("privateResults"),
        t("ciIntegration"),
        t("historicalData"),
      ],
      highlighted: true,
    },
    {
      name: t("enterprise"),
      price: t("customPrice"),
      period: "",
      features: [
        t("everythingInPro"),
        t("onPremiseOption"),
        t("ssoSaml"),
        t("dedicatedAccountManager"),
        t("customSlas"),
        t("auditLogs"),
        t("trainingSessions"),
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
            {tier.name === t("enterprise")
              ? t("contactSales")
              : t("getStarted")}
          </button>
        </div>
      ))}
    </div>
  );
}
