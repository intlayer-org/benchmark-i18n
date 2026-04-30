<script>
  import { useIntlayer } from 'svelte-intlayer';
  
  const content = useIntlayer('settings-footer');
</script>

<div class="flex justify-end gap-3">
  <button
    type="button"
    class="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
  >{$content.cancel}</button>
  <button
    type="submit"
    class="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
  >{$content.saveChanges}</button>
</div>
