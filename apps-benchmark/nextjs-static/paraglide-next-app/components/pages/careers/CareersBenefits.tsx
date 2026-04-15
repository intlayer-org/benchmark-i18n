"use client";

import * as m from "../../../paraglide/messages";

export default function CareersBenefits() {
  const benefits = [
    {
      label: m["open-positions.remote"](),
      value: m["careers-benefits.workFromAnywhereInThe"](),
    },
    {
      label: m["careers-benefits.competitivePay"](),
      value: m["careers-benefits.topOfMarketCompensation"](),
    },
    {
      label: m["careers-benefits.openSourceTime"](),
      value: "20% time for OSS contributions",
    },
  ];

  return (
    <div className="mb-12 grid gap-4 md:grid-cols-3">
      {benefits.map((b) => (
        <div
          key={b.label}
          className="rounded-lg border border-border bg-card p-4 text-center"
        >
          <p className="text-sm font-semibold text-foreground">{b.label}</p>
          <p className="text-xs text-muted-foreground">{b.value}</p>
        </div>
      ))}
    </div>
  );
}
