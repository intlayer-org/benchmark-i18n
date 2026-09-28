<script setup lang="ts">
import { m } from "../../../paraglide/messages.js";
</script>

<template>
  <section class="rounded-lg border border-border bg-card p-6">
    <h2 class="mb-4 text-lg font-semibold text-foreground">
      {{ m.settings_profile_title() }}
    </h2>
    <div class="space-y-4">
      <div>
        <label
          for="display-name"
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {{ m.settings_profile_displayName() }}
        </label>
        <input
          id="display-name"
          value="John Developer"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
      <div>
        <label
          for="email"
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {{ m.settings_profile_email() }}
        </label>
        <input
          id="email"
          value="john@example.com"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>
    </div>
  </section>
</template>
