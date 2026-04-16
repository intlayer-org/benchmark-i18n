"use client";

import { useScopedI18n } from "../locales/client";

const MockBanner = () => {
  const scopedT = useScopedI18n("mock-banner");
  return (
    <div className="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
      {scopedT("mockBanner")}
    </div>
  );
};

export default MockBanner;
