import { useTranslate } from "../../../i18n/tolgee";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  const { t } = useTranslate("teamHeader");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("ourTeam", "Our Team")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t(
          "meetThePeopleBehindI18n",
          "Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
        )}
      </p>
    </>
  );
}
