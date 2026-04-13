import { useLingui } from "@lingui/react";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function AboutHeader() {
  const { i18n } = useLingui();

  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        {i18n._("about-header.aboutThisBenchmark")}
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        {i18n._("about-header.thisIsAnOpenSource")}
      </p>
    </>
  );
}
