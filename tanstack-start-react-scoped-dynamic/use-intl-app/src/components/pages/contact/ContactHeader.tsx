import { useTranslations } from "use-intl";
import MockBanner from "../../MockBanner";

export default function ContactHeader() {
  const t = useTranslations("contact-header");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">{t("getInTouch")}</h1>
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
