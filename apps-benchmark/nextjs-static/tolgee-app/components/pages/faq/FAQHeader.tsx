"use client";

import { useTranslate } from "@/i18n/tolgee";
import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  const { t } = useTranslate();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("faqHeader.frequentlyAskedQuestions")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t("faqHeader.everythingYouNeedToKnow")}
      </p>
    </>
  );
}
