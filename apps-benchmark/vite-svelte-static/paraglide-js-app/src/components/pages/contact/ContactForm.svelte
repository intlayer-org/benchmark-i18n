<script lang="ts">
  import { m } from "../../../paraglide/messages";

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
      >
        {m.contact_form_name()}
      </label>
      <input
        id={nameId}
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"
        placeholder={m.contact_form_yourName()}
      />
    </div>
    <div>
      <label
        for={emailId}
        class="mb-1 block text-sm font-medium text-foreground"
      >
        {m.contact_form_email()}
      </label>
      <input
        id={emailId}
        type="email"
        class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"
        placeholder={m.contact_form_emailPlaceholder()}
      />
    </div>
  </div>
  <div>
    <label
      for={topicId}
      class="mb-1 block text-sm font-medium text-foreground"
    >
      {m.contact_form_topic()}
    </label>
    <select
      id={topicId}
      class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:ring-1 focus:ring-ring focus:outline-none"
    >
      <option>{m.contact_form_bugReport()}</option>
      <option>{m.contact_form_newBenchmarkIdea()}</option>
      <option>{m.contact_form_methodologyQuestion()}</option>
      <option>{m.contact_form_contribution()}</option>
      <option>{m.contact_form_other()}</option>
    </select>
  </div>
  <div>
    <label
      for={messageId}
      class="mb-1 block text-sm font-medium text-foreground"
    >
      {m.contact_form_message()}
    </label>
    <textarea
      id={messageId}
      rows={5}
      class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-none"
      placeholder={m.contact_form_messagePlaceholder()}
    ></textarea>
  </div>
  <button
    type="submit"
    class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
  >
    {m.contact_form_sendMessage()}
  </button>
</form>
