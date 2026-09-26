import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale")({
  loader: ({ params }) => ({ locale: params.locale || "en" }),
  component: Outlet,
});
