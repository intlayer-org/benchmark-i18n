import { lazy, Suspense } from "solid-js";

const ProductsHeader = lazy(
  () => import("../components/pages/products/ProductsHeader"),
);
const ProductsGrid = lazy(
  () => import("../components/pages/products/ProductsGrid"),
);

export default function Products() {
  return (
    <div class="container py-16">
      <Suspense fallback={<div class="h-48 animate-pulse bg-muted/20" />}>
        <ProductsHeader />
      </Suspense>

      <Suspense fallback={<div class="h-96 animate-pulse bg-muted/20" />}>
        <ProductsGrid />
      </Suspense>
    </div>
  );
}
