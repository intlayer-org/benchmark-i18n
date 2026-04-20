import { createFileRoute, Outlet } from "@tanstack/react-router";
import { tolgee } from "../../i18n/tolgee";
import { getMessages } from "../../i18n/getMessages";

export const Route = createFileRoute("/$locale")({
    const messages = await getMessages(params.locale, ["common", "header", "footer", "themeToggle", "route", "mockBanner"]);
    
    return { locale: params.locale, messages };
  },
  component: Outlet,
});
