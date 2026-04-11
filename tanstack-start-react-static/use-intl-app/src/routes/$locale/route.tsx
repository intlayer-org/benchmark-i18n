import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { getMessages } from "../../i18n/getMessages";
import { defaultLocale, locales } from "../../i18n/config";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    const locale = params.locale;
    // If a prefix exists but isn't valid, throw a 404
    if (locale && !locales.includes(locale as (typeof locales)[number])) {
      throw notFound();
    }
  },
  loader: async ({ params }) => {
    const locale = params.locale ?? defaultLocale;
    const messages = await getMessages(locale);
    return { locale, messages };
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  return <Outlet />;
}
