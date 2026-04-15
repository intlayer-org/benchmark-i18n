import { Suspense } from "react";
import { IntlayerServerProvider } from "next-intlayer/server";
import PricingHeader from "@/components/pages/pricing/PricingHeader";
import PricingTiers from "@/components/pages/pricing/PricingTiers";
import type { NextPageIntlayer } from "next-intlayer";

const Pricing: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <div className="container py-16">
        <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
          <PricingHeader />
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <PricingTiers />
        </Suspense>
      </div>
    </IntlayerServerProvider>
  );
};

export default Pricing;
