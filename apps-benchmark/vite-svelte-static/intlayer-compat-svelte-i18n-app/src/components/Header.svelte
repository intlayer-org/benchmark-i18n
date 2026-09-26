<script lang="ts">
  import { _ } from "svelte-i18n";
  import ChevronDown from "lucide-svelte/icons/chevron-down";
  import { usePerformanceMeasure } from "$lib/performanceMeasure";
  import { route } from "$lib/routerStore";
  import LocaleSwitcher from "./LocaleSwitcher.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";

  usePerformanceMeasure("Header");

  let isMockPagesOpen = $state(false);

  const currentLocale = $derived(
    $route.kind === "ok" ? $route.locale : "en",
  );

  const mockPages = $derived([
    { to: `/${currentLocale}/products`, msg: "header.products" as const },
    { to: `/${currentLocale}/pricing`, msg: "header.pricing" as const },
    { to: `/${currentLocale}/team`, msg: "header.team" as const },
    { to: `/${currentLocale}/blog`, msg: "header.blog" as const },
    { to: `/${currentLocale}/careers`, msg: "header.careers" as const },
    { to: `/${currentLocale}/faq`, msg: "header.faq" as const },
    { to: `/${currentLocale}/contact`, msg: "header.contact" as const },
    { to: `/${currentLocale}/settings`, msg: "header.settings" as const },
  ]);

  const homeActive = $derived(
    $route.kind === "ok" && $route.page === "",
  );
  const methodologyActive = $derived(
    $route.kind === "ok" && $route.page === "about",
  );
</script>

<header
  class="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg"
>
  <nav class="container flex h-16 items-center justify-between">
    <div class="flex items-center gap-8">
      <a
        href={`/${currentLocale}`}
        class="text-lg font-bold tracking-tight text-primary no-underline"
      >
        {$_("shared.appName")}
      </a>

      <div class="hidden items-center gap-6 text-sm font-medium md:flex">
        <a
          href={`/${currentLocale}`}
          class="nav-link"
          class:is-active={homeActive}
        >
          {$_("header.home")}
        </a>
        <a
          href={`/${currentLocale}/about`}
          class="nav-link"
          class:is-active={methodologyActive}
        >
          {$_("header.methodology")}
        </a>

        <div class="relative">
          <button
            type="button"
            class="nav-link flex cursor-pointer items-center gap-1 border-none bg-transparent"
            onmouseenter={() => (isMockPagesOpen = true)}
            onmouseleave={() => (isMockPagesOpen = false)}
            onclick={() => (isMockPagesOpen = !isMockPagesOpen)}
          >
            {$_("header.mockPages")}
            <ChevronDown
              size={14}
              class={isMockPagesOpen
                ? "transition-transform rotate-180"
                : "transition-transform"}
            />
          </button>

          {#if isMockPagesOpen}
            <div
              class="absolute top-full left-0 w-48 pt-2"
              onmouseenter={() => (isMockPagesOpen = true)}
              onmouseleave={() => (isMockPagesOpen = false)}
              role="presentation"
            >
              <div
                class="overflow-hidden rounded-md border border-border bg-card py-1 shadow-lg"
              >
                {#each mockPages as page (page.to)}
                  <a
                    href={page.to}
                    class="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent"
                    onclick={() => (isMockPagesOpen = false)}
                  >
                    {$_(page.msg)}
                  </a>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <a
        href="https://github.com/intlayer-org/benchmark-i18n"
        target="_blank"
        rel="noreferrer"
        class="text-muted-foreground transition hover:text-foreground"
      >
        <span class="sr-only">{$_("shared.goToGithub")}</span>
        <svg viewBox="0 0 16 16" aria-hidden="true" width="20" height="20">
          <path
            fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
        </svg>
      </a>
      <LocaleSwitcher />
      <ThemeToggle />
    </div>
  </nav>
</header>
