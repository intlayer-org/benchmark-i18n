import dynamic from "next/dynamic";
import LinguiPageCatalog from "../../../components/LinguiPageCatalog";
import { loadNamespaces } from "../../../i18n/lingui";

const ContactHeader = dynamic(() => import("../../../components/pages/contact/ContactHeader"));
const ContactForm = dynamic(() => import("../../../components/pages/contact/ContactForm"));

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const pageMessages = await loadNamespaces(locale, ["contact"]);

  return (
    <LinguiPageCatalog locale={locale} messages={pageMessages}>
      <div className="container py-16">
        <div className="mx-auto max-w-2xl">
          <ContactHeader />

          <ContactForm />
        </div>
      </div>
    </LinguiPageCatalog>
  );
}
