import { T } from "../../../i18n/tolgee";
import MockBanner from "../../MockBanner";

export default function ContactHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T keyName="contactHeader.getInTouch" defaultValue="Get in Touch" />
      </h1>
      <p className="mb-8 text-muted-foreground">
        <T
          keyName="contactHeader.haveIdeasFoundABug"
          defaultValue="Have ideas, found a bug, or want to contribute a benchmark? Reach out to us at {email}."
          params={{
            email: (
              <a
                href="mailto:contact@intlayer.org"
                className="text-primary hover:underline"
              >
                contact@intlayer.org
              </a>
            ),
          }}
        />
      </p>
    </>
  );
}
