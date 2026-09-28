import { useTranslations } from "use-intl";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  const tHeader = useTranslations("header");
  const tSettings = useTranslations("settings-header");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {tHeader("settings")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {tSettings("manageYourAccountPreferencesAnd")}
      </p>
    </>
  );
}
