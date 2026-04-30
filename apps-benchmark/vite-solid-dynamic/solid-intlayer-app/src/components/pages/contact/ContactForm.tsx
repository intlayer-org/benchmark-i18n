import { useIntlayer } from 'solid-intlayer';
import { createUniqueId } from 'solid-js';

export default function ContactForm() {
  const content = useIntlayer('contact-form');

  const nameId = createUniqueId();
  const emailId = createUniqueId();
  const topicId = createUniqueId();
  const messageId = createUniqueId();

  return (
    <form class="space-y-6">
      <div class="grid gap-4 md:grid-cols-2">
        <div>
          <label
            for={nameId}
            class="mb-1 block text-sm font-medium text-foreground"
          >
            {content().name}
          </label>
          <input
            id={nameId}
            class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={content().yourName.value}
          />
        </div>
        <div>
          <label
            for={emailId}
            class="mb-1 block text-sm font-medium text-foreground"
          >
            {content().email}
          </label>
          <input
            id={emailId}
            type="email"
            class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label
          for={topicId}
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {content().topic}
        </label>
        <select
          id={topicId}
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <option>{content().bugReport}</option>
          <option>{content().newBenchmarkIdea}</option>
          <option>{content().methodologyQuestion}</option>
          <option>{content().contribution}</option>
          <option>{content().other}</option>
        </select>
      </div>
      <div>
        <label
          for={messageId}
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {content().message}
        </label>
        <textarea
          id={messageId}
          rows={5}
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder={content().describeYourQuestionOrIdea.value}
        />
      </div>
      <button
        type="submit"
        class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {content().sendMessage}
      </button>
    </form>
  );
}
