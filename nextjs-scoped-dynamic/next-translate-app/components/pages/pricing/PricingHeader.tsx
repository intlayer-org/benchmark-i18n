"use client";

import useTranslation from "next-translate/useTranslation";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  const { t } = useTranslation("common");
  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          {t("pricing.pricingHeader.pricing")}
        </h1>
        <p className="text-muted-foreground">
          {t("pricing.pricingHeader.transparentPricingForEvery")}
        </p>
      </div>
    </>
  );
}
