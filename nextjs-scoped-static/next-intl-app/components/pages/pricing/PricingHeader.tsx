"use client";

import { useTranslations } from "next-intl";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  const t = useTranslations();
  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          {t("pricing-header.simpleTransparentPricing")}
        </h1>
        <p className="text-muted-foreground">{t("pricing-header.chooseThePlanThatFits")}</p>
      </div>
    </>
  );
}
