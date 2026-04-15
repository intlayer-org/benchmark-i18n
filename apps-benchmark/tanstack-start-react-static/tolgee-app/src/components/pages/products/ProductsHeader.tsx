import { T } from "../../../i18n/config";
import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T keyName="productsHeader.products" defaultValue="Products" />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <T
          keyName="productsHeader.toolsAndServicesTo"
          defaultValue="Tools and services to help you optimize your internationalization strategy."
        />
      </p>
    </>
  );
}
