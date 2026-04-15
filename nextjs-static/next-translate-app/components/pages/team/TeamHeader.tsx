"use client";

import useTranslation from "next-translate/useTranslation";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  const { t } = useTranslation("common");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("team.teamHeader.ourTeam")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t("team.teamHeader.meetThePeopleBehindI18n")}
      </p>
    </>
  );
}
