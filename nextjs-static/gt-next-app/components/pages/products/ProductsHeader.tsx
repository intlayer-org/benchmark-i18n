import { T } from "gt-next";
import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T>Products</T>
      </h1>
      <p className="mb-10 text-muted-foreground">
        <T>
          Tools and services to streamline your internationalization workflow.
        </T>
      </p>
    </>
  );
}
