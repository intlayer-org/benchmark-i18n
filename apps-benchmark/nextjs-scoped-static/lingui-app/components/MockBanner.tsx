"use client";

import { useLingui } from "@lingui/react";

const MockBanner = () => {
  const { i18n } = useLingui();
  return (
    <div className="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
      {i18n._("mockBanner")}
    </div>
  );
};

export default MockBanner;
