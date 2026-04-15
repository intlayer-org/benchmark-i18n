import { Suspense } from "react";
import { IntlayerServerProvider } from "next-intlayer/server";
import AboutHeader from "@/components/pages/about/AboutHeader";
import AboutGrid from "@/components/pages/about/AboutGrid";
import WhatWeMeasure from "@/components/pages/about/WhatWeMeasure";
import type { NextPageIntlayer } from "next-intlayer";

const About: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
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
    </IntlayerServerProvider>
  );
};

export default About;
