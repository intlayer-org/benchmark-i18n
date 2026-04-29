<script setup lang="ts">
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("TeamHeader");

const { td } = useFluentDottedT();
</script>

<template>
  <section class="mb-8 text-center">
    <h1 class="mb-4 text-3xl font-bold text-foreground">
      {{ td("team.header.title") }}
    </h1>
    <p class="mx-auto max-w-2xl text-muted-foreground">
      {{ td("team.header.description") }}
    </p>
  </section>
</template>
