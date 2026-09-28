<script lang="ts">
  import { route } from "$lib/routerStore";

  const currentLocale = $derived(
    $route.kind === "ok" ? $route.locale : "en",
  );

  const footerLinks = $derived([
    {
      label: "GitHub",
      href: "https://github.com/intlayer-org/benchmark-i18n",
      isInternal: false,
    },
    { label: "Methodology", to: `/${currentLocale}/about`, isInternal: true },
    {
      label: "Contributing",
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
          i18n Benchmark
        </h3>
        <p class="text-sm text-muted-foreground">
          An open-source test application for measuring the real-world impact of
          internationalization libraries on bundle size, loading time, and app
          reactivity.
        </p>
      </div>
      <div>
        <h3 class="mb-2 text-sm font-semibold text-foreground">Resources</h3>
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
        <h3 class="mb-2 text-sm font-semibold text-foreground">Contact</h3>
        <p class="text-sm text-muted-foreground">contact@intlayer.org</p>
      </div>
    </div>
    <div
      class="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground"
    >
      i18n Benchmark — Open-source project. Built with Svelte, Vite, and a
      client-side router.
    </div>
  </div>
</footer>
