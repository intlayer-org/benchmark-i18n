import { IntlProvider } from "react-intl";
import { getMessages } from "../../i18n/getMessages";
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

  return (
    <IntlProvider messages={mergedMessages} locale={rootData.locale}>
      <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <FAQHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <FAQList />
      </Suspense>
    </div>
    </IntlProvider>
  );
}
