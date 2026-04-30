import * as m from "../../../paraglide/messages";
import MockBanner from "../../MockBanner";

export default function BlogHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">{m.blog_header_title()}</h1>
      <p class="mb-10 text-muted-foreground">
        {m.blog_header_description()}
      </p>
    </>
  );
}

