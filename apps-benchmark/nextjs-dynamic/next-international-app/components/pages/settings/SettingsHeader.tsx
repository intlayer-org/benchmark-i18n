"use client";

import { useI18n } from "../../../locales/client";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  const t = useI18n();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("header.settings")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {t("settings.settings-header.manageYourAccountPreferencesAnd")}
      </p>
    </>
  );
}
