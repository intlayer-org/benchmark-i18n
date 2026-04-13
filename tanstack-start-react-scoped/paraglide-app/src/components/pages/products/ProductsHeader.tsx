import * as m from "../../../paraglide/messages";
import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {m["header.products"]()}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {m["products-header.toolsAndServicesToStreamline"]()}
      </p>
    </>
  );
}
