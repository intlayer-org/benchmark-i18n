"use client";

import { useTranslation } from "react-i18next";

export default function ProductsHeader() {
  const { t } = useTranslation();

  return (
    <header className="mb-10 text-center">
      <h1 className="mb-3 text-3xl font-bold text-foreground">
        {t("products.productsHeader.ourProducts")}
      </h1>
      <p className="mx-auto max-w-2xl text-muted-foreground">
        {t("products.productsHeader.exploreOurSuiteOfTools")}
      </p>
    </header>
  );
}
