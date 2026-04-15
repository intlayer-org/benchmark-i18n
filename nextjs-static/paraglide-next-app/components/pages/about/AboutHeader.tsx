"use client";

import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";
import * as m from "../../../paraglide/messages";

export default function AboutHeader() {
  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        {m["about-header.aboutThisBenchmark"]()}
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        {m["about-header.thisIsAnOpenSource"]()}
      </p>
    </>
  );
}
