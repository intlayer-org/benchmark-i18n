import dynamic from "next/dynamic";
import LinguiPageCatalog from "../../../components/LinguiPageCatalog";
import { loadNamespaces } from "../../../i18n/lingui";

const Hero = dynamic(() => import("../../../components/pages/home/Hero"));
const WhyItMatters = dynamic(
  () => import("../../../components/pages/home/WhyItMatters"),
);
const UnderstandingImpact = dynamic(
  () => import("../../../components/pages/home/UnderstandingImpact"),
);
const ResultsTable = dynamic(
  () => import("../../../components/pages/home/ResultsTable"),
);

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageMessages = await loadNamespaces(locale, ["home"]);

  return (
    <LinguiPageCatalog locale={locale} messages={pageMessages}>
      <div className="container py-16">
        <Hero />
        <WhyItMatters />
        <UnderstandingImpact />
        <ResultsTable />
      </div>
    </LinguiPageCatalog>
  );
}
