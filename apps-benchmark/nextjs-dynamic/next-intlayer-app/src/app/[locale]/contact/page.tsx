import { Suspense } from "react";
import { IntlayerServerProvider } from "next-intlayer/server";
import ContactHeader from "@/components/pages/contact/ContactHeader";
import ContactForm from "@/components/pages/contact/ContactForm";
import type { NextPageIntlayer } from "next-intlayer";

const Contact: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <div className="container py-16">
        <div className="mx-auto max-w-2xl">
          <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
            <ContactHeader />
          </Suspense>

          <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </IntlayerServerProvider>
  );
};

export default Contact;
