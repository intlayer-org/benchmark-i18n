

import { useIntlayer } from "next-intlayer/server";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  const content = useIntlayer("pricing-header");

  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          {content.simpleTransparentPricing}
        </h1>
        <p className="text-muted-foreground">{content.chooseThePlanThatFits}</p>
      </div>
    </>
  );
}
