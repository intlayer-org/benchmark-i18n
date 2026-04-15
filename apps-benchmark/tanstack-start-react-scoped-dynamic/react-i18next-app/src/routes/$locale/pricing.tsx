import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { loadNamespaces } from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";

const PricingHeader = lazy(
  () => import("../../components/pages/pricing/PricingHeader"),
);
const PricingTiers = lazy(
  () => import("../../components/pages/pricing/PricingTiers"),
);

export const Route = createFileRoute("/$locale/pricing")({
  loader: async ({ params, context }) => {
    const { i18n } = context;
    const resources = await loadNamespaces(
      params.locale ?? defaultLocale,
      ["pricing"],
      i18n,
    );
    return { resources };
  },
  component: Pricing,
});

function Pricing() {
  return (
    <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <PricingHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <PricingTiers />
      </Suspense>
    </div>
  );
}
