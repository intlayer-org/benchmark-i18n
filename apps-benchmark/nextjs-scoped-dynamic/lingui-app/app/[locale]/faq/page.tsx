import dynamic from "next/dynamic";
import LinguiPageCatalog from "../../../components/LinguiPageCatalog";
import { loadNamespaces } from "../../../i18n/lingui";

const FAQHeader = dynamic(() => import("../../../components/pages/faq/FAQHeader"));
const FAQList = dynamic(() => import("../../../components/pages/faq/FAQList"));

export default async function FAQ({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageMessages = await loadNamespaces(locale, ["faq"]);

  return (
    <LinguiPageCatalog locale={locale} messages={pageMessages}>
      <div className="container py-16">
        <FAQHeader />

        <FAQList />
      </div>
    </LinguiPageCatalog>
  );
}
