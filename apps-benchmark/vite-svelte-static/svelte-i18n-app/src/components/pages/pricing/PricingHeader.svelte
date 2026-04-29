<script lang="ts">
  import { _ } from "svelte-i18n";
  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<div class="mb-12 text-center">
  <h1 class="mb-3 text-3xl font-bold text-foreground">
    {$_("pricing.header.title")}
  </h1>
  <p class="text-muted-foreground">
    {$_("pricing.header.description")}
  </p>
</div>
