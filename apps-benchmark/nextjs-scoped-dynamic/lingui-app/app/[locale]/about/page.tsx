import dynamic from "next/dynamic";
import LinguiPageCatalog from "../../../components/LinguiPageCatalog";
import { loadNamespaces } from "../../../i18n/lingui";

const AboutHeader = dynamic(() => import("../../../components/pages/about/AboutHeader"));
const AboutGrid = dynamic(() => import("../../../components/pages/about/AboutGrid"));
const WhatWeMeasure = dynamic(() => import("../../../components/pages/about/WhatWeMeasure"));

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageMessages = await loadNamespaces(locale, ["about"]);

  return (
    <LinguiPageCatalog locale={locale} messages={pageMessages}>
      <div className="container py-16">
        <AboutHeader />

        <AboutGrid />

        <WhatWeMeasure />
      </div>
    </LinguiPageCatalog>
  );
}
