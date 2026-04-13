import { useLingui } from "@lingui/react";

export default function CareersBenefits() {
  const { i18n } = useLingui();

  const benefits = [
    {
      label: i18n._({ id: "careers-benefits.competitivePay", message: "Competitive pay" }),
      value: i18n._({ id: "careers-benefits.topOfMarketCompensation", message: "Top-of-market compensation" }),
    },
    {
      label: i18n._({ id: "careers-benefits.openSourceTime", message: "Open source time" }),
      value: i18n._({ id: "careers-benefits.workFromAnywhereInThe", message: "Work from anywhere in the world" }),
    },
  ];

  return (
    <div className="mb-12 grid gap-4 md:grid-cols-2">
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
