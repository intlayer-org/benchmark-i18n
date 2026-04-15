import i18n from "#/i18n/i18n";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale")({
  beforeLoad: async ({ params }) => {
    if (params.locale && i18n.language !== params.locale) {
      await i18n.changeLanguage(params.locale);
    }
  },
  component: Outlet,
});
