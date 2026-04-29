<script setup lang="ts">
import { useIntlayer } from 'vue-intlayer';
const content = useIntlayer('careers-benefits');

const benefits = [
  { label: "Remote-first", value: content.workFromAnywhereInThe },
  { label: content.competitivePay, value: content.topOfMarketCompensation },
  {
    label: content.openSourceTime,
    value: content.x20TimeForOssContributions,
  },
];
</script>

<template>
  <div class="mb-12 grid gap-4 md:grid-cols-3">
    <div
      v-for="b in benefits"
      :key="b.label"
      class="rounded-lg border border-border bg-card p-4 text-center"
    >
      <p class="text-sm font-semibold text-foreground">{{ b.label }}</p>
      <p class="text-xs text-muted-foreground">{{ b.value }}</p>
    </div>
  </div>
</template>
