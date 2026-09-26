import dynamic from "next/dynamic";

const ProductsHeader = dynamic(() => import("../../../components/pages/products/ProductsHeader"));
const ProductsGrid = dynamic(() => import("../../../components/pages/products/ProductsGrid"));

export default function Products() {
  return (
    <div className="container py-16">
      <ProductsHeader />

      <ProductsGrid />
    </div>
  );
}
