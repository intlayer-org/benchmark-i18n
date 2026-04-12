import MockBanner from "../../MockBanner";

export default function FAQHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        Frequently Asked Questions
      </h1>
      <p className="mb-10 text-muted-foreground">
        Everything you need to know about i18n Benchmark.
      </p>
    </>
  );
}
