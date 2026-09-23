import { T } from "../../../i18n/config";
import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T
          keyName="faqHeader.frequentlyAskedQuestions"
        />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <T
          keyName="faqHeader.everythingYouNeedToKnow"
        />
      </p>
    </>
  );
}
