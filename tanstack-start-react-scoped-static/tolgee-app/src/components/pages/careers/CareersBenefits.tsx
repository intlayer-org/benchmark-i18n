import { useTranslate } from "@tolgee/react";

export default function CareersBenefits() {
  const { t } = useTranslate("careers");

  const benefits = [
    {
      label: t("careersBenefits.competitivePay", "Competitive pay"),
      value: t("careersBenefits.topOfMarket", "Top-of-market compensation"),
    },
    {
      label: t("careersBenefits.openSourceTime", "Open source time"),
      value: t("careersBenefits.twentyPercentTime", "20% time for OSS"),
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
