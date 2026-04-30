<script>
  import { useIntlayer } from 'svelte-intlayer';
  
  const content = useIntlayer('api-access-section');
</script>

<section class="rounded-lg border border-border bg-card p-6">
  <h2 class="mb-4 text-lg font-semibold text-foreground">{$content.apiAccess}</h2>
  <div>
    <label
      for="settings-api-key"
      class="mb-1 block text-sm font-medium text-foreground"
    >{$content.apiKey}</label>
    <div class="flex gap-2">
      <input
        id="settings-api-key"
        readonly
        value="sk_bench_xxxxxxxxxxxxxxxxxxxx"
        class="flex-1 rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground"
      />
      <button
        type="button"
        class="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
      >{$content.copy}</button>
    </div>
    <p class="mt-1 text-xs text-muted-foreground">{$content.useThisKeyToAccess}</p>
  </div>
</section>
