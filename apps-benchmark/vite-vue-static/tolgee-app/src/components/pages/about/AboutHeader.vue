<script setup lang="ts">
import { useT } from "../../../i18n";
import { usePerformanceMeasure } from "../../../hooks/usePerformanceMeasure";

usePerformanceMeasure("AboutHeader");

const { t } = useT();
</script>

<template>
  <h1 class="mb-4 text-3xl font-bold text-foreground">
    {{ t("about.header.title") }}
  </h1>
  <p class="mb-8 max-w-3xl text-muted-foreground">
    {{ t("about.header.description") }}
  </p>
</template>
