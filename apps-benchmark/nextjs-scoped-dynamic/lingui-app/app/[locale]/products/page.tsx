import dynamic from "next/dynamic";
import LinguiPageCatalog from "../../../components/LinguiPageCatalog";
import { loadNamespaces } from "../../../i18n/lingui";

const ProductsHeader = dynamic(() => import("../../../components/pages/products/ProductsHeader"));
const ProductsGrid = dynamic(() => import("../../../components/pages/products/ProductsGrid"));

export default async function Products({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageMessages = await loadNamespaces(locale, ["products"]);

  return (
    <LinguiPageCatalog locale={locale} messages={pageMessages}>
      <div className="container py-16">
        <ProductsHeader />

        <ProductsGrid />
      </div>
    </LinguiPageCatalog>
  );
}
