"use client";

import * as m from "../../../paraglide/messages";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {m["team-header.ourTeam"]()}
      </h1>
      <p className="mb-10 text-muted-foreground mr-10">
        {m["team-header.meetThePeopleBehindI18n"]()}
      </p>
    </>
  );
}
