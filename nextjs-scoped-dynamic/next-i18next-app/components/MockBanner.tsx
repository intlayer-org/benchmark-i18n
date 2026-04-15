"use client";

import { useTranslation } from "react-i18next";

const MockBanner = () => {
  const { t } = useTranslation("shared");
  return (
    <div className="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
      {t("mockBanner.text")}
    </div>
  );
};

export default MockBanner;
