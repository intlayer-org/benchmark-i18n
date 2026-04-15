import React from "react";
import { useParams } from "@tanstack/react-router";

export default function EmptyComponent() {
  const params = useParams({ strict: false });
  const locale = params.locale ?? "en";

  void locale;

  return <></>;
}
