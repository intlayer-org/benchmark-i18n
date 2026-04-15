import { useMemo } from "react";
import { I18nProvider } from "@lingui/react";
import { getMessages, initLingui } from "../../i18n/lingui";
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
  const i18n = useMemo(() => initLingui(rootData.locale, mergedMessages), [rootData.locale, mergedMessages]);

  return (
    <I18nProvider i18n={i18n}>
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
    </I18nProvider>
  );
}
