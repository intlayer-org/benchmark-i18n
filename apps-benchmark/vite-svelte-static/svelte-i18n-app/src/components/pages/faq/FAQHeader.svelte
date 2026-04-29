<script lang="ts">
  import { _ } from "svelte-i18n";
  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<h1 class="mb-2 text-3xl font-bold text-foreground">
  {$_("faq.header.title")}
</h1>
<p class="mb-10 text-muted-foreground">
  {$_("faq.header.description")}
</p>
