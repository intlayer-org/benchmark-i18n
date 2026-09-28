import { useIntlayer } from 'react-intlayer';
import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  const content = useIntlayer('faq-header1');

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">{content.frequentlyAskedQuestions}</h1>
      <p className="mb-10 text-muted-foreground">{content.everythingYouNeedToKnow}</p>
    </>
  );
}
