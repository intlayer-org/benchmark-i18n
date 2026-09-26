<script setup lang="ts">
import { createI18n } from 'vue-i18n';
import { getCurrentInstance } from 'vue';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: { header: { home: 'Home' } }
  }
});

const app = getCurrentInstance()?.appContext.app;
if (app && !app.config.globalProperties.$i18n) {
  app.use(i18n);
}
</script>

<template>
  <slot />
</template>
