import { useIntl } from "react-intl";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  const intl = useIntl();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {intl.formatMessage({ id: "header.settings" })}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {intl.formatMessage({
          id: "settings-header.manageYourAccountPreferencesAnd",
        })}
      </p>
    </>
  );
}
