import { lazy, Suspense } from "solid-js";
import { useNamespace } from "../i18n";

useNamespace(
  import.meta.glob<Record<string, unknown>>("../../locales/*/contact.json", {
    eager: true,
    import: "default",
  }),
);

const ContactHeader = lazy(
  () => import("../components/pages/contact/ContactHeader"),
);
const ContactForm = lazy(() => import("../components/pages/contact/ContactForm"));

export default function Contact() {
  return (
    <div class="container py-16">
      <div class="mx-auto max-w-2xl">
        <Suspense fallback={<div class="h-48 animate-pulse bg-muted/20" />}>
          <ContactHeader />
        </Suspense>

        <Suspense fallback={<div class="h-96 animate-pulse bg-muted/20" />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
