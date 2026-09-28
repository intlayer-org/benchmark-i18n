import { useLingui } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`pricing-header.${id}`);

  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          {t("simpleTransparentPricing")}
        </h1>
        <p className="text-muted-foreground">
          {t("chooseThePlanThatFits")}
        </p>
      </div>
    </>
  );
}
