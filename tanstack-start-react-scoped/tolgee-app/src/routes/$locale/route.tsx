import { createFileRoute, Outlet } from "@tanstack/react-router";
import { tolgee } from "../../i18n/tolgee";
import { getMessages } from "../../i18n/getMessages";

export const Route = createFileRoute("/$locale")({
  loader: async ({ params }) => {
    // Change the language before React renders the route
    if (tolgee.getLanguage() !== params.locale) {
      await tolgee.changeLanguage(params.locale);
    }
    // Load common namespaces
    await tolgee.loadRecords([{ language: params.locale, namespace: "shared" }]);

    const messages = getMessages(params.locale);
    return { locale: params.locale, messages };
  },
  component: Outlet,
});
