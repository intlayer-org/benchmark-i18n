"use client";

import { useId } from "react";
import { useI18n } from "../../../locales/client";

export default function ContactForm() {
  const t = useI18n();
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
            {t("contact.contact-form.nameLabel")}
          </label>
          <input
            id={nameId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={t("contact.contact-form.yourName")}
          />
        </div>
        <div>
          <label
            htmlFor={emailId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {t("contact.contact-form.emailLabel")}
          </label>
          <input
            id={emailId}
            type="email"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={t("contact.contact-form.emailPlaceholder")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor={topicId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {t("contact.contact-form.topicLabel")}
        </label>
        <select
          id={topicId}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <option>{t("contact.contact-form.bugReport")}</option>
          <option>{t("contact.contact-form.newBenchmarkIdea")}</option>
          <option>{t("contact.contact-form.methodologyQuestion")}</option>
          <option>{t("header.contact")}</option>
          <option>{t("contact.contact-form.topicOther")}</option>
        </select>
      </div>
      <div>
        <label
          htmlFor={messageId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {t("contact.contact-form.messageLabel")}
        </label>
        <textarea
          id={messageId}
          rows={5}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder={t("contact.contact-form.describeYourQuestionOrIdea")}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {t("contact.contact-form.sendMessage")}
      </button>
    </form>
  );
}
