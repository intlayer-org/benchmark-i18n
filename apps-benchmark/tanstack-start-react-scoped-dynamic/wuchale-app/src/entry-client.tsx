import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";
import { loadLocale } from "wuchale/load-utils";

// Mark the exact moment JavaScript execution reaches the entry point
if (
  typeof performance !== "undefined" &&
  typeof performance.mark === "function"
) {
  performance.mark("hydration_start");
}

async function hydrateApp() {
  // Extract locale directly from the URL path.
  const pathParts = window.location.pathname.split("/");
  const locale = pathParts[1] || "en";

  // Force wuchale runtime to populate BEFORE React hydrates
  await loadLocale(locale);

  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <StartClient />
      </StrictMode>,
    );
  });
}

hydrateApp();
