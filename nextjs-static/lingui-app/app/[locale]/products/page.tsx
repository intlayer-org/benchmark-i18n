import dynamic from "next/dynamic";

const ProductsHeader = dynamic(() => import("../../../components/pages/products/ProductsHeader"), {
  loading: () => <div className="h-48 animate-pulse bg-muted/20" />,
});
const ProductsGrid = dynamic(() => import("../../../components/pages/products/ProductsGrid"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});

export default function Products() {
  return (
    <div className="container py-16">
      <ProductsHeader />

      <ProductsGrid />
    </div>
  );
}
