import dynamic from "next/dynamic";
import { getMessages } from "@/i18n/getMessages";
import TolgeePageHydrator from "@/components/TolgeePageHydrator";

const AboutHeader = dynamic(() => import("../../../components/pages/about/AboutHeader"));
const AboutGrid = dynamic(() => import("../../../components/pages/about/AboutGrid"));
const WhatWeMeasure = dynamic(() => import("../../../components/pages/about/WhatWeMeasure"));

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale, [
    "about",
    "aboutHeader",
    "aboutGrid",
    "whatWeMeasure",
  ]);

  return (
    <TolgeePageHydrator locale={locale} messages={messages}>
      <div className="container py-16">
        <AboutHeader />

        <AboutGrid />

        <WhatWeMeasure />
      </div>
    </TolgeePageHydrator>
  );
}
