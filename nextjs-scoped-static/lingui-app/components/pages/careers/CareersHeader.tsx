"use client";

import { Trans } from "@lingui/react";
import { useLingui } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  const { i18n } = useLingui();

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <Trans id="careers-header.title" message="Careers" />
      </h1>
      <p className="mb-4 text-muted-foreground">
        <Trans
          id="careers-header.joinOurMissionToImprove"
          message="Join our mission to improve the internationalization ecosystem. We're a remote-first team that values impact, transparency, and continuous learning."
        />
      </p>
    </>
  );
}
