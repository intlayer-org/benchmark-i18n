<script setup lang="ts">
import MockBanner from "../../MockBanner.vue";
import { useT } from "../../../i18n";

const { t } = useT();
</script>

<template>
  <MockBanner />
  <h1 class="mb-2 text-3xl font-bold text-foreground">
    {{ t("settings.header.title") }}
  </h1>
  <p class="mb-8 text-muted-foreground">{{ t("settings.header.description") }}</p>
</template>
