import { IntlayerServerProvider } from "next-intlayer/server";
import type { NextPageIntlayer } from "next-intlayer";
import {   } from "react";
import SettingsHeader from "@/components/pages/settings/SettingsHeader";
import ProfileSection from "@/components/pages/settings/ProfileSection";
import PreferencesSection from "@/components/pages/settings/PreferencesSection";
import ApiAccessSection from "@/components/pages/settings/ApiAccessSection";
import SettingsFooter from "@/components/pages/settings/SettingsFooter";

const Settings: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <div className="container py-16">
        <SettingsHeader />

        <div className="mx-auto max-w-2xl space-y-8">
          <div className="space-y-8">
            <ProfileSection />

            <PreferencesSection />

            <ApiAccessSection />

            <SettingsFooter />
          </div>
        </div>
      </div>
    </IntlayerServerProvider>
  );
};

export default Settings;
