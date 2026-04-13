import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { loadNamespaces } from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";

const ProductsHeader = lazy(
  () => import("../../components/pages/products/ProductsHeader"),
);
const ProductsGrid = lazy(
  () => import("../../components/pages/products/ProductsGrid"),
);

export const Route = createFileRoute("/$locale/products")({
  loader: async ({ params, context }) => {
    const { i18n } = context;
    const resources = await loadNamespaces(
      params.locale ?? defaultLocale,
      ["products"],
      i18n,
    );
    return { resources };
  },
  component: Products,
});

function Products() {
  return (
    <div className="container py-16">
      <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
        <ProductsHeader />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
        <ProductsGrid />
      </Suspense>
    </div>
  );
}
