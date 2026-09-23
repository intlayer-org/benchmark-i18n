import dynamic from "next/dynamic";
import { getMessages } from "@/i18n/getMessages";
import TolgeePageHydrator from "@/components/TolgeePageHydrator";

const ProductsHeader = dynamic(() => import("../../../components/pages/products/ProductsHeader"));
const ProductsGrid = dynamic(() => import("../../../components/pages/products/ProductsGrid"));

export default async function Products({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale, [
    "products",
    "productsHeader",
    "productsGrid",
    "pricingTiers",
  ]);

  return (
    <TolgeePageHydrator locale={locale} messages={messages}>
      <div className="container py-16">
        <ProductsHeader />

        <ProductsGrid />
      </div>
    </TolgeePageHydrator>
  );
}
