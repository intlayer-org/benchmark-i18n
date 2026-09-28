<script setup lang="ts">
import { m } from "../paraglide/messages.js";
</script>

<template>
  <div class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
    {{ m.mockBanner() }}
  </div>
</template>
