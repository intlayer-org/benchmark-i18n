import { useMemo } from "react";
import { I18nProvider } from "@lingui/react";
import { getMessages, initLingui } from "../../i18n/lingui";
import { Route as LocaleRoute } from "./route";
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
  loader: async ({ params }) => {
    const messages = await getMessages(params.locale || "en", ["home"]);
    return { messages };
  },
  component: Home,
});

function Home() {
  
  const rootData = LocaleRoute.useLoaderData();
  const pageData = Route.useLoaderData();
  const mergedMessages = { ...rootData.messages, ...pageData.messages };
  const i18n = useMemo(() => initLingui(rootData.locale, mergedMessages), [rootData.locale, mergedMessages]);

  return (
    <I18nProvider i18n={i18n}>
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
    </I18nProvider>
  );
}
