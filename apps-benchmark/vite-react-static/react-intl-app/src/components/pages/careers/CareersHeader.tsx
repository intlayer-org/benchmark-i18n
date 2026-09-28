import { useIntl } from "react-intl";
import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  const intl = useIntl();

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {intl.formatMessage({ id: "careers-header.title" })}
      </h1>
      <p className="mb-4 text-muted-foreground">
        {intl.formatMessage({ id: "careers-header.joinOurMissionToImprove" })}
      </p>
    </>
  );
}
