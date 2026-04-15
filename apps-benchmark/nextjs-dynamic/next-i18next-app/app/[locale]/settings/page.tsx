import dynamic from "next/dynamic";

const SettingsHeader = dynamic(() => import("../../../components/pages/settings/SettingsHeader"), {
  loading: () => <div className="h-24 animate-pulse bg-muted/20" />,
});
const ProfileSection = dynamic(() => import("../../../components/pages/settings/ProfileSection"), {
  loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
});
const PreferencesSection = dynamic(() => import("../../../components/pages/settings/PreferencesSection"), {
  loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
});
const ApiAccessSection = dynamic(() => import("../../../components/pages/settings/ApiAccessSection"), {
  loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
});
const SettingsFooter = dynamic(() => import("../../../components/pages/settings/SettingsFooter"), {
  loading: () => <div className="h-64 animate-pulse bg-muted/20" />,
});

export default function Settings() {
  return (
    <div className="container py-16">
      <SettingsHeader />

      <div className="mx-auto max-w-2xl space-y-8">
        <form className="space-y-8" >
          <ProfileSection />

          <PreferencesSection />

          <ApiAccessSection />

          <SettingsFooter />
        </form>
      </div>
    </div>
  );
}
