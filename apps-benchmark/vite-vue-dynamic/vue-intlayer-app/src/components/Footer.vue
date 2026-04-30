<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useIntlayer } from "vue-intlayer";

const route = useRoute();
const currentLocale = computed(() => (route.params.locale as string) || "en");

const {
  description,
  resources,
  contact: contactLabel,
  github,
  methodology,
  contributing,
  footerText,
  appName,
  contactEmail,
} = useIntlayer("footer");

const footerLinks = computed(() => [
  {
    label: github,
    href: "https://github.com/intlayer-org/benchmark-i18n",
    isInternal: false,
  },
  {
    label: methodology,
    to: `/${currentLocale.value}/about`,
    isInternal: true,
  },
  {
    label: contributing,
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
            {{ appName }}
          </h3>
          <p class="text-sm text-muted-foreground">
            {{ description }}
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-sm font-semibold text-foreground">
            {{ resources }}
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
            {{ contactLabel }}
          </h3>
          <p class="text-sm text-muted-foreground">{{ contactEmail }}</p>
        </div>
      </div>
      <div
        class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground"
      >
        {{ footerText }}
      </div>
    </div>
  </footer>
</template>
