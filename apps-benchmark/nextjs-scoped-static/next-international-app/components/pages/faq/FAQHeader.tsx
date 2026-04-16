"use client";

import { useScopedI18n } from "../../../locales/client";
import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  const scopedT = useScopedI18n("faq-header1");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {scopedT("frequentlyAskedQuestions")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {scopedT("everythingYouNeedToKnow")}
      </p>
    </>
  );
}
