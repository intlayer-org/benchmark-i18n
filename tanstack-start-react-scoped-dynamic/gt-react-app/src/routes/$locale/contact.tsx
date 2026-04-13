import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { GTProvider } from "gt-tanstack-start";
import { Route as LocaleRoute } from "./route";
import loadTranslations from "../../../loadTranslations";

const ContactHeader = lazy(
  () => import("../../components/pages/contact/ContactHeader"),
);
const ContactForm = lazy(
  () => import("../../components/pages/contact/ContactForm"),
);

export const Route = createFileRoute("/$locale/contact")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";
    const translations = await loadTranslations(locale, ["contact"]);
    return { translations };
  },
  component: Contact,
});

function Contact() {
  const { locale } = LocaleRoute.useLoaderData();
  const { translations } = Route.useLoaderData();

  return (
    <GTProvider locale={locale} translations={translations}>
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
    </GTProvider>
  );
}
