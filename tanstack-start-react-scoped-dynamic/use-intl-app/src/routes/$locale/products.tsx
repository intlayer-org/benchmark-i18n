import { IntlProvider } from "use-intl";
import { getMessages } from "../../i18n/getMessages";
import { Route as LocaleRoute } from "./route";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

const ProductsHeader = lazy(
  () => import("../../components/pages/products/ProductsHeader"),
);
const ProductsGrid = lazy(
  () => import("../../components/pages/products/ProductsGrid"),
);

export const Route = createFileRoute("/$locale/products")({
  loader: async ({ params }) => {
    const messages = await getMessages(params.locale || "en", ["products"]);
    return { messages };
  },
  component: Products,
});

function Products() {
  
  const rootData = LocaleRoute.useLoaderData();
  const pageData = Route.useLoaderData();
  const mergedMessages = { ...rootData.messages, ...pageData.messages };

  return (
    <IntlProvider messages={mergedMessages} locale={rootData.locale} timeZone="UTC" now={new Date()}>
      <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <ProductsHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <ProductsGrid />
      </Suspense>
    </div>
    </IntlProvider>
  );
}
