"use client";

import { T } from "@/i18n/tolgee";
import MockBanner from "@/components/MockBanner";

export default function TeamHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T keyName="teamHeader.ourTeam" defaultValue="Our Team" />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <T
          keyName="teamHeader.meetThePeopleBehindI18n"
          defaultValue="Meet the people behind i18n Benchmark. A diverse team united by a shared passion for great developer tools."
        />
      </p>
    </>
  );
}
