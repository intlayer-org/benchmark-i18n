import dynamic from "next/dynamic";
import { type Namespace, type Locale } from "../../../i18n/config";
import { initI18next } from "../../../i18n/server";
import type { ResourceLanguage } from "i18next";
import AppProviders from "../../../components/AppProviders";

const ContactHeader = dynamic(() => import("../../../components/pages/contact/ContactHeader"));
const ContactForm = dynamic(() => import("../../../components/pages/contact/ContactForm"));

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageNamespaces: Namespace[] = ["contact"];
  const i18n = await initI18next(locale, pageNamespaces);

  const resources = Object.fromEntries(
    pageNamespaces.map((ns) => [ns, i18n.getResourceBundle(locale, ns)]),
  ) as Record<string, ResourceLanguage>;

  return (
    <AppProviders initialResources={resources}>
      <div className="container py-16">
        <div className="mx-auto max-w-2xl">
          <ContactHeader />

          <ContactForm />
        </div>
      </div>
    </AppProviders>
  );
}
