import { Suspense } from "react";
import { IntlayerServerProvider } from "next-intlayer/server";
import CareersHeader from "@/components/pages/careers/CareersHeader";
import OpenPositions from "@/components/pages/careers/OpenPositions";
import CareersBenefits from "@/components/pages/careers/CareersBenefits";
import type { NextPageIntlayer } from "next-intlayer";

const Careers: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <div className="container py-16">
        <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
          <CareersHeader />
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <OpenPositions />
        </Suspense>

        <Suspense fallback={<div className="h-64 animate-pulse bg-muted/20" />}>
          <CareersBenefits />
        </Suspense>
      </div>
    </IntlayerServerProvider>
  );
};

export default Careers;
