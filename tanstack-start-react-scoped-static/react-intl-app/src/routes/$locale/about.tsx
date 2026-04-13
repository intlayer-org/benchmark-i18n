import { IntlProvider } from "react-intl";
import { getMessages } from "../../i18n/getMessages";
import { Route as LocaleRoute } from "./route";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const AboutHeader = lazy(
  () => import("../../components/pages/about/AboutHeader"),
);
const AboutGrid = lazy(() => import("../../components/pages/about/AboutGrid"));
const WhatWeMeasure = lazy(
  () => import("../../components/pages/about/WhatWeMeasure"),
);

export const Route = createFileRoute("/$locale/about")({
  loader: async ({ params }) => {
    const messages = await getMessages(params.locale || "en", ["about"]);
    return { messages };
  },
  component: About,
});

function About() {
  
  const rootData = LocaleRoute.useLoaderData();
  const pageData = Route.useLoaderData();
  const mergedMessages = { ...rootData.messages, ...pageData.messages };

  return (
    <IntlProvider messages={mergedMessages} locale={rootData.locale}>
      <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <AboutHeader />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-muted/20" />}>
        <AboutGrid />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <WhatWeMeasure />
      </Suspense>
    </div>
    </IntlProvider>
  );
}
