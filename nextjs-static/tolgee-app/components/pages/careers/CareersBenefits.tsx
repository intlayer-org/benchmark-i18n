import { useTranslate } from "../../../i18n/tolgee";

export default function CareersBenefits() {
  const { t } = useTranslate();

  const benefits = [
    {
      label: t("careersBenefits.remoteFirst", "Remote-first"),
      value: t("careersBenefits.workFromAnywhere", "Work from anywhere in the world"),
    },
    {
      label: t("careersBenefits.competitivePay", "Competitive pay"),
      value: t("careersBenefits.topOfMarketCompensation", "Top-of-market compensation"),
    },
    {
      label: t("careersBenefits.openSourceTime", "Open source time"),
      value: t("careersBenefits.percentTimeForOss", "20% time for OSS contributions"),
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
