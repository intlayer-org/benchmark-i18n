import React from "react";
import AppProviders from "../components/AppProviders";

const locale = "en";

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders locale={locale}>
      {children}
    </AppProviders>
  );
}
