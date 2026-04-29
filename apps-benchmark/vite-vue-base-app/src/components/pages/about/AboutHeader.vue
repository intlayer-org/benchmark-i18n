<script setup lang="ts">
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("AboutHeader");
</script>

<template>
  <h1 class="mb-4 text-3xl font-bold text-foreground">
    About This Benchmark
  </h1>
  <p class="mb-8 max-w-3xl text-muted-foreground">
    This is an open-source test application — not a product or a company.
    Its sole purpose is to provide a realistic, multi-page React app where
    different i18n libraries can be integrated and measured under identical
    conditions.
  </p>
</template>
