<script>
  import { useIntlayer } from 'svelte-intlayer';
  
  const content = useIntlayer('not-found');
</script>

<div class="flex min-h-[60vh] items-center justify-center bg-muted/30">
  <div class="text-center">
    <h1 class="mb-4 text-4xl font-bold">404</h1>
    <p class="mb-4 text-xl text-muted-foreground">{$content.oopsPageNotFound}</p>
    <a href="/en" class="text-primary underline hover:text-primary/90">{$content.returnToHome}</a>
  </div>
</div>
