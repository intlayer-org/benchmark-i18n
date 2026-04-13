import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">Careers</h1>
      <p className="mb-4 text-muted-foreground">
        from anywhere in the world
      </p>
    </>
  );
}
