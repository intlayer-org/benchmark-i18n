

import { useIntlayer } from "next-intlayer/server";
import MockBanner from "../../MockBanner";

export default function ContactHeader() {
  const content = useIntlayer("contact-header");

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {content.getInTouch}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {content.haveIdeasFoundABug}{" "}
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
