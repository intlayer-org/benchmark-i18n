import { tolgee } from "../../i18n/tolgee";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const ContactHeader = lazy(
  () => import("../../components/pages/contact/ContactHeader"),
);
const ContactForm = lazy(
  () => import("../../components/pages/contact/ContactForm"),
);

export const Route = createFileRoute("/$locale/contact")({
  loader: async ({ params }) => {
    await tolgee.loadRecords([
      { language: params.locale, namespace: "contact" },
      { language: params.locale, namespace: "contactHeader" },
      { language: params.locale, namespace: "contactForm" },
    ]);
  },
  component: Contact,
});

function Contact() {
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
