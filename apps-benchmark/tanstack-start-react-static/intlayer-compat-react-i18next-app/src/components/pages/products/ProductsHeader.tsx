import { useTranslation } from "react-i18next";
import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  const { t } = useTranslation();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("productsHeader.products")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t("productsHeader.toolsAndServicesTo")}
      </p>
    </>
  );
}
