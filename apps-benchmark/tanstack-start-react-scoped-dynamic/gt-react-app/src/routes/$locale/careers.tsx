import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { GTProvider } from "gt-tanstack-start";
import { Route as LocaleRoute } from "./route";
import loadTranslations from "../../../loadTranslations";

const CareersHeader = lazy(
  () => import("../../components/pages/careers/CareersHeader"),
);
const CareersBenefits = lazy(
  () => import("../../components/pages/careers/CareersBenefits"),
);
const OpenPositions = lazy(
  () => import("../../components/pages/careers/OpenPositions"),
);

export const Route = createFileRoute("/$locale/careers")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";
    const translations = await loadTranslations(locale, ["careers"]);
    return { translations };
  },
  component: Careers,
});

function Careers() {
  const { locale } = LocaleRoute.useLoaderData();
  const { translations } = Route.useLoaderData();

  return (
    <GTProvider locale={locale} translations={translations}>
      <div className="container py-16">
        <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
          <CareersHeader />
        </Suspense>

        <Suspense fallback={<div className="h-32 animate-pulse bg-muted/20" />}>
          <CareersBenefits />
        </Suspense>

        <Suspense
          fallback={<div className="h-[600px] animate-pulse bg-muted/20" />}
        >
          <OpenPositions />
        </Suspense>
      </div>
    </GTProvider>
  );
}
