<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { m } from "../paraglide/messages.js";
const route = useRoute();
const currentLocale = computed(() => (route.params.locale as string) || "en");

const footerLinks = computed(() => [
  {
    label: m.footer_github(),
    href: "https://github.com/intlayer-org/benchmark-i18n",
    isInternal: false,
  },
  { label: m.footer_methodology(), to: `/${currentLocale.value}/about`, isInternal: true },
  {
    label: m.footer_contributing(),
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
            {{ m.footer_title() }}
          </h3>
          <p class="text-sm text-muted-foreground">
            {{ m.footer_description() }}
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-sm font-semibold text-foreground">
            {{ m.footer_resources() }}
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
            {{ m.footer_contact() }}
          </h3>
          <p class="text-sm text-muted-foreground">
            {{ m.shared_contactEmail() }}
          </p>
        </div>
      </div>
      <div class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
        {{ m.footer_builtWith() }}
      </div>
    </div>
  </footer>
</template>
