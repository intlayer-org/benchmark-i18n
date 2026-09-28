<script setup lang="ts">
import { useFluentDottedT } from "../i18n/useFluentDottedT";
const { td } = useFluentDottedT();
</script>

<template>
  <div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
    {{ td("mockBanner") }}
  </div>
</template>
