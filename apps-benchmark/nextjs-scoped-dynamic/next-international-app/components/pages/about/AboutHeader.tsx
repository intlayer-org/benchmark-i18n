"use client";

import { useScopedI18n } from "../../../locales/client";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function AboutHeader() {
  const scopedT = useScopedI18n("about-header");
  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        {scopedT("aboutThisBenchmark")}
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        {scopedT("thisIsAnOpenSource")}
      </p>
    </>
  );
}
