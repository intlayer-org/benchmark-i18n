<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";

const { message } = useIntlayer("mock-banner");
</script>

<template>
  <div
    class="mb-8 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-600 dark:text-yellow-400"
  >
    {{ message }}
  </div>
</template>
