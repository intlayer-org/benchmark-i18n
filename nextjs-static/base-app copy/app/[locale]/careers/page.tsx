import dynamic from "next/dynamic";

const CareersHeader = dynamic(() => import("../../../components/pages/careers/CareersHeader"), {
  loading: () => <div className="h-48 animate-pulse bg-muted/20" />,
});
const CareersBenefits = dynamic(() => import("../../../components/pages/careers/CareersBenefits"), {
  loading: () => <div className="h-32 animate-pulse bg-muted/20" />,
});
const OpenPositions = dynamic(() => import("../../../components/pages/careers/OpenPositions"), {
  loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
});

export default function Careers() {
  return (
    <div className="container py-16">
      <CareersHeader />

      <CareersBenefits />

      <OpenPositions />
    </div>
  );
}
