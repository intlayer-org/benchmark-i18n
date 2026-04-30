import MockBanner from "../../MockBanner";
import { t } from "../../../i18n";

export default function ContactHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {t("contact.header.title")}
      </h1>
      <p class="mb-8 text-muted-foreground">
        {t("contact.header.description")}{" "}
        <a
          href="mailto:contact@intlayer.org"
          class="text-primary hover:underline"
        >
          {t("shared.contactEmail")}
        </a>
        .
      </p>
    </>
  );
}
