import React from "react";
import AppProviders from "../components/AppProviders";
import { GTProvider } from "gt-next";

const locale = "en";

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GTProvider locale={locale}>
      <AppProviders locale={locale}>{children}</AppProviders>
    </GTProvider>
  );
}
