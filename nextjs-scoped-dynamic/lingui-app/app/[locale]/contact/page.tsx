import dynamic from "next/dynamic";

const ContactHeader = dynamic(() => import("../../../components/pages/contact/ContactHeader"), {
  loading: () => <div className="h-48 animate-pulse bg-muted/20" />,
});
const ContactForm = dynamic(() => import("../../../components/pages/contact/ContactForm"), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />,
});

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
