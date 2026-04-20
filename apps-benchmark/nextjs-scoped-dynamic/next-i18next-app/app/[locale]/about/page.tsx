import dynamic from "next/dynamic";
import { type Namespace, type Locale } from "../../../i18n/config";
import { initI18next } from "../../../i18n/server";
import type { ResourceLanguage } from "i18next";
import AppProviders from "../../../components/AppProviders";

const AboutHeader = dynamic(() => import("../../../components/pages/about/AboutHeader"));
const AboutGrid = dynamic(() => import("../../../components/pages/about/AboutGrid"));
const WhatWeMeasure = dynamic(() => import("../../../components/pages/about/WhatWeMeasure"));

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageNamespaces: Namespace[] = ["about"];
  const i18n = await initI18next(locale, pageNamespaces);

  const resources = Object.fromEntries(
    pageNamespaces.map((ns) => [ns, i18n.getResourceBundle(locale, ns)]),
  ) as Record<string, ResourceLanguage>;

  return (
    <AppProviders initialResources={resources}>
      <div className="container py-16">
        <AboutHeader />

        <AboutGrid />

        <WhatWeMeasure />
      </div>
    </AppProviders>
  );
}
