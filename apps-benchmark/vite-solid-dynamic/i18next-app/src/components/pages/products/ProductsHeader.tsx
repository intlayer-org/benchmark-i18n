import MockBanner from "../../MockBanner";
import { trans } from "../../../i18n";

export default function ProductsHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">
        {trans("products.header.title")}
      </h1>
      <p class="mb-10 text-muted-foreground">
        {trans("products.header.description")}
      </p>
    </>
  );
}
