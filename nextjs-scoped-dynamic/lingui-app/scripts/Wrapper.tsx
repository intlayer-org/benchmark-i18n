import React from "react";
import AppProviders from "../components/AppProviders";
import { getMessages, LINGUI_ALL_NAMESPACES } from "../i18n/lingui";

export default async function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const enMessages = await getMessages("en", [...LINGUI_ALL_NAMESPACES]);
  return (
    <AppProviders locale="en" messages={enMessages}>
      {children}
    </AppProviders>
  );
}
