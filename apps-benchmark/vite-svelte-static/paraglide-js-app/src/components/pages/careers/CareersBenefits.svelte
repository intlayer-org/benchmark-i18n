<script lang="ts">
  import { m } from "../../../paraglide/messages";
  import { route } from "$lib/routerStore";

  const currentLocale = $derived(
    $route.kind === "ok" ? $route.locale : "en",
  );

  const benefits = $derived.by(() => {
    void currentLocale;
    return [
      {
        label: m.careers_benefits_remoteLabel(),
        value: m.careers_benefits_remoteValue(),
      },
      {
        label: m.careers_benefits_payLabel(),
        value: m.careers_benefits_payValue(),
      },
      {
        label: m.careers_benefits_ossLabel(),
        value: m.careers_benefits_ossValue(),
      },
    ];
  });
</script>

<div class="mb-12 grid gap-4 md:grid-cols-3">
  {#each benefits as b, i (i)}
    <div class="rounded-lg border border-border bg-card p-4 text-center">
      <p class="text-sm font-semibold text-foreground">{b.label}</p>
      <p class="text-xs text-muted-foreground">{b.value}</p>
    </div>
  {/each}
</div>
