import { useTranslation } from "react-i18next";
import MockBanner from "../../MockBanner";

export default function ContactHeader() {
  const { t } = useTranslation();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("contactHeader.contactUs")}
      </h1>
      <p className="mb-8 text-muted-foreground">
        {t("contactHeader.haveQuestionsOrWantTo")}{" "}
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
