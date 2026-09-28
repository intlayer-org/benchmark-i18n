import { useIntl } from "react-intl";
import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  const intl = useIntl();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {intl.formatMessage({ id: "header.products" })}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {intl.formatMessage({ id: "products-header.toolsAndServicesToStreamline" })}
      </p>
    </>
  );
}
