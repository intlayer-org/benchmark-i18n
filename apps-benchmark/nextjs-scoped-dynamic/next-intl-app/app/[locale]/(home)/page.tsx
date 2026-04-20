import dynamic from "next/dynamic";
import { getMessages } from "../../../i18n/getMessages";
import { NextIntlClientProvider } from "next-intl";

const Hero = dynamic(() => import("../../../components/pages/home/Hero"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});
const WhyItMatters = dynamic(() => import("../../../components/pages/home/WhyItMatters"), {
  loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
});
const UnderstandingImpact = dynamic(() => import("../../../components/pages/home/UnderstandingImpact"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});
const ResultsTable = dynamic(() => import("../../../components/pages/home/ResultsTable"), {
  loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
});

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
