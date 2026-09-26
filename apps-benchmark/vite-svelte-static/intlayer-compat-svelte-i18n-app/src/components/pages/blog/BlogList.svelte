<script lang="ts">
  import { _ } from "svelte-i18n";

  const postNums = [1, 2, 3, 4, 5, 6] as const;
</script>

<div class="grid gap-6 md:grid-cols-2">
  {#each postNums as n (n)}
    <article class="rounded-lg border border-border bg-card p-6">
      <div class="mb-3 flex items-center gap-3">
        <span
          class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"
        >
          {$_(`blog.list.post${n}Category`)}
        </span>
        <span class="text-xs text-muted-foreground"
          >{$_(`blog.list.post${n}Date`)}</span
        >
      </div>
      <h2 class="mb-2 text-lg font-semibold text-foreground">
        {$_(`blog.list.post${n}Title`)}
      </h2>
      <p class="mb-4 text-sm text-muted-foreground">
        {$_(`blog.list.post${n}Excerpt`)}
      </p>
      <button
        type="button"
        class="text-sm font-medium text-primary hover:underline"
      >
        {$_("blog.list.readMore")}
      </button>
    </article>
  {/each}
</div>
