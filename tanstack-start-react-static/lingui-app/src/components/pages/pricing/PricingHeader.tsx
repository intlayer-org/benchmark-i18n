import { useLingui } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  const { i18n } = useLingui();

  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          {i18n._("pricing-header.simpleTransparentPricing")}
        </h1>
        <p className="text-muted-foreground">
          {i18n._("pricing-header.chooseThePlanThatFits")}
        </p>
      </div>
    </>
  );
}
