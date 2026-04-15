"use client";

import * as m from "../../../paraglide/messages";

export default function PricingTiers() {
  const tiers = [
    {
      name: m["pricing-tiers.starter"](),
      price: m["pricing-tiers.price0"](),
      period: m["pricing-tiers.forever"](),
      features: [
        m["pricing-tiers.benchmarkRunPerDay"]({ runs: "5" }),
        m["pricing-tiers.librariesNumber"]({ libs: "3" }),
        m["pricing-tiers.communitySupport"](),
        m["pricing-tiers.publicResults"](),
      ],
    },
    {
      name: m["pricing-tiers.pro"](),
      price: m["pricing-tiers.price29"](),
      period: m["pricing-tiers.month"](),
      features: [
        m["pricing-tiers.unlimitedRuns"](),
        m["pricing-tiers.allLibraries"](),
        m["pricing-tiers.prioritySupport"](),
        m["pricing-tiers.privateResults"](),
        m["pricing-tiers.ciIntegration"](),
        m["pricing-tiers.historicalData"](),
      ],
      highlighted: true,
    },
    {
      name: m["pricing-tiers.enterprise"](),
      price: m["pricing-tiers.customPrice"](),
      period: "",
      features: [
        m["pricing-tiers.everythingInPro"](),
        m["pricing-tiers.onPremiseOption"](),
        m["pricing-tiers.ssoSaml"](),
        m["pricing-tiers.dedicatedAccountManager"](),
        m["pricing-tiers.customSlas"](),
        m["pricing-tiers.auditLogs"](),
        m["pricing-tiers.trainingSessions"](),
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
            {t.name === m["pricing-tiers.enterprise"]()
              ? m["pricing-tiers.contactSales"]()
              : m["pricing-tiers.getStarted"]()}
          </button>
        </div>
      ))}
    </div>
  );
}
