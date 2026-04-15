import React from "react";
import { LingoProvider } from "@lingo.dev/compiler/react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <LingoProvider initialLocale="en">
      {children}
    </LingoProvider>
  );
}
