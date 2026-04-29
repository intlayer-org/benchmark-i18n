import { useIntlayer } from "react-intlayer";

export default function FAQList() {
  const { faqs } = useIntlayer("faq-list");

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((f, i) => (
        <details
          key={i}
          className="group rounded-lg border border-border bg-card"
        >
          <summary className="cursor-pointer px-6 py-4 text-sm font-medium text-foreground hover:bg-accent/50 transition-colors">
            {f.q}
          </summary>
          <p className="px-6 pb-4 text-sm text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
