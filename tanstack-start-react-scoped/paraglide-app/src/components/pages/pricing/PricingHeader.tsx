import * as m from "../../../paraglide/messages";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          {m["pricing-header.simpleTransparentPricing"]()}
        </h1>
        <p className="text-muted-foreground">
          {m["pricing-header.chooseThePlanThatFits"]()}
        </p>
      </div>
    </>
  );
}
