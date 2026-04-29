<script setup lang="ts">
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("Hero");

const { td } = useFluentDottedT();
</script>

<template>
  <section class="mb-16 text-center">
    <h1 class="mb-4 text-4xl font-bold tracking-tight text-foreground">
      {{ td("home.hero.title") }}
    </h1>
    <p class="mx-auto max-w-2xl text-lg text-muted-foreground">
      {{ td("home.hero.description") }}
    </p>
    <div class="mt-8 flex justify-center gap-4">
      <button
        type="button"
        class="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {{ td("home.hero.viewResults") }}
      </button>
      <button
        type="button"
        class="rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
      >
        {{ td("home.hero.methodology") }}
      </button>
    </div>
  </section>
</template>
