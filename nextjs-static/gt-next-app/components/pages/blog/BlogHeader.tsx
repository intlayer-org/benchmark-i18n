import { T } from "gt-next";
import MockBanner from "../../MockBanner";

export default function BlogHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T>Blog</T>
      </h1>
      <p className="mb-10 text-muted-foreground">
        <T>Insights, tutorials, and analysis from the i18n community.</T>
      </p>
    </>
  );
}
