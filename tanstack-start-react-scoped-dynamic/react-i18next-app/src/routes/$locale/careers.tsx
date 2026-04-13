import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { loadNamespaces } from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";

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
  loader: async ({ params, context }) => {
    const { i18n } = context;
    const resources = await loadNamespaces(
      params.locale ?? defaultLocale,
      ["careers"],
      i18n,
    );
    return { resources };
  },
  component: Careers,
});

function Careers() {
  return (
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
  );
}
