import { T } from "../../../i18n/tolgee";
import MockBanner from "../../MockBanner";

export default function BlogHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        <T keyName="blogHeader.blog" />
      </h1>
      <p className="mb-10 text-muted-foreground">
        <T
          keyName="blogHeader.insightsTutorialsAndAnalysis"
        />
      </p>
    </>
  );
}
