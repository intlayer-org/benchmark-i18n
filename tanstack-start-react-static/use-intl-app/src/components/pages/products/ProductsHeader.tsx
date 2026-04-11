import { useTranslations } from "use-intl";
import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  const tHeader = useTranslations("header");
  const tProducts = useTranslations("products-header");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {tHeader("products")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {tProducts("toolsAndServicesToStreamline")}
      </p>
    </>
  );
}
