import { useIntl } from "react-intl";
import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  const intl = useIntl();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {intl.formatMessage({ id: "faq-header1.frequentlyAskedQuestions" })}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {intl.formatMessage({ id: "faq-header1.everythingYouNeedToKnow" })}
      </p>
    </>
  );
}
