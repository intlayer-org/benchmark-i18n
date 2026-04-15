import dynamic from "next/dynamic";

const PricingHeader = dynamic(() => import("@/components/pages/pricing/PricingHeader"), {
  loading: () => <div className="h-48 animate-pulse bg-muted/20" />,
});
const PricingTiers = dynamic(() => import("@/components/pages/pricing/PricingTiers"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});

export default function Pricing() {
  return (
    <div className="container py-16">
      <PricingHeader />

      <PricingTiers />
    </div>
  );
}
