"use client";

import { useScopedI18n } from "../../../locales/client";

export default function PricingTiers() {
  const scopedT = useScopedI18n("pricing-tiers");

  const tiers = [
    {
      name: scopedT("starter"),
      price: scopedT("price0"),
      period: scopedT("forever"),
      features: [
        scopedT("benchmarkRunPerDay", { runs: 5 }),
        scopedT("librariesNumber", { libs: 3 }),
        scopedT("communitySupport"),
        scopedT("publicResults"),
      ],
    },
    {
      name: scopedT("pro"),
      price: scopedT("price29"),
      period: scopedT("month"),
      features: [
        scopedT("unlimitedRuns"),
        scopedT("allLibraries"),
        scopedT("prioritySupport"),
        scopedT("privateResults"),
        scopedT("ciIntegration"),
        scopedT("historicalData"),
      ],
      highlighted: true,
    },
    {
      name: scopedT("enterprise"),
      price: scopedT("customPrice"),
      period: "",
      features: [
        scopedT("everythingInPro"),
        scopedT("onPremiseOption"),
        scopedT("ssoSaml"),
        scopedT("dedicatedAccountManager"),
        scopedT("customSlas"),
        scopedT("auditLogs"),
        scopedT("trainingSessions"),
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
            {tier.name === scopedT("enterprise")
              ? scopedT("contactSales")
              : scopedT("getStarted")}
          </button>
        </div>
      ))}
    </div>
  );
}
