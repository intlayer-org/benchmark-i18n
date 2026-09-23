<script lang="ts">
  import { _ } from "$lib/i18n/tolgee";
  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<h1 class="mb-2 text-3xl font-bold text-foreground">
  {$_("contact.header.title")}
</h1>
<p class="mb-8 text-muted-foreground">
  {$_("contact.header.description")}
  <a href="mailto:contact@intlayer.org" class="text-primary hover:underline">
    {$_("shared.contactEmail")}
  </a>.
</p>
