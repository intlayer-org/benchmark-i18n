import { useTranslations } from "use-intl";

export default function CareersBenefits() {
  const t = useTranslations("careers-benefits");
  const benefits = [
    { label: "Remote-first", value: t("workFromAnywhereInThe") },
    { label: t("competitivePay"), value: t("topOfMarketCompensation") },
    {
      label: t("openSourceTime"),
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
