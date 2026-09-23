import { T } from "../../../i18n/tolgee";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function AboutHeader() {
  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        <T
          keyName="aboutHeader.aboutThisBenchmark"
        />
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        <T
          keyName="aboutHeader.thisIsAnOpenSource"
        />
      </p>
    </>
  );
}
