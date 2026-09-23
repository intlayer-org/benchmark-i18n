import { createFileRoute, Outlet } from "@tanstack/react-router";
import { loadNamespaces } from "../../i18n/getMessages";

export const Route = createFileRoute("/$locale")({
  loader: ({ params }) =>
    loadNamespaces(params.locale, [
      "common",
      "header",
      "footer",
      "themeToggle",
      "route",
      "mockBanner",
    ]),
  component: Outlet,
});
