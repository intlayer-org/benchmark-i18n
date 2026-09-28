<script setup lang="ts">
import { computed } from "vue";
import { m } from "../../../paraglide/messages.js";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("WhatWeMeasure");

const metrics = computed(() => [
  {
    metric: m.about_whatWeMeasure_bundleSizeImpact(),
    desc: m.about_whatWeMeasure_bundleSizeImpactDesc(),
  },
  {
    metric: m.about_whatWeMeasure_renderingOverhead(),
    desc: m.about_whatWeMeasure_renderingOverheadDesc(),
  },
  {
    metric: m.about_whatWeMeasure_hydrationCost(),
    desc: m.about_whatWeMeasure_hydrationCostDesc(),
  },
  {
    metric: m.about_whatWeMeasure_lazyLoading(),
    desc: m.about_whatWeMeasure_lazyLoadingDesc(),
  },
  {
    metric: m.about_whatWeMeasure_localeSwitch(),
    desc: m.about_whatWeMeasure_localeSwitchDesc(),
  },
]);
</script>

<template>
  <section class="mt-12 mx-auto max-w-3xl">
    <h2 class="mb-4 text-2xl font-bold text-foreground">
      {{ m.about_whatWeMeasure_title() }}
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
