import { tolgee } from "../../i18n/tolgee";
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
    await tolgee.loadRecords([
      { language: params.locale, namespace: "settings" },
      { language: params.locale, namespace: "settingsHeader" },
      { language: params.locale, namespace: "profileSection" },
      { language: params.locale, namespace: "preferencesSection" },
      { language: params.locale, namespace: "apiAccessSection" },
      { language: params.locale, namespace: "settingsFooter" },
    ]);
  },
  component: Settings,
});

function Settings() {
  return (
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
  );
}
