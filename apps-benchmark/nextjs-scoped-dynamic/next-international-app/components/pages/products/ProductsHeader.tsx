"use client";

import { useScopedI18n } from "../../../locales/client";
import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  const scopedNavT = useScopedI18n("header");
  const scopedT = useScopedI18n("products-header");

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {scopedNavT("products")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {scopedT("toolsAndServicesToStreamline")}
      </p>
    </>
  );
}
