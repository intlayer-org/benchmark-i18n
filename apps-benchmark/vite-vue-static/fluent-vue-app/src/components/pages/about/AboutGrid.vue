<script setup lang="ts">
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

usePerformanceMeasure("AboutGrid");

const { td } = useFluentDottedT();
</script>

<template>
  <div class="grid gap-8 md:grid-cols-2">
    <div class="rounded-lg border border-border bg-card p-6">
      <h2 class="mb-3 text-xl font-semibold text-foreground">
        {{ td("about.grid.whyExistsTitle") }}
      </h2>
      <p class="text-sm text-muted-foreground">
        {{ td("about.grid.whyExistsDesc") }}
      </p>
    </div>
    <div class="rounded-lg border border-border bg-card p-6">
      <h2 class="mb-3 text-xl font-semibold text-foreground">
        {{ td("about.grid.methodologyTitle") }}
      </h2>
      <p class="text-sm text-muted-foreground">
        {{ td("about.grid.methodologyDesc") }}
      </p>
    </div>
  </div>
</template>
