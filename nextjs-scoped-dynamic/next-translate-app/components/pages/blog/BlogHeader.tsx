"use client";

import useTranslation from "next-translate/useTranslation";
import MockBanner from "../../MockBanner";

export default function BlogHeader() {
  const { t } = useTranslation("common");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("blog.blogHeader.blog")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t("blog.blogHeader.insightsDeepDivesAnd")}
      </p>
    </>
  );
}
