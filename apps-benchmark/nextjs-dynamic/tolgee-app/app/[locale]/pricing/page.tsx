import dynamic from "next/dynamic";

const PricingHeader = dynamic(() => import("../../../components/pages/pricing/PricingHeader"));
const PricingTiers = dynamic(() => import("../../../components/pages/pricing/PricingTiers"));

export default function Pricing() {
  return (
    <div className="container py-16">
      <PricingHeader />

      <PricingTiers />
    </div>
  );
}
