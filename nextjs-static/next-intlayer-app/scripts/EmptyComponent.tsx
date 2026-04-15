import React from "react";
import { useLocale } from "next-intlayer";
import { useIntlayer } from "next-intlayer/server";

export default function EmptyComponent() {
  const content = useIntlayer("route" as never);
  const { locale } = useLocale();

  void content;
  void locale;

  return <></>;
}
