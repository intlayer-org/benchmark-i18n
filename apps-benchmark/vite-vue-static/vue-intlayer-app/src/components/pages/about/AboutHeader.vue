<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("AboutHeader");

const { title, description } = useIntlayer("about-header");
</script>

<template>
  <h1 class="mb-4 text-3xl font-bold text-foreground">
    {{ title }}
  </h1>
  <p class="mb-8 max-w-3xl text-muted-foreground">
    {{ description }}
  </p>
</template>
