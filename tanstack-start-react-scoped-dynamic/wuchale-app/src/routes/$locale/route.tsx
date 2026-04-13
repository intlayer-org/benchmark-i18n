import { createFileRoute, Outlet } from "@tanstack/react-router";
import { loadLocale } from "wuchale/load-utils";
import { createServerFn } from "@tanstack/react-start";

const initServerLoadersFn = createServerFn({ method: "GET" }).handler(
  async () => {
    const { initServerLoaders } = await import("../../i18n/loaders.server");
    await initServerLoaders();
  },
);

export const Route = createFileRoute("/$locale")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";

    // On the server, we need to populate the runtimes object
    await initServerLoadersFn();

    // Fetches the compiled catalog array and updates the runtime
    await loadLocale(locale);

    return { locale };
  },
  component: Outlet,
});
