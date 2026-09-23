import { useTranslate } from "../../../i18n/config";

export default function CareersBenefits() {
  const { t } = useTranslate();

  const benefits = [
    {
      label: t("careersBenefits.remoteFirst"),
      value: t("careersBenefits.workFromAnywhere"),
    },
    {
      label: t("careersBenefits.competitivePay"),
      value: t("careersBenefits.topOfMarketCompensation"),
    },
    {
      label: t("careersBenefits.openSourceTime"),
      value: t("careersBenefits.percentTimeForOss"),
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
