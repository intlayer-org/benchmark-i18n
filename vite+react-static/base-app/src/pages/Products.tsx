import { lazy, Suspense } from "react";

const ProductsHeader = lazy(
  () => import("../components/pages/products/ProductsHeader"),
);
const ProductsGrid = lazy(
  () => import("../components/pages/products/ProductsGrid"),
);

export default function Products() {
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
