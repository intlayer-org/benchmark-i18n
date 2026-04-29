import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">Careers</h1>
      <p className="mb-4 text-muted-foreground">
        Join our mission to improve the internationalization ecosystem. We're a
        remote-first team that values impact, transparency, and continuous
        learning.
      </p>
    </>
  );
}
