<script setup lang="ts">
import MockBanner from "../../MockBanner.vue";
import { m } from "../../../paraglide/messages.js";
</script>

<template>
  <MockBanner />
  <h1 class="mb-2 text-3xl font-bold text-foreground">
    {{ m.contact_header_title() }}
  </h1>
  <p class="mb-8 text-muted-foreground">
    {{ m.contact_header_description() }}
    <a href="mailto:contact@intlayer.org" class="text-primary hover:underline">
      {{ m.shared_contactEmail() }}
    </a>.
  </p>
</template>
