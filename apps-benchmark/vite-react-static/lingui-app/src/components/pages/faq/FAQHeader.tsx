import { Trans } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <Trans id="faq-header.title" message="Frequently Asked Questions" />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <Trans
          id="faq-header.subtitle"
          message="Everything you need to know about i18n Benchmark."
        />
      </p>
    </>
  );
}
