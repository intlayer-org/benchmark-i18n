import dynamic from "next/dynamic";

const AboutHeader = dynamic(() => import("@/components/pages/about/AboutHeader"), {
  loading: () => <div className="h-48 animate-pulse bg-muted/20" />,
});
const AboutGrid = dynamic(() => import("@/components/pages/about/AboutGrid"), {
  loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
});
const WhatWeMeasure = dynamic(() => import("@/components/pages/about/WhatWeMeasure"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});

export default function About() {
  return (
    <div className="container py-16">
      <AboutHeader />

      <AboutGrid />

      <WhatWeMeasure />
    </div>
  );
}
