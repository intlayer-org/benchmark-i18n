<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import { route } from "$lib/routerStore";

  const footer = useIntlayer("footer");

  const currentLocale = $derived(
    $route.kind === "ok" ? $route.locale : "en",
  );

  const footerLinks = $derived([
    {
      label: $footer.github,
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    {
      label: $footer.methodology,
      to: `/${currentLocale}/about`,
      isInternal: true,
    },
    {
      label: $footer.contributing,
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
          {$footer.appName}
        </h3>
        <p class="text-sm text-muted-foreground">
          {$footer.description}
        </p>
      </div>
      <div>
        <h3 class="mb-2 text-sm font-semibold text-foreground">
          {$footer.resources}
        </h3>
        <ul class="space-y-1">
          {#each footerLinks as linkEl, i (i)}
            <li>
              {#if linkEl.isInternal}
                <a
                  href={linkEl.to}
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {linkEl.label}
                </a>
              {:else}
                <a
                  href={linkEl.href}
                  target="_blank"
                  rel="noreferrer"
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {linkEl.label}
                </a>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
      <div>
        <h3 class="mb-2 text-sm font-semibold text-foreground">
          {$footer.contact}
        </h3>
        <p class="text-sm text-muted-foreground">{$footer.contactEmail}</p>
      </div>
    </div>
    <div
      class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground"
    >
      {$footer.footerText}
    </div>
  </div>
</footer>
