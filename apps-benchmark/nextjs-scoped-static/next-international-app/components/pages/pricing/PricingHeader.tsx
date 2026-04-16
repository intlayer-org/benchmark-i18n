"use client";

import { useScopedI18n } from "../../../locales/client";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  const scopedT = useScopedI18n("pricing-header");
  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          {scopedT("simpleTransparentPricing")}
        </h1>
        <p className="text-muted-foreground">
          {scopedT("chooseThePlanThatFits")}
        </p>
      </div>
    </>
  );
}
