"use client";

import { Trans } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <Trans id="settings-header.title" message="Settings" />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <Trans
          id="settings-header.subtitle"
          message="Manage your account preferences and configuration."
        />
      </p>
    </>
  );
}
