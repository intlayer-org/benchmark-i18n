<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("UnderstandingImpact");

const { title, largeJson, dynamicLoading, benchmarkMeasures } = useIntlayer(
  "understanding-impact"
);
</script>

<template>
  <section class="mb-16 mx-auto max-w-3xl space-y-6">
    <h2 class="text-2xl font-bold text-foreground">
      {{ title }}
    </h2>

    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {{ largeJson.title }}
      </h3>
      <p class="text-sm text-muted-foreground">
        {{ largeJson.description }}
      </p>
      <ul class="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
        <li v-for="(point, index) in largeJson.points" :key="index">
          {{ point }}
        </li>
      </ul>
    </div>

    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {{ dynamicLoading.title }}
      </h3>
      <p class="text-sm text-muted-foreground">
        {{ dynamicLoading.description }}
      </p>
      <ul class="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
        <li v-for="(point, index) in dynamicLoading.points" :key="index">
          <strong class="text-foreground">{{ point.label }}</strong>
          {{ point.text }}
        </li>
      </ul>
    </div>

    <div class="rounded-lg border border-border bg-card p-6">
      <h3 class="mb-2 text-lg font-semibold text-foreground">
        {{ benchmarkMeasures.title }}
      </h3>
      <p class="text-sm text-muted-foreground">
        {{ benchmarkMeasures.description }}
      </p>
    </div>
  </section>
</template>
