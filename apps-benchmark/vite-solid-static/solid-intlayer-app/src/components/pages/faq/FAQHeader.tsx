import { useIntlayer } from 'solid-intlayer';
import MockBanner from '../../MockBanner';

export default function FAQHeader() {
  const content = useIntlayer('faq-header');

  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {content().frequentlyAskedQuestions}
      </h1>
      <p class="mb-10 text-muted-foreground">
        {content().everythingYouNeedToKnow}
      </p>
    </>
  );
}
