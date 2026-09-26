"use client";

import useTranslation from "next-translate/useTranslation";
import MockBanner from "../../MockBanner";

export default function ContactHeader() {
  const { t } = useTranslation("common");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("contact.contactHeader.getInTouch")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {t("contact.contactHeader.haveIdeasFoundABug")}{" "}
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
