import { T } from "../../../i18n/tolgee";
import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T
          keyName="faq-header1.frequentlyAskedQuestions"
          defaultValue="Frequently Asked Questions"
        />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <T
          keyName="faq-header1.everythingYouNeedToKnow"
          defaultValue="Everything you need to know about i18n Benchmark."
        />
      </p>
    </>
  );
}
