import { LingoProvider } from "@lingo.dev/compiler/react";
import { locale } from "react-intlayer/server";

export default function EmptyComponent() {
  return <LingoProvider initialLocale={locale as "en"}>{}</LingoProvider>;
}
