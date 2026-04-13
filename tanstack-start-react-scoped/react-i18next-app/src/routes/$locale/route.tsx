import i18n, { loadNamespaces } from "#/i18n/i18n";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    const locale = params.locale || "en";
    loadNamespaces(locale, ["shared", "route"]);
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  },
  component: Outlet,
});
