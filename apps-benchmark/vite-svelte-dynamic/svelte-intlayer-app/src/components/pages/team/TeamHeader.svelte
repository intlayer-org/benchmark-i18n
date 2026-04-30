<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import MockBanner from "../../MockBanner.svelte";

  const content = useIntlayer("team-header");
</script>

<MockBanner />
<h1 class="mb-2 text-3xl font-bold text-foreground">
  {$content.title}
</h1>
<p class="mb-10 text-muted-foreground">
  {$content.description}
</p>
