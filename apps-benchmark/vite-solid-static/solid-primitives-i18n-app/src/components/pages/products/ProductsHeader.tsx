import MockBanner from "../../MockBanner";
import { t } from "../../../i18n";

export default function ProductsHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {t("products.header.title")}
      </h1>
      <p class="mb-10 text-muted-foreground">
        {t("products.header.description")}
      </p>
    </>
  );
}
