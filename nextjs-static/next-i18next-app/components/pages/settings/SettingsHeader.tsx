"use client";

import { useTranslation } from "react-i18next";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  const { t } = useTranslation();
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
