import { Suspense } from "react";
import { IntlayerServerProvider } from "next-intlayer/server";
import TeamHeader from "@/components/pages/team/TeamHeader";
import TeamGrid from "@/components/pages/team/TeamGrid";
import type { NextPageIntlayer } from "next-intlayer";

const Team: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <div className="container py-16">
        <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
          <TeamHeader />
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <TeamGrid />
        </Suspense>
      </div>
    </IntlayerServerProvider>
  );
};

export default Team;
