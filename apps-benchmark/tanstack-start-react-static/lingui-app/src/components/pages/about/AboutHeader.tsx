import { Trans } from "@lingui/react";
import { useLingui } from "@lingui/react";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function AboutHeader() {
  const { i18n } = useLingui();

  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        <Trans
          id="about-header.aboutThisBenchmark"
          message="About This Benchmark"
        />
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        <Trans
          id="about-header.thisIsAnOpenSource"
          message="This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
        />
      </p>
    </>
  );
}
