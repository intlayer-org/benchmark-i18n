"use client";

import { useTranslations } from "next-intl";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  const tHeader = useTranslations();
  const tSettings = useTranslations("settings-header");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {tHeader("header.settings")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {tSettings("manageYourAccountPreferencesAnd")}
      </p>
    </>
  );
}
