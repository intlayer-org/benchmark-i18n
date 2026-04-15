import { useId } from "react";
import { useIntl } from "react-intl";

export default function ContactForm() {
  const intl = useIntl();
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
            {intl.formatMessage({ id: "contact-form.name" })}
          </label>
          <input
            id={nameId}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={intl.formatMessage({ id: "contact-form.yourName" })}
          />
        </div>
        <div>
          <label
            htmlFor={emailId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {intl.formatMessage({ id: "contact-form.email" })}
          </label>
          <input
            id={emailId}
            type="email"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder={intl.formatMessage({
              id: "contact-form.emailPlaceholder",
            })}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor={topicId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {intl.formatMessage({ id: "contact-form.topic" })}
        </label>
        <select
          id={topicId}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        >
          <option>
            {intl.formatMessage({ id: "contact-form.bugReport" })}
          </option>
          <option>
            {intl.formatMessage({ id: "contact-form.newBenchmarkIdea" })}
          </option>
          <option>
            {intl.formatMessage({ id: "contact-form.methodologyQuestion" })}
          </option>
          <option>
            {intl.formatMessage({ id: "contact-form.contribution" })}
          </option>
          <option>{intl.formatMessage({ id: "contact-form.other" })}</option>
        </select>
      </div>
      <div>
        <label
          htmlFor={messageId}
          className="mb-1 block text-sm font-medium text-foreground"
        >
          {intl.formatMessage({ id: "contact-form.message" })}
        </label>
        <textarea
          id={messageId}
          rows={5}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          placeholder={intl.formatMessage({
            id: "contact-form.describeYourQuestionOrIdea",
          })}
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        {intl.formatMessage({ id: "contact-form.sendMessage" })}
      </button>
    </form>
  );
}
