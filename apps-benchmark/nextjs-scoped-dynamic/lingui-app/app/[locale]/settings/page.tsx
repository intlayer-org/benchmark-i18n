import dynamic from "next/dynamic";
import LinguiPageCatalog from "../../../components/LinguiPageCatalog";
import { loadNamespaces } from "../../../i18n/lingui";

const SettingsHeader = dynamic(() => import("../../../components/pages/settings/SettingsHeader"));
const ProfileSection = dynamic(() => import("../../../components/pages/settings/ProfileSection"));
const PreferencesSection = dynamic(() => import("../../../components/pages/settings/PreferencesSection"));
const ApiAccessSection = dynamic(() => import("../../../components/pages/settings/ApiAccessSection"));
const SettingsFooter = dynamic(() => import("../../../components/pages/settings/SettingsFooter"));

export default async function Settings({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageMessages = await loadNamespaces(locale, ["settings"]);

  return (
    <LinguiPageCatalog locale={locale} messages={pageMessages}>
      <div className="container py-16">
        <SettingsHeader />

        <div className="mx-auto max-w-2xl space-y-8">
          <form className="space-y-8">
            <ProfileSection />

            <PreferencesSection />

            <ApiAccessSection />

            <SettingsFooter />
          </form>
        </div>
      </div>
    </LinguiPageCatalog>
  );
}
