import { T } from "gt-next";
import MockBanner from "../../MockBanner";

export default function TeamHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T>Our Team</T>
      </h1>
      <p className="mb-10 text-muted-foreground">
        <T>
          Meet the people behind i18n Benchmark. A diverse team united by a
          shared passion for great developer tools.
        </T>
      </p>
    </>
  );
}
