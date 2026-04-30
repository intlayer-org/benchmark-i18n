<script setup lang="ts">
import { onMounted, watch, ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useLocale } from "vue-intlayer";
import {
  recordHydrationDuration,
  recordRenderTime,
} from "test-utils/browser-metrics";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

const route = useRoute();
const { setLocale } = useLocale();
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
  (newLocale) => {
    if (newLocale) {
      document.documentElement.lang = newLocale as string;
      setLocale(newLocale as any);
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
