import { useMemo } from "react";
import { I18nProvider } from "@lingui/react";
import { getMessages, initLingui } from "../../i18n/lingui";
import { Route as LocaleRoute } from "./route";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const FAQHeader = lazy(() => import("../../components/pages/faq/FAQHeader"));
const FAQList = lazy(() => import("../../components/pages/faq/FAQList"));

export const Route = createFileRoute("/$locale/faq")({
  loader: async ({ params }) => {
    const messages = await getMessages(params.locale || "en", ["faq"]);
    return { messages };
  },
  component: FAQ,
});

function FAQ() {
  
  const rootData = LocaleRoute.useLoaderData();
  const pageData = Route.useLoaderData();
  const mergedMessages = { ...rootData.messages, ...pageData.messages };
  const i18n = useMemo(() => initLingui(rootData.locale, mergedMessages), [rootData.locale, mergedMessages]);

  return (
    <I18nProvider i18n={i18n}>
      <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <FAQHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <FAQList />
      </Suspense>
    </div>
    </I18nProvider>
  );
}
