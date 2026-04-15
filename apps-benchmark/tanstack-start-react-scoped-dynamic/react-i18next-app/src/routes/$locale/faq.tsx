import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { loadNamespaces } from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";

const FAQHeader = lazy(() => import("../../components/pages/faq/FAQHeader"));
const FAQList = lazy(() => import("../../components/pages/faq/FAQList"));

export const Route = createFileRoute("/$locale/faq")({
  loader: async ({ params, context }) => {
    const { i18n } = context;
    const resources = await loadNamespaces(
      params.locale ?? defaultLocale,
      ["faq"],
      i18n,
    );
    return { resources };
  },
  component: FAQ,
});

function FAQ() {
  return (
    <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <FAQHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <FAQList />
      </Suspense>
    </div>
  );
}
