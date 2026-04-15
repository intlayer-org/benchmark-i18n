import { T } from "gt-next";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T>Settings</T>
      </h1>
      <p className="mb-8 text-muted-foreground">
        <T>Manage your account preferences and configuration.</T>
      </p>
    </>
  );
}
