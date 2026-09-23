<script setup lang="ts">
import MockBanner from "../../MockBanner.vue";
import { useT } from "../../../i18n";

const { t } = useT();
</script>

<template>
  <MockBanner />
  <h1 class="mb-2 text-3xl font-bold text-foreground">
    {{ t("blog.header.title") }}
  </h1>
  <p class="mb-10 text-muted-foreground">{{ t("blog.header.description") }}</p>
</template>
