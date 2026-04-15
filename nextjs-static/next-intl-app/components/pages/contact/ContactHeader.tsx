"use client";

import { useTranslations } from "next-intl";
import MockBanner from "../../MockBanner";

export default function ContactHeader() {
  const t = useTranslations();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("contact-header.getInTouch")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {t("contact-header.haveIdeasFoundABug")}{" "}
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
