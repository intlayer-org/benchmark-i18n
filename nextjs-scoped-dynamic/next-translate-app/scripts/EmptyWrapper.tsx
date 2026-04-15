import React from "react";
import AppProviders from "../components/AppProviders";

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppProviders locale="en">{children}</AppProviders>;
}
