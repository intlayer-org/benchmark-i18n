<script setup lang="ts">
import { m } from "../../../paraglide/messages.js";

// Explicit calls keep every message tree-shakable (no m[key] lookups); the
// tree remounts on a locale switch (Layout :key), so setup-time values are fresh.
const benefits = [
  {
    label: m.careers_benefits_remoteLabel(),
    value: m.careers_benefits_remoteValue(),
  },
  {
    label: m.careers_benefits_payLabel(),
    value: m.careers_benefits_payValue(),
  },
  {
    label: m.careers_benefits_ossLabel(),
    value: m.careers_benefits_ossValue(),
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
