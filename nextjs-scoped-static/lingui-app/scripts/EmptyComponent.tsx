import React from "react";
import { useLingui } from "@lingui/react";

export default function EmptyComponent() {
  const { _, i18n } = useLingui();

  void _;
  void i18n.locale;

  return <></>;
}
