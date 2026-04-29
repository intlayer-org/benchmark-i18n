<script lang="ts">
  import { _ } from "svelte-i18n";

  const nameId = "contact-name";
  const emailId = "contact-email";
  const topicId = "contact-topic";
  const messageId = "contact-message";

  const topics = [
    "bugReport",
    "newBenchmarkIdea",
    "methodologyQuestion",
    "contribution",
    "other",
  ] as const;
</script>

<form class="space-y-6">
  <div class="grid gap-4 md:grid-cols-2">
    <div>
      <label
        for={nameId}
        class="mb-1 block text-sm font-medium text-foreground"
      >
        {$_("contact.form.name")}
      </label>
      <input
        id={nameId}
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"
        placeholder={$_("contact.form.yourName")}
      />
    </div>
    <div>
      <label
        for={emailId}
        class="mb-1 block text-sm font-medium text-foreground"
      >
        {$_("contact.form.email")}
      </label>
      <input
        id={emailId}
        type="email"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"
        placeholder={$_("contact.form.emailPlaceholder")}
      />
    </div>
  </div>
  <div>
    <label
      for={topicId}
      class="mb-1 block text-sm font-medium text-foreground"
    >
      {$_("contact.form.topic")}
    </label>
    <select
      id={topicId}
      class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"
    >
      {#each topics as t (t)}
        <option value={t}>{$_(`contact.form.${t}`)}</option>
      {/each}
    </select>
  </div>
  <div>
    <label
      for={messageId}
      class="mb-1 block text-sm font-medium text-foreground"
    >
      {$_("contact.form.message")}
    </label>
    <textarea
      id={messageId}
      rows={5}
      class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"
      placeholder={$_("contact.form.messagePlaceholder")}
    ></textarea>
  </div>
  <button
    type="submit"
    class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
  >
    {$_("contact.form.sendMessage")}
  </button>
</form>
