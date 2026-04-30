<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";

  const content = useIntlayer("about-grid");
</script>

<div class="grid gap-8 md:grid-cols-2">
  <div class="rounded-lg border border-border bg-card p-6">
    <h2 class="mb-3 text-xl font-semibold text-foreground">
      {$content.why.title}
    </h2>
    <p class="text-sm text-muted-foreground">
      {$content.why.description}
    </p>
  </div>
  <div class="rounded-lg border border-border bg-card p-6">
    <h2 class="mb-3 text-xl font-semibold text-foreground">
      {$content.methodology.title}
    </h2>
    <p class="text-sm text-muted-foreground">
      {$content.methodology.description}
    </p>
  </div>
</div>
