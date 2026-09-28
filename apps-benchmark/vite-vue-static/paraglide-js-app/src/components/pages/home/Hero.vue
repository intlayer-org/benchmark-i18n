<script setup lang="ts">
import { m } from "../../../paraglide/messages.js";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("Hero");
</script>

<template>
  <section class="mb-16 text-center">
    <h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground">
      {{ m.home_hero_title() }}
    </h1>
    <p class="mx-auto max-w-2xl text-lg text-muted-foreground">
      {{ m.home_hero_description() }}
    </p>
    <div class="mt-8 flex justify-center gap-4">
      <button
        type="button"
        class="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {{ m.home_hero_viewResults() }}
      </button>
      <button
        type="button"
        class="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
      >
        {{ m.home_hero_methodology() }}
      </button>
    </div>
  </section>
</template>
