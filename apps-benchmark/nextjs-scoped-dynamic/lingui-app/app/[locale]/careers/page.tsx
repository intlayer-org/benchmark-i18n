import dynamic from "next/dynamic";
import LinguiPageCatalog from "../../../components/LinguiPageCatalog";
import { loadNamespaces } from "../../../i18n/lingui";

const CareersHeader = dynamic(() => import("../../../components/pages/careers/CareersHeader"));
const CareersBenefits = dynamic(() => import("../../../components/pages/careers/CareersBenefits"));
const OpenPositions = dynamic(() => import("../../../components/pages/careers/OpenPositions"));

export default async function Careers({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageMessages = await loadNamespaces(locale, ["careers"]);

  return (
    <LinguiPageCatalog locale={locale} messages={pageMessages}>
      <div className="container py-16">
        <CareersHeader />

        <CareersBenefits />

        <OpenPositions />
      </div>
    </LinguiPageCatalog>
  );
}
