import dynamic from "next/dynamic";

const AboutHeader = dynamic(() => import("../../../components/pages/about/AboutHeader"));
const AboutGrid = dynamic(() => import("../../../components/pages/about/AboutGrid"));
const WhatWeMeasure = dynamic(() => import("../../../components/pages/about/WhatWeMeasure"));

export default function About() {
  return (
    <div className="container py-16">
      <AboutHeader />

      <AboutGrid />

      <WhatWeMeasure />
    </div>
  );
}
