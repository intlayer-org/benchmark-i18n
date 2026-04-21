"use client";

import useTranslation from "next-translate/useTranslation";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  const { t } = useTranslation("settings");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("settingsHeader.settings")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {t("settingsHeader.manageYourAccountPreferences")}
      </p>
    </>
  );
}
