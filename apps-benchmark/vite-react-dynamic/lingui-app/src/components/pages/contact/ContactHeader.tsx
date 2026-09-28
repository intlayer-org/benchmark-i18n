import { useLingui } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function ContactHeader() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`contact-header.${id}`);

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("getInTouch")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {t("haveIdeasFoundABug")}{" "}
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
