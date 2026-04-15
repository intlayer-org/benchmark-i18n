"use client";

import { Trans } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <Trans id="team-header.title" message="Our Team" />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <Trans
          id="team-header.subtitle"
          message="Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
        />
      </p>
    </>
  );
}
