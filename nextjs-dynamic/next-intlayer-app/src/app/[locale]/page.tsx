import {   } from "react";
import { IntlayerServerProvider } from "next-intlayer/server";
import Hero from "@/components/pages/home/Hero";
import WhyItMatters from "@/components/pages/home/WhyItMatters";
import UnderstandingImpact from "@/components/pages/home/UnderstandingImpact";
import ResultsTable from "@/components/pages/home/ResultsTable";
import type { NextPageIntlayer } from "next-intlayer";

const Home: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <div className="container py-16">
        <Hero />

        <WhyItMatters />

        <UnderstandingImpact />

        <ResultsTable />
      </div>
    </IntlayerServerProvider>
  );
};

export default Home;
