import { useIntlayer } from "next-intlayer";
export default function CareersBenefits() {
  const content = useIntlayer("careers-benefits");

  const benefits = [
    {
      label: content.remoteFirst.value,
      value: content.workFromAnywhereInThe.value,
    },
    {
      label: content.competitivePay.value,
      value: content.topOfMarketCompensation.value,
    },
    {
      label: content.openSourceTime.value,
      value: content.x20TimeForOssContributions.value,
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
