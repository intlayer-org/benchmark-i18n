import dynamic from "next/dynamic";
import { type Namespace, type Locale } from "../../../i18n/config";
import { initI18next } from "../../../i18n/server";
import type { ResourceLanguage } from "i18next";
import AppProviders from "../../../components/AppProviders";

const Hero = dynamic(() => import("../../../components/pages/home/Hero"));
const WhyItMatters = dynamic(() => import("../../../components/pages/home/WhyItMatters"));
const UnderstandingImpact = dynamic(
  () => import("../../../components/pages/home/UnderstandingImpact"),
);
const ResultsTable = dynamic(() => import("../../../components/pages/home/ResultsTable"));

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageNamespaces: Namespace[] = ["home"];
  const i18n = await initI18next(locale, pageNamespaces);

  const resources = Object.fromEntries(
    pageNamespaces.map((ns) => [ns, i18n.getResourceBundle(locale, ns)]),
  ) as Record<string, ResourceLanguage>;

  return (
    <AppProviders initialResources={resources}>
      <div className="container py-16">
        <Hero />
        <WhyItMatters />
        <UnderstandingImpact />
        <ResultsTable />
      </div>
    </AppProviders>
  );
}
