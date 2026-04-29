import { useIntlayer } from 'solid-intlayer';
import MockBanner from '../../MockBanner';

export default function PricingHeader() {
  const content = useIntlayer('pricing-header');

  return (
    <>
      <MockBanner />
      <div class="mb-12 text-center">
        <h1 class="mb-3 text-3xl font-bold text-foreground">
          {content().simpleTransparentPricing}
        </h1>
        <p class="text-muted-foreground">{content().chooseThePlanThatFits}</p>
      </div>
    </>
  );
}
