import * as m from "../../../paraglide/messages";
import MockBanner from "../../MockBanner";

export default function SettingsHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">{m.settings_header_title()}</h1>
      <p class="mb-8 text-muted-foreground">
        {m.settings_header_description()}
      </p>
    </>
  );
}

