import React from "react";
import { setLocale } from "../src/paraglide/runtime";

setLocale("en", { reload: false });

export default function LibWrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
