"use client";

import { useTranslation } from "react-i18next";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  const { t } = useTranslation();
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
