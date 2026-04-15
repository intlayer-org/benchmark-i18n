import React from "react";
import AppProviders from "../src/components/AppProviders";

export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppProviders locale="en">{children}</AppProviders>;
}
