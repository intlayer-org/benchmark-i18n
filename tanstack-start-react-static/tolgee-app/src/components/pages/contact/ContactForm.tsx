import { T, useTranslate } from "@tolgee/react";
import { useId } from "react";

export default function ContactForm() {
  const { t } = useTranslate();
  const nameId = useId();
  const emailId = useId();
  const topicId = useId();
  const messageId = useId();

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor={nameId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            <T keyName="contactForm.name" defaultValue="Name" />
          </label>
          <input
            id={nameId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={t("contactForm.yourName", "Your name")}
          />
        </div>
        <div>
          <label
            htmlFor={emailId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            <T keyName="contactForm.email" defaultValue="Email" />
          </label>
          <input
            id={emailId}
            type="email"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={t("contactForm.emailPlaceholder", "you@example.com")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor={topicId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          <T keyName="contactForm.topic" defaultValue="Topic" />
        </label>
        <select
          id={topicId}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <option>{t("contactForm.bugReport", "Bug Report")}</option>
          <option>
            {t("contactForm.newBenchmarkIdea", "New Benchmark Idea")}
          </option>
          <option>
            {t("contactForm.methodologyQuestion", "Methodology Question")}
          </option>
          <option>{t("contactForm.contribution", "Contribution")}</option>
          <option>{t("contactForm.other", "Other")}</option>
        </select>
      </div>
      <div>
        <label
          htmlFor={messageId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          <T keyName="contactForm.message" defaultValue="Message" />
        </label>
        <textarea
          id={messageId}
          rows={5}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder={t(
            "contactForm.messagePlaceholder",
            "Describe your question or idea..."
          )}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        <T keyName="contactForm.sendMessage" defaultValue="Send Message" />
      </button>
    </form>
  );
}
