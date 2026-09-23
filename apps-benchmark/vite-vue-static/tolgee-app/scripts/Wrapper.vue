<script setup lang="ts">
import { getCurrentInstance } from "vue";
import { VueTolgee } from "@tolgee/vue";
import { tolgee } from "../src/i18n";

const app = getCurrentInstance()?.appContext.app;
if (app && !app.config.globalProperties.$t) {
  app.use(VueTolgee, { tolgee });
}
</script>

<template>
  <slot />
</template>
