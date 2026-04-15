"use client";

import { useTranslation } from "react-i18next";
import MockBanner from "../../MockBanner";

export default function BlogHeader() {
  const { t } = useTranslation("blog");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("blogHeader.blog")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t("blogHeader.insightsDeepDivesAnd")}
      </p>
    </>
  );
}
