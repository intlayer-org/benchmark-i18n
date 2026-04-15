import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { GTProvider } from "gt-tanstack-start";
import { Route as LocaleRoute } from "./route";
import loadTranslations from "../../../loadTranslations";

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
  loader: async ({ params }) => {
    const locale = params.locale || "en";
    const translations = await loadTranslations(locale, ["home"]);
    return { translations };
  },
  component: Home,
});

function Home() {
  const { locale } = LocaleRoute.useLoaderData();
  const { translations } = Route.useLoaderData();

  return (
    <GTProvider locale={locale} translations={translations}>
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
    </GTProvider>
  );
}
