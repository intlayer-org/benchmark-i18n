import React from "react";
import AppProviders from "../components/AppProviders";
import { getMessages } from "../i18n/getMessages";
import type { TolgeeStaticData } from "@tolgee/react";

const locale = "en";
const staticData = getMessages(locale) as unknown as TolgeeStaticData;

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders locale={locale} staticData={staticData}>
      {children}
    </AppProviders>
  );
}
