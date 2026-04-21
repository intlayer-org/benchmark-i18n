import dynamic from "next/dynamic";
import LinguiPageCatalog from "../../../components/LinguiPageCatalog";
import { loadNamespaces } from "../../../i18n/lingui";

const PricingHeader = dynamic(() => import("../../../components/pages/pricing/PricingHeader"));
const PricingTiers = dynamic(() => import("../../../components/pages/pricing/PricingTiers"));

export default async function Pricing({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageMessages = await loadNamespaces(locale, ["pricing"]);

  return (
    <LinguiPageCatalog locale={locale} messages={pageMessages}>
      <div className="container py-16">
        <PricingHeader />

        <PricingTiers />
      </div>
    </LinguiPageCatalog>
  );
}
