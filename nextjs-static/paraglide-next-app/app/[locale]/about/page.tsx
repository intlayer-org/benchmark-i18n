import { lazy, Suspense } from "react";

const AboutHeader = lazy(
  () => import("../../../components/pages/about/AboutHeader"),
);
const AboutGrid = lazy(
  () => import("../../../components/pages/about/AboutGrid"),
);
const WhatWeMeasure = lazy(
  () => import("../../../components/pages/about/WhatWeMeasure"),
);

export default function About() {
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
