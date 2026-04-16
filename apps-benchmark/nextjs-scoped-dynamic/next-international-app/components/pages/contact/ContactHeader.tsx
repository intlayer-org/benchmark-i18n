"use client";

import { useScopedI18n } from "../../../locales/client";
import MockBanner from "../../MockBanner";

export default function ContactHeader() {
  const scopedT = useScopedI18n("contact-header");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {scopedT("getInTouch")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {scopedT("haveIdeasFoundABug")}{" "}
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
