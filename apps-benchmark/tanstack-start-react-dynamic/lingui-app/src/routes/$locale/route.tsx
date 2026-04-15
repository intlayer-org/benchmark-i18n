import { createFileRoute, Outlet } from "@tanstack/react-router";
import { getMessages } from "../../i18n/lingui";
import { defaultLocale } from "../../i18n/lingui";

export const Route = createFileRoute("/$locale")({
  loader: async ({ params }) => {
    const locale = params.locale ?? defaultLocale;
    const messages = await getMessages(locale, ["shared", "route"]);
    return { locale, messages };
  },
  component: Outlet,
});
