import { useTranslations } from "use-intl";
import MockBanner from "../../MockBanner";

export default function BlogHeader() {
  const tHeader = useTranslations("header");
  const tBlog = useTranslations("blog-header");
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">{tHeader("blog")}</h1>
      <p className="mb-10 text-muted-foreground">
        {tBlog("insightsTutorialsAndAnalysisFrom")}
      </p>
    </>
  );
}
