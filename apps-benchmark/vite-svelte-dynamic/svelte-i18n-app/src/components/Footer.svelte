<script lang="ts">
  import { _ } from "svelte-i18n";
  import { route } from "$lib/routerStore";

  const currentLocale = $derived(
    $route.kind === "ok" ? $route.locale : "en",
  );

  const footerLinks = $derived([
    {
      msg: "footer.github" as const,
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      msg: "footer.methodology" as const,
      to: `/${currentLocale}/about`,
      isInternal: true,
    },
    {
      msg: "footer.contributing" as const,
      to: `/${currentLocale}/contact`,
      isInternal: true,
    },
  ]);
</script>

<footer class="mt-20 border-t border-border bg-card">
  <div class="container py-8">
    <div class="grid gap-8 md:grid-cols-3">
      <div>
        <h3 class="mb-2 text-sm font-semibold text-foreground">
          {$_("footer.title")}
        </h3>
        <p class="text-sm text-muted-foreground">
          {$_("footer.description")}
        </p>
      </div>
      <div>
        <h3 class="mb-2 text-sm font-semibold text-foreground">
          {$_("footer.resources")}
        </h3>
        <ul class="space-y-1">
          {#each footerLinks as linkEl (linkEl.msg)}
            <li>
              {#if linkEl.isInternal}
                <a
                  href={linkEl.to}
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {$_(linkEl.msg)}
                </a>
              {:else}
                <a
                  href={linkEl.href}
                  target="_blank"
                  rel="noreferrer"
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {$_(linkEl.msg)}
                </a>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="mb-2 text-sm font-semibold text-foreground">
          {$_("footer.contact")}
        </h3>
        <p class="text-sm text-muted-foreground">{$_("shared.contactEmail")}</p>
      </div>
    </div>
    <div
      class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground"
    >
      {$_("footer.builtWith")}
    </div>
  </div>
</footer>
