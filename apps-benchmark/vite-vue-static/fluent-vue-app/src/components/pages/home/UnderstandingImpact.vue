<script setup lang="ts">
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

usePerformanceMeasure("UnderstandingImpact");

const { td } = useFluentDottedT();
</script>

<template>
  <section class="mb-16 mx-auto max-w-3xl space-y-6">
    <h2 class="text-2xl font-bold text-foreground">
      {{ td("home.understandingImpact.title") }}
    </h2>

    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {{ td("home.understandingImpact.singleJsonTitle") }}
      </h3>
      <p class="text-sm text-muted-foreground">
        {{ td("home.understandingImpact.singleJsonIntro") }}
      </p>
      <ul class="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
        <li>
          {{ td("home.understandingImpact.singleJsonBullet1") }}
        </li>
        <li>
          {{ td("home.understandingImpact.singleJsonBullet2") }}
        </li>
        <li>
          {{ td("home.understandingImpact.singleJsonBullet3") }}
        </li>
      </ul>
    </div>

    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {{ td("home.understandingImpact.tradeOffsTitle") }}
      </h3>
      <p class="text-sm text-muted-foreground">
        {{ td("home.understandingImpact.tradeOffsIntro") }}
      </p>
      <ul class="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
        <li>
          <strong class="text-foreground">
            {{ td("home.understandingImpact.waterfallLabel") }}
          </strong>
          {{ td("home.understandingImpact.waterfallDesc") }}
        </li>
        <li>
          <strong class="text-foreground">
            {{ td("home.understandingImpact.foucLabel") }}
          </strong>
          {{ td("home.understandingImpact.foucDesc") }}
        </li>
        <li>
          <strong class="text-foreground">
            {{ td("home.understandingImpact.cacheLabel") }}
          </strong>
          {{ td("home.understandingImpact.cacheDesc") }}
        </li>
      </ul>
    </div>

    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {{ td("home.understandingImpact.measuresTitle") }}
      </h3>
      <p class="text-sm text-muted-foreground">
        {{ td("home.understandingImpact.measuresDesc") }}
      </p>
    </div>
  </section>
</template>
