<script lang="ts">
  import { _ } from "$lib/i18n/tolgee";
  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<h1 class="mb-2 text-3xl font-bold text-foreground">
  {$_("careers.header.title")}
</h1>
<p class="mb-4 text-muted-foreground">
  {$_("careers.header.description")}
</p>
