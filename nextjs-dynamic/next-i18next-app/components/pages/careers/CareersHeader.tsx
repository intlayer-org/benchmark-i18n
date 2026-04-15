"use client";

import { useTranslation } from "react-i18next";
import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  const { t } = useTranslation();
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {t("careers.careersHeader.careers")}
      </h1>
      <p className="mb-4 text-muted-foreground">
        {t("careers.careersHero.fromAnywhere")}
      </p>
    </>
  );
}
