import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale")({
  loader: async ({ params }) => {
    const { getMessages } = await import("../../i18n/lingui");
    const messages = await getMessages(params.locale || "en", ["shared", "route"]);
    return { locale: params.locale, messages };
  },
  component: Outlet,
});
