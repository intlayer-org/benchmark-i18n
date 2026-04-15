import i18n from "#/i18n/i18n";
import { defaultLocale } from "#/i18n/config";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$locale")({
  loader: async ({ params }) => {
    const locale = params.locale ?? defaultLocale;
    let resources: Record<string, unknown> | undefined;
    if (!i18n.hasResourceBundle(locale, "translation")) {
      const messages = await import(`../../i18n/locales/${locale}.json`);
      resources = messages.default as Record<string, unknown>;
      i18n.addResourceBundle(locale, "translation", resources);
    }
    await i18n.changeLanguage(locale);
    // Return resources so TanStack Router serialises them into the HTML.
    // The shellComponent reads this on the client before any component renders,
    // ensuring useTranslation() has data during hydration.
    return { locale, resources };
  },
  component: Outlet,
});
