import { useIntl } from "react-intl";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function AboutHeader() {
  const intl = useIntl();
  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        {intl.formatMessage({ id: "about-header.aboutThisBenchmark" })}
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        {intl.formatMessage({ id: "about-header.thisIsAnOpenSource" })}
      </p>
    </>
  );
}
