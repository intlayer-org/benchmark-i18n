<script setup lang="ts">
import { m } from "../../../paraglide/messages.js";

// Explicit calls keep every message tree-shakable (no m[key] lookups); the
// tree remounts on a locale switch (Layout :key), so setup-time values are fresh.
const topics = [
  { id: "bugReport", label: m.contact_form_bugReport() },
  { id: "newBenchmarkIdea", label: m.contact_form_newBenchmarkIdea() },
  { id: "methodologyQuestion", label: m.contact_form_methodologyQuestion() },
  { id: "contribution", label: m.contact_form_contribution() },
  { id: "other", label: m.contact_form_other() },
] as const;
</script>

<template>
  <form class="space-y-6" @submit.prevent>
    <div class="grid gap-4 md:grid-cols-2">
      <div>
        <label
          for="name"
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {{ m.contact_form_name() }}
        </label>
        <input
          id="name"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          :placeholder="m.contact_form_yourName()"
        />
      </div>
      <div>
        <label
          for="email"
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {{ m.contact_form_email() }}
        </label>
        <input
          id="email"
          type="email"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          :placeholder="m.contact_form_emailPlaceholder()"
        />
      </div>
    </div>
    <div>
      <label
        for="topic"
        class="mb-1 block text-sm font-medium text-foreground"
      >
        {{ m.contact_form_topic() }}
      </label>
      <select
        id="topic"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
      >
        <option
          v-for="topic in topics"
          :key="topic.id"
          :value="topic.id"
        >
          {{ topic.label }}
        </option>
      </select>
    </div>
    <div>
      <label
        for="message"
        class="mb-1 block text-sm font-medium text-foreground"
      >
        {{ m.contact_form_message() }}
      </label>
      <textarea
        id="message"
        rows="5"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        :placeholder="m.contact_form_messagePlaceholder()"
      />
    </div>
    <button
      type="submit"
      class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      {{ m.contact_form_sendMessage() }}
    </button>
  </form>
</template>
