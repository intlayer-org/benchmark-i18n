import { T } from "gt-react";
import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  return (
    <>
      <MockBanner />
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-3xl font-bold text-foreground">
          <T>Simple, Transparent Pricing</T>
        </h1>
        <p className="text-muted-foreground">
          <T>Choose the plan that fits your team. No hidden fees.</T>
        </p>
      </div>
    </>
  );
}
