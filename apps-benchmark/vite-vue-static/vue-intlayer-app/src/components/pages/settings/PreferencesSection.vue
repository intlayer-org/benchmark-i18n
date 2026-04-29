<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";

const {
  title,
  notificationsTitle,
  notificationsDescription,
  toggleNotifications,
  darkModeTitle,
  darkModeDescription,
  toggleDarkMode,
  languageLabel,
  languages,
} = useIntlayer("preferences-section");
</script>

<template>
  <section class="rounded-lg border border-border bg-card p-6">
    <h2 class="mb-4 text-lg font-semibold text-foreground">
      {{ title }}
    </h2>
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-foreground">
            {{ notificationsTitle }}
          </p>
          <p class="text-xs text-muted-foreground">
            {{ notificationsDescription }}
          </p>
        </div>
        <button
          type="button"
          class="h-6 w-11 rounded-full bg-primary transition-colors"
          :aria-label="toggleNotifications"
        >
          <span class="block h-5 w-5 translate-x-5 rounded-full bg-primary-foreground transition-transform" />
        </button>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-foreground">{{ darkModeTitle }}</p>
          <p class="text-xs text-muted-foreground">{{ darkModeDescription }}</p>
        </div>
        <button
          type="button"
          class="h-6 w-11 rounded-full bg-muted transition-colors"
          :aria-label="toggleDarkMode"
        >
          <span class="block h-5 w-5 translate-x-0.5 rounded-full bg-foreground/20 transition-transform" />
        </button>
      </div>
      <div>
        <label
          for="language"
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {{ languageLabel }}
        </label>
        <select
          id="language"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <option v-for="l in languages" :key="l">{{ l }}</option>
        </select>
      </div>
    </div>
  </section>
</template>
