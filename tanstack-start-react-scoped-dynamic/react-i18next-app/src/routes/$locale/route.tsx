import { loadNamespaces } from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale")({
  loader: async ({ params, context }) => {
    const { i18n } = context;
    const locale = params.locale ?? defaultLocale;
    const resources = await loadNamespaces(locale, ["shared", "route"], i18n);
    await i18n.changeLanguage(locale);
    return { locale, resources };
  },
  component: Outlet,
});
