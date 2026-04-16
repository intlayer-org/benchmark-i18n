"use client";

import { useI18n } from "../../../locales/client";
import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  const t = useI18n();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("careers.careers-header.title")}
      </h1>
      <p className="mb-4 text-muted-foreground">
        {t("careers.careers-header.joinOurMissionToImprove")}
      </p>
    </>
  );
}
