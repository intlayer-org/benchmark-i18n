"use client";

import * as m from "../../../paraglide/messages";
import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {m["faq-header1.frequentlyAskedQuestions"]()}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {m["faq-header1.everythingYouNeedToKnow"]()}
      </p>
    </>
  );
}
