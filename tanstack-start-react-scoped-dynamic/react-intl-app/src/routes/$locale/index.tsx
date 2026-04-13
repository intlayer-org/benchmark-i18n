import { IntlProvider } from "react-intl";
import { getMessages } from "../../i18n/getMessages";
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

  return (
    <IntlProvider messages={mergedMessages} locale={rootData.locale}>
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
    </IntlProvider>
  );
}
