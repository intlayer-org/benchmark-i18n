<script lang="ts">
  import { _ } from "svelte-i18n";
</script>

<div class="grid gap-8 md:grid-cols-2">
  <div class="rounded-lg border border-border bg-card p-6">
    <h2 class="mb-3 text-xl font-semibold text-foreground">
      {$_("about.grid.whyExistsTitle")}
    </h2>
    <p class="text-sm text-muted-foreground">
      {$_("about.grid.whyExistsDesc")}
    </p>
  </div>
  <div class="rounded-lg border border-border bg-card p-6">
    <h2 class="mb-3 text-xl font-semibold text-foreground">
      {$_("about.grid.methodologyTitle")}
    </h2>
    <p class="text-sm text-muted-foreground">
      {$_("about.grid.methodologyDesc")}
    </p>
  </div>
</div>
