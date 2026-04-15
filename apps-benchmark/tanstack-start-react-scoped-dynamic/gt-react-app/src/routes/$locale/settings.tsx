import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { GTProvider } from "gt-tanstack-start";
import { Route as LocaleRoute } from "./route";
import loadTranslations from "../../../loadTranslations";

const SettingsHeader = lazy(
  () => import("../../components/pages/settings/SettingsHeader"),
);
const ProfileSection = lazy(
  () => import("../../components/pages/settings/ProfileSection"),
);
const PreferencesSection = lazy(
  () => import("../../components/pages/settings/PreferencesSection"),
);
const ApiAccessSection = lazy(
  () => import("../../components/pages/settings/ApiAccessSection"),
);
const SettingsFooter = lazy(
  () => import("../../components/pages/settings/SettingsFooter"),
);

export const Route = createFileRoute("/$locale/settings")({
  loader: async ({ params }) => {
    const locale = params.locale || "en";
    const translations = await loadTranslations(locale, ["settings"]);
    return { translations };
  },
  component: Settings,
});

function Settings() {
  const { locale } = LocaleRoute.useLoaderData();
  const { translations } = Route.useLoaderData();

  return (
    <GTProvider locale={locale} translations={translations}>
      <div className="container py-16">
        <Suspense fallback={<div className="h-24 animate-pulse bg-muted/20" />}>
          <SettingsHeader />
        </Suspense>

        <div className="mx-auto max-w-2xl space-y-8">
          <form className="space-y-8" >
            <Suspense
              fallback={<div className="h-48 animate-pulse bg-muted/20" />}
            >
              <ProfileSection />
            </Suspense>

            <Suspense
              fallback={<div className="h-64 animate-pulse bg-muted/20" />}
            >
              <PreferencesSection />
            </Suspense>

            <Suspense
              fallback={<div className="h-40 animate-pulse bg-muted/20" />}
            >
              <ApiAccessSection />
            </Suspense>

            <Suspense
              fallback={<div className="h-10 animate-pulse bg-muted/20" />}
            >
              <SettingsFooter />
            </Suspense>
          </form>
        </div>
      </div>
    </GTProvider>
  );
}
