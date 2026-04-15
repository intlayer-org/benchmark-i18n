"use client";

import { useTranslations } from "next-intl";
import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  const tHeader = useTranslations();
  const tProducts = useTranslations("products.products-header");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {tHeader("header.products")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {tProducts("toolsAndServicesToStreamline")}
      </p>
    </>
  );
}
