import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { loadNamespaces } from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";

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
  loader: async ({ params, context }) => {
    const { i18n } = context;
    const resources = await loadNamespaces(
      params.locale ?? defaultLocale,
      ["home"],
      i18n,
    );
    return { resources };
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
