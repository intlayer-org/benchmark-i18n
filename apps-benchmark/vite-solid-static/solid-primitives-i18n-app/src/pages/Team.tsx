import { lazy, Suspense } from "solid-js";

const TeamHeader = lazy(() => import("../components/pages/team/TeamHeader"));
const TeamGrid = lazy(() => import("../components/pages/team/TeamGrid"));

export default function Team() {
  return (
    <div class="container py-16">
      <Suspense fallback={<div class="h-48 animate-pulse bg-muted/20" />}>
        <TeamHeader />
      </Suspense>

      <Suspense fallback={<div class="h-96 animate-pulse bg-muted/20" />}>
        <TeamGrid />
      </Suspense>
    </div>
  );
}
