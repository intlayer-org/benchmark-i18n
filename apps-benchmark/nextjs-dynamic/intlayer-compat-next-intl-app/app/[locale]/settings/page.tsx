import dynamic from "next/dynamic";

const SettingsHeader = dynamic(() => import("../../../components/pages/settings/SettingsHeader"));
const ProfileSection = dynamic(() => import("../../../components/pages/settings/ProfileSection"));
const PreferencesSection = dynamic(() => import("../../../components/pages/settings/PreferencesSection"));
const ApiAccessSection = dynamic(() => import("../../../components/pages/settings/ApiAccessSection"));
const SettingsFooter = dynamic(() => import("../../../components/pages/settings/SettingsFooter"));

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
