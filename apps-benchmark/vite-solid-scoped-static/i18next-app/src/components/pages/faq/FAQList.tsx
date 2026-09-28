import { For } from "solid-js";
import { trans } from "../../../i18n";

export default function FAQList() {
  const faqIndices = [1, 2, 3, 4, 5, 6, 7, 8] as const;

  return (
    <div class="mx-auto max-w-3xl space-y-4">
      <For each={faqIndices}>
        {(i) => (
          <details class="group rounded-lg border border-border bg-card">
            <summary class="cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50">
              {trans(`faq.list.q${i}`)}
            </summary>
            <p class="px-6 pb-4 text-sm text-muted-foreground">
              {trans(`faq.list.a${i}`)}
            </p>
          </details>
        )}
      </For>
    </div>
  );
}
