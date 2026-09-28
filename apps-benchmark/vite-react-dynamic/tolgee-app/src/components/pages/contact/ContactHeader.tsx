import { useTranslate } from "../../../i18n/tolgee";
import MockBanner from "../../MockBanner";

export default function ContactHeader() {
  const { t } = useTranslate();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("contactHeader.getInTouch")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {t("contactHeader.haveIdeasFoundABug")}{" "}
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
