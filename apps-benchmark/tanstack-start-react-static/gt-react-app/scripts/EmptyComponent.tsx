import React from "react";
import { GTProvider,  } from "gt-tanstack-start";

const TestComponent = () => {
  
  return null;
};

export default function EmptyComponent() {
  return (
    <GTProvider locale="en" translations={{}}>
      <TestComponent />
    </GTProvider>
  );
}
