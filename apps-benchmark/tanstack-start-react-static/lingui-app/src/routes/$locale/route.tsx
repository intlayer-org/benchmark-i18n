import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale")({
  loader: ({ params }) => {
    return { locale: params.locale };
  },
  component: Outlet,
});
