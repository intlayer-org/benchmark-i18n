<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("AboutGrid");

const { why, methodology } = useIntlayer("about-grid");
</script>

<template>
  <div class="grid gap-8 md:grid-cols-2">
    <div class="rounded-lg border border-border bg-card p-6">
      <h2 class="mb-3 text-xl font-semibold text-foreground">
        {{ why.title }}
      </h2>
      <p class="text-sm text-muted-foreground">
        {{ why.description }}
      </p>
    </div>
    <div class="rounded-lg border border-border bg-card p-6">
      <h2 class="mb-3 text-xl font-semibold text-foreground">
        {{ methodology.title }}
      </h2>
      <p class="text-sm text-muted-foreground">
        {{ methodology.description }}
      </p>
    </div>
  </div>
</template>
