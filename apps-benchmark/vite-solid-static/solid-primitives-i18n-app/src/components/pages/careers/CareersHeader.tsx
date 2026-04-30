import MockBanner from "../../MockBanner";
import { t } from "../../../i18n";

export default function CareersHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {t("careers.header.title")}
      </h1>
      <p class="mb-4 text-muted-foreground">{t("careers.header.description")}</p>
    </>
  );
}
