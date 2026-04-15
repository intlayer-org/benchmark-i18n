"use client";

import useTranslation from "next-translate/useTranslation";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function AboutHeader() {
  const { t } = useTranslation("common");
  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        {t("about.aboutHeader.methodology")}
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        {t("about.aboutHeader.weDesignedThisBenchmarkTo")}
      </p>
    </>
  );
}
