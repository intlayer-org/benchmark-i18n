import { Suspense } from "react";
import { IntlayerServerProvider } from "next-intlayer/server";
import FAQHeader from "@/components/pages/faq/FAQHeader";
import FAQList from "@/components/pages/faq/FAQList";
import type { NextPageIntlayer } from "next-intlayer";

const FAQ: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <div className="container py-16">
        <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
          <FAQHeader />
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <FAQList />
        </Suspense>
      </div>
    </IntlayerServerProvider>
  );
};

export default FAQ;
