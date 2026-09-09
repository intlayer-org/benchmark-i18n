import { createFileRoute, Outlet } from "@tanstack/react-router";
import { tolgee } from "../../i18n/tolgee";

export const Route = createFileRoute("/$locale")({
  loader: async ({ params }) => {
    await tolgee.loadRecords([
      { language: params.locale, namespace: "common" },
      { language: params.locale, namespace: "header" },
      { language: params.locale, namespace: "footer" },
      { language: params.locale, namespace: "themeToggle" },
      { language: params.locale, namespace: "route" },
      { language: params.locale, namespace: "mockBanner" },
    ]);
  },
  component: Outlet,
});
