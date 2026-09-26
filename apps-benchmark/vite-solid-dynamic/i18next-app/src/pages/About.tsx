import { lazy, Suspense } from "solid-js";

const AboutHeader = lazy(() => import("../components/pages/about/AboutHeader"));
const AboutGrid = lazy(() => import("../components/pages/about/AboutGrid"));
const WhatWeMeasure = lazy(
  () => import("../components/pages/about/WhatWeMeasure"),
);

export default function About() {
  return (
    <div class="container py-16">
      <Suspense fallback={<div class="h-48 animate-pulse bg-muted/20" />}>
        <AboutHeader />
      </Suspense>

      <Suspense fallback={<div class="h-64 animate-pulse bg-muted/20" />}>
        <AboutGrid />
      </Suspense>

      <Suspense fallback={<div class="h-96 animate-pulse bg-muted/20" />}>
        <WhatWeMeasure />
      </Suspense>
    </div>
  );
}
