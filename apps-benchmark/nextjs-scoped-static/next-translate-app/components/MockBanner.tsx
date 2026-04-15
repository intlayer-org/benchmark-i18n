"use client";

import useTranslation from "next-translate/useTranslation";

const MockBanner = () => {
  const { t } = useTranslation("common");
  return (
    <div className="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
      {t("shared.mockBanner.text")}
    </div>
  );
};

export default MockBanner;
