"use client";

import { useTranslations } from "next-intl";

const MockBanner = () => {
  const t = useTranslations();
  return (
    <div className="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
      {t("mockBanner")}
    </div>
  );
};

export default MockBanner;
