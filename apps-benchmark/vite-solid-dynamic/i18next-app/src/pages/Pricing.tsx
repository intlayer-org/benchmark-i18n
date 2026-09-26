import { lazy, Suspense } from "solid-js";

const PricingHeader = lazy(
  () => import("../components/pages/pricing/PricingHeader"),
);
const PricingTiers = lazy(
  () => import("../components/pages/pricing/PricingTiers"),
);

export default function Pricing() {
  return (
    <div class="container py-16">
      <Suspense fallback={<div class="h-48 animate-pulse bg-muted/20" />}>
        <PricingHeader />
      </Suspense>

      <Suspense fallback={<div class="h-96 animate-pulse bg-muted/20" />}>
        <PricingTiers />
      </Suspense>
    </div>
  );
}
