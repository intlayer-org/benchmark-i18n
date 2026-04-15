"use client";

import * as m from "../../../paraglide/messages";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {m["header.settings"]()}
      </h1>
      <p className="mb-8 text-muted-foreground mr-10">
        {m["settings-header.manageYourAccountPreferencesAnd"]()}
      </p>
    </>
  );
}
