import React from "react";
import { GTProvider, T } from "gt-next";

const TestComponent = () => {
  return <T>test</T>;
};

export default function EmptyWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GTProvider>
      <TestComponent />
      {children}
    </GTProvider>
  );
}
