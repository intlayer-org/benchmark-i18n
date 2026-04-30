import MockBanner from "../../MockBanner";
import { t } from "../../../i18n";

export default function SettingsHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {t("settings.header.title")}
      </h1>
      <p class="mb-8 text-muted-foreground">
        {t("settings.header.description")}
      </p>
    </>
  );
}
