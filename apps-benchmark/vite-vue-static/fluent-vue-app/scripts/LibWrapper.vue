<script setup lang="ts">
import { createFluentVue } from "fluent-vue";
import { getCurrentInstance } from "vue";

const fluent = createFluentVue({
  bundles: [],
});

const app = getCurrentInstance()?.appContext.app;
if (app && !app.config.globalProperties.$fluent) {
  app.use(fluent);
}
</script>

<template>
  <slot />
</template>
