import React from "react";

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
