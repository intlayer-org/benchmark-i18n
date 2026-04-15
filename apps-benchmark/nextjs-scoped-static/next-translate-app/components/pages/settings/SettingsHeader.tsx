"use client";

import useTranslation from "next-translate/useTranslation";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  const { t } = useTranslation("common");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("settings.settingsHeader.settings")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {t("settings.settingsHeader.manageYourAccountPreferences")}
      </p>
    </>
  );
}
