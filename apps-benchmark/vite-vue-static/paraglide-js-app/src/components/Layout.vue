<script setup lang="ts">
import { computed, nextTick, onBeforeMount, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import {
  recordHydrationDuration,
  recordRenderTime,
} from "test-utils/browser-metrics";
import { type Locale, setLocale } from "../paraglide/runtime.js";
import Footer from "./Footer.vue";
import Header from "./Header.vue";

const route = useRoute();
const renderStart = ref(0);

// Paraglide messages are plain functions reading the runtime locale, not
// reactive state: set the locale while rendering, then remount the tree
// (:key) so every message re-evaluates, as the Svelte/TanStack apps do.
const locale = computed(() => {
  const next = (route.params.locale as Locale | undefined) ?? "en";
  setLocale(next, { reload: false });
  return next;
});

onBeforeMount(() => {
  renderStart.value = typeof performance !== "undefined" ? performance.now() : 0;
});

onMounted(() => {
  recordHydrationDuration();
  recordRenderTime("AppRoot", renderStart.value);
});

watch(
  locale,
  async (newLocale) => {
    // html[lang] is the reactivity test's end marker: set it once Vue has
    // patched the DOM with the new locale, not when the switch starts.
    await nextTick();
    document.documentElement.lang = newLocale;
  },
  { immediate: true },
);
</script>

<template>
  <div :key="locale" class="contents">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
