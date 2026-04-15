import { createFileRoute, Outlet } from "@tanstack/react-router";
import {loadTranslations} from "../../../loadTranslations";

export const Route = createFileRoute("/$locale")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";
    const translations =  loadTranslations(locale);
    return { locale, translations };
  },
  component: Outlet,
});
