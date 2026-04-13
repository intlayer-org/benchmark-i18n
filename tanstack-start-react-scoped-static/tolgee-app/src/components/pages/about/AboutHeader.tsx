import { T } from "@tolgee/react";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function AboutHeader() {
  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        <T
          keyName="aboutHeader.aboutThisBenchmark"
          defaultValue="About This Benchmark"
        />
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        <T
          keyName="aboutHeader.thisIsAnOpenSource"
          defaultValue="This is an open-source test application — not a product or a company. Its sole purpose is to provide a realistic, multi-page React app where different i18n libraries can be integrated and measured under identical conditions."
        />
      </p>
    </>
  );
}
