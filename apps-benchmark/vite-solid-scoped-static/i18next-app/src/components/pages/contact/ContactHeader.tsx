import MockBanner from "../../MockBanner";
import { trans } from "../../../i18n";

export default function ContactHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {trans("contact.header.title")}
      </h1>
      <p class="mb-8 text-muted-foreground">
        {trans("contact.header.description")}{" "}
        <a
          href="mailto:contact@intlayer.org"
          class="text-primary hover:underline"
        >
          {trans("shared.contactEmail")}
        </a>
        .
      </p>
    </>
  );
}
