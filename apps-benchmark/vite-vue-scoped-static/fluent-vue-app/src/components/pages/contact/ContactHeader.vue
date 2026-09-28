<script setup lang="ts">
import MockBanner from "../../MockBanner.vue";
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

const { td } = useFluentDottedT();
</script>

<template>
  <MockBanner />
  <h1 class="mb-2 text-3xl font-bold text-foreground">
    {{ td("contact.header.title") }}
  </h1>
  <p class="mb-8 text-muted-foreground">
    {{ td("contact.header.description") }}
    <a href="mailto:contact@intlayer.org" class="text-primary hover:underline">
      {{ td("shared.contactEmail") }}
    </a>
    .
  </p>
</template>
