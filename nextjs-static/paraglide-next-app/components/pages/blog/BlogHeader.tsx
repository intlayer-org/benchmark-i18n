"use client";

import * as m from "../../../paraglide/messages";
import MockBanner from "../../MockBanner";

export default function BlogHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {m["header.blog"]()}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {m["blog-header.insightsTutorialsAndAnalysisFrom"]()}
      </p>
    </>
  );
}
