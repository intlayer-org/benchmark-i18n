<script lang="ts">
  import { m } from "../../../paraglide/messages";
  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<h1 class="mb-2 text-3xl font-bold text-foreground">{m.products_header_title()}</h1>
<p class="mb-10 text-muted-foreground">
  {m.products_header_description()}
</p>
