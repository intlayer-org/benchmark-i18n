import dynamic from "next/dynamic";
import { type Namespace, type Locale } from "../../../i18n/config";
import { initI18next } from "../../../i18n/server";
import type { ResourceLanguage } from "i18next";
import AppProviders from "../../../components/AppProviders";

const SettingsHeader = dynamic(() => import("../../../components/pages/settings/SettingsHeader"));
const ProfileSection = dynamic(() => import("../../../components/pages/settings/ProfileSection"));
const PreferencesSection = dynamic(
  () => import("../../../components/pages/settings/PreferencesSection"),
);
const ApiAccessSection = dynamic(
  () => import("../../../components/pages/settings/ApiAccessSection"),
);
const SettingsFooter = dynamic(() => import("../../../components/pages/settings/SettingsFooter"));

export default async function Settings({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageNamespaces: Namespace[] = ["settings"];
  const i18n = await initI18next(locale, pageNamespaces);

  const resources = Object.fromEntries(
    pageNamespaces.map((ns) => [ns, i18n.getResourceBundle(locale, ns)]),
  ) as Record<string, ResourceLanguage>;

  return (
    <AppProviders initialResources={resources}>
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
    </AppProviders>
  );
}
