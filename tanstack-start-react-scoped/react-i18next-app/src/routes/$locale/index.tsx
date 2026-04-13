import { loadNamespaces } from "#/i18n/i18n";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const Hero = lazy(() => import("../../components/pages/home/Hero"));
const WhyItMatters = lazy(
  () => import("../../components/pages/home/WhyItMatters"),
);
const UnderstandingImpact = lazy(
  () => import("../../components/pages/home/UnderstandingImpact"),
);
const ResultsTable = lazy(
  () => import("../../components/pages/home/ResultsTable"),
);

export const Route = createFileRoute("/$locale/")({
  beforeLoad: ({ params }) => {
    loadNamespaces(params.locale || "en", ["home"]);
  },
  component: Home,
});

function Home() {
  return (
    <div className="container py-16">
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-muted/20" />}>
        <WhyItMatters />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <UnderstandingImpact />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-muted/20" />}>
        <ResultsTable />
      </Suspense>
    </div>
  );
}
