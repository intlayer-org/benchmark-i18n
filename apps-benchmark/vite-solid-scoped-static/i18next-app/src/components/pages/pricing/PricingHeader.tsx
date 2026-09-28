import MockBanner from "../../MockBanner";
import { trans } from "../../../i18n";

export default function PricingHeader() {
  return (
    <>
      <MockBanner />
      <div class="mb-12 text-center">
        <h1 class="mb-3 text-3xl font-bold text-foreground">
          {trans("pricing.header.title")}
        </h1>
        <p class="text-muted-foreground">
          {trans("pricing.header.description")}
        </p>
      </div>
    </>
  );
}
