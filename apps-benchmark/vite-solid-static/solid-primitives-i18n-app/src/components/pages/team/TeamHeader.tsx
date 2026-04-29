import { t } from "../../../i18n";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {t("team.header.title")}
      </h1>
      <p class="mb-10 text-muted-foreground">
        {t("team.header.description")}
      </p>
    </>
  );
}
