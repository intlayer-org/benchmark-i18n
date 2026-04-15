import { useTranslation } from "react-i18next";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function AboutHeader() {
  const { t } = useTranslation();
  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 className="mb-4 text-3xl font-bold text-foreground">
        {t("aboutHeader.methodology")}
      </h1>
      <p className="mb-8 max-w-3xl text-muted-foreground">
        {t("aboutHeader.weDesignedThisBenchmarkTo")}
      </p>
    </>
  );
}
