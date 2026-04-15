import { T } from "../../../i18n/config";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T keyName="settingsHeader.settings" defaultValue="Settings" />
      </h1>
      <p className="mb-8 text-muted-foreground">
        <T
          keyName="settingsHeader.manageYourAccount"
          defaultValue="Manage your account preferences and configuration."
        />
      </p>
    </>
  );
}
