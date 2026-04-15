import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { GTProvider } from "gt-tanstack-start";
import { Route as LocaleRoute } from "./route";
import loadTranslations from "../../../loadTranslations";

const PricingHeader = lazy(
  () => import("../../components/pages/pricing/PricingHeader"),
);
const PricingTiers = lazy(
  () => import("../../components/pages/pricing/PricingTiers"),
);

export const Route = createFileRoute("/$locale/pricing")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";
    const translations = await loadTranslations(locale, ["pricing"]);
    return { translations };
  },
  component: Pricing,
});

function Pricing() {
  const { locale } = LocaleRoute.useLoaderData();
  const { translations } = Route.useLoaderData();

  return (
    <GTProvider locale={locale} translations={translations}>
      <div className="container py-16">
        <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
          <PricingHeader />
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <PricingTiers />
        </Suspense>
      </div>
    </GTProvider>
  );
}
