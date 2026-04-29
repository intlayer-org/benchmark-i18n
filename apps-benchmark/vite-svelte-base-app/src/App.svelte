<script lang="ts">
  import Layout from "./components/Layout.svelte";
  import { route } from "./lib/routerStore";
  import About from "./pages/About.svelte";
  import Blog from "./pages/Blog.svelte";
  import Careers from "./pages/Careers.svelte";
  import Contact from "./pages/Contact.svelte";
  import FAQ from "./pages/FAQ.svelte";
  import Home from "./pages/Home.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Pricing from "./pages/Pricing.svelte";
  import Products from "./pages/Products.svelte";
  import Settings from "./pages/Settings.svelte";
  import Team from "./pages/Team.svelte";
</script>

{#if $route.kind === "ok"}
  <Layout locale={$route.locale}>
    {#if $route.page === ""}
      <Home />
    {:else if $route.page === "about"}
      <About />
    {:else if $route.page === "blog"}
      <Blog />
    {:else if $route.page === "careers"}
      <Careers />
    {:else if $route.page === "contact"}
      <Contact />
    {:else if $route.page === "faq"}
      <FAQ />
    {:else if $route.page === "pricing"}
      <Pricing />
    {:else if $route.page === "products"}
      <Products />
    {:else if $route.page === "settings"}
      <Settings />
    {:else if $route.page === "team"}
      <Team />
    {/if}
  </Layout>
{:else}
  <NotFound />
{/if}
