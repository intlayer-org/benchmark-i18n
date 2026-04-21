import React from "react";
import AppProviders from "../components/AppProviders";
import { LINGUI_ALL_NAMESPACES, loadNamespaces } from "../i18n/lingui";

export default async function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const enMessages = await loadNamespaces("en", LINGUI_ALL_NAMESPACES);
  return (
    <AppProviders locale="en" messages={enMessages}>
      {children}
    </AppProviders>
  );
}
