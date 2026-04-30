<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  const content = useIntlayer('settings-header');

  import MockBanner from "../../MockBanner.svelte";
</script>

<MockBanner />
<h1 class="mb-2 text-3xl font-bold text-foreground">{$content.settings}</h1>
<p class="mb-8 text-muted-foreground">{$content.manageYourAccountPreferencesAnd}</p>
