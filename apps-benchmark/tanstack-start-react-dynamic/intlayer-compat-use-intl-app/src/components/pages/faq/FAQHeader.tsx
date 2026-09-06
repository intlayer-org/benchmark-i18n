import { useTranslations } from "use-intl";
import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  const t = useTranslations("faq-header1");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("frequentlyAskedQuestions")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t("everythingYouNeedToKnow")}
      </p>
    </>
  );
}
