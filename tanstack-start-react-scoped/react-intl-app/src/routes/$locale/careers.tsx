import { IntlProvider } from "react-intl";
import { getMessages } from "../../i18n/getMessages";
import { Route as LocaleRoute } from "./route";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

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
    const messages = await getMessages(params.locale || "en", ["careers"]);
    return { messages };
  },
  component: Careers,
});

function Careers() {
  
  const rootData = LocaleRoute.useLoaderData();
  const pageData = Route.useLoaderData();
  const mergedMessages = { ...rootData.messages, ...pageData.messages };

  return (
    <IntlProvider messages={mergedMessages} locale={rootData.locale}>
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
    </IntlProvider>
  );
}
