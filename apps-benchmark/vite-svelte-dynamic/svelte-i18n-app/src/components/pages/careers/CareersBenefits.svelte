<script lang="ts">
  import { _ } from "svelte-i18n";

  const benefitKeys = [
    { label: "remoteLabel", value: "remoteValue" },
    { label: "payLabel", value: "payValue" },
    { label: "ossLabel", value: "ossValue" },
  ] as const;
</script>

<div class="mb-12 grid gap-4 md:grid-cols-3">
  {#each benefitKeys as b (`${b.label}-${b.value}`)}
    <div class="rounded-lg border border-border bg-card p-4 text-center">
      <p class="text-sm font-semibold text-foreground">
        {$_(`careers.benefits.${b.label}`)}
      </p>
      <p class="text-xs text-muted-foreground">
        {$_(`careers.benefits.${b.value}`)}
      </p>
    </div>
  {/each}
</div>
