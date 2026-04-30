<script lang="ts">
  import { m } from "../../../paraglide/messages";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";

  usePerformanceMeasure("AboutHeader");
</script>

<h1 class="mb-4 text-3xl font-bold text-foreground">
  {m.about_header_title()}
</h1>
<p class="mb-8 max-w-3xl text-muted-foreground">
  {m.about_header_description()}
</p>
