import { useIntl } from "react-intl";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  const intl = useIntl();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {intl.formatMessage({ id: "team-header.ourTeam" })}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {intl.formatMessage({ id: "team-header.meetThePeopleBehindI18n" })}
      </p>
    </>
  );
}
