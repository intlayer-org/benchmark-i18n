import dynamic from "next/dynamic";

const CareersHeader = dynamic(() => import("../../../components/pages/careers/CareersHeader"));
const CareersBenefits = dynamic(() => import("../../../components/pages/careers/CareersBenefits"));
const OpenPositions = dynamic(() => import("../../../components/pages/careers/OpenPositions"));

export default function Careers() {
  return (
    <div className="container py-16">
      <CareersHeader />

      <CareersBenefits />

      <OpenPositions />
    </div>
  );
}
