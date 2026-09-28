import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";
import { trans } from "../../../i18n";

export default function AboutHeader() {
  usePerformanceMeasure("AboutHeader");
  return (
    <>
      <h1 class="mb-4 text-3xl font-bold text-foreground">
        {trans("about.header.title")}
      </h1>
      <p class="mb-8 max-w-3xl text-muted-foreground">
        {trans("about.header.description")}
      </p>
    </>
  );
}
