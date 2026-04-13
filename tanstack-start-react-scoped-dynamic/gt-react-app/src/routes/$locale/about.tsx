import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { GTProvider } from "gt-tanstack-start";
import { Route as LocaleRoute } from "./route";
import loadTranslations from "../../../loadTranslations";

const AboutHeader = lazy(
  () => import("../../components/pages/about/AboutHeader"),
);
const AboutGrid = lazy(() => import("../../components/pages/about/AboutGrid"));
const WhatWeMeasure = lazy(
  () => import("../../components/pages/about/WhatWeMeasure"),
);

export const Route = createFileRoute("/$locale/about")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";
    const translations = await loadTranslations(locale, ["about"]);
    return { translations };
  },
  component: About,
});

function About() {
  const { locale } = LocaleRoute.useLoaderData();
  const { translations } = Route.useLoaderData();

  return (
    <GTProvider locale={locale} translations={translations}>
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
    </GTProvider>
  );
}
