"use client";

import { Trans } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <Trans id="team-header.ourTeam" />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <Trans id="team-header.meetThePeopleBehindI18n" />
      </p>
    </>
  );
}
