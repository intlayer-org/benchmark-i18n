<script setup lang="ts">
import { getCurrentInstance } from "vue";
import i18n from "../src/i18n";

const app = getCurrentInstance()?.appContext.app;
if (app && !app.config.globalProperties.$i18n) {
  app.use(i18n);
}
</script>

<template>
  <slot />
</template>
