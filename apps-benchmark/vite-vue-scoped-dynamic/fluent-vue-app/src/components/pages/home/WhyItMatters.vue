<script setup lang="ts">
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

usePerformanceMeasure("WhyItMatters");

const { td } = useFluentDottedT();
</script>

<template>
  <section class="mb-16">
    <h2 class="mb-6 text-2xl font-bold text-foreground">
      {{ td("home.whyItMatters.title") }}
    </h2>
    <div class="grid gap-6 md:grid-cols-3">
      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {{ td("home.whyItMatters.bundleSizeTitle") }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ td("home.whyItMatters.bundleSizeDesc") }}
        </p>
      </div>
      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {{ td("home.whyItMatters.renderingTitle") }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ td("home.whyItMatters.renderingDesc") }}
        </p>
      </div>
      <div class="rounded-lg border border-border bg-card p-6">
        <h3 class="mb-2 text-lg font-semibold text-foreground">
          {{ td("home.whyItMatters.dynamicLoadingTitle") }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ td("home.whyItMatters.dynamicLoadingDesc") }}
        </p>
      </div>
    </div>
  </section>
</template>
