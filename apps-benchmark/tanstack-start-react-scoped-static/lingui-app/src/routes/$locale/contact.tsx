import { useMemo } from "react";
import { I18nProvider } from "@lingui/react";
import { getMessages, initLingui } from "../../i18n/lingui";
import { Route as LocaleRoute } from "./route";
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
    const messages = await getMessages(params.locale || "en", ["contact"]);
    return { messages };
  },
  component: Contact,
});

function Contact() {
  
  const rootData = LocaleRoute.useLoaderData();
  const pageData = Route.useLoaderData();
  const mergedMessages = { ...rootData.messages, ...pageData.messages };
  const i18n = useMemo(() => initLingui(rootData.locale, mergedMessages), [rootData.locale, mergedMessages]);

  return (
    <I18nProvider i18n={i18n}>
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
    </I18nProvider>
  );
}
