import { StrictMode, startTransition } from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";
import { loadLocale } from "wuchale/load-utils";
import { locales } from "./i18n/config";

// Mark the exact moment JavaScript execution reaches the entry point
if (
  typeof performance !== "undefined" &&
  typeof performance.mark === "function"
) {
  performance.mark("hydration_start");
}

async function mount() {
  // 1. Extract locale from the URL (matches your wuchale.config.js locales)
  const pathSegment = window.location.pathname.split("/")[1];

  const locale = locales.includes(pathSegment as any) ? pathSegment : "en";

  // 2. Block hydration until the client runtime is populated
  await loadLocale(locale);

  // 3. Hydrate
  startTransition(() => {
    hydrateRoot(
      document,
      <StrictMode>
        <StartClient />
      </StrictMode>,
    );
  });
}

mount();
