<script lang="ts">
  import { _ } from "svelte-i18n";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("AboutHeader");
</script>

<h1 class="mb-4 text-3xl font-bold text-foreground">
  {$_("about.header.title")}
</h1>
<p class="mb-8 max-w-3xl text-muted-foreground">
  {$_("about.header.description")}
</p>
