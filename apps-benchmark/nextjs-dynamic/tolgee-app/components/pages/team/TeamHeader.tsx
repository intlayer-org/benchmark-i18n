"use client";

import { T } from "@/i18n/tolgee";
import MockBanner from "@/components/MockBanner";

export default function TeamHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T keyName="teamHeader.ourTeam" />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <T
          keyName="teamHeader.meetThePeopleBehindI18n"
        />
      </p>
    </>
  );
}
