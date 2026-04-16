"use client";

import { useI18n } from "../../../locales/client";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  const t = useI18n();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("team.team-header.ourTeam")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t("team.team-header.meetThePeopleBehindI18n")}
      </p>
    </>
  );
}
