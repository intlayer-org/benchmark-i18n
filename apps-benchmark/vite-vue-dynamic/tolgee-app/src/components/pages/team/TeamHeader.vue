<script setup lang="ts">
import { useT } from "../../../i18n";
import MockBanner from "../../MockBanner.vue";

const { t } = useT();
</script>

<template>
  <MockBanner />
  <h1 class="mb-2 text-3xl font-bold text-foreground">
    {{ t("team.header.title") }}
  </h1>
  <p class="mb-10 text-muted-foreground">
    {{ t("team.header.description") }}
  </p>
</template>
