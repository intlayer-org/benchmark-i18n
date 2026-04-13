import { useIntl } from "react-intl";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  const intl = useIntl();
  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          {intl.formatMessage({ id: "pricing-header.simpleTransparentPricing" })}
        </h1>
        <p className="text-muted-foreground">
          {intl.formatMessage({ id: "pricing-header.chooseThePlanThatFits" })}
        </p>
      </div>
    </>
  );
}
