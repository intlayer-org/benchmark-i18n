import MockBanner from "../../MockBanner";
import { trans } from "../../../i18n";

export default function SettingsHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {trans("settings.header.title")}
      </h1>
      <p class="mb-8 text-muted-foreground">
        {trans("settings.header.description")}
      </p>
    </>
  );
}
