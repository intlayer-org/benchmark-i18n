<script setup lang="ts">
import { m } from "../../../paraglide/messages.js";

// Explicit calls keep every message tree-shakable (no m[key] lookups); the
// tree remounts on a locale switch (Layout :key), so setup-time values are fresh.
const faqs = [
  { q: m.faq_list_q1(), a: m.faq_list_a1() },
  { q: m.faq_list_q2(), a: m.faq_list_a2() },
  { q: m.faq_list_q3(), a: m.faq_list_a3() },
  { q: m.faq_list_q4(), a: m.faq_list_a4() },
  { q: m.faq_list_q5(), a: m.faq_list_a5() },
  { q: m.faq_list_q6(), a: m.faq_list_a6() },
  { q: m.faq_list_q7(), a: m.faq_list_a7() },
  { q: m.faq_list_q8(), a: m.faq_list_a8() },
];
</script>

<template>
  <div class="mx-auto max-w-3xl space-y-4">
    <details
      v-for="(f, idx) in faqs"
      :key="idx"
      class="group rounded-lg border border-border bg-card"
    >
      <summary class="cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors">
        {{ f.q }}
      </summary>
      <p class="px-6 pb-4 text-sm text-muted-foreground">{{ f.a }}</p>
    </details>
  </div>
</template>
