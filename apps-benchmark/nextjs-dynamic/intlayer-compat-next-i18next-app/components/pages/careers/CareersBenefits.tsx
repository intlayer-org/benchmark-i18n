"use client";

import { useTranslation } from "react-i18next";

export default function CareersBenefits() {
  const { t } = useTranslation();
  const benefits = [
    { label: t("careers.careersBenefits.remoteFirst"), value: t("careers.careersBenefits.workFromAnywhereInThe") },
    { label: t("careers.careersBenefits.competitivePay"), value: t("careers.careersBenefits.topOfMarketCompensation") },
    { label: t("careers.careersBenefits.openSourceTime"), value: t("careers.careersBenefits.x20TimeForOssContributions") },
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
