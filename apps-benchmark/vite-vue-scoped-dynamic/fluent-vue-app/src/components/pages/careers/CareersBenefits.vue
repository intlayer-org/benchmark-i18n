<script setup lang="ts">
import { computed } from "vue";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

const { td } = useFluentDottedT();

const benefits = computed(() => [
  {
    label: td("careers.benefits.remoteLabel"),
    value: td("careers.benefits.remoteValue"),
  },
  {
    label: td("careers.benefits.payLabel"),
    value: td("careers.benefits.payValue"),
  },
  {
    label: td("careers.benefits.ossLabel"),
    value: td("careers.benefits.ossValue"),
  },
]);
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
