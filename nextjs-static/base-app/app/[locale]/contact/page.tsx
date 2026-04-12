import { lazy, Suspense } from "react";

const ContactHeader = lazy(
  () => import("../../components/pages/contact/ContactHeader"),
);
const ContactForm = lazy(
  () => import("../../components/pages/contact/ContactForm"),
);

export default function Contact() {
  return (
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
}
