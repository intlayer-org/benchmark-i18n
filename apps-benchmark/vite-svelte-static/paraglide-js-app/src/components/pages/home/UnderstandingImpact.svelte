<script lang="ts">
  import { m } from "../../../paraglide/messages";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("UnderstandingImpact");
</script>

<section class="mb-16 mx-auto max-w-3xl space-y-6">
  <h2 class="text-2xl font-bold text-foreground">
    {m.home_understandingImpact_title()}
  </h2>

  <div class="rounded-lg border border-border bg-card p-6">
    <h3 class="mb-2 text-lg font-semibold text-foreground">
      {m.home_understandingImpact_singleJsonTitle()}
    </h3>
    <p class="text-sm text-muted-foreground">
      {m.home_understandingImpact_singleJsonIntro()}
    </p>
    <ul class="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
      <li>
        {m.home_understandingImpact_singleJsonBullet1()}
      </li>
      <li>
        {m.home_understandingImpact_singleJsonBullet2()}
      </li>
      <li>
        {m.home_understandingImpact_singleJsonBullet3()}
      </li>
    </ul>
  </div>

  <div class="rounded-lg border border-border bg-card p-6">
    <h3 class="mb-2 text-lg font-semibold text-foreground">
      {m.home_understandingImpact_tradeOffsTitle()}
    </h3>
    <p class="text-sm text-muted-foreground">
      {m.home_understandingImpact_tradeOffsIntro()}
    </p>
    <ul class="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
      <li>
        <strong class="text-foreground">
          {m.home_understandingImpact_waterfallLabel()}
        </strong>
        {m.home_understandingImpact_waterfallDesc()}
      </li>
      <li>
        <strong class="text-foreground">
          {m.home_understandingImpact_foucLabel()}
        </strong>
        {m.home_understandingImpact_foucDesc()}
      </li>
      <li>
        <strong class="text-foreground">
          {m.home_understandingImpact_cacheLabel()}
        </strong>
        {m.home_understandingImpact_cacheDesc()}
      </li>
    </ul>
  </div>

  <div class="rounded-lg border border-border bg-card p-6">
    <h3 class="mb-2 text-lg font-semibold text-foreground">
      {m.home_understandingImpact_measuresTitle()}
    </h3>
    <p class="text-sm text-muted-foreground">
      {m.home_understandingImpact_measuresDesc()}
    </p>
  </div>
</section>
