<script setup lang="ts">
import { FormatSimple, Tolgee, TolgeeProvider, VueTolgee } from '@tolgee/vue';
import { getCurrentInstance } from 'vue';

const tolgee = Tolgee()
  .use(FormatSimple())
  .init({
    language: 'en',
    staticData: { en: { header: { home: 'Home' } } },
  });

const app = getCurrentInstance()?.appContext.app;
if (app && !app.config.globalProperties.$t) {
  app.use(VueTolgee, { tolgee });
}
</script>

<template>
  <TolgeeProvider>
    <slot />
  </TolgeeProvider>
</template>
