import React from "react";
import { IntlProvider } from "use-intl";

// `use-intl` resolves to `@intlayer/use-intl` here (see compat-alias-plugin),
// so the provider needs no `messages` — dictionaries are compiled in.
export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <React.Suspense fallback={null}>
      <IntlProvider locale="en" timeZone="UTC" now={new Date("2024-01-01")}>
        {children}
      </IntlProvider>
    </React.Suspense>
  );
}
