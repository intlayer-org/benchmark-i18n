<script lang="ts">
  import { m } from "../../../paraglide/messages";
  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<h1 class="mb-2 text-3xl font-bold text-foreground">{m.contact_header_title()}</h1>
<p class="mb-8 text-muted-foreground">
  {m.contact_header_description()}
  <a
    href={`mailto:${m.shared_contactEmail()}`}
    class="text-primary hover:underline"
  >
    {m.shared_contactEmail()}
  </a>
  .
</p>
