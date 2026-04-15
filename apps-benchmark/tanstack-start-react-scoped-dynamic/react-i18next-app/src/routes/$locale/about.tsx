import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { loadNamespaces } from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";

const AboutHeader = lazy(
  () => import("../../components/pages/about/AboutHeader"),
);
const AboutGrid = lazy(() => import("../../components/pages/about/AboutGrid"));
const WhatWeMeasure = lazy(
  () => import("../../components/pages/about/WhatWeMeasure"),
);

export const Route = createFileRoute("/$locale/about")({
  loader: async ({ params, context }) => {
    const { i18n } = context;
    const resources = await loadNamespaces(
      params.locale ?? defaultLocale,
      ["about"],
      i18n,
    );
    return { resources };
  },
  component: About,
});

function About() {
  return (
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
  );
}
