"use client";

import { useId } from "react";
import { useScopedI18n } from "../../../locales/client";

export default function ContactForm() {
  const scopedT = useScopedI18n("contact-form");
  const nameId = useId();
  const emailId = useId();
  const topicId = useId();
  const messageId = useId();

  return (
    <form className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor={nameId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {scopedT("name")}
          </label>
          <input
            id={nameId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={scopedT("yourName")}
          />
        </div>
        <div>
          <label
            htmlFor={emailId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {scopedT("email")}
          </label>
          <input
            id={emailId}
            type="email"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={scopedT("emailPlaceholder")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor={topicId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {scopedT("topic")}
        </label>
        <select
          id={topicId}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <option>{scopedT("bugReport")}</option>
          <option>{scopedT("newBenchmarkIdea")}</option>
          <option>{scopedT("methodologyQuestion")}</option>
          <option>{scopedT("contribution")}</option>
          <option>{scopedT("other")}</option>
        </select>
      </div>
      <div>
        <label
          htmlFor={messageId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {scopedT("message")}
        </label>
        <textarea
          id={messageId}
          rows={5}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder={scopedT("describeYourQuestionOrIdea")}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {scopedT("sendMessage")}
      </button>
    </form>
  );
}
