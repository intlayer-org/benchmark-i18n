import { T } from "../../../i18n/tolgee";
import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T keyName="careersHeader.careers" defaultValue="Careers" />
      </h1>
      <p className="mb-4 text-muted-foreground">
        <T
          keyName="careersHeader.joinOurMission"
          defaultValue="Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
        />
      </p>
    </>
  );
}
