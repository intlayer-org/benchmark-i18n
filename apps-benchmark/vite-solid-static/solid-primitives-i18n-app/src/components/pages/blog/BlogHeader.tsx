import MockBanner from "../../MockBanner";
import { t } from "../../../i18n";

export default function BlogHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {t("blog.header.title")}
      </h1>
      <p class="mb-10 text-muted-foreground">{t("blog.header.description")}</p>
    </>
  );
}
