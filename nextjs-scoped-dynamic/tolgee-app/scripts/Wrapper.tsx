import React from "react";
import type { TolgeeStaticData } from "@tolgee/react";
import AppProviders from "../components/AppProviders";
import { getMessages } from "../i18n/getMessages";

const locale = "en";

export default async function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const staticData = (await getMessages(locale)) as unknown as TolgeeStaticData;
  return (
    <AppProviders locale={locale} staticData={staticData}>
      {children}
    </AppProviders>
  );
}
