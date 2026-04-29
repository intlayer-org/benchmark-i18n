import { lazy, Suspense } from "solid-js";

const SettingsHeader = lazy(
  () => import("../components/pages/settings/SettingsHeader"),
);
const ProfileSection = lazy(
  () => import("../components/pages/settings/ProfileSection"),
);
const PreferencesSection = lazy(
  () => import("../components/pages/settings/PreferencesSection"),
);
const ApiAccessSection = lazy(
  () => import("../components/pages/settings/ApiAccessSection"),
);
const SettingsFooter = lazy(
  () => import("../components/pages/settings/SettingsFooter"),
);

export default function Settings() {
  return (
    <div class="container py-16">
      <Suspense fallback={<div class="h-24 animate-pulse bg-muted/20" />}>
        <SettingsHeader />
      </Suspense>

      <div class="mx-auto max-w-2xl space-y-8">
        <form class="space-y-8">
          <Suspense
            fallback={<div class="h-48 animate-pulse bg-muted/20" />}
          >
            <ProfileSection />
          </Suspense>

          <Suspense
            fallback={<div class="h-64 animate-pulse bg-muted/20" />}
          >
            <PreferencesSection />
          </Suspense>

          <Suspense
            fallback={<div class="h-40 animate-pulse bg-muted/20" />}
          >
            <ApiAccessSection />
          </Suspense>

          <Suspense
            fallback={<div class="h-10 animate-pulse bg-muted/20" />}
          >
            <SettingsFooter />
          </Suspense>
        </form>
      </div>
    </div>
  );
}
