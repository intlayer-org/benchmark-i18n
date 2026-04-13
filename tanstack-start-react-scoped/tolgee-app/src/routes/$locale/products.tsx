import { tolgee } from "../../i18n/tolgee";
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
    await tolgee.loadRecords([
      { language: params.locale, namespace: "products" },
      { language: params.locale, namespace: "productsHeader" },
      { language: params.locale, namespace: "productsGrid" },
    ]);
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
