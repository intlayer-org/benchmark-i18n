import MockBanner from "../../MockBanner";

export default function PricingHeader() {
  return (
    <>
      <MockBanner />
      <div class="mb-12 text-center">
        <h1 class="mb-3 text-3xl font-bold text-foreground">
          Simple, Transparent Pricing
        </h1>
        <p class="text-muted-foreground">
          Choose the plan that fits your team. No hidden fees.
        </p>
      </div>
    </>
  );
}
