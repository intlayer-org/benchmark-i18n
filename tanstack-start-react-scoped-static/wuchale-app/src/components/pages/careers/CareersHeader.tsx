import { t } from "wuchale";
import MockBanner from "../../MockBanner";

export default function CareersHeader() {
  return (
    <>
      <MockBanner />
      <h1 className="mb-2 text-3xl font-bold text-foreground">{t("Careers")}</h1>
      <p className="mb-4 text-muted-foreground">
        {t("from anywhere in the world")}
      </p>
    </>
  );
}
