<script setup lang="ts">
import { useT } from "../../../i18n";
import MockBanner from "../../MockBanner.vue";

const { t } = useT();
</script>

<template>
  <MockBanner />
  <div class="mb-12 text-center">
    <h1 class="mb-3 text-3xl font-bold text-foreground">
      {{ t("pricing.header.title") }}
    </h1>
    <p class="text-muted-foreground">
      {{ t("pricing.header.description") }}
    </p>
  </div>
</template>
