import { useMemo } from "react";
import { I18nProvider } from "@lingui/react";
import { getMessages, initLingui } from "../../i18n/lingui";
import { Route as LocaleRoute } from "./route";
import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

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
    const messages = await getMessages(params.locale || "en", ["settings"]);
    return { messages };
  },
  component: Settings,
});

function Settings() {
  
  const rootData = LocaleRoute.useLoaderData();
  const pageData = Route.useLoaderData();
  const mergedMessages = { ...rootData.messages, ...pageData.messages };
  const i18n = useMemo(() => initLingui(rootData.locale, mergedMessages), [rootData.locale, mergedMessages]);

  return (
    <I18nProvider i18n={i18n}>
      <div className="container py-16">
      <Suspense fallback={<div className="h-24 animate-pulse bg-muted/20" />}>
        <SettingsHeader />
      </Suspense>

      <div className="mx-auto max-w-2xl space-y-8">
        <form className="space-y-8">
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
    </I18nProvider>
  );
}
