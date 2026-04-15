import { T } from "../../../i18n/tolgee";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          <T keyName="pricingHeader.pricing" defaultValue="Pricing" />
        </h1>
        <p className="text-muted-foreground">
          <T
            keyName="pricingHeader.transparentPricingForEvery"
            defaultValue="Transparent pricing for every stage of your i18n journey."
          />
        </p>
      </div>
    </>
  );
}
