<script lang="ts">
  import { m } from "../paraglide/messages";
  import { pathname } from "$lib/routerStore";
  import { isLocale } from "$lib/i18n/config";

  const homeLocale = $derived.by(() => {
    const seg = $pathname.split("/").filter(Boolean)[0];
    return seg && isLocale(seg) ? seg : "en";
  });
</script>

<div class="flex min-h-[60vh] items-center justify-center bg-muted/30">
  <div class="text-center">
    <h1 class="mb-4 text-4xl font-bold">{m.notFound_title()}</h1>
    <p class="mb-4 text-xl text-muted-foreground">{m.notFound_description()}</p>
    <a
      href={`/${homeLocale}`}
      class="text-primary underline hover:text-primary/90"
    >
      {m.notFound_returnHome()}
    </a>
  </div>
</div>
