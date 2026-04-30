<script lang="ts">
  import { m } from "../../../paraglide/messages";
  import { route } from "$lib/routerStore";

  const currentLocale = $derived(
    $route.kind === "ok" ? $route.locale : "en",
  );

  const openings = $derived.by(() => {
    void currentLocale;
    return [
      {
        title: m.careers_openPositions_frontendTitle(),
        location: m.careers_openPositions_remote(),
        type: m.careers_openPositions_fullTime(),
        dept: m.careers_openPositions_engineering(),
        desc: m.careers_openPositions_frontendDesc(),
      },
      {
        title: m.careers_openPositions_backendTitle(),
        location: m.careers_openPositions_remote(),
        type: m.careers_openPositions_fullTime(),
        dept: m.careers_openPositions_engineering(),
        desc: m.careers_openPositions_backendDesc(),
      },
      {
        title: m.careers_openPositions_writerTitle(),
        location: m.careers_openPositions_remote(),
        type: m.careers_openPositions_partTime(),
        dept: m.careers_openPositions_documentation(),
        desc: m.careers_openPositions_writerDesc(),
      },
      {
        title: m.careers_openPositions_devrelTitle(),
        location: m.careers_openPositions_sfRemote(),
        type: m.careers_openPositions_fullTime(),
        dept: m.careers_openPositions_community(),
        desc: m.careers_openPositions_devrelDesc(),
      },
      {
        title: m.careers_openPositions_qaTitle(),
        location: m.careers_openPositions_remote(),
        type: m.careers_openPositions_fullTime(),
        dept: m.careers_openPositions_engineering(),
        desc: m.careers_openPositions_qaDesc(),
      },
    ];
  });
</script>

<h2 class="mb-6 text-2xl font-bold text-foreground">
  {m.careers_openPositions_title()}
</h2>
<div class="space-y-4">
  {#each openings as o, i (i)}
    <div
      class="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h3 class="text-base font-semibold text-foreground">{o.title}</h3>
        <p class="text-sm text-muted-foreground">{o.desc}</p>
        <div class="mt-2 flex gap-2">
          <span
            class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"
          >
            {o.dept}
          </span>
          <span
            class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"
          >
            {o.location}
          </span>
          <span
            class="rounded bg-accent px-2 py-0.5 text-xs text-accent-foreground"
          >
            {o.type}
          </span>
        </div>
      </div>
      <button
        type="button"
        class="shrink-0 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {m.careers_openPositions_applyNow()}
      </button>
    </div>
  {/each}
</div>
