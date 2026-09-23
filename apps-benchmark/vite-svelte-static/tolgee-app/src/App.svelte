<script lang="ts">
  import Layout from "./components/Layout.svelte";
  import { route } from "./lib/routerStore";

  // Eager load Home (initial landing page)
  import Home from "./pages/Home.svelte";
  import NotFound from "./pages/NotFound.svelte";

  // Lazy load map for other routes to create separate bundles per page
  const lazyPages: Record<string, () => Promise<{ default: typeof import("*.svelte").default }>> = {
    about: () => import("./pages/About.svelte"),
    blog: () => import("./pages/Blog.svelte"),
    careers: () => import("./pages/Careers.svelte"),
    contact: () => import("./pages/Contact.svelte"),
    faq: () => import("./pages/FAQ.svelte"),
    pricing: () => import("./pages/Pricing.svelte"),
    products: () => import("./pages/Products.svelte"),
    settings: () => import("./pages/Settings.svelte"),
    team: () => import("./pages/Team.svelte"),
  };

  // Reactive: resolve the lazy page promise when route changes
  let pagePromise: Promise<{ default: any }> | null = null;
  $: if ($route.kind === "ok" && $route.page !== "" && lazyPages[$route.page]) {
    pagePromise = lazyPages[$route.page]();
  } else {
    pagePromise = null;
  }
</script>

{#if $route.kind === "ok"}
  <Layout locale={$route.locale}>
    {#if $route.page === ""}
      <Home />
    {:else if pagePromise}
      {#await pagePromise}
        <div>Loading...</div>
      {:then module}
        <svelte:component this={module.default} />
      {/await}
    {/if}
  </Layout>
{:else}
  <NotFound />
{/if}
