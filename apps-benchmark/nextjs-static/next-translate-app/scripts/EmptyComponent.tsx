"use client";

import React from "react";
import { useParams } from "next/navigation";
import useTranslation from "next-translate/useTranslation";

export default function EmptyComponent() {
  const { t } = useTranslation("common");
  const params = useParams();
  const locale = (params.lang as string) ?? "en";

  void t;
  void locale;

  return <></>;
}
