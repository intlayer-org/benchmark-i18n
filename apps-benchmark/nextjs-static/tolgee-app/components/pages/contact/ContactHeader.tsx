"use client";

import { T } from "@/i18n/tolgee";
import MockBanner from "@/components/MockBanner";

export default function ContactHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T keyName="contactHeader.getInTouch" />
      </h1>
      <p className="mb-8 text-muted-foreground">
        <T
          keyName="contactHeader.haveIdeasFoundABug"
          params={{
            email: (
              <a
                href="mailto:contact@intlayer.org"
                className="text-primary hover:underline"
              >
                contact@intlayer.org
              </a>
            ),
          }}
        />
      </p>
    </>
  );
}
