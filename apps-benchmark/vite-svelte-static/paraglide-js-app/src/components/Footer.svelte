<script lang="ts">
  import { m } from "../paraglide/messages";
  import { route } from "$lib/routerStore";

  const currentLocale = $derived(
    $route.kind === "ok" ? $route.locale : "en",
  );

  const footerLinks = $derived([
    {
      label: m.footer_github(),
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    { label: m.footer_methodology(), to: `/${currentLocale}/about`, isInternal: true },
    {
      label: m.footer_contributing(),
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
          {m.footer_title()}
        </h3>
        <p class="text-sm text-muted-foreground">
          {m.footer_description()}
        </p>
      </div>
      <div>
        <h3 class="mb-2 text-sm font-semibold text-foreground">{m.footer_resources()}</h3>
        <ul class="space-y-1">
          {#each footerLinks as linkEl (linkEl.label)}
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
        <h3 class="mb-2 text-sm font-semibold text-foreground">{m.footer_contact()}</h3>
        <p class="text-sm text-muted-foreground">{m.shared_contactEmail()}</p>
      </div>
    </div>
    <div
      class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground"
    >
      {m.footer_builtWith()}
    </div>
  </div>
</footer>
