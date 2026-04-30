<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("WhatWeMeasure");

const { title, metrics } = useIntlayer("what-we-measure");
</script>

<template>
  <section class="mt-12 mx-auto max-w-3xl">
    <h2 class="mb-4 text-2xl font-bold text-foreground">
      {{ title }}
    </h2>
    <ul class="space-y-4">
      <li
        v-for="m in metrics"
        :key="m.metric"
        class="rounded-md border border-border p-4"
      >
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
