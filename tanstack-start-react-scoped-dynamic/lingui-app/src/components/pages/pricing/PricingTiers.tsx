import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";

export default function PricingTiers() {
  const { i18n } = useLingui();

  const tiers = [
    {
      name: i18n._(t({ id: "pricing-tiers.starter", message: "Starter" })),
      price: i18n._(t({ id: "pricing-tiers.price0", message: "$0" })),
      period: i18n._(t({ id: "pricing-tiers.forever", message: "forever" })),
      features: [
        i18n._(
          t({
            id: "pricing-tiers.benchmarkRunPerDay",
            message: "5 benchmark runs/day",
            values: { runs: "5" },
          })
        ),
        i18n._(
          t({
            id: "pricing-tiers.librariesNumber",
            message: "3 libraries",
            values: { libs: "3" },
          })
        ),
        i18n._(
          t({ id: "pricing-tiers.communitySupport", message: "Community support" })
        ),
        i18n._(
          t({ id: "pricing-tiers.publicResults", message: "Public results" })
        ),
      ],
      cta: i18n._(t({ id: "pricing-tiers.getStarted", message: "Get Started" })),
    },
    {
      name: i18n._(t({ id: "pricing-tiers.pro", message: "Pro" })),
      price: i18n._(t({ id: "pricing-tiers.price29", message: "$29" })),
      period: i18n._(t({ id: "pricing-tiers.month", message: "/month" })),
      features: [
        i18n._(t({ id: "pricing-tiers.unlimitedRuns", message: "Unlimited runs" })),
        i18n._(t({ id: "pricing-tiers.allLibraries", message: "All libraries" })),
        i18n._(
          t({ id: "pricing-tiers.prioritySupport", message: "Priority support" })
        ),
        i18n._(
          t({ id: "pricing-tiers.privateResults", message: "Private results" })
        ),
        i18n._(t({ id: "pricing-tiers.ciIntegration", message: "CI integration" })),
        i18n._(t({ id: "pricing-tiers.historicalData", message: "Historical data" })),
      ],
      highlighted: true,
      cta: i18n._(t({ id: "pricing-tiers.getStarted", message: "Get Started" })),
    },
    {
      name: i18n._(t({ id: "pricing-tiers.enterprise", message: "Enterprise" })),
      price: i18n._(t({ id: "pricing-tiers.customPrice", message: "Custom" })),
      period: "",
      features: [
        i18n._(
          t({ id: "pricing-tiers.everythingInPro", message: "Everything in Pro" })
        ),
        i18n._(
          t({
            id: "pricing-tiers.onPremiseOption",
            message: "On-premise option",
          })
        ),
        i18n._(t({ id: "pricing-tiers.ssoSaml", message: "SSO & SAML" })),
        i18n._(
          t({
            id: "pricing-tiers.dedicatedAccountManager",
            message: "Dedicated account manager",
          })
        ),
        i18n._(t({ id: "pricing-tiers.customSlas", message: "Custom SLAs" })),
        i18n._(t({ id: "pricing-tiers.auditLogs", message: "Audit logs" })),
        i18n._(
          t({ id: "pricing-tiers.trainingSessions", message: "Training sessions" })
        ),
      ],
      cta: i18n._(t({ id: "pricing-tiers.contactSales", message: "Contact Sales" })),
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
            {tier.features.map((f, i) => (
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
