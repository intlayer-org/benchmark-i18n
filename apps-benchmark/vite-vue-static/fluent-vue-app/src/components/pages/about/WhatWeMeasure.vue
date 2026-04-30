<script setup lang="ts">
import { computed } from "vue";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

usePerformanceMeasure("WhatWeMeasure");

const { td } = useFluentDottedT();

const metrics = computed(() => [
  {
    metric: td("about.whatWeMeasure.bundleSizeImpact"),
    desc: td("about.whatWeMeasure.bundleSizeImpactDesc"),
  },
  {
    metric: td("about.whatWeMeasure.renderingOverhead"),
    desc: td("about.whatWeMeasure.renderingOverheadDesc"),
  },
  {
    metric: td("about.whatWeMeasure.hydrationCost"),
    desc: td("about.whatWeMeasure.hydrationCostDesc"),
  },
  {
    metric: td("about.whatWeMeasure.lazyLoading"),
    desc: td("about.whatWeMeasure.lazyLoadingDesc"),
  },
  {
    metric: td("about.whatWeMeasure.localeSwitch"),
    desc: td("about.whatWeMeasure.localeSwitchDesc"),
  },
]);
</script>

<template>
  <section class="mt-12 mx-auto max-w-3xl">
    <h2 class="mb-4 text-2xl font-bold text-foreground">
      {{ td("about.whatWeMeasure.title") }}
    </h2>
    <ul class="space-y-4">
      <li v-for="m in metrics" :key="m.metric" class="rounded-md border border-border p-4">
        <span class="block text-sm font-bold text-primary">
          {{ m.metric }}
        </span>
        <span class="block mt-1 text-sm text-muted-foreground">
          {{ m.desc }}
        </span>
      </li>
    </ul>
  </section>
</template>
