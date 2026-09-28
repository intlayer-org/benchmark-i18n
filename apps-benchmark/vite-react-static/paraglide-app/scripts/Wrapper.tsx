import React from "react";
import { setLocale } from "../src/paraglide/runtime";
import * as m from "../src/paraglide/messages";

setLocale("en", { reload: false });

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
