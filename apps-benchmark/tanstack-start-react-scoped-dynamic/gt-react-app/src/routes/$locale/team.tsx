import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { GTProvider } from "gt-tanstack-start";
import { Route as LocaleRoute } from "./route";
import loadTranslations from "../../../loadTranslations";

const TeamHeader = lazy(() => import("../../components/pages/team/TeamHeader"));
const TeamGrid = lazy(() => import("../../components/pages/team/TeamGrid"));

export const Route = createFileRoute("/$locale/team")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";
    const translations = await loadTranslations(locale, ["team"]);
    return { translations };
  },
  component: Team,
});

function Team() {
  const { locale } = LocaleRoute.useLoaderData();
  const { translations } = Route.useLoaderData();

  return (
    <GTProvider locale={locale} translations={translations}>
      <div className="container py-16">
        <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
          <TeamHeader />
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <TeamGrid />
        </Suspense>
      </div>
    </GTProvider>
  );
}
