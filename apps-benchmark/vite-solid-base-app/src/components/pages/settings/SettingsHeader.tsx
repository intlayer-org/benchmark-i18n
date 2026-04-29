import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">Settings</h1>
      <p class="mb-8 text-muted-foreground">
        Manage your account preferences and configuration.
      </p>
    </>
  );
}
