"use client";

import { T } from "@/i18n/tolgee";
import MockBanner from "@/components/MockBanner";

export default function FAQHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T
          keyName="faqHeader.frequentlyAskedQuestions"
          defaultValue="Frequently Asked Questions"
        />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <T
          keyName="faqHeader.everythingYouNeedToKnow"
          defaultValue="Everything you need to know about i18n Benchmark."
        />
      </p>
    </>
  );
}
