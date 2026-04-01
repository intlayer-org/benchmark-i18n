import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const PricingHeader = lazy(
  () => import("../../components/pages/pricing/PricingHeader"),
);
const PricingTiers = lazy(
  () => import("../../components/pages/pricing/PricingTiers"),
);

export const Route = createFileRoute("/$locale/pricing")({
  component: Pricing,
});

function Pricing() {
  return (
    <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <PricingHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <PricingTiers />
      </Suspense>
    </div>
  );
}
