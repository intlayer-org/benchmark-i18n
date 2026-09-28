<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { fluent } from "../src/i18n";

const app = getCurrentInstance()?.appContext.app;
if (app && !app.config.globalProperties.$fluent) {
  app.use(fluent);
}
</script>

<template>
  <slot />
</template>
