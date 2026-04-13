import { useMemo } from "react";
import { I18nProvider } from "@lingui/react";
import { getMessages, initLingui } from "../../i18n/lingui";
import { Route as LocaleRoute } from "./route";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const PricingHeader = lazy(
  () => import("../../components/pages/pricing/PricingHeader"),
);
const PricingTiers = lazy(
  () => import("../../components/pages/pricing/PricingTiers"),
);

export const Route = createFileRoute("/$locale/pricing")({
  loader: async ({ params }) => {
    const messages = await getMessages(params.locale || "en", ["pricing"]);
    return { messages };
  },
  component: Pricing,
});

function Pricing() {
  
  const rootData = LocaleRoute.useLoaderData();
  const pageData = Route.useLoaderData();
  const mergedMessages = { ...rootData.messages, ...pageData.messages };
  const i18n = useMemo(() => initLingui(rootData.locale, mergedMessages), [rootData.locale, mergedMessages]);

  return (
    <I18nProvider i18n={i18n}>
      <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <PricingHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <PricingTiers />
      </Suspense>
    </div>
    </I18nProvider>
  );
}
