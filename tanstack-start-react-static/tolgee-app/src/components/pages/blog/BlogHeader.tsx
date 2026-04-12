import { T } from "@tolgee/react";
import MockBanner from "../../MockBanner";

export default function BlogHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T keyName="blogHeader.blog" defaultValue="Blog" />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <T
          keyName="blogHeader.insightsTutorialsAndAnalysis"
          defaultValue="Insights, tutorials, and analysis from the i18n community."
        />
      </p>
    </>
  );
}
