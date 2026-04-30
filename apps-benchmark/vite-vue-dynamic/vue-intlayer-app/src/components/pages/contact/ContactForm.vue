<script setup lang="ts">
import { useIntlayer } from "vue-intlayer";

const {
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  topicLabel,
  topics,
  messageLabel,
  messagePlaceholder,
  sendMessage,
} = useIntlayer("contact-form");
</script>

<template>
  <form class="space-y-6" @submit.prevent>
    <div class="grid gap-4 md:grid-cols-2">
      <div>
        <label
          for="name"
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {{ nameLabel }}
        </label>
        <input
          id="name"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          :placeholder="namePlaceholder"
        />
      </div>
      <div>
        <label
          for="email"
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {{ emailLabel }}
        </label>
        <input
          id="email"
          type="email"
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          :placeholder="emailPlaceholder"
        />
      </div>
    </div>
    <div>
      <label
        for="topic"
        class="mb-1 block text-sm font-medium text-foreground"
      >
        {{ topicLabel }}
      </label>
      <select
        id="topic"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
      >
        <option v-for="t in topics" :key="t">{{ t }}</option>
      </select>
    </div>
    <div>
      <label
        for="message"
        class="mb-1 block text-sm font-medium text-foreground"
      >
        {{ messageLabel }}
      </label>
      <textarea
        id="message"
        rows="5"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        :placeholder="messagePlaceholder"
      />
    </div>
    <button
      type="submit"
      class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
    >
      {{ sendMessage }}
    </button>
  </form>
</template>
