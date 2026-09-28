import { lazy, Suspense } from "react";

const TeamHeader = lazy(() => import("../components/pages/team/TeamHeader"));
const TeamGrid = lazy(() => import("../components/pages/team/TeamGrid"));

export default function Team() {
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
