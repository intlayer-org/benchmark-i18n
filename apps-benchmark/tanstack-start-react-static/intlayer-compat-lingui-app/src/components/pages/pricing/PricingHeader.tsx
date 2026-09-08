import { Trans } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          <Trans
            id="pricing-header.simpleTransparentPricing"
            message="Simple, Transparent Pricing"
          />
        </h1>
        <p className="text-muted-foreground">
          <Trans
            id="pricing-header.chooseThePlanThatFits"
            message="Choose the plan that fits your team. No hidden fees."
          />
        </p>
      </div>
    </>
  );
}
