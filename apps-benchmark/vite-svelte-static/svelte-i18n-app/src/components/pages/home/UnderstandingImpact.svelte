<script lang="ts">
  import { _ } from "svelte-i18n";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("UnderstandingImpact");
</script>

<section class="mx-auto mb-16 max-w-3xl space-y-6">
  <h2 class="text-2xl font-bold text-foreground">
    {$_("home.understandingImpact.title")}
  </h2>

  <div class="rounded-lg border border-border bg-card p-6">
    <h3 class="mb-2 text-lg font-semibold text-foreground">
      {$_("home.understandingImpact.singleJsonTitle")}
    </h3>
    <p class="text-sm text-muted-foreground">
      {$_("home.understandingImpact.singleJsonIntro")}
    </p>
    <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
      <li>{$_("home.understandingImpact.singleJsonBullet1")}</li>
      <li>{$_("home.understandingImpact.singleJsonBullet2")}</li>
      <li>{$_("home.understandingImpact.singleJsonBullet3")}</li>
    </ul>
  </div>

  <div class="rounded-lg border border-border bg-card p-6">
    <h3 class="mb-2 text-lg font-semibold text-foreground">
      {$_("home.understandingImpact.tradeOffsTitle")}
    </h3>
    <p class="text-sm text-muted-foreground">
      {$_("home.understandingImpact.tradeOffsIntro")}
    </p>
    <ul class="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
      <li>
        <strong class="text-foreground">
          {$_("home.understandingImpact.waterfallLabel")}
        </strong>
        {$_("home.understandingImpact.waterfallDesc")}
      </li>
      <li>
        <strong class="text-foreground">
          {$_("home.understandingImpact.foucLabel")}
        </strong>
        {$_("home.understandingImpact.foucDesc")}
      </li>
      <li>
        <strong class="text-foreground">
          {$_("home.understandingImpact.cacheLabel")}
        </strong>
        {$_("home.understandingImpact.cacheDesc")}
      </li>
    </ul>
  </div>

  <div class="rounded-lg border border-border bg-card p-6">
    <h3 class="mb-2 text-lg font-semibold text-foreground">
      {$_("home.understandingImpact.measuresTitle")}
    </h3>
    <p class="text-sm text-muted-foreground">
      {$_("home.understandingImpact.measuresDesc")}
    </p>
  </div>
</section>
