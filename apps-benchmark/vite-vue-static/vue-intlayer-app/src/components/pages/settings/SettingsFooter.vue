<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";

const { cancel, saveChanges } = useIntlayer("settings-footer");
</script>

<template>
  <div class="flex justify-end gap-3">
    <button
      type="button"
      class="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
    >
      {{ cancel }}
    </button>
    <button
      type="submit"
      class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
    >
      {{ saveChanges }}
    </button>
  </div>
</template>
