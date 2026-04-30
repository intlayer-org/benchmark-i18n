<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("WhyItMatters");

const { title, bundleSize, renderingHydration, dynamicLoading } = useIntlayer("why-it-matters");
</script>

<template>
  <section class="mb-16">
    <h2 class="mb-6 text-2xl font-bold text-foreground">
      {{ title }}
    </h2>
    <div class="grid gap-6 md:grid-cols-3">
      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {{ bundleSize.title }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ bundleSize.description }}
        </p>
      </div>
      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {{ renderingHydration.title }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ renderingHydration.description }}
        </p>
      </div>
      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {{ dynamicLoading.title }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ dynamicLoading.description }}
        </p>
      </div>
    </div>
  </section>
</template>
