import { useLingui } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`careers-header.${id}`);

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("title")}
      </h1>
      <p className="mb-4 text-muted-foreground">
        {t("joinOurMissionToImprove")}
      </p>
    </>
  );
}
