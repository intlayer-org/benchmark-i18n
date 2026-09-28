import { For } from "solid-js";
import { trans } from "../../../i18n";

export default function BlogList() {
  const postIndices = [1, 2, 3, 4, 5, 6] as const;

  return (
    <div class="grid gap-6 md:grid-cols-2">
      <For each={postIndices}>
        {(i) => (
          <article class="rounded-lg border border-border bg-card p-6">
            <div class="mb-3 flex items-center gap-3">
              <span class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
                {trans(`blog.list.post${i}Category`)}
              </span>
              <span class="text-xs text-muted-foreground">
                {trans(`blog.list.post${i}Date`)}
              </span>
            </div>
            <h2 class="mb-2 text-lg font-semibold text-foreground">
              {trans(`blog.list.post${i}Title`)}
            </h2>
            <p class="mb-4 text-sm text-muted-foreground">
              {trans(`blog.list.post${i}Excerpt`)}
            </p>
            <button
              type="button"
              class="text-sm font-medium text-primary hover:underline"
            >
              {trans("blog.list.readMore")}
            </button>
          </article>
        )}
      </For>
    </div>
  );
}
