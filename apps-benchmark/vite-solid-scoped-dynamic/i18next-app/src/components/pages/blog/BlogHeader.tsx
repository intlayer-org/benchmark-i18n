import MockBanner from "../../MockBanner";
import { trans } from "../../../i18n";

export default function BlogHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {trans("blog.header.title")}
      </h1>
      <p class="mb-10 text-muted-foreground">{trans("blog.header.description")}</p>
    </>
  );
}
