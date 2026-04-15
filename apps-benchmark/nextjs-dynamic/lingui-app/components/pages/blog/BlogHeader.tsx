"use client";

import { Trans } from "@lingui/react";
import { useLingui } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function BlogHeader() {
  const { i18n } = useLingui();

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <Trans id="header.blog" message="Blog" />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <Trans
          id="blog-header.insightsTutorialsAndAnalysisFrom"
          message="Insights, tutorials, and analysis from the i18n community."
        />
      </p>
    </>
  );
}
