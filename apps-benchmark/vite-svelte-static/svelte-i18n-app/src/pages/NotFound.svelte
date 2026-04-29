<script lang="ts">
  import { _ } from "svelte-i18n";
  import { pathname } from "../lib/routerStore";
  import { isLocale } from "../lib/i18n/config";

  function homeHref(p: string): string {
    const first = p.split("/").filter(Boolean)[0];
    const loc = first && isLocale(first) ? first : "en";
    return `/${loc}`;
  }
</script>

<div class="flex min-h-[60vh] items-center justify-center bg-muted/30">
  <div class="text-center">
    <h1 class="mb-4 text-4xl font-bold">{$_("notFound.title")}</h1>
    <p class="mb-4 text-xl text-muted-foreground">
      {$_("notFound.description")}
    </p>
    <a
      href={homeHref($pathname)}
      class="text-primary underline hover:text-primary/90"
    >
      {$_("notFound.returnHome")}
    </a>
  </div>
</div>
