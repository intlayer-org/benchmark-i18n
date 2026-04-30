<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";

  const banner = useIntlayer("mock-banner");
</script>

<div
  class="mb-6 rounded-md border border-border bg-muted px-4 py-3 text-center text-sm text-muted-foreground"
>
  {$banner.message}
</div>
