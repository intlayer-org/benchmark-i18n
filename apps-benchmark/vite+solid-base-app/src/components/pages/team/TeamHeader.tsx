import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  return (
    <>
      <MockBanner />
      <h1 class="mb-2 text-3xl font-bold text-foreground">Our Team</h1>
      <p class="mb-10 text-muted-foreground">
        Meet the people behind i18n Benchmark. A diverse team united by a shared
        passion for great developer tools.
      </p>
    </>
  );
}
