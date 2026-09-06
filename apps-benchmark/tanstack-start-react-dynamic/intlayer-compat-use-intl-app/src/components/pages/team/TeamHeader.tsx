import { useTranslations } from "use-intl";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  const t = useTranslations("team-header");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("ourTeam")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t("meetThePeopleBehindI18n")}
      </p>
    </>
  );
}
