import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";

// Mark the exact moment JavaScript execution reaches the entry point
if (
  typeof performance !== "undefined" &&
  typeof performance.mark === "function"
) {
  performance.mark("hydration_start");
}

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <StartClient />
    </StrictMode>,
  );
});
