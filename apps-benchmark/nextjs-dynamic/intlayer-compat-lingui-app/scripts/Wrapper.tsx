import React from "react";
import AppProviders from "../components/AppProviders";

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProviders locale="en" messages={{}}>
      {children}
    </AppProviders>
  );
}
