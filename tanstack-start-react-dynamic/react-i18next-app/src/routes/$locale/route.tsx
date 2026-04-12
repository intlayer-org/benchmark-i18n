import i18n from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale")({
  loader: async ({ params }) => {
    const locale = params.locale ?? defaultLocale;
    if (!i18n.hasResourceBundle(locale, "translation")) {
      const messages = await import(`../i18n/locales/${locale}.json`);
      i18n.addResourceBundle(locale, "translation", messages.default);
    }
    await i18n.changeLanguage(locale);
    return { locale };
  },
  component: Outlet,
});
