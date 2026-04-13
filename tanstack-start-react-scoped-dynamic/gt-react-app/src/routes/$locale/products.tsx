import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { GTProvider } from "gt-tanstack-start";
import { Route as LocaleRoute } from "./route";
import loadTranslations from "../../../loadTranslations";

const ProductsHeader = lazy(
  () => import("../../components/pages/products/ProductsHeader"),
);
const ProductsGrid = lazy(
  () => import("../../components/pages/products/ProductsGrid"),
);

export const Route = createFileRoute("/$locale/products")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";
    const translations = await loadTranslations(locale, ["products"]);
    return { translations };
  },
  component: Products,
});

function Products() {
  const { locale } = LocaleRoute.useLoaderData();
  const { translations } = Route.useLoaderData();

  return (
    <GTProvider locale={locale} translations={translations}>
      <div className="container py-16">
        <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
          <ProductsHeader />
        </Suspense>

        <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
          <ProductsGrid />
        </Suspense>
      </div>
    </GTProvider>
  );
}
