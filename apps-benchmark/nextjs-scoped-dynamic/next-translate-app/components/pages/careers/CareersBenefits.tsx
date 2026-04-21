"use client";

import useTranslation from "next-translate/useTranslation";

export default function CareersBenefits() {
  const { t } = useTranslation("careers");
  const benefits = [
    {
      label: t("careersBenefits.competitivePay"),
      value: t("careersBenefits.topOfMarket"),
    },
    {
      label: t("careersBenefits.openSourceTime"),
      value: t("careersBenefits.twentyPercentTime"),
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
