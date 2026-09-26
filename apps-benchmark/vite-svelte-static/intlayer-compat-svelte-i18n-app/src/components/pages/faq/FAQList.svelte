<script lang="ts">
  import { _ } from "svelte-i18n";

  const faqNums = [1, 2, 3, 4, 5, 6, 7, 8] as const;
</script>

<div class="mx-auto max-w-3xl space-y-4">
  {#each faqNums as n (n)}
    <details class="group rounded-lg border border-border bg-card">
      <summary
        class="cursor-pointer px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent/50"
      >
        {$_(`faq.list.q${n}`)}
      </summary>
      <p class="px-6 pb-4 text-sm text-muted-foreground">
        {$_(`faq.list.a${n}`)}
      </p>
    </details>
  {/each}
</div>
