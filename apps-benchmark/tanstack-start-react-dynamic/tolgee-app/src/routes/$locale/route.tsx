import { createFileRoute, Outlet } from "@tanstack/react-router";
import { getMessages } from "../../i18n/getMessages";
import { defaultLocale } from "../../i18n/config";

export const Route = createFileRoute("/$locale")({
  loader: async ({ params }) => {
    const locale = params.locale ?? defaultLocale;
    const messages = await getMessages(locale);
    return { locale, messages };
  },
  component: Outlet,
});
