<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentLocale = computed(() => (route.params.locale as string) || "en");

const footerLinks = computed(() => [
  {
    label: "GitHub",
    href: "https://github.com/intlayer-org/benchmark-i18n",
    isInternal: false,
  },
  { label: "Methodology", to: `/${currentLocale.value}/about`, isInternal: true },
  {
    label: "Contributing",
    to: `/${currentLocale.value}/contact`,
    isInternal: true,
  },
]);
</script>

<template>
  <footer class="mt-20 border-t border-border bg-card">
    <div class="container py-8">
      <div class="grid gap-8 md:grid-cols-3">
        <div>
          <h3 class="mb-2 text-sm font-semibold text-foreground">
            i18n Benchmark
          </h3>
          <p class="text-sm text-muted-foreground">
            An open-source test application for measuring the real-world
            impact of internationalization libraries on bundle size, loading
            time, and app reactivity.
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-sm font-semibold text-foreground">
            Resources
          </h3>
          <ul class="space-y-1">
            <li v-for="linkEl in footerLinks" :key="linkEl.label">
              <router-link
                v-if="linkEl.isInternal"
                :to="linkEl.to!"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {{ linkEl.label }}
              </router-link>
              <a
                v-else
                :href="linkEl.href"
                target="_blank"
                rel="noreferrer"
                class="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {{ linkEl.label }}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="mb-2 text-sm font-semibold text-foreground">
            Contact
          </h3>
          <p class="text-sm text-muted-foreground">
            contact@intlayer.org
          </p>
        </div>
      </div>
      <div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
        i18n Benchmark — Open-source project. Built with Vue, Vite & Vue Router.
      </div>
    </div>
  </footer>
</template>
