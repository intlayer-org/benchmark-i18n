import dynamic from "next/dynamic";
import { getMessages } from "@/i18n/getMessages";
import TolgeePageHydrator from "@/components/TolgeePageHydrator";

const ContactHeader = dynamic(() => import("../../../components/pages/contact/ContactHeader"));
const ContactForm = dynamic(() => import("../../../components/pages/contact/ContactForm"));

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale, [
    "contact",
    "contactHeader",
    "contactForm",
  ]);

  return (
    <TolgeePageHydrator locale={locale} messages={messages}>
      <div className="container py-16">
        <div className="mx-auto max-w-2xl">
          <ContactHeader />

          <ContactForm />
        </div>
      </div>
    </TolgeePageHydrator>
  );
}
