import { useLingui } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  const { i18n } = useLingui();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {i18n._({ id: "header.products", message: "Products" })}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {i18n._({ id: "products-header.toolsAndServicesToStreamline", message: "Tools and services to streamline your internationalization workflow." })}
      </p>
    </>
  );
}
