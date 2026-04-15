import { T } from "gt-next";
import MockBanner from "../../MockBanner";

export default function ContactHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T>Get in Touch</T>
      </h1>
      <p className="mb-8 text-muted-foreground">
        <T>
          Have ideas, found a bug, or want to contribute a benchmark? Reach out
          to us at{" "}
          <a
            href="mailto:contact@intlayer.org"
            className="text-primary hover:underline"
          >
            contact@intlayer.org
          </a>
          .
        </T>
      </p>
    </>
  );
}
