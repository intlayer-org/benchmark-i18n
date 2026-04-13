import { loadNamespaces } from "#/i18n/i18n";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const TeamHeader = lazy(() => import("../../components/pages/team/TeamHeader"));
const TeamGrid = lazy(() => import("../../components/pages/team/TeamGrid"));

export const Route = createFileRoute("/$locale/team")({
  beforeLoad: ({ params }) => {
    loadNamespaces(params.locale || "en", ["team"]);
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
