<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('contact-form');

  const nameId = "contact-name";
  const emailId = "contact-email";
  const topicId = "contact-topic";
  const messageId = "contact-message";
</script>

<form class="space-y-6">
  <div class="grid gap-4 md:grid-cols-2">
    <div>
      <label
        for={nameId}
        class="mb-1 block text-sm font-medium text-foreground"
      >{$content.name}</label>
      <input
        id={nameId}
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"
        placeholder={$content.yourName}
      />
    </div>
    <div>
      <label
        for={emailId}
        class="mb-1 block text-sm font-medium text-foreground"
      >{$content.email}</label>
      <input
        id={emailId}
        type="email"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"
        placeholder="you@example.com"
      />
    </div>
  </div>
  <div>
    <label
      for={topicId}
      class="mb-1 block text-sm font-medium text-foreground"
    >{$content.topic}</label>
    <select
      id={topicId}
      class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"
    >
      <option>{$content.bugReport}</option>
      <option>{$content.newBenchmarkIdea}</option>
      <option>{$content.methodologyQuestion}</option>
      <option>{$content.contribution}</option>
      <option>{$content.other}</option>
    </select>
  </div>
  <div>
    <label
      for={messageId}
      class="mb-1 block text-sm font-medium text-foreground"
    >{$content.message}</label>
    <textarea
      id={messageId}
      rows={5}
      class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"
      placeholder={$content.describeYourQuestionOrIdea}
    ></textarea>
  </div>
  <button
    type="submit"
    class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
  >{$content.sendMessage}</button>
</form>
