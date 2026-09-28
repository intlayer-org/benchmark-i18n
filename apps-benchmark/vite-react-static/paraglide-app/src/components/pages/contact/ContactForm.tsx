import * as m from "../../../paraglide/messages";
import { useId } from "react";

export default function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const topicId = useId();
  const messageId = useId();

  return (
    <form className="space-y-6" >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor={nameId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {m["profile-section.displayName"]()}
          </label>
          <input
            id={nameId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={m["contact-form.yourName"]()}
          />
        </div>
        <div>
          <label
            htmlFor={emailId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {m["profile-section.email"]()}
          </label>
          <input
            id={emailId}
            type="email"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor={topicId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {m["contact-form.topic"] ? m["contact-form.topic"]() : "Topic"}
        </label>
        <select
          id={topicId}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <option>{m["contact-form.bugReport"]()}</option>
          <option>{m["contact-form.newBenchmarkIdea"]()}</option>
          <option>{m["contact-form.methodologyQuestion"]()}</option>
          <option>
            {m["contact-form.contribution"]
              ? m["contact-form.contribution"]()
              : "Contribution"}
          </option>
          <option>
            {m["contact-form.other"] ? m["contact-form.other"]() : "Other"}
          </option>
        </select>
      </div>
      <div>
        <label
          htmlFor={messageId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {m["contact-form.message"] ? m["contact-form.message"]() : "Message"}
        </label>
        <textarea
          id={messageId}
          rows={5}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder={m["contact-form.describeYourQuestionOrIdea"]()}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {m["contact-form.sendMessage"]()}
      </button>
    </form>
  );
}
