import dynamic from "next/dynamic";

const ContactHeader = dynamic(() => import("../../../components/pages/contact/ContactHeader"));
const ContactForm = dynamic(() => import("../../../components/pages/contact/ContactForm"));

export default function Contact() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl">
        <ContactHeader />

        <ContactForm />
      </div>
    </div>
  );
}
