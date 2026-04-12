import { createFileRoute, Outlet } from "@tanstack/react-router";
import { loadLocale } from "wuchale/load-utils";

export const Route = createFileRoute("/$locale")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";

    // Fetches the compiled catalog array and updates the runtime
    await loadLocale(locale);

    return { locale };
  },
  component: Outlet,
});
