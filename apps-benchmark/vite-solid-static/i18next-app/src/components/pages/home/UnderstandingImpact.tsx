import { trans } from "../../../i18n";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

export default function UnderstandingImpact() {
  usePerformanceMeasure("UnderstandingImpact");
  return (
    <section class="mx-auto mb-16 max-w-3xl space-y-6">
      <h2 class="text-2xl font-bold text-foreground">
        {trans("home.understandingImpact.title")}
      </h2>

      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {trans("home.understandingImpact.singleJsonTitle")}
        </h3>
        <p class="text-sm text-muted-foreground">
          {trans("home.understandingImpact.singleJsonIntro")}
        </p>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>{trans("home.understandingImpact.singleJsonBullet1")}</li>
          <li>{trans("home.understandingImpact.singleJsonBullet2")}</li>
          <li>{trans("home.understandingImpact.singleJsonBullet3")}</li>
        </ul>
      </div>

      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {trans("home.understandingImpact.tradeOffsTitle")}
        </h3>
        <p class="text-sm text-muted-foreground">
          {trans("home.understandingImpact.tradeOffsIntro")}
        </p>
        <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>
            <strong class="text-foreground">
              {trans("home.understandingImpact.waterfallLabel")}
            </strong>{" "}
            {trans("home.understandingImpact.waterfallDesc")}
          </li>
          <li>
            <strong class="text-foreground">
              {trans("home.understandingImpact.foucLabel")}
            </strong>{" "}
            {trans("home.understandingImpact.foucDesc")}
          </li>
          <li>
            <strong class="text-foreground">
              {trans("home.understandingImpact.cacheLabel")}
            </strong>{" "}
            {trans("home.understandingImpact.cacheDesc")}
          </li>
        </ul>
      </div>

      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {trans("home.understandingImpact.measuresTitle")}
        </h3>
        <p class="text-sm text-muted-foreground">
          {trans("home.understandingImpact.measuresDesc")}
        </p>
      </div>
    </section>
  );
}
