import { useIntl } from "react-intl";

export default function PricingTiers() {
  const intl = useIntl();

  const tiers = [
    {
      name: intl.formatMessage({ id: "pricing-tiers.starter" }),
      price: intl.formatMessage({ id: "pricing-tiers.price0" }),
      period: intl.formatMessage({ id: "pricing-tiers.forever" }),
      features: [
        intl.formatMessage(
          { id: "pricing-tiers.benchmarkRunPerDay" },
          { runs: 5 },
        ),
        intl.formatMessage(
          { id: "pricing-tiers.librariesNumber" },
          { libs: 3 },
        ),
        intl.formatMessage({ id: "pricing-tiers.communitySupport" }),
        intl.formatMessage({ id: "pricing-tiers.publicResults" }),
      ],
    },
    {
      name: intl.formatMessage({ id: "pricing-tiers.pro" }),
      price: intl.formatMessage({ id: "pricing-tiers.price29" }),
      period: intl.formatMessage({ id: "pricing-tiers.month" }),
      features: [
        intl.formatMessage({ id: "pricing-tiers.unlimitedRuns" }),
        intl.formatMessage({ id: "pricing-tiers.allLibraries" }),
        intl.formatMessage({ id: "pricing-tiers.prioritySupport" }),
        intl.formatMessage({ id: "pricing-tiers.privateResults" }),
        intl.formatMessage({ id: "pricing-tiers.ciIntegration" }),
        intl.formatMessage({ id: "pricing-tiers.historicalData" }),
      ],
      highlighted: true,
    },
    {
      name: intl.formatMessage({ id: "pricing-tiers.enterprise" }),
      price: intl.formatMessage({ id: "pricing-tiers.customPrice" }),
      period: "",
      features: [
        intl.formatMessage({ id: "pricing-tiers.everythingInPro" }),
        intl.formatMessage({ id: "pricing-tiers.onPremiseOption" }),
        intl.formatMessage({ id: "pricing-tiers.ssoSaml" }),
        intl.formatMessage({ id: "pricing-tiers.dedicatedAccountManager" }),
        intl.formatMessage({ id: "pricing-tiers.customSlas" }),
        intl.formatMessage({ id: "pricing-tiers.auditLogs" }),
        intl.formatMessage({ id: "pricing-tiers.trainingSessions" }),
      ],
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((t) => (
        <div
          key={t.name}
          className={`flex flex-col rounded-lg border p-6 ${
            t.highlighted
              ? "border-primary bg-primary/5 ring-1 ring-primary"
              : "border-border bg-card"
          }`}
        >
          <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
          <div className="my-4">
            <span className="text-3xl font-bold text-foreground">{t.price}</span>
            <span className="text-sm text-muted-foreground">{t.period}</span>
          </div>
          <ul className="mb-6 flex-1 space-y-2">
            {t.features.map((f) => (
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
              t.highlighted
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-accent"
            }`}
          >
            {t.name === intl.formatMessage({ id: "pricing-tiers.enterprise" })
              ? intl.formatMessage({ id: "pricing-tiers.contactSales" })
              : intl.formatMessage({ id: "pricing-tiers.getStarted" })}
          </button>
        </div>
      ))}
    </div>
  );
}
