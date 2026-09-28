import { T, useTranslate } from "../../../i18n/config";
import { useId } from "react";

export default function ContactForm() {
  const { t } = useTranslate();
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
            <T keyName="contactForm.name" />
          </label>
          <input
            id={nameId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={t("contactForm.yourName")}
          />
        </div>
        <div>
          <label
            htmlFor={emailId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            <T keyName="contactForm.email" />
          </label>
          <input
            id={emailId}
            type="email"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={t("contactForm.emailPlaceholder")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor={topicId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          <T keyName="contactForm.topic" />
        </label>
        <select
          id={topicId}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <option>{t("contactForm.bugReport")}</option>
          <option>
            {t("contactForm.newBenchmarkIdea")}
          </option>
          <option>
            {t("contactForm.methodologyQuestion")}
          </option>
          <option>{t("contactForm.contribution")}</option>
          <option>{t("contactForm.other")}</option>
        </select>
      </div>
      <div>
        <label
          htmlFor={messageId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          <T keyName="contactForm.message" />
        </label>
        <textarea
          id={messageId}
          rows={5}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder={t(
            "contactForm.messagePlaceholder")}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        <T keyName="contactForm.sendMessage" />
      </button>
    </form>
  );
}
