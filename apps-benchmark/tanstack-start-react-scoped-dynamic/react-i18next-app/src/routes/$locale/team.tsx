import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { loadNamespaces } from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";

const TeamHeader = lazy(() => import("../../components/pages/team/TeamHeader"));
const TeamGrid = lazy(() => import("../../components/pages/team/TeamGrid"));

export const Route = createFileRoute("/$locale/team")({
  loader: async ({ params, context }) => {
    const resources = await loadNamespaces(
      params.locale ?? defaultLocale,
      ["team"],
      context.i18n,
    );
    return { resources };
  },
  component: Team,
});

function Team() {
  return (
    <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <TeamHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <TeamGrid />
      </Suspense>
    </div>
  );
}
