import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../../components/pages/home/Hero"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});
const WhyItMatters = dynamic(() => import("../../components/pages/home/WhyItMatters"), {
  loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
});
const UnderstandingImpact = dynamic(() => import("../../components/pages/home/UnderstandingImpact"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});
const ResultsTable = dynamic(() => import("../../components/pages/home/ResultsTable"), {
  loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
});

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
