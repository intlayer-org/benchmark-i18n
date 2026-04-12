import { useIntlayer } from "react-intlayer";

export default function PricingTiers() {
  const content = useIntlayer("pricing-tiers");

  const tiers = [
    {
      name: content.starter,
      price: content.price0,
      period: content.forever,
      features: [
        content.benchmarkRunPerDay({ runs: "5" }),
        content.librariesNumber({ libs: "3" }),
        content.communitySupport,
        content.publicResults,
      ],
    },
    {
      name: content.pro,
      price: content.price29,
      period: content.month,
      features: [
        content.unlimitedRuns,
        content.allLibraries,
        content.prioritySupport,
        content.privateResults,
        content.ciIntegration,
        content.historicalData,
      ],
      highlighted: true,
    },
    {
      name: content.enterprise,
      price: content.customPrice,
      period: "",
      features: [
        content.everythingInPro,
        content.onPremiseOption,
        content.ssoSaml,
        content.dedicatedAccountManager,
        content.customSlas,
        content.auditLogs,
        content.trainingSessions,
      ],
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((t) => (
        <div
          key={t.name.value}
          className={`flex flex-col rounded-lg border p-6 ${
            t.highlighted
              ? "border-primary bg-primary/5 ring-1 ring-primary"
              : "border-border bg-card"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
          <div className="my-4">
            <span className="text-3xl font-bold text-foreground">
              {t.price}
            </span>
            <span className="text-sm text-muted-foreground">{t.period}</span>
          </div>
          <ul className="mb-6 flex-1 space-y-2">
            {t.features.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">✓</span> {f}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-90 ${
              t.highlighted
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-accent"
            }`}
          >
            {t.name === content.enterprise
              ? content.contactSales
              : content.getStarted}
          </button>
        </div>
      ))}
    </div>
  );
}
