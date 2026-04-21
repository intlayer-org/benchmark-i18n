"use client";

import { Trans } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <Trans id="header.products" message="Products" />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <Trans
          id="products-header.toolsAndServicesToStreamline"
          message="Tools and services to streamline your internationalization workflow."
        />
      </p>
    </>
  );
}
