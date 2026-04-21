import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../../components/pages/home/Hero"));
const WhyItMatters = dynamic(() => import("../../components/pages/home/WhyItMatters"));
const UnderstandingImpact = dynamic(() => import("../../components/pages/home/UnderstandingImpact"));
const ResultsTable = dynamic(() => import("../../components/pages/home/ResultsTable"));

export default function Home() {
  return (
    <div className="container py-16">
      <Hero />

      <WhyItMatters />

      <UnderstandingImpact />

      <ResultsTable />
    </div>
  );
}
