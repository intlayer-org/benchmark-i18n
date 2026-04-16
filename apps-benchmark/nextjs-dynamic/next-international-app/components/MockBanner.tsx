"use client";

import { useI18n } from "../locales/client";

const MockBanner = () => {
  const t = useI18n();
  return (
    <div className="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
      {t("mockBanner")}
    </div>
  );
};

export default MockBanner;
