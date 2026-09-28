import { useTranslations } from "use-intl";
import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  const t = useTranslations("careers-header");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">{t("title")}</h1>
      <p className="mb-4 text-muted-foreground">
        {t("joinOurMissionToImprove")}
      </p>
    </>
  );
}
