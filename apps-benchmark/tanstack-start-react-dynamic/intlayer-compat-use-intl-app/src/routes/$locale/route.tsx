import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { defaultLocale, locales } from "../../i18n/config";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    const locale = params.locale;
    // If a prefix exists but isn't valid, throw a 404
    if (locale && !locales.includes(locale as (typeof locales)[number])) {
      throw notFound();
    }
  },
  // `IntlProvider` is aliased to the compat adapter, which serves messages from
  // the compiled intlayer dictionaries — the loader only forwards the locale.
  loader: ({ params }) => {
    const locale = params.locale ?? defaultLocale;
    return { locale };
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  return <Outlet />;
}
