"use client";

import { useScopedI18n } from "../../../locales/client";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  const scopedNavT = useScopedI18n("header");
  const scopedT = useScopedI18n("settings-header");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {scopedNavT("settings")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {scopedT("manageYourAccountPreferencesAnd")}
      </p>
    </>
  );
}
