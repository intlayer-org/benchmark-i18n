import { Suspense } from "react";
import ProductsHeader from "@/components/pages/products/ProductsHeader";
import ProductsGrid from "@/components/pages/products/ProductsGrid";
import type { NextPageIntlayer } from "next-intlayer";

const Products: NextPageIntlayer = () => (
  <div className="container py-16">
    <Suspense fallback={<div className="h-48 animate-pulse bg-muted/20" />}>
      <ProductsHeader />
    </Suspense>

    <Suspense fallback={<div className="h-96 animate-pulse bg-muted/20" />}>
      <ProductsGrid />
    </Suspense>
  </div>
);

export default Products;
