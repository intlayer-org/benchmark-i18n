

import { useIntlayer } from "next-intlayer/server";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  const content = useIntlayer("settings-header");

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {content.settings}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {content.manageYourAccountPreferencesAnd}
      </p>
    </>
  );
}
