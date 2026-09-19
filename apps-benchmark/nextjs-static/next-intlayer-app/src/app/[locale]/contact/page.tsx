import { Suspense } from "react";
import ContactHeader from "@/components/pages/contact/ContactHeader";
import ContactForm from "@/components/pages/contact/ContactForm";
import type { NextPageIntlayer } from "next-intlayer";

const Contact: NextPageIntlayer = () => (
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
);

export default Contact;
