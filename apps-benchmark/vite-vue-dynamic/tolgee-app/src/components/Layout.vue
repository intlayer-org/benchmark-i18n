<script setup lang="ts">
import { onMounted, watch, ref, onBeforeMount, nextTick } from "vue";
import { useRoute } from "vue-router";
import { tolgee } from "../i18n";
import {
  recordHydrationDuration,
  recordRenderTime,
} from "test-utils/browser-metrics";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

const route = useRoute();
const renderStart = ref(0);

onBeforeMount(() => {
  renderStart.value = typeof performance !== "undefined" ? performance.now() : 0;
});

onMounted(() => {
  recordHydrationDuration();
  recordRenderTime("AppRoot", renderStart.value);
});

watch(
  () => route.params.locale,
  async (newLocale) => {
    if (newLocale) {
      // html[lang] marks the end of the switch for the reactivity test: set it
      // once Tolgee has applied the language and Vue has patched the DOM.
      await tolgee.changeLanguage(newLocale as string);
      await nextTick();
      document.documentElement.lang = newLocale as string;
    }
  },
  { immediate: true }
);
</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>
