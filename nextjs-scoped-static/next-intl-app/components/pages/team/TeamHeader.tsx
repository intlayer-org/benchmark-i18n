"use client";

import { useTranslations } from "next-intl";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  const t = useTranslations();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("team-header.ourTeam")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t("team-header.meetThePeopleBehindI18n")}
      </p>
    </>
  );
}
