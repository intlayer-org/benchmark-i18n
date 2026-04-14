import * as m from "../../../paraglide/messages";
import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {m["careers-header.title"]()}
      </h1>
      <p className="mb-4 text-muted-foreground mr-10">
        {m["careers-header.joinOurMissionToImprove"]()}
      </p>
    </>
  );
}
