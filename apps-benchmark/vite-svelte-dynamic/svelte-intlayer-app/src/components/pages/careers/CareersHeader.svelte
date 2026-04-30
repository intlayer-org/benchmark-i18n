<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('careers-header');

  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<h1 class="mb-2 text-3xl font-bold text-foreground">{$content.careers}</h1>
<p class="mb-4 text-muted-foreground">{$content.joinOurMissionToImprove}</p>
