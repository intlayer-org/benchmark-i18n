<script setup lang="ts">
import { useT } from "../i18n";
const { t } = useT();
</script>

<template>
  <div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
    {{ t("mockBanner") }}
  </div>
</template>
