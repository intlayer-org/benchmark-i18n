import React from "react";
import { getLocale } from "../src/paraglide/runtime";

export default function EmptyComponent() {
  const locale = getLocale();

  void locale;

  return <></>;
}
