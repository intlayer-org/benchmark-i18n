import MockBanner from "../../MockBanner";

export default function ProductsHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">Products</h1>
      <p className="mb-10 text-muted-foreground">
        Tools and services to streamline your internationalization workflow.
      </p>
    </>
  );
}
