<script setup lang="ts">
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

usePerformanceMeasure("AboutHeader");

const { td } = useFluentDottedT();
</script>

<template>
  <h1 class="mb-4 text-3xl font-bold text-foreground">
    {{ td("about.header.title") }}
  </h1>
  <p class="mb-8 max-w-3xl text-muted-foreground">
    {{ td("about.header.description") }}
  </p>
</template>
