"use client";

import { useI18n } from "../../../locales/client";
import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  const t = useI18n();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("faq-header1.frequentlyAskedQuestions")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t("faq-header1.everythingYouNeedToKnow")}
      </p>
    </>
  );
}
