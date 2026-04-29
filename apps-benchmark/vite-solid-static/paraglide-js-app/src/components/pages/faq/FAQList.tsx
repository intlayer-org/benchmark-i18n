import { For } from "solid-js";
import * as m from "../../../paraglide/messages";

export default function FAQList() {
  const faqNums = [1, 2, 3, 4, 5, 6, 7, 8] as const;
  const faqs = faqNums.map((i) => ({
    q: (m[`faq_list_q${i}` as keyof typeof m] as any)?.(),
    a: (m[`faq_list_a${i}` as keyof typeof m] as any)?.(),
  }));

  return (
    <div class="mx-auto max-w-3xl space-y-4">
      <For each={faqs}>
        {(f) => (
          <details class="group rounded-lg border border-border bg-card">
            <summary class="cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50">
              {f.q}
            </summary>
            <p class="px-6 pb-4 text-sm text-muted-foreground">{f.a}</p>
          </details>
        )}
      </For>
    </div>
  );
}
