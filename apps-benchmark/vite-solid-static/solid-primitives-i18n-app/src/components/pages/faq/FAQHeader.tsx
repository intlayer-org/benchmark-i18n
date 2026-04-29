import { t } from "../../../i18n";
import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {t("faq.header.title")}
      </h1>
      <p class="mb-10 text-muted-foreground">
        {t("faq.header.description")}
      </p>
    </>
  );
}
