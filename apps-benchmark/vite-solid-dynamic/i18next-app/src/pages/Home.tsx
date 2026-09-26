import { lazy, Suspense } from "solid-js";

const Hero = lazy(() => import("../components/pages/home/Hero"));
const WhyItMatters = lazy(() => import("../components/pages/home/WhyItMatters"));
const UnderstandingImpact = lazy(
  () => import("../components/pages/home/UnderstandingImpact"),
);
const ResultsTable = lazy(() => import("../components/pages/home/ResultsTable"));

export default function Home() {
  return (
    <div class="container py-16">
      <Suspense fallback={<div class="h-96 animate-pulse bg-muted/20" />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div class="h-64 animate-pulse bg-muted/20" />}>
        <WhyItMatters />
      </Suspense>

      <Suspense fallback={<div class="h-96 animate-pulse bg-muted/20" />}>
        <UnderstandingImpact />
      </Suspense>

      <Suspense fallback={<div class="h-64 animate-pulse bg-muted/20" />}>
        <ResultsTable />
      </Suspense>
    </div>
  );
}
