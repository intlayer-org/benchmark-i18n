import { useLingui } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  const { i18n } = useLingui();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {i18n._({ id: "header.settings", message: "Settings" })}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {i18n._({ id: "settings-header.manageYourAccountPreferencesAnd", message: "Manage your account preferences and configuration." })}
      </p>
    </>
  );
}
