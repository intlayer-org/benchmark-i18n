<script setup lang="ts">
import { useFluentDottedT } from "../../../i18n/useFluentDottedT";

const { td } = useFluentDottedT();

const topics = [
  "bugReport",
  "newBenchmarkIdea",
  "methodologyQuestion",
  "contribution",
  "other",
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
          {{ td("contact.form.name") }}
        </label>
        <input
          id="name"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          :placeholder="td('contact.form.yourName')"
        />
      </div>
      <div>
        <label
          for="email"
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {{ td("contact.form.email") }}
        </label>
        <input
          id="email"
          type="email"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          :placeholder="td('contact.form.emailPlaceholder')"
        />
      </div>
    </div>
    <div>
      <label
        for="topic"
        class="mb-1 block text-sm font-medium text-foreground"
      >
        {{ td("contact.form.topic") }}
      </label>
      <select
        id="topic"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
      >
        <option v-for="topic in topics" :key="topic" :value="topic">
          {{ td(`contact.form.${topic}`) }}
        </option>
      </select>
    </div>
    <div>
      <label
        for="message"
        class="mb-1 block text-sm font-medium text-foreground"
      >
        {{ td("contact.form.message") }}
      </label>
      <textarea
        id="message"
        rows="5"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        :placeholder="td('contact.form.messagePlaceholder')"
      />
    </div>
    <button
      type="submit"
      class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
    >
      {{ td("contact.form.sendMessage") }}
    </button>
  </form>
</template>
