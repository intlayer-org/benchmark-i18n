import { useTranslation } from "react-i18next";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  const { t } = useTranslation();
  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          {t("pricingHeader.pricing")}
        </h1>
        <p className="text-muted-foreground">
          {t("pricingHeader.transparentPricingForEvery")}
        </p>
      </div>
    </>
  );
}
