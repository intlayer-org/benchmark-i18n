import { useLingui } from "@lingui/react";
import MockBanner from "../../MockBanner";

export default function BlogHeader() {
  const { i18n } = useLingui();
  const t = (id: string) => i18n._(`blog-header.${id}`);

  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">
        {i18n._("header.blog")}
      </h1>
      <p className="mb-10 text-muted-foreground">
        {t("insightsTutorialsAndAnalysisFrom")}
      </p>
    </>
  );
}
