import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { loadNamespaces } from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";

const ContactHeader = lazy(
  () => import("../../components/pages/contact/ContactHeader"),
);
const ContactForm = lazy(
  () => import("../../components/pages/contact/ContactForm"),
);

export const Route = createFileRoute("/$locale/contact")({
  loader: async ({ params, context }) => {
    const { i18n } = context;
    const resources = await loadNamespaces(
      params.locale ?? defaultLocale,
      ["contact"],
      i18n,
    );
    return { resources };
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
