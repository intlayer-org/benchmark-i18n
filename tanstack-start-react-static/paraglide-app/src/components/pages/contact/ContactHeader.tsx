import * as m from "../../../paraglide/messages";
import MockBanner from "../../MockBanner";

export default function ContactHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {m["contact-header.getInTouch"]()}
      </h1>
      <p className="mb-8 text-muted-foreground mr-10">
        {m["contact-header.haveIdeasFoundABug"]()}{" "}
        <a
          href="mailto:contact@intlayer.org"
          className="text-primary hover:underline"
        >
          contact@intlayer.org
        </a>
        .
      </p>
    </>
  );
}
