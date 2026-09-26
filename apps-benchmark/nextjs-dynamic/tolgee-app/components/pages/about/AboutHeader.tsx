"use client";

import { useTranslate } from "@/i18n/tolgee";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function AboutHeader() {
  const { t } = useTranslate();
  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        {t("aboutHeader.aboutThisBenchmark")}
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        {t("aboutHeader.thisIsAnOpenSource")}
      </p>
    </>
  );
}
