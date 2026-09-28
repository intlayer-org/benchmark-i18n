import { lazy, Suspense } from "solid-js";

const CareersHeader = lazy(
  () => import("../components/pages/careers/CareersHeader"),
);
const CareersBenefits = lazy(
  () => import("../components/pages/careers/CareersBenefits"),
);
const OpenPositions = lazy(
  () => import("../components/pages/careers/OpenPositions"),
);

export default function Careers() {
  return (
    <div class="container py-16">
      <Suspense fallback={<div class="h-48 animate-pulse bg-muted/20" />}>
        <CareersHeader />
      </Suspense>

      <Suspense fallback={<div class="h-32 animate-pulse bg-muted/20" />}>
        <CareersBenefits />
      </Suspense>

      <Suspense
        fallback={<div class="h-[600px] animate-pulse bg-muted/20" />}
      >
        <OpenPositions />
      </Suspense>
    </div>
  );
}
