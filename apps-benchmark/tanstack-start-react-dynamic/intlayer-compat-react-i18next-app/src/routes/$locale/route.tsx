import i18n from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale")({
  loader: async ({ params }) => {
    const locale = params.locale ?? defaultLocale;
    // `i18next` resolves to `@intlayer/i18next` here: dictionaries are pulled in
    // per component on demand (`importMode: "dynamic"`), so there is no
    // per-locale catalog left to import or `addResourceBundle()`.
    if (i18n.language !== locale) {
      await i18n.changeLanguage(locale);
    }
    return { locale };
  },
  component: Outlet,
});
