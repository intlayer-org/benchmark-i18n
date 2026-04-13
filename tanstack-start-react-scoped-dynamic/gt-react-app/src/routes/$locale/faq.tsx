import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { GTProvider } from "gt-tanstack-start";
import { Route as LocaleRoute } from "./route";
import loadTranslations from "../../../loadTranslations";

const FAQHeader = lazy(() => import("../../components/pages/faq/FAQHeader"));
const FAQList = lazy(() => import("../../components/pages/faq/FAQList"));

export const Route = createFileRoute("/$locale/faq")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";
    const translations = await loadTranslations(locale, ["faq"]);
    return { translations };
  },
  component: FAQ,
});

function FAQ() {
  const { locale } = LocaleRoute.useLoaderData();
  const { translations } = Route.useLoaderData();

  return (
    <GTProvider locale={locale} translations={translations}>
      <div className="container py-16">
        <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
          <FAQHeader />
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <FAQList />
        </Suspense>
      </div>
    </GTProvider>
  );
}
