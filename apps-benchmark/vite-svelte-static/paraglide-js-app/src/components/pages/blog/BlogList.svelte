<script lang="ts">
  import { m } from "../../../paraglide/messages";
  import { route } from "$lib/routerStore";

  const currentLocale = $derived(
    $route.kind === "ok" ? $route.locale : "en",
  );

  const posts = $derived.by(() => {
    void currentLocale;
    return [
      {
        title: m.blog_list_post1Title(),
        date: m.blog_list_post1Date(),
        excerpt: m.blog_list_post1Excerpt(),
        category: m.blog_list_post1Category(),
      },
      {
        title: m.blog_list_post2Title(),
        date: m.blog_list_post2Date(),
        excerpt: m.blog_list_post2Excerpt(),
        category: m.blog_list_post2Category(),
      },
      {
        title: m.blog_list_post3Title(),
        date: m.blog_list_post3Date(),
        excerpt: m.blog_list_post3Excerpt(),
        category: m.blog_list_post3Category(),
      },
      {
        title: m.blog_list_post4Title(),
        date: m.blog_list_post4Date(),
        excerpt: m.blog_list_post4Excerpt(),
        category: m.blog_list_post4Category(),
      },
      {
        title: m.blog_list_post5Title(),
        date: m.blog_list_post5Date(),
        excerpt: m.blog_list_post5Excerpt(),
        category: m.blog_list_post5Category(),
      },
      {
        title: m.blog_list_post6Title(),
        date: m.blog_list_post6Date(),
        excerpt: m.blog_list_post6Excerpt(),
        category: m.blog_list_post6Category(),
      },
    ];
  });
</script>

<div class="grid gap-6 md:grid-cols-2">
  {#each posts as p, i (i)}
    <article class="rounded-lg border border-border bg-card p-6">
      <div class="mb-3 flex items-center gap-3">
        <span
          class="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground"
        >
          {p.category}
        </span>
        <span class="text-xs text-muted-foreground">{p.date}</span>
      </div>
      <h2 class="mb-2 text-lg font-semibold text-foreground">{p.title}</h2>
      <p class="mb-4 text-sm text-muted-foreground">{p.excerpt}</p>
      <button
        type="button"
        class="text-sm font-medium text-primary hover:underline"
      >
        {m.blog_list_readMore()}
      </button>
    </article>
  {/each}
</div>
