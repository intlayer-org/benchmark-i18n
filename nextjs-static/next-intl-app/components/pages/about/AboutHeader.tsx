"use client";

import { useTranslations } from "next-intl";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function AboutHeader() {
  const t = useTranslations();
  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        {t("about-header.aboutThisBenchmark")}
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        {t("about-header.thisIsAnOpenSource")}
      </p>
    </>
  );
}
