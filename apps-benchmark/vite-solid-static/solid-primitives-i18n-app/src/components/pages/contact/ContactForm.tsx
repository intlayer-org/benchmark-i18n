import { For, createUniqueId } from "solid-js";
import { t } from "../../../i18n";

const TOPICS = [
  "bugReport",
  "newBenchmarkIdea",
  "methodologyQuestion",
  "contribution",
  "other",
] as const;

export default function ContactForm() {
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
            {t("contact.form.name")}
          </label>
          <input
            id={nameId}
            class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={t("contact.form.yourName")}
          />
        </div>
        <div>
          <label
            for={emailId}
            class="mb-1 block text-sm font-medium text-foreground"
          >
            {t("contact.form.email")}
          </label>
          <input
            id={emailId}
            type="email"
            class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={t("contact.form.emailPlaceholder")}
          />
        </div>
      </div>
      <div>
        <label
          for={topicId}
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {t("contact.form.topic")}
        </label>
        <select
          id={topicId}
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <For each={TOPICS}>
            {(topic) => (
              <option value={topic}>{t(`contact.form.${topic}`)}</option>
            )}
          </For>
        </select>
      </div>
      <div>
        <label
          for={messageId}
          class="mb-1 block text-sm font-medium text-foreground"
        >
          {t("contact.form.message")}
        </label>
        <textarea
          id={messageId}
          rows={5}
          class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder={t("contact.form.messagePlaceholder")}
        />
      </div>
      <button
        type="submit"
        class="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {t("contact.form.sendMessage")}
      </button>
    </form>
  );
}
