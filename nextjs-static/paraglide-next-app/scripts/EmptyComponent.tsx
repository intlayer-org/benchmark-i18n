import React from "react";
import { getLocale } from "../paraglide/runtime";

export default function EmptyComponent() {
  const locale = getLocale();

  void locale;

  return <></>;
}
