import * as m from "../../../paraglide/messages";
import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {m.careers_header_title()}
      </h1>
      <p class="mb-4 text-muted-foreground">
        {m.careers_header_description()}
      </p>
    </>
  );
}

