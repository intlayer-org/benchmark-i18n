import React from "react";
import { TolgeeProvider } from "@tolgee/react";
import { Tolgee, FormatSimple } from "@tolgee/web";

const tolgee = Tolgee().use(FormatSimple()).init({ language: "en" });

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TolgeeProvider tolgee={tolgee}>{children}</TolgeeProvider>;
}
