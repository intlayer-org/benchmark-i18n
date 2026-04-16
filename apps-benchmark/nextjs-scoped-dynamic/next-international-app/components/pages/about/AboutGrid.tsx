"use client";

import { useScopedI18n } from "../../../locales/client";

export default function AboutGrid() {
  const scopedT = useScopedI18n("about-grid");
  const scopedFooterT = useScopedI18n("footer");
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {scopedT("whyThisExists")}
        </h2>
        <p className="text-sm text-muted-foreground">
          {scopedT("choosingAnI18nLibraryIs")}
        </p>
      </div>
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          {scopedFooterT("methodology")}
        </h2>
        <p className="text-sm text-muted-foreground">{scopedT("theSame10PageApp")}</p>
      </div>
    </div>
  );
}
