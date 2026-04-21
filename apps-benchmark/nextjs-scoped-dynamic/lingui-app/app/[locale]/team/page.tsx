import dynamic from "next/dynamic";
import LinguiPageCatalog from "../../../components/LinguiPageCatalog";
import { loadNamespaces } from "../../../i18n/lingui";

const TeamHeader = dynamic(() => import("../../../components/pages/team/TeamHeader"));
const TeamGrid = dynamic(() => import("../../../components/pages/team/TeamGrid"));

export default async function Team({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageMessages = await loadNamespaces(locale, ["team"]);

  return (
    <LinguiPageCatalog locale={locale} messages={pageMessages}>
      <div className="container py-16">
        <TeamHeader />

        <TeamGrid />
      </div>
    </LinguiPageCatalog>
  );
}
