import Hero from "@/components/pages/home/Hero";
import WhyItMatters from "@/components/pages/home/WhyItMatters";
import UnderstandingImpact from "@/components/pages/home/UnderstandingImpact";
import ResultsTable from "@/components/pages/home/ResultsTable";
import type { NextPageIntlayer } from "next-intlayer";

const Home: NextPageIntlayer = () => (
  <div className="container py-16">
    <Hero />

    <WhyItMatters />

    <UnderstandingImpact />

    <ResultsTable />
  </div>
);

export default Home;
