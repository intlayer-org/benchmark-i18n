import dynamic from "next/dynamic";
import { getMessages } from "../../../i18n/getMessages";
import { NextIntlClientProvider } from "next-intl";

const Hero = dynamic(() => import("../../../components/pages/home/Hero"));
const WhyItMatters = dynamic(() => import("../../../components/pages/home/WhyItMatters"));
const UnderstandingImpact = dynamic(() => import("../../../components/pages/home/UnderstandingImpact"));
const ResultsTable = dynamic(() => import("../../../components/pages/home/ResultsTable"));

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages(locale, [
    "home",
    "hero",
    "whyItMatters",
    "understandingImpact",
    "resultsTable",
  ]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="container py-16">
        <Hero />
        <WhyItMatters />
        <UnderstandingImpact />
        <ResultsTable />
      </div>
    </NextIntlClientProvider>
  );
}
