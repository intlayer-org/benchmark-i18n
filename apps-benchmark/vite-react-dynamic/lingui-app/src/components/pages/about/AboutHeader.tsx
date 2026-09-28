import { useLingui } from "@lingui/react";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function AboutHeader() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`about-header.${id}`);

  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        {t("aboutThisBenchmark")}
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        {t("thisIsAnOpenSource")}
      </p>
    </>
  );
}
