import dynamic from "next/dynamic";
import { type Namespace, type Locale } from "../../../i18n/config";
import { initI18next } from "../../../i18n/server";
import type { ResourceLanguage } from "i18next";
import AppProviders from "../../../components/AppProviders";

const ProductsHeader = dynamic(() => import("../../../components/pages/products/ProductsHeader"));
const ProductsGrid = dynamic(() => import("../../../components/pages/products/ProductsGrid"));

export default async function Products({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageNamespaces: Namespace[] = ["products"];
  const i18n = await initI18next(locale, pageNamespaces);

  const resources = Object.fromEntries(
    pageNamespaces.map((ns) => [ns, i18n.getResourceBundle(locale, ns)]),
  ) as Record<string, ResourceLanguage>;

  return (
    <AppProviders initialResources={resources}>
      <div className="container py-16">
        <ProductsHeader />

        <ProductsGrid />
      </div>
    </AppProviders>
  );
}
