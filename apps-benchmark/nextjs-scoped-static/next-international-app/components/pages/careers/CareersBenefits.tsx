"use client";

import { useScopedI18n } from "../../../locales/client";

export default function CareersBenefits() {
  const scopedT = useScopedI18n("careers-benefits");
  const scopedPositionsT = useScopedI18n("open-positions");
  const benefits = [
    {
      label: scopedT("workFromAnywhereInThe"),
      value: scopedPositionsT("remote"),
    },
    {
      label: scopedT("competitivePay"),
      value: scopedT("topOfMarketCompensation"),
    },
    {
      label: scopedT("openSourceTime"),
      value: scopedT("twentyPercentTime"),
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
