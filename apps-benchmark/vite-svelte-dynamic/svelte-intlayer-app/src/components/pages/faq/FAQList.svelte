<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";

  const content = useIntlayer("faq-list");
</script>

<div class="mx-auto max-w-3xl space-y-4">
  {#each $content.faqs as f, idx (idx)}
    <details class="group rounded-lg border border-border bg-card">
      <summary
        class="cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"
      >
        {f.q}
      </summary>
      <p class="px-6 pb-4 text-sm text-muted-foreground">{f.a}</p>
    </details>
  {/each}
</div>
